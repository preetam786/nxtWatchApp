import React from 'react'

const ThemeContext = React.createContext({
  activeDarkTheme: false,
  color: '#000000',
  bgColor: '#ffffff',
  changeTheme: () => {},
})

export default ThemeContext
