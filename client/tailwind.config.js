const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        mini: "6px",
        searchIcon: "26px",
        // navbar
        "fluid-nav-logo": "clamp(1.88rem, calc(1.70rem + 0.85vw), 2.25rem)", // 30px to 36px | 320px to 1024px
        "fluid-nav-icon": "clamp(1.00rem, calc(0.50rem + 2.50vw), 1.50rem)", // 16px to 24px | 320px to 768px
        // landing page (latest, highlight, recommended)
        "fluid-landingPage-header":
          "clamp(1.63rem, calc(1.45rem + 0.89vw), 1.88rem)", // 30px to 26px | 320px to 768px
        // header news card
        "fluid-headerCard-title":
          "clamp(1.00rem, calc(0.94rem + 0.28vw), 1.13rem)", // 16px to 18px | 320px to 1024px
        "fluid-headerCard-description":
          "clamp(0.88rem, calc(0.82rem + 0.28vw), 1.00rem)", // 14px to 16px | 320px to 1024px
        "fluid-headerCard-dot":
          "clamp(0.38rem, calc(0.32rem + 0.28vw), 0.50rem)", // 6px to 8px | 320px to 1024px
      },
      spacing: {
        clamp: "0.14em",
        1.5: "6px",
        19: "72px",
        maxWidthSearch: "500px",
        // navbar
        "fluid-nav": "clamp(0.50rem, calc(-2.00rem + 12.50vw), 8.00rem)", // 8px to 128px | 320px to 1280px | margin-x
        // landing page
        "fluid-x": "clamp(1.00rem, calc(-1.67rem + 13.33vw), 9.00rem)", // 16px to 144px | 320px to 1280px | margin-x
        // header news card
        "fluid-headerCard": "clamp(1.00rem, calc(-0.36rem + 6.82vw), 4.00rem)", // 16px to 64px | 320px to 1024px
        "fluid-gap-section": "clamp(3.00rem, calc(2.32rem + 3.41vw), 4.50rem)", // 48px to 72px | 320px to 1024px
        // big news card
        "fluid-size": "clamp(25.00rem, calc(8.33rem + 41.67vw), 35.00rem)", // 400px to 560px | 320px to 1024px
      },
    },
  },
  plugins: [],
};
