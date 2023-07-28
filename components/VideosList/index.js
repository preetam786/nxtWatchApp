import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import VideosListItem from '../VideosListItem'
import SearchVideos from '../SearchVideos'
import NoFoundSearchResult from '../NoFoundSearchResult'

import ThemeContext from '../../context/ThemeContext'

import {
  Wrapper,
  ContentSection,
  VideosListContainer,
  MainContainer,
  FailureImage,
  MainHeading,
  Paragraph,
  CustomButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideosList extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosFromApi()
  }

  getSearchVideos = userSearch => {
    this.setState({searchInput: userSearch}, this.getVideosFromApi)
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
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
            const emptyVideosList = videosList.length === 0
            return emptyVideosList ? (
              <NoFoundSearchResult />
            ) : (
              <ContentSection bgColor={activeDarkTheme ? '#000000' : '#f8fafc'}>
                <SearchVideos getSearchVideos={this.getSearchVideos} />
                <VideosListContainer>
                  {videosList.map(eachVideo => (
                    <VideosListItem
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                      width="30%"
                      thumbnailWidth="100%"
                      webDisplayDirection="column"
                      MobileDisplayDirection="column"
                    />
                  ))}
                </VideosListContainer>
              </ContentSection>
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
            <Wrapper bgColor={bgColor}>{renderApiStatusWiseResponse()}</Wrapper>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideosList
