import { updateGlobalToggleState } from './caseStudy.js';
import { startAutoSlideshow } from '@/lib/autoSlideshow.js';
import { fadeInSlide } from '@/lib/slideTransitions.js';

export { toggleAccordion, toggleAllAccordions } from './caseStudy.js';

/* Project page behavior */

export function showProjectCategory(category) {
  document.querySelectorAll('[data-project-panel]').forEach((panel) => panel.classList.toggle('hidden', panel.dataset.projectPanel !== category));
  document.querySelectorAll('.project-filter').forEach((button) => {
    const active = button.dataset.category === category;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('bg-indigo-600', active);
    button.classList.toggle('text-white', active);
    button.classList.toggle('bg-white', !active);
    button.classList.toggle('border', !active);
    button.classList.toggle('border-slate-200', !active);
    button.classList.toggle('text-slate-600', !active);
  });
  const categories = {
    team: ['Team & Product Management', 'Team and product management projects.'],
    uiux: ['UI/UX Design & Research', 'A collection of human-centered work across research, interaction design, design systems, AI-powered products, and front-end product experiences. Each project reflects my passion for creating meaningful, usable, and impactful digital solutions.'],
    aiml: ['AI/ML Engineer', 'A collection of practical and innovative machine learning projects spanning computer vision, NLP, LLM, data analytics, and deployable applications. Each project highlights the problem, approach, key results, and real-world impact.'],
    b2b: ['B2B Fundamental', 'B2B product and project work.']
  };
  const [title, description] = categories[category];
  document.getElementById('project-page-title').innerHTML = `${title} <span class="text-indigo-600">Projects.</span>`;
  document.getElementById('project-page-description').textContent = description;
  document.getElementById('project-breadcrumb').textContent = `${title} Projects`;
  const profileVisual = document.getElementById('project-profile-visual');
  const profilePhoto = profileVisual.querySelector('img');
  const profileSkills = profileVisual.querySelector('.absolute.bottom-3.right-3');
  const isAiMl = category === 'aiml';
  profileVisual.classList.toggle('hidden', category !== 'uiux' && !isAiMl);
  profilePhoto.alt = `Jessica Theresia - ${isAiMl ? 'AI/ML Specialist' : 'Product Designer'}`;
  profileSkills.innerHTML = isAiMl
    ? '<div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> Computer Vision</div><div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> NLP &amp; LLM</div><div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> Data Intelligence</div><div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> Deployable AI Solutions</div>'
    : '<div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> User Research</div><div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> Interaction Design</div><div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> Product Design</div><div class="flex items-center gap-1 text-indigo-600"><span class="text-xs">✓</span> AI-Powered Products</div>';
}
export function organizeProjectOverviewDetails() {
  document.querySelectorAll('.project-card-item .case-study-accordion-content').forEach((caseStudy) => {
    if (caseStudy.hasAttribute('data-preserve-case-study')) return;

    const content = caseStudy.querySelector('.case-study-accordion-inner');
    if (!content) return;

    const overviewSections = [];
    const evidenceSections = [];

    Array.from(content.children).forEach((section) => {
      if (!section.querySelector('img[src]')) {
        overviewSections.push(section);
        return;
      }

      const sectionContent = Array.from(section.children);
      if (!sectionContent.length) {
        evidenceSections.push(section);
        return;
      }

      const overviewSection = section.cloneNode(false);
      const evidenceSection = section.cloneNode(false);
      for (let index = 0; index < sectionContent.length; index += 1) {
        const group = [sectionContent[index]];
        const currentText = (sectionContent[index].innerText || '').trim();
        const next = sectionContent[index + 1];
        if (
          next &&
          !sectionContent[index].querySelector('img[src]') &&
          next.querySelector('img[src]') &&
          currentText.length <= 100
        ) {
          group.push(next);
          index += 1;
        }

        const destination = group.some((item) => item.querySelector('img[src]'))
          ? evidenceSection
          : overviewSection;
        group.forEach((item) => destination.appendChild(item));
      }

      if (overviewSection.children.length) overviewSections.push(overviewSection);
      if (evidenceSection.children.length) evidenceSections.push(evidenceSection);
    });

    const disclosure = caseStudy.parentElement;
    if (overviewSections.length) {
      const overview = document.createElement('div');
      overview.className = 'project-overview-details';
      overview.setAttribute('aria-label', 'Project overview');
      overviewSections.forEach((section) => overview.appendChild(section));
      disclosure.parentElement.insertBefore(overview, disclosure);
    }

    if (evidenceSections.length) {
      content.replaceChildren(...evidenceSections);
      const label = disclosure.querySelector('.accordion-text');
      if (label) {
        label.textContent = 'View Supporting Documents & Visual Evidence';
        const button = label.closest('button');
        if (button) {
          button.onclick = () => {
            toggleAccordion(caseStudy.id.replace(/-accordion$/, ''));
            label.textContent = button.getAttribute('aria-expanded') === 'true'
              ? 'Hide Supporting Documents & Visual Evidence'
              : 'View Supporting Documents & Visual Evidence';
          };
        }
      }
    } else {
      disclosure.remove();
    }
  });
}
export function prepareProjectCards() {
  document.querySelectorAll('.project-card-item').forEach((card) => {
    let cardHeader = card.querySelector('.project-card-header');
    if (!cardHeader) {
      const primaryAction = Array.from(card.querySelectorAll('a')).find((link) =>
        /view (?:prototype|case study|project)|user flow/i.test(link.textContent)
      );
      cardHeader = primaryAction?.closest('[class*="border-b"]') || null;
      if (cardHeader && cardHeader !== card) cardHeader.classList.add('project-card-header');
    }

    if (cardHeader && cardHeader.parentElement !== card) {
      const decorations = Array.from(card.children).filter((child) =>
        child.classList.contains('pointer-events-none') && child.classList.contains('absolute')
      );
      const firstContent = Array.from(card.children).find((child) => !decorations.includes(child));
      card.insertBefore(cardHeader, firstContent || null);
    }

    if (cardHeader) {
      cardHeader.classList.add('project-card-header');
      const actionLinks = Array.from(cardHeader.querySelectorAll('a'));
      const actionGroup = actionLinks.length
        ? actionLinks[actionLinks.length - 1].parentElement
        : null;
      if (actionGroup && actionLinks.length > 1) {
        actionLinks.forEach((link) => actionGroup.appendChild(link));
      }
    }

    const previewButtons = card.querySelectorAll('[aria-label="Previous preview"], [aria-label="Next preview"]');
    if (previewButtons.length) {
      const frame = previewButtons[0].parentElement;
      if (frame.querySelectorAll('img').length === 1 && !frame.querySelector('.carousel-slide')) {
        const preview = frame.closest('[class~="lg:col-span-5"]');
        if (preview) {
          preview.dataset.singlePreview = 'true';
          Array.from(preview.children)
            .find((child) => child !== frame && child.classList.contains('justify-center'))
            ?.classList.add('preview-pagination');
        }
      }
    }

    const caseStudy = card.querySelector('.case-study-accordion-content');
    const details = caseStudy || card.querySelector('[class*="pt-4"][class*="border-t"]') || card;
    if (!details) return;
    if (!details.id) details.id = `${card.id}-details`;

    card.querySelectorAll('a[href="#"]').forEach((link) => {
      link.href = `#${details.id}`;
      link.setAttribute('aria-label', `View details for ${card.querySelector('h2')?.textContent.trim() || 'this project'}`);
      const label = link.querySelector('span');
      const originalLabel = label?.textContent.trim().toLowerCase() || '';
      if (label) {
        label.textContent = caseStudy
          ? originalLabel.includes('flow') ? 'View User Flow' : 'View Case Study'
          : 'View Project Details';
      }
      link.addEventListener('click', (event) => {
        event.preventDefault();
        if (caseStudy && !caseStudy.classList.contains('is-open')) {
          toggleAccordion(caseStudy.id.replace(/-accordion$/, ''));
        }
        details.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    card.querySelectorAll('a[target="_blank"]').forEach((link) => {
      link.rel = 'noopener noreferrer';
    });

    if (card.id === 'nusca-project-card-1') {
      const layout = card.querySelector('[class~="lg:grid-cols-12"]');
      const textColumn = card.querySelector('[class~="lg:col-span-7"]');
      const overview = Array.from(card.children).find((child) =>
        child.classList.contains('border-t') && child.querySelector('.project-overview-details')
      );
      const scoreGroup = textColumn?.querySelector('.flex.flex-wrap.items-center.justify-between.gap-3.pt-1 > div');

      if (layout && textColumn && overview && scoreGroup) {
        layout.style.alignItems = 'start';
        overview.classList.remove('border-t', 'pt-4', 'space-y-4');
        overview.classList.add('nusca-overview');
        scoreGroup.classList.add('nusca-score-grid');
        textColumn.appendChild(overview);

        const processOverview = overview.querySelector('.project-overview-details');
        if (processOverview) {
          const accordionId = 'nusca-uiux-process';
          const disclosure = document.createElement('div');
          disclosure.className = 'nusca-process-disclosure';
          const button = document.createElement('button');
          button.id = `${accordionId}-accordion-btn`;
          button.type = 'button';
          button.className = 'nusca-process-toggle';
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-controls', `${accordionId}-accordion`);

          const titleGroup = document.createElement('span');
          titleGroup.className = 'flex min-w-0 items-center gap-2';
          const icon = document.createElement('span');
          icon.className = 'text-emerald-700';
          icon.setAttribute('aria-hidden', 'true');
          icon.textContent = '☷';
          const label = document.createElement('span');
          label.className = 'accordion-text truncate text-xs font-semibold';
          label.textContent = 'UX Process Progression & Wireframing';
          const badge = document.createElement('span');
          badge.className = 'hidden rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-800 sm:inline-flex';
          badge.textContent = 'User-Centered Design Workflow';
          titleGroup.append(icon, label, badge);

          const actionGroup = document.createElement('span');
          actionGroup.className = 'flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-500';
          const actionLabel = document.createElement('span');
          actionLabel.textContent = 'Show Details';
          const chevron = document.createElement('span');
          chevron.className = 'accordion-chevron';
          chevron.setAttribute('aria-hidden', 'true');
          chevron.textContent = '⌄';
          actionGroup.append(actionLabel, chevron);
          button.append(titleGroup, actionGroup);

          const accordion = document.createElement('div');
          accordion.id = `${accordionId}-accordion`;
          accordion.className = 'case-study-accordion-content';
          const accordionInner = document.createElement('div');
          accordionInner.className = 'case-study-accordion-inner nusca-process-content';
          accordionInner.appendChild(processOverview);
          accordion.appendChild(accordionInner);

          button.onclick = () => {
            const isOpen = accordion.classList.toggle('is-open');
            button.setAttribute('aria-expanded', String(isOpen));
            actionLabel.textContent = isOpen
              ? 'Hide Details'
              : 'Show Details';
          };

          disclosure.append(button, accordion);
          layout.insertAdjacentElement('afterend', disclosure);
        }
      }
    }

    if (card.id === 'smart-focus-alert-card-1') {
      const layout = card.querySelector('.relative.z-10.space-y-4 > [class~="lg:grid-cols-12"]');
      const textColumn = layout?.querySelector('[class~="lg:col-span-7"]');
      const detailGroup = layout?.nextElementSibling;
      const overviewGrid = detailGroup?.querySelector(':scope > .grid');
      const researchOverview = detailGroup?.querySelector('.project-overview-details');
      const evidenceContent = caseStudy?.querySelector('.case-study-accordion-inner');

      if (layout && textColumn && detailGroup && overviewGrid) {
        layout.style.alignItems = 'start';
        overviewGrid.classList.add('smart-focus-overview-grid');
        textColumn.appendChild(overviewGrid);
      }

      if (researchOverview && evidenceContent) {
        evidenceContent.append(...researchOverview.childNodes);
        researchOverview.remove();
      }

    }

    if (card.id === 'campaign-deck-master-card') {
      const processOverview = card.querySelector('.project-overview-details');
      const evidenceContent = caseStudy?.querySelector('.case-study-accordion-inner');
      const disclosure = caseStudy?.parentElement;
      const button = disclosure?.querySelector('button[id$="-accordion-btn"]');
      const label = button?.querySelector('.accordion-text');

      if (processOverview && evidenceContent && button && label) {
        processOverview.classList.add('campaign-process-in-dropdown');
        evidenceContent.insertBefore(processOverview, evidenceContent.firstChild);
        label.textContent = 'View UX Process & Supporting Documents';
        button.onclick = () => {
          toggleAccordion(caseStudy.id.replace(/-accordion$/, ''));
          label.textContent = button.getAttribute('aria-expanded') === 'true'
            ? 'Hide UX Process & Supporting Documents'
            : 'View UX Process & Supporting Documents';
        };
      }
    }

    if (card.id === 'aoshuttle-project-card') {
      const infoGrid = card.querySelector('.lg\\:col-span-7 > .grid.grid-cols-1.sm\\:grid-cols-3');
      const scoreOverview = card.querySelector('.project-overview-details > .pt-3.grid');
      const scoreCard = scoreOverview?.firstElementChild;

      if (infoGrid && scoreCard) {
        infoGrid.classList.add('aoshuttle-overview-grid');
        scoreCard.classList.remove('lg:col-span-5');
        scoreCard.classList.add('aoshuttle-score-card');
        infoGrid.appendChild(scoreCard);
        scoreOverview.parentElement.remove();
      }
    }
  });
}
export function standardizeProjectContentRhythm() {
  document.querySelectorAll('.project-card-item [class~="lg:col-span-7"]').forEach((column) => {
    const title = column.querySelector('h2');
    if (!title) return;

    const paragraphs = Array.from(column.querySelectorAll('p'));
    const titleIndex = paragraphs.findIndex((paragraph) => title.compareDocumentPosition(paragraph) & Node.DOCUMENT_POSITION_FOLLOWING);
    const role = paragraphs[titleIndex];
    const intro = paragraphs[titleIndex + 1];

    if (role) role.classList.add('project-role-line');
    if (intro) {
      intro.classList.add('project-intro');
      const getTopContentBlock = (element) => {
        let block = element;
        while (block.parentElement && block.parentElement !== column) {
          block = block.parentElement;
        }
        return block;
      };

      if (role && getTopContentBlock(role) === getTopContentBlock(intro)) {
        intro.classList.add('project-intro-with-role');
      }
    }
  });
}
export function standardizeProjectDropdowns() {
  document.querySelectorAll('.project-card-item .case-study-accordion-content').forEach((accordion) => {
    const disclosure = accordion.parentElement;
    const button = disclosure.querySelector('button[id$="-accordion-btn"]');
    if (!button) return;

    disclosure.className = 'project-dropdown-disclosure';

    if (button.classList.contains('nusca-process-toggle')) {
      button.className = 'project-dropdown-toggle nusca-process-toggle';
      return;
    }

    if (button.classList.contains('project-dropdown-toggle')) return;

    button.className = 'project-dropdown-toggle';

    const oldLabel = button.querySelector('.accordion-text');
    const oldLabelText = oldLabel?.textContent.trim() || '';
    const title = oldLabelText
      .replace(/^(?:view|hide)\s+/i, '')
      .replace(/\s+/g, ' ')
      .trim() || 'Supporting Documents & Visual Evidence';
    const oldBadge = button.children[1]?.querySelector('span');
    const badgeText = oldBadge?.textContent.trim() || '';
    const isOpen = accordion.classList.contains('is-open');

    button.replaceChildren();

    const titleGroup = document.createElement('span');
    titleGroup.className = 'flex min-w-0 items-center gap-2';
    const icon = document.createElement('span');
    icon.className = 'shrink-0 text-emerald-700';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '☷';
    const label = document.createElement('span');
    label.className = 'truncate text-xs font-semibold';
    label.textContent = title;
    titleGroup.append(icon, label);

    if (badgeText) {
      const badge = document.createElement('span');
      badge.className = 'project-dropdown-badge hidden sm:inline-flex';
      badge.textContent = badgeText;
      titleGroup.appendChild(badge);
    }

    const actionGroup = document.createElement('span');
    actionGroup.className = 'flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-500';
    const actionLabel = document.createElement('span');
    actionLabel.textContent = isOpen ? 'Hide Details' : 'Show Details';
    const chevron = document.createElement('span');
    chevron.className = 'accordion-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    chevron.textContent = '⌄';
    actionGroup.append(actionLabel, chevron);
    button.append(titleGroup, actionGroup);
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-controls', accordion.id);

    button.onclick = () => {
      const nextIsOpen = accordion.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(nextIsOpen));
      actionLabel.textContent = nextIsOpen ? 'Hide Details' : 'Show Details';
      updateGlobalToggleState();
    };
  });
}


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
      const wasHidden = slide.classList.contains('hidden');
      slide.classList.remove('hidden');
      if (wasHidden) fadeInSlide(slide);
    } else {
      slide.classList.add('hidden');
    }
  });

  dots.forEach((dot, idx) => {
    dot.className = 'carousel-dot h-1.5 rounded-full transition-all';
    dot.setAttribute('aria-current', String(idx === index));
    if (idx === index) {
      dot.classList.add(colors.active, 'w-5');
    } else {
      dot.classList.add(colors.inactive, 'w-2');
    }
  });

  const activeImage = slides[index]?.querySelector('img');
  const caption = document.getElementById(`${carouselId}-caption`);
  const nextCaption = document.getElementById(`${carouselId}-next-caption`);
  const count = document.getElementById(`${carouselId}-count`);
  if (activeImage && caption) caption.textContent = getProjectImageCaption(activeImage.alt);
  if (nextCaption) {
    const nextImage = slides[(index + 1) % total]?.querySelector('img');
    nextCaption.textContent = total > 1 && nextImage
      ? getProjectImageCaption(nextImage.alt)
      : 'Project Preview';
  }
  if (count) count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function getProjectImageCaption(alt) {
  return alt
    .replace(/^.*?\s-\s/, '')
    .replace(/\s+(?:showcase|mockup|overview|screen details)$/i, '')
    .trim() || 'Project Preview';
}

