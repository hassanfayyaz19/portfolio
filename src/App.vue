<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import EducationSection from './components/EducationSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-dark-950 transition-colors duration-300">
    <NavBar />
    <main>
      <HeroSection />
      <ProfileSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  </div>
</template>
