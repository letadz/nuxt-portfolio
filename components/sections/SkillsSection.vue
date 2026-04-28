<script setup lang="ts">
const skillGroups = [
  {
    category: 'Frontend',
    icon: 'heroicons:code-bracket-20-solid',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
    ],
  },
  {
    category: 'Frameworks',
    icon: 'heroicons:cube-transparent-20-solid',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
      { name: 'React', icon: 'logos:react' },
    ],
  },
  {
    category: 'Styling',
    icon: 'heroicons:paint-brush-20-solid',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Bootstrap', icon: 'logos:bootstrap' },
      { name: 'SASS', icon: 'logos:sass' },
    ],
  },
  {
    category: 'Tools & Backend',
    icon: 'heroicons:wrench-screwdriver-20-solid',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      { name: 'Pinia', icon: 'logos:pinia' },
      { name: 'Vuex', icon: 'logos:vue' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
      { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
    ],
  },
]
</script>

<template>
  <section
    id="skills"
    class="py-24 sm:py-32 bg-white dark:bg-navy-900 relative overflow-hidden"
  >
    <!-- Background accent -->
    <div
      class="absolute bottom-0 left-0 w-80 h-80 rounded-full
             bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl pointer-events-none"
    />

    <div class="section-container relative z-10">
      <!-- Heading -->
      <div class="text-center mb-16 reveal">
        <p class="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-3">
          What I work with
        </p>
        <h2 class="section-title text-slate-900 dark:text-white">
          Skills &amp; <span class="gradient-text">Technologies</span>
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
        <p class="mt-5 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          A curated toolkit of languages, frameworks, and tools I use to build modern web
          experiences.
        </p>
      </div>

      <!-- Skill groups -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(group, gi) in skillGroups"
          :key="group.category"
          class="reveal"
          :class="`reveal-delay-${gi + 1}`"
        >
          <!-- Group header -->
          <div class="mb-4 flex items-center gap-3">
            <div
              class="w-9 h-9 rounded-xl bg-gradient-to-br flex items-center justify-center
                     shadow-md shrink-0"
              :class="group.color"
            >
              <Icon :name="group.icon" class="w-4 h-4 text-white" />
            </div>
            <h3 class="font-display font-bold text-slate-800 dark:text-white text-sm">
              {{ group.category }}
            </h3>
          </div>

          <!-- Skills list -->
          <div class="space-y-2.5">
            <div
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex items-center gap-3 px-4 py-3 rounded-xl
                     bg-slate-50 dark:bg-navy-800
                     border border-slate-200 dark:border-white/10
                     hover:border-violet-300 dark:hover:border-violet-500/40
                     hover:bg-violet-50/50 dark:hover:bg-violet-500/5
                     hover:-translate-y-0.5
                     transition-all duration-200 group cursor-default"
            >
              <Icon
                :name="skill.icon"
                class="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform duration-200"
              />
              <span class="text-sm font-medium text-slate-700 dark:text-slate-200">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Proficiency note -->
      <div class="mt-14 text-center reveal">
        <p class="text-slate-500 dark:text-slate-500 text-sm">
          Always learning — currently exploring
          <span class="font-semibold text-violet-500 dark:text-violet-400">Node.js</span>,
          <span class="font-semibold text-violet-500 dark:text-violet-400">TypeScript</span>, and
          <span class="font-semibold text-violet-500 dark:text-violet-400">Testing</span> best practices.
        </p>
      </div>
    </div>
  </section>
</template>
