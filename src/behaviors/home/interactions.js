/* Home page interactions (ported from the original inline page script):
 * design-process pillars, hero typewriter, scroll reveal, previous-event stories,
 * honors carousel and the shared image lightbox.
 * `mountHomeInteractions(scope)` runs once against the rendered page; `scope` undoes it on unmount.
 */
import { handlers } from './interactionHandlers.js';
import { renderPdf } from '@/lib/pdfCanvas.js';

export function mountHomeInteractions(scope) {
  const pillarsData = [
    {
      index: 0,
      phaseBadge: "01 · DISCOVER",
      title: "Business & User Discovery",
      description: "Analyze business needs, market trends, competitors, and user insights to identify problems and product opportunities.",
      bullets: [
        "Analyze business context, market trends, and competitors",
        "Study user needs, pain points, and behaviors",
        "Turn research findings into product opportunities"
      ],
      tools: ["Market Research", "Business Analysis", "SWOT", "Business Model Canvas", "User Research", "FigJam"],
      iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>`,
      iconBg: "bg-indigo-50 text-primary border-indigo-100",
      bulletColor: "bg-primary"
    },
    {
      index: 1,
      phaseBadge: "02 · DEFINE",
      title: "Product Definition",
      description: "Translate business goals and user needs into clear requirements, process flows, and actionable product solutions.",
      bullets: [
        "Map requirements, scope, and priorities",
        "Model user flows and business processes",
        "Frame problems and solutions with product thinking"
      ],
      tools: ["Figma", "FigJam", "Requirements Mapping", "User Flows", "Process Mapping", "Product Thinking"],
      iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect height="4" rx="1" width="6" x="9" y="3"></rect><path d="M9 12h6"></path><path d="M9 16h6"></path></svg>`,
      iconBg: "bg-violet-50 text-violet-700 border-violet-100",
      bulletColor: "bg-violet-600"
    },
    {
      index: 2,
      phaseBadge: "03 · DESIGN",
      title: "UI/UX Design",
      description: "Design intuitive, responsive digital experiences through wireframes, interactive prototypes, and reusable design systems.",
      bullets: [
        "Create wireframes and interactive prototypes",
        "Design responsive layouts across screen sizes",
        "Build reusable design systems and design tokens"
      ],
      tools: ["Figma", "Wireframing", "Responsive Design", "Prototyping", "Design Systems", "Design Tokens"],
      iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
      iconBg: "bg-teal-50 text-teal-700 border-teal-100",
      bulletColor: "bg-teal-600"
    },
    {
      index: 3,
      phaseBadge: "04 · BUILD & INTEGRATE",
      title: "Full-Stack & AI Development",
      description: "Build, integrate, and deploy digital applications using frontend, backend, databases, and AI/ML technologies.",
      bullets: [
        "Develop responsive frontend and backend features",
        "Integrate REST APIs, databases, and services",
        "Train and integrate AI/ML models into product workflows"
      ],
      tools: ["React", "Node.js", "FastAPI", "Python", "PostgreSQL", "REST APIs", "PyTorch", "TensorFlow", "Machine Learning", "Git & GitHub", "Docker"],
      iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><circle cx="12" cy="12" r="2"></circle></svg>`,
      iconBg: "bg-blue-50 text-blue-700 border-blue-100",
      bulletColor: "bg-blue-600"
    },
    {
      index: 4,
      phaseBadge: "05 · VALIDATE & DELIVER",
      title: "Validation & Product Delivery",
      description: "Validate product usability and functionality, coordinate team progress, and support delivery through testing and documentation.",
      bullets: [
        "Run usability, black-box, and user acceptance tests",
        "Coordinate team timelines, milestones, and progress",
        "Document deliverables and support handoffs"
      ],
      tools: ["Usability Testing", "Black-box Testing", "UAT", "Google Workspace", "Microsoft Office", "Canva", "Agile", "SDLC", "Team Coordination"],
      iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m9 12 2 2 4-4"></path><path d="M12 3 5 6v5c0 4.5 3 7 7 10 4-3 7-5.5 7-10V6l-7-3z"></path></svg>`,
      iconBg: "bg-amber-50 text-amber-700 border-amber-100",
      bulletColor: "bg-amber-600"
    }
  ];

  let currentPillar = 0;
  let isCardPinned = false;
  let isCardVisible = false;
  let pinnedPillarIndex = -1;
  let cardHideTimer;
  document.getElementById('experience').append(
    document.getElementById('pathway-modal-overlay')
  );

  function updateActiveNodeStyles(index) {
    const counter = document.getElementById('step-counter');
    if (counter) counter.textContent = `Pillar ${index + 1} of ${pillarsData.length}`;

    // Update Nodes & Callouts
    for (let i = 0; i < pillarsData.length; i++) {
      const nodeBtn = document.getElementById(`node-btn-${i}`);
      const callout = document.getElementById(`callout-${i}`);
      const badge = document.getElementById(`step-badge-${i}`);

      if (i === index) {
        if (nodeBtn) {
          nodeBtn.className = "pathway-node-btn w-[52px] h-[52px] rounded-full bg-white border-[3.5px] border-primary text-primary font-black font-mono text-sm sm:text-base flex items-center justify-center shadow-lg shadow-indigo-600/25 transition-all";
        }
        if (callout) {
          callout.className = (i % 2 === 1 ? "mt-3 " : "mb-3 ") + "px-3.5 py-2 rounded-2xl bg-white border-2 border-primary shadow-lg shadow-indigo-600/15 card-lift transition-all flex flex-col text-left scale-105 opacity-100";
        }
        if (badge) {
          badge.className = "mt-2 text-[10px] font-mono font-bold text-primary bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200";
        }
      } else {
        if (nodeBtn) {
          nodeBtn.className = "pathway-node-btn w-[52px] h-[52px] rounded-full bg-white border-[3.5px] border-slate-300 text-slate-600 font-black font-mono text-sm sm:text-base flex items-center justify-center shadow-md hover:border-slate-400 transition-all";
        }
        if (callout) {
          callout.className = (i % 2 === 1 ? "mt-3 " : "mb-3 ") + "px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm opacity-75 card-lift transition-all flex flex-col text-left";
        }
        if (badge) {
          badge.className = "mt-2 text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200";
        }
      }
    }
  }

  function renderModalData(index) {
    const data = pillarsData[index];
    const nodeButton = document.getElementById(`node-btn-${index}`);
    const nodeAccent = nodeButton ? getComputedStyle(nodeButton).color : '#0f766e';
    const nodeIconBackgrounds = ['#eef2ff', '#f5f3ff', '#f0fdfa', '#eff6ff', '#fffbeb'];
    const nodeIconBorders = ['#c7d2fe', '#ddd6fe', '#99f6e4', '#bfdbfe', '#fde68a'];
    const titleEl = document.getElementById('modal-title');
    const badgeEl = document.getElementById('modal-phase-badge');
    const descriptionEl = document.getElementById('modal-description');
    const iconBox = document.getElementById('modal-icon-box');
    const bulletsEl = document.getElementById('modal-bullets');
    const toolsEl = document.getElementById('modal-tools');

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) {
      badgeEl.textContent = data.phaseBadge;
      if (nodeButton) {
        badgeEl.style.setProperty('color', getComputedStyle(nodeButton).color, 'important');
      }
    }
    if (descriptionEl) descriptionEl.textContent = data.description;
    if (iconBox) {
      iconBox.className = `w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 transition-colors shadow-sm ${data.iconBg}`;
      iconBox.innerHTML = data.iconSvg;
      iconBox.style.setProperty('color', nodeAccent, 'important');
      iconBox.style.setProperty('background-color', nodeIconBackgrounds[index], 'important');
      iconBox.style.setProperty('border-color', nodeIconBorders[index], 'important');
    }
    if (bulletsEl) {
      bulletsEl.innerHTML = data.bullets.map(text => `
        <li class="flex items-start gap-2">
          <span class="w-1.5 h-1.5 rounded-full ${data.bulletColor} mt-1.5 shrink-0"></span>
          <span>${text}</span>
        </li>
      `).join('');
    }
    if (toolsEl) {
      toolsEl.replaceChildren(...data.tools.map((tool) => {
        const chip = document.createElement('span');
        chip.className = 'rounded-full border border-indigo-100 bg-white/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-700';
        chip.textContent = tool;
        return chip;
      }));
    }
  }

  function positionPillarCard() {
    if (!isCardVisible) return;

    const node = document.getElementById(`node-btn-${currentPillar}`);
    const overlay = document.getElementById('pathway-modal-overlay');
    const card = document.getElementById('pathway-modal-card');
    const section = document.getElementById('experience');
    if (!node || !overlay || !card || !section) return;

    const nodeRect = node.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();
    const cardWidth = overlay.getBoundingClientRect().width;
    const cardHeight = cardRect.height;
    const sectionHeight = section.clientHeight;
    const sectionWidth = section.clientWidth;
    const nodeTop = nodeRect.top - sectionRect.top;
    const nodeBottom = nodeRect.bottom - sectionRect.top;
    const preferredBelow = currentPillar % 2 === 0;
    const centeredLeft = Math.max(12, Math.min(
      nodeRect.left + nodeRect.width / 2 - sectionRect.left - cardWidth / 2,
      sectionWidth - cardWidth - 12
    ));
    const maxTop = sectionHeight - cardHeight - 12;
    const maxLeft = Math.max(12, sectionWidth - cardWidth - 12);
    const leftCandidates = [centeredLeft];
    for (let left = 12; left <= maxLeft; left += 8) leftCandidates.push(left);
    const obstacles = [...section.querySelectorAll(
      '.pathway-node-btn, [id^="callout-"], #interactive-pathway-container > div:first-child'
    )].map((element) => {
      if (element.id === `callout-${currentPillar}`) return null;
      const rect = element.getBoundingClientRect();
      return {
        left: rect.left - sectionRect.left,
        right: rect.right - sectionRect.left,
        top: rect.top - sectionRect.top,
        bottom: rect.bottom - sectionRect.top
      };
    }).filter(Boolean);
    const preferredTop = preferredBelow ? nodeBottom + 10 : nodeTop - cardHeight - 10;
    const top = Math.max(12, Math.min(preferredTop, maxTop));
    if (currentPillar === 2) {
      overlay.style.left = `${centeredLeft}px`;
      overlay.style.top = `${top}px`;
      return;
    }
    const candidates = leftCandidates.map((left) => ({
      left,
      top,
      overlapCount: obstacles.filter((obstacle) =>
          left < obstacle.right &&
          left + cardWidth > obstacle.left &&
          top < obstacle.bottom &&
          top + cardHeight > obstacle.top
      ).length
    }));
    const placement = candidates.reduce((best, candidate) => {
      if (candidate.overlapCount !== best.overlapCount) {
        return candidate.overlapCount < best.overlapCount ? candidate : best;
      }
      return Math.abs(candidate.left - centeredLeft) < Math.abs(best.left - centeredLeft) ? candidate : best;
    });

    overlay.style.left = `${placement.left}px`;
    overlay.style.top = `${placement.top}px`;
  }

  function showPillarCard(index) {
    if (isCardPinned && pinnedPillarIndex !== index) return;
    window.clearTimeout(cardHideTimer);
    currentPillar = index;
    updateActiveNodeStyles(index);
    renderModalData(index);

    const overlay = document.getElementById('pathway-modal-overlay');
    if (!overlay) return;

    isCardVisible = true;
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    document.querySelectorAll('.pathway-node-btn').forEach((button, buttonIndex) => {
      button.setAttribute('aria-expanded', String(buttonIndex === index));
    });
    positionPillarCard();
  }

  function hidePillarCard() {
    const overlay = document.getElementById('pathway-modal-overlay');
    if (!overlay) return;

    isCardVisible = false;
    isCardPinned = false;
    pinnedPillarIndex = -1;
    overlay.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.querySelectorAll('.pathway-node-btn').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
    });
  }

  function scheduleHidePillarCard() {
    window.clearTimeout(cardHideTimer);
    cardHideTimer = window.setTimeout(() => {
      if (!isCardPinned) hidePillarCard();
    }, 180);
  }

  function cancelHidePillarCard() {
    window.clearTimeout(cardHideTimer);
  }

  function togglePillarCard(index) {
    if (isCardPinned && pinnedPillarIndex === index) {
      isCardPinned = false;
      pinnedPillarIndex = -1;
      document.querySelectorAll('.pathway-node-btn').forEach((button) => {
        button.setAttribute('aria-expanded', 'false');
      });
      return;
    }

    isCardPinned = true;
    pinnedPillarIndex = index;
    showPillarCard(index);
  }

  function stepPillar(direction) {
    let next = currentPillar + direction;
    if (next < 0) next = pillarsData.length - 1;
    if (next >= pillarsData.length) next = 0;
    isCardPinned = true;
    pinnedPillarIndex = next;
    showPillarCard(next);
  }

  scope.on(document, 'keydown', function(e) {
    if (e.key === 'Escape' && isCardVisible) {
      hidePillarCard();
    }
  });
  scope.on(document, 'pointerdown', function(e) {
    if (!isCardVisible || e.target.closest('.pathway-node-btn')) return;
    if (isCardPinned) {
      isCardPinned = false;
      pinnedPillarIndex = -1;
      document.querySelectorAll('.pathway-node-btn').forEach((button) => {
        button.setAttribute('aria-expanded', 'false');
      });
      return;
    }
    hidePillarCard();
  });
  scope.on(document, 'focusin', function(e) {
    if (!isCardVisible || e.target.closest('#pathway-modal-overlay, .pathway-node-btn')) return;
    if (isCardPinned) {
      isCardPinned = false;
      pinnedPillarIndex = -1;
      document.querySelectorAll('.pathway-node-btn').forEach((button) => {
        button.setAttribute('aria-expanded', 'false');
      });
      return;
    }
    hidePillarCard();
  });
  scope.on(window, 'resize', positionPillarCard);
  scope.on(window, 'scroll', positionPillarCard, true);

  // Type and erase the hero tagline continuously.
  const typewriter = document.getElementById('hero-typewriter-text');
  const typewriterText = 'Turning needs into products that matter.';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let typewriterTimeout;

  function animateTypewriter() {
    window.clearTimeout(typewriterTimeout);
    if (!typewriter) return;

    if (reducedMotion.matches) {
      typewriter.textContent = typewriterText;
      return;
    }

    let index = 0;
    let deleting = false;

    function step() {
      typewriter.textContent = typewriterText.slice(0, index);

      if (!deleting && index === typewriterText.length) {
        deleting = true;
        typewriterTimeout = window.setTimeout(step, 1400);
        return;
      }

      if (deleting && index === 0) {
        deleting = false;
        typewriterTimeout = window.setTimeout(step, 350);
        return;
      }

      index += deleting ? -1 : 1;
      typewriterTimeout = window.setTimeout(step, deleting ? 42 : 82);
    }

    step();
  }

  animateTypewriter();
  reducedMotion.addEventListener('change', animateTypewriter);

  const revealComponents = document.querySelectorAll(
    'main > section, main > section .card-lift:not([id^="callout-"]), #interactive-pathway-container, #resume > div > .text-center, #honors-carousel-viewport'
  );
  revealComponents.forEach((component) => component.classList.add('scroll-reveal'));
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealComponents.forEach((component) => component.classList.add('is-visible'));
  } else {
    const revealObserver = scope.observer(new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' }));

    revealComponents.forEach((component) => {
      const siblings = Array.from(component.parentElement.children)
        .filter((sibling) => sibling.classList.contains('card-lift'));
      const siblingIndex = siblings.indexOf(component);
      if (siblingIndex > 0) {
        component.style.setProperty('--scroll-reveal-delay', `${Math.min(siblingIndex * 120, 360)}ms`);
      }
      revealObserver.observe(component);
    });
  }

  // Initialize styling
  updateActiveNodeStyles(0);

  // Previous Events: three contextual stories, one shared detail overlay.
  const lastEventDetail = document.getElementById('last-event-detail');
  const lastEventDetailTitle = document.getElementById('last-event-detail-title');
  const lastEventDetailEyebrow = document.getElementById('last-event-detail-eyebrow');
  const lastEventDetailDate = document.getElementById('last-event-detail-date');
  const lastEventDetailStatus = document.getElementById('last-event-detail-status');
  const lastEventBack = document.getElementById('last-event-back');
  const lastEventSection = document.getElementById('last-events');
  const lastEventStories = [...lastEventDetail.querySelectorAll('[data-event-panel]')];
  const lastEventMetadata = [
    { key: 'digistar', eyebrow: 'TELKOM INDONESIA · DIGISTAR INTERNSHIP 2026', status: '3rd Place · Internal B2B Pitching', statusClass: 'emerald' },
    { key: 'asah', eyebrow: 'DICODING × ACCENTURE · ASAH 2025', status: 'Distinction Graduate', statusClass: 'indigo' },
    { key: 'arkavidia', eyebrow: 'ARKAVIDIA 9.0 · HACKVIDIA CATEGORY', status: 'National Finalist', statusClass: 'amber' }
  ];
  let lastEventTrigger = null;
  let lastEventCloseTimer;

  function syncLastEventPanelWidth() {
    lastEventDetail.style.setProperty('--last-event-panel-width', `${lastEventSection.getBoundingClientRect().width}px`);
    lastEventDetail.style.setProperty('--last-event-viewport-width', `${document.documentElement.clientWidth}px`);
  }

  document.querySelectorAll('#last-events .last-event-card').forEach((card) => {
    card.addEventListener('click', () => {
      const index = Number(card.dataset.eventIndex);
      const info = lastEventMetadata[index];
      if (!info) return;
      document.querySelectorAll('#last-events .last-event-card').forEach(item => item.setAttribute('aria-expanded', 'false'));
      card.setAttribute('aria-expanded', 'true');
      lastEventTrigger = card;
      lastEventDetailTitle.textContent = card.dataset.eventTitle || 'Event';
      lastEventDetailDate.textContent = card.dataset.eventDate || '';
      lastEventDetailEyebrow.textContent = info.eyebrow;
      lastEventDetailStatus.textContent = info.status;
      lastEventDetailStatus.className = `inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider ${info.statusClass === 'emerald' ? 'bg-emerald-50 text-emerald-800' : info.statusClass === 'amber' ? 'bg-amber-50 text-amber-900' : 'bg-indigo-50 text-indigo-800'}`;
      lastEventStories.forEach(story => story.classList.toggle('hidden', story.dataset.eventPanel !== info.key));
      syncLastEventPanelWidth();
      window.clearTimeout(lastEventCloseTimer);
      lastEventDetail.classList.remove('is-closing', 'hidden');
      lastEventBack.focus();
    });
  });

  function closeLastEvent() {
    if (lastEventDetail.classList.contains('hidden')) return;
    lastEventDetail.classList.add('is-closing');
    if (lastEventTrigger) {
      lastEventTrigger.setAttribute('aria-expanded', 'false');
      lastEventTrigger.focus();
    }
    window.clearTimeout(lastEventCloseTimer);
    lastEventCloseTimer = window.setTimeout(() => {
      lastEventDetail.classList.add('hidden');
      lastEventDetail.classList.remove('is-closing');
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 420);
  }
  lastEventBack.addEventListener('click', closeLastEvent);
  scope.on(document, 'keydown', event => {
    if (event.key === 'Escape' && !lastEventDetail.classList.contains('hidden')) closeLastEvent();
  });
  scope.on(window, 'resize', () => {
    if (!lastEventDetail.classList.contains('hidden')) syncLastEventPanelWidth();
  });

  const imageLightbox = document.createElement('dialog');
  imageLightbox.className = 'image-lightbox';
  imageLightbox.setAttribute('aria-label', 'Fullscreen image viewer');
  imageLightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" aria-label="Close fullscreen image">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12"></path>
      </svg>
    </button>
    <div class="image-lightbox-stage">
      <img class="image-lightbox-image" alt="">
      <div class="image-lightbox-art-container" hidden></div>
      <div class="image-lightbox-pdf" hidden role="document" aria-label="Certificate preview"></div>
    </div>
    <p class="image-lightbox-caption"></p>
    <p class="image-lightbox-hint" aria-hidden="true">Click the image to zoom · drag to move</p>
  `;
  scope.append(document.body, imageLightbox);
  const imageLightboxImage = imageLightbox.querySelector('.image-lightbox-image');
  const imageLightboxArt = imageLightbox.querySelector('.image-lightbox-art-container');
  const imageLightboxPdf = imageLightbox.querySelector('.image-lightbox-pdf');
  const imageLightboxCaption = imageLightbox.querySelector('.image-lightbox-caption');
  const imageLightboxStage = imageLightbox.querySelector('.image-lightbox-stage');
  const imageLightboxHint = imageLightbox.querySelector('.image-lightbox-hint');
  let imageLightboxTrigger = null;
  let lightboxPdf = null;

  window.createImageExpandButton = (label) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'image-expand-button';
    button.setAttribute('aria-label', `View full-screen image: ${label}`);
    button.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3"></path>
      </svg>
    `;
    return button;
  };

  window.openImageLightbox = ({ src, alt = '', artwork = null, caption = '', trigger = null }) => {
    if (!src && !artwork) return;
    imageLightboxTrigger = trigger;
    imageLightboxImage.classList.remove('is-zoomed');
    imageLightboxHint.hidden = !src;
    imageLightboxStage.classList.remove('is-zoomed');
    imageLightboxStage.scrollTo?.(0, 0);
    imageLightboxImage.hidden = !src;
    imageLightboxArt.hidden = !artwork;
    imageLightboxImage.alt = alt;
    if (src) imageLightboxImage.src = src;
    else imageLightboxImage.removeAttribute('src');
    imageLightboxArt.replaceChildren();
    if (artwork) {
      const enlargedArtwork = artwork.cloneNode(true);
      enlargedArtwork.classList.add('image-lightbox-artwork');
      enlargedArtwork.querySelectorAll('.image-expand-button').forEach((button) => button.remove());
      imageLightboxArt.appendChild(enlargedArtwork);
    }
    imageLightboxCaption.textContent = caption;
    imageLightbox.showModal();
  };

  window.openCertificatePreview = ({ src, caption = '', trigger = null }) => {
    if (!src) return;
    imageLightboxTrigger = trigger;
    imageLightboxHint.hidden = true;
    imageLightboxImage.hidden = true;
    imageLightboxArt.hidden = true;
    imageLightboxPdf.hidden = false;
    imageLightboxCaption.textContent = caption;
    imageLightbox.showModal();
    lightboxPdf?.destroy();
    lightboxPdf = renderPdf(imageLightboxPdf, src);
  };

  imageLightbox.querySelector('.image-lightbox-close').addEventListener('click', () => {
    imageLightbox.close();
  });
  // Zoom by clicking the image itself; while zoomed, dragging pans the picture.
  let dragStart = null;
  let dragMoved = false;
  const setLightboxZoom = (zoomed) => {
    imageLightboxImage.classList.toggle('is-zoomed', zoomed);
    imageLightboxStage.classList.toggle('is-zoomed', zoomed);
    imageLightboxHint.textContent = zoomed ? 'Click to zoom out · drag to move' : 'Click the image to zoom · drag to move';
  };
  // Pointer capture retargets clicks to the stage, so the stage handles the toggle.
  imageLightboxStage.addEventListener('click', (event) => {
    if (dragMoved) { dragMoved = false; return; }
    const zoomed = imageLightboxImage.classList.contains('is-zoomed');
    if (event.target === imageLightboxImage || (zoomed && event.target === imageLightboxStage)) setLightboxZoom(!zoomed);
  });
  imageLightboxImage.addEventListener('dragstart', (event) => event.preventDefault());
  imageLightboxStage.addEventListener('pointerdown', (event) => {
    if (!imageLightboxImage.classList.contains('is-zoomed') || event.button !== 0) return;
    dragStart = { x: event.clientX, y: event.clientY, left: imageLightboxStage.scrollLeft, top: imageLightboxStage.scrollTop };
    dragMoved = false;
    imageLightboxStage.setPointerCapture?.(event.pointerId);
  });
  imageLightboxStage.addEventListener('pointermove', (event) => {
    if (!dragStart) return;
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) dragMoved = true;
    imageLightboxStage.scrollLeft = dragStart.left - dx;
    imageLightboxStage.scrollTop = dragStart.top - dy;
  });
  const endDrag = () => { dragStart = null; };
  imageLightboxStage.addEventListener('pointerup', endDrag);
  imageLightboxStage.addEventListener('pointercancel', endDrag);
  imageLightbox.addEventListener('click', (event) => {
    if (event.target === imageLightbox) imageLightbox.close();
  });
  scope.on(document, 'keydown', (event) => {
    if (event.key === 'Escape' && imageLightbox.open) {
      event.preventDefault();
      imageLightbox.close();
    }
  }, true);
  imageLightbox.addEventListener('close', () => {
    imageLightboxImage.removeAttribute('src');
    setLightboxZoom(false);
    imageLightboxHint.hidden = false;
    imageLightboxArt.replaceChildren();
    lightboxPdf?.destroy();
    lightboxPdf = null;
    imageLightboxPdf.hidden = true;
    if (imageLightboxTrigger && imageLightboxTrigger.isConnected) imageLightboxTrigger.focus();
    imageLightboxTrigger = null;
  });

  // Honors & Achievements Interactive Carousel Controller
  let honorsCurrentIndex = 0;
  const totalHonors = document.querySelectorAll('#honors-carousel-track .honor-card').length;

  function updateHonorsControls() {
    const viewport = document.getElementById('honors-carousel-viewport');
    const cards = document.querySelectorAll('.honor-card');
    const dots = document.querySelectorAll('#honors-dot-indicators button');
    const counter = document.getElementById('honors-card-counter');

    if (!viewport || cards.length === 0) return;

    const angleStep = 28;
    const angleStepRad = angleStep * Math.PI / 180;
    const cardWidth = cards[0].offsetWidth;
    const minimumRadius = cardWidth * (1.05 + 0.92 * Math.cos(angleStepRad))
      / (2 * Math.sin(angleStepRad)) + 20;
    const radius = Math.min(1100, Math.max(500, viewport.clientWidth * 0.65, minimumRadius));

    cards.forEach((card, index) => {
      card.style.marginTop = `${-card.offsetHeight / 2}px`;
      let offset = index - honorsCurrentIndex;
      if (offset > totalHonors / 2) offset -= totalHonors;
      if (offset < -totalHonors / 2) offset += totalHonors;

      const angle = offset * angleStep;
      const angleRad = angle * Math.PI / 180;
      const distance = Math.abs(offset);
      const scale = distance === 0 ? 1.05 : Math.max(0.82, 1 - distance * 0.08);
      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius - radius + (distance === 0 ? 40 : 0);

      card.classList.toggle('is-active', distance === 0);
      card.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${angle}deg) scale(${scale})`;
      card.style.opacity = distance > 2.5 ? '0' : String(1 - distance * 0.18);
      card.style.zIndex = String(distance === 0 ? 1000 : 100 - distance * 10);
      card.style.filter = distance === 0
        ? 'drop-shadow(0 20px 30px rgba(15, 23, 42, 0.3))'
        : `blur(${Math.min(distance * 0.6, 2)}px) brightness(${Math.max(0.85, 1 - distance * 0.08)})`;
      card.setAttribute('aria-hidden', distance === 0 ? 'false' : 'true');
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', distance === 0 ? '0' : '-1');
      card.setAttribute('aria-label', `Show achievement ${index + 1}`);
      card.dataset.index = String(index);
    });

    // Update dots indicator with animated pill transition
    dots.forEach((dot, idx) => {
      if (idx === honorsCurrentIndex) {
        dot.className = "h-2 rounded-full transition-all duration-300 w-7 bg-primary shadow-sm shadow-indigo-600/40 ring-2 ring-primary/20 scale-105";
      } else {
        dot.className = "h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer";
      }
    });

    if (counter) {
      counter.textContent = `${honorsCurrentIndex + 1} of ${totalHonors} Achievements`;
    }
  }

  function goToHonorsSlide(index) {
    honorsCurrentIndex = ((index % totalHonors) + totalHonors) % totalHonors;
    updateHonorsControls();
  }

  function scrollHonors(direction) {
    goToHonorsSlide(honorsCurrentIndex + direction);
  }

  const honorsViewport = document.getElementById('honors-carousel-viewport');
  if (honorsViewport) {
    let swipeHandled = false;

    honorsViewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollHonors(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollHonors(-1);
      }
    });

    let pointerStartX = null;
    honorsViewport.style.touchAction = 'pan-y';
    honorsViewport.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || event.target.closest('button')) return;
      pointerStartX = event.clientX;
      swipeHandled = false;
    });
    honorsViewport.addEventListener('pointerup', (event) => {
      if (pointerStartX === null) return;
      const delta = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(delta) > 45) {
        swipeHandled = true;
        scrollHonors(delta < 0 ? 1 : -1);
        setTimeout(() => { swipeHandled = false; }, 500);
      }
    });
    honorsViewport.addEventListener('pointercancel', () => {
      pointerStartX = null;
    });
    let lastWheelNavigation = 0;
    honorsViewport.addEventListener('wheel', (event) => {
      const scrollDelta = Math.abs(event.deltaX) >= Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
      if (Math.abs(scrollDelta) < 12) return;
      event.preventDefault();
      const now = performance.now();
      if (now - lastWheelNavigation < 400) return;
      lastWheelNavigation = now;
      scrollHonors(scrollDelta > 0 ? 1 : -1);
    }, { passive: false });

    const honorPreviews = [];
    scope.add(() => honorPreviews.forEach((preview) => preview.destroy()));
    honorsViewport.querySelectorAll('.honor-card').forEach((card, index) => {
      const certificateArtwork = card.querySelector(':scope > div:first-child > div.h-36');
      if (certificateArtwork) {
        certificateArtwork.classList.add('honor-certificate-art');
        const certificateUrl = card.getAttribute('data-certificate');
        let certificateUrls = [];
        try {
          certificateUrls = JSON.parse(card.getAttribute('data-certificates') || '[]');
        } catch (error) {
          console.error('Unable to read certificate images.', error);
        }
        if (!Array.isArray(certificateUrls) || certificateUrls.some((url) => typeof url !== 'string')) {
          certificateUrls = [];
        }
        if (certificateUrls.length > 0) {
          let certificateIndex = 0;
          const certificateImage = document.createElement('img');
          certificateImage.className = 'certificate-image';
          certificateImage.alt = `${card.getAttribute('aria-label') || 'Achievement'} certificate 1`;
          const updateCertificateImage = () => {
            certificateImage.src = certificateUrls[certificateIndex];
            certificateImage.alt = `${card.getAttribute('aria-label') || 'Achievement'} certificate ${certificateIndex + 1}`;
            certificateImage.dataset.certificateIndex = String(certificateIndex);
          };
          certificateArtwork.replaceChildren(certificateImage);
          updateCertificateImage();

          if (certificateUrls.length > 1) {
            const certificateControls = document.createElement('div');
            certificateControls.className = 'certificate-carousel-controls';
            const createCertificateControl = (direction, label) => {
              const button = document.createElement('button');
              button.type = 'button';
              button.className = 'certificate-carousel-button';
              button.setAttribute('aria-label', label);
              button.textContent = direction === -1 ? '‹' : '›';
              button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                certificateIndex = (certificateIndex + direction + certificateUrls.length) % certificateUrls.length;
                updateCertificateImage();
              });
              return button;
            };
            certificateControls.append(
              createCertificateControl(-1, 'Previous certificate image'),
              createCertificateControl(1, 'Next certificate image')
            );
            certificateArtwork.appendChild(certificateControls);
          }

          const expandButton = window.createImageExpandButton(card.getAttribute('aria-label') || 'achievement');
          expandButton.setAttribute('aria-label', `Preview certificate: ${card.getAttribute('aria-label') || 'achievement'}`);
          expandButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            window.openImageLightbox({
              src: certificateUrls[certificateIndex],
              alt: certificateImage.alt,
              caption: `${card.getAttribute('aria-label') || 'Certificate'} (${certificateIndex + 1} of ${certificateUrls.length})`,
              trigger: expandButton
            });
          });
          certificateArtwork.appendChild(expandButton);
        } else if (certificateUrl) {
          const certificatePreview = document.createElement('div');
          certificatePreview.className = 'certificate-preview-frame';
          certificatePreview.setAttribute('role', 'img');
          certificatePreview.setAttribute('aria-label', `Certificate preview: ${card.getAttribute('aria-label') || 'achievement'}`);
          certificateArtwork.replaceChildren(certificatePreview);
          honorPreviews.push(renderPdf(certificatePreview, certificateUrl, { mode: 'contain' }));
        }
        const expandButton = window.createImageExpandButton(card.getAttribute('aria-label') || 'achievement');
        expandButton.setAttribute('aria-label', `Preview certificate: ${card.getAttribute('aria-label') || 'achievement'}`);
        expandButton.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          window.openCertificatePreview({
            src: certificateUrl,
            caption: card.getAttribute('aria-label') || 'Certificate',
            trigger: expandButton
          });
        });
        certificateArtwork.appendChild(expandButton);
      }

      card.addEventListener('click', () => {
        if (!swipeHandled) goToHonorsSlide(index);
      });
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          goToHonorsSlide(index);
        }
      });
    });
  }

  scope.on(window, 'resize', updateHonorsControls);
  updateHonorsControls();

  Object.assign(handlers, { cancelHidePillarCard, goToHonorsSlide, scheduleHidePillarCard, scrollHonors, showPillarCard, stepPillar, togglePillarCard });
  scope.add(() => {
    lightboxPdf?.destroy();
    Object.keys(handlers).forEach((key) => delete handlers[key]);
    window.clearTimeout(typewriterTimeout);
    window.clearTimeout(lastEventCloseTimer);
    window.clearTimeout(cardHideTimer);
    delete window.createImageExpandButton;
    delete window.openImageLightbox;
    delete window.openCertificatePreview;
  });
}
