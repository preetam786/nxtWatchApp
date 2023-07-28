import ThemeContext from '../../context/ThemeContext'

import {
  ResponsiveContainer,
  NotFoundSection,
  NotFoundImage,
  MainHeading,
  Paragraph,
} from './styledComponents'

import {CustomButton} from '../LogoutPopup/styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {color, bgColor} = value

      const onClickRetry = () => {}
      return (
        <NotFoundSection bgColor={bgColor}>
          <ResponsiveContainer>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <MainHeading color={color}>No Search results found</MainHeading>
            <Paragraph>
              Try different key words or remove search filter
            </Paragraph>
            <CustomButton
              type="button"
              bgColor="#4f46e5"
              onclick={onClickRetry}
            >
              Retry
            </CustomButton>
          </ResponsiveContainer>
        </NotFoundSection>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
