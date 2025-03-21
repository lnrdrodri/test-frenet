import { mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'
import { describe, it, expect } from 'vitest'

describe('Form.vue', () => {
  it('should be able to render', async () => {
    const wrapper = mount(Form)
    // console.log(wrapper.findComponent({ name: 'Button' }).text())
  })
})
