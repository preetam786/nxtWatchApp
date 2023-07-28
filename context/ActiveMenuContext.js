import React from 'react'

const ActiveMenuContext = React.createContext({
  activeMenu: 'HOME',
  setActiveMenu: () => {},
})

export default ActiveMenuContext
