<script setup lang="ts">
const { y: scrollY } = useWindowScroll()
const isMobileMenuOpen = ref(false)

const isScrolled = computed(() => scrollY.value > 60)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const scrollTo = (href: string) => {
  isMobileMenuOpen.value = false
  if (import.meta.client) {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') isMobileMenuOpen.value = false
  })
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-white/80 dark:bg-navy-900/80 backdrop-blur-lg border-b border-slate-200/80 dark:border-white/10 shadow-sm'
      : 'bg-transparent'"
  >
    <nav class="section-container flex items-center justify-between h-16" aria-label="Main navigation">
      <!-- Logo -->
      <button
        class="flex items-center gap-2 group border-none bg-transparent cursor-pointer p-0"
        aria-label="Mark Angelo — home"
        @click="scrollTo('#hero')"
      >
        <img
          src="/logo.webp"
          alt="Mark Angelo logo"
          class="w-9 h-9 group-hover:scale-105 transition-transform duration-200"
          style="filter: drop-shadow(0 4px 8px rgba(139,92,246,0.4));"
        />
        <!-- <span class="font-display font-bold text-slate-800 dark:text-white hidden sm:block">
          Mark Angelo
        </span> -->
      </button>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-1" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <button
            :id="`nav-${link.label.toLowerCase()}`"
            class="nav-link px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
            @click="scrollTo(link.href)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <!-- Desktop actions -->
      <div class="hidden md:flex items-center gap-2">
        <a
          id="nav-resume-btn"
          href="https://drive.google.com/file/d/1Jyv1stNqkkgA4Iz_ZWwKAgNIModp20Op/view"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
          style="padding: 0.5rem 1rem; font-size: 0.875rem;"
        >
          <Icon name="heroicons:document-arrow-down-20-solid" class="w-4 h-4" />
          Resume
        </a>
      </div>

      <!-- Mobile actions -->
      <div class="flex md:hidden items-center gap-2">
        <button
          id="mobile-menu-btn"
          class="w-10 h-10 rounded-xl flex items-center justify-center
                 text-slate-600 dark:text-slate-300
                 hover:bg-slate-100 dark:hover:bg-white/10
                 transition-colors duration-200 border-none bg-transparent cursor-pointer"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Icon
            :name="isMobileMenuOpen ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'"
            class="w-5 h-5"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-slate-200 dark:border-white/10"
        style="background: rgba(255,255,255,0.95); backdrop-filter: blur(12px);"
      >
        <div class="dark:bg-navy-900/95">
          <ul class="section-container py-4 flex flex-col gap-1" role="list">
            <li v-for="link in navLinks" :key="link.href">
              <button
                class="w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200
                       font-medium hover:bg-violet-50 dark:hover:bg-violet-500/10
                       hover:text-violet-600 dark:hover:text-violet-400
                       transition-colors duration-200 border-none bg-transparent cursor-pointer"
                @click="scrollTo(link.href)"
              >
                {{ link.label }}
              </button>
            </li>
            <li class="pt-2">
              <a
                href="https://drive.google.com/file/d/1Jyv1stNqkkgA4Iz_ZWwKAgNIModp20Op/view"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary w-full justify-center"
                @click="isMobileMenuOpen = false"
              >
                <Icon name="heroicons:document-arrow-down-20-solid" class="w-4 h-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
