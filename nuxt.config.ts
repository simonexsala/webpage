// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Simone Sala',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ]
    },
  },
  components: true,
  modules: [
    'nuxt-icon',
    '@nuxt/content', 
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
  build: {
    transpile: ['@headlessui/vue', '@tailwindcss/typography'],
  },
})
