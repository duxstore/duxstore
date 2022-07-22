const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F4F7FB',
        brand: '#4B0082',
        body: '#877D8D',
        dark: '#2B2B2B',
        'light-green': '#61FF9A',
        'gray-light': '#DEDADA'
      },
      fontFamily: {
        body: ['Inter'],
        heading: ['Libre Baskerville']
      },
      lineHeight: {
        block: '60px'
      },
      height: {
        100: '35rem'
      }
    }
  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus'],
      scale: ['active', 'group-hover'],
      animation: ['hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [],
}
