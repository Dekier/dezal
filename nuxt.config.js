module.exports = {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'pl',
      amp: true,
    },
    title: 'DEŻAL: nowoczesne żaluzje, plisy i rolety | Poznań i okolice.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffe100' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Oferowane przez lokalną firmę DEŻAL Poznań rolety, plisy i żaluzje to najwyższej jakości osłony okienne. Indywidualna oferta, szczegółowy pomiar i szybka realizacja.',
      },
      { 'http-equiv': 'cache-control', content: 'max-age=604800, public' },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat: 300,400',
      },
    ],
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/stylesheets/mixins/main-variables.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    '~/plugins/firebase.js',
    '~/plugins/gtm'
  ],

  pwa: {
    manifest: {
      name: 'Deżal Rolety Poznań',
      short_name: 'Deżal',
      theme_color: '#ffe100',
      lang: 'pl',
    },
    icon: {
      iconFileName: 'logo-pwa.png',
    },
  },

  router: {
    middleware: ['redirect'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    'nuxt-sass-resources-loader',
    '@nuxtjs/sitemap',
  ],

  styleResources: {
    scss: ['@/assets/stylesheets/mixins/*.scss', '@/assets/stylesheets/*.scss'],
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  sitemap: {
    hostname: 'https://dezalroletypoznan.pl',
    gzip: true,
    routes: [
      '/kontakt',
      '/rolety-dzien-noc',
      '/rolety-materialowe',
      '/rolety-rzymskie',
      '/plisy',
      '/zaluzje',
      '/verticale',
      '/moskitiery',
      '/realizacje',
    ],
  },

  build: {
    extend(config, { isServer }) {
      if (isServer) {
        config.externals = {
          '@firebase/app': 'commonjs @firebase/app',
          '@firebase/firestore': 'commonjs @firebase/firestore',
        };
      }
    },
  },
};
