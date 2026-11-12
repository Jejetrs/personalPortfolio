import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

export function createDetailRenderer(container) {
  const root = createRoot(container);
  return {
    renderDetail(project) {
      const { Card, cardProps } = project;
      flushSync(() => root.render(<Card key={project.id} {...cardProps} />));
    },
    clearDetail() {
      flushSync(() => root.render(null));
    },
    destroy() {
      queueMicrotask(() => root.unmount());
    },
  };
}
