// vite.config.ts
import { dts } from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.10_rollup@4.18.0_typescript@5.5.3_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_/node_modules/vite-plugin-dts/dist/index.mjs";
import { defineConfig } from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10_sass@1.77.6/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.3_@types+node@20.14.10_sass@1.77.6__vue@3.4.31_typescript@5.5.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs";
import UnoCSS from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/unocss@0.61.2_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "/Users/alvarosabu/Projects/alvarosabu/ui/playground";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      configFile: resolve(__vite_injected_original_dirname, "../unocss.config.ts")
    }),
    dts()
  ],
  resolve: {
    alias: {
      "@alvarosabu/ui": resolve(__vite_injected_original_dirname, "../src/")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWx2YXJvc2FidS9Qcm9qZWN0cy9hbHZhcm9zYWJ1L3VpL3BsYXlncm91bmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hbHZhcm9zYWJ1L1Byb2plY3RzL2FsdmFyb3NhYnUvdWkvcGxheWdyb3VuZC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWx2YXJvc2FidS9Qcm9qZWN0cy9hbHZhcm9zYWJ1L3VpL3BsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkdHMgfSBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aGUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFVub0NTUyh7XG4gICAgICBjb25maWdGaWxlOiByZXNvbHZlKF9fZGlybmFtZSwgJy4uL3Vub2Nzcy5jb25maWcudHMnKSxcbiAgICB9KSxcbiAgICBkdHMoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQGFsdmFyb3NhYnUvdWknOiByZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy8nKSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxXQUFXO0FBQy9WLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxZQUFZO0FBSm5CLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNMLFlBQVksUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxJQUN0RCxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsa0JBQWtCLFFBQVEsa0NBQVcsU0FBUztBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
