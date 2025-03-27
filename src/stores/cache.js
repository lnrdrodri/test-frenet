import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCache = defineStore('cache', () => {
  const requests = ref([])

  function addRequest({ url, options, data }) {
    requests.value.push({
      url,
      options,
      data,
      timestamp: Date.now(),
    })
  }

  function isAlreadyCached(url, options) {
    return (
      requests.value.find((request) => {
        return (
          request.url === url &&
          JSON.stringify(request.options) === JSON.stringify(options)
        )
      }) || false
    )
  }

  function isValidCache(cache, expiresInMinutes) {
    const now = Date.now()
    const cacheAge = now - cache.timestamp
    return cacheAge < 1000 * 60 * expiresInMinutes
  }

  function hasValidCache({ url, options, expiresInMinutes = 5 }) {
    const requestCached = isAlreadyCached(url, options)

    if (!requestCached) return false

    const cacheIsUpToDate = isValidCache(requestCached, expiresInMinutes)

    if (!cacheIsUpToDate) {
      clearOldCache(expiresInMinutes)
      return false
    }

    return requestCached.data
  }

  function clearOldCache(expiresInMinutes) {
    requests.value = requests.value.filter((request) => {
      return isValidCache(request, expiresInMinutes)
    })
  }

  return { requests, addRequest, hasValidCache }
})
