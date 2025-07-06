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
        globPatterns: ['**/*.{js,css,html,svg,png,txt,webp}'],
        maximumFileSizeToCacheInBytes: 2e+9, // 2 GB
        runtimeCaching: [
          // vanilla datapacks
          {
            urlPattern: /^https?:\/\/(map\.jacobsjo\.eu|localhost:4173)\/vanilla_datapacks\/.*\.zip$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: "vanilla-datapack-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 90 // 90 days
              },
              cacheableResponse: {
                statuses: [200]
              }              
            }
          },
          // structure icons from mcicons
          {
            urlPattern: /^https:\/\/raw\.githubusercontent\.com\/jacobsjo\/mcicons\/icons\/item\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: "mcicons-cache",
              expiration: {
                maxEntries: 3000,
                maxAgeSeconds: 60 * 60 * 24 * 90 // 90 days
              },
              cacheableResponse: {
                statuses: [200]
              },
              fetchOptions: {

              }            
            }
          },
          // datapacks/mods downloaded from modrinth cdn
          {
            urlPattern: /^https:\/\/cdn\.modrinth\.com\/data\/.*\.(zip|jar)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: "modrinth-cdn-cache",
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
                purgeOnQuotaError: true
              },
              cacheableResponse: {
                statuses: [200]
              }              
            }
          },
          // thumbnails downloaded from modrinth cdn
          {
            urlPattern: /^https:\/\/cdn\.modrinth\.com\/data\/.*\.webp$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: "modrinth-cdn-image-cache",
              expiration: {
                maxEntries: 3000,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
              },
              cacheableResponse: {
                statuses: [200]
              }              
            }
          },
          // modrinth api request for projects (not search), used as backup for recents in offline mode
          {
            urlPattern: /^https:\/\/api\.modrinth\.com\/v2\/project\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: "modrinth-api-cache",
              expiration: {
                maxEntries: 3000,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              },
              cacheableResponse: {
                statuses: [200]
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
