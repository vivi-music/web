
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// TODO: Replace with your actual repository name
// If deploying to [https://org.github.io/repo-name/](https://org.github.io/repo-name/), set base to '/repo-name/'
// If deploying to [https://org.github.io/](https://org.github.io/), set base to '/'
const repoName = '/web/' 

export default defineConfig({
  base: repoName, 
  plugins: [
    vue(),
    UnoCSS(),
  ],
})
