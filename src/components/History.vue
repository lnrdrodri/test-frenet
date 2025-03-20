<script setup>
import { useHistoryStore } from '@/stores/history'
import { useDialogHistoryStore } from '@/stores/dialogHistory'
import { useQuoteStore } from '@/stores/quote'

import Table from './Table.vue'
import { storeToRefs } from 'pinia'

const historyStore = useHistoryStore()
const { history } = storeToRefs(historyStore)

const quoteStore = useQuoteStore()
const { quote } = storeToRefs(quoteStore)
const { updateForm } = quoteStore

const dialogHistory = useDialogHistoryStore()

function copyHistoryToForm(history) {
  updateForm(history)
  quote.value = null
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
      { label: 'Origem', key: 'cep_origin' },
      { label: 'Destino', key: 'cep_destination' },
      { label: 'Peso (kg)', key: 'weight' },
      { label: 'Largura (cm)', key: 'width' },
      { label: 'Altura (cm)', key: 'height' },
      { label: 'Comprimento (cm)', key: 'length' },
      { label: 'Valor declarado (R$)', key: 'declared_value' },
    ]"
    :items="history"
    :actions="[
      {
        title: 'Copiar para o formulário',
        icon: 'mdi-truck-delivery',
        handler: (item) => copyHistoryToForm(item),
      },
    ]"
  />
</template>
