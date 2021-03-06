// @ts-check
import 'dotenv/config'

/**
 * @type {import('@nuxt/types').NuxtConfig}
 */
const config = {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false,
  },

  head: {
    title: 'Blagues API',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        // Windows
        name: 'msapplication-navbutton-color',
        content: '#0098ff',
      },
      {
        // Windows
        name: 'msapplication-TileColor',
        content: '#0098ff',
      },
      {
        // Pinned Sites
        name: 'application-name',
        content: 'Blagues API',
      },
      {
        // Pinned Sites
        name: 'msapplication-tooltip',
        content:
          'Blagues API est une API de blagues françaises gratuite et communautaire gérée par sa communauté Discord.',
      },
      {
        // Pinned Sites
        name: 'msapplication-starturl',
        content: '/',
      },
      {
        // Tap highlighting
        name: 'msapplication-tap-highlight',
        content: 'no',
      },
      {
        // UC Mobile Browser
        name: 'full-screen',
        content: 'Yes',
      },
      {
        // UC Mobile Browser
        name: 'browsermode',
        content: 'application',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Blagues API est une API de blagues françaises gratuite et communautaire gérée par sa communauté Discord.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Blagues API',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Blagues API est une API de blagues françaises gratuite et communautaire gérée par sa communauté Discord.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Blagues API',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Blagues API est une API de blagues françaises gratuite et communautaire gérée par sa communauté Discord.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/logo.png`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${process.env.BASE_URL}/logo.png`,
      },

      // Twitter card
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: `${process.env.BASE_URL}/logo.png`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['./assets/css/reset.css'],

  components: true,

  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
  ],

  modules: [
    // https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/
    '@draftbot/nuxtjs-auth',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],

  axios: {
    proxy: true,
  },

  auth: {
    strategies: {
      discord: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://discord.com/api/oauth2/authorize',
          token: `${process.env.API_URL}/api/auth/token`,
          userInfo: `${process.env.API_URL}/api/auth/user`,
        },
        token: {
          global: false,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 604800,
        },
        responseType: 'code',
        redirectUri: `${process.env.BASE_URL}/login/callback`,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        scope: ['identify'],
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
      },
    },
    redirect: {
      callback: '/login/callback',
      login: '/',
      logout: '/',
      home: '/',
    },
    loginIfNeeded: true,
  },

  proxy: {
    '/api': { target: process.env.API_URL },
  },

  pwa: {
    icon: {
      source: './static/logo.png',
      fileName: 'logo.png',
    },
    manifest: {
      name: 'Blagues API',
      short_name: 'Blagues API',
      description:
        'Blagues API est une API de blagues françaises gratuite et communautaire gérée par sa communauté Discord.',
      background_color: '#002b36',
      theme_color: '#0098ff',
      lang: 'fr',
    },
    meta: {
      name: 'Blagues API',
      author: 'DraftMan',
      description:
        'Blagues API est une API de blagues françaises gratuite et communautaire gérée par sa communauté Discord.',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      favicon: true,
      theme_color: '#002b36',
      lang: 'fr',
      ogSiteName: 'Blagues-API.fr',
      ogHost: 'https://www.blagues-api.fr',
      ogImage: true,
      twitterCard: 'summary',
      twitterSite: '@Blagues-API',
      twitterCreator: '@DraftMan_Dev',
      nativeUI: true,
    },
  },

  robots: {
    UserAgent: '*',
    Disallow: process.env.SEO === 'false' ? '/' : '',
    Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  },

  build: {
    postcss: {
      preset: {
        stage: 2,
        autoprefixer: {
          flexbox: true,
        },
      },
    },
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      presets: ['@nuxt/babel-preset-app'],
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        [
          'prismjs',
          {
            languages: ['javascript', 'bash'],
            plugins: ['copy-to-clipboard', 'normalize-whitespace', 'keep-markup'],
            css: false,
          },
        ],
      ],
    },
  },

  publicRuntimeConfig: {
    apiToken: process.env.API_TOKEN,
  },

  privateRuntimeConfig: {
    apiToken: process.env.API_TOKEN,
  },
}

export default config
