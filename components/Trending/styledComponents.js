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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  margin-top: 30px;
  @media only screen and (min-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
export const LoaderContainer = Styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainContainer = Styled.div`
  width: 100%;
  height: 100vh;
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
export const Paragraph = Styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  color: ${props => props.color};
  @media only screen and (min-width: 768px) {
    font-size: 18px;
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
