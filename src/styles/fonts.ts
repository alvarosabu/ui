import type { WebFontsOptions } from '@unocss/preset-web-fonts'

export const fonts: WebFontsOptions = {
  provider: 'google', // default provider
  fonts: {
    // these will extend the default theme
    sans: ['Inter', 'Inter:400,700'],
    mono: ['Fira Code', 'Fira Code:400,700' ],
    display: ['Gilroy'],
  },
}

export default fonts
