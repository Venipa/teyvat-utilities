const theme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: '.dark-mode',
    colors: {
      ...theme.colors,
      gray: {
        DEFAULT: '#63676C',
        50: '#FCFCFC',
        100: '#F9F9F9',
        200: '#D5DBE2',
        300: '#D1D3D6',
        400: '#B5B8BC',
        500: '#63676C',
        600: '#424549',
        700: '#36393e',
        800: '#282b30',
        900: '#1e2124',
      },
      primary: {
        DEFAULT: '#7289DA',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#EBEEFA',
        300: '#C3CDEF',
        400: '#9AABE5',
        500: '#7289DA',
        600: '#4A67CF',
        700: '#304EB6',
        800: '#253C8E',
        900: '#1B2B65',
      },
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  purge: {
    options: {
      safelist: ['blog-content', 'nuxt-content'],
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
