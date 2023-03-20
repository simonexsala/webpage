const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/line-clamp')
  ]
}
