import path from 'path'
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

const PATHS = {
  src: path.resolve(__dirname, './src'),
  output: path.resolve(__dirname, './public_html'),
  static: path.resolve(__dirname, './src/static'),
  css: path.resolve(__dirname, './src/scss')
}

// https://vitejs.dev/config/
export default defineConfig({
  root: PATHS.static, // where is index.html

  server: {
    port: 80
  },

  resolve: {
    alias: {
      '@': PATHS.src
    },
  },

  plugins: [
    vue()
  ],

  build: {
    emptyOutDir: true,
    outDir: PATHS.output,

    rollupOptions: {
      input: {
        main: `${PATHS.static}/index.html`,
      }
    }
  },

})