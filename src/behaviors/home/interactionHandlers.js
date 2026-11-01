/* Bridge between inline event props in the home markup (React) and the imperative page
 * behaviour. `mountHomeInteractions` registers the implementations while it is mounted. */
export const handlers = {};

export const cancelHidePillarCard = (...args) => handlers.cancelHidePillarCard?.(...args);
export const goToHonorsSlide = (...args) => handlers.goToHonorsSlide?.(...args);
export const scheduleHidePillarCard = (...args) => handlers.scheduleHidePillarCard?.(...args);
export const scrollHonors = (...args) => handlers.scrollHonors?.(...args);
export const showPillarCard = (...args) => handlers.showPillarCard?.(...args);
export const stepPillar = (...args) => handlers.stepPillar?.(...args);
export const togglePillarCard = (...args) => handlers.togglePillarCard?.(...args);
