export const ROUTES = {
  home: "/",
  projects: "/projects",
  aiml: "/ai-ml",
  uiux: "/ui-ux",
  work: "/work",
};

/** Legacy static-file URLs -> router paths. */
export const LEGACY_PAGES = {
  "index.html": ROUTES.home,
  "projects.html": ROUTES.projects,
  "aiml.html": ROUTES.aiml,
  "uiux.html": ROUTES.uiux,
  "work.html": ROUTES.work,
};

/**
 * Pages are styled by different Tailwind (Play CDN) configurations. Navigating between
 * groups does a full document load so the right configuration is always compiled.
 */
export const TAILWIND_GROUP = {
  [ROUTES.home]: "home",
  [ROUTES.projects]: "listing",
  [ROUTES.aiml]: "listing",
  [ROUTES.uiux]: "uiux",
  [ROUTES.work]: "work",
};
