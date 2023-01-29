/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin", "tailgrids/plugin");
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./ecommerce/*.html",
    "./assets/**/*.js",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "30px",
    },
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#64748b",
        dark: "#0f172a",
        igs: "#E4405F",
        fbk: "#1877F2",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  safelist: [
    "!duration-0",
    "!delay-0",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailgrids/plugin"),
    require("taos/plugin"),
  ],
};
