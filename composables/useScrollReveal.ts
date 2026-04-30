/**
 * useScrollReveal — attaches IntersectionObserver to elements
 * with the `.reveal` class. Elements are visible by default;
 * JS adds `.will-animate` first, then `.visible` on intersection.
 */
export const useScrollReveal = () => {
  onMounted(() => {
    const elements = document.querySelectorAll('.reveal')

    // Mark elements as ready to animate (only below viewport)
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top > window.innerHeight * 0.9) {
        el.classList.add('will-animate')
      } else {
        // Already in view on load — keep visible
        el.classList.add('visible')
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.classList.remove('will-animate')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    onUnmounted(() => observer.disconnect())
  })
}
