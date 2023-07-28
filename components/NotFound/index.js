import Header from '../Header'
import LeftHeader from '../LeftHeader'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  ResponsiveContainer,
  NotFoundSection,
  NotFoundImage,
  MainHeading,
  Paragraph,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {color, bgColor} = value

      return (
        <>
          <Header />
          <MainContainer>
            <LeftHeader />
            <NotFoundSection bgColor={bgColor}>
              <ResponsiveContainer>
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
                <MainHeading color={color}>Page Not Found</MainHeading>
                <Paragraph>
                  We are sorry, the page you requested could not be found.
                </Paragraph>
              </ResponsiveContainer>
            </NotFoundSection>
          </MainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
