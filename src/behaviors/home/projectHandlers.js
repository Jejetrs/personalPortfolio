/* Bridge between the project cards (React) and the showcase behaviour (imperative).
 * The cards call these from their onClick props; the selector registers the real
 * implementations while it is mounted. */
export const handlers = {};

export const toggleAccordion = (...args) => {
  // The enhancers replace some buttons' own `onclick` (as the original inline handler was replaced);
  // those buttons already handle the click themselves, so React's handler must stay out of the way.
  if (window.event?.target?.closest?.("button")?.onclick) return;
  handlers.toggleAccordion?.(...args);
};
export const nextSlide = (...args) => handlers.nextSlide?.(...args);
export const prevSlide = (...args) => handlers.prevSlide?.(...args);
export const goToSlide = (...args) => handlers.goToSlide?.(...args);
