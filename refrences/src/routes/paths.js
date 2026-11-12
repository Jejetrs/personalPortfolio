export const ROUTES = {
  home: "/",
  projects: "/projects",
  aiml: "/ai-ml",
  uiux: "/ui-ux",
  work: "/work",
};

/* Legacy routes */
export const LEGACY_PAGES = {
  "index.html": ROUTES.home,
  "projects.html": ROUTES.projects,
  "aiml.html": ROUTES.aiml,
  "uiux.html": ROUTES.uiux,
  "work.html": ROUTES.work,
};

export const TAILWIND_GROUP = {
  [ROUTES.home]: "home",
  [ROUTES.projects]: "listing",
  [ROUTES.aiml]: "listing",
  [ROUTES.uiux]: "uiux",
  [ROUTES.work]: "work",
};
