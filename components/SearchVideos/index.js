import {Component} from 'react'

import {BiSearchAlt2} from 'react-icons/bi'

import {SearchBox, SearchInput, CustomButton} from './styledComponents'

class SearchVideos extends Component {
  state = {
    userSearch: '',
  }

  onClickSearchButton = () => {
    const {getSearchVideos} = this.props
    const {userSearch} = this.state
    getSearchVideos(userSearch)
  }

  onChangeSearchInput = event => {
    this.setState({userSearch: event.target.value})
  }

  render() {
    const {userSearch} = this.state
    const iconStyle = {
      width: '20px',
      height: '20px',
    }
    return (
      <SearchBox>
        <SearchInput
          type="search"
          placeholder="Search"
          value={userSearch}
          onChange={this.onChangeSearchInput}
        />
        <CustomButton
          type="button"
          icon
          width="15%"
          padding="5px 20px"
          onClick={this.onClickSearchButton}
        >
          <BiSearchAlt2 style={iconStyle} />
        </CustomButton>
      </SearchBox>
    )
  }
}

export default SearchVideos
