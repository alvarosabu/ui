import type { TypographyOptions } from '@unocss/preset-typography'
import { theme } from './as-theme'

const headlineStyles = {
  'font-family': 'Gilroy',
}
export const typography: TypographyOptions = {
  cssExtend: {
    'h1': headlineStyles,
    'h2': headlineStyles,
    'h3': headlineStyles,
    'p': {
      'font-family': 'Inter',
      'font-size': '1rem',
    },
    'code': {
      'font-family': 'Fira Code iScript',
      'font-size': '0.875rem',
      'color': `${theme?.colors?.primary[500]} !important`,
    },
    ':not(pre)>code': {
      background: '#e8e8e8 !important',
      padding: '0.25rem 0.5rem !important',
    },
    'blockquote': {
      padding: '1rem',
    },
    'code::after': {
      content: 'none',
    },
    'code::before': {
      content: 'none',
    },
    'a': {
      'color': theme?.colors?.secondary[500],
      'font-weight': 500,
      'text-decoration': 'none',
      'transition': 'color 400ms ease-in-out',
    },
    'a:hover': {
      color: theme?.colors?.secondary[600],
      transition: 'color 400ms ease-in-out',
    },
  },
}
