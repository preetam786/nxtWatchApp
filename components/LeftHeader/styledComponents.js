import Styled from 'styled-components'

export const LeftNavbar = Styled.nav`
  width: 25%;
  min-width: 260px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  @media only screen and (max-width: 767px) {
    display: ${props => (props.display ? 'flex' : 'none')};
  }
`
export const NavbarItems = Styled.ul`
  list-style-type: none;
  padding-left: 0;
`
export const NavbarItem = Styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 35px;
  background-color: ${props => (props.active ? props.bgColor : 'transparent')};
  color: ${props => (props.active ? '#ff0b37' : '#909090')};
`
export const Menu = Styled.p`
  font-family: 'Roboto'
  font-size: 18px;
  font-weight: ${props => (props.active ? '500' : '400')};
  color: ${props => (props.active ? props.activeMenuColor : props.color)};
  margin: 10px;
  margin-left: 20px;
`
export const Footer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 35px;
`
export const MainHeading = Styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.color};
`
export const SocialLinks = Styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`
export const SocialLink = Styled.li`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 8px 11px;
  margin-right: 15px;
  border-radius: 25px;
`
export const HyperLink = Styled.a`
  text-decoration: none;
  margin-top: 2px;
  color: #ffffff;
`
export const SocialImage = Styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`
export const Paragraph = Styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
`
