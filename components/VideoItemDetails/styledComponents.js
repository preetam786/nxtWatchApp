import Styled from 'styled-components'

export const Wrapper = Styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const ResponsiveContainer = Styled.div`
  width: 100%;
  display: flex;
`
export const VideoContainer = Styled.div`
  width: 100%;
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  border-radius: 5px;
  margin-bottom: 30px;
`
export const VideoSection = Styled.div`
  width: 100%;
  padding-bottom: 10px;
`
export const VideoDetailsCard = Styled.div`
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`
export const VideoPerformanceSection = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const VideoDetails = Styled.div`
  padding: 0;
`
export const Paragraph = Styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => props.color};
  @media only screen and (min-width: 768px) {
   font-size: 18px;
  }
`
export const CustomParagraph = Styled.p`
  display: ${props => (props.display === 'web' ? 'none' : 'flex')};
  align-items: center;
  font-family: 'Roboto';
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  margin-top: ${props => props.marginTop};
  line-height: ${props => props.lineHeight};
  @media only screen and (min-width: 768px) {
    display: ${props => (props.display === 'mobile' ? 'none' : 'flex')};
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
  color: #64748b;
  background-color: #64748b;
  border-radius: 25px;
`
export const ActivityCard = Styled.div`
  width: 100%;
  display: flex;
  
  @media only screen and (min-width: 768px) {
    width: 40%;
    
  justify-content: space-between;
  align-items: center;
  }
`
export const Button = Styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${props => (props.active ? '#4f46e5' : '#64748b')};
  border: none;
  background: none;
  cursor: pointer;
`
export const Event = Styled.span`
  margin-left: 10px;
`
export const HorizontalBar = Styled.hr`
width: 100%;  
border: 1px solid #e2e8f0;
margin-top: 10px;
margin-bottom: 15px;
`
export const Channel = Styled.div`
width: 100%;  
display: flex;
`
export const ChannelLogo = Styled.img`
  width: 50px;
  height: 50px;
`
export const ChannelDetails = Styled.div`
margin-left: 15px;
line-height: 0;
`
export const MainContainer = Styled.div`
  width: 100%;
  height: 90vh;
  padding: 0 30px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    height: 88vh;
  }
`
export const FailureImage = Styled.img`
  width: 100%;
  max-width: 360px;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`
export const MainHeading = Styled.h1`
font-family: 'Roboto';
font-size: 24px;
text-align: center;
margin-left: ${props => props.marginLeft};
  color: ${props => props.color};
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const CustomButton = Styled.button`
  background-color: #4f46e5;
  color: #d7dfe9;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 15px 30px;
  cursor: pointer;
`
export const LoaderContainer = Styled.div`
  width: 100%;
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
