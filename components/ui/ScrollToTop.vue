<script setup lang="ts">
const { y: scrollY } = useWindowScroll()
const isVisible = computed(() => scrollY.value > 300)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <ClientOnly>
    <Transition name="fab">
      <button
        v-if="isVisible"
        id="scroll-to-top-btn"
        aria-label="Scroll to top"
        class="scroll-top-btn"
        @click="scrollToTop"
      >
        <!-- Ripple ring -->
        <span class="scroll-top-ring" aria-hidden="true" />
        <Icon name="heroicons:arrow-up-20-solid" class="w-5 h-5 relative z-10" />
      </button>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  color: white;
  box-shadow: 0 8px 20px -4px rgba(139, 92, 246, 0.5);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.scroll-top-btn:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 12px 28px -4px rgba(139, 92, 246, 0.65);
}

.scroll-top-btn:active {
  transform: translateY(0) scale(0.96);
}

/* Pulsing ring */
.scroll-top-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(139, 92, 246, 0.5);
  animation: ring-pulse 2s ease-in-out infinite;
}

@keyframes ring-pulse {
  0%   { transform: scale(1);    opacity: 0.8; }
  70%  { transform: scale(1.45); opacity: 0;   }
  100% { transform: scale(1.45); opacity: 0;   }
}

/* Entrance / exit transition */
.fab-enter-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fab-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}
</style>
