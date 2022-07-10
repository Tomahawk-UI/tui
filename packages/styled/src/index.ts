import * as React from 'react'

import ThemeProvider, { Theme } from './ThemeProvider'

type ThemeProviderProps = React.ComponentProps<typeof ThemeProvider>

export { default as useTheme } from './useTheme'
export { default as styled } from './styled'
export { default as ThemeContext } from './ThemeContext'
export { ThemeProvider, ThemeProviderProps, Theme }
