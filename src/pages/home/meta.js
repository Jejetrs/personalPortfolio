/* Page metadata */
export const TAILWIND_CONFIG = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#3525cd",
            "primary-container": "#4f46e5",
            "on-primary-container": "#dad7ff",
            surface: "#faf8ff",
            "surface-subtle": "#f2f3ff",
            "surface-card": "#ffffff",
            "on-surface": "#131b2e",
            "on-surface-variant": "#464555",
            "outline-soft": "#e2e7ff",
            secondary: "#00687a",
            "secondary-container": "#57dffe",
            tertiary: "#005338"
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
            handwriting: ['Caveat', 'cursive']
          },
          boxShadow: {
            'elevated': '0 8px 32px rgba(0, 0, 0, 0.04)',
            'elevated-hover': '0 18px 36px -4px rgba(79, 70, 229, 0.12), 0 6px 16px -2px rgba(15, 23, 42, 0.04)',
            'glow-primary': '0 0 25px rgba(79, 70, 229, 0.25)'
          },
          keyframes: {
            'float-slow': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-8px)' },
            },
            'dash-flow': {
              'to': { strokeDashoffset: '-40' }
            }
          },
          animation: {
            'float': 'float-slow 5s ease-in-out infinite',
            'dash': 'dash-flow 3s linear infinite'
          }
        }
      }
    };

