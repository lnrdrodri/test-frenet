import { beforeEach, vi } from 'vitest'
import { config } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import vuetifyOptions from '../../config/vuetify'
import 'vuetify/styles'

import { createPinia, setActivePinia } from 'pinia'

const vuetify = createVuetify({ ...vuetifyOptions })

beforeEach(() => {
  setActivePinia(createPinia())
})

config.global.plugins = [vuetify]
config.global.directives = {
  mask: vi.fn(),
}
