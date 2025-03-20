import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import VueTheMask from 'vue-the-mask';

import { createPinia } from "pinia";

import App from './App.vue'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#FF5722",
          secondary: "#C1CED7",
          background: "#f5f5ff",
          surface: '#fafaff',
          text: "#022B3A",
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#FF5722",
          secondary: "#C1CED7",
          background: '#022B3A',
          surface: "#0A3241",
          text: "#EBF2FA",
        }
      },
    },
  },
})

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(VueTheMask)
  .use(pinia)
  .mount('#app')