import vue from '@vitejs/plugin-vue'
import { bgLightGreen, bold } from 'kolorist'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import SvgLoader from 'vite-svg-loader'

import pkg from './package.json'

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
