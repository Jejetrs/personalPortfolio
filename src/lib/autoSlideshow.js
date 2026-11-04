const cleanups = new WeakMap();

export function startAutoSlideshow(element, advance, delay = 5000) {
  if (!element || typeof advance !== 'function' || cleanups.has(element)) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let inViewport = !('IntersectionObserver' in window);
  let stopped = false;
  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
    })
    : null;

  const cleanup = () => {
    if (stopped) return;
    stopped = true;
    window.clearInterval(timer);
    observer?.disconnect();
    cleanups.delete(element);
  };
  const timer = window.setInterval(() => {
    if (!element.isConnected) {
      cleanup();
      return;
    }
    if (
      !reducedMotion.matches
      && document.visibilityState === 'visible'
      && inViewport
      && !element.matches(':hover')
      && !element.contains(document.activeElement)
      && !document.querySelector('dialog[open], [role="dialog"][aria-modal="true"]')
    ) advance();
  }, delay);

  observer?.observe(element);
  cleanups.set(element, cleanup);
  return cleanup;
}
