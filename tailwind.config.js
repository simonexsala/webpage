const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts}'],
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'open-quote' },
            'blockquote p:first-of-type::after': { content: 'close-quote' },
          },
        },
      },
    },
  }, 
}
