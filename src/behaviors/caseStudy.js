/* Case-study accordion + image carousel behaviour (ported from the original page script). */
export function toggleAccordion(id) { const wrapper = document.getElementById(id + '-accordion'); const btn = document.getElementById(id + '-accordion-btn'); if (!wrapper || !btn) return; const isOpen = wrapper.classList.contains('is-open'); if (isOpen) { wrapper.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); const label = btn.querySelector('.accordion-text'); if (label) label.textContent = 'View Full Case Study & Research Breakdown'; } else { wrapper.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); const label = btn.querySelector('.accordion-text'); if (label) label.textContent = 'Hide Case Study Breakdown'; } updateGlobalToggleState(); }

export function toggleAllAccordions() { const wrappers = document.querySelectorAll('.case-study-accordion-content'); const anyClosed = Array.from(wrappers).some(w => !w.classList.contains('is-open')); wrappers.forEach(w => { const id = w.id.replace('-accordion', ''); const btn = document.getElementById(id + '-accordion-btn'); if (anyClosed) { w.classList.add('is-open'); if (btn) { btn.setAttribute('aria-expanded', 'true'); const label = btn.querySelector('.accordion-text'); if (label) label.textContent = 'Hide Case Study Breakdown'; } } else { w.classList.remove('is-open'); if (btn) { btn.setAttribute('aria-expanded', 'false'); const label = btn.querySelector('.accordion-text'); if (label) label.textContent = 'View Full Case Study & Research Breakdown'; } } }); updateGlobalToggleState(); }

export function updateGlobalToggleState() { const wrappers = document.querySelectorAll('.case-study-accordion-content'); const label = document.getElementById('global-accordion-label'); const icon = document.getElementById('global-accordion-icon'); if (!wrappers.length || !label || !icon) return; const allOpen = Array.from(wrappers).every(w => w.classList.contains('is-open')); if (allOpen) { label.textContent = 'Collapse All Details'; icon.style.transform = 'rotate(180deg)'; } else { label.textContent = 'Expand All Details'; icon.style.transform = 'rotate(0deg)'; } }

  const activeDotColors = {
    'inaproc': { active: 'bg-rose-700', inactive: 'bg-rose-200' },
    'campaign-deck': { active: 'bg-orange-600', inactive: 'bg-orange-200' },
    'nusca': { active: 'bg-emerald-700', inactive: 'bg-emerald-200' },
    'smart-focus': { active: 'bg-blue-700', inactive: 'bg-blue-200' },
    'aisee-mobile': { active: 'bg-sky-700', inactive: 'bg-sky-200' },
    'aidorse': { active: 'bg-purple-700', inactive: 'bg-purple-200' },
    'civision': { active: 'bg-slate-800', inactive: 'bg-slate-300' },
    'aisee-website': { active: 'bg-lime-800', inactive: 'bg-lime-200' },
    'aoshuttle': { active: 'bg-teal-700', inactive: 'bg-teal-200' },
    'movie-review': { active: 'bg-slate-800', inactive: 'bg-amber-200' }
  };

  export function updateCarouselView(carouselId, newIndex) {
    const slidesContainer = document.getElementById(`${carouselId}-slides`);
    const dotsContainer = document.getElementById(`${carouselId}-dots`);
    if (!slidesContainer || !dotsContainer) return;

    const slides = slidesContainer.querySelectorAll('.carousel-slide');
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    const total = slides.length;
    if (total === 0) return;

    const index = (newIndex + total) % total;
    const colors = activeDotColors[carouselId] || { active: 'bg-slate-800', inactive: 'bg-slate-200' };

    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.remove('hidden');
      } else {
        slide.classList.add('hidden');
      }
    });

    dots.forEach((dot, idx) => {
      dot.className = dot.className.replace(colors.active, '').replace(colors.inactive, '').replace('w-5', '').replace('w-2', '').trim();
      if (idx === index) {
        dot.classList.add(colors.active, 'w-5');
      } else {
        dot.classList.add(colors.inactive, 'w-2');
      }
    });
  }

  export function getCurrentIndex(carouselId) {
    const slidesContainer = document.getElementById(`${carouselId}-slides`);
    if (!slidesContainer) return 0;
    const slides = Array.from(slidesContainer.querySelectorAll('.carousel-slide'));
    const activeIdx = slides.findIndex(slide => !slide.classList.contains('hidden'));
    return activeIdx >= 0 ? activeIdx : 0;
  }

  export function nextSlide(carouselId) {
    const current = getCurrentIndex(carouselId);
    updateCarouselView(carouselId, current + 1);
  }

  export function prevSlide(carouselId) {
    const current = getCurrentIndex(carouselId);
    updateCarouselView(carouselId, current - 1);
  }

  export function goToSlide(carouselId, index) {
    updateCarouselView(carouselId, index);
  }
