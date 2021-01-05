export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Restaurant-Picasso Grand Hotel',
    script: [
      {
        src: 'https://unpkg.com/swiper/swiper-bundle.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet',  href:"https://use.fontawesome.com/releases/v5.0.9/css/all.css" },
    { rel: 'stylesheet',  href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap" },
    { rel: 'stylesheet',  href:"https://unpkg.com/swiper/swiper-bundle.css" },
    { rel: 'stylesheet',  href:"https://unpkg.com/swiper/swiper-bundle.min.css" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // Tailwind (https://tailwindcss.com/docs/guides/nuxtjs)
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // nuxtjs style resources
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // You will have add this new object
  styleResources: {
    scss: ['@/assets/scss/vars/*.scss', '@/assets/scss/abstracts/*.scss'],
  },
}
