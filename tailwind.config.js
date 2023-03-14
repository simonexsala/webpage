const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#1d3557',
      'secondary': '#e63946',
      'accent': '#ddd6fe',
      'dark': '#120309',
      'light-text': '#f1faee',
    },
    extend: {
      keyframes: {
            shake: {
                '0%': {
                    transform: 'translateX(0rem)',
                },
                '25%': {
                    transform: 'translateX(-2px)',
                },
                '75%': {
                    transform: 'translateX(5px)',
                },
                '100%': {
                    transform: 'translateX(0rem)',
                },
            },
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/line-clamp')
  ]
}
