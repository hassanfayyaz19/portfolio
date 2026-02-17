<script setup>
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="section-padding bg-white dark:bg-dark-950">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Featured <span class="gradient-text">Projects</span>
      </h2>
      <div class="w-16 h-1 bg-primary-500 rounded-full mb-12" />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group p-6 rounded-xl bg-gray-50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700/50 hover:border-primary-500/30 card-hover"
        >
          <div class="flex items-start justify-between gap-4 mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
              {{ project.title }}
            </h3>
          </div>
          <p class="text-gray-600 dark:text-dark-300 text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-2.5 py-1 bg-gray-200 dark:bg-dark-900/80 rounded text-xs text-primary-600 dark:text-primary-400 font-mono"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
