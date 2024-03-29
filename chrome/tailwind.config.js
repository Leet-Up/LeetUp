/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "background-accent": {
          "DEFAULT": "var(--background-accent)",
          '50': '#f9f7f3',
          '100': '#f3efe7',
          '200': '#e2d8c6',
          '300': '#cfbda2',
          '400': '#bb9e7c',
          '500': '#ad8862',
          '600': '#a07656',
          '700': '#856049',
          '800': '#6d4f3f',
          '900': '#594135',
          '950': '#2f211b',
        },
        "secondary": {
          '50': '#f9f7fb',
          '100': '#f2f0f7',
          '200': '#ebe7f3',
          '300': '#d6cce6',
          '400': '#bfafd6',
          '500': '#a88ec4',
          '600': '#9574b3',
          '700': '#84629f',
          '800': '#6e5186',
          '900': '#5b446e',
          '950': '#3b2c49',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "content-width": "var(--content-width)",
      },
      width: {
        "content-width": "var(--content-width)",
      },
      height: {
        "navbar-height": "var(--navbar-height)",
      },
      spacing: {
        "navbar-height": "var(--navbar-height)",
      }
    },
  },
  plugins: []
}