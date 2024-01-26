/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/input.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },

      colors: {
        primary: '#131318',
        secondary: 'rgba(19, 19, 24, 0.60)'
      }
    },
  },
  plugins: [require("daisyui")],
}
