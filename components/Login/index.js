import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  ResponsiveContainer,
  WebsiteLogo,
  LoginForm,
  InputWrapper,
  Label,
  Input,
  InvalidErrorText,
  ShowPasswordContainer,
  CheckboxInput,
  CheckboxLabel,
  CustomButton,
  LoginError,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    passwordType: 'password',
    showError: false,
    errorMsg: '',
    usernameEmpty: false,
    passwordEmpty: false,
  }

  submitFormSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitFormFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onBlurUsername = () => {
    const {username} = this.state
    if (username === '') {
      this.setState({usernameEmpty: true})
    } else {
      this.setState({usernameEmpty: false})
    }
  }

  onBlurPassword = () => {
    const {password} = this.state
    if (password === '') {
      this.setState({passwordEmpty: true})
    } else {
      this.setState({passwordEmpty: false})
    }
  }

  validateInputField = () => {
    const {username, password} = this.state
    if (username === '' && password === '') {
      this.setState({usernameEmpty: true, passwordEmpty: true})
    } else {
      this.onBlurUsername()
      this.onBlurPassword()
    }
  }

  submitForm = async event => {
    event.preventDefault()
    this.validateInputField()
    this.setState({username: '', password: ''})
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.submitFormSuccess(data.jwt_token)
    } else {
      this.submitFormFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  setPasswordType = () => {
    const {showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    this.setState({passwordType})
  }

  onChangeCheckbox = event => {
    this.setState({showPassword: event.target.checked}, this.setPasswordType)
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {
      username,
      password,
      showPassword,
      passwordType,
      showError,
      errorMsg,
      usernameEmpty,
      passwordEmpty,
    } = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeDarkTheme, color} = value

          const loginWebLogoUrl = activeDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <MainContainer bgColor={activeDarkTheme ? '#0f0f0f' : '#ffffff'}>
              <ResponsiveContainer
                bgColor={activeDarkTheme ? '#000000' : '#ffffff'}
                boxShadow={
                  activeDarkTheme ? 'none' : '0px 4px 16px 0px #bfbfbf'
                }
              >
                <WebsiteLogo src={loginWebLogoUrl} alt="website logo" />
                <LoginForm onSubmit={this.submitForm}>
                  <InputWrapper>
                    <Label
                      htmlFor="username"
                      color={activeDarkTheme ? '#ffffff' : '#7e858e'}
                    >
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUsername}
                      onBlur={this.onBlurUsername}
                    />
                    {usernameEmpty && (
                      <InvalidErrorText>*Required</InvalidErrorText>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <Label
                      htmlFor="password"
                      color={activeDarkTheme ? '#ffffff' : '#7e858e'}
                    >
                      PASSWORD
                    </Label>
                    <Input
                      type={passwordType}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                      onBlur={this.onBlurPassword}
                    />
                    {passwordEmpty && (
                      <InvalidErrorText>*Required</InvalidErrorText>
                    )}
                  </InputWrapper>
                  <ShowPasswordContainer>
                    <CheckboxInput
                      type="checkbox"
                      id="passCheckbox"
                      value={showPassword}
                      onChange={this.onChangeCheckbox}
                    />
                    <CheckboxLabel htmlFor="passCheckbox" color={color}>
                      Show Password
                    </CheckboxLabel>
                  </ShowPasswordContainer>
                  <CustomButton type="submit">Login</CustomButton>
                  {showError && <LoginError>{`**${errorMsg}**`}</LoginError>}
                </LoginForm>
              </ResponsiveContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
