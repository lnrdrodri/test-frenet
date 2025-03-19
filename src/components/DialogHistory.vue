<script setup>
  import { useHistory } from '@/composables/useHistory'
  import { useDialogHistoryStore } from '@/stores/dialogHistory'
  import History from '@/components/History.vue'
  import Button from '@/components/Button.vue'

  const { clearHistory } = useHistory()
  const historyDialog = useDialogHistoryStore()

  function clearAndClose() {
    clearHistory()
    historyDialog.close()
  }
</script>

<template>
  <v-dialog v-model="historyDialog.isOpen" max-width="1200">
    <v-card class="pa-8">
      <v-card-item class="px-2 py-8">
        <History />
      </v-card-item>
      <template v-slot:actions>
        <Button classes="bg-secondary" size="small" @click="clearAndClose">
          Limpar histórico
        </Button>
        <Button classes="bg-primary" size="small" @click="historyDialog.close">
          Fechar
        </Button>
      </template>
    </v-card>
  </v-dialog>
</template>