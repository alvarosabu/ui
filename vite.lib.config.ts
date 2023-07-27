import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import SvgLoader from 'vite-svg-loader'
import dts from 'vite-plugin-dts'
import banner from 'vite-plugin-banner'

import { bold, bgLightGreen } from 'kolorist'

import { resolve } from 'pathe'

import pkg from './package.json'

// eslint-disable-next-line no-console
console.log(`${bold(bgLightGreen(' AS - UI 🎨 '))} v${pkg.version}`)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    Unocss(),
    SvgLoader(),
    banner({
      content: `/**\n * name: ${pkg.name}\n * version: v${
        pkg.version
      }\n * (c) ${new Date().getFullYear()}\n * description: ${pkg.description}\n * author: ${pkg.author}\n */`,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AsUI',
      fileName: 'as-ui',
    },
    watch: {
      include: [resolve(__dirname, 'src')],
    },
    rollupOptions: {
      /*  plugins: [
        analyze(),
        visualizer({
          gzipSize: true,
          brotliSize: true,
          open: true,
        }),
      ], */
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@vueuse/shared', '@vueuse/core'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          '@vueuse/shared': 'VueUseShared',
          '@vueuse/core': 'VueUseCore',
        },
      },
    },
  },
})
