import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import VueTheMask from 'vue-the-mask';

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#F77F00",
          background: "#EBF2FA",
          text: "#022B3A",
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#F77F00",
          text: "#EBF2FA",
          background: "#022B3A",
        }
      },
    },
  },
})

createApp(App)
  .use(vuetify)
  .use(VueTheMask)
  .mount('#app')