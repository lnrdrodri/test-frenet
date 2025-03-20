import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

import rules from '@/utils/rules'
import { useFetch } from '@/composables/useFetch'
import { useHistoryStore } from '@/stores/history'

export const useQuoteStore = defineStore('quote', () => {
  const quote = ref(null)

  const form = reactive({
    cep_origin: '16012520',
    cep_destination: '16012521',
    weight: '1',
    width: '2',
    height: '3',
    length: '4',
    declared_value: '5',
  })

  const { updateHistory } = useHistoryStore()

  const valid = ref(false)

  async function onSubmit() {
    if (!valid.value) {
      return
    }

    const { data, error } = await useFetch('/api/shipping/quote', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
        token: 'SEU_TOKEN',
      },
    })

    if (error.value != null) {
      console.log('Erro ao calcular frete', error)
      quote.value = null
    }

    quote.value = data.value.ShippingSevicesArray

    updateHistory(form)
  }

  function updateForm(newForm) {
    Object.assign(form, { ...newForm })
  }

  return {
    form,
    valid,
    rules,
    quote,
    onSubmit,
    updateForm,
  }
})
