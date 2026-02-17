<script setup>
import { experience } from '../data/portfolio'
</script>

<template>
  <section id="experience" class="section-padding bg-gray-100 dark:bg-dark-900/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Work <span class="gradient-text">Experience</span>
      </h2>
      <div class="w-16 h-1 bg-primary-500 rounded-full mb-12" />

      <div class="relative pl-8">
        <!-- Timeline line -->
        <div class="absolute left-2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-primary-600 to-transparent" />

        <div class="space-y-8">
          <div
            v-for="job in experience"
            :key="job.company"
            class="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
          >
            <!-- Timeline dot -->
            <div class="absolute left-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-gray-100 dark:ring-dark-900 top-1 z-10" />

            <div class="md:w-1/3 md:shrink-0">
              <span class="text-primary-500 dark:text-primary-400 text-sm font-mono">{{ job.period }}</span>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-1">{{ job.role }}</h3>
              <p class="text-gray-600 dark:text-dark-400 text-sm">{{ job.company }}</p>
              <p class="text-gray-500 dark:text-dark-500 text-xs">{{ job.location }}</p>
            </div>

            <div class="md:flex-1">
              <div
                class="p-6 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700/50 hover:border-primary-500/30 card-hover"
              >
                <ul class="space-y-2">
                  <li
                    v-for="highlight in job.highlights"
                    :key="highlight"
                    class="text-gray-600 dark:text-dark-300 flex items-start gap-2"
                  >
                    <span class="text-primary-500 mt-1.5 shrink-0">▹</span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
