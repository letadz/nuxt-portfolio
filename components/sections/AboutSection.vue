<script setup lang="ts">
const stats = [
  { value: "6+", label: "Projects Built" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion" },
];

const highlights = [
  "Vue.js / Nuxt.js",
  "React.js",
  "Tailwind CSS",
  "Firebase",
  "Pinia",
  "Vuex",
  "Git & GitHub",
  "Figma / Photoshop",
];
</script>

<template>
  <section
    id="about"
    class="py-24 sm:py-32 bg-slate-50 dark:bg-navy-950 relative overflow-hidden"
  >
    <!-- Glow -->
    <div
      class="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl pointer-events-none"
    />

    <div class="section-container relative z-10">
      <!-- Heading -->
      <div class="text-center mb-16 reveal">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-3"
        >
          Get to know me
        </p>
        <h2 class="section-title text-slate-900 dark:text-white">
          About <span class="gradient-text">Me</span>
        </h2>
        <div
          class="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-cyan-500"
        />
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Avatar + Stats -->
        <div class="flex flex-col items-center gap-8 reveal">
          <!-- Avatar -->
          <div class="relative">
            <div
              class="absolute -inset-3 rounded-3xl bg-linear-to-br from-violet-500/20 to-cyan-500/20 blur-lg"
            />
            <div
              class="relative w-64 h-64 rounded-3xl bg-linear-to-br from-violet-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-violet-500/25"
            >
              <img
                src="/formal.webp"
                alt="Mark Angelo Letada"
                class="w-full h-full object-cover object-top rounded"
                draggable="false"
              />
            </div>
            
            <!-- Location chip -->
            <div
              class="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-navy-800 shadow-lg border border-slate-200 dark:border-white/10 whitespace-nowrap"
            >
              <Icon
                name="heroicons:map-pin-20-solid"
                class="w-3.5 h-3.5 text-violet-500"
              />
              <span
                class="text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                NCR,Philippines
              </span>
            </div>
          </div>

          <!-- Stats grid -->
          <div class="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center p-4 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/10 shadow-sm"
            >
              <p class="font-display text-3xl font-extrabold gradient-text">
                {{ stat.value }}
              </p>
              <p
                class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium"
              >
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Bio + Skills -->
        <div class="space-y-8 reveal reveal-delay-2">
          <div class="space-y-4">
            <h3
              class="font-display text-2xl font-bold text-slate-900 dark:text-white"
            >
              I build things for the web
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm
              <strong class="text-slate-800 dark:text-slate-200">
                Mark Angelo Letada
              </strong>
              , a passionate Front-End Developer from the Philippines with a
              love for crafting pixel-perfect, user-friendly interfaces. I
              thrive at the intersection of design and engineering.
            </p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              My go-to stack is
              <strong class="text-slate-800 dark:text-slate-200">
                Vue.js / Nuxt.js
              </strong>
              paired with Tailwind CSS, but I'm equally comfortable building in
              React. I also enjoy working with Firebase for full-stack projects.
            </p>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me designing in Photoshop,
              exploring new frameworks, or leveling up my skills on side
              projects.
            </p>
          </div>

          <!-- Skill highlights -->
          <div>
            <p
              class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider"
            >
              Core Technologies
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in highlights"
                :key="skill"
                class="skill-badge"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
