import svgLoader from 'vite-svg-loader'
import prismJs from 'vite-plugin-prismjs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/reset.css'],

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@sidebase/nuxt-auth'
  ],

  auth: {
    origin: process.env.BASE_URL,
    defaultProvider: 'discord'
  },

  vite: {
    plugins: [
      svgLoader(),
      prismJs({
        languages: ['javascript', 'bash'],
        plugins: ['copy-to-clipboard', 'normalize-whitespace', 'keep-markup'],
        css: false
      })
    ]
  },

  nitro: {
    routeRules: {
      '/api/regenerate': { proxy: `${process.env.API_URL}/api/regenerate` }
    }
  },

  runtimeConfig: {
    public: {
      apiToken: process.env.API_TOKEN
    }
  }
})
