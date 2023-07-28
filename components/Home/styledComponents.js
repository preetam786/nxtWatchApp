import Styled from 'styled-components'

export const MainContainer = Styled.div`
  display: flex;
  justify-content: center;
  min-height: 85vh;
`
export const ResponsiveContainer = Styled.div`
  width: 100%;
  display: flex;
`
export const HomeBody = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width : 75%;
  }
`
export const AddsBox = Styled.div`
  width: 90%;
  display: ${props => (props.display === 'true' ? '' : 'none')};
  margin-bottom: 40px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const AddsHeader = Styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`
export const WebLogo = Styled.img`
  align-self: flex-end;
  width: 140px;
  height: 32px;
  margin-top: 15px;
`
export const Paragraph = Styled.p`
  width: 70%;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 450; 
  line-height: 1.5;
  color: #475569;
`
export const CustomButton = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  color: ${props => (props.icon ? 'none' : props.color)};
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding};
  border: ${props => (props.icon ? 'transparent' : props.border)};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  outline: none;
  cursor: pointer;
`
