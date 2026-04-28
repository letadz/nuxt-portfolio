<script setup lang="ts">
const allProjects = [
  {
    title: 'TraxionPay',
    description:
      'Real-world fintech platform — a digital payment and financial services web app. Contributed to the front-end development of core user-facing features and UI components.',
    tech: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'REST API'],
    category: 'Vue',
    image: 'https://traxionpay.com/wp-content/uploads/2022/09/traxionpay-og.png',
    gradient: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    liveUrl: 'https://traxionpay.com',
    githubUrl: '',
    badge: '💼 Real World',
  },
  {
    title: 'Ecommerce Platform',
    description:
      'A full-featured ecommerce web app with product listings, cart management, authentication, and real-time database. Built with a modern JAMstack approach.',
    tech: ['Vue.js', 'Nuxt.js', 'Pinia', 'TailwindCSS', 'Firebase'],
    category: 'Vue',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&auto=format',
    gradient: 'bg-gradient-to-br from-violet-600 to-purple-800',
    liveUrl: '',
    githubUrl: 'https://github.com/letadz',
  },
  {
    title: 'Admin Dashboard',
    description:
      'A responsive admin interface with data tables, charts, user management, and role-based access control. Clean and minimal design system.',
    tech: ['React', 'Tailwind CSS', 'Chart.js'],
    category: 'React',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format',
    gradient: 'bg-gradient-to-br from-cyan-500 to-blue-700',
    liveUrl: '',
    githubUrl: 'https://github.com/letadz',
  },
  {
    title: 'Letadz Bootcamp',
    description:
      'Landing page for a web development bootcamp. Features animated sections, course highlights, testimonials, and a signup CTA.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Other',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format',
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-700',
    liveUrl: '',
    githubUrl: 'https://github.com/letadz',
  },
  {
    title: "Mag's Auto Repair",
    description:
      'A business landing page for an auto repair shop. MERN stack with a modern UI, service listings, and a contact form.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'TailwindCSS'],
    category: 'React',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80&auto=format',
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-700',
    liveUrl: '',
    githubUrl: 'https://github.com/letadz',
  },
  {
    title: 'Car Service Booking',
    description:
      'A full CRUD booking system for car service appointments with real-time updates, filtering by date/service, and Redux state management.',
    tech: ['React', 'TailwindCSS', 'Redux', 'REST API'],
    category: 'React',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&auto=format',
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-700',
    liveUrl: '',
    githubUrl: 'https://github.com/letadz',
  },
  {
    title: 'Todo App',
    description:
      'A feature-rich todo application with task categories, priorities, drag-and-drop reordering, and persistent state via Redux.',
    tech: ['React', 'TailwindCSS', 'Redux'],
    category: 'React',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80&auto=format',
    gradient: 'bg-gradient-to-br from-indigo-500 to-violet-700',
    liveUrl: '',
    githubUrl: 'https://github.com/letadz',
  },
]

const filters = ['All', 'Vue', 'React', 'Other']
const activeFilter = ref('All')
const showAll = ref(false)

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return allProjects
  return allProjects.filter((p) => p.category === activeFilter.value)
})

const visibleProjects = computed(() => {
  if (showAll.value || filteredProjects.value.length <= 3) {
    return filteredProjects.value
  }
  return filteredProjects.value.slice(0, 3)
})

function setFilter(f: string) {
  activeFilter.value = f
  showAll.value = false
}
</script>

<template>
  <section
    id="projects"
    class="py-24 sm:py-32 bg-slate-50 dark:bg-navy-950 relative overflow-hidden"
  >
    <!-- Glow -->
    <div
      class="absolute top-1/2 right-0 w-96 h-96 rounded-full
             bg-violet-500/5 dark:bg-violet-500/10 blur-3xl pointer-events-none"
    />

    <div class="section-container relative z-10">
      <!-- Heading -->
      <div class="text-center mb-12 reveal">
        <p class="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-3">
          What I've built
        </p>
        <h2 class="section-title text-slate-900 dark:text-white">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
        <p class="mt-5 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          A selection of projects that showcase my skills across different domains and tech stacks.
        </p>
      </div>

      <!-- Filter tabs -->
      <div class="flex justify-center mb-10 reveal reveal-delay-1">
        <div
          class="inline-flex p-1 rounded-xl bg-slate-200 dark:bg-navy-800
                 border border-slate-300 dark:border-white/10 gap-1"
        >
          <button
            v-for="filter in filters"
            :id="`filter-${filter.toLowerCase()}`"
            :key="filter"
            class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
            :class="
              activeFilter === filter
                ? 'bg-white dark:bg-violet-600 text-violet-600 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            "
            @click="setFilter(filter)"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- Project grid -->
      <TransitionGroup
        name="card"
        tag="div"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <UiProjectCard
          v-for="project in visibleProjects"
          :key="project.title"
          :project="project"
        />
      </TransitionGroup>

      <!-- Show more -->
      <div
        v-if="filteredProjects.length > 3"
        class="mt-10 flex justify-center"
      >
        <button
          id="show-more-projects-btn"
          class="btn-outline"
          @click="showAll = !showAll"
        >
          <Icon
            :name="showAll ? 'heroicons:chevron-up-20-solid' : 'heroicons:chevron-down-20-solid'"
            class="w-5 h-5"
          />
          {{ showAll ? 'Show Less' : `Show ${filteredProjects.length - 3} More` }}
        </button>
      </div>

      <!-- Empty state -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-16 text-slate-500 dark:text-slate-500"
      >
        <Icon name="heroicons:face-frown-20-solid" class="w-12 h-12 mx-auto mb-3 opacity-40" />
        <p>No projects in this category yet.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
}
</style>
