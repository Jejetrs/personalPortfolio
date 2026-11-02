/* Project handlers */
export const handlers = {};

export const toggleAccordion = (...args) => {
  // Avoid duplicate dispatch when an enhancer owns the click handler.
  if (window.event?.target?.closest?.("button")?.onclick) return;
  handlers.toggleAccordion?.(...args);
};
export const nextSlide = (...args) => handlers.nextSlide?.(...args);
export const prevSlide = (...args) => handlers.prevSlide?.(...args);
export const goToSlide = (...args) => handlers.goToSlide?.(...args);
