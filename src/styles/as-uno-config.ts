import type { ConfigBase } from 'unocss'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { fonts, icons, rules, shortcuts, theme, typography } from '.'
/* import { imgAspectRatiosSafelist } from '../components/as-img/const' */
import { btnSafelist } from '../components/as-button/const'
import { iconSafelist } from '../components/as-icon/const'
import { imgAspectRatiosSafelist } from '../components/as-img/const'

/**
 * Configuration object for ASUno.
 */
export const ASUnoConfig = defineConfig({
  theme,
  shortcuts,
  rules,
  safelist: [
    ...btnSafelist,
    ...iconSafelist,
    ...imgAspectRatiosSafelist,
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts(fonts),
    presetIcons(icons),
    presetTypography(typography),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
}) as ConfigBase
