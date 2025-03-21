import { mount } from '@vue/test-utils'
import ThemeSwitch from '../../components/ThemeSwitch.vue'
import { describe, it, expect } from 'vitest'

describe('ThemeSwitch.vue', () => {
  it('should be able to switch themes', async () => {
    const validTitles = ['Claro', 'Escuro']
    const wrapper = mount(ThemeSwitch)

    const span = wrapper.find('span')

    const initialTitle = span.attributes().title
    expect(validTitles).toContain(initialTitle)

    await span.trigger('click')
    const titleAfterClick = span.attributes().title

    expect(validTitles).toContain(titleAfterClick)

    expect(initialTitle).not.toBe(titleAfterClick)
  })
})
