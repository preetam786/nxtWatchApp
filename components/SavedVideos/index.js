import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import LeftHeader from '../LeftHeader'
import VideosListItem from '../VideosListItem'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  Wrapper,
  TrendingContainer,
  TrendingTop,
  TrendingIconContainer,
  MainHeading,
  VideosListContainer,
  NoSavedSection,
  ResponsiveContainer,
  NoSavedImage,
  Paragraph,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeDarkTheme, color, bgColor} = value

          return (
            <SavedVideosContext.Consumer>
              {savedListValue => {
                const {savedVideosList} = savedListValue
                const savedVideosListLength = savedVideosList.length

                const renderNoSavedVideos = () => (
                  <NoSavedSection bgColor={bgColor}>
                    <ResponsiveContainer>
                      <NoSavedImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <MainHeading color={color}>
                        No saved videos found
                      </MainHeading>
                      <Paragraph>
                        You can save your videos while watching them
                      </Paragraph>
                    </ResponsiveContainer>
                  </NoSavedSection>
                )

                const renderSavedVideos = () => {
                  const trendingIconStyle = {
                    width: '20px',
                    height: '20px',
                    color: '#ff0000',
                  }

                  return (
                    <TrendingContainer
                      bgColor={activeDarkTheme ? '#000000' : '#f8fafc'}
                    >
                      <TrendingTop
                        bgColor={activeDarkTheme ? '#181818' : '#f1f1f1'}
                      >
                        <TrendingIconContainer
                          bgColor={activeDarkTheme ? '#000000' : '#e2e8f0'}
                        >
                          <MdPlaylistAdd style={trendingIconStyle} />
                        </TrendingIconContainer>
                        <MainHeading marginLeft="18px" color={color}>
                          Saved Videos
                        </MainHeading>
                      </TrendingTop>
                      {savedVideosListLength === 0 ? (
                        renderNoSavedVideos()
                      ) : (
                        <VideosListContainer color={color}>
                          {savedVideosList.map(eachVideo => (
                            <VideosListItem
                              key={eachVideo.id}
                              videoDetails={eachVideo}
                              width="100%"
                              thumbnailWidth="50%"
                              webDisplayDirection="row"
                              MobileDisplayDirection="column"
                            />
                          ))}
                        </VideosListContainer>
                      )}
                    </TrendingContainer>
                  )
                }

                return (
                  <>
                    <Header />
                    <Wrapper>
                      <LeftHeader />
                      {renderSavedVideos()}
                    </Wrapper>
                  </>
                )
              }}
            </SavedVideosContext.Consumer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
