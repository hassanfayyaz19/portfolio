<script setup>
import { ref, onMounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { href: '#profile', label: 'Profile' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-md border-b border-gray-200 dark:border-dark-800/50' : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" class="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
        HF
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-6">
        <ThemeToggle />
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-gray-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm font-medium"
        >
          {{ link.label }}
        </a>
        <a
          href="https://github.com/hassanfayyaz19"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/hassanfayyaz19/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="LinkedIn"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden p-2 text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-white"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden bg-white dark:bg-dark-900/98 border-t border-gray-200 dark:border-dark-800/50"
    >
      <div class="px-6 py-4 flex flex-col gap-4">
        <ThemeToggle />
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-gray-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          @click="isMobileMenuOpen = false"
        >
          {{ link.label }}
        </a>
        <div class="flex gap-4 pt-2">
          <a href="https://github.com/hassanfayyaz19" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400">GitHub</a>
          <a href="https://www.linkedin.com/in/hassanfayyaz19/" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400">LinkedIn</a>
        </div>
      </div>
    </div>
  </nav>
</template>
