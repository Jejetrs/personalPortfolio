import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

/**
 * The project showcase swaps one case-study card at a time into `#about-project-detail`.
 * The card is a normal React component; it gets its own root so the (imperative) selector can
 * render it synchronously and then enhance the freshly committed DOM.
 */
export function createDetailRenderer(container) {
  const root = createRoot(container);
  return {
    renderDetail(project) {
      const { Card } = project;
      flushSync(() => root.render(<Card key={project.id} />));
    },
    clearDetail() {
      flushSync(() => root.render(null));
    },
    destroy() {
      queueMicrotask(() => root.unmount());
    },
  };
}
