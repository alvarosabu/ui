// vite.config.ts
import { defineConfig } from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/vite@5.1.5_sass@1.71.1/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.5_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Unocss from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.35_vite@5.1.5/node_modules/unocss/dist/vite.mjs";
import SvgLoader from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.4.21/node_modules/vite-svg-loader/index.js";
import dts from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/vite-plugin-dts@3.7.3_typescript@5.3.3_vite@5.1.5/node_modules/vite-plugin-dts/dist/index.mjs";
import { bold, bgLightGreen } from "file:///Users/alvarosabu/Projects/alvarosabu/ui/node_modules/.pnpm/kolorist@1.8.0/node_modules/kolorist/dist/esm/index.mjs";

// package.json
var package_default = {
  name: "@alvarosabu/ui",
  type: "module",
  version: "3.0.0-alpha.14",
  packageManager: "pnpm@8.12.0",
  description: "UI Library for my personal projects",
  author: "Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)",
  license: "MIT",
  funding: "https://github.com/sponsors/alvarosabu",
  homepage: "https://github.com/alvarosabu/ui#readme",
  repository: {
    type: "git",
    url: "git+https://github.com/alvarosabu/ui.git"
  },
  bugs: {
    url: "https://github.com/alvarosabu/ui/issues"
  },
  keywords: [
    "ui",
    "vue",
    "composable"
  ],
  sideEffects: false,
  exports: {
    ".": {
      types: "./dist/as-ui.d.ts",
      require: "./dist/as-ui.umd.cjs",
      import: "./dist/as-ui.js"
    },
    "./styles": "./dist/style.css",
    "./*": "./*"
  },
  main: "./dist/as-ui.umd.cjs",
  module: "./dist/as-ui.js",
  types: "./dist/as-ui.d.ts",
  publishConfig: {
    access: "public"
  },
  files: [
    "dist",
    "*.d.ts"
  ],
  scripts: {
    dev: "vite",
    build: "vite build --config vite.lib.config.ts",
    preview: "vite preview",
    lint: "eslint --ext .ts,.tsx .",
    test: "vitest",
    release: "release-it",
    "release:alpha": "release-it --preRelease=alpha",
    "test:ui": "vitest --ui",
    "story:dev": "histoire dev",
    "story:build": "histoire build",
    "story:preview": "histoire preview",
    playground: "cd playground && npm run dev"
  },
  dependencies: {
    "@vueuse/core": "^10.9.0",
    sass: "^1.71.1",
    shikey: "^0.0.2",
    vue: "^3.4.21"
  },
  devDependencies: {
    "@alvarosabu/eslint-config": "^0.4.0",
    "@alvarosabu/eslint-config-vue": "^0.4.0",
    "@histoire/plugin-vue": "^0.17.12",
    "@iconify-json/ant-design": "^1.1.15",
    "@iconify-json/carbon": "^1.1.31",
    "@iconify-json/gg": "^1.1.9",
    "@iconify-json/logos": "^1.1.42",
    "@iconify-json/octicon": "^1.1.52",
    "@iconify-json/teenyicons": "^1.1.9",
    "@iconify/json": "^2.2.189",
    "@release-it/conventional-changelog": "^8.0.1",
    "@unocss/preset-web-fonts": "^0.58.5",
    "@vitejs/plugin-vue": "^5.0.4",
    "@vitest/ui": "^1.3.1",
    eslint: "^8.57.0",
    histoire: "^0.17.9",
    kolorist: "^1.8.0",
    pathe: "^1.1.2",
    "release-it": "^17.1.1",
    typescript: "^5.3.3",
    unocss: "^0.58.5",
    vite: "^5.1.5",
    "vite-plugin-banner": "^0.7.1",
    "vite-plugin-dts": "^3.7.3",
    "vite-svg-loader": "^5.1.0",
    vitest: "^1.3.1"
  }
};

