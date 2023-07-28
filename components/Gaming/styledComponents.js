import Styled from 'styled-components'

export const Wrapper = Styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => props.bgColor};
`
export const TrendingContainer = Styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TrendingTop = Styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 25px 50px;
  background-color: ${props => props.bgColor};
`
export const TrendingIconContainer = Styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
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
export const VideosListContainer = Styled.ul`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  list-style-type: none;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 30px;
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
`
export const VideoContainer = Styled.li`
  width: 45%;
  list-style-type: none;
  padding-left: 0;
  margin-right: 25px;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
      width: 30%;
      min-width: 270px;
      margin-right: 25px;
      margin-bottom: 30px;
  }
`
export const VideoThumbnail = Styled.img`
  width: 100%;
`
export const VideoDetails = Styled.div`
  padding: 0; 
`
export const Paragraph = Styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-top: ${props => props.marginTop};
  margin-left: 10px;
  margin-bottom: ${props => props.marginBottom};
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    margin-left: ;
  }
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
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
