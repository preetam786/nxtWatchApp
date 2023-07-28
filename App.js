import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'
import ActiveMenuContext from './context/ActiveMenuContext'
import SavedVideosContext from './context/SavedVideosContext'

import './App.css'

class App extends Component {
  state = {
    activeDarkTheme: false,
    color: '#000000',
    bgColor: '#ffffff',
    activeMenu: 'HOME',
    savedVideosList: [],
  }

  setThemeUi = () => {
    const {activeDarkTheme} = this.state
    if (activeDarkTheme) {
      this.setState({color: '#ffffff', bgColor: '#000000'})
    } else {
      this.setState({color: '#000000', bgColor: '#ffffff'})
    }
  }

  changeTheme = () => {
    this.setState(
      prevState => ({activeDarkTheme: !prevState.activeDarkTheme}),
      this.setThemeUi,
    )
  }

  setActiveMenu = activeMenu => {
    this.setState({activeMenu})
  }

  addVideosOnSavedVideosList = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  render() {
    const {
      activeDarkTheme,
      color,
      bgColor,
      activeMenu,
      savedVideosList,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          activeDarkTheme,
          color,
          bgColor,
          changeTheme: this.changeTheme,
        }}
      >
        <ActiveMenuContext.Provider
          value={{
            activeMenu,
            setActiveMenu: this.setActiveMenu,
          }}
        >
          <SavedVideosContext.Provider
            value={{
              savedVideosList,
              addVideosOnSavedVideosList: this.addVideosOnSavedVideosList,
            }}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </SavedVideosContext.Provider>
        </ActiveMenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
