import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import GroupCard from "@/pages/home/projects/GroupCard.jsx";

export function createDetailRenderer(container) {
  const root = createRoot(container);
  return {
    renderDetail(project) {
      // A project that covers several fields reads as one card with a section per field.
      if (project.group) {
        flushSync(() => root.render(
          <GroupCard
            field={project.category}
            fields={project.groupFields}
            group={project.group}
            sources={project.groupSources}
            image={project.profileImage}
            key={`${project.group.slug}-${project.category}`}
          />,
        ));
        return;
      }
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
