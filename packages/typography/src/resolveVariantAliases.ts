/* eslint-disable indent */
import type { TypographyVariant } from './Typography'

/**
 * Resolve variant aliases, renaming them and returning an element-friendly
 * variant name that is renderable into HTML tags.
 */
function resolveVariantAliases(
  variant: TypographyVariant
): Exclude<
  TypographyVariant,
  'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 's' | 'c' | 'paragraph'
> {
  switch (variant) {
    case 'heading1':
      return 'h1'
    case 'heading2':
      return 'h2'
    case 'heading3':
      return 'h3'
    case 'heading4':
      return 'h4'
    case 'heading5':
      return 'h5'
    case 'heading6':
      return 'h6'
    case 's':
      return 'small'
    case 'c':
      return 'caption'
    case 'paragraph':
      return 'p'
    default:
      return variant
  }
}

export default resolveVariantAliases
