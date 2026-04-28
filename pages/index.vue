<script setup lang="ts">
useScrollReveal()

useSeoMeta({
  title: 'Mark Angelo — Front-End Developer',
  description:
    'Mark Angelo Letada — Front-End Developer specializing in Vue.js, Nuxt.js, React, and Tailwind CSS. Building modern, performant web experiences.',
  ogTitle: 'Mark Angelo — Front-End Developer',
  ogDescription: 'Front-End Developer specializing in Vue.js, Nuxt.js, and React.',
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
    <LayoutTheNavbar />

    <main id="main-content">
      <SectionsHeroSection />
      <SectionsAboutSection />
      <SectionsSkillsSection />
      <SectionsProjectsSection />
      <SectionsContactSection />
    </main>

    <LayoutTheFooter />
  </div>
</template>
