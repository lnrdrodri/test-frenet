import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default {
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
          primary: '#FF5722',
          secondary: '#C1CED7',
          background: '#f5f5ff',
          surface: '#fafaff',
          text: '#022B3A',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#FF5722',
          secondary: '#C1CED7',
          background: '#022B3A',
          surface: '#0A3241',
          text: '#EBF2FA',
        },
      },
    },
  },
}
