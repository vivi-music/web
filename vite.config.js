import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// IMPORTANT: The 'base' path is the URL where your site will be hosted.
// Since the repository is named "web", we use '/web/' as the base.
// If you host this on your own domain at the root, you might change this to '/'.
const repoName = '/web/' 

export default defineConfig({
  base: repoName, 
  plugins: [
    vue(),
    // UnoCSS plugin provides the atomic CSS engine
    UnoCSS(),
  ],
})
