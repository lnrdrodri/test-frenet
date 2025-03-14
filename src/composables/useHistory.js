import { onMounted, ref, watch } from 'vue'

const history = ref([])

export function useHistory() {

  function clearHistory() {
    history.value = []
  }

  function getSavedHistory() {
    const savedHistory = localStorage.getItem('@calc_frenet:history')
    return savedHistory ? JSON.parse(savedHistory) : []
  }

  function updateHistory(form) {
    console.log("update", form);
    
    const historyArray = history.value

    historyArray
      .push({
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

  watch(history, (newHistory) => {
    console.log("watch history", newHistory)
    
    localStorage.setItem('@calc_frenet:history', JSON.stringify(newHistory))
  }, { deep: true })

  onMounted(() => {
    history.value = getSavedHistory();
  })

  return {
    history,
    clearHistory,
    updateHistory
  }
}