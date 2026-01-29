import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// WICHTIG: Ändere dies von '/webpage/' zu '/web/'
// (Da dein Repository "web" heißt)
const repoName = '/web/' 

export default defineConfig({
  base: repoName, 
  plugins: [
    vue(),
    UnoCSS(),
  ],
})
