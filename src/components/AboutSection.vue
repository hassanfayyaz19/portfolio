<script setup>
import { about, skillGroups } from '../data/portfolio'
</script>

<template>
  <section id="about" class="section-padding bg-white dark:bg-dark-950">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About <span class="gradient-text">Me</span>
      </h2>
      <div class="w-16 h-1 bg-primary-500 rounded-full mb-12" />

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p class="text-gray-600 dark:text-dark-300 text-lg leading-relaxed mb-8">
            {{ about.bio }}
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies & Tools</h3>
          <div class="space-y-5">
            <div v-for="group in skillGroups" :key="group.category">
              <h4 class="text-xs font-mono uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-2">
                {{ group.category }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in group.skills"
                  :key="skill"
                  class="px-3 py-1.5 bg-gray-100 dark:bg-dark-800/80 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-700 dark:text-dark-200 text-sm font-medium hover:border-primary-500/50 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
