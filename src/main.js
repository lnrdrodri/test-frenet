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
          background: "#EBF2FA",
          text: "#022B3A",
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#FF5722",
          text: "#EBF2FA",
          background: "#022B3A",
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