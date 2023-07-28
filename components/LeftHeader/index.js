import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  LeftNavbar,
  NavbarItems,
  NavbarItem,
  Menu,
  Footer,
  MainHeading,
  SocialLinks,
  SocialLink,
  HyperLink,
  SocialImage,
  Paragraph,
} from './styledComponents'

const menuList = [
  {
    id: 'HOME',
    displayText: 'Home',
    menuIcon: AiFillHome,
    menuLinkUrl: '/',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    menuIcon: ImFire,
    menuLinkUrl: '/trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    menuIcon: SiYoutubegaming,
    menuLinkUrl: '/gaming',
  },
  {
    id: 'SAVED_VIDEOS',
    displayText: 'Saved Videos',
    menuIcon: MdPlaylistAdd,
    menuLinkUrl: '/saved-videos',
  },
]

const socialList = [
  {
    id: 1,
    socialName: 'facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
    imageAlt: 'facebook logo',
  },
  {
    id: 2,
    socialName: 'twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png',
    imageAlt: 'twitter logo',
  },
  {
    id: 3,
    socialName: 'linkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
    imageAlt: 'linked in logo',
  },
]

const LeftHeader = props => {
  const {display} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeDarkTheme, color} = value
        return (
          <ActiveMenuContext.Consumer>
            {menuValue => {
              const {activeMenu, setActiveMenu} = menuValue
              const linkStyle = {textDecoration: 'none'}
              const iconStyle = {width: '18px', height: '18px'}

              const onClickMenu = event => {
                setActiveMenu(event.target.id)
              }

              return (
                <LeftNavbar
                  display={display}
                  bgColor={activeDarkTheme ? '#0f0f0f' : '#ffffff'}
                >
                  <NavbarItems>
                    {menuList.map(eachMenu => (
                      <Link
                        to={eachMenu.menuLinkUrl}
                        key={eachMenu.id}
                        style={linkStyle}
                      >
                        <NavbarItem
                          active={eachMenu.id === activeMenu}
                          bgColor={activeDarkTheme ? '#424242' : '#f8fafc'}
                          onClick={onClickMenu}
                        >
                          <eachMenu.menuIcon style={iconStyle} />
                          <Menu
                            id={eachMenu.id}
                            active={eachMenu.id === activeMenu}
                            activeMenuColor={color}
                            color={activeDarkTheme ? '#ffffff' : '#424242'}
                          >
                            {eachMenu.displayText}
                          </Menu>
                        </NavbarItem>
                      </Link>
                    ))}
                  </NavbarItems>
                  <Footer>
                    <MainHeading
                      color={activeDarkTheme ? '#ffffff' : '#383838'}
                    >
                      CONTACT US
                    </MainHeading>
                    <SocialLinks>
                      {socialList.map(eachSocial => (
                        <SocialLink key={eachSocial.id}>
                          <HyperLink href="#">
                            <SocialImage
                              src={eachSocial.imageUrl}
                              alt={eachSocial.imageAlt}
                            />
                          </HyperLink>
                        </SocialLink>
                      ))}
                    </SocialLinks>
                    <Paragraph color={activeDarkTheme ? '#ffffff' : '#383838'}>
                      Enjoy! Now to see your channels and recommendations!
                    </Paragraph>
                  </Footer>
                </LeftNavbar>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default LeftHeader
