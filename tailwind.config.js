/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: "1024px",
      md: "768px",
      "mobile-s": "318px",
      "mobile-m": "375px",
      "mobile-l": "425px",
      "tablet": "500px",
      "tablet-m": "752px",
      "tablet-l": "960px",
      "laptop-s": "1200px",
      laptop: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
