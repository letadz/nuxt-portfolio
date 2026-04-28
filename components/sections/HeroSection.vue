<script setup lang="ts">
const roles = ['Front-End Developer']

const displayedText = ref('')
const isDeleting = ref(false)
const typingSpeed = ref(110)

let timeout: ReturnType<typeof setTimeout>

function typeWriter() {
  const currentRole = roles[0]
  if (!isDeleting.value) {
    displayedText.value = currentRole.substring(0, displayedText.value.length + 1)
    typingSpeed.value = 110
    if (displayedText.value === currentRole) {
      typingSpeed.value = 3000
      isDeleting.value = true
    }
  } else {
    displayedText.value = currentRole.substring(0, displayedText.value.length - 1)
    typingSpeed.value = 55
    if (displayedText.value === '') {
      isDeleting.value = false
      typingSpeed.value = 400
    }
  }
  timeout = setTimeout(typeWriter, typingSpeed.value)
}

onMounted(() => {
  timeout = setTimeout(typeWriter, 800)
})
onUnmounted(() => clearTimeout(timeout))

function scrollToProjects() {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}
function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden
           bg-white dark:bg-navy-900"
  >
    <!-- Background glows -->
    <div
      class="absolute top-1/4 -left-32 w-96 h-96 rounded-full
             bg-violet-500/10 dark:bg-violet-500/15 blur-3xl pointer-events-none"
    />
    <div
      class="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full
             bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl pointer-events-none"
    />
    <!-- Grid pattern -->
    <div
      class="absolute inset-0 bg-grid-pattern opacity-100 dark:opacity-40 pointer-events-none"
    />

    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <span
        v-for="i in 8"
        :key="i"
        class="absolute rounded-full bg-violet-500/20 dark:bg-violet-400/20"
        :style="{
          width: `${4 + (i * 3) % 8}px`,
          height: `${4 + (i * 3) % 8}px`,
          left: `${(i * 137.5) % 100}%`,
          top: `${(i * 97.3) % 100}%`,
          animationDelay: `${(i * 0.7) % 4}s`,
          animationDuration: `${4 + (i % 3)}s`,
        }"
        :class="i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'"
      />
    </div>

    <div class="section-container relative z-10 py-28 sm:py-36">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Content -->
        <div class="text-center lg:text-left">
          <!-- Availability badge -->
          <div class="inline-flex items-center gap-2 mb-6
                      px-4 py-1.5 rounded-full
                      bg-emerald-50 dark:bg-emerald-500/10
                      border border-emerald-200 dark:border-emerald-500/30
                      animate-fade-up">
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Open to opportunities
            </span>
          </div>

          <!-- Name -->
          <h1
            class="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold
                   text-slate-900 dark:text-white mb-4 leading-[1.05]
                   animate-fade-up [animation-delay:100ms]"
          >
            Hi, I'm
            <span class="gradient-text block sm:inline">Mark Angelo</span>
          </h1>

          <!-- Typewriter -->
          <div
            class="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6
                   animate-fade-up [animation-delay:200ms]"
          >
            <p class="font-display text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
              <span class="gradient-text">{{ displayedText }}</span>
              <span
                class="inline-block w-0.5 h-6 sm:h-7 bg-violet-500 ml-0.5 animate-pulse"
                aria-hidden="true"
              />
            </p>
          </div>

          <!-- Bio -->
          <p
            class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0
                   animate-fade-up [animation-delay:300ms]"
          >
            I craft modern, performant web experiences with a passion for clean
            code and delightful UIs — specializing in
            <strong class="text-slate-800 dark:text-slate-200">Vue.js, Nuxt.js</strong>
            and
            <strong class="text-slate-800 dark:text-slate-200">React</strong>.
          </p>

          <!-- CTA buttons -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4
                   animate-fade-up [animation-delay:400ms]"
          >
            <button id="hero-view-work-btn" class="btn-primary" @click="scrollToProjects">
              <Icon name="heroicons:rocket-launch-20-solid" class="w-5 h-5" />
              View My Work
            </button>
            <button id="hero-contact-btn" class="btn-outline" @click="scrollToContact">
              <Icon name="heroicons:chat-bubble-left-ellipsis-20-solid" class="w-5 h-5" />
              Get In Touch
            </button>
          </div>

          <!-- Social strip -->
          <div
            class="mt-10 flex items-center gap-4 justify-center lg:justify-start
                   animate-fade-up [animation-delay:500ms]"
          >
            <span class="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-medium">
              Find me on
            </span>
            <div class="h-px flex-1 max-w-[60px] bg-slate-200 dark:bg-white/10" />
            <a
              href="https://github.com/letadz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Icon name="mdi:github" class="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/letadz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=mrkngl.letada@gmail.com&su=Hello%20from%20your%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              class="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Icon name="heroicons:envelope-20-solid" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Right: Real profile photo -->
        <div class="flex justify-center lg:justify-end animate-fade-up [animation-delay:200ms]">
          <div class="relative">
            <!-- Spinning ring -->
            <div
              class="absolute -inset-4 rounded-full border border-dashed border-violet-400/30 dark:border-violet-500/30 animate-spin-slow"
            />
            <!-- Glow -->
            <div
              class="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-xl"
            />
            <!-- Profile photo -->
            <div
              class="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden
                     shadow-2xl shadow-violet-500/30 animate-float
                     ring-4 ring-violet-500/30"
            >
              <img
                src="/profile.png"
                alt="Mark Angelo Letada"
                class="w-full h-full object-cover object-top"
                draggable="false"
              />
            </div>

            <!-- Floating skill badges -->
            <div
              class="absolute -top-2 -right-4 sm:-right-8 px-3 py-1.5 rounded-full
                     bg-white dark:bg-navy-800 shadow-lg border border-slate-200 dark:border-white/10
                     text-xs font-semibold text-slate-700 dark:text-slate-200
                     animate-float-delayed"
            >
              ⚡ Vue.js
            </div>
            <div
              class="absolute -bottom-2 -left-4 sm:-left-8 px-3 py-1.5 rounded-full
                     bg-white dark:bg-navy-800 shadow-lg border border-slate-200 dark:border-white/10
                     text-xs font-semibold text-slate-700 dark:text-slate-200
                     animate-float-slow"
            >
              🚀 Nuxt.js
            </div>
            <div
              class="absolute top-1/2 -right-10 sm:-right-16 px-3 py-1.5 rounded-full
                     bg-white dark:bg-navy-800 shadow-lg border border-slate-200 dark:border-white/10
                     text-xs font-semibold text-slate-700 dark:text-slate-200
                     animate-float"
            >
              ⚛️ React
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-16 flex justify-center animate-fade-up [animation-delay:600ms]">
        <button
          class="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500
                 hover:text-violet-500 dark:hover:text-violet-400 transition-colors group"
          aria-label="Scroll down"
          @click="scrollToProjects"
        >
          <span class="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div class="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
            <div class="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
