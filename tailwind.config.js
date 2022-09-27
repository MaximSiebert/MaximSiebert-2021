const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/*.html',
      './src/**/*.svelte',
    ]
  },
  darkMode: 'media',
  variants: {},
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
      serif: [...fontFamily.serif],
    },
    colors: {
      gray: {
        100: '#EAE9E5',
        400: '#AAA496',
        600: '#695F47',
        800: '#243513',
      },
      black: '#19260C',
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
