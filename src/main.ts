import { createApp } from 'vue'
import App from './App.vue'

import '../node_modules/nes.css/css/nes.min.css'
import '../node_modules/bulma/css/bulma.min.css'
import './scss/_variables.scss'
import { store } from '@/store';

const app = createApp(App)

app.use(store)
app.mount('#app')