// vite.config.ts
console.log(`${bold(bgLightGreen(" AS - UI \u{1F3A8} "))} v${package_default.version}`);
var vite_config_default = defineConfig({
  plugins: [
    vue({}),
    dts({
      insertTypesEntry: true
    }),
    Unocss(),
    SvgLoader()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FsdmFyb3NhYnUvUHJvamVjdHMvYWx2YXJvc2FidS91aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FsdmFyb3NhYnUvUHJvamVjdHMvYWx2YXJvc2FidS91aS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWx2YXJvc2FidS9Qcm9qZWN0cy9hbHZhcm9zYWJ1L3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBTdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmltcG9ydCB7IGJvbGQsIGJnTGlnaHRHcmVlbiB9IGZyb20gJ2tvbG9yaXN0J1xuXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuY29uc29sZS5sb2coYCR7Ym9sZChiZ0xpZ2h0R3JlZW4oJyBBUyAtIFVJIFx1RDgzQ1x1REZBOCAnKSl9IHYke3BrZy52ZXJzaW9ufWApXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSh7XG4gICAgfSksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgfSksXG4gICAgVW5vY3NzKCksXG4gICAgU3ZnTG9hZGVyKCksXG4gIF0sXG59KVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiQGFsdmFyb3NhYnUvdWlcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwidmVyc2lvblwiOiBcIjMuMC4wLWFscGhhLjE0XCIsXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDguMTIuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVUkgTGlicmFyeSBmb3IgbXkgcGVyc29uYWwgcHJvamVjdHNcIixcbiAgXCJhdXRob3JcIjogXCJBbHZhcm8gU2FidXJpZG8gPGhvbGFAYWx2YXJvc2FidXJpZG8uZGV2PiAoaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3NhYnUvKVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJmdW5kaW5nXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Nwb25zb3JzL2FsdmFyb3NhYnVcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm9zYWJ1L3VpI3JlYWRtZVwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm9zYWJ1L3VpLmdpdFwiXG4gIH0sXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvc2FidS91aS9pc3N1ZXNcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcInVpXCIsXG4gICAgXCJ2dWVcIixcbiAgICBcImNvbXBvc2FibGVcIlxuICBdLFxuICBcInNpZGVFZmZlY3RzXCI6IGZhbHNlLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2FzLXVpLmQudHNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9hcy11aS51bWQuY2pzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9hcy11aS5qc1wiXG4gICAgfSxcbiAgICBcIi4vc3R5bGVzXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiLFxuICAgIFwiLi8qXCI6IFwiLi8qXCJcbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2FzLXVpLnVtZC5janNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvYXMtdWkuanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9hcy11aS5kLnRzXCIsXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9LFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIixcbiAgICBcIiouZC50c1wiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGQgLS1jb25maWcgdml0ZS5saWIuY29uZmlnLnRzXCIsXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC0tZXh0IC50cywudHN4IC5cIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3RcIixcbiAgICBcInJlbGVhc2VcIjogXCJyZWxlYXNlLWl0XCIsXG4gICAgXCJyZWxlYXNlOmFscGhhXCI6IFwicmVsZWFzZS1pdCAtLXByZVJlbGVhc2U9YWxwaGFcIixcbiAgICBcInRlc3Q6dWlcIjogXCJ2aXRlc3QgLS11aVwiLFxuICAgIFwic3Rvcnk6ZGV2XCI6IFwiaGlzdG9pcmUgZGV2XCIsXG4gICAgXCJzdG9yeTpidWlsZFwiOiBcImhpc3RvaXJlIGJ1aWxkXCIsXG4gICAgXCJzdG9yeTpwcmV2aWV3XCI6IFwiaGlzdG9pcmUgcHJldmlld1wiLFxuICAgIFwicGxheWdyb3VuZFwiOiBcImNkIHBsYXlncm91bmQgJiYgbnBtIHJ1biBkZXZcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTAuOS4wXCIsXG4gICAgXCJzYXNzXCI6IFwiXjEuNzEuMVwiLFxuICAgIFwic2hpa2V5XCI6IFwiXjAuMC4yXCIsXG4gICAgXCJ2dWVcIjogXCJeMy40LjIxXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFsdmFyb3NhYnUvZXNsaW50LWNvbmZpZ1wiOiBcIl4wLjQuMFwiLFxuICAgIFwiQGFsdmFyb3NhYnUvZXNsaW50LWNvbmZpZy12dWVcIjogXCJeMC40LjBcIixcbiAgICBcIkBoaXN0b2lyZS9wbHVnaW4tdnVlXCI6IFwiXjAuMTcuMTJcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vYW50LWRlc2lnblwiOiBcIl4xLjEuMTVcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vY2FyYm9uXCI6IFwiXjEuMS4zMVwiLFxuICAgIFwiQGljb25pZnktanNvbi9nZ1wiOiBcIl4xLjEuOVwiLFxuICAgIFwiQGljb25pZnktanNvbi9sb2dvc1wiOiBcIl4xLjEuNDJcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vb2N0aWNvblwiOiBcIl4xLjEuNTJcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vdGVlbnlpY29uc1wiOiBcIl4xLjEuOVwiLFxuICAgIFwiQGljb25pZnkvanNvblwiOiBcIl4yLjIuMTg5XCIsXG4gICAgXCJAcmVsZWFzZS1pdC9jb252ZW50aW9uYWwtY2hhbmdlbG9nXCI6IFwiXjguMC4xXCIsXG4gICAgXCJAdW5vY3NzL3ByZXNldC13ZWItZm9udHNcIjogXCJeMC41OC41XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4wLjRcIixcbiAgICBcIkB2aXRlc3QvdWlcIjogXCJeMS4zLjFcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcbiAgICBcImhpc3RvaXJlXCI6IFwiXjAuMTcuOVwiLFxuICAgIFwia29sb3Jpc3RcIjogXCJeMS44LjBcIixcbiAgICBcInBhdGhlXCI6IFwiXjEuMS4yXCIsXG4gICAgXCJyZWxlYXNlLWl0XCI6IFwiXjE3LjEuMVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjMuM1wiLFxuICAgIFwidW5vY3NzXCI6IFwiXjAuNTguNVwiLFxuICAgIFwidml0ZVwiOiBcIl41LjEuNVwiLFxuICAgIFwidml0ZS1wbHVnaW4tYmFubmVyXCI6IFwiXjAuNy4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy43LjNcIixcbiAgICBcInZpdGUtc3ZnLWxvYWRlclwiOiBcIl41LjEuMFwiLFxuICAgIFwidml0ZXN0XCI6IFwiXjEuMy4xXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFTLG9CQUFvQjtBQUN2VSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUN0QixPQUFPLFNBQVM7QUFFaEIsU0FBUyxNQUFNLG9CQUFvQjs7O0FDTm5DO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxnQkFBa0I7QUFBQSxFQUNsQixhQUFlO0FBQUEsRUFDZixRQUFVO0FBQUEsRUFDVixTQUFXO0FBQUEsRUFDWCxTQUFXO0FBQUEsRUFDWCxVQUFZO0FBQUEsRUFDWixZQUFjO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixLQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsTUFBUTtBQUFBLElBQ04sS0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFVBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFlO0FBQUEsRUFDZixTQUFXO0FBQUEsSUFDVCxLQUFLO0FBQUEsTUFDSCxPQUFTO0FBQUEsTUFDVCxTQUFXO0FBQUEsTUFDWCxRQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsWUFBWTtBQUFBLElBQ1osT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE1BQVE7QUFBQSxFQUNSLFFBQVU7QUFBQSxFQUNWLE9BQVM7QUFBQSxFQUNULGVBQWlCO0FBQUEsSUFDZixRQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsT0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsT0FBUztBQUFBLElBQ1QsU0FBVztBQUFBLElBQ1gsTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsaUJBQWlCO0FBQUEsSUFDakIsWUFBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2QsZ0JBQWdCO0FBQUEsSUFDaEIsTUFBUTtBQUFBLElBQ1IsUUFBVTtBQUFBLElBQ1YsS0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCLDZCQUE2QjtBQUFBLElBQzdCLGlDQUFpQztBQUFBLElBQ2pDLHdCQUF3QjtBQUFBLElBQ3hCLDRCQUE0QjtBQUFBLElBQzVCLHdCQUF3QjtBQUFBLElBQ3hCLG9CQUFvQjtBQUFBLElBQ3BCLHVCQUF1QjtBQUFBLElBQ3ZCLHlCQUF5QjtBQUFBLElBQ3pCLDRCQUE0QjtBQUFBLElBQzVCLGlCQUFpQjtBQUFBLElBQ2pCLHNDQUFzQztBQUFBLElBQ3RDLDRCQUE0QjtBQUFBLElBQzVCLHNCQUFzQjtBQUFBLElBQ3RCLGNBQWM7QUFBQSxJQUNkLFFBQVU7QUFBQSxJQUNWLFVBQVk7QUFBQSxJQUNaLFVBQVk7QUFBQSxJQUNaLE9BQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxJQUNkLFlBQWM7QUFBQSxJQUNkLFFBQVU7QUFBQSxJQUNWLE1BQVE7QUFBQSxJQUNSLHNCQUFzQjtBQUFBLElBQ3RCLG1CQUFtQjtBQUFBLElBQ25CLG1CQUFtQjtBQUFBLElBQ25CLFFBQVU7QUFBQSxFQUNaO0FBQ0Y7OztBRC9FQSxRQUFRLElBQUksR0FBRyxLQUFLLGFBQWEscUJBQWMsQ0FBQyxDQUFDLEtBQUssZ0JBQUksT0FBTyxFQUFFO0FBRW5FLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUksQ0FDSixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsRUFDWjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
