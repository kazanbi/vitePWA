import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA = VitePWA({
  srcDir: 'src',
  registerType: 'autoUpdate',
  outDir: "dist/",
  strategies: 'injectManifest',
  injectRegister  : 'auto',
  filename: 'sw.js',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  devOptions: {
    enabled: true,
    type: 'module',
  },
  manifest: {
    name: 'VitePwa',
    short_name: 'PWA',
    theme_color: '#fff',
    icons: [
      {
        src: 'public/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'public/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'public/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA],
})