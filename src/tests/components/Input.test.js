import { mount } from '@vue/test-utils'
import Input from '@/components/Input.vue'
import { describe, it, expect } from 'vitest'
import rules from '@/utils/rules'

describe('Input.vue', () => {
  it('should be able to apply CEP mask', async () => {
    const wrapper = mount(Input, {
      props: {
        name: 'cep',
        label: 'CEP',
        mask: '#####-###',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('16012520')

    expect(input.element.value).toBe('16012-520')
  })

  it('should be able to block when input is required', async () => {
    const wrapper = mount(Input, {
      props: {
        name: 'required',
        label: 'Required',
        rules: [rules.isRequired],
      },
    })

    const input = wrapper.find('input')
    await input.setValue(null)

    const error_wrapper = wrapper.find('.v-messages__message')
    expect(error_wrapper.text()).toBe('❌ Campo obrigatório')
  })

  it('should be able to pass when input is required and is filled', async () => {
    const wrapper = mount(Input, {
      props: {
        name: 'required',
        label: 'Required',
        rules: [rules.isRequired],
      },
    })

    const input = wrapper.find('input')
    await input.setValue('filled')

    const error_wrapper_exists = wrapper.find('.v-messages__message').exists()
    expect(error_wrapper_exists).toBeFalsy()
  })

  it('should be able to init with default values', async () => {
    const wrapper = mount(Input, {
      props: {
        name: 'input',
        label: 'Input',
      },
    })

    const mask = wrapper.props().mask
    const type = wrapper.props().type
    
    expect(mask).toBe('')
    expect(type).toBe('text')
  })
})
