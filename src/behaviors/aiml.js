/** Project-category filter used by the AI/ML page (and shared by the projects index). */
export function showProjectCategory(category) {
  document.querySelectorAll('[data-project-panel]').forEach((panel) => {
    panel.style.display = panel.dataset.projectPanel === category
      ? (category === 'aiml' ? 'block' : 'grid')
      : 'none';
  });

  document.querySelectorAll('.project-filter').forEach((button) => {
    const isActive = button.dataset.category === category;
    button.setAttribute('aria-pressed', String(isActive));
    button.classList.toggle('bg-indigo-600', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('bg-white', !isActive);
    button.classList.toggle('border', !isActive);
    button.classList.toggle('border-slate-200', !isActive);
    button.classList.toggle('text-slate-600', !isActive);
  });
}
