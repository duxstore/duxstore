const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F4F7FB',
        brand: '#4B0082'
      },
      fontFamily: {
        body: ['Inter sans-serif']
      }
    }
  },
  plugins: [],
}
