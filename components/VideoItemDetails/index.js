import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'
import {MdPlaylistAdd} from 'react-icons/md'
import {BiLike, BiDislike} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  Wrapper,
  ResponsiveContainer,
  VideoContainer,
  VideoSection,
  VideoDetailsCard,
  VideoPerformanceSection,
  VideoDetails,
  Paragraph,
  CustomParagraph,
  Dot,
  ActivityCard,
  Button,
  Event,
  HorizontalBar,
  Channel,
  ChannelDetails,
  ChannelLogo,
  MainContainer,
  FailureImage,
  MainHeading,
  CustomButton,
  LoaderContainer,
} from './styledComponents'

import Header from '../Header'
import LeftHeader from '../LeftHeader'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    saved: false,
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formatData = data => ({
    id: data.id,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    description: data.description,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    videoUrl: data.video_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
        videoDetails: this.formatData(fetchedData.video_details),
      }
      const {videoDetails} = formattedData
      this.setState({
        videoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      disliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      liked: false,
      disliked: !prevState.disliked,
    }))
  }

  changeSaveState = () => {
    this.setState({saved: true})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeDarkTheme, color} = value

          return (
            <SavedVideosContext.Consumer>
              {savedListValue => {
                const {addVideosOnSavedVideosList} = savedListValue
                const {videoDetails, liked, disliked, saved} = this.state

                const onClickSave = () => {
                  addVideosOnSavedVideosList(videoDetails)
                  this.changeSaveState()
                }

                const renderLoader = () => (
                  <LoaderContainer data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color="#000000"
                      height={60}
                      width="60"
                    />
                  </LoaderContainer>
                )

                const renderApiSuccessView = () => {
                  const {
                    channel,
                    videoUrl,
                    description,
                    title,
                    publishedAt,
                    viewCount,
                  } = videoDetails

                  const eventIconStyle = {width: '20px', height: '20px'}

                  const videoControl = true

                  return (
                    <VideoContainer>
                      <VideoSection>
                        <ReactPlayer
                          url={videoUrl}
                          controls={videoControl}
                          width="100%"
                        />
                      </VideoSection>
                      <VideoDetailsCard>
                        <Paragraph color={color}>{title}</Paragraph>
                        <VideoPerformanceSection>
                          <VideoDetails>
                            <CustomParagraph
                              display="mobile"
                              fontSize="14px"
                              color="#64748b"
                            >
                              {channel.name} <Dot>.</Dot>
                              {`${viewCount} views`} <Dot>.</Dot> {publishedAt}
                            </CustomParagraph>
                            <CustomParagraph
                              display="web"
                              fontSize="14px"
                              color="#64748b"
                            >
                              {`${viewCount} views`} <Dot>.</Dot> {publishedAt}
                            </CustomParagraph>
                          </VideoDetails>
                          <ActivityCard>
                            <Button
                              type="button"
                              active={liked}
                              onClick={this.onClickLike}
                            >
                              <BiLike style={eventIconStyle} />
                              <Event>{liked ? 'Liked' : 'Like'}</Event>
                            </Button>
                            <Button
                              type="button"
                              active={disliked}
                              onClick={this.onClickDislike}
                            >
                              <BiDislike style={eventIconStyle} />
                              <Event>{disliked ? 'Disliked' : 'Dislike'}</Event>
                            </Button>
                            <Button
                              type="button"
                              active={saved}
                              onClick={onClickSave}
                            >
                              <MdPlaylistAdd style={eventIconStyle} />
                              <Event>{saved ? 'Saved' : 'Save'}</Event>
                            </Button>
                          </ActivityCard>
                        </VideoPerformanceSection>
                        <HorizontalBar />
                        <Channel>
                          <ChannelLogo
                            src={channel.profileImageUrl}
                            alt={channel.name}
                          />
                          <ChannelDetails>
                            <Button type="button">
                              <CustomParagraph
                                fontSize="14px"
                                color={color}
                                lineHeight="0"
                              >
                                {channel.name}
                              </CustomParagraph>
                            </Button>
                            <CustomParagraph fontSize="14px" color="#64748b">
                              {`${channel.subscriberCount} subscribers`}
                            </CustomParagraph>
                            <CustomParagraph
                              display="web"
                              fontSize="14px"
                              color={activeDarkTheme ? '#ffffff' : '#475569'}
                              marginTop="40px"
                              lineHeight="1.5"
                            >
                              {description}
                            </CustomParagraph>
                          </ChannelDetails>
                        </Channel>
                        <CustomParagraph
                          display="mobile"
                          fontSize="14px"
                          color="#64748b"
                        >
                          {description}
                        </CustomParagraph>
                      </VideoDetailsCard>
                    </VideoContainer>
                  )
                }

                const renderApiFailureView = () => (
                  <MainContainer
                    bgColor={activeDarkTheme ? '#000000' : '#f8fafc'}
                  >
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
                      We are having some trouble to complete your request.
                      Please try again.
                    </Paragraph>
                    <CustomButton type="button">Retry</CustomButton>
                  </MainContainer>
                )

                const renderApiStatusView = () => {
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
                    <Wrapper bgColor={activeDarkTheme ? '#000000' : '#f8fafc'}>
                      <ResponsiveContainer>
                        <LeftHeader />
                        {renderApiStatusView()}
                      </ResponsiveContainer>
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

export default VideoItemDetails
