<script setup>
  import History from '@/components/History.vue'
  import Button from '@/components/Button.vue'
  
  import { useDialogHistoryStore } from '@/stores/dialogHistory'
  import { useHistoryStore } from '@/stores/history'

  const { clearHistory } = useHistoryStore()

  const historyDialog = useDialogHistoryStore()

  function clearAndClose() {
    clearHistory()
    historyDialog.close()
  }
</script>

<template>
  <v-dialog v-model="historyDialog.isOpen" max-width="1200">
    <v-card class="pa-8">
      <v-icon
        @click="historyDialog.close"
        style="position: absolute; top: 24px; right: 24px;"
      >
        mdi-window-close
      </v-icon>
      <v-card-item class="px-2 py-8">
        <History />
      </v-card-item>
      <template v-slot:actions>
        <Button
          prependIcon="mdi-delete-outline"
          classes="bg-secondary"
          @click="clearAndClose"
        >
          Limpar histórico
        </Button>
      </template>
    </v-card>
  </v-dialog>
</template>