const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/*.html',
    './src/**/*.svelte',
  ],
  darkMode: 'media',
  variants: {},
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
    },
    colors: {
      gray: colors.trueGray,
      black: '#141414',
      white: '#fff'
    },
    extend: {}
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}
