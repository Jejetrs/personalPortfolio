/* Empty-space grid.
   The page background carries a faint graph-paper grid. This module adds a second, stronger copy of the same grid
   on top of it, but only where the light sections have nothing to show: next to headings, in the gutters and in the gaps
   between blocks. The mask that decides "where is it empty" is drawn on a small canvas from the real positions of the
   text, images, cards and buttons, and its edges are blurred so the grid fades out softly towards the content. */

const SECTION_IDS = ['about', 'last-events', 'design-process', 'selected-works'];
const SCALE = 6; // one canvas pixel covers SCALE x SCALE css pixels
const PADDING = 18; // empty margin kept around every piece of content (css px)
const BLUR = 42; // softness of the fade (css px)
const SECTION_FADE = 90; // fade length at the top and bottom of a section (css px)
const MIN_W = 20;
const MIN_H = 12;

function isVisible(element) {
  if (typeof element.checkVisibility === 'function') {
    return element.checkVisibility({ visibilityProperty: true });
  }
  return element.getClientRects().length > 0;
}

function hasPaint(style) {
  if (style.backgroundImage && style.backgroundImage !== 'none') return true;
  const bg = style.backgroundColor;
  if (bg && bg !== 'transparent' && !/rgba\(\s*\d+,\s*\d+,\s*\d+,\s*0(\.0*)?\s*\)/.test(bg)) {
    const alpha = /rgba\([^)]*,\s*([\d.]+)\s*\)/.exec(bg);
    if (!alpha || parseFloat(alpha[1]) > 0.3) return true;
  }
  if (style.boxShadow && style.boxShadow !== 'none') return true;
  const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
  return border > 0 && style.borderTopStyle !== 'none';
}

/* Rectangles (page coordinates) that are occupied by content inside one section. */
function collectContent(section, originX, originY) {
  const rects = [];
  const sectionRect = section.getBoundingClientRect();
  const push = (r) => {
    if (r.width < 2 || r.height < 2) return;
    rects.push({ x: r.left - originX, y: r.top - originY, w: r.width, h: r.height });
  };

  // text, line by line
  const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => (node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
  });
  const range = document.createRange();
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const parent = node.parentElement;
    if (!parent || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(parent.tagName) || !isVisible(parent)) continue;
    range.selectNodeContents(node);
    for (const r of range.getClientRects()) push(r);
  }

  // pictures, controls and anything that paints a surface (cards, pills, buttons)
  section.querySelectorAll('*').forEach((element) => {
    const tag = element.tagName;
    if (/^(SCRIPT|STYLE|PATH|CIRCLE|RECT|LINE|G|DEFS|USE|STOP|TSPAN|POLYGON|POLYLINE|ELLIPSE)$/i.test(tag)) return;
    const r = element.getBoundingClientRect();
    if (r.width < MIN_W || r.height < MIN_H) return;
    if (r.width > sectionRect.width * 0.98 && r.height > sectionRect.height * 0.9) return;
    if (!isVisible(element)) return;
    if (/^(IMG|VIDEO|CANVAS|IFRAME|INPUT|TEXTAREA|SELECT|BUTTON)$/.test(tag) || (tag.toLowerCase() === 'svg' && !element.parentElement?.closest('svg') && r.width < 900)) {
      push(r);
      return;
    }
    if (hasPaint(getComputedStyle(element))) push(r);
  });
  return rects;
}

export function mountEmptyGrid(scope) {
  const body = document.body;
  const overlay = document.createElement('div');
  overlay.id = 'empty-grid';
  overlay.setAttribute('aria-hidden', 'true');
  scope.append(body, overlay);

  let timer = 0;
  let frame = 0;

  const build = () => {
    const bodyRect = body.getBoundingClientRect();
    const width = Math.round(bodyRect.width);
    const height = Math.round(bodyRect.height);
    if (width < 50 || height < 50) return;
    const originX = bodyRect.left;
    const originY = bodyRect.top;
    const cw = Math.max(1, Math.ceil(width / SCALE));
    const ch = Math.max(1, Math.ceil(height / SCALE));

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const areas = sections.map((section) => section.getBoundingClientRect());

    const content = document.createElement('canvas');
    content.width = cw;
    content.height = ch;
    const cctx = content.getContext('2d');
    if (!cctx) return;
    cctx.fillStyle = '#000';
    sections.forEach((section) => {
      collectContent(section, originX, originY).forEach((r) => {
        cctx.fillRect((r.x - PADDING) / SCALE, (r.y - PADDING) / SCALE, (r.w + PADDING * 2) / SCALE, (r.h + PADDING * 2) / SCALE);
      });
    });

    // soft edges
    const soft = document.createElement('canvas');
    soft.width = cw;
    soft.height = ch;
    const sctx = soft.getContext('2d');
    if ('filter' in sctx) sctx.filter = `blur(${BLUR / SCALE}px)`;
    sctx.drawImage(content, 0, 0);
    if ('filter' in sctx) sctx.filter = 'none';

    // empty = inside a light section and not covered by content
    const mask = document.createElement('canvas');
    mask.width = cw;
    mask.height = ch;
    const mctx = mask.getContext('2d');
    areas.forEach((r) => {
      // the top and bottom edge of every section fade out, so the strong grid never ends in a hard line
      const x = (r.left - originX) / SCALE;
      const y = (r.top - originY) / SCALE;
      const h = r.height / SCALE;
      const edge = Math.min(0.45, SECTION_FADE / r.height);
      const gradient = mctx.createLinearGradient(0, y, 0, y + h);
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(edge, 'rgba(0,0,0,1)');
      gradient.addColorStop(1 - edge, 'rgba(0,0,0,1)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      mctx.fillStyle = gradient;
      mctx.fillRect(x, y, r.width / SCALE, h);
    });
    mctx.globalCompositeOperation = 'destination-out';
    mctx.drawImage(soft, 0, 0);
    mctx.drawImage(soft, 0, 0); // a second pass keeps the fade short and the centre of the empty areas fully lit

    const url = `url(${mask.toDataURL('image/png')})`;
    overlay.style.setProperty('-webkit-mask-image', url);
    overlay.style.setProperty('mask-image', url);
    overlay.classList.add('is-ready');
  };

  const schedule = (delay = 250) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(build);
    }, delay);
  };

  scope.on(window, 'resize', () => schedule(250));
  scope.on(window, 'load', () => schedule(400));
  if (document.fonts?.ready) document.fonts.ready.then(() => schedule(100));

  // Layout changes (opening a chapter, choosing another project, images arriving) change the page height.
  const resizeObserver = scope.observer(new ResizeObserver(() => schedule(350)));
  resizeObserver.observe(body);
  SECTION_IDS.forEach((id) => {
    const section = document.getElementById(id);
    if (section) resizeObserver.observe(section);
  });

  // Scroll reveals move content for a moment; settle the mask once they are done.
  schedule(600);
  const settle = window.setTimeout(() => schedule(0), 2400);
  scope.add(() => {
    window.clearTimeout(timer);
    window.clearTimeout(settle);
    window.cancelAnimationFrame(frame);
  });
}
