// Page-level document metadata (formerly declared in the static page <head>).
export const TAILWIND_CONFIG = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
          "primary-fixed": "#e2dfff",
          "inverse-surface": "#283044",
          "tertiary-container": "#006e4b",
          "error-container": "#ffdad6",
          "on-surface": "#131b2e",
          "surface-container-lowest": "#ffffff",
          "on-background": "#131b2e",
          "on-error": "#ffffff",
          "on-secondary": "#ffffff",
          "on-secondary-fixed-variant": "#004e5c",
          "on-secondary-container": "#006172",
          "inverse-on-surface": "#eef0ff",
          "primary": "#3525cd",
          "surface-container-low": "#f2f3ff",
          "error": "#ba1a1a",
          "on-primary-fixed-variant": "#3323cc",
          "on-primary-fixed": "#0f0069",
          "primary-fixed-dim": "#c3c0ff",
          "secondary": "#00687a",
          "on-primary": "#ffffff",
          "on-primary-container": "#dad7ff",
          "surface-bright": "#faf8ff",
          "surface-tint": "#4d44e3",
          "background": "#faf8ff",
          "on-tertiary-container": "#67f4b7",
          "on-error-container": "#93000a",
          "outline": "#777587",
          "inverse-primary": "#c3c0ff",
          "on-surface-variant": "#464555",
          "tertiary": "#005338",
          "on-tertiary-fixed-variant": "#005236",
          "surface-container": "#eaedff",
          "surface": "#faf8ff",
          "secondary-container": "#57dffe",
          "surface-container-highest": "#dae2fd",
          "surface-dim": "#d2d9f4",
          "on-tertiary": "#ffffff",
          "tertiary-fixed": "#6ffbbe",
          "primary-container": "#4f46e5",
          "surface-container-high": "#e2e7ff",
          "on-tertiary-fixed": "#002113",
          "outline-variant": "#c7c4d8",
          "surface-variant": "#dae2fd",
          "on-secondary-fixed": "#001f26",
          "secondary-fixed-dim": "#4cd7f6",
          "secondary-fixed": "#acedff",
          "tertiary-fixed-dim": "#4edea3"
        },
        "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "2xl": "1.25rem",
          "3xl": "1.75rem",
          "full": "9999px"
        },
        "spacing": {
          "space-lg": "1.5rem",
          "gutter": "1.5rem",
          "space-xs": "0.25rem",
          "space-2xl": "4rem",
          "space-sm": "0.5rem",
          "margin-mobile": "1.25rem",
          "space-md": "1rem",
          "gutter-mobile": "1rem",
          "space-xl": "2.5rem",
          "margin": "2.5rem"
        },
        "fontFamily": {
          "label-kicker": ["JetBrains Mono"],
          "body-sm": ["Inter"],
          "headline-lg-mobile": ["Plus Jakarta Sans"],
          "headline-sm": ["Plus Jakarta Sans"],
          "headline-lg": ["Plus Jakarta Sans"],
          "headline-hero-mobile": ["Plus Jakarta Sans"],
          "headline-md": ["Plus Jakarta Sans"],
          "label-badge": ["Inter"],
          "body-md": ["Inter"],
          "label-code": ["JetBrains Mono"],
          "headline-hero": ["Plus Jakarta Sans"],
          "body-lg": ["Inter"]
        },
        "fontSize": {
          "label-kicker": ["11px", { "lineHeight": "14px", "letterSpacing": "0.08em", "fontWeight": "600" }],
          "body-sm": ["13px", { "lineHeight": "20px", "letterSpacing": "0em", "fontWeight": "400" }],
          "headline-lg-mobile": ["26px", { "lineHeight": "34px", "letterSpacing": "-0.025em", "fontWeight": "700" }],
          "headline-sm": ["18px", { "lineHeight": "26px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
          "headline-lg": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
          "headline-hero-mobile": ["34px", { "lineHeight": "42px", "letterSpacing": "-0.03em", "fontWeight": "800" }],
          "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
          "label-badge": ["12px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600" }],
          "body-md": ["14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" }],
          "label-code": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
          "headline-hero": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.035em", "fontWeight": "800" }],
          "body-lg": ["16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" }]
        }
      },
    },
  };

