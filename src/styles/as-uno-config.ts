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

import type { ConfigBase, Preset } from 'unocss'

/* import { imgAspectRatiosSafelist } from '../components/as-img/const' */
import { btnSafelist } from '../components/as-button/const'
import { iconSafelist } from '../components/as-icon/const'
import { imgAspectRatiosSafelist } from '../components/as-img/const'

/* import { theme } from './as-theme'
 */import { fonts, icons, rules, shortcuts, theme, typography } from '.'

/* import { iconSafelist } from '../components/as-icon/const' */

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
    presetIcons(icons),
    presetTypography(typography) as Preset,
    presetWebFonts(fonts) as Preset,
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
}) as ConfigBase