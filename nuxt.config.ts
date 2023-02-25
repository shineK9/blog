import path from 'path';
import appConfig from './app.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      charset: 'utf-8;',
      viewport: 'width=500, initial-scale=1',
      title: "ShineK9's site",
      meta: [
        {name: 'description', content: "shineK9's amazing site."},
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
    // [
    //   "@nuxtjs/google-fonts",
    //   {
    //     families: {
    //       "Noto+Sans+SC": true,
    //       "Noto+Sans": true,
    //     },
    //   },
    // ],
    [
      '@nuxt/content',
      {
        documentDriven: true,
        sources: {
          // overwrite default source AKA `content` directory
          content: {
            driver: 'fs',
            prefix: appConfig.postPath, // All contents inside this source will be prefixed with `/docs`
            base: path.resolve(__dirname, 'content'),
          },
          // Additional sources
          fa: {
            prefix: '/fa', // All contents inside this source will be prefixed with `/fa`
            driver: 'fs',
            // ...driverOptions
            base: path.resolve(__dirname, 'content-fa'), // Path for source directory
          },
        },
      },
    ],
  ],
});
