const pkg = require('./package.json')
const path = require('path')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Teyvat - Genshin Impact Utilities',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Genshin Impact is miHoYo's first ever open-world game, where beliefs in "The Seven" converge in the fantasy world of Teyvat. The devastation that once swept the land has finally ceased. Wounds have healed, but the peace that should have fallen over the city of wind, Mondstadt, did not arrive. The domineering Fatui have risen up in the name of "defense" to oppress other city-states. Traveler, the time has come to begin your own adventure with Paimon in this new land!`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/tippy.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID || '',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/color-mode',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-purgecss',
    'nuxt-seo',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  netlify: {
    mergeSecurityHeaders: true,
    headers: {
      '/*': ['Access-Control-Allow-Origin: *', `X-Build: ${pkg.name}#${pkg.version}`],
      '/favicon.ico': ['Cache-Control: public, max-age=86400'],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    postcss: {
      plugins: { tailwindcss: path.resolve(__dirname, './tailwind.config.js') },
    },
  },
  purgeCSS: { whitelist: ['dark-mode'] },
  tailwindcss: {
    configPath: 'tailwind.config.js',
  },
  seo: {
    baseUrl: 'https://teyvat.venipa.net',
    name: 'Teyvat - Genshin Impact Utilities',
    title: '%name%',
    templateTitle: '%name%',
    description: `Genshin Impact is miHoYo's first ever open-world game, where beliefs in "The Seven" converge in the fantasy world of Teyvat. The devastation that once swept the land has finally ceased. Wounds have healed, but the peace that should have fallen over the city of wind, Mondstadt, did not arrive. The domineering Fatui have risen up in the name of "defense" to oppress other city-states. Traveler, the time has come to begin your own adventure with Paimon in this new land!`,
    canonical: 'auto',
    isForcedTrailingSlash: false,
    image: '/assets/img/logo.png',
    keywords: 'genshin impact,genshin,teyvat,gacha,mihoyo,the seven,city of wind,mondstadt,liyue,open-world game,wiki,utilities,teyvat utilities,genshin impact tool',
    openGraph: {
      type: 'website',
    },
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    appName: 'Teyvat Utilities',
  },
}
