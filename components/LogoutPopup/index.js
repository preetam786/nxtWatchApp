import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  ResponsiveContainer,
  CustomButton,
  Paragraph,
  ButtonWrapper,
} from './styledComponents'

const LogoutPopup = props => {
  const {history, close} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeDarkTheme, color} = value

        const onClickConfirm = () => {
          history.replace('/login')
          Cookies.remove('jwt_token')
        }

        return (
          <MainContainer>
            <ResponsiveContainer
              bgColor={activeDarkTheme ? '#000000' : '#ffffff'}
            >
              <Paragraph color={color}>
                Are you sure you want to logout?
              </Paragraph>
              <ButtonWrapper>
                <CustomButton
                  type="button"
                  color="#3b82f6"
                  bgColor="transparent"
                  onClick={() => close()}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="button"
                  color="#ffffff"
                  bgColor="#3b82f6"
                  onClick={onClickConfirm}
                >
                  Confirm
                </CustomButton>
              </ButtonWrapper>
            </ResponsiveContainer>
          </MainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default LogoutPopup
