import Styled from 'styled-components'

export const MainContainer = Styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const ResponsiveContainer = Styled.div`
  width: 90%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 2%;
  box-shadow: ${props => props.boxShadow};
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  @media only screen and (min-width: 768px) {
    width: 40%;
    height: 80vh;
}
`
export const WebsiteLogo = Styled.img`
  width: 100px;
  height: 25px;
  margin-bottom: 35px;
  @media only screen and (min-width: 768px) {
    width: 120px;
    height: 30px;
}
`
export const LoginForm = Styled.form`
  width: 90%;
`
export const InputWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const Label = Styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.color};
  margin-bottom: 7px;
}
`
export const Input = Styled.input`
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  font-family: 'Roboto';
  font-size: 14px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
}
`
export const InvalidErrorText = Styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0000;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ShowPasswordContainer = Styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxInput = Styled.input`
  width: 15px;
  height: 15px;
  @media only screen and (min-width: 768px) {
    width: 17px;
    height: 17px;
}
`
export const CheckboxLabel = Styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  margin-left: 7px;
  color: ${props => props.color};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
}
`
export const CustomButton = Styled.button`
  width: 100%;
  height: 40px;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-top: 25px;
`

export const LoginError = Styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ff0000;
`

/* @media only screen and (min-width: 768px) {
  
} */
