import {Link} from 'react-router-dom'
import moment from 'moment'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoContainer,
  VideoThumbnail,
  VideoDetailsCard,
  ChannelLogo,
  VideoDetails,
  Paragraph,
  Dot,
} from './styledComponents'

const VideosListItem = props => {
  const {
    videoDetails,
    displayChannelLogo,
    width,
    thumbnailWidth,
    MobileDisplayDirection,
    webDisplayDirection,
  } = props
  const {
    id,
    thumbnailUrl,
    channel,
    title,
    publishedAt,
    viewCount,
  } = videoDetails

  const formattedMoment = moment(`${publishedAt}`, 'mm-dd-yyyy').fromNow()

  const linkStyle = {
    textDecoration: 'none',
    color: '#000000',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {color} = value

        return (
          <VideoContainer
            width={width}
            webDD={webDisplayDirection}
            mbDD={MobileDisplayDirection}
          >
            <Link to={`/videos/${id}`} style={linkStyle}>
              <VideoThumbnail
                src={thumbnailUrl}
                width={thumbnailWidth}
                alt={title}
              />
              <VideoDetailsCard width={thumbnailWidth}>
                <ChannelLogo
                  displayChannelLogo={displayChannelLogo}
                  src={channel.profileImageUrl}
                  alt={channel.name}
                />
                <VideoDetails>
                  <Paragraph color={color}>{title}</Paragraph>
                  <Paragraph display="mobile" color="#475569">
                    {channel.name} <Dot>.</Dot>
                    {`${viewCount} views`} <Dot>.</Dot> {formattedMoment}
                  </Paragraph>
                  <Paragraph color="#475569">{channel.name}</Paragraph>
                  <Paragraph display="web" color="#475569">
                    {`${viewCount} views`} <Dot>.</Dot> {formattedMoment}
                  </Paragraph>
                </VideoDetails>
              </VideoDetailsCard>
            </Link>
          </VideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideosListItem
