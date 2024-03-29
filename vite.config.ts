import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import SvgLoader from 'vite-svg-loader'
import dts from 'vite-plugin-dts'

import { bgLightGreen, bold } from 'kolorist'

import pkg from './package.json'

// eslint-disable-next-line no-console
console.log(`${bold(bgLightGreen(' AS - UI 🎨 '))} v${pkg.version}`)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
    }),
    dts({
      insertTypesEntry: true,
    }),
    Unocss(),
    SvgLoader(),
  ],
})
