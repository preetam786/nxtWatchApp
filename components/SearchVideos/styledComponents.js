import Styled from 'styled-components'

export const SearchBox = Styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  padding: 0;
`
export const SearchInput = Styled.input`
  width: 85%;
  height: 30px;
  background-color: none;
  border: none;
  border-right: 2px solid #cbd5e1;
  margin: 0;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
`
export const CustomButton = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  color: ${props => (props.icon ? 'none' : props.color)};
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding};
  border: ${props => (props.icon ? 'transparent' : props.border)};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  outline: none;
  cursor: pointer;
`
