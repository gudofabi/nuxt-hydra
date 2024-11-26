// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  alias: {
    assets: "/<rootDir>/assets",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@pinia/nuxt", "nuxt-auth-sanctum"],
 
  runtimeConfig: {
    public: {
      appTitle: process.env.VITE_APP_TITLE, // Use without VITE_ prefix
      middlewareURL: process.env.VITE_MIDDLEWARE_URL,
      sanctum: {
        baseUrl: "http://localhost:8000",
        csrf: {
          cookie: 'XSRF-TOKEN',
          header: 'X-XSRF-TOKEN',
        },
        globalMiddleware: {
          enabled: false,
          allow404WithoutAuth: true,
        },
      },
    },
  },
});