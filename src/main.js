import { createApp } from 'vue'
import App from './App.vue'

// Importiert UnoCSS (wichtig für die Styles in deinen Komponenten)
import 'virtual:uno.css'

// Importiert deine globalen Styles (falls vorhanden, z.B. für Body-Background)
import './assets/css/base.css'

createApp(App).mount('#app')
