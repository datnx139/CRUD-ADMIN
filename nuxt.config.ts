// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },
  modules: [
    '@pinia/nuxt'
  ],
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap'
        }
      ]
    }
  },
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true
      },
      '~/components'
    ]
  },
  css: ['~/assets/scss/index.scss'],
  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
    ],
  }
})
