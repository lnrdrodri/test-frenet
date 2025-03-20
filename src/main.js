import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import vuetifyOptions from '../config/vuetify'

import VueTheMask from 'vue-the-mask'

import { createPinia } from 'pinia'

import App from './App.vue'

const vuetify = createVuetify({ ...vuetifyOptions })

const pinia = createPinia()

createApp(App).use(vuetify).use(VueTheMask).use(pinia).mount('#app')
