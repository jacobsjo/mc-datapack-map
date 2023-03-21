import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './locales/**')]
    }),
    VitePWA({
      injectRegister: 'script',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,zip}'],
        maximumFileSizeToCacheInBytes: 5000000,
        runtimeCaching: [
          {
            urlPattern: new RegExp('https://raw.githubusercontent.com/jacobsjo/mcicons/icons/item/.*'),
            handler: 'CacheFirst',
            options: {
              cacheName: "mcicons-cache",
              expiration: {
                maxEntries: 3000,
                maxAgeSeconds: 60 * 60 * 24 * 90 // 90 days
              }
            }
          }
        ],
        skipWaiting: true,
        clientsClaim: true
      },
      manifest: {
        name: 'Minecraft Datapack Map',
        short_name: 'MC Datapack Map',
        description: 'A Minecraft biome map capable of handling worldgen datapacks.',
        theme_color: '#03213a',
        icons: [
          {
            src: 'favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          },
          {
            src: 'favicon-monochrome.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'monochrome'
          },
          {
            src: 'favicon-maskable.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable'
          }

        ]
      }
    })
  ],
  build: {
    sourcemap: true
  }
})
