import { ref, reactive } from 'vue'

import rules from '@/utils/rules'
import { useFetch } from '@/composables/useFetch'

const apiData = ref(null)

const form = reactive({
  cep_origin: '16012520',
  cep_destination: '16012521',
  weight: '1',
  width: '2',
  height: '3',
  length: '4',
  declared_value: '5'
})

export function useForm() {
  const valid = ref(false)

  async function onSubmit() {
    if(!valid.value) {
      return
    }
    
    const { data, error, loading } = await useFetch("/api/shipping/quote", {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
        token: 'SEU_TOKEN',
      }
    });

    if(error.value != null) {
      console.log('Erro ao calcular frete', error)
      apiData.value = null
    }

    apiData.value = data.value.ShippingSevicesArray
  }

  return {
    form,
    valid,
    onSubmit,
    rules,
    apiData,
  }
}