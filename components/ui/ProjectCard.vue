<script setup lang="ts">
interface Props {
  project: {
    title: string
    description: string
    tech: string[]
    liveUrl?: string
    githubUrl?: string
    category: string
    gradient: string
    image?: string
    badge?: string
  }
}

defineProps<Props>()
</script>

<template>
  <div
    class="group relative flex flex-col rounded-2xl overflow-hidden
           border border-slate-200 dark:border-white/10
           bg-white dark:bg-navy-800
           hover:border-violet-400/50 dark:hover:border-violet-500/50
           shadow-sm hover:shadow-xl hover:shadow-violet-500/10
           transition-all duration-400 hover:-translate-y-1"
  >
    <!-- Image / Gradient banner -->
    <div class="relative h-44 overflow-hidden">
      <!-- Project screenshot if available -->
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="absolute inset-0 w-full h-full object-cover
               group-hover:scale-105 transition-transform duration-500"
      />
      <!-- Fallback gradient -->
      <div
        v-else
        class="absolute inset-0 flex items-center justify-center"
        :class="project.gradient"
      >
        <span class="font-display text-4xl font-extrabold text-white/20 tracking-tight select-none">
          {{ project.title.charAt(0) }}
        </span>
      </div>

      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

      <!-- Real-world badge (if any) -->
      <span
        v-if="project.badge"
        class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold
               bg-violet-600 text-white shadow-md"
      >
        {{ project.badge }}
      </span>

      <!-- Category chip -->
      <span
        class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold
               bg-black/30 text-white backdrop-blur-sm"
      >
        {{ project.category }}
      </span>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-5">
      <h3
        class="font-display text-lg font-bold text-slate-800 dark:text-white mb-2
               group-hover:text-violet-600 dark:group-hover:text-violet-400
               transition-colors duration-200"
      >
        {{ project.title }}
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
        {{ project.description }}
      </p>

      <!-- Tech badges -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-0.5 rounded-md text-xs font-medium
                 bg-violet-50 dark:bg-violet-500/10
                 text-violet-700 dark:text-violet-300
                 border border-violet-100 dark:border-violet-500/20"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-white/10">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400
                 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
        >
          <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4" />
          Live Demo
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400
                 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          <Icon name="mdi:github" class="w-4 h-4" />
          Code
        </a>
        <span
          v-if="!project.liveUrl && !project.githubUrl"
          class="text-xs text-slate-400 dark:text-slate-600"
        >
          Coming soon
        </span>
      </div>
    </div>
  </div>
</template>
