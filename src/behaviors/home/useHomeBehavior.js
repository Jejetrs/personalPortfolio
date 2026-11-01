import { useEffect } from "react";
import { PROJECTS } from "@/pages/home/projects/index.js";
import { TRUSTEE_DOCUMENTS } from "@/pages/home/data/trusteeDocuments.js";
import { createDetailRenderer } from "./detailRenderer.jsx";
import { mountEventPhotos } from "./eventPhotos.js";
import { mountHomeInteractions } from "./interactions.js";
import { createScope } from "./lifecycle.js";
import { mountProjectSelector } from "./projectSelector.js";

/**
 * Boots the home page widgets once the page markup is committed and tears them down on unmount.
 * Mounting is deferred a microtask so the project showcase can render cards with flushSync
 * outside of React's own commit phase.
 */
export default function useHomeBehavior() {
  useEffect(() => {
    const scope = createScope();
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      mountHomeInteractions(scope);
      const detail = createDetailRenderer(document.getElementById("about-project-detail"));
      scope.add(detail.destroy);
      mountProjectSelector(scope, {
        projects: PROJECTS,
        trusteeDocuments: TRUSTEE_DOCUMENTS,
        renderDetail: detail.renderDetail,
        clearDetail: detail.clearDetail,
      });
      mountEventPhotos(scope);
    });
    return () => {
      cancelled = true;
      scope.dispose();
    };
  }, []);
}
