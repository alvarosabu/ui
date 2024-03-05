import {
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  defineConfig,
  presetAttributify,
} from 'unocss'

import type { ConfigBase } from 'unocss'

/* import { imgAspectRatiosSafelist } from '../components/as-img/const' */
import { btnSafelist } from '../components/as-button/const'
import { iconSafelist } from '../components/as-icon/const'
import { imgAspectRatiosSafelist } from '../components/as-img/const'
import { fonts, icons, rules, shortcuts, theme, typography } from '.'

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
