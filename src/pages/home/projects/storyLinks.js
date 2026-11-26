/* "Read my story as" -> projects: the story tab being read decides which field the project opens under. */
const FIELD_OF_ROLE = { ba: "analytics", pm: "team", ux: "uiux", dev: "developer", ai: "aiml" };

export function storyProjectHref(role, projectId) {
  if (!projectId) return "#selected-works";
  const query = new URLSearchParams({ project: projectId });
  if (FIELD_OF_ROLE[role]) query.set("field", FIELD_OF_ROLE[role]);
  return `/?${query}#selected-works`;
}

export function openStoryProject(event, role, projectId) {
  if (!projectId || event.metaKey || event.ctrlKey || event.shiftKey || event.button) return;
  event.preventDefault();
  window.history.replaceState(null, "", storyProjectHref(role, projectId));
  window.dispatchEvent(new CustomEvent("projects:open", { detail: { project: projectId, field: FIELD_OF_ROLE[role] || null } }));
}