export function initializeProjectCarousels() {
  document.querySelectorAll('.project-card-item [id$="-slides"]').forEach((slidesContainer) => {
    const card = slidesContainer.closest('.project-card-item');
    const carouselId = slidesContainer.id.replace(/-slides$/, '');
    const slides = Array.from(slidesContainer.querySelectorAll('.carousel-slide'));
    if (!card || !slides.length) return;

    if (slides.length === 1) {
      const caseStudy = card.querySelector('.case-study-accordion-content');
      caseStudy?.querySelectorAll('img[src]').forEach((image) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide transition-all duration-300 hidden';
        const imageCopy = image.cloneNode(true);
        imageCopy.className = 'w-full max-h-80 object-contain drop-shadow-md rounded-xl';
        imageCopy.loading = 'lazy';
        slide.appendChild(imageCopy);
        slidesContainer.appendChild(slide);
      });
    }

    const total = slidesContainer.querySelectorAll('.carousel-slide').length;
    const dotsContainer = document.getElementById(`${carouselId}-dots`);
    if (dotsContainer) {
      const dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));
      dots.slice(total).forEach((dot) => dot.remove());
      while (dotsContainer.querySelectorAll('.carousel-dot').length < total) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot h-1.5 rounded-full transition-all';
        dotsContainer.appendChild(dot);
      }
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.setAttribute('aria-label', `Show image ${index + 1} of ${total}`);
        dot.onclick = () => goToSlide(carouselId, index);
      });
    }

    if (total < 2) {
      card.querySelectorAll('.slide-nav-btn').forEach((button) => button.hidden = true);
      if (dotsContainer) dotsContainer.hidden = true;
      return;
    }

    card.querySelectorAll('.slide-nav-btn').forEach((button) => button.hidden = false);
    if (dotsContainer) dotsContainer.hidden = false;
    updateCarouselView(carouselId, getCurrentIndex(carouselId));
    startAutoSlideshow(card, () => nextSlide(carouselId));
  });
}

