module.exports = {
  mode: 'universal',
  target: 'server',

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
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

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

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: false,
    extend(config, ctx) {
      // Run ESLint on save
      config.node = {
        fs: 'empty',
      };
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
};
