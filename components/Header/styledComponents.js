import Styled from 'styled-components'

export const Navbar = Styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${props => props.bgColor};
`
export const NavbarMobile = Styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
export const WebsiteLogo = Styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`
export const NavbarMobileItems = Styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Button = Styled.button`
  background-color: ${props => (props.icon ? 'transparent' : props.bgColor)};
  color: ${props => props.color};
  padding: ${props => (props.icon ? 0 : props.padding)};
  border: ${props => (props.icon ? 'none' : props.border)};
  border-radius: ${props => props.borderRadius};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  outline: none;
  cursor: pointer;
`
export const NavbarWeb = Styled.div`
  width: 90%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
export const NavItemsList = Styled.ul`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items-center;
  list-style-type: none;
  padding-left: 0;
`
export const NavItem = Styled.li`
  display: flex;
  align-items: center;
  margin-right: 15px;
`
export const Profile = Styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`
export const Wrapper = Styled.div`
  width: 400%;
  min-width: 768px;
  height: 100vh;
  background-color: #383838;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
