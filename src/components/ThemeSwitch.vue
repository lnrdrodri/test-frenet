<script setup>
  import { computed, onMounted, watch } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  const isDark = computed(() => {
    return theme.global.current.value.dark
  })
  
  function toggleTheme () {
    console.log("entoru", isDark.value);
    theme.global.name.value = isDark.value ? 'light' : 'dark'
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('@calc_frenet:theme', theme.global.name.value) || 'light'
    theme.global.name.value = savedTheme
  })

  watch(() => theme.global.name.value, (newTheme) => {
    localStorage.setItem('@calc_frenet:theme', newTheme)
  })
</script>

<template>
  <span
    :title="isDark ? 'Claro' : 'Escuro'"
    @click="toggleTheme"
    class="cursor-pointer"
  >
    {{isDark ? "☀️" : "🌑"}}
  </span>
</template>