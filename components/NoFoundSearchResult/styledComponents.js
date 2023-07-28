import Styled from 'styled-components'

export const NotFoundSection = Styled.div`
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
export const NotFoundImage = Styled.img`
  width: 100%;
  max-height: 420px;
@media only screen and (min-width: 768px) {
  width: 80%;
  max-height: 480px;
}
`
export const MainHeading = Styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  color: ${props => props.color};
  @media only screen and (min-width: 768px) {
    font-size: 32px;
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
