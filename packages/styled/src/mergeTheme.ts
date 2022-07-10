import defaultsDeep from 'lodash.defaultsdeep'

import DefaultTheme from './DefaultTheme'
import { Theme } from './ThemeProvider'

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

function mergeTheme(theme?: DeepPartial<Theme>): Theme {
  return defaultsDeep(DefaultTheme, theme)
}

export default mergeTheme
