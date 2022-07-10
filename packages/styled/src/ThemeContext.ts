import * as React from 'react'

import { Theme } from './ThemeProvider'

const ThemeContext = React.createContext<Theme>({} as Theme)

export default ThemeContext
