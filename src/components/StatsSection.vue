<script setup>
import { computed } from 'vue'
import { experience, projects } from '../data/portfolio'

const stats = computed(() => [
  { value: '5+', label: 'Years of experience' },
  { value: `${projects.length}`, label: 'Projects delivered' },
  { value: `${experience.length}`, label: 'Companies' },
  { value: `${experience.filter((job) => /lead/i.test(job.role)).length}`, label: 'Team lead roles' },
])
</script>

<template>
  <section class="px-6 py-12 md:px-12 lg:px-24 bg-gray-100 dark:bg-dark-900/50">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="stat in stats" :key="stat.label" class="text-center">
        <div class="text-4xl font-bold gradient-text">{{ stat.value }}</div>
        <div class="mt-1 text-sm text-gray-600 dark:text-dark-400">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>
