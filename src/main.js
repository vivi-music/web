import { createApp } from 'vue'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import i18n from './i18n'

/** * Virtueller Import für UnoCSS (generiert Utility-Classes)
 */
import 'virtual:uno.css'

/** * Dein angepasster Pfad zur Basis-CSS
 */
import './assets/css/base.css'

const app = createApp(App)

app.use(i18n)
app.use(Vue3Lottie)

app.mount('#app')