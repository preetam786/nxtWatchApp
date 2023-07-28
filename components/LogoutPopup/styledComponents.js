import Styled from 'styled-components'

export const MainContainer = Styled.div`
  width: 100%;
  min-width: 767px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: '#383838';
  opacity: 0.7;
  @media only screen and (min-width: 768px) {
  min-width: 1350px;
  }
`
export const ResponsiveContainer = Styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 45px;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  offset: 1;
  border-radius: 10px;
`
export const ButtonWrapper = Styled.div`
  height: 60px;
`
export const CustomButton = Styled.button`
  padding: 12px 25px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid #3b82f6;
  border-radius: 3px;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`
export const Paragraph = Styled.p`
  color: ${props => props.color};
  font-family: 'Roboto'
  font-size: 16px;
  font-weight: 500;
`
