import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {ImFire} from 'react-icons/im'

import Header from '../Header'
import LeftHeader from '../LeftHeader'
import VideosListItem from '../VideosListItem'

import ThemeContext from '../../context/ThemeContext'

import {
  Wrapper,
  TrendingContainer,
  TrendingTop,
  TrendingIconContainer,
  MainHeading,
  VideosListContainer,
  LoaderContainer,
  MainContainer,
  FailureImage,
  Paragraph,
  CustomButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosFromApi()
  }

  formatData = data => ({
    id: data.id,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getVideosFromApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = {
        videos: fetchedData.videos.map(eachVideo => this.formatData(eachVideo)),
      }
      const {videos} = formattedData
      this.setState({videosList: videos, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeDarkTheme, color, bgColor} = value

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={activeDarkTheme ? '#ffffff' : '#000000'}
                height={60}
                width="60"
              />
            </LoaderContainer>
          )

          const renderApiSuccessView = () => {
            const {videosList} = this.state
            const trendingIconStyle = {
              width: '25px',
              height: '25px',
              color: '#ff0000',
            }
            return (
              <TrendingContainer
                bgColor={activeDarkTheme ? '#000000' : '#f8fafc'}
              >
                <TrendingTop bgColor={activeDarkTheme ? '#181818' : '#f1f1f1'}>
                  <TrendingIconContainer
                    bgColor={activeDarkTheme ? '#000000' : '#e2e8f0'}
                  >
                    <ImFire style={trendingIconStyle} />
                  </TrendingIconContainer>
                  <MainHeading marginLeft="18px" color={color}>
                    Trending
                  </MainHeading>
                </TrendingTop>
                <VideosListContainer color={color}>
                  {videosList.map(eachVideo => (
                    <VideosListItem
                      key={eachVideo.id}
                      displayChannelLogo="none"
                      videoDetails={eachVideo}
                      width="100%"
                      thumbnailWidth="50%"
                      webDisplayDirection="row"
                      MobileDisplayDirection="column"
                    />
                  ))}
                </VideosListContainer>
              </TrendingContainer>
            )
          }

          const renderApiFailureView = () => (
            <MainContainer bgColor={activeDarkTheme ? '#000000' : '#f8fafc'}>
              <FailureImage
                src={
                  activeDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <MainHeading color={color}>
                Oops! Something Went Wrong
              </MainHeading>
              <Paragraph color={color}>
                We are having some trouble to complete your request. Please try
                again.
              </Paragraph>
              <CustomButton type="button" onClick={this.getVideosFromApi}>
                Retry
              </CustomButton>
            </MainContainer>
          )

          const renderApiStatusWiseResponse = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderApiSuccessView()
              case apiStatusConstants.failure:
                return renderApiFailureView()
              case apiStatusConstants.inProgress:
                return renderLoader()
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <Wrapper bgColor={bgColor}>
                <LeftHeader />
                {renderApiStatusWiseResponse()}
              </Wrapper>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
