import Styled from 'styled-components'

export const VideoContainer = Styled.li`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.mbDD};
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
      width: ${props => props.width};
      min-width: 270px;
      display: flex;
      flex-direction: ${props => props.webDD};
      margin-right: 25px;
      margin-bottom: 30px;
  }
`
export const VideoThumbnail = Styled.img`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: ${props => props.width}
  }
`
export const VideoDetailsCard = Styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 15px;
  margin-top: 15px;
  @media only screen and (min-width: 768px) {
    width: ${props => props.width}
  }
`
export const ChannelLogo = Styled.img`
  width: 30px;
  height: 30px;
  display: ${props => props.displayChannelLogo};
`
export const VideoDetails = Styled.div`
  padding-left: 15px;
  padding-right: 5px; 
`
export const Paragraph = Styled.p`
  display: ${props => (props.display === 'mobile' ? 'flex' : 'none')};
  align-items: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 5px;
  color: ${props => props.color};
  @media only screen and (min-width: 768px) {
    display: ${props => (props.display === 'mobile' ? 'none' : 'flex')};
  }
  @media only screen and (max-width: 767px) {
    margin-top: 5px;
  }
`
export const Dot = Styled.span`
  width: 5px;
  height: 5px;
  line-height: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #000000;
  border-radius: 25px;
`
