const { fontFamily } = require('tailwindcss/defaultTheme');

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
    extend: {}
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}
