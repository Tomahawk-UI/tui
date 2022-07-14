import * as React from 'react'

import { Theme, useTheme } from '@tomahawk-ui/styled'

import Typography from './Typography'

function useResolveNonThemedColor() {
  const theme = useTheme()

  const resolveNonThemedColor = React.useCallback(
    (color: React.ComponentProps<typeof Typography>['color']) => {
      const literalColor = String(color)
      if (literalColor.startsWith('#') || literalColor.startsWith('rgb') || literalColor.startsWith('hsl')) {
        return literalColor
      }
      // todo: figure out a better way to do this
      if (literalColor.startsWith('primary')) {
        return theme['primary'][literalColor as keyof Theme['primary']]
      }
      if (literalColor.startsWith('secondary')) {
        return theme['secondary'][literalColor as keyof Theme['secondary']]
      }
      if (literalColor.startsWith('tertiary')) {
        return theme['tertiary'][literalColor as keyof Theme['tertiary']]
      }
      if (literalColor.startsWith('quaternary')) {
        return theme['quaternary'][literalColor as keyof Theme['quaternary']]
      }
      if (literalColor.startsWith('success')) {
        return theme['success'][literalColor as keyof Theme['success']]
      }
      if (literalColor.startsWith('warning')) {
        return theme['warning'][literalColor as keyof Theme['warning']]
      }
      if (literalColor.startsWith('error')) {
        return theme['error'][literalColor as keyof Theme['error']]
      }
      if (literalColor.startsWith('text')) {
        return theme['text'][literalColor as keyof Theme['text']]
      }
      if (literalColor.startsWith('initial')) {
        return 'initial'
      }
      return 'inherit'
    },
    [theme]
  )

  return { resolveNonThemedColor }
}

export default useResolveNonThemedColor
