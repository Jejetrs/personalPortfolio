import { goToSlide, nextSlide, prevSlide, toggleAccordion } from '@/behaviors/home/projectHandlers.js';

export default function InaprocProjectCard() {
  return (
      <article className="rounded-2xl bg-[#fff5f6] border border-rose-100 shadow-sm relative overflow-hidden project-card-item p-4 sm:p-5 space-y-3" data-category="b2b uiux web" id="inaproc-project-card" data-live-url="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-700 text-white font-bold text-xs shadow-xs">
                    01
                  </span>
                  <span className="px-2.5 py-0.5 bg-rose-100/80 text-rose-800 text-[11px] font-semibold rounded-full border border-rose-200/60">
                    Design System
                  </span>
                  <span className="px-2.5 py-0.5 bg-rose-100/80 text-rose-800 text-[11px] font-semibold rounded-full border border-rose-200/60">
                    Landing Page
                  </span>
                  <span className="px-2.5 py-0.5 bg-rose-100/80 text-rose-800 text-[11px] font-semibold rounded-full border border-rose-200/60">
                    UI Components
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="dev-switch" data-live-badge="" data-state="checking" role="switch" aria-checked="false" aria-readonly="true" aria-disabled="true" aria-label="Live deploy status" tabIndex="-1">
                    <span className="dev-switch-label">
                      Live deploy
                    </span>
                    <span className="dev-switch-track">
                      <i></i>
                    </span>
                    <span className="dev-switch-text" data-live-text="">
                      Checking…
                    </span>
                  </span>
                  <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs transition shadow-xs" href="/work#inaproc-case-study">
                    <span className="">
                      View Internship Case Study
                    </span>
                    <span className="text-xs">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  INAPROC
                </h2>
                <p className="text-xs font-semibold text-rose-800 uppercase tracking-wider mt-0.5">
                  Designer Intern — Digistar Class Internship 2026 · Telkom Indonesia
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                INAPROC is Indonesia's government e-procurement ecosystem. During my Telkom design internship I audited its components and tokens, tested them in the E-Katalog interface, and explored a clearer landing page.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white/95 border border-rose-100/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                {" "}
                <span className="text-xs font-medium text-slate-700 leading-snug">
                  {"Audited and aligned 30+ components toward Design System V3"}
                </span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white/95 border border-rose-100/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                {" "}
                <span className="text-xs font-medium text-slate-700 leading-snug">
                  {"Documented variants, variables and tokens for developer handoff"}
                </span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white/95 border border-rose-100/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                {" "}
                <span className="text-xs font-medium text-slate-700 leading-snug">
                  Applied refined components to the E-Katalog interface
                </span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white/95 border border-rose-100/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                {" "}
                <span className="text-xs font-medium text-slate-700 leading-snug">
                  {"Explored landing page layouts through benchmarks and Crazy Eight sketches"}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-2 carousel-container rounded-2xl bg-white/60 border border-rose-100/60 overflow-hidden" data-carousel="inaproc">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
              <svg className="absolute w-[110%] h-[110%] text-rose-200/50 animated-blob" fill="none" viewBox="0 0 300 200">
                <path d="M45,110 C20,60 85,15 160,35 C235,55 285,30 275,105 C265,180 180,185 110,175 C40,165 70,160 45,110 Z" fill="currentColor"></path>
              </svg>
              <div className="w-72 h-72 rounded-full bg-rose-200/40 blur-2xl"></div>
              <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-rose-400/60"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-rose-300/60"></div>
            </div>
            <div className="relative z-10 w-full max-w-sm interactive-mockup-wrapper">
              <div className="relative w-full overflow-hidden rounded-xl" id="inaproc-slides">
                <div className="carousel-slide transition-all duration-300">
                </div>
                <div className="carousel-slide transition-all duration-300 hidden">
                </div>
                <div className="carousel-slide transition-all duration-300 hidden">
                </div>
              </div>
              <button aria-label="Previous slide" className="slide-nav-btn absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { prevSlide('inaproc'); }} type="button">
                <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
              {" "}
              <button aria-label="Next slide" className="slide-nav-btn absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { nextSlide('inaproc'); }} type="button">
                <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center gap-1.5 pt-2.5 relative z-20" id="inaproc-dots">
              <button className="carousel-dot h-1.5 rounded-full transition-all bg-rose-700 w-5" onClick={() => { goToSlide('inaproc', 0); }} type="button"></button>
              {" "}
              <button className="carousel-dot h-1.5 rounded-full transition-all bg-rose-200 w-2" onClick={() => { goToSlide('inaproc', 1); }} type="button"></button>
              {" "}
              <button className="carousel-dot h-1.5 rounded-full transition-all bg-rose-200 w-2" onClick={() => { goToSlide('inaproc', 2); }} type="button"></button>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-rose-100">
          <button id="inaproc-accordion-btn" type="button" onClick={() => { toggleAccordion('inaproc'); }} aria-expanded="false" className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-rose-100 shadow-xs transition group">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              <span className="accordion-text text-xs font-bold text-slate-800 tracking-tight group-hover:text-rose-700 transition-colors">
                {"View Full Case Study & Research Breakdown"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700">
              <span className="text-[11px] font-mono uppercase text-slate-400">
                9 Design Previews
              </span>
              <svg className="accordion-chevron w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
          <div id="inaproc-accordion" className="case-study-accordion-content">
            <div className="case-study-accordion-inner">
              <div className="pt-3 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                  <h3 className="">
                    Project Highlights
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" data-project-highlights="">
                  <div className="bg-white rounded-xl p-2.5 border border-rose-100/70 shadow-xs space-y-1.5">
                    <div className="h-16 rounded-lg overflow-hidden bg-rose-50/50 border border-slate-100">
                      <img alt="Component audit" className="w-full h-full object-cover object-top" src="/assets/experience/Telkom%20Designer%20Intern/Audit%20and%20Adjusment%20for%20Component%20%26%20Documentation.webp" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      Design System Audit
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Reviewed every component state and property, then logged what to merge, fix or document.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-rose-100/70 shadow-xs space-y-1.5">
                    <div className="h-16 rounded-lg overflow-hidden bg-rose-50/50 border border-slate-100">
                      <img alt="Tokens and variables" className="w-full h-full object-cover object-top" src="/assets/experience/Telkom%20Designer%20Intern/Variable%20Audit%20%26%20Adjusment.png" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      Design Documentation
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Rebuilt variables and tokens so states, colour and spacing follow one naming system.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-rose-100/70 shadow-xs space-y-1.5">
                    <div className="h-16 rounded-lg overflow-hidden bg-rose-50/50 border border-slate-100">
                      <img alt="E-Katalog layout" className="w-full h-full object-cover object-top" src="/assets/experience/Telkom%20Designer%20Intern/Layout%20Example%20of%20E-Katalog%20Practice.webp" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      E-Katalog Integration
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Tested the refined components on a dense catalogue page without losing readability.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-rose-100/70 shadow-xs space-y-1.5">
                    <div className="h-16 rounded-lg overflow-hidden bg-rose-50/50 border border-slate-100">
                      <img alt="Landing revamp board" className="w-full h-full object-cover object-top" src="/assets/experience/Telkom%20Designer%20Intern/Design%20Revamp.png" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      Landing Page Exploration
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Mapped references, ideas and concepts in FigJam before shaping the new landing page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
  );
}
