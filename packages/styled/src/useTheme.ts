import * as React from 'react'
import ThemeContext from './ThemeContext'

function useTheme() {
  const context = React.useContext(ThemeContext)

  return context
}

export default useTheme
