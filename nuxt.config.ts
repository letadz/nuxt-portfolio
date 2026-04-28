// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  ssr: false,

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Space+Grotesk': [400, 500, 600, 700, 800],
    },
    display: 'swap',
    preload: true,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Mark Angelo — Front-End Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Mark Angelo Letada — Front-End Developer specializing in Vue.js, Nuxt.js, React, and Tailwind CSS. Building modern, performant web experiences.',
        },
        { property: 'og:title', content: 'Mark Angelo — Front-End Developer' },
        {
          property: 'og:description',
          content:
            'Front-End Developer specializing in Vue.js, Nuxt.js, and React.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
