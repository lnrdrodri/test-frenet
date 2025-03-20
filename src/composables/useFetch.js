import { ref } from 'vue'
import { useLoadingStore } from '@/stores/loading'

export async function useFetch(url, options = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = useLoadingStore()

  try {
    loading.setIsLoading(true)
    const response = await fetch(url, options)
    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.setIsLoading(false)
  }

  return { data, error }
}
