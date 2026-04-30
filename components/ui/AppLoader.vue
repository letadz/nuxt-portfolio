<template>
  <Transition enter-active-class="transition-all duration-700 ease-out" enter-from-class="opacity-0 scale-105"
    leave-active-class="transition-all duration-700 ease-out" leave-to-class="opacity-0 scale-95" @leave="onLeave">
    <div v-if="visible"
      class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#0d1529_0%,#050913_70%)]"
      aria-label="Loading" role="status">

      <div class="absolute inset-0 pointer-events-none">
        <span v-for="i in 12" :key="i"
          class="particle absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(167,139,250,0.9),rgba(34,211,238,0.4))]"
          :style="getParticleStyle(i)" />
      </div>

      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          class="absolute rounded-full border border-[#8b5cf6]/35 border-t-[#8b5cf6]/90 w-[220px] h-[220px] animate-[spin_2.4s_linear_infinite]" />
        <div
          class="absolute rounded-full border border-[#22d3ee]/20 border-r-[#22d3ee]/80 w-[280px] h-[280px] animate-[spin_3.6s_linear_infinite_reverse]" />
        <div
          class="absolute rounded-full border border-[#a78bfa]/10 border-b-[#a78bfa]/50 w-[340px] h-[340px] animate-[spin_5s_linear_infinite]" />
      </div>

      <div class="relative z-10 flex flex-col items-center gap-6">
        <div class="relative w-[120px] h-[120px] flex items-center justify-center">
          <div
            class="logo-glow absolute rounded-full inset-[-16px] bg-[radial-gradient(circle,rgba(139,92,246,0.4)_0%,transparent_70%)]" />

          <img src="/logo.webp" alt="Mark Angelo Logo"
            class="loader-logo relative z-10 w-[100px] h-[100px] object-contain rounded-full drop-shadow-[0_0_18px_rgba(139,92,246,0.7)]"
            draggable="false" />

          <div class="logo-scanner absolute inset-0 rounded-full overflow-hidden pointer-events-none" />
        </div>

        <p class="progress-label m-0 font-sans text-xs tracking-widest text-[#a78bfa]/70">
          {{ Math.round(progress) }}%
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(true)
const progress = ref(0)

let rafId: number
let startTime: number
const DURATION = 1800

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

const animate = (timestamp: number) => {
  if (!startTime) startTime = timestamp
  const elapsed = timestamp - startTime
  const t = Math.min(elapsed / DURATION, 1)
  progress.value = easeOutCubic(t) * 100

  if (t < 1) {
    rafId = requestAnimationFrame(animate)
  } else {
    setTimeout(() => { visible.value = false }, 300)
  }
}

onMounted(() => { rafId = requestAnimationFrame(animate) })
onUnmounted(() => { cancelAnimationFrame(rafId) })

const onLeave = (_el: Element, done: () => void) => setTimeout(done, 700)

const getParticleStyle = (i: number) => {
  const angle = (i / 12) * 360
  const distance = 100 + Math.random() * 60
  const delay = (i * 0.15).toFixed(2)
  const size = 3 + Math.random() * 4
  return {
    '--angle': `${angle}deg`,
    '--distance': `${distance}px`,
    animationDelay: `${delay}s`,
    width: `${size}px`,
    height: `${size}px`,
  }
}
</script>

<style scoped>
.particle {
  animation: orbit 4s ease-in-out infinite;
}

@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance)) scale(0.3);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.6;
  }

  100% {
    transform: translate(-50%, -50%) rotate(calc(var(--angle) + 360deg)) translateX(var(--distance)) scale(1);
    opacity: 0;
  }
}

.logo-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.loader-logo {
  animation: logo-breathe 2.4s ease-in-out infinite, logo-float 3.5s ease-in-out infinite;
}

@keyframes logo-breathe {

  0%,
  100% {
    filter: drop-shadow(0 0 14px rgba(139, 92, 246, 0.6));
  }

  50% {
    filter: drop-shadow(0 0 32px rgba(34, 211, 238, 0.9));
  }
}

@keyframes logo-float {

  0%,
  100% {
    transform: translateY(0px) rotate(-1deg);
  }

  50% {
    transform: translateY(-10px) rotate(1deg);
  }
}

.logo-scanner::after {
  content: '';
  position: absolute;
  top: 0;
  left: -60%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.25), transparent);
  animation: scan 2s ease-in-out infinite;
}

@keyframes scan {
  from {
    left: -60%;
  }

  to {
    left: 160%;
  }
}

.progress-label {
  animation: fade-up-in 0.6s ease-out 0.5s both;
}

@keyframes fade-up-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>