export const PAGE_CSS = `
  /* Cyber-Architectural accents */
  .crosshair-corner {
    position: relative;
  }
  .crosshair-corner::before {
    content: "+";
    position: absolute;
    top: 6px;
    right: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    opacity: 0.35;
    pointer-events: none;
  }
  .tech-grid-pattern {
    background-image: radial-gradient(rgba(79, 70, 229, 0.08) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  #inaproc-artifact-carousel {
    scrollbar-width: none;
  }
  #inaproc-artifact-carousel::-webkit-scrollbar {
    display: none;
  }
  #dbs-documentation-carousel {
    scrollbar-width: none;
    touch-action: pan-y;
  }
  #dbs-documentation-carousel::-webkit-scrollbar {
    display: none;
  }
  .experience-image-expand {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    border-radius: inherit;
    background: transparent;
    cursor: zoom-in;
  }
  .experience-image-expand svg { display: none; }
  .experience-image-expand::after {
    content: 'Click to enlarge';
    position: absolute;
    left: 50%;
    bottom: 0.75rem;
    padding: 0.3rem 0.75rem;
    transform: translate(-50%, 6px);
    border-radius: 99px;
    background: rgba(15, 23, 42, 0.72);
    color: #fff;
    font-size: 0.72rem;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
    pointer-events: none;
  }
  .experience-image-expand:hover::after,
  .experience-image-expand:focus-visible::after { opacity: 1; transform: translate(-50%, 0); }
  .experience-image-expand:focus-visible,
  .experience-lightbox-close:focus-visible {
    outline: 3px solid #a5b4fc;
    outline-offset: 3px;
  }
  .experience-image-expand svg,
  .experience-lightbox-close svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  .experience-metrics {
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    gap: 0 !important;
    padding: 1.25rem !important;
    border-radius: 0.75rem;
    align-content: start;
  }
  .experience-metrics > * {
    box-sizing: border-box;
    min-width: 0;
  }
  .experience-metrics > .experience-metric-tile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.375rem;
    padding: 0.75rem 1rem !important;
    border: 0 !important;
    border-left: 1px solid rgba(100, 116, 139, 0.24) !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  .experience-metrics > .experience-metric-tile:first-child {
    border-left: 0 !important;
  }
  .experience-metric-value {
    display: block;
    font-size: 1rem !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
  }
  .experience-metric-description {
    display: block;
    font-size: 0.75rem !important;
    font-weight: 400 !important;
    line-height: 1.5 !important;
  }
  #company-panel-4 .experience-metric-value {
    font-size: 1rem !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
  }
  #company-panel-4 .experience-metric-description {
    font-size: 0.625rem !important;
    font-weight: 600 !important;
    line-height: 1.45 !important;
  }
  #company-panel-4 .experience-metric-tile:last-child .experience-metric-value {
    font-size: 0.6875rem !important;
  }
  @media (min-width: 768px) {
    .experience-metrics {
      grid-template-columns: repeat(var(--experience-metric-count, 3), minmax(0, 1fr));
    }
  }
  @media (max-width: 767px) {
    .experience-metrics > .experience-metric-tile:nth-child(2n + 1) {
      border-left: 0 !important;
      border-top: 1px solid rgba(100, 116, 139, 0.24) !important;
    }
    .experience-metrics > .experience-metric-tile:nth-child(2) {
      border-top: 0 !important;
    }
  }

  /* Shared experience-panel rhythm */
  .company-stage .text-headline-lg {
    font-size: clamp(1.625rem, 2.5vw, 2rem) !important;
    line-height: 1.15 !important;
    letter-spacing: -0.025em !important;
  }
  .company-stage .text-headline-sm {
    line-height: 1.35 !important;
  }
  .company-stage > .bg-surface-container-lowest,
  .company-stage > .bg-surface-container-low\\/60 {
    border-radius: 1rem !important;
  }
  .company-stage .text-body-md {
    font-size: 0.875rem !important;
    line-height: 1.55 !important;
  }
  .company-stage .text-body-sm {
    font-size: 0.8125rem !important;
    line-height: 1.55 !important;
  }
  .company-stage h3.text-headline-sm {
    font-size: 1rem !important;
    font-weight: 800 !important;
  }
  .company-stage h4.text-body-md {
    font-size: 0.875rem !important;
    line-height: 1.35 !important;
    font-weight: 800 !important;
  }
  .company-stage h4.text-body-sm {
    font-size: 0.8125rem !important;
    line-height: 1.35 !important;
    font-weight: 800 !important;
  }
  .company-stage .rounded-xl.border {
    border-color: rgba(100, 116, 139, 0.22);
  }
  .company-stage .shadow-sm {
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.055) !important;
  }
  .company-stage [class*="grid-cols-1"] > .rounded-xl {
    transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
  }
  @media (max-width: 767px) {
    .company-stage {
      gap: 1rem;
    }
    .company-stage > .bg-surface-container-lowest,
    .company-stage > .bg-surface-container-low\\/60 {
      padding: 1.25rem !important;
    }
    .company-stage .text-headline-lg {
      font-size: 1.5rem !important;
    }
    .company-stage .experience-metrics {
      padding: 0.75rem 0.5rem !important;
    }
    .company-stage .experience-metric-value {
      font-size: 0.875rem !important;
    }
    .company-stage .experience-metric-description {
      font-size: 0.6875rem !important;
    }
  }
  .experience-lightbox {
    position: fixed;
    inset: 0;
    width: 100vw;
    max-width: none;
    height: 100vh;
    height: 100dvh;
    max-height: none;
    margin: 0;
    padding: 4.5rem 1.5rem 1.5rem;
    border: 0;
    background: transparent;
    color: #fff;
  }
  .experience-lightbox::backdrop {
    background: rgba(2, 6, 23, 0.94);
  }
  .experience-lightbox img {
    display: block;
    width: 100%;
    height: calc(100% - 2rem);
    object-fit: contain;
  }
  .experience-lightbox-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
    display: grid;
    width: 2.75rem;
    height: 2.75rem;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    cursor: pointer;
  }
  .experience-lightbox p {
    min-height: 1.25rem;
    margin: 0.25rem 3rem 0;
    color: #cbd5e1;
    font-size: 0.875rem;
    text-align: center;
  }
  .certificate-viewer {
    position: fixed;
    inset: 0;
    width: 100vw;
    max-width: none;
    height: 100vh;
    height: 100dvh;
    max-height: none;
    margin: 0;
    padding: 4.5rem clamp(0.5rem, 3vw, 1.5rem) 1rem;
    overflow: hidden;
    border: 0;
    background: transparent;
    color: #fff;
  }
  .certificate-viewer::backdrop {
    background: rgba(2, 6, 23, 0.94);
  }
  .certificate-viewer > div:first-child {
    position: absolute;
    top: 0.875rem;
    right: 1rem;
    left: 1rem;
    padding: 0;
  }
  .certificate-viewer h2 {
    color: #e2e8f0;
  }
  .certificate-viewer button {
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
  }
  .certificate-viewer-content {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
  }
  .certificate-viewer-content[hidden] {
    display: none;
  }
  .certificate-viewer-image {
    object-fit: contain;
  }
  .certificate-viewer-pdf {
    overflow: auto;
  }
  .certificate-viewer-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .certificate-viewer-gallery[hidden] {
    display: none;
  }
  .certificate-viewer-gallery img {
    flex: none;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
    background: #fff;
    cursor: zoom-in;
    user-select: none;
  }
  .certificate-viewer-gallery.is-zoomed {
    align-items: flex-start;
  }
  .certificate-viewer-gallery.is-zoomed img {
    width: min(220%, 2200px);
    max-width: none;
    max-height: none;
    cursor: zoom-out;
  }

/* Portfolio training galleries — accessible thumbnails and image viewer */
.training-doc-section{background:#fff;border:1px solid #dde3f1;border-radius:23px;padding:clamp(18px,3vw,30px);box-shadow:0 10px 28px rgba(19,27,46,.045);font-family:Inter,system-ui,sans-serif}
.training-doc-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;flex-wrap:wrap}
.training-doc-eyebrow{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.14em;color:#4f46e5}
.training-doc-heading h3{color:#172033;font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(17px,2vw,22px);font-weight:800;margin:5px 0}
.training-doc-heading p:not(.training-doc-eyebrow){color:#65708a;font-size:12px;line-height:1.5}
.training-doc-count{display:inline-flex;align-items:center;gap:6px;color:#4338ca;border:1px solid #d5d4ff;background:#f4f3ff;border-radius:999px;padding:7px 10px;font-weight:700;font-size:11px;white-space:nowrap}
.training-doc-count .material-symbols-outlined{font-size:16px}
.training-doc-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}
.training-doc-card{display:flex;flex-direction:column;overflow:hidden;text-align:left;border:1px solid #e0e4f2;background:#f9faff;border-radius:15px;cursor:zoom-in;box-shadow:0 2px 5px rgba(40,40,88,.02);transition:transform .18s,box-shadow .18s,border-color .18s;min-width:0}
.training-doc-card:hover,.training-doc-card:focus-visible{transform:translateY(-3px);border-color:#a6a4ff;box-shadow:0 10px 24px rgba(53,37,205,.13);outline:none}
.training-doc-image{position:relative;display:block;height:158px;background:#e7eaf8;overflow:hidden}
.training-doc-image img{width:100%;height:100%;object-fit:cover;object-position:center;display:block;transition:transform .25s}
.training-doc-card:hover .training-doc-image img{transform:scale(1.04)}
.training-doc-zoom{position:absolute;bottom:10px;right:10px;background:rgba(255,255,255,.94);box-shadow:0 2px 10px rgba(0,0,0,.12);color:#3d34bd;padding:8px;border-radius:11px;font-size:23px!important;min-width:36px;min-height:36px;display:flex;align-items:center;justify-content:center;}
.training-doc-copy{display:flex;flex-direction:column;align-items:flex-start;padding:13px;gap:6px;flex:1}
.training-doc-kicker{font-family:'JetBrains Mono',monospace;letter-spacing:.07em;text-transform:uppercase;font-size:9px;font-weight:700;color:#4f46e5}
.training-doc-copy strong{font-size:12px;color:#1a2540;line-height:1.35}
.training-doc-copy>span:last-child{font-size:11px;color:#59657a;line-height:1.5}
.training-doc-note{display:flex;align-items:flex-start;gap:7px;font-size:11px;line-height:1.6;color:#677088;border-top:1px solid #e8eafa;padding-top:13px;margin-top:16px}
.training-doc-note span[aria-hidden]{font-size:16px;color:#7269c4;flex-shrink:0}
.training-lightbox{position:fixed;inset:0;border:0;background:transparent;padding:16px;width:min(96vw,1120px);max-width:1120px;max-height:96dvh;color:white;outline:0}
.training-lightbox::backdrop{background:rgba(9,13,32,.90);backdrop-filter:blur(8px)}
.training-lightbox-shell{position:relative;display:flex;flex-direction:column;align-items:center;max-height:calc(96dvh - 32px);gap:12px}
.training-lightbox-top{display:flex;width:100%;align-items:center;justify-content:space-between;gap:12px;color:#fff}
.training-lightbox-top strong{font-size:13px;line-height:1.3}
.training-lightbox-controls{display:flex;align-items:center;gap:7px}
.training-lightbox-controls button{display:inline-flex;align-items:center;justify-content:center;border:1px solid #62677d;background:#252a42;color:#fff;border-radius:11px;width:38px;height:38px;cursor:pointer}
.training-lightbox-controls button:focus-visible{outline:2px solid #b6baff}
.training-lightbox-figure{display:flex;flex-direction:column;min-height:0;align-items:center;width:100%;gap:10px}
.training-lightbox-figure img{display:block;object-fit:contain;width:auto;max-width:100%;max-height:calc(96dvh - 158px);border-radius:8px;background:white}
.training-lightbox-figure figcaption{text-align:center;color:#d2d6eb;font-size:12px;line-height:1.5;max-width:760px}
.training-lightbox-position{font-family:'JetBrains Mono',monospace;font-size:11px;color:#cbd1ed}
@media(max-width:790px){.training-doc-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.training-doc-grid>:last-child{grid-column:1/-1}.training-doc-grid>:last-child .training-doc-image{height:190px}}
@media(max-width:480px){.training-doc-grid{grid-template-columns:1fr}.training-doc-grid>:last-child{grid-column:auto}.training-doc-image,.training-doc-grid>:last-child .training-doc-image{height:180px}.training-doc-copy{padding:12px}.training-lightbox-top strong{font-size:11px}}


.work-hero{max-width:100%}
.work-hero *{min-width:0;overflow-wrap:anywhere}
.work-hero .material-symbols-outlined{overflow-wrap:normal}
.work-hero h2{margin:0}
.work-hero p{margin:0}
@media(min-width:1024px){.work-hero-side{min-height:100%}}


.training-doc-compact .training-doc-section{border:0;box-shadow:none;padding:8px 4px 0;border-radius:0}
.training-doc-compact .training-doc-heading{margin-bottom:10px}
.training-doc-compact .training-doc-heading h3{font-size:14px}
.training-doc-compact .training-doc-image{height:112px}
.training-doc-compact .training-doc-copy{padding:10px;gap:4px}
.training-doc-compact .training-doc-note{margin-top:10px;padding-top:9px}

/* Training proof-of-work */
.ev{background:#fff;border:1px solid #e0e5f5;border-radius:12px;padding:0 16px;box-shadow:0 4px 14px rgba(19,27,46,.04);display:grid;gap:20px}
.ev-summary{position:relative;display:flex;align-items:center;gap:14px;min-height:60px;padding:10px 14px;margin:0 -16px;border-radius:12px;cursor:pointer;list-style:none;background:linear-gradient(135deg,#f5f6ff,#eefaff);transition:background .25s,box-shadow .25s,transform .25s}
.ev-summary::-webkit-details-marker{display:none}
.ev-summary:hover{box-shadow:0 8px 22px rgba(79,70,229,.14);transform:translateY(-1px)}
.ev-summary:focus-visible{outline:2px solid #6366f1;outline-offset:2px}
.ev[open] .ev-summary{margin-bottom:6px;background:linear-gradient(135deg,#eef0ff,#e6f6ff)}
.ev-sum-icon{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#4f46e5,#06b6d4);color:#fff;font-size:20px;box-shadow:0 6px 14px rgba(79,70,229,.3)}
.ev-sum-text{display:flex;flex-direction:column;min-width:0;flex:1}
.ev-sum-text strong{font:800 14.5px/1.25 'Plus Jakarta Sans',sans-serif;letter-spacing:-.015em;color:#172033}
.ev-sum-text small{margin-top:2px;font-size:11px;color:#64708f}
.ev-sum-stack{display:flex;flex:none}
.ev-sum-stack img{width:30px;height:30px;border-radius:50%;object-fit:cover;border:2px solid #fff;margin-left:-10px;box-shadow:0 2px 6px rgba(19,27,46,.18);transition:transform .25s}
.ev-sum-stack img:first-child{margin-left:0}
.ev-summary:hover .ev-sum-stack img{transform:translateY(-2px)}
.ev-sum-count{flex:none;min-width:26px;padding:4px 9px;border-radius:999px;background:#4f46e5;color:#fff;font:800 11px/1.2 'JetBrains Mono',monospace;text-align:center}
.ev-sum-cta{display:inline-flex;align-items:center;gap:6px;flex:none;padding:7px 12px;border-radius:999px;background:#fff;color:#4338ca;font-size:11px;font-weight:800;box-shadow:0 1px 3px rgba(19,27,46,.1)}
.ev-sum-cta i{font-style:normal;display:inline-block;transition:transform .3s}
.ev[open] .ev-sum-cta i{transform:rotate(180deg)}
.ev-label-close{display:none}.ev[open] .ev-label-open{display:none}.ev[open] .ev-label-close{display:inline}
.ev-content{animation:ev-open .45s cubic-bezier(.2,.7,.2,1)}
@keyframes ev-open{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
@media(max-width:560px){.ev-sum-stack{display:none}.ev-sum-cta span{display:none}.ev-sum-cta{padding:7px 10px}.ev-summary{margin:0 -12px;gap:10px}}
.ev-content{display:grid;gap:clamp(20px,2.6vw,32px)}
.ev-eyebrow{font:700 10px/1 'JetBrains Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#4f46e5;margin:0}
.ev-head h3{font:800 clamp(22px,2.6vw,30px)/1.15 'Plus Jakarta Sans',sans-serif;letter-spacing:-.025em;color:#172033;margin:10px 0 8px}
.ev-lead{max-width:62ch;font-size:14px;line-height:1.7;color:#5b6784;margin:0}
.ev-feature{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(18px,3vw,36px);align-items:center;padding:clamp(16px,2.4vw,26px);border-radius:20px;background:linear-gradient(135deg,#17234a,#2a2f7a);color:#fff;box-shadow:0 18px 40px -16px rgba(23,35,74,.6)}
.ev-feature-solo{grid-template-columns:1fr}
.ev-feature-copy{display:flex;flex-direction:column;align-items:flex-start;gap:12px;min-width:0}
.ev-badge{display:inline-flex;align-items:center;gap:8px;font:700 10px/1 'JetBrains Mono',monospace;letter-spacing:.12em;text-transform:uppercase;padding:7px 12px;border-radius:999px;background:rgba(255,255,255,.14);color:#e0e7ff}
.ev-badge i{font-style:normal;color:#fbbf24}
.ev .ev-feature h4{color:#fff;font:800 clamp(19px,2.2vw,24px)/1.25 'Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;margin:0}
.ev-feature p{font-size:13px;line-height:1.7;color:#cfd7ff;margin:0}
.ev-project-btn{display:inline-flex;align-items:center;gap:8px;margin-top:6px;padding:10px 18px;border-radius:999px;background:#fff;color:#312e81;font-size:12px;font-weight:800;text-decoration:none;box-shadow:0 6px 16px rgba(0,0,0,.12);transition:transform .18s,box-shadow .18s}
.ev-project-btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(0,0,0,.18)}
.ev-project-btn span{transition:transform .18s}.ev-project-btn:hover span{transform:translateX(3px)}
.ev-feature .ev-project-btn{background:#fff;color:#312e81}
.ev-player{position:relative;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#050b22;box-shadow:0 0 0 1px rgba(255,255,255,.14)}
.ev-player iframe,.ev-play{position:absolute;inset:0;width:100%;height:100%;border:0}
.ev-player-source-guard{position:absolute;z-index:2;top:0;right:0;width:76px;height:58px;background:transparent}
.ev-cover{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.ev-play{display:grid;place-items:center;padding:0;cursor:pointer;background:#0f1a38;color:#4f46e5}
.ev-play img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;transition:opacity .2s,transform .4s}
.ev-play:hover img{opacity:.8;transform:scale(1.03)}
.ev-play span{position:relative;display:grid;place-items:center;width:66px;height:66px;padding-left:5px;border-radius:50%;background:#fff;font-size:22px;box-shadow:0 10px 28px rgba(0,0,0,.4)}
.ev-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:190px;grid-auto-flow:dense;gap:14px}
.ev-tile{position:relative;overflow:hidden;padding:0;border:0;border-radius:18px;background:#e8ebf7;cursor:zoom-in;text-align:left;color:#fff;isolation:isolate;box-shadow:0 4px 14px rgba(19,27,46,.08);transition:transform .25s,box-shadow .25s}
.ev-tile:hover,.ev-tile:focus-visible{transform:translateY(-3px);box-shadow:0 16px 30px rgba(19,27,46,.18);outline:none}
.ev-tile:focus-visible{box-shadow:0 0 0 3px #818cf8}
.ev-tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s;z-index:-2}
.ev-tile:hover img{transform:scale(1.06)}
.ev-tile::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,16,40,0) 35%,rgba(10,16,40,.86));z-index:-1}
.ev-wide{grid-column:span 2}.ev-full{grid-column:1/-1}.ev-tall{grid-row:span 2}
.ev-caption{position:absolute;left:0;right:0;bottom:0;display:flex;flex-direction:column;gap:3px;padding:16px}
.ev-kicker{font:700 9px/1 'JetBrains Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#a5b4fc}
.ev-caption strong{font:800 14px/1.3 'Plus Jakarta Sans',sans-serif}
.ev-text{font-size:11px;line-height:1.5;color:#dbe1f7;max-height:0;opacity:0;overflow:hidden;transition:max-height .3s,opacity .3s}
.ev-tile:hover .ev-text,.ev-tile:focus-visible .ev-text{max-height:60px;opacity:1}
.ev-count{position:absolute;top:12px;left:12px;padding:5px 10px;border-radius:999px;background:rgba(15,23,42,.72);font:700 10px/1 'JetBrains Mono',monospace;backdrop-filter:blur(4px)}
.ev-docs{padding-top:clamp(4px,1vw,10px)}
.ev-docs-title{font:700 10px/1 'JetBrains Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#64708f;margin:0 0 14px}
.ev-docs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}
.ev-doc{display:flex;align-items:center;gap:14px;padding:16px 18px;border:1px solid #dfe4f4;border-radius:16px;background:#fff;text-align:left;cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .2s}
.ev-doc:hover,.ev-doc:focus-visible{border-color:#a5b4fc;box-shadow:0 10px 24px rgba(79,70,229,.12);transform:translateY(-2px);outline:none}
.ev-doc-icon{display:grid;place-items:center;flex:none;width:44px;height:44px;border-radius:12px;background:#eef0ff;color:#4f46e5;font-size:24px}
.ev-doc strong{display:block;font-size:13px;font-weight:800;color:#172033}
.ev-doc small{display:block;margin-top:2px;font-size:11px;line-height:1.45;color:#64708f}
.ev-doc-open{margin-left:auto;flex:none;font-size:11px;font-weight:800;color:#4f46e5}
.ev-note{margin:0;font-size:11px;color:#7b86a3}
@media(max-width:900px){.ev-full{grid-column:1/-1}.ev-grid{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:170px}.ev-feature{grid-template-columns:minmax(0,1fr)}.ev-text{max-height:60px;opacity:1}}
@media(max-width:560px){.ev{padding:0 12px;border-radius:10px}.ev-grid{gap:10px;grid-auto-rows:150px}.ev-caption{padding:12px}.ev-caption strong{font-size:12.5px}.ev-text{display:none}.ev-docs-grid{grid-template-columns:1fr}}
.ev-project-btn{background:#312e81;color:#fff}


/* Telkom artifact studio */
.tas{display:grid;gap:14px;padding:clamp(14px,2vw,20px);border-radius:20px;background:linear-gradient(180deg,#f7f8ff,#fff);border:1px solid #e0e5f5}
.tas-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.tas-title{display:inline-flex;align-items:center;gap:8px;font:800 12px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#172033}
.tas-title .material-symbols-outlined{font-size:18px;color:#4f46e5}
.tas-count{font:700 11px/1 'JetBrains Mono',monospace;color:#64708f;padding:5px 9px;border-radius:999px;background:#eef0ff}
.tas-controls{margin-left:auto;display:flex;align-items:center;gap:8px}
.tas-btn{display:inline-flex;align-items:center;gap:6px;height:34px;min-width:34px;justify-content:center;padding:0 10px;border:1px solid #d5dbf1;border-radius:10px;background:#fff;color:#312e81;font-size:11px;font-weight:800;cursor:pointer;transition:transform .2s,box-shadow .2s,background .2s;animation:tas-pop .35s cubic-bezier(.2,.8,.2,1)}
.tas-btn:hover{transform:translateY(-1px);box-shadow:0 6px 14px rgba(79,70,229,.16);background:#f4f5ff}
.tas-btn .material-symbols-outlined{font-size:18px}
.tas-next{background:#312e81;border-color:#312e81;color:#fff}.tas-next:hover{background:#3b3799}
.tas-return{background:linear-gradient(135deg,#4f46e5,#06b6d4);border:0;color:#fff;padding:0 14px}.tas-return:hover{background:linear-gradient(135deg,#4338ca,#0891b2)}
@keyframes tas-pop{from{opacity:0;transform:translateX(8px) scale(.94)}to{opacity:1;transform:none}}
.tas-stage{position:relative;margin:0;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#0f172a;box-shadow:0 18px 40px -20px rgba(19,27,46,.5)}
.tas-backdrop{position:absolute;inset:-8%;width:116%;height:116%;object-fit:cover;filter:blur(26px) saturate(1.2);opacity:.55;transform:scale(1.05)}
.tas-view{position:absolute;inset:0;display:grid;place-items:center;padding:14px;border:0;background:transparent;cursor:zoom-in}
.tas-image{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:10px;box-shadow:0 14px 34px rgba(0,0,0,.35);animation:tas-in .5s cubic-bezier(.2,.7,.2,1)}
@keyframes tas-in{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}
.tas-tag{position:absolute;top:12px;left:12px;padding:6px 11px;border-radius:999px;background:rgba(15,23,42,.78);backdrop-filter:blur(6px);color:#e0e7ff;font:700 10px/1 'JetBrains Mono',monospace;letter-spacing:.1em;text-transform:uppercase}
.tas-zoom{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:grid;place-items:center;padding:5px 12px;border-radius:99px;background:rgba(15,23,42,.72);color:#fff;font-size:12px;pointer-events:none;opacity:0;transition:opacity .2s}
.tas-stage:hover .tas-zoom{opacity:1}
.tas-caption{animation:tas-in .45s cubic-bezier(.2,.7,.2,1)}
.tas-caption h4{margin:0 0 4px;font:800 16px/1.3 'Plus Jakarta Sans',sans-serif;letter-spacing:-.015em;color:#172033}
.tas-caption p{margin:0;max-width:70ch;font-size:13px;line-height:1.7;color:#5b6784}
.tas-rail{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 8px;scroll-snap-type:x proximity;scrollbar-width:thin}
.tas-thumb{flex:none;width:96px;aspect-ratio:16/10;padding:0;border:2px solid transparent;border-radius:10px;overflow:hidden;background:#e8ebf7;cursor:pointer;opacity:.62;scroll-snap-align:center;transition:opacity .25s,transform .25s,border-color .25s}
.tas-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.tas-thumb:hover{opacity:1;transform:translateY(-2px)}
.tas-thumb.is-active{opacity:1;border-color:#4f46e5;box-shadow:0 6px 16px rgba(79,70,229,.28)}
.tas-zoom-dialog{border:0;padding:0;width:100vw;max-width:none;height:100dvh;max-height:none;background:rgba(2,6,23,.94);overflow:auto}
.tas-zoom-dialog::backdrop{background:rgba(2,6,23,.9)}
.tas-zoom-dialog[open]{display:flex;align-items:flex-start;justify-content:center;animation:tas-in .3s ease}
.tas-zoom-dialog img{display:block;max-width:min(100%,1500px);height:auto;margin:56px auto 24px;border-radius:8px}
.tas-zoom-close{position:fixed;top:14px;right:18px;z-index:3;width:42px;height:42px;border:1px solid rgba(255,255,255,.35);border-radius:50%;background:rgba(15,23,42,.8);color:#fff;font-size:24px;line-height:1;cursor:pointer}
.tas-divider{display:flex;align-items:center;gap:14px;margin:4px 0;color:#64708f;font:700 10px/1 'JetBrains Mono',monospace;letter-spacing:.14em;text-transform:uppercase}
.tas-divider::before,.tas-divider::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,#d9def0,transparent)}
@media(max-width:640px){.tas-stage{aspect-ratio:4/3}.tas-thumb{width:76px}.tas-return{padding:0 10px}}

/* Smooth tab and panel changes */
.inaproc-tab{transition:background .25s,color .25s,box-shadow .25s}
.inaproc-tab-content:not(.hidden),.company-stage:not(.hidden){animation:work-fade .45s cubic-bezier(.2,.7,.2,1)}
@keyframes work-fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}

/* Certificate card */
.cert-card{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:clamp(16px,2.4vw,28px);align-items:center;padding:clamp(18px,2.6vw,28px);border-radius:20px;border:1px solid #e0e5f5;background:linear-gradient(135deg,#fffaf0,#f4f5ff 55%,#eefaff);box-shadow:0 12px 30px -18px rgba(19,27,46,.35);transition:transform .3s,box-shadow .3s}
.cert-card:hover{transform:translateY(-2px);box-shadow:0 18px 38px -18px rgba(79,70,229,.4)}
.cert-card-badge{display:grid;place-items:center;width:64px;height:64px;border-radius:20px;background:linear-gradient(135deg,#f59e0b,#f97316);color:#fff;box-shadow:0 10px 22px rgba(249,115,22,.35)}
.cert-card-badge .material-symbols-outlined{font-size:32px}
.cert-card-eyebrow{margin:0 0 6px;font:700 10px/1 'JetBrains Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#b45309}
.cert-card h3{margin:0 0 8px;font:800 clamp(17px,2vw,21px)/1.25 'Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;color:#172033}
.cert-card-body>p:not(.cert-card-eyebrow){margin:0 0 12px;max-width:68ch;font-size:13px;line-height:1.7;color:#5b6784}
.cert-card-points{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0;list-style:none}
.cert-card-points li{display:flex;gap:8px;align-items:baseline;padding:7px 12px;border-radius:999px;background:#fff;border:1px solid #e3e7f5;font-size:11.5px;color:#475270}
.cert-card-points strong{font:800 9.5px/1 'JetBrains Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#4f46e5}
.cert-card-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border:0;border-radius:999px;background:#312e81;color:#fff;font-size:12px;font-weight:800;cursor:pointer;box-shadow:0 8px 18px rgba(49,46,129,.3);transition:transform .2s,background .2s}
.cert-card-btn:hover{transform:translateY(-2px);background:#3b3799}
.cert-card-btn .material-symbols-outlined{font-size:18px}
@media(max-width:760px){.cert-card{grid-template-columns:auto minmax(0,1fr)}.cert-card-btn{grid-column:1/-1;justify-content:center}.cert-card-badge{width:52px;height:52px;border-radius:16px}}
`;

export const META = {
  title: "Work Experience",
  htmlClass: "scroll-smooth",
  bodyClass: "bg-background text-on-surface font-body-md antialiased selection:bg-primary/15 selection:text-primary min-h-screen flex flex-col",
  tailwindConfig: TAILWIND_CONFIG,
  css: PAGE_CSS,
  cssId: "work",
};
