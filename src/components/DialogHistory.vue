<script setup>
  import History from '@/components/History.vue'
  import { useHistory } from '@/composables/useHistory'
  import { useDialogHistoryStore } from '@/stores/dialogHistory'
  import Button from '@/components/Button.vue'

  const { clearHistory } = useHistory()
  const historyDialog = useDialogHistoryStore()

  function clearAndClose() {
    clearHistory()
    historyDialog.close()
  }
</script>

<template>
  <v-dialog v-model="historyDialog.isOpen">
    <v-card class="pa-8">
      <v-card-item>
        <History />
      </v-card-item>
      <template v-slot:actions>
        <Button variant="outlined" @click="clearAndClose">
          Limpar histórico
        </Button>
        <Button classes="bg-primary" variant="outlined" @click="historyDialog.close">
          Fechar
        </Button>
      </template>
    </v-card>
  </v-dialog>
</template>