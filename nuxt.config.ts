// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  modules: [
    'nuxt-icon',
    '@nuxt/content', 
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
  head: {
    title: 'Simone Sala',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  app: {
  },
})
