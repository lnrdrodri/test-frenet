<script setup>
import { useAppTheme } from '../composables/useAppTheme'

const { isDark, toggleTheme } = useAppTheme()
</script>

<template>
  <span
    :title="isDark ? 'Claro' : 'Escuro'"
    @click="toggleTheme"
    class="cursor-pointer"
  >
    {{ isDark ? '☀️' : '🌑' }}
  </span>
</template>
