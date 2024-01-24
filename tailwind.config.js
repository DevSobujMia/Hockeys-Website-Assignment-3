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
    },
  },
  plugins: [require("daisyui")],
}