export function initializeProjectImageCards() {
  document.querySelectorAll('.project-card-item').forEach((card, cardIndex) => {
    const preview = card.querySelector('[class~="lg:col-span-5"]');
    if (!preview) return;

    const title = card.querySelector('h2')?.textContent.trim() || `Project ${cardIndex + 1}`;
    let slidesContainer = preview.querySelector('[id$="-slides"]');
    let carouselId = slidesContainer?.id.replace(/-slides$/, '') || card.id.replace(/-card.*$/, '');
    if (!carouselId) carouselId = `project-${cardIndex + 1}`;

    if (!slidesContainer) {
      const mainImage = preview.querySelector('img');
      if (!mainImage) return;
      slidesContainer = document.createElement('div');
      slidesContainer.id = `${carouselId}-slides`;
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.appendChild(mainImage);
      slidesContainer.appendChild(slide);
    }

    const slides = Array.from(slidesContainer.querySelectorAll('.carousel-slide'));
    if (!slides.length) return;

    slidesContainer.querySelectorAll('img').forEach((image) => {
      image.className = '';
      image.loading = 'lazy';
    });

    preview.className = 'lg:col-span-5 project-image-card flex flex-col items-center justify-between relative overflow-hidden';
    preview.replaceChildren();

    const header = document.createElement('div');
    header.className = 'project-image-header';
    const projectLabel = document.createElement('div');
    projectLabel.className = 'flex min-w-0 items-center gap-1.5';
    const statusDot = document.createElement('span');
    statusDot.className = 'h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600';
    const label = document.createElement('span');
    label.className = 'truncate font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500';
    label.textContent = `Project · ${title}`;
    projectLabel.append(statusDot, label);

    const swatches = document.createElement('div');
    swatches.className = 'flex shrink-0 items-center gap-1.5';
    ['#13688D', '#559AB5', '#FFFFFF'].forEach((color) => {
      const swatch = document.createElement('span');
      swatch.className = 'inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 bg-white';
      const colorDot = document.createElement('span');
      colorDot.className = 'h-2.5 w-2.5 rounded-full';
      colorDot.style.backgroundColor = color;
      if (color === '#FFFFFF') colorDot.classList.add('border', 'border-slate-300');
      swatch.appendChild(colorDot);
      swatches.appendChild(swatch);
    });
    header.append(projectLabel, swatches);

    const stage = document.createElement('div');
    stage.className = 'project-image-stage';
    const vector = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    vector.setAttribute('class', 'project-image-vector');
    vector.setAttribute('viewBox', '0 0 800 450');
    vector.setAttribute('fill', 'none');
    vector.setAttribute('aria-hidden', 'true');
    vector.innerHTML = '<path d="M-18 92C52 25 112 38 170 76s113 42 174 3 112-70 183-39 142 64 305-19" stroke="currentColor" stroke-opacity=".28" stroke-width="1.5" stroke-dasharray="6 9"/><path d="M-20 394c109-71 166-38 264-88s139-91 233-70 163 62 346-26" stroke="currentColor" stroke-opacity=".2" stroke-width="1"/><circle cx="78" cy="73" r="28" fill="#bfdbfe" fill-opacity=".22" stroke="currentColor" stroke-opacity=".28"/><circle cx="78" cy="73" r="4" fill="#38bdf8" fill-opacity=".55"/><circle cx="714" cy="353" r="38" fill="#c7d2fe" fill-opacity=".2" stroke="currentColor" stroke-opacity=".24"/><circle cx="714" cy="353" r="4" fill="#818cf8" fill-opacity=".45"/>';
    stage.appendChild(vector);
    stage.appendChild(slidesContainer);

    const dotsContainer = document.createElement('div');
    dotsContainer.id = `${carouselId}-dots`;
    dotsContainer.className = 'project-image-dots';
    const total = slides.length;
    const colors = activeDotColors[carouselId] || { active: 'bg-sky-700', inactive: 'bg-sky-200' };

    slides.forEach((slide, index) => {
      slide.className = 'carousel-slide';
      const image = slide.querySelector('img');
      if (image) image.alt = image.alt || `${title} preview ${index + 1}`;
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `carousel-dot ${index === 0 ? `${colors.active} w-5` : `${colors.inactive} w-2`}`;
      dot.setAttribute('aria-label', `Show image ${index + 1} of ${total} for ${title}`);
      dot.setAttribute('aria-current', String(index === 0));
      dot.addEventListener('click', () => goToSlide(carouselId, index));
      dotsContainer.appendChild(dot);
    });

    [
      { direction: 'previous', symbol: '‹', action: () => prevSlide(carouselId) },
      { direction: 'next', symbol: '›', action: () => nextSlide(carouselId) }
    ].forEach(({ direction, symbol, action }) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `project-image-nav ${direction}`;
      button.setAttribute('aria-label', direction === 'previous' ? 'Previous slide' : 'Next slide');
      button.disabled = total < 2;
      button.addEventListener('click', action);
      button.textContent = symbol;
      stage.appendChild(button);
    });

    const footer = document.createElement('div');
    footer.className = 'project-image-footer';
    const currentCaption = document.createElement('span');
    currentCaption.id = `${carouselId}-caption`;
    currentCaption.className = 'project-image-caption';
    const nextCaption = document.createElement('span');
    nextCaption.id = `${carouselId}-next-caption`;
    nextCaption.className = 'project-image-count';
    const count = document.createElement('span');
    count.id = `${carouselId}-count`;
    count.className = 'project-image-count';
    const footerRight = document.createElement('div');
    footerRight.className = 'flex shrink-0 items-center gap-2';
    footerRight.append(nextCaption, count);
    footer.append(currentCaption, footerRight);

    stage.appendChild(dotsContainer);
    preview.append(header, stage, footer);
    updateCarouselView(carouselId, getCurrentIndex(carouselId));
  });
}

