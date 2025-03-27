import { ref } from 'vue'
import { useLoadingStore } from '@/stores/loading'
import { useCache } from '@/stores/cache'
import delay from '@/utils/delay'

export async function useFetch(url, options = {}, withCache = true) {
  const data = ref(null)
  const error = ref(null)
  const loading = useLoadingStore()
  const cache = useCache()

  try {
    loading.setIsLoading(true)

    const requestCached = withCache
      ? cache.hasValidCache({
          url,
          options,
          expiresInMinutes: 1,
        })
      : false

    if (requestCached) {
      await delay(300) // simulate the loading in the UI for the user
      data.value = requestCached
      return { data, error }
    }

    const response = await fetch(url, options)
    const json = await response.json()
    data.value = json

    if (withCache) {
      cache.addRequest({
        url,
        options,
        data: json,
      })
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.setIsLoading(false)
  }

  return { data, error }
}
