<script setup>
import { education, certifications } from '../data/portfolio'

const hasContent = education.length > 0 || certifications.length > 0
</script>

<template>
  <section v-if="hasContent" id="education" class="section-padding bg-gray-100 dark:bg-dark-900/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Education & <span class="gradient-text">Certifications</span>
      </h2>
      <div class="w-16 h-1 bg-primary-500 rounded-full mb-12" />

      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="item in education"
          :key="item.degree + item.institution"
          class="p-6 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700/50 hover:border-primary-500/30 card-hover"
        >
          <span class="text-primary-500 dark:text-primary-400 text-sm font-mono">{{ item.period }}</span>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-1">{{ item.degree }}</h3>
          <p class="text-gray-600 dark:text-dark-400 text-sm">{{ item.institution }}</p>
        </article>
        <article
          v-for="cert in certifications"
          :key="cert.name + cert.issuer"
          class="p-6 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700/50 hover:border-primary-500/30 card-hover"
        >
          <span class="text-primary-500 dark:text-primary-400 text-sm font-mono">{{ cert.year }}</span>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-1">{{ cert.name }}</h3>
          <p class="text-gray-600 dark:text-dark-400 text-sm">{{ cert.issuer }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