export const PAGE_CSS = `
@keyframes flowWaveDash {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -180; }
}
@keyframes wavePulseGlow {
  0%, 100% { opacity: 0.42; }
  50% { opacity: 0.82; }
}
@keyframes waveSignalSweep {
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
}
@keyframes waveVectorTravel {
  0% { offset-distance: 0%; opacity: 0; }
  8% { opacity: 1; }
  92% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}
@keyframes lastEventPanelEnter {
  from {
    opacity: 0;
    transform: translateX(2rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes lastEventOverlayExit {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(calc(-50% + var(--last-event-viewport-width, 100vw)));
  }
}
.about-portrait-frame {
  width: 100%;
  max-width: clamp(280px, 30vw, 390px);
}
.animate-wave-flow {
  stroke-dasharray: 3 13;
  animation: flowWaveDash 20s linear infinite;
}
.animate-wave-glow {
  animation: wavePulseGlow 5s ease-in-out infinite;
}
.animate-wave-signal {
  stroke-dasharray: 110 890;
  animation: waveSignalSweep 6s linear infinite;
}
.animate-wave-vector {
  offset-path: path("M 108 34.56 C 193.5 34.56, 193.5 111.36, 279 111.36 C 364.5 111.36, 364.5 34.56, 450 34.56 C 535.5 34.56, 535.5 111.36, 621 111.36 C 706.5 111.36, 706.5 34.56, 792 34.56");
  offset-anchor: 0px 0px;
  offset-rotate: auto;
  animation: waveVectorTravel 6.5s linear 0.8s infinite;
}
@media (prefers-reduced-motion: reduce) {
  .animate-wave-flow,
  .animate-wave-glow,
  .animate-wave-signal {
    animation: none !important;
  }
  .animate-wave-beacon,
  .animate-wave-vector {
    display: none;
  }
  .last-event-detail-panel {
    animation: none !important;
  }
  #last-event-detail.is-closing {
    animation: none !important;
  }
}


.project-card-item img.zoomable-img{cursor:zoom-in}
/* Developer cards */
:is(#openmusic-api-project-card){--dvn:#1d4ed8;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}
:is(#openmusic-api-project-card) .project-card-header{padding-bottom:.75rem!important;margin-bottom:.75rem!important}
:is(#openmusic-api-project-card) .project-card-header>div:first-child>span:first-child{width:1.5rem!important;height:1.5rem!important;font-size:.75rem!important;font-weight:700!important;box-shadow:0 1px 2px rgba(0,0,0,.05)}
:is(#openmusic-api-project-card) .project-card-header span.rounded-full{box-shadow:0 1px 2px rgba(0,0,0,.05)}
:is(#openmusic-api-project-card) .project-card-header a{box-shadow:0 1px 2px rgba(0,0,0,.05)!important;font-weight:600!important}
#bookshelf-api-project-card .project-card-header > .bk-chips{flex:1 1 auto!important;justify-content:flex-start!important;margin-left:0!important}
#openmusic-api-project-card .om-details-toggle{display:inline-flex;align-items:center;gap:.375rem;background:#1853aa;color:#fff;border-radius:.75rem;padding:.45rem .95rem;font-size:.75rem;font-weight:600;line-height:1.25rem;box-shadow:0 1px 2px rgba(0,0,0,.05);transition:background .2s}
#openmusic-api-project-card .om-details-toggle:hover{background:#1e40af}
:is(#openmusic-api-project-card) h2{color:#0f172a}
:is(#bookshelf-api-project-card) h2+p,#openmusic-api-project-card .om-eyebrow{font-size:.75rem!important;font-weight:700!important;letter-spacing:.05em!important;text-transform:uppercase;margin-top:.25rem!important;line-height:1.5}
:is(#bookshelf-api-project-card) h2+p+p,#openmusic-api-project-card .om-copy{font-size:.75rem!important;line-height:1.625!important;color:#334155!important;margin-top:.75rem!important;font-weight:400}
@media(min-width:640px){:is(#bookshelf-api-project-card) h2+p+p,#openmusic-api-project-card .om-copy{font-size:.875rem!important}}
/* metric tiles */
:is(#bookshelf-api-project-card) h2+p+p+div.grid{gap:.375rem!important;margin-top:.75rem!important}
:is(#bookshelf-api-project-card) h2+p+p+div.grid>div,#openmusic-api-project-card .om-stat{border-radius:.75rem!important;padding:.5rem!important;min-height:0!important;text-align:center;box-shadow:0 1px 2px rgba(0,0,0,.05);gap:0!important}
:is(#bookshelf-api-project-card) h2+p+p+div.grid>div small,#openmusic-api-project-card .om-stat span{display:block;margin:0!important;font-size:9px!important;font-weight:700!important;text-transform:uppercase;letter-spacing:.05em!important;color:#94a3b8!important;line-height:1.25}
:is(#bookshelf-api-project-card) h2+p+p+div.grid>div strong,#openmusic-api-project-card .om-stat b{display:block;margin:0!important;font-size:.75rem!important;font-weight:800!important;line-height:1.5}
/* inner panels */
:is(#bookshelf-api-project-card) :is([class*="rounded-[15px]"],[class*="rounded-[14px]"],[class*="rounded-[13px]"]),#openmusic-api-project-card .om-panel,#openmusic-api-project-card .om-note{border-radius:.75rem!important;box-shadow:0 1px 2px rgba(0,0,0,.05)}
:is(#openmusic-api-project-card) :is(h3){font-size:11px!important;font-weight:700!important;color:#1e293b!important;margin-bottom:.5rem!important;line-height:1.4}
:is(#bookshelf-api-project-card) h3>span{font-size:13px!important}
:is(#openmusic-api-project-card) :is(li,dd,dt){font-size:10px!important;line-height:1.45!important}
#openmusic-api-project-card .om-gallery,#openmusic-api-project-card .om-details-grid section{border-radius:.75rem}
#openmusic-api-project-card .om-gallery{box-shadow:0 1px 2px rgba(0,0,0,.05)}
/* Dropdown */
:is(#openmusic-api-project-card) summary{padding:.625rem .875rem;border-radius:.75rem;font-size:.75rem;font-weight:700;box-shadow:0 1px 2px rgba(0,0,0,.05)}
#smart-focus-alert-developer-card .title{text-decoration:none!important;border-bottom:0!important;box-shadow:none!important}
/* Developer card layout */
.dev-top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem .75rem;margin:0 0 .75rem!important;width:100%}
.dev-tags{display:flex;flex:1 1 auto;flex-wrap:wrap;align-items:center;gap:.5rem;min-width:0}
.dev-num{display:inline-grid;place-items:center;width:24px;height:24px;flex:none;border-radius:9999px;background:var(--dev-acc);color:#fff;font-size:12px;font-weight:700;line-height:1;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.dev-switch{display:inline-flex;align-items:center;gap:.5rem;padding:.2rem .75rem .2rem .625rem;border-radius:9999px;border:1px solid #e2e8f0;background:#ffffffcc;color:#64748b;font-size:.75rem;font-weight:600;line-height:1.15rem;pointer-events:none;user-select:none;cursor:default;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.dev-switch-label{color:#334155}
.dev-switch-track{position:relative;display:inline-block;width:28px;height:16px;border-radius:9999px;background:#cbd5e1;transition:background .25s}
.dev-switch-track i{position:absolute;top:2px;left:2px;width:12px;height:12px;border-radius:9999px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .25s}
.dev-switch[data-state=live]{border-color:#a7f3d0;background:#ecfdf5;color:#047857}.dev-switch[data-state=live] .dev-switch-track{background:#10b981}.dev-switch[data-state=live] .dev-switch-track i{transform:translateX(12px)}
.dev-switch[data-state=offline],.dev-switch[data-state=none]{border-color:#fecaca;background:#fef2f2;color:#b91c1c}.dev-switch[data-state=offline] .dev-switch-track,.dev-switch[data-state=none] .dev-switch-track{background:#f87171}
.dev-switch[data-state=checking] .dev-switch-track{animation:devsw 1s ease-in-out infinite}
@keyframes devsw{50%{opacity:.45}}
.dev-switch[hidden],.dev-btn[hidden],[data-live-link][hidden]{display:none!important}
.nt .nt-live-off{position:absolute;inset:0;display:grid;place-content:center;gap:4px;text-align:center;padding:24px;background:#f8fafc;color:#64748b;font-size:12px}.nt .nt-live-off b{color:#334155;font-size:13px}
.dev-tag{font-size:.75rem;font-weight:600;line-height:1.15rem;padding:.25rem .75rem;border-radius:9999px;color:var(--dev-acc);background:#ffffffcc;border:1px solid var(--dev-line);box-shadow:0 1px 2px rgba(0,0,0,.05)}
.dev-tag.role{background:#ffffffcc;background:color-mix(in srgb,var(--dev-acc) 10%,#fff)}
.dev-actions{display:flex;flex:0 0 auto;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:.5rem;margin-left:auto}
.dev-btn{display:inline-flex;align-items:center;gap:.375rem;font-family:inherit;font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.45rem .95rem;border-radius:.75rem;border:1px solid transparent;cursor:pointer;text-decoration:none!important;white-space:nowrap;box-shadow:0 1px 2px rgba(0,0,0,.05);transition:background .2s,filter .2s}
.dev-btn.solid{background:var(--dev-acc);color:#fff!important}.dev-btn.solid:hover{filter:brightness(.9)}
.dev-btn.ghost{background:#fffffff2;color:var(--dev-acc)!important;border-color:var(--dev-line)}.dev-btn.ghost:hover{background:#fff;filter:brightness(.97)}
#about-project-detail .project-card-item:is(.nt,.bk,.nu,.sf,.openmusic-card){overflow:hidden}
.dev-dd .project-dropdown-toggle{padding:.25rem .5rem}
.dev-dd .dd-title{display:flex;min-width:0;align-items:center;gap:.5rem}
.dev-dd .dd-icon{flex:none;color:var(--dev-acc);font-size:.75rem}
.dev-dd .dd-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.75rem;font-weight:600;color:#0f172a}
.dev-dd .dd-act{display:flex;flex:none;align-items:center;gap:.375rem;font-size:.75rem;font-weight:500;color:#64748b}
.dev-dd .dev-badge{display:none}
@media(min-width:640px){.dev-dd .dev-badge{display:inline-flex}}
.dev-dd .accordion-chevron{display:inline-block;transition:transform .3s cubic-bezier(.4,0,.2,1)}
.dev-dd .project-dropdown-toggle[aria-expanded="true"] .accordion-chevron{transform:rotate(180deg)}
.dev-dd .dev-dd-body{padding-top:.75rem}.dev-dd .dev-dd-body[hidden]{display:none}
.dev-dd .om-details-grid{margin:0}
/* Developer card typography */
:is(#smart-focus-alert-developer-card,#nusca-developer-project-card,#bookshelf-api-project-card,#notes-application-project-card,#openmusic-api-project-card,#leadsight-project-card,#movie-review-project-card){font-family:inherit;font-size:12px;line-height:1.5}
:is(#smart-focus-alert-developer-card,#nusca-developer-project-card,#bookshelf-api-project-card,#notes-application-project-card,#openmusic-api-project-card,#leadsight-project-card,#movie-review-project-card) :is(button,input,textarea,a){font-family:inherit}
/* Developer titles */
:is(#smart-focus-alert-developer-card,#nusca-developer-project-card,#bookshelf-api-project-card,#notes-application-project-card,#openmusic-api-project-card,#leadsight-project-card,#movie-review-project-card) :is(h1,h2) , :is(#smart-focus-alert-developer-card,#nusca-developer-project-card,#bookshelf-api-project-card,#notes-application-project-card,#openmusic-api-project-card,#leadsight-project-card,#movie-review-project-card) :is(h1,h2) *{text-decoration:none!important;text-decoration-line:none!important;border-bottom:0!important;box-shadow:none!important;background-image:none!important}
:is(#smart-focus-alert-developer-card,#nusca-developer-project-card,#bookshelf-api-project-card,#notes-application-project-card,#openmusic-api-project-card,#leadsight-project-card,#movie-review-project-card) :is(h1,h2)::before,:is(#smart-focus-alert-developer-card,#nusca-developer-project-card,#bookshelf-api-project-card,#notes-application-project-card,#openmusic-api-project-card,#leadsight-project-card,#movie-review-project-card) :is(h1,h2)::after,:is(#smart-focus-alert-developer-card,#nusca-developer-project-card,#bookshelf-api-project-card,#notes-application-project-card,#openmusic-api-project-card,#leadsight-project-card,#movie-review-project-card) :is(h1,h2) *::after{content:none!important;display:none!important}
:is(#smart-focus-alert-developer-card .overview,#smart-focus-alert-developer-card .hero)::after{content:none!important}


/* Previous events */
#last-events .event-photo-feature{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(230px,.8fr);overflow:hidden;gap:0;border:1px solid #d8e1f2;border-radius:1.1rem;background:#fff;box-shadow:0 8px 26px rgba(15,23,42,.045)}
#last-events .event-photo-feature-media{position:relative;min-width:0;min-height:215px}
#last-events .event-photo-feature-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:.65rem;padding:1.35rem 1.5rem}
#last-events .event-photo-feature-copy h4{color:#172033;font-size:clamp(1rem,2vw,1.25rem);line-height:1.3;font-weight:800;letter-spacing:-.02em}
#last-events .event-photo-feature-copy p{font-size:.78rem;color:#475569;line-height:1.65}
#last-events .event-photo-feature-hint{font-size:.69rem;color:#64748b;line-height:1.6;border-left:3px solid #a5b4fc;padding-left:.7rem}
#last-events .event-proof-corner{position:absolute;top:13px;left:13px;z-index:1;color:#3730a3;background:rgba(255,255,255,.87);border:1px solid rgba(165,180,252,.7);border-radius:99px;padding:.35rem .6rem;font:800 .6rem 'JetBrains Mono',monospace;letter-spacing:.05em;pointer-events:none}
#last-events .event-role-card--with-photo{display:flex;flex-direction:column;align-items:stretch;min-height:390px;padding:.65rem;gap:.2rem;overflow:hidden;transition:box-shadow .2s,border-color .2s}
#last-events .event-role-card--with-photo:hover{border-color:#c7d2fe;box-shadow:0 8px 20px rgba(67,56,202,.08)}
#last-events .event-role-card--with-photo .event-role-index{padding:.55rem .45rem 0}
#last-events .event-role-card--with-photo h5{margin:.3rem .45rem .35rem}
#last-events .event-role-card--with-photo>p{margin:0 .45rem .5rem;flex:1}
#last-events .event-proof-visual{position:relative;min-width:0}
#last-events .event-proof-caption{display:flex;flex-wrap:wrap;justify-content:space-between;gap:.25rem .5rem;padding:.58rem .35rem .15rem;font-size:.68rem;color:#334155;font-weight:700}
#last-events .event-proof-caption>span{font:700 .57rem 'JetBrains Mono',monospace;letter-spacing:.06em;color:#6366f1}
#last-events .event-proof-button{position:relative;display:block;width:100%;aspect-ratio:16/10;overflow:hidden;border:1px solid #d4def2;border-radius:.75rem;background:linear-gradient(135deg,#eef2ff,#f8fafc 55%,#eff6ff);cursor:zoom-in;text-align:center;padding:0}
#last-events .event-proof-button--featured{height:100%;min-height:215px;aspect-ratio:auto;border:0;border-radius:0;background:linear-gradient(135deg,#e0e7ff,#f1f5f9 48%,#dbeafe)}
#last-events .event-story[data-event-panel="asah"] .event-proof-button{background:linear-gradient(130deg,#ecfeff,#f8fafc 65%,#dbeafe)}
#last-events .event-story[data-event-panel="arkavidia"] .event-proof-button{background:linear-gradient(130deg,#f5f3ff,#fdf2f8 65%,#eef2ff)}
#last-events .event-proof-button::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 15% 22%,rgba(99,102,241,.17),transparent 38%),linear-gradient(120deg,transparent 47%,rgba(148,163,184,.08) 48% 52%,transparent 53%);pointer-events:none}
#last-events .event-proof-button:disabled{cursor:default}
#last-events .event-proof-button:focus-visible{outline:3px solid #6366f1;outline-offset:3px}
#last-events .event-proof-button.is-loaded{background:#e2e8f0}
#last-events .event-proof-button.is-loaded::before{display:none}
#last-events .event-proof-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
#last-events .event-proof-image[hidden]{display:none}
#last-events .event-proof-placeholder{position:relative;z-index:1;display:flex;min-height:100%;height:100%;align-items:center;justify-content:center;flex-direction:column;gap:.35rem;padding:1rem;color:#4338ca}
#last-events .event-proof-placeholder[hidden]{display:none}
#last-events .event-proof-placeholder strong{font-family:'Plus Jakarta Sans',sans-serif;color:#253155;font-size:.76rem;font-weight:800;line-height:1.35}
#last-events .event-proof-placeholder small{font-size:.61rem;font-weight:500;color:#64748b}
#last-events .event-proof-placeholder-label{font:800 .52rem 'JetBrains Mono',monospace;letter-spacing:.1em;color:#6366f1}
#last-events .event-proof-symbol{display:grid;place-items:center;width:40px;height:40px;border-radius:13px;border:1px solid #c7d2fe;background:rgba(255,255,255,.85);box-shadow:0 6px 18px rgba(67,56,202,.09)}
#last-events .event-proof-symbol svg{width:20px;height:20px}
#last-events .event-proof-button--featured .event-proof-placeholder strong{font-size:.95rem}
#last-events .event-proof-button--featured .event-proof-symbol{width:53px;height:53px;border-radius:17px}
#last-events .event-proof-button--featured .event-proof-symbol svg{width:26px;height:26px}
#last-events .event-proof-expand{position:absolute;z-index:3;top:10px;right:10px;display:none;place-items:center;width:34px;height:34px;background:rgba(15,23,42,.77);color:white;border:1px solid rgba(255,255,255,.65);border-radius:10px;pointer-events:none}
#last-events .event-proof-carousel{position:relative}
#last-events .event-proof-next{position:absolute;z-index:4;right:10px;bottom:10px;border:1px solid rgba(255,255,255,.7);border-radius:999px;background:rgba(15,23,42,.8);color:white;padding:.35rem .7rem;font:700 .65rem 'JetBrains Mono',monospace;cursor:pointer}
#last-events .event-proof-expand svg{width:17px;height:17px}
#last-events .event-proof-button.is-loaded .event-proof-expand{display:grid}
#last-events .event-cover-real-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;opacity:.75}
#last-events .event-cover-real-image[hidden]{display:none}
#last-events .event-cover.has-real-image .event-cover-grain{z-index:1;background:linear-gradient(0deg,rgba(12,18,45,.94),rgba(12,18,45,.18) 77%)}
#last-events .event-cover.has-real-image .event-cover-content{z-index:2}
.event-proof-lightbox{position:fixed;inset:0;width:min(96vw,1180px);height:min(95dvh,900px);max-width:none;max-height:none;padding:1rem;border:1px solid rgba(255,255,255,.25);border-radius:1.1rem;background:#0f172a;color:white;margin:auto}
.event-proof-lightbox::backdrop{background:rgba(4,9,22,.94);backdrop-filter:blur(8px)}
.event-proof-lightbox-top{display:flex;gap:1rem;align-items:center;justify-content:space-between;margin-bottom:.7rem}
.event-proof-lightbox-top strong{font-size:.88rem;font-weight:800;min-width:0}
.event-proof-lightbox-actions{display:flex;align-items:center;gap:.4rem}
.event-proof-lightbox-actions button{display:grid;place-items:center;min-width:38px;height:38px;border:1px solid rgba(255,255,255,.32);border-radius:10px;background:rgba(255,255,255,.1);color:white;font-size:1.25rem;cursor:pointer}
.event-proof-lightbox-actions button:disabled{opacity:.3;cursor:not-allowed}
.event-proof-lightbox-actions button:focus-visible{outline:3px solid #a5b4fc;outline-offset:2px}
.event-proof-lightbox-img{width:100%;height:calc(100% - 114px);display:block;object-fit:contain;border-radius:.5rem}
.event-proof-lightbox-caption{font-size:.75rem;color:#cbd5e1;line-height:1.5;margin-top:.6rem;text-align:center}
@media(max-width:800px){#last-events .event-photo-feature{grid-template-columns:1fr}#last-events .event-photo-feature-media{min-height:235px}#last-events .event-proof-button--featured{min-height:235px;aspect-ratio:16/8}#last-events .event-photo-feature-copy{padding:1rem 1.2rem}#last-events .event-role-grid{grid-template-columns:1fr}#last-events .event-role-card--with-photo{display:grid;grid-template-columns:minmax(110px,40%) 1fr;grid-template-rows:repeat(3,auto);column-gap:1rem;align-content:start;min-height:0;padding:.75rem}#last-events .event-proof-visual{grid-column:1;grid-row:1 / span 3}#last-events .event-role-card--with-photo .event-role-index{grid-column:2;grid-row:1;padding:0;margin:0}#last-events .event-role-card--with-photo h5{grid-column:2;grid-row:2;margin:.35rem 0}#last-events .event-role-card--with-photo>p{grid-column:2;grid-row:3;margin:0}#last-events .event-proof-caption{font-size:.64rem}}
@media(max-width:470px){#last-events .event-role-card--with-photo{grid-template-columns:1fr}#last-events .event-proof-visual,#last-events .event-role-card--with-photo .event-role-index,#last-events .event-role-card--with-photo h5,#last-events .event-role-card--with-photo>p{grid-column:1;grid-row:auto}#last-events .event-role-card--with-photo .event-role-index{margin:.45rem .25rem 0}#last-events .event-role-card--with-photo h5{margin:.15rem .25rem}#last-events .event-role-card--with-photo>p{margin:0 .25rem .35rem}#last-events .event-proof-button{aspect-ratio:16/9}#last-events .event-photo-feature-media{min-height:185px}#last-events .event-proof-button--featured{min-height:185px}}
@media(prefers-reduced-motion:reduce){#last-events .event-role-card--with-photo{transition:none}}


    .bg-grid-pattern {
      background-size: 32px 32px;
      background-image: 
        linear-gradient(to right, rgba(79, 70, 229, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(79, 70, 229, 0.035) 1px, transparent 1px);
    }
    .about-summary-grid {
      position: relative;
      isolation: isolate;
    }
    .about-summary-grid::before {
      position: absolute;
      z-index: -1;
      inset: -1rem -0.75rem;
      border-radius: 1.25rem;
      background: rgba(247, 248, 252, 0.5);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
      content: "";
      mask-image: linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent);
      pointer-events: none;
    }
    .card-lift {
      transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .card-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 32px -4px rgba(79, 70, 229, 0.09), 0 4px 12px -2px rgba(15, 23, 42, 0.04);
    }
    .scroll-reveal {
      opacity: 0;
      translate: 0 24px;
      transition:
        opacity 650ms cubic-bezier(0.2, 0.8, 0.2, 1),
        translate 650ms cubic-bezier(0.2, 0.8, 0.2, 1);
      transition-delay: var(--scroll-reveal-delay, 0ms);
      will-change: opacity, translate;
    }
    .scroll-reveal.is-visible {
      opacity: 1;
      translate: 0 0;
      will-change: auto;
    }
    .pathway-node-btn {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @media (min-width: 768px) {
      #pathway-track {
        min-width: 0 !important;
      }
      #pathway-graph {
        overflow-x: hidden !important;
      }
    }
    @media (max-width: 767px) {
      #pathway-graph {
        display: block !important;
        min-height: 0 !important;
        height: auto !important;
        overflow: visible !important;
        padding: 0 !important;
      }
      #pathway-track {
        width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 0.875rem !important;
      }
      #pathway-track > svg {
        display: none !important;
      }
      #pathway-track .pathway-node {
        position: relative !important;
        left: auto !important;
        top: auto !important;
        transform: none !important;
        width: 100%;
        min-width: 0;
        display: grid !important;
        grid-template-columns: 52px minmax(0, 1fr);
        grid-template-rows: auto auto;
        column-gap: 0.875rem;
        row-gap: 0.375rem;
        align-items: center;
        padding: 0.25rem 0;
      }
      #pathway-track .pathway-node::before {
        position: absolute;
        left: 25px;
        top: 50px;
        bottom: -0.875rem;
        width: 2px;
        background:
          linear-gradient(to bottom,
            rgba(99,102,241,.35) 0%,
            rgba(99,102,241,.95) 28%,
            rgba(20,184,166,.95) 72%,
            rgba(20,184,166,.35) 100%) 0 0 / 2px 28px repeat-y;
        box-shadow: 0 0 8px rgba(99,102,241,.35);
        content: "";
        animation: mobileLineFlow 1.15s linear infinite;
      }
      #pathway-track .pathway-node:last-child::before {
        display: none;
      }
      #pathway-track .pathway-node > [id^="callout-"] {
        position: static !important;
        top: auto !important;
        bottom: auto !important;
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0;
        min-height: 84px;
        margin: 0 !important;
        transform: none !important;
        grid-column: 2;
        grid-row: 1 / span 2;
        box-sizing: border-box;
        overflow-wrap: anywhere;
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-radius: 14px !important;
        border-color: rgba(148, 163, 184, 0.38) !important;
        background: rgba(255, 255, 255, 0.96) !important;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16) !important;
        padding: 0.875rem 1rem !important;
        opacity: 1 !important;
      }
      #pathway-track .pathway-node > [id^="callout-"] span:first-child {
        width: 100%;
        max-width: 100%;
        color: #131b2e !important;
        font-size: 0.78rem !important;
        line-height: 1.35 !important;
        white-space: normal !important;
        overflow-wrap: anywhere;
      }
      #pathway-track .pathway-node > [id^="callout-"] span:last-child {
        width: 100%;
        max-width: 100%;
        margin-top: 0.3rem;
        color: #64748b !important;
        font-size: 0.68rem !important;
        line-height: 1.45 !important;
        white-space: normal !important;
        overflow-wrap: anywhere;
      }
      #pathway-track .pathway-node > .pathway-node-btn {
        grid-column: 1;
        grid-row: 1;
        position: relative;
        z-index: 2;
        width: 48px !important;
        height: 48px !important;
        box-shadow: 0 8px 18px rgba(15, 23, 42, 0.24) !important;
      }
      #pathway-track .pathway-node > [id^="step-badge-"] {
        grid-column: 1 / span 2;
        grid-row: 2;
        width: max-content;
        max-width: none;
        margin-top: 0 !important;
        overflow: visible;
        text-overflow: clip;
        white-space: nowrap;
        font-size: 9px !important;
        justify-self: start;
        position: relative;
        z-index: 3;
        padding-inline: 0.6rem !important;
        border-radius: 9999px !important;
        box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
      }
    }
    @keyframes mobileLineFlow {
      from { background-position: 0 0; }
      to { background-position: 0 28px; }
    }
    @media (prefers-reduced-motion: reduce) {
      #pathway-track .pathway-node::before {
        animation: none !important;
      }
    }
    .hero-typewriter {
      min-height: 1.6em;
    }
    .hero-typewriter-text {
      display: inline-block;
      min-height: 1.2em;
      border-right: 2px solid currentColor;
      padding-right: 0.08em;
      animation: typewriter-caret 0.8s steps(1, end) infinite;
      vertical-align: bottom;
    }
    @keyframes typewriter-caret {
      50% { border-color: transparent; }
    }
    /* Carousel */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #honors-carousel-viewport {
      position: relative;
      height: min(58vh, 600px);
      min-height: 500px;
      overflow: hidden;
      perspective: 1400px;
      perspective-origin: 50% 50%;
      transform-style: preserve-3d;
    }
    #honors-carousel-track {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }
    #resume {
      position: relative;
      isolation: isolate;
      background: transparent !important;
      border-color: rgba(148, 163, 184, 0.2) !important;
    }
    #resume::before {
      position: absolute;
      z-index: -1;
      inset: 0 calc(-1 * var(--portfolio-page-gutter));
      background: linear-gradient(110deg, #10172d 0%, #1b2442 48%, #20213f 100%);
      content: "";
    }
    @media (min-width: 1904px) {
      #resume::before {
        right: calc(-1 * (var(--portfolio-page-gutter) + 8px));
        left: calc(-1 * (var(--portfolio-page-gutter) + 8px));
      }
    }
    @media (max-width: 640px) {
      #resume::before {
        right: -1rem;
        left: -1rem;
      }
    }
    #resume h2 {
      color: #f8fafc !important;
    }
    #resume > div > div > p,
    #resume #honors-card-counter {
      color: #cbd5e1 !important;
    }
    #resume > div > div > span {
      background: rgba(99, 102, 241, 0.16) !important;
      border-color: rgba(165, 180, 252, 0.32) !important;
      color: #c7d2fe !important;
    }
    #resume .border-t {
      border-color: rgba(148, 163, 184, 0.24) !important;
    }
    #selected-works > div > div:first-child,
    #experience > div > div:first-child,
    #design-process > div > div:first-child,
    #resume > div > div:first-child {
      margin-bottom: 1.5rem;
    }
    #selected-works {
      background: transparent !important;
    }
    #selected-works #about-project-description,
    #experience > div > div:first-child p,
    #design-process > div > div:first-child p,
    #resume > div > div:first-child p,
    #contact > div > div:first-child p {
      font-size: 0.875rem;
      line-height: 1.7;
    }
    #experience #interactive-pathway-container {
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      padding: 0;
      overflow: hidden;
    }
    #experience {
      position: relative;
      z-index: 1;
      box-sizing: border-box;
      --experience-bleed: max(1rem, 4vw);
      width: calc(100% + var(--experience-bleed) + var(--experience-bleed));
      margin-left: calc(-1 * var(--experience-bleed));
      border-radius: 6rem 6rem 0 0;
      border-bottom: 0 !important;
      background: #111827 !important;
      padding: 4rem 1rem 7rem;
      padding-bottom: 4rem !important;
    }
    #experience > div {
      width: 100%;
      max-width: none;
      margin-inline: auto;
      padding-inline: 1rem !important;
    }
    @media (min-width: 641px) {
      #experience > div {
        padding-inline: var(--portfolio-page-gutter) !important;
      }
    }
    #experience h2 {
      color: #f8fafc !important;
    }
    #experience > div > div:first-child p {
      color: #cbd5e1 !important;
    }
    #callout-0,
    #callout-2,
    #callout-4 {
      position: absolute;
      top: 0;
      bottom: auto;
      margin: 0 !important;
      transform: translateY(calc(-100% - 12px));
      z-index: 2;
    }
    #callout-1,
    #callout-3 {
      position: absolute;
      top: calc(100% + 12px);
      bottom: auto;
      margin: 0 !important;
      z-index: 2;
    }
    #pathway-graph {
      min-height: calc(290px + 5rem) !important;
      padding-top: calc(1rem + 5rem) !important;
      box-sizing: border-box;
    }
    #pathway-modal-overlay {
      position: absolute !important;
      display: block !important;
      z-index: 10;
      width: 322px !important;
      max-width: calc(100% - 24px) !important;
      padding: 0 !important;
      visibility: visible;
      background: transparent !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      transition: opacity 180ms ease, visibility 180ms ease;
    }
    #experience > #pathway-modal-overlay {
      margin: 0 !important;
      padding-inline: 0 !important;
    }
    #pathway-modal-overlay::before {
      display: none;
    }
    #pathway-modal-card {
      width: 100% !important;
      max-width: none;
      max-height: none;
      overflow: visible;
      color: #1e293b !important;
      background: #fff !important;
      border-color: #cbd5e1 !important;
      opacity: 1 !important;
      transform: translateY(4px);
      transition: transform 180ms ease;
      box-sizing: border-box;
      padding: 0.55rem;
      border-radius: 1rem;
      box-shadow: 0 16px 36px rgba(15, 23, 42, .3);
    }
    #pathway-modal-overlay.opacity-100 #pathway-modal-card {
      transform: translateY(0);
    }
    #pathway-modal-overlay.opacity-0 {
      visibility: hidden;
    }
    #modal-icon-box {
      width: 2rem;
      height: 2rem;
      border-radius: 0.65rem;
    }
    #modal-icon-box svg {
      width: 1rem;
      height: 1rem;
    }
    #modal-title {
      color: #0f172a !important;
      opacity: 1 !important;
      font-size: 0.85rem;
      font-weight: 800;
      line-height: 1.25;
    }
    #experience #pathway-modal-card #modal-phase-badge {
      opacity: 1 !important;
      font-weight: 800;
    }
    #experience #pathway-modal-card #modal-description {
      margin: 0.25rem 0 0.35rem !important;
      color: #1e293b !important;
      opacity: 1 !important;
      font-size: 0.65rem !important;
      font-weight: 600;
      line-height: 1.3 !important;
    }
    #modal-bullets {
      font-size: 0.62rem;
      line-height: 1.25;
    }
    #modal-bullets > li {
      gap: 0.45rem;
    }
    #modal-tools span {
      padding: 0.16rem 0.42rem;
      border-color: #c7d2fe;
      background: #eef2ff;
      color: #3730a3;
      font-size: 0.64rem;
      font-weight: 700;
      line-height: 1.3;
      box-shadow: inset 0 0 0 1px rgba(99, 102, 241, .04);
    }
    #modal-tools-panel {
      padding: 0.42rem;
      border: 1px solid #c7d2fe;
      border-radius: 0.7rem;
      background: linear-gradient(135deg, #f5f7ff, #eef2ff);
    }
    #modal-tools-panel h4 {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      margin: 0 0 0.35rem;
      color: #3730a3;
      font-size: 0.58rem;
      font-weight: 800;
      letter-spacing: 0.12em;
    }
    #modal-tools-panel h4::before {
      width: 0.32rem;
      height: 0.72rem;
      border-radius: 999px;
      background: #4f46e5;
      content: "";
    }
    #experience #step-counter {
      color: #cbd5e1;
    }
    #experience #interactive-pathway-container #step-badge-0,
    #experience #interactive-pathway-container #step-badge-1,
    #experience #interactive-pathway-container #step-badge-2,
    #experience #interactive-pathway-container #step-badge-3,
    #experience #interactive-pathway-container #step-badge-4 {
      flex: 0 0 auto;
      width: max-content;
      max-width: none;
      padding: 0.22rem 0.65rem;
      font-size: 0.7rem !important;
      line-height: 1.25;
      white-space: nowrap;
    }
    #experience #interactive-pathway-container #node-btn-0,
    #experience #interactive-pathway-container #step-badge-0 {
      color: #4338ca !important;
      border-color: #a5b4fc !important;
    }
    #experience #interactive-pathway-container #step-badge-0 {
      background: #eef2ff !important;
    }
    #experience #interactive-pathway-container #node-btn-1,
    #experience #interactive-pathway-container #step-badge-1 {
      color: #6d28d9 !important;
      border-color: #c4b5fd !important;
    }
    #experience #interactive-pathway-container #step-badge-1 {
      background: #f5f3ff !important;
    }
    #experience #interactive-pathway-container #node-btn-2,
    #experience #interactive-pathway-container #step-badge-2 {
      color: #0f766e !important;
      border-color: #5eead4 !important;
    }
    #experience #interactive-pathway-container #step-badge-2 {
      background: #f0fdfa !important;
    }
    #experience #interactive-pathway-container #node-btn-3,
    #experience #interactive-pathway-container #step-badge-3 {
      color: #1d4ed8 !important;
      border-color: #93c5fd !important;
    }
    #experience #interactive-pathway-container #step-badge-3 {
      background: #eff6ff !important;
    }
    #experience #interactive-pathway-container #node-btn-4,
    #experience #interactive-pathway-container #step-badge-4 {
      color: #b45309 !important;
      border-color: #fbbf24 !important;
    }
    #experience #interactive-pathway-container #step-badge-4 {
      background: #fffbeb !important;
    }
    #experience [id^="callout-"] {
      width: max-content;
      max-width: min(240px, calc(100vw - 32px));
    }
    @media (min-width: 768px) and (max-width: 1100px) {
      #experience [id^="callout-"] {
        max-width: 188px;
      }
    }
    #experience .tab-btn {
      border-radius: 0.75rem;
      font-family: "Plus Jakarta Sans", Inter, sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
    }
    #resume .honor-card > div > p.text-\\[11px\\] {
      font-size: 0.75rem;
      line-height: 1.6;
    }
    #contact a > div:last-child > span:last-child {
      font-size: 0.75rem;
      line-height: 1.5;
    }
    body > :where(#root) > main.relative.z-10 {
      padding-bottom: 1rem !important;
    }
    body > :where(#root) > main.relative.z-10 > section#contact {
      padding-bottom: 1rem !important;
    }
    #resume .honor-certificate-art {
      height: 11rem;
    }
    .honor-card {
      position: absolute;
      top: 50%;
      justify-content: flex-start !important;
      left: 50%;
      width: clamp(230px, 27vw, 390px);
      height: auto;
      min-height: 0;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: calc(clamp(230px, 27vw, 390px) / -2);
      transform-origin: center;
      transform-style: preserve-3d;
      backface-visibility: hidden;
      transition: transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 500ms ease, opacity 500ms ease;
      will-change: transform;
      cursor: pointer;
    }
    @media (max-width: 640px) {
      #honors-carousel-viewport {
        height: 48vh;
        min-height: 500px;
      }
      .honor-card {
        width: min(280px, calc(100vw - 160px));
        height: auto;
        min-height: 0;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: calc(min(280px, calc(100vw - 160px)) / -2);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-typewriter-text {
        border-right: 0;
        animation: none;
      }
      .scroll-reveal {
        opacity: 1;
        translate: none;
        transition: none;
        will-change: auto;
      }
      .honor-card {
        transition: none;
      }
    }
  

#selected-works {
      scroll-margin-top: 6rem;
    }
    .about-project-category:focus-visible,
    #about-project-dots button:focus-visible {
      outline: 3px solid #a5b4fc;
      outline-offset: 3px;
    }
    #about-project-dots button {
      width: 0.5rem;
      height: 0.5rem;
      border: 0;
      border-radius: 9999px;
      background: #cbd5e1;
      padding: 0;
    }
    #about-project-dots button[aria-current="true"] {
      width: 1.75rem;
      background: #4f46e5;
    }
    .about-project-track {
      display: flex;
      min-height: 390px;
      gap: 0.75rem;
      overflow-x: auto;
      padding: 0.5rem 0.25rem 1rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
      cursor: grab;
    }
    .about-project-track::-webkit-scrollbar {
      display: none;
    }
    .about-project-track.is-dragging {
      cursor: grabbing;
      user-select: none;
    }
    .about-project-card {
      position: relative;
      display: flex;
      width: 160px;
      min-width: 160px;
      flex: 1 0 160px;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border: 1px solid rgba(148, 163, 184, 0.32);
      border-radius: 1.5rem;
      padding: 1rem;
      color: #fff;
      text-align: left;
      transition: flex-grow 450ms cubic-bezier(0.25, 1, 0.35, 1), flex-basis 450ms cubic-bezier(0.25, 1, 0.35, 1), box-shadow 300ms ease;
    }
    .about-project-card[aria-pressed="true"] {
      flex-grow: 2.4;
      flex-basis: 500px;
      box-shadow: 0 8px 20px rgba(79, 70, 229, 0.1), 0 2px 6px rgba(23, 32, 51, 0.04);
    }
    .about-project-card:focus-visible {
      outline: 3px solid #a5b4fc;
      outline-offset: 3px;
    }
    .about-project-card img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 650ms cubic-bezier(0.25, 1, 0.35, 1);
    }
    .about-project-card:hover img,
    .about-project-card[aria-pressed="true"] img {
      transform: scale(1.04);
    }
    .about-project-card-shade {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(12, 16, 25, 0.12) 0%, rgba(12, 16, 25, 0.35) 45%, rgba(12, 16, 25, 0.94) 100%);
    }
    .about-project-card-compact,
    .about-project-card-expanded {
      position: relative;
      z-index: 1;
    }
    .about-project-card-compact {
      display: flex;
      flex: 1;
      align-items: flex-end;
      justify-content: flex-start;
      transition: opacity 180ms ease;
    }
    .about-project-card-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 100%;
      gap: 0.5rem;
      font-size: 1.125rem;
      font-weight: 800;
      line-height: 1.2;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
    }
    .about-project-card-title-icon {
      display: inline-flex;
      width: 1.5rem;
      height: 1.5rem;
      flex: 0 0 auto;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .about-project-card-title-icon svg {
      width: 1.125rem;
      height: 1.125rem;
    }
    .about-project-card-name {
      display: -webkit-box;
      min-width: 0;
      max-height: 11rem;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .about-project-card-expanded {
      display: none;
      margin-top: auto;
    }
    .about-project-card-title-row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      font-size: 1.125rem;
      font-weight: 800;
      line-height: 1.2;
    }
    .about-project-card-expanded-description {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    
.about-project-card[aria-pressed="true"] .about-project-card-compact {
      display: none;
    }
    .about-project-card[aria-pressed="true"] .about-project-card-expanded {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    @media (max-width: 640px) {
      .about-project-track {
        min-height: 310px;
      }
      .about-project-card {
        width: 120px;
        min-width: 120px;
        flex-basis: 120px;
        border-radius: 1.25rem;
        padding: 0.75rem;
      }
      .about-project-card[aria-pressed="true"] {
        flex-basis: min(72vw, 280px);
      }
      .about-project-card-title {
        gap: 0.375rem;
        font-size: 0.875rem;
      }
      .about-project-card-title-icon {
        width: 1.25rem;
        height: 1.25rem;
      }
      .about-project-card-title-icon svg {
        width: 1rem;
        height: 1rem;
      }
      .about-project-card-name {
        max-height: 9rem;
      }
      .about-project-card-title-row {
        gap: 0.375rem;
        font-size: 0.875rem;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .about-project-card,
      .about-project-card img,
      .about-project-card-compact {
        transition: none;
      }
    }
    #design-process .process-step-card {
      position: relative;
      display: flex;
      min-width: 0;
      align-self: stretch;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid var(--portfolio-border, #e3e8f2);
      border-radius: var(--portfolio-radius, 1.25rem);
      background: var(--portfolio-surface, #fff);
      padding: 1.25rem;
      box-shadow: var(--portfolio-shadow, 0 12px 32px rgba(23, 32, 51, 0.07));
      opacity: 0;
      transform: translateX(30px);
      transition: opacity 550ms ease, transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1);
      transition-delay: var(--process-step-delay, 0ms);
    }
    #design-process.is-visible .process-step-card {
      opacity: 1;
      transform: translateX(0);
    }
    #design-process .process-step-card:nth-child(1) { --process-step-delay: 0ms; }
    #design-process .process-step-card:nth-child(2) { --process-step-delay: 90ms; }
    #design-process .process-step-card:nth-child(3) { --process-step-delay: 180ms; }
    #design-process .process-step-card:nth-child(4) { --process-step-delay: 270ms; }
    #design-process .process-step-card:nth-child(5) { --process-step-delay: 360ms; }
    @media (min-width: 1280px) {
      #design-process .process-step-card:nth-child(1) { --process-step-delay: 360ms; }
      #design-process .process-step-card:nth-child(2) { --process-step-delay: 270ms; }
      #design-process .process-step-card:nth-child(3) { --process-step-delay: 180ms; }
      #design-process .process-step-card:nth-child(4) { --process-step-delay: 90ms; }
      #design-process .process-step-card:nth-child(5) { --process-step-delay: 0ms; }
    }
    @media (prefers-reduced-motion: reduce) {
      #design-process .process-step-card {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }
    #design-process .process-step-card::before {
      position: absolute;
      top: -2.5rem;
      right: -2.5rem;
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      background: var(--process-step-glow, rgba(99, 102, 241, 0.09));
      filter: blur(2px);
      content: "";
      pointer-events: none;
    }
    #design-process .process-step-number {
      color: var(--process-step-color, #4f46e5);
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.05em;
      line-height: 1;
      transform-origin: center;
      transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1), text-shadow 350ms ease;
    }
    #design-process .process-step-tag {
      border-radius: 9999px;
      background: var(--process-step-tag-bg, #eef2ff);
      padding: 0.375rem 0.75rem;
      color: var(--process-step-color, #4f46e5);
      font-family: "JetBrains Mono", monospace;
      font-size: 0.6875rem;
      font-weight: 700;
      white-space: nowrap;
      transform-origin: center;
      transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 350ms ease;
    }
    #design-process .process-step-card h3 {
      margin: 0;
      color: #1e293b;
      font-size: 1rem;
      font-weight: 800;
      letter-spacing: -0.035em;
      line-height: 1.4;
    }
    #design-process .process-step-description {
      margin-top: 0.375rem;
      color: #64748b;
      font-size: 0.8125rem;
      line-height: 1.65;
    }
    #design-process .process-step-tools {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: auto;
      padding-top: 0.75rem;
      border-top: 1px solid #f1f5f9;
    }
    #design-process .process-step-tools span {
      border: 1px solid #e2e8f0;
      border-radius: 9999px;
      background: #f8fafc;
      padding: 0.375rem 0.75rem;
      color: #475569;
      font-family: "Plus Jakarta Sans", Inter, sans-serif;
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1.25;
      white-space: nowrap;
      transform-origin: center;
      transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 350ms ease, border-color 350ms ease;
    }
    #design-process .process-step-card:hover .process-step-number,
    #design-process .process-step-card:focus-within .process-step-number {
      transform: rotate(-7deg) scale(1.08);
      text-shadow: 0 8px 18px var(--process-step-glow, rgba(99, 102, 241, 0.18));
    }
    #design-process .process-step-card:hover .process-step-tag,
    #design-process .process-step-card:focus-within .process-step-tag,
    #design-process .process-step-card:hover .process-step-tools span,
    #design-process .process-step-card:focus-within .process-step-tools span {
      transform: rotate(-7deg) scale(1.06);
      box-shadow: 0 6px 14px var(--process-step-glow, rgba(99, 102, 241, 0.14));
    }
    #design-process .process-step-card:hover .process-step-tools span,
    #design-process .process-step-card:focus-within .process-step-tools span {
      border-color: var(--process-step-color, #4f46e5);
    }
    @media (min-width: 1024px) {
      .notes-live-grid {
        grid-template-columns: minmax(0, 1.04fr) minmax(0, .96fr) !important;
        align-items: stretch !important;
      }
      .notes-live-grid > * { min-width: 0; }
    }
    #last-events {
      position: relative;
      isolation: isolate;
    }
    #last-events .last-event-card {
      position: relative;
      display: block;
      min-width: 0;
      aspect-ratio: 3 / 2;
      overflow: hidden;
      border: 1px solid #e2e8f2;
      border-radius: 1rem;
      background: var(--event-placeholder);
      text-align: left;
      transition: transform 500ms cubic-bezier(.22,1,.36,1), box-shadow 500ms cubic-bezier(.22,1,.36,1), border-color 500ms ease;
    }
    #last-events .last-event-card[data-event-index="2"] {
      grid-column: 1 / -1;
      aspect-ratio: 3 / 1;
    }
    #last-events .last-event-card::before {
      position: absolute;
      inset: 0;
      background: linear-gradient(145deg, rgba(255,255,255,.15), rgba(15,23,42,.16));
      content: "";
    }
    #last-events .last-event-image-mark {
      position: absolute;
      top: 50%;
      left: 50%;
      display: grid;
      width: 2.75rem;
      height: 2.75rem;
      place-items: center;
      border: 1px solid rgba(255,255,255,.65);
      border-radius: 1rem;
      background: rgba(255,255,255,.7);
      color: #475569;
      transform: translate(-50%, -50%);
      transition: transform 500ms cubic-bezier(.22,1,.36,1), background 500ms ease, box-shadow 500ms ease;
    }
    #last-events .last-event-card:hover .last-event-image-mark,
    #last-events .last-event-card:focus-visible .last-event-image-mark {
      background: rgba(255,255,255,.92);
    }
    #last-events .last-event-title {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      grid-template-rows: 1fr auto;
      align-items: end;
      column-gap: 0.75rem;
      padding: 1rem;
      background: linear-gradient(180deg, transparent 35%, rgba(15,23,42,.78));
      color: #fff;
      opacity: 0;
    }
    #last-events .last-event-card:hover .last-event-title,
    #last-events .last-event-card:focus-visible .last-event-title {
      opacity: 1;
    }
    #last-events .last-event-name,
    #last-events .last-event-date {
      grid-column: 1;
      min-width: 0;
    }
    #last-events .last-event-name {
      grid-row: 1;
      align-self: end;
      overflow: hidden;
      font-size: .875rem;
      font-weight: 800;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    #last-events .last-event-date {
      grid-row: 2;
      margin-top: .18rem;
      color: rgba(255,255,255,.82);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: .625rem;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    #last-events .last-event-preview {
      grid-column: 2;
      grid-row: 2;
      align-self: end;
      color: #fff;
      font-size: .75rem;
      font-weight: 800;
      white-space: nowrap;
      text-decoration: none;
    }
    #last-event-detail {
      position: absolute;
      inset-block: 0;
      left: 50%;
      z-index: 60;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      width: var(--last-event-viewport-width, 100vw);
      padding: 1.5rem var(--portfolio-page-gutter, clamp(1.5rem, 4vw, 4rem));
      background: rgba(238, 242, 255, 0.46);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transform: translateX(-50%);
    }
    #last-event-detail.is-closing {
      animation: lastEventOverlayExit 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
    }
    #last-event-back {
      align-self: flex-start;
      flex: 0 0 auto;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    #last-event-detail.hidden {
      display: none;
    }
    .last-event-detail-panel {
      animation: lastEventPanelEnter 950ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      width: min(var(--last-event-panel-width, 100%), 1760px);
      max-width: 1760px;
      flex: 1;
      min-height: 0;
      margin-top: 0.75rem;
      overflow-y: auto;
      border: 1px solid rgba(226, 232, 240, 0.9);
      border-radius: 1.5rem;
      background: rgba(255, 255, 255, 0.52);
      padding: 1.5rem;
      box-shadow: 0 16px 48px rgba(23, 32, 51, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .event-photo-tile {
      position: relative;
      display: grid;
      min-height: 5rem;
      place-items: center;
      overflow: hidden;
      border-radius: .75rem;
      border: 1px solid rgba(148, 163, 184, .35);
      background: linear-gradient(135deg, #dbeafe, #c7d2fe);
      color: #475569;
    }
    .event-photo-tile.event-photo-team {
      background: linear-gradient(145deg, #d1fae5, #bae6fd);
    }
    .event-photo-tile.event-photo-mentoring {
      background: linear-gradient(145deg, #fde68a, #fed7aa);
    }
    .event-photo-tile.event-photo-pitch {
      background: linear-gradient(145deg, #c4b5fd, #fbcfe8);
    }
    .event-photo-tile span {
      position: absolute;
      right: .5rem;
      bottom: .5rem;
      display: inline-flex;
      align-items: center;
      gap: .375rem;
      border-radius: 9999px;
      background: rgba(6, 78, 59, .82);
      padding: .375rem .625rem;
      color: white;
      font-size: .625rem;
      font-weight: 700;
      box-shadow: 0 5px 12px rgba(15, 23, 42, .2);
    }
    .event-contribution-panel {
      border: 1px solid #e2e8f0;
      border-radius: 1.25rem;
      background: rgba(248, 250, 252, .9);
      padding: 1rem 1.25rem;
    }
    .event-contribution-panel li {
      display: flex;
      align-items: flex-start;
      gap: .625rem;
      color: #475569;
      font-size: .8125rem;
      line-height: 1.55;
    }
    .event-contribution-panel li::before {
      width: .45rem;
      height: .45rem;
      flex: 0 0 .45rem;
      margin-top: .35rem;
      border-radius: 9999px;
      background: #059669;
      content: "";
    }
    .event-metric {
      border: 1px solid #e2e8f0;
      border-radius: 1rem;
      background: rgba(248,250,252,.9);
      padding: .875rem .75rem;
      text-align: center;
    }
    .event-metric strong {
      display: block;
      color: #131b2e;
      font-size: .9375rem;
      font-weight: 800;
    }
    .event-metric span {
      display: block;
      margin-top: .2rem;
      color: #64748b;
      font-family: "JetBrains Mono", monospace;
      font-size: .5625rem;
      font-weight: 700;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    @media (max-width: 639px) {
      #last-event-detail {
        padding: 1rem;
      }
      .last-event-detail-panel {
        padding: 1.25rem;
      }
    }
    body {
      background-color: #f8fafc;
      color: #0f172a;
    }
    .shadow-card-soft {
      box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
    }
    .carousel-container .slide-nav-btn {
      opacity: 0.85;
      transition: all 0.2s ease;
    }
    .carousel-container:hover .slide-nav-btn {
      opacity: 1;
      transform: translateY(-50%) scale(1.05);
    }
    .blob-bg {
      filter: blur(14px);
      opacity: 0.65;
    }

/* Project card system */
.project-card-item {
  border-radius: 1.5rem !important;
  padding: 1.25rem !important;
  margin-bottom: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  flex-direction: column !important;
  transition: all 0.25s ease-in-out !important;
}
.project-card-item > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.75rem !important;
}
@media (min-width: 640px) {
  .project-card-item {
    padding: 1.5rem !important;
  }
}
.project-card-header {
  display: flex !important;
  flex-wrap: wrap !important;
  width: 100% !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 0.5rem !important;
  padding-bottom: 0.75rem !important;
  margin: 0 0 0.75rem !important;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8) !important;
}
.project-card-header > :first-child {
  display: flex !important;
  flex: 1 1 auto !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  gap: 0.375rem !important;
  min-width: 0;
}
.project-card-header > :last-child {
  display: flex !important;
  flex: 0 0 auto !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: flex-end !important;
  gap: 0.5rem !important;
  margin-left: auto !important;
}
.project-card-header a {
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  padding: 0.45rem 0.95rem !important;
  border-radius: 0.75rem !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.375rem !important;
  line-height: 1.25rem !important;
}
.project-card-header span.rounded-full {
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  padding: 0.25rem 0.75rem !important;
  line-height: 1.15rem !important;
}
#about-project-detail h2 {
  font-size: 1.875rem !important;
  line-height: 2.25rem !important;
  font-weight: 800 !important;
  letter-spacing: -0.025em !important;
  margin-bottom: 0.35rem !important;
}
#about-project-detail p.text-xs.font-semibold.uppercase,
#about-project-detail p.text-xs.font-bold.uppercase {
  font-size: 0.75rem !important;
  letter-spacing: 0.05em !important;
  text-transform: uppercase !important;
  margin-bottom: 0.5rem !important;
}
.project-card-item [class~="lg:col-span-7"] {
  display: flex !important;
  flex-direction: column !important;
  gap: 0.75rem !important;
  justify-content: flex-start !important;
  align-self: stretch !important;
}
.project-card-item [class~="lg:col-span-7"] > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0 !important;
}
.project-card-item [class~="lg:col-span-7"] p.project-role-line {
  margin: 0.25rem 0 0 !important;
}
.project-card-item .project-intro {
  margin-top: 0 !important;
}
.project-card-item .project-intro-with-role {
  margin-top: 0.75rem !important;
}
.project-card-item [class~="lg:col-span-5"] {
  align-self: stretch !important;
  min-width: 0;
}
.project-card-item [class~="lg:grid-cols-12"] {
  column-gap: 1rem !important;
  row-gap: 1.25rem !important;
}
.project-card-item [class~="lg:col-span-7"] .grid > div[class*="rounded-xl"],
.project-card-item [class~="lg:col-span-7"] .grid > div[class*="rounded-2xl"] {
  padding: 0.875rem !important;
}
.project-card-item [class~="lg:col-span-7"] .grid {
  gap: 0.75rem !important;
}
#nusca-project-card-1 .nusca-score-grid {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  width: 100% !important;
  gap: 0.5rem !important;
}
#nusca-project-card-1 .nusca-score-grid > div {
  width: 100% !important;
  min-width: 0;
}
#nusca-project-card-1 .nusca-overview {
  display: grid;
  gap: 1rem;
  margin-top: 0.25rem;
}
#nusca-project-card-1 .nusca-overview > .grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}
#nusca-project-card-1 .nusca-overview > .grid > div {
  min-width: 0;
  padding: 0.875rem !important;
  grid-column: auto !important;
}
#nusca-project-card-1 .project-image-card,
#smart-focus-alert-card-1 .project-image-card {
  align-self: stretch !important;
  height: 100% !important;
}
.project-dropdown-disclosure {
  position: relative;
  z-index: 1;
  width: calc(100% + 2.5rem);
  margin: 0.75rem -1.25rem -1.25rem !important;
  padding: 0.75rem 1.25rem !important;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0 0 1.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
}
@media (min-width: 640px) {
  .project-dropdown-disclosure {
    width: calc(100% + 3rem);
    margin: 0.75rem -1.5rem -1.5rem !important;
    padding: 0.75rem 1.5rem !important;
  }
}
.project-dropdown-toggle,
#nusca-project-card-1 .nusca-process-toggle {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.25rem 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.55);
  color: #0f172a;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.project-dropdown-toggle:hover,
#nusca-project-card-1 .nusca-process-toggle:hover {
  background: rgba(255, 255, 255, 0.9);
}
.project-dropdown-toggle:focus-visible,
#nusca-project-card-1 .nusca-process-toggle:focus-visible {
  outline: 2px solid #10b981;
  outline-offset: 2px;
  border-radius: 0.375rem;
}
.project-dropdown-toggle[aria-expanded="true"] .accordion-chevron {
  transform: rotate(180deg);
}
.project-dropdown-badge {
  max-width: 14rem;
  overflow: hidden;
  border-radius: 9999px;
  background: #f1f5f9;
  padding: 0.25rem 0.5rem;
  color: #64748b;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#nusca-project-card-1 .nusca-process-content {
  padding-top: 0.5rem;
}
#nusca-project-card-1 .nusca-process-content .project-overview-details {
  padding-top: 0 !important;
}
#smart-focus-alert-card-1 .smart-focus-overview-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 0.75rem !important;
}
#smart-focus-alert-card-1 .smart-focus-overview-grid > div {
  min-width: 0;
  padding: 0.875rem !important;
}
#smart-focus-alert-card-1 .smart-focus-evidence-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  padding-top: 0.75rem;
}
#smart-focus-alert-card-1 .smart-focus-evidence-grid > div {
  min-width: 0;
}
#campaign-deck-master-card .campaign-process-in-dropdown {
  padding: 0.75rem;
  border: 1px solid rgba(251, 207, 232, 0.75);
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.8);
}
#aoshuttle-project-card .aoshuttle-overview-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 0.75rem !important;
}
#aoshuttle-project-card .aoshuttle-overview-grid > div {
  min-width: 0;
  padding: 0.875rem !important;
}
#aoshuttle-project-card .aoshuttle-score-card {
  grid-column: auto !important;
  min-width: 0;
  padding: 0.625rem !important;
}
#aoshuttle-project-card .aoshuttle-score-card > div:nth-child(2) {
  padding: 0.625rem !important;
  gap: 0.625rem !important;
}
#aoshuttle-project-card .aoshuttle-score-card > div:nth-child(2) > div:first-child {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
}
@media (max-width: 639px) {
  #nusca-project-card-1 .nusca-overview > .grid {
    grid-template-columns: minmax(0, 1fr);
  }
  #smart-focus-alert-card-1 .smart-focus-overview-grid {
    grid-template-columns: minmax(0, 1fr) !important;
  }
  #smart-focus-alert-card-1 .smart-focus-evidence-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  #aoshuttle-project-card .aoshuttle-overview-grid {
    grid-template-columns: minmax(0, 1fr) !important;
  }
}
.project-card-item .carousel-container,
.project-card-item .interactive-mockup-wrapper {
  min-height: 0 !important;
  height: auto !important;
  max-height: none !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}
.project-card-item .carousel-slide img {
  height: 100% !important;
  max-height: 100% !important;
  width: 100% !important;
  max-width: 100% !important;
  object-fit: contain !important;
  margin: 0 auto !important;
}
.project-image-card {
  min-height: 0 !important;
  height: auto !important;
  align-self: stretch !important;
  padding: 0.625rem !important;
  border-radius: 1.25rem !important;
  border: 1px solid rgba(186, 230, 253, 0.9) !important;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.85) 55%, rgba(238, 242, 255, 0.9)) !important;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05), 0 18px 40px -22px rgba(37, 99, 235, 0.35) !important;
  gap: 0.5rem !important;
}
.aiml-project-supporting-content {
  margin-top: 0 !important;
  padding-top: 0.75rem !important;
}
.aiml-project-overview-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.aiml-project-overview-content > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0 !important;
}
.aiml-project-supporting-content > .grid {
  gap: 0.5rem !important;
}
.aiml-project-supporting-content > .grid > div {
  min-width: 0;
}
@media (min-width: 1024px) {
  #nusca-project-card-2 .aiml-project-supporting-content > .grid:first-child {
    grid-template-columns: 1.5fr 1fr 1fr !important;
  }
  #nusca-project-card-2 .aiml-project-supporting-content > .grid:nth-child(2) {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }
  #nusca-project-card-2 .aiml-project-supporting-content > .grid > div:first-child .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}
@media (max-width: 1023px) {
  #about-project-detail .project-card-item [class~="lg:col-span-7"] {
    display: contents !important;
  }
  #about-project-detail .aiml-project-overview-content {
    order: 1;
    width: 100%;
  }
  #about-project-detail .project-image-card {
    order: 2;
  }
  #about-project-detail .aiml-project-supporting-content {
    order: 3;
    width: 100%;
  }
}
@media (min-width: 1024px) {
  .project-card-item [class~="lg:grid-cols-12"] {
    align-items: stretch !important;
  }
  .project-card-item .project-image-card {
    height: 100% !important;
  }
}
.project-image-header,
.project-image-footer {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 1.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 0.25rem;
}
.project-image-stage {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 0;
  flex: 1 1 auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(125deg, #e0f2fe, #eef2ff 45%, #fae8ff 80%, #e0f2fe);
  background-size: 220% 220%;
  animation: projectStageShift 16s ease-in-out infinite;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.7);
}
@keyframes projectStageShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.image-expand-button {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: inherit;
  background: transparent;
  color: #fff;
  cursor: zoom-in;
}
.image-expand-button svg { display: none; }
.image-expand-button::after {
  content: 'Click to enlarge';
  position: absolute;
  left: 50%;
  bottom: 0.75rem;
  padding: 0.3rem 0.75rem;
  transform: translate(-50%, 6px);
  border-radius: 99px;
  background: rgba(15, 23, 42, 0.72);
  font-size: 0.72rem;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: none;
}
.image-expand-button:hover::after,
.image-expand-button:focus-visible::after {
  opacity: 1;
  transform: translate(-50%, 0);
}
.image-expand-button:focus-visible,
.image-lightbox-close:focus-visible {
  outline: 3px solid #a5b4fc;
  outline-offset: -3px;
}
.image-expand-button svg {
  width: 1.25rem;
  height: 1.25rem;
}
.honor-certificate-art {
  position: relative;
  overflow: hidden;
  padding: 0 !important;
}
.certificate-preview-frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100% !important;
  height: 100% !important;
  border: 0;
  background: #f1f5f9;
}
.certificate-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f1f5f9;
}
.certificate-carousel-controls {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}
.certificate-carousel-button {
  pointer-events: auto;
  display: grid;
  width: 1.75rem;
  height: 1.75rem;
  place-items: center;
  margin: 0 0.35rem;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.72);
  color: #fff;
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
}
.certificate-carousel-button:hover,
.certificate-carousel-button:focus-visible {
  background: rgba(15, 23, 42, 0.92);
}
.image-lightbox {
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
.image-lightbox::backdrop {
  background: rgba(2, 6, 23, 0.94);
}
.image-lightbox-stage {
  display: flex;
  width: 100%;
  height: calc(100% - 2rem);
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.image-lightbox-stage.is-zoomed {
  display: block;
  overflow: auto;
  cursor: grab;
  touch-action: pan-x pan-y;
}
.image-lightbox-stage.is-zoomed:active {
  cursor: grabbing;
}
.image-lightbox-image {
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  object-fit: contain;
  cursor: zoom-in;
  border-radius: 0.5rem;
}
.image-lightbox-image.is-zoomed {
  max-width: none;
  max-height: none;
  width: min(220%, 2400px);
  height: auto;
  margin: 0;
  cursor: zoom-out;
}
.image-lightbox-hint {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  margin: 0;
  padding: 0.35rem 0.8rem;
  transform: translateX(-50%);
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.14);
  color: #e2e8f0;
  font-size: 0.72rem;
  pointer-events: none;
}
.image-lightbox-hint[hidden] {
  display: none;
}
.image-lightbox-pdf {
  display: block;
  width: min(100%, 1000px);
  height: 100%;
  border: 0;
  background: transparent;
  overflow: auto;
}
.image-lightbox-pdf[hidden] {
  display: none;
}
.image-lightbox-artwork {
  position: relative;
  display: flex;
  width: min(90vw, 1000px);
  height: min(72vh, 620px);
  height: min(72dvh, 620px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
  padding: clamp(1.5rem, 5vw, 4rem) !important;
  text-align: center;
}
.image-lightbox-artwork > span:first-child {
  font-size: clamp(0.9rem, 2vw, 1.5rem);
}
.image-lightbox-artwork > span:nth-child(2) {
  margin-top: 1.5rem;
  font-size: clamp(1.75rem, 5vw, 4rem);
}
.image-lightbox-artwork > span:nth-child(3) {
  margin-top: 1rem;
  font-size: clamp(0.85rem, 1.8vw, 1.25rem);
}
.image-lightbox-close {
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
.image-lightbox-close svg {
  width: 1.25rem;
  height: 1.25rem;
}
.image-lightbox-caption {
  min-height: 1.25rem;
  margin: 0.25rem 3rem 0;
  color: #cbd5e1;
  font-size: 0.875rem;
  text-align: center;
}
.project-image-blob {
  position: absolute;
  z-index: 0;
  border-radius: 9999px;
  filter: blur(28px);
  opacity: 0.7;
  pointer-events: none;
  will-change: transform;
}
.project-image-blob.blob-a {
  top: -18%;
  left: -8%;
  width: 52%;
  aspect-ratio: 1;
  background: #7dd3fc;
  animation: projectBlobA 13s ease-in-out infinite;
}
.project-image-blob.blob-b {
  right: -10%;
  bottom: -22%;
  width: 56%;
  aspect-ratio: 1;
  background: #c4b5fd;
  animation: projectBlobB 17s ease-in-out infinite;
}
.project-image-blob.blob-c {
  top: 38%;
  left: 38%;
  width: 28%;
  aspect-ratio: 1;
  background: #f9a8d4;
  opacity: 0.5;
  animation: projectBlobC 19s ease-in-out infinite;
}
@keyframes projectBlobA {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(26%, 18%) scale(1.2); }
}
@keyframes projectBlobB {
  0%, 100% { transform: translate(0, 0) scale(1.1); }
  50% { transform: translate(-30%, -16%) scale(0.9); }
}
@keyframes projectBlobC {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-60%, 40%) scale(1.3); }
  66% { transform: translate(40%, -50%) scale(0.8); }
}
@media (prefers-reduced-motion: reduce) {
  .project-image-stage, .project-image-blob { animation: none !important; }
}
.project-image-badge {
  flex-shrink: 0;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  color: #fff;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.project-image-nav[hidden],
.project-image-dots[hidden] {
  display: none !important;
}
.project-image-stage > [id$="-slides"] {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.project-image-stage .carousel-slide {
  width: 100%;
  height: 100%;
  padding: 0.875rem 0.875rem 2.25rem;
  align-items: center;
  justify-content: center;
}
.project-image-stage .carousel-slide:not(.hidden) {
  display: flex;
  animation: projectSlideIn 0.45s ease both;
}
@keyframes projectSlideIn {
  from { opacity: 0; transform: translateY(6px) scale(0.985); }
  to { opacity: 1; transform: none; }
}
.project-image-stage .carousel-slide img {
  display: block;
  width: auto !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  object-fit: contain !important;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0 14px 34px -14px rgba(30, 41, 59, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.8);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.project-image-stage:hover .carousel-slide img {
  transform: translateY(-2px) scale(1.012);
  box-shadow: 0 22px 44px -16px rgba(30, 41, 59, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.9);
}
.project-image-nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.96);
  color: #334155;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project-image-nav:hover {
  transform: translateY(-50%) scale(1.06);
  box-shadow: 0 6px 16px -4px rgba(15, 23, 42, 0.22);
}
.project-image-nav.previous {
  left: 0.5rem;
}
.project-image-nav.next {
  right: 0.5rem;
}
.project-image-nav:disabled {
  cursor: default;
  opacity: 0.45;
}
.project-image-nav:disabled:hover {
  transform: translateY(-50%);
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.12);
}
.project-image-dots {
  position: absolute;
  bottom: 0.625rem;
  left: 50%;
  z-index: 3;
  display: flex;
  min-height: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.25rem 0.4rem;
  transform: translateX(-50%);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.82);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}
.project-image-dots .carousel-dot {
  height: 0.5rem;
  border-radius: 9999px;
  padding: 0;
  transition: width 0.2s ease, background-color 0.2s ease;
}
.project-image-caption {
  min-width: 0;
  overflow: hidden;
  color: #0f172a;
  font-size: 0.75rem;
  line-height: 1.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.project-image-count {
  flex-shrink: 0;
  color: #64748b;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.625rem;
  letter-spacing: 0.04em;
}
.project-overview-details {
  display: grid;
  min-width: 0;
  gap: 0.5rem;
}
.project-overview-details > * {
  min-width: 0;
  padding-top: 0.5rem !important;
}
.project-card-item [aria-label="Previous preview"],
.project-card-item [aria-label="Next preview"] {
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}
.project-card-item [aria-label="Previous preview"]:hover,
.project-card-item [aria-label="Next preview"]:hover {
  transform: translateY(-50%) scale(1.06) !important;
  box-shadow: 0 6px 16px -4px rgba(15, 23, 42, 0.22) !important;
}
.project-card-item [data-single-preview="true"] [aria-label$="preview"],
.project-card-item [data-single-preview="true"] .preview-pagination {
  display: none !important;
}
.project-card-item .carousel-slide {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.project-card-item .carousel-slide.hidden {
  display: none !important;
}
#about-project-detail .case-study-accordion-content { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease; } #about-project-detail .case-study-accordion-content.is-open { grid-template-rows: 1fr; opacity: 1; } #about-project-detail .case-study-accordion-inner { overflow: hidden; min-height: 0; } #about-project-detail .accordion-chevron { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); } #about-project-detail .case-study-accordion-content.is-open + button #about-project-detail .accordion-chevron, button[aria-expanded="true"] #about-project-detail .accordion-chevron { transform: rotate(180deg); } #about-project-detail button[id$="-accordion-btn"], #about-project-detail .case-study-accordion-btn { cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }


#last-events .event-cover{isolation:isolate;min-height:195px;display:flex;align-items:stretch;cursor:pointer;border:1px solid rgba(255,255,255,.25);box-shadow:0 10px 28px rgba(15,23,42,.12)}
#last-events .event-cover::before{display:none}
#last-events .event-cover:hover,#last-events .event-cover:focus-visible{transform:translateY(-4px);box-shadow:0 16px 35px rgba(15,23,42,.22);outline-offset:3px}
#last-events .event-cover--indigo{background:radial-gradient(circle at 90% 8%,rgba(129,140,248,.65),transparent 36%),linear-gradient(135deg,#172554,#3730a3 67%,#4338ca)}
#last-events .event-cover--cyan{background:radial-gradient(circle at 88% 6%,rgba(103,232,249,.65),transparent 42%),linear-gradient(135deg,#0f3448,#155e75 68%,#0e7490)}
#last-events .event-cover--violet{background:radial-gradient(circle at 80% 40%,rgba(249,168,212,.35),transparent 35%),linear-gradient(115deg,#171b36,#4c1d95 72%,#6d28d9)}
#last-events .event-cover-grain{position:absolute;inset:0;background-image:linear-gradient(120deg,transparent 50%,rgba(255,255,255,.07) 50%),radial-gradient(circle at 85% 84%,transparent 0 52px,rgba(255,255,255,.14) 53px 54px,transparent 55px);opacity:.75;pointer-events:none}
#last-events .event-cover-content{position:relative;z-index:1;display:flex;flex-direction:column;justify-content:space-between;width:100%;padding:1.25rem;text-align:left;color:#fff}
#last-events .event-cover-top{display:flex;justify-content:space-between;align-items:flex-start;color:#e0e7ff}
#last-events .event-cover-number{white-space:nowrap;font:700 .65rem 'JetBrains Mono',monospace;letter-spacing:.12em;border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:.35rem .55rem}
#last-events .event-cover-icon{width:32px;height:32px;flex:none;opacity:.75}
#last-events .event-cover-bottom{display:flex;flex-direction:column;gap:.35rem;align-items:flex-start}
#last-events .event-cover-kicker{font-size:.6rem;font-weight:800;letter-spacing:.11em;color:#c7d2fe;text-transform:uppercase}
#last-events .event-cover-bottom strong{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:clamp(1rem,2vw,1.3rem);line-height:1.25;letter-spacing:-.025em}
#last-events .event-cover-meta{font-size:.7rem;font-weight:600;color:#e2e8f0}
#last-events .event-cover-cta{display:inline-flex;margin-top:.35rem;gap:.4rem;align-items:center;font-size:.7rem;font-weight:800;padding:.5rem .7rem;border:1px solid rgba(255,255,255,.4);border-radius:999px;background:rgba(255,255,255,.13)}
#last-events .last-event-card[data-event-index="2"] .event-cover-content{padding:1.4rem 1.6rem}
#last-events .last-event-card[data-event-index="2"] .event-cover-bottom strong{font-size:clamp(1.25rem,2.5vw,1.7rem)}
.event-story.hidden{display:none!important}
.event-story-hero{border:1px solid #dbe4ff;border-radius:1.25rem;background:linear-gradient(125deg,#f3f4ff,#fff 65%,#ecfeff);padding:1.2rem;display:grid;grid-template-columns:minmax(0,1.5fr) minmax(220px,.75fr);gap:1.5rem;align-items:stretch}
.event-story-hero--cyan{background:linear-gradient(125deg,#ecfeff,#fff 65%,#eef2ff);border-color:#a5f3fc}
.event-story-hero--violet{background:linear-gradient(125deg,#f5f3ff,#fff 65%,#fdf2f8);border-color:#ddd6fe}
.event-story-eyebrow{display:block;color:#4f46e5;font:800 .61rem 'JetBrains Mono',monospace;letter-spacing:.12em;text-transform:uppercase}
.event-story-hero h4{margin:.55rem 0 .6rem;color:#172033;font-size:clamp(1.14rem,2vw,1.65rem);letter-spacing:-.03em;line-height:1.3;font-weight:800}
.event-story-hero p{max-width:66ch;color:#475569;line-height:1.7;font-size:.82rem}
.event-story-highlight{display:flex;flex-direction:column;justify-content:center;gap:.55rem;border-radius:1rem;background:#17234a;padding:1.2rem;color:#fff}
.event-story-highlight>span:not(.event-story-highlight-divider){color:#a5b4fc;font:800 .59rem 'JetBrains Mono',monospace;letter-spacing:.11em}
.event-story-highlight strong{font-size:.82rem;line-height:1.5}
.event-story-highlight-divider{height:1px;background:rgba(255,255,255,.19);margin:.3rem 0}
.event-story-section-head{margin-bottom:.8rem}
.event-story-section-head h4{margin:.25rem 0;font-size:1.05rem;font-weight:800;color:#172033}
.event-role-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem}
.event-role-card{border:1px solid #e2e8f0;border-radius:.9rem;background:#fff;padding:1rem;min-width:0}
.event-role-index{color:#4f46e5;font:800 .65rem 'JetBrains Mono',monospace}
.event-role-card h5{color:#1e293b;font-size:.8rem;font-weight:800;margin:.6rem 0 .35rem}
.event-role-card p{color:#64748b;font-size:.75rem;line-height:1.6}
.event-story-end{display:flex;gap:1.5rem;justify-content:space-between;align-items:end;border:1px solid #c7d2fe;border-radius:1rem;background:rgba(238,242,255,.7);padding:1.2rem}
.event-story-result{margin:.25rem 0 .7rem;color:#172033;font-size:.82rem;font-weight:800}
.event-story-takeaway{margin:.25rem 0 .75rem;color:#475569;font-size:.78rem;line-height:1.6}
.event-story-tags{display:flex;flex-wrap:wrap;gap:.4rem}
.event-story-tag{font-size:.65rem;border:1px solid #c7d2fe;background:#fff;border-radius:999px;padding:.3rem .55rem;color:#4338ca;font-weight:700}
.event-story-link{display:inline-flex;gap:.5rem;justify-content:center;align-items:center;border-radius:.75rem;background:#4338ca;color:white!important;text-decoration:none!important;font-weight:800;font-size:.75rem;min-width:175px;padding:.8rem .9rem;flex-shrink:0}
.event-story-link:hover{background:#312e81}
@media(max-width:760px){.event-story-hero{grid-template-columns:1fr}.event-role-grid{grid-template-columns:1fr}.event-story-end{flex-direction:column;align-items:stretch}.event-story-link{width:100%}}
@media(max-width:480px){#last-events .event-cover{min-height:185px}#last-events .event-cover-content{padding:.8rem}#last-events .event-cover-meta{font-size:.61rem}#last-events .event-cover-bottom strong{font-size:.9rem}#last-events .event-cover-cta{font-size:.6rem;padding:.4rem .55rem}#last-events .last-event-card[data-event-index="2"]{aspect-ratio:2.1/1;min-height:160px}#last-events .last-event-card[data-event-index="2"] .event-cover-bottom strong{font-size:1.2rem}}
@media(prefers-reduced-motion:reduce){#last-events .event-cover{transition:none}}
`;

export const META = {
  title: "Jessica Theresia",
  htmlClass: "scroll-smooth",
  bodyClass: "bg-[#faf8ff] text-[#131b2e] font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 bg-grid-pattern relative min-h-screen",
  tailwindConfig: TAILWIND_CONFIG,
  css: PAGE_CSS,
  cssId: "home",
};
