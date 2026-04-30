<script setup lang="ts">
const contactLinks = [
  {
    id: 'contact-email-btn',
    label: 'Send Email',
    description: 'mrkngl.letada@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=mrkngl.letada@gmail.com',
    icon: 'heroicons:envelope-20-solid',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    id: 'contact-github-btn',
    label: 'GitHub',
    description: 'github.com/letadz',
    href: 'https://github.com/letadz',
    icon: 'mdi:github',
    gradient: 'from-slate-700 to-slate-900',
  },
  {
    id: 'contact-linkedin-btn',
    label: 'LinkedIn',
    description: 'linkedin.com/in/letadz/',
    href: 'https://linkedin.com/in/letadz/',
    icon: 'mdi:linkedin',
    gradient: 'from-blue-600 to-blue-800',
  },
]
</script>

<template>
  <section
    id="contact"
    class="py-24 sm:py-32 bg-white dark:bg-navy-900 relative overflow-hidden"
  >
    <!-- Background glows -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-[600px] h-[400px] rounded-full
             bg-linear-to-r from-violet-500/10 to-cyan-500/10 blur-3xl pointer-events-none"
    />

    <div class="section-container relative z-10">
      <!-- Heading -->
      <div class="text-center mb-16 reveal">
        <p class="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-3">
          Let's work together
        </p>
        <h2 class="section-title text-slate-900 dark:text-white">
          Get In <span class="gradient-text">Touch</span>
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-cyan-500" />
      </div>

      <!-- Contact card -->
      <div
        class="max-w-3xl mx-auto reveal reveal-delay-1"
      >
        <div
          class="relative overflow-hidden rounded-3xl p-8 sm:p-12
                 bg-linear-to-br from-violet-600/10 via-purple-600/5 to-cyan-500/10 dark:from-violet-600/20 dark:via-purple-600/10 dark:to-cyan-500/20
                 border border-violet-200 dark:border-violet-500/20
                 shadow-xl shadow-violet-500/10"
        >
          <!-- Corner decoration -->
          <div
            class="absolute -top-12 -right-12 w-40 h-40 rounded-full
                   bg-linear-to-br from-violet-500/20 to-cyan-500/10 blur-2xl"
          />
          <div
            class="absolute -bottom-12 -left-12 w-40 h-40 rounded-full
                   bg-linear-to-br from-cyan-500/10 to-violet-500/20 blur-2xl"
          />

          <div class="relative z-10 text-center mb-10">
            <div
              class="w-16 h-16 mx-auto mb-5 rounded-2xl
                     bg-linear-to-br from-violet-600 to-cyan-500
                     flex items-center justify-center shadow-lg shadow-violet-500/30"
            >
              <Icon name="heroicons:paper-airplane-20-solid" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Ready to build something great?
            </h3>
            <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              I'm currently open to freelance projects and full-time opportunities. Whether you have
              a question, a project in mind, or just want to say hi — my inbox is always open!
            </p>
          </div>

          <!-- Contact links -->
          <div class="relative z-10 grid sm:grid-cols-3 gap-4">
            <a
              v-for="link in contactLinks"
              :key="link.id"
              :id="link.id"
              :href="link.href"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="group flex flex-col items-center gap-3 p-5 rounded-2xl
                     bg-white dark:bg-navy-800
                     border border-slate-200 dark:border-white/10
                     hover:border-violet-300 dark:hover:border-violet-500/40
                     hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10
                     transition-all duration-300 text-center"
            >
              <div
                class="w-12 h-12 rounded-xl bg-linear-to-br flex items-center justify-center
                       shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200"
                :class="link.gradient"
              >
                <Icon :name="link.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <p class="font-semibold text-slate-800 dark:text-white text-sm">
                  {{ link.label }}
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 break-all">
                  {{ link.description }}
                </p>
              </div>
            </a>
          </div>

          <!-- Bottom nudge -->
          <p class="relative z-10 text-center mt-8 text-xs text-slate-400 dark:text-slate-600">
            Typically reply within 24 hours.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
