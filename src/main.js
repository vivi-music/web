import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

/** 
 * Virtual import for UnoCSS.
 * It generates atomic CSS utility classes on the fly based on your usage in components.
 */
import 'virtual:uno.css'

/** 
 * Import the global base CSS.
 * This file contains Material 3 design tokens, global resets, and shared animations.
 */
import './assets/css/base.css'

const app = createApp(App)

app.use(i18n)

app.mount('#app')