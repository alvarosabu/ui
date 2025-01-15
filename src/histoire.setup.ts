import { defineSetupVue3 } from '@histoire/plugin-vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './styles/base.css'

declare module 'histoire' {
  // Extend the story `meta` prop
  interface CommonMeta {
    /**
     * Set to `false` to disable the `WrapperGlobal` component styling.
     */
    wrapper?: boolean
  }
}

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.provide('demo', 42)
})
