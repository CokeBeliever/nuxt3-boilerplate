// https://nuxt.com/docs/api/configuration/nuxt-config

const PROCESS_ENV = process.env

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@ant-design-vue/nuxt',
  ],
  dayjs: {
    locales: ['zh-cn', 'en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'zh-cn',
    defaultTimezone: 'UTC+8',
  },
  antd: {
    extractStyle: true,
  },
  app: {
    head: {
      titleTemplate: 'Nuxt3 Boilerplate - %s',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'zh-CN' },
      meta: [{ name: 'description', content: 'Nuxt3 Boilerplate' }],
      link: [],
      script: [],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    port: PROCESS_ENV.PORT,
    public: {
      clientId: PROCESS_ENV.CLIENT_ID,
    },
  },
  devServer: {
    port: Number(PROCESS_ENV.PORT),
  },
  nitro: {
    routeRules: {
      '/api-sso/**': {
        proxy: `${PROCESS_ENV.SSO_BASE_URL}/**`,
      },
    },
  },
})
