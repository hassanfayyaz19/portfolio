<script setup>
import { services } from '../data/portfolio'

const icons = {
  layers: 'M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5',
  code: 'm16 18 6-6-6-6M8 6l-6 6 6 6',
  browser: 'M3 5h18v14H3zM3 9h18',
  rocket: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1ZM12 15l-3-3a22 22 0 0 1 2-4 12.9 12.9 0 0 1 11-6c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2ZM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5',
}
</script>

<template>
  <section id="services" class="section-padding bg-white dark:bg-dark-950">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        What I <span class="gradient-text">Offer</span>
      </h2>
      <div class="w-16 h-1 bg-primary-500 rounded-full mb-12" />

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="service in services"
          :key="service.title"
          class="p-6 rounded-xl bg-gray-50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700/50 hover:border-primary-500/30 card-hover"
        >
          <svg class="w-8 h-8 text-primary-500 mb-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path :d="icons[service.icon]" />
          </svg>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ service.title }}</h3>
          <p class="text-gray-600 dark:text-dark-300 text-sm leading-relaxed">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
