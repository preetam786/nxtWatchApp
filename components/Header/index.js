import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FaMoon as DarkTheme} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {BiSun as LightTheme} from 'react-icons/bi'

import LogoutPopup from '../LogoutPopup'

import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  NavbarMobile,
  WebsiteLogo,
  NavbarMobileItems,
  Button,
  NavbarWeb,
  NavItemsList,
  NavItem,
  Profile,
  Wrapper,
} from './styledComponents'

import LeftHeader from '../LeftHeader'

const Header = props => {
  const {history} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeDarkTheme, changeTheme} = value

        const webImageUrl = activeDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const mobileIconStyle = {width: '20px', height: '20px'}
        const webIconStyle = {width: '25px', height: '25px'}

        const onClickThemeButton = () => {
          changeTheme()
        }

        const onClickHamburger = () => (
          <Wrapper>
            <LeftHeader display="display" />
          </Wrapper>
        )

        const onClickLogOut = close => (
          <LogoutPopup history={history} close={close} />
        )

        return (
          <Navbar bgColor={activeDarkTheme ? '#0f0f0f' : '#ffffff'}>
            <NavbarMobile>
              <Link to="/" style={{textDecoration: 'none'}}>
                <WebsiteLogo
                  width="80px"
                  height="20px"
                  src={webImageUrl}
                  alt="website logo"
                />
              </Link>
              <NavbarMobileItems>
                <Button
                  type="button"
                  icon
                  color={activeDarkTheme ? '#ffffff' : '#0f0f0f'}
                  onClick={onClickThemeButton}
                >
                  {activeDarkTheme ? (
                    <LightTheme style={mobileIconStyle} />
                  ) : (
                    <DarkTheme style={mobileIconStyle} />
                  )}
                </Button>
                <Popup
                  modal
                  trigger={
                    <Button
                      type="button"
                      icon
                      color={activeDarkTheme ? '#ffffff' : '#0f0f0f'}
                    >
                      <GiHamburgerMenu style={mobileIconStyle} />
                    </Button>
                  }
                >
                  {onClickHamburger()}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <Button
                      type="button"
                      icon
                      color={activeDarkTheme ? '#ffffff' : '#0f0f0f'}
                    >
                      <FiLogOut style={mobileIconStyle} />
                    </Button>
                  }
                >
                  {close => onClickLogOut(close)}
                </Popup>
              </NavbarMobileItems>
            </NavbarMobile>
            <NavbarWeb>
              <Link to="/" style={{textDecoration: 'none'}}>
                <WebsiteLogo
                  width="120px"
                  height="28px"
                  src={webImageUrl}
                  alt="website logo"
                />
              </Link>
              <NavItemsList>
                <NavItem>
                  <Button
                    type="button"
                    icon
                    color={activeDarkTheme ? '#ffffff' : '#0f0f0f'}
                    onClick={onClickThemeButton}
                  >
                    {activeDarkTheme ? (
                      <LightTheme style={webIconStyle} />
                    ) : (
                      <DarkTheme style={webIconStyle} />
                    )}
                  </Button>
                </NavItem>
                <NavItem>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavItem>
                <NavItem>
                  <Popup
                    modal
                    trigger={
                      <Button
                        bgColor="transparent"
                        color={activeDarkTheme ? '#ffffff' : '#4f46e5'}
                        fontFamily="Roboto"
                        fontSize="16px"
                        fontWeight={550}
                        padding="6px 20px"
                        border={
                          activeDarkTheme
                            ? '1px solid #ffffff'
                            : '1px solid #4f46e5'
                        }
                        borderRadius="2px"
                        onClick={onClickLogOut}
                      >
                        Logout
                      </Button>
                    }
                  >
                    {close => onClickLogOut(close)}
                  </Popup>
                </NavItem>
              </NavItemsList>
            </NavbarWeb>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
