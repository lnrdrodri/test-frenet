<script setup>
  import { useHistory } from '@/composables/useHistory'
  import { useForm } from '@/composables/useForm'
  import { useDialogHistoryStore } from '@/stores/dialogHistory'
  
  import Table from './Table.vue'

  const { history } = useHistory()
  const { form, apiData } = useForm()
  
  const dialogHistory = useDialogHistoryStore()

  function copyHistoryToForm(history) {
    Object.assign(form, { ...history })
    apiData.value = null
    dialogHistory.close()
  }
</script>

<template>
  <div
    v-if="history.length > 0"
    class="d-flex align-center justify-space-between mb-4"
  >
    <h3>Histórico</h3>
  </div>
  <Table
    v-if="history.length > 0"
    :columns="[
      {label: 'Origem', key: 'cep_origin'},
      {label: 'Destino', key: 'cep_destination'},
      {label: 'Peso (kg)', key: 'weight'},
      {label: 'Largura (cm)', key: 'width'},
      {label: 'Altura (cm)', key: 'height'},
      {label: 'Comprimento (cm)', key: 'length'},
      {label: 'Valor declarado (R$)', key: 'declared_value'},
    ]"
    :items="history"
    :actions="[
      {
        title: 'Copiar para o formulário',
        icon: 'mdi-content-copy',
        handler: (item) => copyHistoryToForm(item)
      },
    ]"
  />
</template>