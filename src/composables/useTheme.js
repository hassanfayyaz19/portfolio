import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
  const theme = ref('system')

  const isDark = computed(() => {
    if (typeof window === 'undefined') return true
    if (theme.value === 'dark') return true
    if (theme.value === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  function applyTheme() {
    if (typeof document === 'undefined') return
    const dark = theme.value === 'dark' ||
      (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function setTheme(newTheme) {
    if (!['light', 'dark', 'system'].includes(newTheme)) return
    theme.value = newTheme
    localStorage.setItem(STORAGE_KEY, newTheme)
    applyTheme()
  }

  function initTheme() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      theme.value = stored
    }
    applyTheme()
  }

  let removeListener = null
  onMounted(() => {
    initTheme()
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme.value === 'system') applyTheme()
    }
    mediaQuery.addEventListener('change', handleChange)
    removeListener = () => mediaQuery.removeEventListener('change', handleChange)
  })
  onUnmounted(() => {
    if (removeListener) removeListener()
  })

  watch(theme, () => applyTheme())

  return { theme, isDark, setTheme, applyTheme, initTheme }
}
