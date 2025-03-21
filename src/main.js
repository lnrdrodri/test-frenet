import { createApp } from 'vue'

import { createVuetify } from 'vuetify'
import vuetifyOptions from '../config/vuetify'
import 'vuetify/styles'

import VueTheMask from 'vue-the-mask'

import { createPinia } from 'pinia'

import App from './App.vue'

const vuetify = createVuetify({ ...vuetifyOptions })

const pinia = createPinia()

const app = createApp(App)
app.use(vuetify)
app.use(VueTheMask)
app.use(pinia)
app.mount('#app')
