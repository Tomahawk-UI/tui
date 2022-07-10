import * as React from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import mergeTheme from './mergeTheme'
import ThemeContext from './ThemeContext'

export interface Theme {
  primary?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  secondary?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  tertiary?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  quaternary?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  success?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  warning?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  error?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  background?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }

  text?: {
    main?: string
    light?: string
    dark?: string
    contrast?: string
  }
}

interface Props {
  theme?: Theme
  children?: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  const mergedTheme = mergeTheme(theme)

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <EmotionThemeProvider theme={mergedTheme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
