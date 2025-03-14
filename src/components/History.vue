<script setup>
  import { watch } from 'vue'
  import { useHistory } from '@/composables/useHistory'
  import { useForm } from '../composables/useForm'


  const { history, clearHistory, updateHistory } = useHistory()
  const { apiData, form } = useForm()

  watch(apiData, () => {
    console.log('apiData', form);
    updateHistory(form)
  })
</script>

<template>
  <h3>Histórico</h3>
  <button @click="clearHistory">limpar</button>
  <pre>{{ history }}</pre>
</template>