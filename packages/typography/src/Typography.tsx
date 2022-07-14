import * as React from 'react'

import { Theme, styled } from '@tomahawk-ui/styled'

import resolveVariantAliases from './resolveVariantAliases'
import useResolveNonThemedColor from './useResolveNonThemedColor'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 's'
  | 'c'
  /* Full aliases */
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'paragraph'
  | 'small'
  | 'caption'

type TypographyAllowedAsPropElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'hgroup'
  | 'span'
  | 'p'
  | 'small'
  | 'caption'
  | 'div'
  | 'blockquote'
  | 'abbr'
  | 'a'
  | 'b'
  | 'strong'
  | 'code'
  | 'details'
  | 'summary'
  | 'hr'
  | 'i'
  | 'mark'
  | 'pre'
  | 'q'

interface Props
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    'children' | 'style' | 'defaultChecked' | 'checked' | 'defaultValue'
  > {
  /**
   * The variant to use for the typography.
   *
   * @default 'paragraph'
   */
  variant?: TypographyVariant

  color?:
    | `#${string}`
    | `rgba(${number})`
    | `hsla(${number})`
    | `rgb(${number})`
    | `hsl(${number})`
    | `text.${keyof Theme['text']}`
    | `primary.${keyof Theme['primary']}`
    | `secondary.${keyof Theme['secondary']}`
    | `tertiary.${keyof Theme['tertiary']}`
    | `quaternary.${keyof Theme['quaternary']}`
    | `success.${keyof Theme['success']}`
    | `warning.${keyof Theme['warning']}`
    | `error.${keyof Theme['error']}`
    | 'inherit'
    | 'initial'
  /**
   * Determine an element type to override the default element type.
   *
   * Under the hood, TUI sets the adequate element type based on the variant.
   *
   * @see {@link TypographyAllowedAsPropElementType}
   *
   * @since 1.0.0
   * @version 1.0.0
   *
   * @default undefined
   */
  as?: TypographyAllowedAsPropElementType

  children: React.ReactNode
  style: Omit<React.CSSProperties, 'color' | 'fontFamily' | 'lineHeight' | 'fontSize' | 'fontWeight'>
}

const H1 = styled('h1')({
  fontSize: '2.5rem',
  fontWeight: 600,
  lineHeight: '1.2',
})

const H2 = styled('h2')({
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: '1.2',
})

const H3 = styled('h3')({
  fontSize: '1.75rem',
  fontWeight: 600,
  lineHeight: '1.2',
})

const H4 = styled('h4')({
  fontSize: '1.5rem',
  fontWeight: 600,
  lineHeight: '1.2',
})

const H5 = styled('h5')({
  fontSize: '1.25rem',
  fontWeight: 'medium',
  lineHeight: '1.2',
})

const H6 = styled('h6')({
  fontSize: '1rem',
  fontWeight: 'medium',
  lineHeight: '1.2',
})

const Paragraph = styled('p')({
  fontSize: '1rem',
  fontWeight: 'regular',
  lineHeight: '1.2',
})

const Small = styled('small')({
  fontSize: '0.875rem',
  fontWeight: 'regular',
  lineHeight: '1.2',
})

const Caption = styled('caption')({
  fontSize: '0.75rem',
  fontWeight: 'regular',
  lineHeight: '1.2',
})

// Create a small object map of all the variants written above. The key is the variant name and the value is
// the styled component.
const styledByVariant = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  small: Small,
  caption: Caption,
}

const Typography: React.FC<Props> = ({
  variant = 'paragraph',
  className = '',
  as: asProp,
  color = variant === 'caption' ? '#ccc' : 'inherit',
  children,
  style = {},
  ...props
}) => {
  const resolvedVariant = React.useMemo(() => resolveVariantAliases(variant), [variant])
  const StyledComponentByVariant = React.useMemo(() => styledByVariant[resolvedVariant], [resolvedVariant])

  const { resolveNonThemedColor } = useResolveNonThemedColor()

  return (
    <StyledComponentByVariant
      as={asProp}
      {...props}
      className={`.tui-typography__${resolvedVariant} ${className}`}
      style={{ ...style, color: resolveNonThemedColor(color) }}>
      {children}
    </StyledComponentByVariant>
  )
}

export default Typography
