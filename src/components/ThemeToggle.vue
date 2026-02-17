<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, setTheme, isDark } = useTheme()
const isOpen = ref(false)

const options = [
  { value: 'light', label: 'Light', icon: 'sun' },
  { value: 'dark', label: 'Dark', icon: 'moon' },
  { value: 'system', label: 'System', icon: 'monitor' },
]

function selectTheme(value) {
  setTheme(value)
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.theme-toggle')) isOpen.value = false
  })
})
</script>

<template>
  <div class="theme-toggle relative">
    <button
      type="button"
      class="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-dark-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
      @click="isOpen = !isOpen"
      aria-label="Toggle theme"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <!-- Sun icon (light) -->
      <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>
      <!-- Moon icon (dark) -->
      <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 mt-2 py-2 w-40 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 shadow-lg z-50"
      >
        <button
          v-for="opt in options"
          :key="opt.value"
          type="button"
          class="w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors hover:bg-gray-100 dark:hover:bg-dark-700"
          :class="theme === opt.value ? 'text-primary-600 dark:text-primary-400 font-medium' : 'text-gray-600 dark:text-dark-300'"
          @click="selectTheme(opt.value)"
        >
          <svg v-if="opt.icon === 'sun'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg v-else-if="opt.icon === 'moon'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
          <svg v-else class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          {{ opt.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>
