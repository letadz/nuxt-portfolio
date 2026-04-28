<script setup lang="ts">
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/letadz',
    icon: 'mdi:github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/letadz/',
    icon: 'mdi:linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:mrkngl.letada@gmail.com',
    icon: 'heroicons:envelope-20-solid',
  },
]
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900">
    <div class="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500
                 flex items-center justify-center shrink-0"
        >
          <span class="font-display text-white font-extrabold text-xs">MA</span>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          &copy; {{ new Date().getFullYear() }}
          <span class="font-semibold text-slate-800 dark:text-slate-200">Mark Angelo Letada</span>.
          Built with Nuxt 3 &amp; Tailwind CSS.
        </p>
      </div>

      <!-- Socials -->
      <div class="flex items-center gap-2">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="w-9 h-9 rounded-lg flex items-center justify-center
                 text-slate-500 dark:text-slate-400
                 hover:bg-violet-50 dark:hover:bg-violet-500/10
                 hover:text-violet-600 dark:hover:text-violet-400
                 border border-transparent hover:border-violet-200 dark:hover:border-violet-500/30
                 transition-all duration-200"
        >
          <Icon :name="social.icon" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
