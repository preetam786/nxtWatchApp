import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'

import Header from '../Header'
import LeftHeader from '../LeftHeader'
import VideosList from '../VideosList'

import {
  MainContainer,
  ResponsiveContainer,
  HomeBody,
  AddsBox,
  AddsHeader,
  WebLogo,
  Paragraph,
  CustomButton,
} from './styledComponents'

class Home extends Component {
  state = {
    isAddShow: 'true',
  }

  onClickCloseAdd = () => {
    this.setState({isAddShow: 'false'})
  }

  render() {
    const {isAddShow} = this.state

    const iconStyle = {
      width: '20px',
      height: '20px',
    }
    return (
      <>
        <Header />
        <MainContainer>
          <ResponsiveContainer>
            <LeftHeader />
            <HomeBody>
              <AddsBox display={isAddShow}>
                <AddsHeader>
                  <WebLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="web logo"
                  />
                  <CustomButton
                    type="button"
                    icon
                    bgColor="transparent"
                    onClick={this.onClickCloseAdd}
                  >
                    <GrFormClose style={iconStyle} />
                  </CustomButton>
                </AddsHeader>
                <Paragraph>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </Paragraph>
                <CustomButton
                  type="button"
                  color="#475569"
                  bgColor="#ffffff"
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight={550}
                  padding="10px 20px"
                  border="1px solid #000000"
                >
                  GET IT NOW
                </CustomButton>
              </AddsBox>
              <VideosList />
            </HomeBody>
          </ResponsiveContainer>
        </MainContainer>
      </>
    )
  }
}

export default Home
