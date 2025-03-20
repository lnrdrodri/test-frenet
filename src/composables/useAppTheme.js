import { computed, onMounted, watch } from 'vue'
import { useTheme } from 'vuetify'

export function useAppTheme() {
  const theme = useTheme()

  const isDark = computed(() => {
    return theme.global.current.value.dark
  })

  function toggleTheme() {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
  }

  onMounted(() => {
    const savedTheme =
      localStorage.getItem('@calc_frenet:theme', theme.global.name.value) ||
      'light'
    theme.global.name.value = savedTheme
  })

  watch(
    () => theme.global.name.value,
    (newTheme) => {
      localStorage.setItem('@calc_frenet:theme', newTheme)
    }
  )

  return {
    isDark,
    toggleTheme,
  }
}
