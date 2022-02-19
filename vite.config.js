import path from 'path'
import {
  defineConfig
} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'

const PATHS = {
  output: path.resolve(__dirname, './public_html'),
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80
  },

  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vue()
  ],

  build: {
    emptyOutDir: true,
    outDir: PATHS.output
  }

})