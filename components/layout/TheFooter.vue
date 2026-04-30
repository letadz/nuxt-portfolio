<script setup lang="ts">
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/letadz",
    icon: "mdi:github",
    target: "_blank",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/letadz/",
    icon: "mdi:linkedin",
    target: "_blank",
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=mrkngl.letada@gmail.com",
    icon: "heroicons:envelope-20-solid",
    target: "_blank",
  },
];
</script>

<template>
  <footer
    class="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900"
  >
    <div
      class="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
    >
      <div class="flex items-center gap-3">
        <p class="text-sm text-slate-600 dark:text-slate-400">
          &copy; {{ new Date().getFullYear() }} All rights reserved
        </p>
      </div>

      <div class="flex items-center gap-2">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          :target="social.target"
          :rel="social.target === '_blank' ? 'noopener noreferrer' : undefined"
          class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 border border-transparent hover:border-violet-200 dark:hover:border-violet-500/30 transition-all duration-200"
        >
          <Icon :name="social.icon" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