export function compactAiMlProjectCards() {
  document.querySelectorAll('#aiml-projects .project-card-item').forEach((card) => {
    const mainLayout = Array.from(card.children).find((child) =>
      child.matches('[class~="lg:grid-cols-12"]')
    );
    const textColumn = mainLayout?.querySelector(':scope > [class~="lg:col-span-7"]');
    if (!mainLayout || !textColumn) return;

    const supportingContent = Array.from(card.children).find((child) =>
      child !== mainLayout
      && !child.classList.contains('project-card-header')
      && !child.classList.contains('pointer-events-none')
      && child.querySelector('.grid')
    );
    if (!supportingContent) return;

    supportingContent.classList.add('aiml-project-supporting-content');
    textColumn.appendChild(supportingContent);

    const overviewContent = document.createElement('div');
    overviewContent.className = 'aiml-project-overview-content';
    Array.from(textColumn.children)
      .filter((child) => child !== supportingContent)
      .forEach((child) => overviewContent.appendChild(child));
    textColumn.prepend(overviewContent);
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


const enhanced = new WeakSet();

export function enhanceProjectsPage(root) {
  if (!root || enhanced.has(root)) return;
  enhanced.add(root);
  organizeProjectOverviewDetails();
  prepareProjectCards();
  standardizeProjectContentRhythm();
  standardizeProjectDropdowns();
  showProjectCategory('uiux');
  initializeProjectCarousels();
  initializeProjectImageCards();
  compactAiMlProjectCards();
}
