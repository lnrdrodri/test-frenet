import { mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'
import { useQuoteStore } from '@/stores/quote'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Form.vue', () => {
  let store
  beforeEach(() => {
    store = useQuoteStore()
  })

  function updateForm(form) {
    store.updateForm(form)
  }

  it('should be blocked with empty form', async () => {
    const wrapper = mount(Form)
    updateForm({
      cep_origin: '',
      cep_destination: '',
      weight: '',
      width: '',
      height: '',
      length: '',
      declared_value: '',
    })
    const submitButton = wrapper.findComponent({
      name: 'Button',
      type: 'submit',
    })
    await submitButton.trigger('click')

    expect(store.valid).toBeFalsy()
  })

  it('should be able to pass with form filled', async () => {
    const wrapper = mount(Form)
    updateForm({
      cep_origin: '16012520',
      cep_destination: '16012521',
      weight: '1',
      width: '2',
      height: '3',
      length: '4',
      declared_value: '5',
    })
    const submitButton = wrapper.findComponent({
      name: 'Button',
      type: 'submit',
    })
    await submitButton.trigger('click')

    expect(store.valid).toBeTruthy()
  })
})
