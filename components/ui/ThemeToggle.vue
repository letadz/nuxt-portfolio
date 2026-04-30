<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggle = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <button
      id="theme-toggle-float"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      class="theme-float-btn"
      @click="toggle"
    >
      <!-- Tooltip -->
      <span class="theme-tooltip">
        {{ isDark ? 'Light mode' : 'Dark mode' }}
      </span>
      <Transition name="icon" mode="out-in">
        <Icon
          v-if="isDark"
          key="sun"
          name="heroicons:sun-20-solid"
          class="w-5 h-5"
        />
        <Icon
          v-else
          key="moon"
          name="heroicons:moon-20-solid"
          class="w-5 h-5"
        />
      </Transition>
    </button>

    <template #fallback>
      <div class="theme-float-btn opacity-0 pointer-events-none" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.theme-float-btn {
  position: fixed;
  bottom: 5.5rem;   /* sits above the scroll-to-top button */
  right: 2rem;
  z-index: 9999;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(139, 92, 246, 0.3);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  color: #7c3aed;
  box-shadow:
    0 4px 14px -2px rgba(139, 92, 246, 0.25),
    0 2px 6px -1px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(12px);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

:global(.dark) .theme-float-btn {
  background: #0d1529;
  color: #a78bfa;
  border-color: rgba(167, 139, 250, 0.3);
  box-shadow:
    0 4px 14px -2px rgba(167, 139, 250, 0.25),
    0 2px 6px -1px rgba(0, 0, 0, 0.3);
}

.theme-float-btn:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 10px 24px -4px rgba(139, 92, 246, 0.4);
}

.theme-float-btn:active {
  transform: scale(0.94);
}

/* Tooltip on hover */
.theme-tooltip {
  position: absolute;
  right: 3.75rem;
  white-space: nowrap;
  background: #1e293b;
  color: #f1f5f9;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.65rem;
  border-radius: 0.5rem;
  pointer-events: none;
  opacity: 0;
  transform: translateX(6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

:global(.dark) .theme-tooltip {
  background: #334155;
}

.theme-float-btn:hover .theme-tooltip {
  opacity: 1;
  transform: translateX(0);
}

/* Icon swap animation */
.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.icon-enter-from {
  opacity: 0;
  transform: rotate(-45deg) scale(0.7);
}
.icon-leave-to {
  opacity: 0;
  transform: rotate(45deg) scale(0.7);
}
</style>
