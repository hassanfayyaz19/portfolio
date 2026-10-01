<script setup>
import { testimonials } from '../data/portfolio'
</script>

<template>
  <section v-if="testimonials.length" id="testimonials" class="section-padding bg-white dark:bg-dark-950">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Client <span class="gradient-text">Testimonials</span>
      </h2>
      <div class="w-16 h-1 bg-primary-500 rounded-full mb-12" />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <figure
          v-for="item in testimonials"
          :key="item.name"
          class="p-6 rounded-xl bg-gray-50 dark:bg-dark-800/50 border border-gray-200 dark:border-dark-700/50 hover:border-primary-500/30 card-hover"
        >
          <blockquote class="text-gray-600 dark:text-dark-300 leading-relaxed mb-4">“{{ item.quote }}”</blockquote>
          <figcaption>
            <div class="font-semibold text-gray-900 dark:text-white">{{ item.name }}</div>
            <div class="text-sm text-gray-500 dark:text-dark-400">{{ item.role }}</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
