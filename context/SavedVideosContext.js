import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addVideosOnSavedVideosList: () => {},
})

export default SavedVideosContext
