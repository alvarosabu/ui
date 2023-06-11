import { ASRules } from './styles/rules'
import { ASTypographyOptions } from './styles/typography'
import { ASShortcuts } from './styles/shortcuts'
import { ASIconsOptions } from './styles/icons'
import { ASWebFontsOptions } from './styles/fonts'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import { ASTheme } from './styles/as-theme'

export * from './components'
export * from './composables'

export default {
  theme: ASTheme,
  fonts: ASWebFontsOptions,
  icons: ASIconsOptions,
  shortcuts: ASShortcuts,
  typography: ASTypographyOptions,
  rules: ASRules,
}
