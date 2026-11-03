/* Project showcase */
import { handlers } from './projectHandlers.js';
import { renderPdf } from '@/lib/pdfCanvas.js';
import { getProjectAssets, getProjectProfileAsset } from '@/pages/home/projects/projectAssets.js';

export async function mountProjectSelector(scope, { projects, trusteeDocuments, renderDetail, clearDetail }) {
  const track = document.getElementById('about-project-track');
    const dots = document.getElementById('about-project-dots');
    const counter = document.getElementById('about-project-counter');
    const detail = document.getElementById('about-project-detail');
    const categoryButtons = Array.from(document.querySelectorAll('.about-project-category'));
    if (!track || !dots || !counter || !detail || categoryButtons.length === 0) return;
    let projectTrackPointer = null;
    let projectTrackDragged = false;
    let pinnedProjectIndex = -1;
    let projectTrackWheelAt = 0;
    let projectTrackDragReset;

    track.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || event.target.closest('a, input, select, textarea')) return;
      projectTrackPointer = { x: event.clientX, scrollLeft: track.scrollLeft };
    });
    track.addEventListener('pointermove', (event) => {
      if (!projectTrackPointer) return;
      const deltaX = event.clientX - projectTrackPointer.x;
      if (Math.abs(deltaX) < 6 && !projectTrackDragged) return;
      projectTrackDragged = true;
      track.classList.add('is-dragging');
      track.scrollLeft = projectTrackPointer.scrollLeft - deltaX;
      event.preventDefault();
    });
    const endProjectTrackDrag = () => {
      projectTrackPointer = null;
      track.classList.remove('is-dragging');
      if (projectTrackDragged) {
        window.clearTimeout(projectTrackDragReset);
        projectTrackDragReset = window.setTimeout(() => {
          projectTrackDragged = false;
        }, 0);
      }
    };
    track.addEventListener('pointerup', endProjectTrackDrag);
    track.addEventListener('pointercancel', endProjectTrackDrag);
    track.addEventListener('wheel', (event) => {
      const horizontalDelta = event.deltaX || (event.shiftKey ? event.deltaY : 0);
      if (!horizontalDelta) return;
      event.preventDefault();
      const now = performance.now();
      if (now - projectTrackWheelAt < 12) return;
      projectTrackWheelAt = now;
      track.scrollLeft += horizontalDelta;
    }, { passive: false });

    const projectData = projects.map((project) => {
      const assets = getProjectAssets(project);
      const profile = getProjectProfileAsset(project);
      return {
        ...project,
        images: assets.filter((item) => item?.type === 'image').map((item) => item.src).length
          ? assets.filter((item) => item?.type === 'image').map((item) => item.src)
          : project.images || [],
        profileImage: profile?.src || (project.category === 'developer' ? '' : project.images?.[0] || ''),
      };
    });
    const categoryNames = {
      analytics: 'Business Analytics',
      team: 'Project Management & Leadership',
      uiux: 'UI/UX Design',
      aiml: 'AI Engineering',
      developer: 'Developer'
    };
    const categoryDescriptions = {
      analytics: 'Business and user research, competitor insights, SWOT, and business models translated into evidence-informed product proposals.',
      team: 'Leading and coordinating projects through structured planning, milestone tracking, team collaboration, and delivery management.',
      uiux: 'Transforming user needs and product requirements into intuitive digital experiences through research, user flows, prototyping, and design systems.',
      aiml: 'Developing intelligent solutions using machine learning, computer vision, NLP, and AI integration to address real-world challenges.',
      developer: 'Building functional and scalable web applications through frontend development, backend services, REST APIs, database integration, testing, and deployment.'
    };
    const categoryProjectOrder = {
      aiml: [
        'nusca-project-card-2',
        'smart-focus-alert-card-2',
        'beauty-glossary-card',
        'skin-classification-card',
        'diabetes-risk-card',
        'movie-recommender-card',
        'whatsapp-sentiment-card',
        'bank-fraud-card',
        'bikesharing-card',
      ],
      developer: [
        'movie-review-project-card',
        'nusca-developer-project-card',
        'smart-focus-alert-developer-card',
        'leadsight-project-card',
        'openmusic-api-project-card',
        'bookshelf-api-project-card',
        'notes-application-project-card',
      ],
    };
    const heading = document.getElementById('about-project-heading');
    const description = document.getElementById('about-project-description');
    const emptyState = document.getElementById('about-project-empty');
    let activeCategory = 'uiux';

    function getVisibleProjects() {
      const visibleProjects = projectData.filter((project) => project.category === activeCategory);
      const projectOrder = categoryProjectOrder[activeCategory];
      if (!projectOrder) return visibleProjects;

      const orderIndex = new Map(projectOrder.map((id, index) => [id, index]));
      return visibleProjects.sort((a, b) =>
        (orderIndex.get(a.id) ?? Number.MAX_SAFE_INTEGER)
        - (orderIndex.get(b.id) ?? Number.MAX_SAFE_INTEGER)
      );
    }

    function findSelectedCard() {
      return detail.querySelector('.project-card-item');
    }

    function updateGlobalToggleState() {
      const wrappers = document.querySelectorAll('#about-project-detail .case-study-accordion-content');
      const label = document.getElementById('global-accordion-label');
      const icon = document.getElementById('global-accordion-icon');
      if (!wrappers.length || !label || !icon) return;
      const allOpen = Array.from(wrappers).every((wrapper) => wrapper.classList.contains('is-open'));
      label.textContent = allOpen ? 'Collapse All Details' : 'Expand All Details';
      icon.style.transform = allOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    }

    function toggleAccordion(id) {
      const wrapper = document.getElementById(`${id}-accordion`);
      const button = document.getElementById(`${id}-accordion-btn`);
      if (!wrapper || !button) return;
      const isOpen = wrapper.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      const action = button.lastElementChild?.firstElementChild;
      if (action) action.textContent = isOpen ? 'Hide Details' : 'Show Details';
      updateGlobalToggleState();
    }

  function organizeProjectOverviewDetails() {
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
  function prepareProjectCards() {
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
        const isFlowLink = (link.querySelector('span')?.textContent || '').toLowerCase().includes('flow');
        if (activeCategory === 'uiux' && !isFlowLink && /^https?:\/\//i.test(card.dataset.figmaUrl || '')) {
          link.href = card.dataset.figmaUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          const figmaLabel = link.querySelector('span');
          if (figmaLabel) figmaLabel.textContent = 'Figma Preview';
          return;
        }
        link.href = `#${details.id}`;
        link.setAttribute('aria-label', `View details for ${card.querySelector('h2')?.textContent.trim() || 'this project'}`);
        const label = link.querySelector('span');
        const originalLabel = label?.textContent.trim().toLowerCase() || '';
        if (label) {
          label.textContent = caseStudy
            ? originalLabel.includes('flow') ? 'View User Flow' : (activeCategory === 'uiux' ? 'Figma Preview' : 'View Case Study')
            : (activeCategory === 'uiux' && !originalLabel.includes('flow') ? 'Figma Preview' : 'View Project Details');
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
  function standardizeProjectContentRhythm() {
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
  function standardizeProjectDropdowns() {
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

    function updateCarouselView(carouselId, newIndex) {
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
          ? `Next · ${getProjectImageCaption(nextImage.alt)}`
          : '';
      }
      if (count) count.textContent = total > 1 ? `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}` : '';
    }

    function getProjectImageCaption(alt) {
      return alt
        .replace(/^.*?\s[—-]\s/, '')
        .replace(/\s+(?:showcase|mockup|overview|screen details)$/i, '')
        .trim() || 'Project Preview';
    }

    function initializeProjectAssetPreview(card) {
      const assets = getProjectAssets({ id: card.id });
      if (!assets.length) return;

      const imageAssets = assets.filter((item) => item?.type === 'image');
      let slidesContainer = card.querySelector('[id$="-slides"]');
      const previewColumn = card.querySelector('[class~="lg:col-span-5"]');
      if (!slidesContainer && previewColumn && imageAssets.length) {
        slidesContainer = document.createElement('div');
        slidesContainer.id = `${card.id.replace(/-card.*$/, '') || card.id}-slides`;
        previewColumn.replaceChildren(slidesContainer);
      }
      if (slidesContainer && imageAssets.length) {
        slidesContainer.replaceChildren(...imageAssets.map((item, index) => {
          const slide = document.createElement('div');
          slide.className = `carousel-slide transition-all duration-300${index > 0 ? ' hidden' : ''}`;
          const image = document.createElement('img');
          image.src = item.src;
          image.alt = `${card.querySelector('h2')?.textContent.trim() || card.id} — ${item.title}`;
          image.loading = index === 0 ? 'eager' : 'lazy';
          image.className = 'w-full h-auto object-contain drop-shadow-md rounded-xl';
          slide.appendChild(image);
          return slide;
        }));
      }

      card.querySelectorAll('[data-gallery] figure, [data-openmusic-gallery] [data-openmusic-slide]').forEach((figure, index) => {
        const item = imageAssets[index];
        if (!item) return;
        const image = figure.querySelector('img') || document.createElement('img');
        image.src = item.src;
        image.alt = `${card.querySelector('h2')?.textContent.trim() || card.id} — ${item.title}`;
        image.loading = index === 0 ? 'eager' : 'lazy';
        image.decoding = 'async';
        if (!image.parentElement) figure.querySelector('[class*="-ph"], [class*="placeholder"]')?.replaceWith(image);
      });

      const supportingImages = assets.filter((item) => item?.type === 'supporting-image');
      const documentAssets = assets.filter((item) => item?.type === 'pdf' || item?.type === 'file');
      const inlineDocumentAssets = new Set();
      card.querySelectorAll('[data-project-file-inline]').forEach((target) => {
        const item = documentAssets.find((asset) => asset.title === target.dataset.projectFileInline);
        if (!item) return;

        const link = document.createElement('a');
        link.href = item.src;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'shrink-0 rounded-full border border-rose-200 bg-rose-50 px-2 py-1 text-[9px] font-bold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100';
        link.textContent = 'PDF ↗';
        link.setAttribute('aria-label', `Open ${item.title} PDF`);
        target.replaceWith(link);
        inlineDocumentAssets.add(item);
      });
      const remainingDocumentAssets = documentAssets.filter((item) => !inlineDocumentAssets.has(item));
      const highlights = card.querySelector('[data-project-highlights]');
      if (highlights && supportingImages.length) {
        highlights.replaceChildren(...supportingImages.map((item) => {
          const itemCard = document.createElement('div');
          itemCard.className = 'bg-white rounded-xl p-2.5 border border-rose-100/70 shadow-xs space-y-1.5';
          const frame = document.createElement('div');
          frame.className = 'h-16 rounded-lg overflow-hidden bg-rose-50/50 border border-slate-100';
          const image = document.createElement('img');
          image.src = item.src;
          image.alt = item.title;
          image.loading = 'lazy';
          image.className = 'w-full h-full object-cover object-top';
          const title = document.createElement('h4');
          title.className = 'text-xs font-bold text-slate-900 leading-snug';
          title.textContent = item.title;
          frame.appendChild(image);
          itemCard.append(frame, title);
          return itemCard;
        }));
      }
      if (remainingDocumentAssets.length && !card.querySelector('.project-asset-files')) {
        const section = document.createElement('section');
        section.className = 'project-asset-files mt-4 rounded-2xl border border-slate-200 bg-white/80 p-4';
        const heading = document.createElement('h3');
        heading.className = 'text-xs font-bold uppercase tracking-wider text-slate-700';
        heading.textContent = 'Project files';
        const list = document.createElement('div');
        list.className = 'mt-2 flex flex-wrap gap-2';
        remainingDocumentAssets.forEach((item) => {
          const link = document.createElement('a');
          link.href = item.src;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.className = 'rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-700';
          link.textContent = `${item.type === 'pdf' ? 'PDF' : 'File'} · ${item.title}`;
          list.appendChild(link);
        });
        section.append(heading, list);
        card.appendChild(section);
      }
    }

    function initializeProjectCarousels() {
      document.querySelectorAll('.project-card-item [id$="-slides"]').forEach((slidesContainer) => {
        const card = slidesContainer.closest('.project-card-item');
        const carouselId = slidesContainer.id.replace(/-slides$/, '');
        const slides = Array.from(slidesContainer.querySelectorAll('.carousel-slide'));
        if (!card || !slides.length) return;

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
      });
    }

    function initializeProjectImageCards() {
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
        const total = slides.length;

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

        const swatches = document.createElement('span');
        swatches.className = 'project-image-badge';
        swatches.textContent = total > 1 ? `${total} visuals` : 'Preview';
        header.append(projectLabel, swatches);

        const stage = document.createElement('div');
        stage.className = 'project-image-stage';
        stage.style.touchAction = 'pan-y';
        let pointerStart = null;
        let lastWheelNavigation = 0;
        stage.addEventListener('pointerdown', (event) => {
          if (event.button !== 0 || event.target.closest('button')) return;
          pointerStart = { x: event.clientX, y: event.clientY };
        });
        stage.addEventListener('pointerup', (event) => {
          if (!pointerStart) return;
          const deltaX = event.clientX - pointerStart.x;
          const deltaY = event.clientY - pointerStart.y;
          pointerStart = null;
          if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
            (deltaX < 0 ? nextSlide : prevSlide)(carouselId);
          }
        });
        stage.addEventListener('pointercancel', () => {
          pointerStart = null;
        });
        stage.addEventListener('wheel', (event) => {
          if (total < 2 || Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 12) return;
          event.preventDefault();
          const now = performance.now();
          if (now - lastWheelNavigation < 400) return;
          lastWheelNavigation = now;
          (event.deltaX > 0 ? nextSlide : prevSlide)(carouselId);
        }, { passive: false });
        const expandButton = window.createImageExpandButton(title);
        expandButton.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          const activeImage = stage.querySelector('.carousel-slide:not(.hidden) img');
          if (!activeImage) return;
          window.openImageLightbox({
            src: activeImage.currentSrc || activeImage.src,
            alt: activeImage.alt || title,
            caption: activeImage.alt || title,
            trigger: expandButton
          });
        });
        stage.appendChild(expandButton);
        ['a', 'b', 'c'].forEach((name) => {
          const blob = document.createElement('span');
          blob.className = `project-image-blob blob-${name}`;
          blob.setAttribute('aria-hidden', 'true');
          stage.appendChild(blob);
        });
        stage.appendChild(slidesContainer);

        const dotsContainer = document.createElement('div');
        dotsContainer.id = `${carouselId}-dots`;
        dotsContainer.className = 'project-image-dots';
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

        if (total > 1) {
          [
            { direction: 'previous', symbol: '‹', action: () => prevSlide(carouselId) },
            { direction: 'next', symbol: '›', action: () => nextSlide(carouselId) }
          ].forEach(({ direction, symbol, action }) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `project-image-nav ${direction}`;
            button.setAttribute('aria-label', direction === 'previous' ? 'Previous slide' : 'Next slide');
            button.addEventListener('click', action);
            button.textContent = symbol;
            stage.appendChild(button);
          });
        } else {
          dotsContainer.hidden = true;
        }

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

    function compactAiMlProjectCards() {
      document.querySelectorAll('#about-project-detail .project-card-item').forEach((card) => {
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

    function getCurrentIndex(carouselId) {
      const slidesContainer = document.getElementById(`${carouselId}-slides`);
      if (!slidesContainer) return 0;
      const slides = Array.from(slidesContainer.querySelectorAll('.carousel-slide'));
      const activeIdx = slides.findIndex(slide => !slide.classList.contains('hidden'));
      return activeIdx >= 0 ? activeIdx : 0;
    }

    function nextSlide(carouselId) {
      const current = getCurrentIndex(carouselId);
      updateCarouselView(carouselId, current + 1);
    }

    function prevSlide(carouselId) {
      const current = getCurrentIndex(carouselId);
      updateCarouselView(carouselId, current - 1);
    }

    function goToSlide(carouselId, index) {
      updateCarouselView(carouselId, index);
    }
    function initializeBookshelfProjectExplorer(card) {
      const root = card?.querySelector('#bookshelf-api-project-card') || card;
      if (!root || !root.querySelector('[data-bookshelf-route]')) return;

      const examples = {
        post: { label: 'POST /books', info: 'Creates a book; validates name and page counts.', request: { name: 'Buku A', year: 2025, author: 'Penulis A', summary: 'Ringkasan buku', publisher: 'Penerbit A', pageCount: 100, readPage: 25, reading: true }, response: { status: 'success', message: 'Buku berhasil ditambahkan', data: { bookId: 'example-id' } }, error: { status: 'fail', message: 'Gagal menambahkan buku. Mohon isi nama buku' }, ok: '201 Created', bad: '400 Bad Request' },
        list: { label: 'GET /books?reading=1', info: 'Lists books. Optional filters: name, reading, finished.', request: 'GET /books?reading=1', response: { status: 'success', data: { books: [{ id: 'example-id', name: 'Buku A', publisher: 'Penerbit A' }] } }, error: { status: 'success', data: { books: [] } }, ok: '200 OK', bad: '200 OK' },
        detail: { label: 'GET /books/:bookId', info: 'Retrieves the complete book object for an existing ID.', request: 'GET /books/example-id', response: { status: 'success', data: { book: { id: 'example-id', name: 'Buku A', year: 2025, author: 'Penulis A', publisher: 'Penerbit A', pageCount: 100, readPage: 25, finished: false, reading: true } } }, error: { status: 'fail', message: 'Buku tidak ditemukan' }, ok: '200 OK', bad: '404 Not Found' },
        put: { label: 'PUT /books/:bookId', info: 'Updates book data and recalculates finished state.', request: { name: 'Buku A Revisi', year: 2025, author: 'Penulis A', publisher: 'Penerbit A', pageCount: 100, readPage: 100, reading: false }, response: { status: 'success', message: 'Buku berhasil diperbarui' }, error: { status: 'fail', message: 'Gagal memperbarui buku. Id tidak ditemukan' }, ok: '200 OK', bad: '404 Not Found' },
        delete: { label: 'DELETE /books/:bookId', info: 'Removes a book or returns 404 for an unknown ID.', request: 'DELETE /books/example-id', response: { status: 'success', message: 'Buku berhasil dihapus' }, error: { status: 'fail', message: 'Buku gagal dihapus. Id tidak ditemukan' }, ok: '200 OK', bad: '404 Not Found' }
      };
      let currentRoute = 'post';
      let currentTab = 'response';

      const update = () => {
        const item = examples[currentRoute];
        const status = root.querySelector('#bookshelf-status-badge');
        const isError = currentTab === 'error';
        const value = currentTab === 'request' ? 'Request' : isError ? item.bad : item.ok;
        root.querySelector('#bookshelf-selected-endpoint').textContent = item.label;
        root.querySelector('#bookshelf-endpoint-info').textContent = item.info;
        status.textContent = value;
        status.className = isError
          ? 'rounded-md bg-[#fff0e7] px-2 py-1 text-[11px] font-extrabold text-[#ac572a]'
          : 'rounded-md bg-[#e4f8ec] px-2 py-1 text-[11px] font-extrabold text-[#17765a]';
        const example = item[currentTab];
        root.querySelector('#bookshelf-code-example').textContent = typeof example === 'string' ? example : JSON.stringify(example, null, 2);
        root.querySelectorAll('[data-bookshelf-route]').forEach(button => {
          const active = button.dataset.bookshelfRoute === currentRoute;
          button.classList.toggle('border', active);
          button.classList.toggle('border-[#bfe6d7]', active);
          button.classList.toggle('bg-[#ebf9f2]', active);
          button.classList.toggle('bg-white', !active);
          button.classList.toggle('text-[#086c58]', active);
          button.classList.toggle('text-[#536378]', !active);
        });
        root.querySelectorAll('[data-bookshelf-tab]').forEach(button => {
          const active = button.dataset.bookshelfTab === currentTab;
          button.classList.toggle('bg-[#e0f6ea]', active);
          button.classList.toggle('text-[#0b785d]', active);
          button.classList.toggle('bg-[#f5f7fa]', !active);
          button.classList.toggle('text-[#718399]', !active);
        });
      };

      root.querySelectorAll('[data-bookshelf-route]').forEach(button => button.addEventListener('click', () => {
        currentRoute = button.dataset.bookshelfRoute;
        currentTab = 'response';
        update();
      }));
      root.querySelectorAll('[data-bookshelf-tab]').forEach(button => button.addEventListener('click', () => {
        currentTab = button.dataset.bookshelfTab;
        update();
      }));
      update();


    }

    function initializeOpenMusicProject(card) {
      const root = card?.matches('[data-openmusic-project]')
        ? card
        : card?.querySelector('[data-openmusic-project]');
      if (!root) return;

      const examples = {
        album: {
          method: 'GET',
          path: '/albums/{id}',
          request: 'GET /albums/album-id\nAuthorization: not required',
          response: '{\n  "status": "success",\n  "data": {\n    "album": {\n      "id": "album-id",\n      "name": "Example Album",\n      "year": 2025\n    }\n  }\n}',
        },
        songs: {
          method: 'GET',
          path: '/songs?title=example',
          request: 'GET /songs?title=example\nAuthorization: not required',
          response: '{\n  "status": "success",\n  "data": {\n    "songs": [\n      { "id": "song-id", "title": "Example" }\n    ]\n  }\n}',
        },
        auth: {
          method: 'POST',
          path: '/authentications',
          request: '{\n  "username": "sample_user",\n  "password": "********"\n}',
          response: '{\n  "status": "success",\n  "data": {\n    "accessToken": "...",\n    "refreshToken": "..."\n  }\n}',
        },
        playlist: {
          method: 'POST',
          path: '/playlists/{id}/songs',
          request: 'Authorization: Bearer <token>\n{\n  "songId": "song-id"\n}',
          response: '{\n  "status": "success",\n  "message": "Song added to playlist successfully"\n}',
        },
        export: {
          method: 'POST',
          path: '/export/playlists/{playlistId}',
          request: 'Authorization: Bearer <token>\n{\n  "targetEmail": "recipient@example.com"\n}',
          response: '{\n  "status": "success",\n  "message": "Your request is being processed"\n}',
        },
        likes: {
          method: 'GET',
          path: '/albums/{id}/likes',
          request: 'GET /albums/album-id/likes',
          response: '{\n  "status": "success",\n  "data": { "likes": 12 }\n}',
        },
      };
      let selectedExample = 'album';

      const updateExample = (key) => {
        const example = examples[key];
        if (!example) return;
        selectedExample = key;
        root.querySelectorAll('[data-openmusic-route]').forEach((button) => {
          const active = button.dataset.openmusicRoute === key;
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-pressed', String(active));
        });
        root.querySelector('[data-openmusic-method]').textContent = example.method;
        root.querySelector('[data-openmusic-path]').textContent = example.path;
        root.querySelector('[data-openmusic-request]').textContent = example.request;
        root.querySelector('[data-openmusic-response]').textContent = '// Select Send to show the sample response.';
        root.querySelector('[data-openmusic-status]').textContent = 'Local simulation — no request is sent to a server.';
      };

      root.querySelectorAll('[data-openmusic-route]').forEach((button) => {
        button.addEventListener('click', () => updateExample(button.dataset.openmusicRoute));
      });
      root.querySelector('[data-openmusic-send]').addEventListener('click', () => {
        root.querySelector('[data-openmusic-response]').textContent = examples[selectedExample].response;
        root.querySelector('[data-openmusic-status]').textContent = `Sample response for ${root.querySelector('[data-openmusic-route].is-active').textContent}. No HTTP request was sent.`;
      });

      const gallery = root.querySelector('[data-openmusic-gallery]');
      const track = gallery?.querySelector('[data-openmusic-track]');
      const slides = Array.from(track?.querySelectorAll('[data-openmusic-slide]') || []);
      const previous = gallery?.querySelector('[data-openmusic-prev]');
      const next = gallery?.querySelector('[data-openmusic-next]');
      const counter = gallery?.querySelector('[data-openmusic-counter]');
      if (track && slides.length && previous && next && counter) {
        const currentIndex = () => {
          let nearest = 0;
          let distance = Infinity;
          slides.forEach((slide, index) => {
            const delta = Math.abs(slide.offsetLeft - slides[0].offsetLeft - track.scrollLeft);
            if (delta < distance) {
              distance = delta;
              nearest = index;
            }
          });
          return nearest;
        };
        const updateGallery = () => {
          const index = currentIndex();
          counter.textContent = `${index + 1} / ${slides.length}`;
          previous.disabled = index === 0;
          next.disabled = index === slides.length - 1;
        };
        const moveGallery = (direction) => {
          const index = Math.max(0, Math.min(slides.length - 1, currentIndex() + direction));
          slides[index].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start' });
          updateGallery();
        };
        previous.addEventListener('click', () => moveGallery(-1));
        next.addEventListener('click', () => moveGallery(1));
        track.addEventListener('scroll', updateGallery, { passive: true });
        updateGallery();
      }

      const details = root.querySelector('[data-openmusic-details]');
      const detailsButton = root.querySelector('[data-openmusic-details-toggle]');
      detailsButton?.addEventListener('click', () => {
        const isOpen = detailsButton.getAttribute('aria-expanded') !== 'true';
        detailsButton.setAttribute('aria-expanded', String(isOpen));
        details.hidden = !isOpen;
        detailsButton.textContent = isOpen ? 'Hide Project Details ↑' : 'View Project Details ↗';
        if (isOpen) details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
      updateExample(selectedExample);
    }

    function initializeDevDropdowns(card) {
      const open = (dd, on) => {
        const button = dd.querySelector('.project-dropdown-toggle');
        const body = dd.querySelector('.dev-dd-body');
        if (!button || !body) return;
        const label = dd.querySelector('[data-dd-label]');
        button.setAttribute('aria-expanded', String(on));
        body.hidden = !on;
        if (label) label.textContent = on ? 'Hide Details' : 'Show Details';
        if (on) body.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      };
      card.querySelectorAll('[data-dev-dd]').forEach((dd) => {
        const button = dd.querySelector('.project-dropdown-toggle');
        const body = dd.querySelector('.dev-dd-body');
        if (!button || !body) return;

        button.onpointerdown = (event) => {
          event.stopPropagation();
        };
        button.onclick = (event) => {
          event.preventDefault();
          event.stopPropagation();
          open(dd, body.hidden);
        };
      });
      card.querySelectorAll('[data-dd-open]').forEach((button) => {
        button.addEventListener('click', (event) => {
          event.preventDefault(); event.stopPropagation();
          const dd = card.querySelector('[data-dev-dd]');
          if (dd) open(dd, true);
        });
      });
    }

    let devLiveStatusFile = null;
    function readLiveStatusFile() {
      if (!devLiveStatusFile) {
        devLiveStatusFile = fetch('live-status.json', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : {})).catch(() => ({}));
      }
      return devLiveStatusFile;
    }
    function analyseLivePage(res, html) {
      if (!res.ok) return 'HTTP ' + res.status;
      const title = ((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html) || [])[1] || '').trim();
      const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|\x3c!--[\s\S]*?-->/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
      const hasApp = /id=["'](root|__next|app)["']|<app-root|data-reactroot|<script[^>]+src=/i.test(html);
      const errorWords = /(\b404\b|\b50[0-4]\b|not[_ -]?found|could not be found|doesn'?t exist|does not exist|application (error|failed|not found)|\berrors?\b|\bfailed\b|bad gateway|service unavailable|internal server error|something went wrong|has been (deleted|disabled|suspended)|deployment_)/i;
      if (errorWords.test(title)) return 'error page title: ' + title;
      if (errorWords.test(text)) return 'error text: ' + text.slice(0, 60);
      if (/^[-–—_.\s]*$/.test(text) && !hasApp) return 'empty page';
      return null;
    }
    // Confirmed deployments
    const TRUSTED_LIVE_URLS = [
      'https://jnotes-application.vercel.app/login',
      'https://jnotes-application.vercel.app/',
      'https://predictive-analytic-diabetes.streamlit.app/',
      'https://bike-rental-analysis-dashboard.streamlit.app/'
    ];
    function isTrustedLiveUrl(url) {
      const clean = (value) => String(value).trim().replace(/\/+$/, '').toLowerCase();
      if (TRUSTED_LIVE_URLS.some((item) => clean(item) === clean(url))) return true;
      try { return /(^|\.)streamlit\.app$/i.test(new URL(url).hostname); } catch (invalidUrl) { return false; }
    }
    async function checkLiveUrl(url, health) {
      if (isTrustedLiveUrl(url)) return { ok: true, why: 'Confirmed live link' };
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 12000);
      try {
        if (health) {
          const response = await fetch(health, { cache: 'no-store', signal: ctl.signal });
          return { ok: response.ok, why: 'health endpoint HTTP ' + response.status };
        }
        const file = await readLiveStatusFile();
        const entry = file && file[url];
        if (entry && Date.now() - new Date(entry.checked).getTime() < 12 * 3600 * 1000) {
          return { ok: !!entry.active, why: 'live-status.json (' + entry.checked + ')' };
        }
        try {
          const res = await fetch(url, { cache: 'no-store', credentials: 'omit', signal: ctl.signal });
          const problem = analyseLivePage(res, await res.text());
          return { ok: !problem, why: problem ? 'content check failed: ' + problem : 'content check passed' };
        } catch (corsError) {
          if (ctl.signal.aborted) return { ok: false, why: 'timeout after 12 s' };
          return { ok: false, why: 'page content could not be verified (CORS or network restriction)' };
        }
      } catch (error) {
        return { ok: false, why: String(error && error.message || error) };
      } finally {
        clearTimeout(timer);
      }
    }
    function initializeLiveStatus(card) {
      let url = (card.dataset.liveUrl || '').trim();
      const health = (card.dataset.liveHealth || '').trim();
      const badge = card.querySelector('[data-live-badge]');
      const links = card.querySelectorAll('[data-live-link]');
      let frame = card.querySelector('[data-live-frame]');
      if (!badge && !links.length && !frame) return;
      if (card.id === 'notes-application-project-card') {
        url = 'https://jnotes-application.vercel.app/';
        card.dataset.liveUrl = url;
        links.forEach((link) => { link.href = url; });
        const iframe = frame?.querySelector('iframe');
        if (iframe) iframe.src = url;
      }
      if (card.id === 'movie-review-project-card') {
        url = 'https://movi-ews.vercel.app/';
        card.dataset.liveUrl = url;
        links.forEach((link) => { link.href = url; });
        if (card.id === 'movie-review-project-card' && !frame) {
          frame = card.querySelector('[data-ls-video]');
          if (frame) {
            frame.dataset.liveFrame = '';
            frame.classList.remove('mv-video');
            frame.innerHTML = '<div class="mv-bar"><i></i><i></i><i></i><span>Movie Review · Live web</span></div><div class="mv-stage" style="height:520px"><iframe title="Movie Review Application live preview" src="' + url + '" style="display:block;width:100%;height:100%;border:0;background:#fff" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>';
          }
        }
        if (!frame) {
          frame = document.createElement('section');
          frame.dataset.liveFrame = '';
          frame.style.cssText = 'margin-top:1rem;border:1px solid #c7d2fe;border-radius:1rem;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.05)';
          frame.innerHTML = '<div style="display:flex;align-items:center;gap:6px;height:34px;padding:0 12px;background:#eef2ff;border-bottom:1px solid #c7d2fe;font:700 9px ui-monospace,Menlo,monospace;letter-spacing:.05em;color:#94a3b8;text-transform:uppercase"><i style="width:8px;height:8px;border-radius:50%;background:#fd7e7e"></i><i style="width:8px;height:8px;border-radius:50%;background:#ffc75b"></i><i style="width:8px;height:8px;border-radius:50%;background:#4cc99b"></i><span style="margin-left:auto">Live deployment · Vercel</span></div><div style="height:520px;background:#f8fafc"><iframe title="Movie Review Application live preview" src="' + url + '" style="display:block;width:100%;height:100%;border:0;background:#fff" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>';
          card.appendChild(frame);
        }
      }
      const apply = (state) => {
        if (badge) {
          badge.dataset.state = state;
          badge.setAttribute('aria-checked', String(state === 'live'));
          const text = badge.querySelector('[data-live-text]');
          if (text) text.textContent = state === 'live' ? 'Active' : state === 'checking' ? 'Checking…' : 'Inactive';
        }
        links.forEach((link) => { link.hidden = state === 'offline' || state === 'none'; });
        if (frame && (state === 'offline' || state === 'none') && !frame.querySelector('.nt-live-off')) {
          frame.querySelector('iframe')?.remove();
          const note = document.createElement('div');
          note.className = 'nt-live-off';
          note.innerHTML = '<b>Live preview unavailable</b><span>The deployment is not responding right now.</span>';
          frame.appendChild(note);
        }
      };
      if (!/^https?:\/\//i.test(url)) { if (badge) badge.title = 'No live link configured'; apply('none'); return; }
      apply('checking');
      checkLiveUrl(url, health).then((result) => { if (badge) badge.title = result.why; console.info('[live-status]', url, result.ok ? 'active' : 'inactive', '-', result.why); apply(result.ok ? 'live' : 'offline'); });
    }

    function initializeLeadSightLab(card) {
      const box = card.querySelector('[data-ls-video]');
      if (!box) return;
      const video = box.querySelector('video');
      const off = box.querySelector('[class$="-novideo"]');
      if (!video || !off) return;
      const fail = () => { video.hidden = true; off.hidden = false; };
      const src = video.querySelector('source');
      if (src) src.addEventListener('error', fail);
      video.addEventListener('error', fail);
    }

    function initializeProjectImageZoom(card) {
      card.querySelectorAll('img').forEach((img) => {
        if (img.dataset.zoomReady || img.closest('a, button, [data-gal-open], .pm-card')) return;
        img.dataset.zoomReady = '1';
        const arm = () => {
          if (img.naturalWidth < 120) return;
          img.classList.add('zoomable-img');
          img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-label', img.alt || 'Project image');
            overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(10,10,20,.88);padding:24px;cursor:zoom-out';
            const big = document.createElement('img');
            big.src = img.currentSrc || img.src;
            big.alt = img.alt;
            big.style.cssText = 'max-width:94vw;max-height:88vh;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.5);background:#fff';
            const close = document.createElement('button');
            close.type = 'button';
            close.textContent = '×';
            close.setAttribute('aria-label', 'Close photo');
            close.style.cssText = 'position:absolute;top:14px;right:18px;width:38px;height:38px;border-radius:9999px;border:0;background:#fff;color:#111;font-size:24px;line-height:1;cursor:pointer';
            const onKey = (event) => { if (event.key === 'Escape') dismiss(); };
            const dismiss = () => { document.removeEventListener('keydown', onKey); overlay.remove(); };
            overlay.addEventListener('click', dismiss);
            scope.on(document, 'keydown', onKey);
            overlay.append(big, close);
            scope.append(document.body, overlay);
            close.focus();
          });
        };
        if (img.complete) arm(); else img.addEventListener('load', arm, { once: true });
      });
    }

    function initializeSmartFocusLinks(card) {
      card.querySelectorAll('[data-sf-goto]').forEach((button) => {
        button.addEventListener('click', (event) => {
          event.stopPropagation();
          const category = button.dataset.sfGoto;
          const targetId = button.dataset.sfTarget;
          renderCategory(category);
          const targetIndex = getVisibleProjects().findIndex((project) => project.id === targetId);
          if (targetIndex > -1) {
            pinnedProjectIndex = targetIndex;
            selectProject(targetIndex, true);
          }
          document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    function initializeSmartFocusLab(card) {
      const root = card.querySelector('[data-sf-lab]');
      if (!root) return;
      const q = (name) => root.querySelector(`[data-sf="${name}"]`);
      const ear = q('ear'), mar = q('mar'), iris = q('iris'), time = q('time'), faceOn = q('face-on');
      const earV = q('ear-v'), marV = q('mar-v'), irisV = q('iris-v'), timeV = q('time-v');
      const pill = q('pill'), why = q('why'), prog = q('prog'), progWrap = q('prog-wrap'), alertBox = q('alert');
      const mouth = q('mouth'), head = q('head'), brackets = q('brackets'), replay = q('replay');
      const eyes = root.querySelectorAll('[data-sf-eye]');
      const irises = root.querySelectorAll('[data-sf-iris]');
      const chips = root.querySelectorAll('[data-sf-preset]');
      const RULES = {
        'FOCUSED': { hold: 0, tone: 0, chip: 'focused' },
        'SLEEPING': { hold: 8, tone: 800, chip: 'drowsy' },
        'YAWNING': { hold: 3.5, tone: 600, chip: 'yawning' },
        'NOT FOCUSED': { hold: 8, tone: 400, chip: 'away' },
        'NO PERSON': { hold: 10, tone: 500, chip: 'nobody' }
      };
      const PRESETS = {
        focused: { ear: 0.30, mar: 0.12, iris: 0.8, face: true },
        drowsy: { ear: 0.09, mar: 0.12, iris: 0.8, face: true },
        yawning: { ear: 0.28, mar: 0.62, iris: 0.8, face: true },
        away: { ear: 0.30, mar: 0.12, iris: 4.5, face: true },
        nobody: { ear: 0.30, mar: 0.12, iris: 0.8, face: false }
      };
      const COOLDOWN = 5;
      let frame = 0;
      const fmt = (n) => String(Number(n.toFixed(1)));
      const fill = (input) => {
        const min = Number(input.min), max = Number(input.max);
        input.style.setProperty('--p', `${((Number(input.value) - min) / (max - min)) * 100}%`);
      };
      function classify(e, m, i, visible) {
        if (!visible) return 'NO PERSON';
        if (e < 0.15) return 'SLEEPING';
        if (m > 0.5) return 'YAWNING';
        if (i > 2.5) return 'NOT FOCUSED';
        return 'FOCUSED';
      }
      function render() {
        const e = Number(ear.value), m = Number(mar.value), i = Number(iris.value), t = Number(time.value);
        const visible = faceOn.checked;
        const state = classify(e, m, i, visible);
        const rule = RULES[state];
        [ear, mar, iris, time].forEach(fill);
        earV.textContent = e.toFixed(2);
        marV.textContent = m.toFixed(2);
        irisV.textContent = `${fmt(i)} px`;
        timeV.textContent = `${fmt(t)} s`;
        eyes.forEach((eye) => eye.setAttribute('ry', String(Math.max(0.7, e * 17))));
        irises.forEach((dot) => dot.setAttribute('cx', String(Number(dot.dataset.base) + i * 1.3)));
        mouth.setAttribute('ry', String(1.2 + m * 18));
        head.setAttribute('opacity', visible ? '1' : '0.12');
        brackets.setAttribute('stroke', visible ? '#34d399' : '#f87171');
        pill.textContent = state;
        chips.forEach((chip) => chip.setAttribute('aria-pressed', String(chip.dataset.sfPreset === rule.chip)));

        let reason;
        if (state === 'NO PERSON') reason = 'No face is found in the frame.';
        else if (state === 'SLEEPING') reason = `The eyes are closed: EAR ${e.toFixed(2)} is below the 0.15 limit.`;
        else if (state === 'YAWNING') reason = `The mouth is wide open: MAR ${m.toFixed(2)} is above the 0.50 limit.`;
        else if (state === 'NOT FOCUSED') reason = `The iris is ${fmt(i)} px off centre, past the 2.5 px limit.`;
        else reason = 'All three signals are inside their limits.';
        why.textContent = reason;

        const share = rule.hold ? Math.min(t / rule.hold, 1) : 0;
        prog.style.width = `${share * 100}%`;
        progWrap.setAttribute('aria-valuenow', String(Math.round(share * 100)));

        let note;
        let fired = false;
        if (!rule.hold) note = 'No alert: nothing fires while every signal stays inside its limit.';
        else if (t < rule.hold) note = `Waiting: this state must last ${fmt(rule.hold)} s before an alert fires (${fmt(rule.hold - t)} s to go).`;
        else {
          fired = true;
          const reminders = Math.floor((t - rule.hold) / COOLDOWN);
          const reminderText = reminders === 0 ? 'No reminder yet' : `${reminders} reminder${reminders === 1 ? '' : 's'} so far`;
          note = `Alert fired at ${fmt(rule.hold)} s: ${rule.tone} Hz beep and a spoken message. ${reminderText}, one every ${COOLDOWN} s.`;
        }
        alertBox.textContent = note;
        alertBox.classList.toggle('is-fired', fired);
      }
      function stop() {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
      }
      function play() {
        stop();
        const max = Number(time.max);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          time.value = String(max);
          render();
          return;
        }
        const start = performance.now();
        time.value = '0';
        const step = (now) => {
          const next = Math.min(max, ((now - start) / 1000) * 3);
          time.value = String(Math.round(next * 10) / 10);
          render();
          frame = next < max ? requestAnimationFrame(step) : 0;
        };
        frame = requestAnimationFrame(step);
      }
      [ear, mar, iris].forEach((input) => input.addEventListener('input', render));
      faceOn.addEventListener('change', render);
      time.addEventListener('input', () => { stop(); render(); });
      replay.addEventListener('click', play);
      chips.forEach((chip) => {
        chip.addEventListener('click', () => {
          const preset = PRESETS[chip.dataset.sfPreset];
          ear.value = String(preset.ear);
          mar.value = String(preset.mar);
          iris.value = String(preset.iris);
          faceOn.checked = preset.face;
          play();
        });
      });
      render();
    }

    function initializeNuscaLab(card) {
      const root = card.querySelector('[data-nu-lab]');
      if (!root) return;
      const q = (name) => root.querySelector(`[data-nu="${name}"]`);
      const inputs = { gula: q('gula'), garam: q('garam'), lj: q('lj') };
      const outs = { gula: q('gula-v'), garam: q('garam-v'), lj: q('lj-v') };
      const cards = { gula: q('lv-gula'), garam: q('lv-garam'), lj: q('lv-lj') };
      const finalBadge = q('final'), finalText = q('final-t'), json = q('json');
      const chips = root.querySelectorAll('[data-nu-preset]');
      const BANDS = { gula: [1.0, 5.0, 10.0], garam: [5.0, 120.0, 500.0], lj: [0.7, 1.2, 2.8] };
      const NAMES = { gula: 'Sugar', garam: 'Sodium', lj: 'Saturated fat' };
      const KEYS = { gula: 'gula', garam: 'garam', lj: 'lemak_jenuh' };
      const COLORS = { A: ['#16a34a', '#fff'], B: ['#84cc16', '#1a2e05'], C: ['#f59e0b', '#422006'], D: ['#ef4444', '#fff'] };
      const ORDER = { A: 0, B: 1, C: 2, D: 3 };
      const PRESETS = {
        water: { gula: 0, garam: 0, lj: 0 },
        tea: { gula: 8, garam: 20, lj: 0 },
        cola: { gula: 10.6, garam: 5, lj: 0 },
        milk: { gula: 7, garam: 60, lj: 1.5 }
      };
      const level = (zat, value) => {
        const x = Math.round((value + 1e-9) * 10) / 10;
        const [a, b, c] = BANDS[zat];
        return x <= a ? 'A' : x <= b ? 'B' : x <= c ? 'C' : 'D';
      };
      const paint = (el, lv) => {
        el.style.background = COLORS[lv][0];
        el.style.color = COLORS[lv][1];
        el.textContent = lv;
      };
      function render() {
        const vals = {}, levels = {};
        Object.keys(inputs).forEach((k) => {
          const input = inputs[k];
          const v = Number(input.value);
          vals[k] = v;
          levels[k] = level(k, v);
          const min = Number(input.min), max = Number(input.max);
          input.style.setProperty('--p', `${((v - min) / (max - min)) * 100}%`);
          outs[k].textContent = k === 'garam' ? String(v) : v.toFixed(1);
          paint(cards[k].querySelector('b'), levels[k]);
        });
        const worst = Object.keys(levels).reduce((w, k) => (ORDER[levels[k]] > ORDER[w] ? levels[k] : w), 'A');
        const candidates = Object.keys(levels).filter((k) => levels[k] === worst);
        const driver = candidates.reduce((best, k) => (vals[k] / BANDS[k][2] > vals[best] / BANDS[best][2] ? k : best), candidates[0]);
        Object.keys(cards).forEach((k) => cards[k].classList.toggle('is-driver', k === driver));
        paint(finalBadge, worst);
        finalText.textContent = worst === 'A'
          ? 'Level A: every component is in the best band.'
          : `${NAMES[driver]} sets the grade: the worst component wins.`;
        const f = (k) => (k === 'garam' ? String(vals[k]) : vals[k].toFixed(1));
        json.textContent = [
          '"calc": {',
          `  "per100": { "gula": ${f('gula')}, "garam": ${f('garam')}, "lemak_jenuh": ${f('lj')} },`,
          `  "level": { "gula": "${levels.gula}", "garam": "${levels.garam}", "lemak_jenuh": "${levels.lj}" },`,
          `  "level_akhir": "${worst}",`,
          `  "penentu": "${KEYS[driver]}"`,
          '}'
        ].join('\n');
        chips.forEach((chip) => {
          const p = PRESETS[chip.dataset.nuPreset];
          chip.setAttribute('aria-pressed', String(p.gula === vals.gula && p.garam === vals.garam && p.lj === vals.lj));
        });
      }
      Object.values(inputs).forEach((input) => input.addEventListener('input', render));
      chips.forEach((chip) => {
        chip.addEventListener('click', () => {
          const p = PRESETS[chip.dataset.nuPreset];
          inputs.gula.value = String(p.gula);
          inputs.garam.value = String(p.garam);
          inputs.lj.value = String(p.lj);
          render();
        });
      });
      render();
      const detail = card.querySelector('details.nu-detail');
      card.querySelector('a.nu-action')?.addEventListener('click', () => { if (detail) detail.open = true; });
    }

    function initializeBookshelfLab(card) {
      const root = card.querySelector('[data-bk-lab]');
      if (!root) return;
      const q = (k) => root.querySelector('[data-bk="' + k + '"]');
      let selected = 'create', books = [], lastId = 'example-book-id', seq = 0;
      const sample = { name: 'Clean Code', year: 2008, author: 'Robert C. Martin', summary: 'Software craftsmanship', publisher: 'Prentice Hall', pageCount: 464, readPage: 120, reading: true };
      const actions = {
        create: { m: 'POST', p: '/books', q: sample },
        list: { m: 'GET', p: '/books?reading=1', q: 'Query: reading=1' },
        detail: { m: 'GET', p: '/books/:id', q: 'bookId: latest created book' },
        update: { m: 'PUT', p: '/books/:id', q: { ...sample, readPage: 464, reading: false } },
        delete: { m: 'DELETE', p: '/books/:id', q: 'bookId: latest created book' }
      };
      const select = (a) => {
        selected = a; const v = actions[a];
        root.querySelectorAll('[data-bk-route]').forEach((b) => { const on = b.dataset.bkRoute === a; b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on)); });
        q('verb').textContent = v.m; q('verb').className = 'bk-verb ' + v.m.toLowerCase();
        q('path').textContent = v.p;
        q('request').textContent = typeof v.q === 'string' ? v.q : JSON.stringify(v.q, null, 2);
        q('response').textContent = '// Click Run example to inspect this endpoint.';
        q('status').textContent = 'Not executed';
      };
      const run = () => {
        let code = 200, result; const id = lastId; const stamp = new Date().toISOString();
        if (selected === 'create') {
          lastId = 'demo-' + String(++seq).padStart(3, '0');
          books.push({ id: lastId, ...sample, finished: false, insertedAt: stamp, updatedAt: stamp });
          code = 201; result = { status: 'success', message: 'Buku berhasil ditambahkan', data: { bookId: lastId } };
        } else if (selected === 'list') {
          result = { status: 'success', data: { books: books.filter((b) => b.reading).map((b) => ({ id: b.id, name: b.name, publisher: b.publisher })) } };
        } else if (selected === 'detail') {
          const book = books.find((b) => b.id === id);
          if (book) result = { status: 'success', data: { book } }; else { code = 404; result = { status: 'fail', message: 'Buku tidak ditemukan' }; }
        } else if (selected === 'update') {
          const b = books.find((x) => x.id === id);
          if (b) { Object.assign(b, { readPage: b.pageCount, reading: false, finished: true, updatedAt: stamp }); result = { status: 'success', message: 'Buku berhasil diperbarui' }; }
          else { code = 404; result = { status: 'fail', message: 'Gagal memperbarui buku. Id tidak ditemukan' }; }
        } else {
          const before = books.length; books = books.filter((b) => b.id !== id);
          if (books.length !== before) result = { status: 'success', message: 'Buku berhasil dihapus' };
          else { code = 404; result = { status: 'fail', message: 'Buku gagal dihapus. Id tidak ditemukan' }; }
        }
        q('response').textContent = JSON.stringify(result, null, 2);
        q('status').textContent = code + ' ' + ({ 200: 'OK', 201: 'Created', 404: 'Not Found' }[code] || '');
      };
      root.querySelectorAll('[data-bk-route]').forEach((b) => b.addEventListener('click', () => select(b.dataset.bkRoute)));
      q('run').addEventListener('click', run);
      select('create');

    }

    function initializeNotesLab(card) {
      const root = card.querySelector('[data-nt-lab]');
      if (!root) return;
      const q = (k) => root.querySelector('[data-nt="' + k + '"]');
      const st = { view: 'active', language: 'en', editing: null, next: 5, notes: [
        { id: 1, title: 'Sprint planning', body: 'Review interface components and split work into manageable tasks.', archived: false },
        { id: 2, title: 'React Router', body: 'Protected routes should redirect unauthenticated visitors to login.', archived: false },
        { id: 3, title: 'API integration', body: 'Handle loading states, tokens, and failed requests clearly.', archived: false },
        { id: 4, title: 'Study checklist', body: 'Revisit context providers and state management.', archived: true }] };
      const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
      const tr = (en, id) => (st.language === 'en' ? en : id);
      const tabs = root.querySelectorAll('[data-nt-view]');
      const render = () => {
        const f = q('search').value.trim().toLowerCase();
        const list = st.notes.filter((n) => n.archived === (st.view === 'archived') && n.title.toLowerCase().includes(f));
        q('activeCount').textContent = '(' + st.notes.filter((n) => !n.archived).length + ')';
        q('archiveCount').textContent = '(' + st.notes.filter((n) => n.archived).length + ')';
        q('grid').innerHTML = list.length ? list.map((n) => '<article class="nt-note"><h3>' + esc(n.title) + '</h3><p>' + esc(n.body) + '</p><footer><small>' + (n.archived ? 'Archived' : 'Active') + '</small><div class="nt-note-actions"><button type="button" class="nt-iconbtn" data-action="archive" data-id="' + n.id + '" title="' + (n.archived ? 'Restore' : 'Archive') + '">' + (n.archived ? '↶' : '▤') + '</button><button type="button" class="nt-iconbtn" data-action="edit" data-id="' + n.id + '" title="Edit">✎</button><button type="button" class="nt-iconbtn" data-action="delete" data-id="' + n.id + '" title="Delete">×</button></div></footer></article>').join('')
          : '<div class="nt-empty">' + tr('No notes found. Try another search or create one.', 'Tidak ada catatan. Coba pencarian lain atau buat catatan.') + '</div>';
        q('new').textContent = tr('+ New Note', '+ Catatan Baru');
        q('search').placeholder = tr('Search notes by title...', 'Cari judul catatan...');
        q('save').textContent = tr('Save Note', 'Simpan');
        q('cancel').textContent = tr('Cancel', 'Batal');
      };
      const form = (open, n) => {
        q('form').classList.toggle('open', open);
        st.editing = n ? n.id : null;
        q('title').value = n ? n.title : ''; q('body').value = n ? n.body : '';
        if (open) q('title').focus();
      };
      q('new').addEventListener('click', () => form(!q('form').classList.contains('open')));
      q('cancel').addEventListener('click', () => form(false));
      q('save').addEventListener('click', () => {
        const title = q('title').value.trim(), body = q('body').value.trim();
        if (!title || !body) { q('status').textContent = tr('Please provide a title and note body.', 'Isi judul dan catatan.'); return; }
        if (st.editing !== null) { const n = st.notes.find((x) => x.id === st.editing); if (n) { n.title = title; n.body = body; } }
        else { st.notes.unshift({ id: st.next++, title, body, archived: false }); st.view = 'active'; tabs.forEach((b) => b.classList.toggle('active', b.dataset.ntView === 'active')); }
        form(false); q('status').textContent = tr('Note saved in the local demo.', 'Catatan disimpan pada demo lokal.'); render();
      });
      q('grid').addEventListener('click', (e) => {
        const b = e.target.closest('[data-action]'); if (!b) return;
        const id = Number(b.dataset.id), n = st.notes.find((x) => x.id === id); if (!n) return;
        if (b.dataset.action === 'archive') { n.archived = !n.archived; q('status').textContent = tr('Note moved successfully.', 'Catatan berhasil dipindahkan.'); }
        if (b.dataset.action === 'edit') form(true, n);
        if (b.dataset.action === 'delete') { st.notes = st.notes.filter((x) => x.id !== id); q('status').textContent = tr('Note deleted from local demo.', 'Catatan dihapus dari demo lokal.'); }
        render();
      });
      tabs.forEach((b) => b.addEventListener('click', () => { st.view = b.dataset.ntView; tabs.forEach((x) => x.classList.toggle('active', x === b)); render(); }));
      q('search').addEventListener('input', render);
      q('theme').addEventListener('click', () => root.classList.toggle('dark'));
      q('lang').addEventListener('click', () => { st.language = st.language === 'en' ? 'id' : 'en'; render(); });
      render();
    }

    function initializeProjectGallery(card) {
      card.querySelectorAll('[data-gallery]').forEach((gallery) => {
        const track = gallery.querySelector('[data-gal-track]');
        const step = (dir) => track.scrollBy({ left: dir * Math.max(track.clientWidth * 0.8, 200), behavior: 'smooth' });
        gallery.querySelector('[data-gal-prev]')?.addEventListener('click', () => step(-1));
        gallery.querySelector('[data-gal-next]')?.addEventListener('click', () => step(1));
        const counter = gallery.querySelector('[data-gal-counter]');
        if (counter) {
          const slides = [...track.children];
          const prevBtn = gallery.querySelector('[data-gal-prev]');
          const nextBtn = gallery.querySelector('[data-gal-next]');
          const refresh = () => {
            let idx = 0, best = Infinity;
            slides.forEach((slide, i) => {
              const d = Math.abs(slide.offsetLeft - slides[0].offsetLeft - track.scrollLeft);
              if (d < best) { best = d; idx = i; }
            });
            counter.textContent = (idx + 1) + ' / ' + slides.length;
            if (prevBtn) prevBtn.disabled = idx === 0;
            if (nextBtn) nextBtn.disabled = idx === slides.length - 1;
          };
          track.addEventListener('scroll', refresh, { passive: true });
          scope.on(window, 'resize', refresh);
          refresh();
        }
        gallery.querySelectorAll('[data-gal-open]').forEach((item) => {
          item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (!img) return;
            const overlay = document.createElement('div');
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-label', img.alt);
            overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(10,10,20,.88);padding:24px;cursor:zoom-out';
            const big = document.createElement('img');
            big.src = img.currentSrc || img.src;
            big.alt = img.alt;
            big.style.cssText = 'max-width:94vw;max-height:88vh;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.5);background:#fff';
            const close = document.createElement('button');
            close.type = 'button';
            close.textContent = '×';
            close.setAttribute('aria-label', 'Close photo');
            close.style.cssText = 'position:absolute;top:14px;right:18px;width:38px;height:38px;border-radius:9999px;border:0;background:#fff;color:#111;font-size:24px;line-height:1;cursor:pointer';
            const dismiss = () => {
              document.removeEventListener('keydown', onKey);
              overlay.remove();
              item.focus();
            };
            const onKey = (event) => { if (event.key === 'Escape') dismiss(); };
            overlay.addEventListener('click', dismiss);
            scope.on(document, 'keydown', onKey);
            overlay.append(big, close);
            scope.append(document.body, overlay);
            close.focus();
          });
        });
      });
    }


    function initializeTrusteeBusinessCard(card) {
      if (card.id !== 'trustee-business-card') return;
      const docs = trusteeDocuments;
      let current = 'account', page = 0, previousFocus = null;
      const pdfThumbs = [];
      const q = (s) => card.querySelector(s);
      const docBtns = Array.from(card.querySelectorAll('[data-tr-doc]'));
      const dialog = q('[data-tr-dialog]');
      const imgFull = q('[data-tr-zoom-image]');
      const pdfFull = document.createElement('div');
      let pdfFullRender = null;
      pdfFull.className = 'tr-zoom-pdf';
      pdfFull.title = 'Enlarged Trustee document page';
      pdfFull.hidden = true;
      q('[data-tr-dialog] .tr-zoom-inner').append(pdfFull);
      function pageLabel() {
        return current === 'deck' ? 'Pitch slide' : current === 'canvas' ? 'Canvas' : 'Research page';
      }
      function visiblePages() {
        return current === 'deck' ? docs[current].pages.slice(0, 1) : docs[current].pages;
      }
      function updateFull() {
        const slides = visiblePages();
        const slide = slides[page];
        const isPdf = slide.type === 'pdf';
        imgFull.hidden = isPdf;
        pdfFull.hidden = !isPdf;
        pdfFullRender?.destroy();
        pdfFullRender = null;
        if (isPdf) {
          imgFull.removeAttribute('src');
        } else {
          imgFull.src = slide.src;
          imgFull.alt = `${docs[current].name}, ${pageLabel()} ${page+1} of ${slides.length}`;
        }
      }
      function openFull(i) {
        previousFocus = document.activeElement;
        page = i;
        updateFull();
        if (dialog.showModal) dialog.showModal();
        renderFullPdf();
      }
      function renderFullPdf() {
        const slide = visiblePages()[page];
        if (slide.type !== 'pdf') return;
        pdfFullRender?.destroy();
        pdfFullRender = renderPdf(pdfFull, slide.src);
      }
      function closeFull() { dialog.close(); }
      function showDoc(key) {
        if (!docs[key]) return;
        current = key;
        const d = docs[key];
        docBtns.forEach(b => {
          const active = b.dataset.trDoc === key;
          b.dataset.selected = String(active);
          b.setAttribute('aria-pressed',String(active));
        });
        const pages = q('[data-tr-pages]');
        pdfThumbs.splice(0).forEach((thumb) => thumb.destroy());
        pages.replaceChildren();
        pages.dataset.layout = key;
        const pagesToShow = key === 'deck' ? d.pages.slice(0, 1) : d.pages;
        pagesToShow.forEach((p,i) => {
          const figure = document.createElement('figure'); figure.className = 'tr-doc-page';
          const im = p.type === 'pdf' ? document.createElement('div') : document.createElement('img');
          im.className = p.type === 'pdf' ? 'tr-doc-pdf' : '';
          im.loading = i < 6 ? 'eager':'lazy'; im.decoding='async';
          if (p.type === 'pdf') {
            im.setAttribute('role', 'img');
            im.setAttribute('aria-label', `${d.name} — ${pageLabel()} ${p.page}`);
            pdfThumbs.push(renderPdf(im, p.src));
          } else {
            im.src = p.src;
            im.alt = `${d.name} — ${pageLabel()} ${p.page}`;
          }
          im.tabIndex = 0;
          im.addEventListener('click',()=>openFull(i));
          im.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openFull(i)}});
          if (p.type === 'pdf') {
            const expand = document.createElement('button');
            expand.type = 'button';
            expand.className = 'tr-doc-expand';
            expand.textContent = '⛶';
            expand.setAttribute('aria-label', `Open ${d.name} in popup`);
            expand.addEventListener('click', (event) => {
              event.stopPropagation();
              openFull(i);
            });
            figure.append(expand);
          }
          const cap = document.createElement('figcaption');
          const left = document.createElement('span'); left.textContent = pageLabel()+' '+p.page;
          const right = document.createElement('span'); right.textContent = `${i+1} / ${pagesToShow.length}`;
          cap.append(left,right);figure.append(im,cap);pages.append(figure);
        });
        pages.scrollTop = 0;
      }
      docBtns.forEach(b=>b.addEventListener('click',()=>showDoc(b.dataset.trDoc)));
      card.querySelectorAll('[data-tr-jump]').forEach(b=>b.addEventListener('click',()=>{
        showDoc(b.dataset.trJump);
        q('[data-tr-viewer]').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
      }));
      card.querySelectorAll('[data-tr-goto]').forEach(b=>b.addEventListener('click',()=>{
        q('[data-tr-viewer]').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
      }));
      q('[data-tr-close]').addEventListener('click',closeFull);
      dialog.addEventListener('close',()=>{imgFull.removeAttribute('src');pdfFullRender?.destroy();pdfFullRender=null;if(previousFocus&&previousFocus.isConnected)previousFocus.focus();});
      dialog.addEventListener('click',e=>{if(e.target===dialog)closeFull()});
      dialog.addEventListener('keydown',e=>{
        if(e.key==='ArrowLeft'&&page>0){e.preventDefault();page--;updateFull();renderFullPdf()}
        else if(e.key==='ArrowRight'&&page<docs[current].pages.length-1){e.preventDefault();page++;updateFull();renderFullPdf()}
      });
      showDoc('account');
    }

    function initializeSelectedProjectCard(card, projectIndex) {
      if (activeCategory === 'developer') {
        const projectNumber = card.querySelector('.sf-number')
          || card.querySelector('.project-card-header > div:first-child > span:first-child');
        if (projectNumber) {
          projectNumber.textContent = String(projectIndex + 1).padStart(2, '0');
          projectNumber.setAttribute('aria-label', `Project ${projectIndex + 1}`);
        }
      }
      organizeProjectOverviewDetails();
      prepareProjectCards();
      standardizeProjectContentRhythm();
      standardizeProjectDropdowns();
      initializeProjectAssetPreview(card);
      initializeProjectCarousels();
      initializeProjectImageCards();
      if (activeCategory === 'aiml') compactAiMlProjectCards();
      initializeBookshelfProjectExplorer(card);
      initializeOpenMusicProject(card);
      if (card.id === 'smart-focus-alert-developer-card' || card.id === 'nusca-developer-project-card') initializeSmartFocusLinks(card);
      if (card.id === 'smart-focus-alert-developer-card') initializeSmartFocusLab(card);
      if (card.id === 'nusca-developer-project-card') initializeNuscaLab(card);
      if (card.id === 'bookshelf-api-project-card') initializeBookshelfLab(card);

      initializeProjectGallery(card);
      initializeDevDropdowns(card);
      initializeLiveStatus(card);
      initializeLeadSightLab(card);
      initializeTrusteeBusinessCard(card);
      initializeProjectImageZoom(card);
    }

    function selectProject(index, shouldScroll = false) {
      const visibleProjects = getVisibleProjects();
      const selectedProject = visibleProjects[index];
      if (!selectedProject) return;

      Array.from(track.children).forEach((card, cardIndex) => {
        card.setAttribute('aria-pressed', String(cardIndex === index));
      });
      Array.from(dots.children).forEach((dot, dotIndex) => {
        dot.setAttribute('aria-current', String(dotIndex === index));
      });

      counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(visibleProjects.length).padStart(2, '0')} · ${selectedProject.title.toUpperCase()}`;
      renderDetail(selectedProject);
      const projectCard = findSelectedCard();
      if (!projectCard) {
        console.error(`Project card markup is missing for ${selectedProject.title}.`);
        return;
      }
      initializeSelectedProjectCard(projectCard, index);

      if (shouldScroll) {
        track.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    function renderCategory(category) {
      pinnedProjectIndex = -1;
      activeCategory = category;
      heading.textContent = categoryNames[category];
      description.textContent = categoryDescriptions[category];
      const visibleProjects = getVisibleProjects();
      track.replaceChildren();
      dots.replaceChildren();
      clearDetail();
      emptyState.classList.toggle('hidden', visibleProjects.length > 0);
      track.classList.toggle('hidden', visibleProjects.length === 0);
      counter.classList.toggle('hidden', visibleProjects.length === 0);
      categoryButtons.forEach((button) => {
        const active = button.dataset.projectCategory === category;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
        button.classList.toggle('bg-indigo-600', active);
        button.classList.toggle('text-white', active);
        button.classList.toggle('shadow-xs', active);
        button.classList.toggle('hover:bg-indigo-700', active);
        button.classList.toggle('bg-white', !active);
        button.classList.toggle('border', !active);
        button.classList.toggle('border-slate-200', !active);
        button.classList.toggle('text-slate-600', !active);
      });

      visibleProjects.forEach((project, index) => {
        const card = document.createElement('button');
        card.className = 'about-project-card';
        card.type = 'button';
        card.setAttribute('aria-label', `View ${project.title}`);
        card.setAttribute('aria-pressed', 'false');
        card.dataset.projectIndex = String(index);

        const image = document.createElement('img');
        if (project.profileImage) {
          image.src = project.profileImage;
          image.alt = `${project.title} project`;
          image.loading = 'lazy';
          card.appendChild(image);
        }

        const shade = document.createElement('span');
        shade.className = 'about-project-card-shade';
        card.appendChild(shade);

        const topBar = document.createElement('span');
        topBar.className = 'relative z-10 flex items-center justify-between';
        const number = document.createElement('span');
        number.className = 'rounded-full bg-orange-400 px-3 py-1 font-mono text-xs font-extrabold text-slate-950';
        number.textContent = String(index + 1).padStart(2, '0');
        topBar.append(number);
        card.appendChild(topBar);

        const compact = document.createElement('span');
        compact.className = 'about-project-card-compact';
        const compactTitle = document.createElement('span');
        compactTitle.className = 'about-project-card-title';
        const compactText = document.createElement('span');
        compactText.className = 'about-project-card-name';
        compactText.textContent = project.title;
        const compactIcon = document.createElement('span');
        compactIcon.className = 'about-project-card-title-icon';
        compactIcon.setAttribute('aria-hidden', 'true');
        compactIcon.innerHTML = '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 40 40 8M12 8h28v28"/></svg>';
        compactTitle.append(compactText, compactIcon);
        compact.appendChild(compactTitle);
        card.appendChild(compact);

        const expanded = document.createElement('span');
        expanded.className = 'about-project-card-expanded';
        const kicker = document.createElement('span');
        kicker.className = 'block font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300';
        kicker.textContent = categoryNames[category];
        const title = document.createElement('span');
        title.className = 'about-project-card-title-row mt-2 text-white';
        const titleText = document.createElement('span');
        titleText.className = 'about-project-card-name';
        titleText.textContent = project.title;
        const titleIcon = compactIcon.cloneNode(true);
        title.append(titleText, titleIcon);
        const description = document.createElement('span');
        description.className = 'about-project-card-expanded-description mt-2 text-xs leading-relaxed text-slate-200';
        description.textContent = project.description;
        expanded.append(title, kicker, description);
        card.appendChild(expanded);

        card.addEventListener('mouseenter', () => {
          if (pinnedProjectIndex === -1) selectProject(index);
        });
        card.addEventListener('focus', () => {
          if (pinnedProjectIndex === -1 || pinnedProjectIndex === index) selectProject(index);
        });
        card.addEventListener('click', (event) => {
          if (event.target.closest('button.project-dropdown-toggle')) return;
          if (projectTrackDragged) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (pinnedProjectIndex === index) {
            pinnedProjectIndex = -1;
            return;
          }
          pinnedProjectIndex = index;
          selectProject(index, true);
        });
        card.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowRight' && index < visibleProjects.length - 1) {
            event.preventDefault();
            track.children[index + 1].focus();
          } else if (event.key === 'ArrowLeft' && index > 0) {
            event.preventDefault();
            track.children[index - 1].focus();
          }
        });
        track.appendChild(card);

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show ${project.title}`);
        dot.setAttribute('aria-current', 'false');
        dot.addEventListener('click', () => {
          pinnedProjectIndex = index;
          selectProject(index, true);
        });
        dots.appendChild(dot);
      });

      track.scrollLeft = 0;
      selectProject(0);
    }

    categoryButtons.forEach((button) => {
      button.addEventListener('click', () => renderCategory(button.dataset.projectCategory));
    });
    scope.on(document, 'click', (event) => {
      if (pinnedProjectIndex === -1 || !(event.target instanceof Element)) return;
      if (event.target.closest('.about-project-card, #about-project-dots')) return;

      pinnedProjectIndex = -1;
    });
    renderCategory(activeCategory);
    Object.assign(handlers, { toggleAccordion, nextSlide, prevSlide, goToSlide });
    scope.add(() => Object.keys(handlers).forEach((key) => delete handlers[key]));
    const requestedProject = new URLSearchParams(window.location.search).get('project');
    if (requestedProject) {
      const target = projectData.find((project) => project.id === requestedProject || project.id === `${requestedProject}-business-card`);
      if (target) {
        const deepLink = window.setTimeout(() => {
          renderCategory(target.category);
          selectProject(getVisibleProjects().indexOf(target), true);
          document.getElementById('selected-works')?.scrollIntoView();
        }, 150);
        scope.add(() => window.clearTimeout(deepLink));
      }
    }
}
