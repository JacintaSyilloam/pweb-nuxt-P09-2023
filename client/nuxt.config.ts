// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NuxtJS Blog",
      meta: [
        { name: "description", content: "Just a simple blog made with NuxtJS" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  css: ["~/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Roboto: [400, 500, 600, 700],
      Lora: [400, 500, 600, 700],
    },
  },
  imports: {
    dirs: ["store"],
  },
  modules: [
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
    "@nuxtjs/google-fonts",
    "nuxt-headlessui",
    "nuxt-swiper",
  ],
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/blogs": { ssr: false },
  },
});
