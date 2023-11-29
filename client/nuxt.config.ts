// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "NuxtJS Blog",
      meta: [
        { name: "description", content: "Just a simple blog made with NuxtJS" },
      ],
    },
  },
  css: ["~/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/google-fonts", "nuxt-headlessui", "nuxt-swiper"],
  googleFonts: {
    families: {
      Roboto: [400, 500, 600, 700],
      Lora: [400, 500, 600, 700],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  generate: {
    routes: ["/blog"],
  },
});
