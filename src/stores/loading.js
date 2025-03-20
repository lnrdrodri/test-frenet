import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  function setIsLoading(loading) {
    isLoading.value = loading
  }

  return { isLoading, setIsLoading }
})
