import { Theme } from './ThemeProvider'

type DeepRequired<T> = {
  [K in keyof T]: T[K] extends object ? DeepRequired<T[K]> : T[K]
}

const DefaultTheme: DeepRequired<Theme> = {
  background: {
    contrast: '#000',
    dark: '#ddd',
    light: '#fff',
    main: '#fafafa',
  },
  error: {
    contrast: '#fff',
    dark: '#f44336',
    light: '#ff5252',
    main: '#f44336',
  },
  primary: {
    contrast: '#fff',
    dark: '#165E9A',
    light: '#1976d2',
    main: '#2196f3',
  },
  quaternary: {
    contrast: '#fff',
    dark: '#fafafa',
    light: '#f5f5f5',
    main: '#fafafa',
  },
  secondary: {
    contrast: '#000',
    dark: '#fafafa',
    light: '#fafafa',
    main: '#fafafa',
  },
  text: {
    main: '#262626',
    light: '#333',
    dark: '#141414',
    contrast: '#fff',
  },
  tertiary: {
    contrast: '#fff',
    dark: '#fafafa',
    light: '#fafafa',
    main: '#fafafa',
  },
  success: {
    contrast: '#fff',
    dark: '#388E3C',
    light: '#4caf50',
    main: '#43A047',
  },
  warning: {
    contrast: '#fff',
    dark: '#FFC107',
    light: '#ffeb3b',
    main: '#ff9800',
  },
}

export default DefaultTheme
