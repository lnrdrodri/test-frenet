import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useHistoryStore = defineStore('history', () => {
  const history = ref(getSavedHistory())

  function clearHistory() {
    history.value = []
  }

  function getSavedHistory() {
    const savedHistory = localStorage.getItem('@calc_frenet:history')
    return savedHistory ? JSON.parse(savedHistory) : []
  }

  function isAlreadyInHistory(form) {
    return history.value.some(
      (item) => JSON.stringify(item) === JSON.stringify(form)
    )
  }

  function updateHistory(form) {
    if (isAlreadyInHistory(form)) return

    const historyArray = history.value

    historyArray.push({
      cep_origin: form.cep_origin,
      cep_destination: form.cep_destination,
      weight: form.weight,
      width: form.width,
      height: form.height,
      length: form.length,
      declared_value: form.declared_value,
    })

    history.value = historyArray
  }

  watch(
    history,
    (newHistory) => {
      localStorage.setItem('@calc_frenet:history', JSON.stringify(newHistory))
    },
    { deep: true }
  )

  return {
    history,
    clearHistory,
    updateHistory,
  }
})
