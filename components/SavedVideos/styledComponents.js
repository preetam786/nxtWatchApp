import Styled from 'styled-components'

export const Wrapper = Styled.div`
  width: 100%;
  display: flex;
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
export const NoSavedSection = Styled.div`
  width: 100%;
  height: 88vh;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  `
export const ResponsiveContainer = Styled.div`
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedImage = Styled.img`
  width: 100%;
  max-height: 420px;
@media only screen and (min-width: 768px) {
  width: 80%;
  max-height: 480px;
}
`
export const Paragraph = Styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  color: #475569;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`
