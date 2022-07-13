const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F4F7FB',
        brand: '#4B0082',
        body: '#877D8D'
      },
      fontFamily: {
        body: ['Inter'],
        heading: ['Libre Baskerville']
      },
      lineHeight: {
        block: '60px'
      }
    }
  },
  plugins: [],
}
