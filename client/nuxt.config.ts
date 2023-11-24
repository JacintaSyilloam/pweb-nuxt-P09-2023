// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/google-fonts"],
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
});
