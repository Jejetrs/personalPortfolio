import { goToSlide, nextSlide, prevSlide, toggleAccordion } from '@/behaviors/home/projectHandlers.js';

export default function AiseeMobileCard() {
  return (
      <article className="rounded-2xl bg-gradient-to-r from-[#eef6fe] via-[#f2f8fe] to-[#e8f2fe] border border-sky-200/80 shadow-sm relative overflow-hidden project-card-item p-4 sm:p-6 space-y-4" data-category="b2b uiux aiml" id="aisee-mobile-card" data-live-url="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs shadow-xs">
                    05
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-800 text-[11px] font-semibold border border-blue-200">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Mobile Version
                  </span>
                  <span className="px-2.5 py-0.5 bg-sky-100/80 text-sky-900 text-[11px] font-semibold rounded-full border border-sky-200/70">
                    Arkavidia 10.0
                  </span>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-800 text-[11px] font-semibold rounded-full border border-blue-200/60">
                    UXVidia
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
                  <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition active:scale-95" href="https://www.figma.com/proto/X8rbgXjrjVhIwFHFURXLzp/AiSee?node-id=857-23521&amp;p=f&amp;t=jiDNt69tgmuIGO2s-0&amp;scaling=scale-down&amp;content-scaling=fixed&amp;page-id=1%3A3&amp;starting-point-node-id=857%3A23521&amp;show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                    <span className="">
                      View Prototype
                    </span>
                    <span className="text-xs">
                      ↗
                    </span>
                  </a>
                  <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold text-xs shadow-xs transition active:scale-95" href="https://www.youtube.com/watch?v=kcnSPI7bySY" target="_blank" rel="noopener noreferrer">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="">
                      Watch Video
                    </span>
                    <span className="text-xs">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    AiSee
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">
                    Mobile App
                  </span>
                </div>
                <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider mt-0.5">
                  {"UI Designer · UX Designer · UX Researcher "}
                  <span className="text-slate-300">
                    |
                  </span>
                  {" "}
                  <span className="text-blue-700 font-semibold italic">
                    Arkavidia 10.0 · UXVidia
                  </span>
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                AiSee is the mobile evolution of AiDorse, transforming influencer collaboration into a mobile-first experience with AI-powered insights, campaign analytics, and transparent brand–creator collaboration workflows.
              </p>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-white/95 border border-rose-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                        <circle cx="12" cy="12" r="5" strokeWidth="2"></circle>
                        <circle cx="12" cy="12" r="1" strokeWidth="2"></circle>
                      </svg>
                    </div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-rose-950">
                      Problem Statement
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    Influencer marketing workflows often suffer from unclear campaign briefs, inefficient creator selection, and limited transparency in collaboration and performance tracking.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/95 border border-emerald-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-950">
                      Solution
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    Designed an AI-assisted collaboration platform that simplifies campaign workflows, improves creator matching, and delivers transparent performance insights for brands and creators.
                  </p>
                </div>
              </div>
              <div className="pt-1 border-t border-sky-100">
                <button id="aisee-mobile-accordion-btn" type="button" onClick={() => { toggleAccordion('aisee-mobile'); }} aria-expanded="false" className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/80 hover:bg-white border border-sky-100 shadow-xs transition group">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="accordion-text text-xs font-bold text-slate-800 tracking-tight group-hover:text-blue-700 transition-colors">
                      {"View Full Case Study & Research Breakdown"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span className="text-[11px] font-mono uppercase text-slate-400">
                      {"Contribution & SEQ"}
                    </span>
                    <svg className="accordion-chevron w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div id="aisee-mobile-accordion" className="case-study-accordion-content">
                  <div className="case-study-accordion-inner">
                    <div className="pt-2.5 space-y-2">
                      <div className="p-2.5 rounded-xl bg-white/95 border border-blue-100 shadow-xs flex items-start gap-2">
                        <div className="w-5 h-5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </div>
                        <div className="text-[11px] text-slate-600 leading-relaxed">
                          <strong className="font-bold uppercase tracking-wider text-[11px] text-blue-950 mr-1">
                            Contribution:
                          </strong>
                          Led the brand-side (business owner) design experience, developing scalable and intuitive interfaces focused on collaboration efficiency and data-driven decision making.
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-xl bg-white/95 border border-sky-100 shadow-xs flex flex-col justify-between space-y-1.5">
                          <div>
                            <div className="flex items-center justify-between mb-0.5">
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                  </svg>
                                </div>
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                                  Evaluation
                                </h4>
                              </div>
                              <span className="px-2 py-0.5 rounded-full bg-blue-700 text-white font-bold text-[10px] shadow-xs">
                                74.6 (Grade B)
                              </span>
                            </div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                              SEQ Average Score
                            </span>
                            <div className="flex flex-wrap items-center gap-1 mt-0.5">
                              <span className="px-1.5 py-0.5 rounded-md bg-sky-50 text-sky-900 text-[10px] font-bold border border-sky-100">
                                Brand: 5.84 / 7
                              </span>
                              <span className="px-1.5 py-0.5 rounded-md bg-sky-50 text-sky-900 text-[10px] font-bold border border-sky-100">
                                Creator: 5.68 / 7
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/95 border border-amber-100 shadow-xs space-y-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-4 h-4 rounded-md bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1c1.88-.34 3.32-1.78 3.61-3.96C19.08 11.63 21 9.55 21 7V5c0-1.1-.9-2-2-2zM5 7h2v3c-1.1 0-2-.9-2-2V7zm14 1c0 1.1-.9 2-2 2V5h2v3z"></path>
                                </svg>
                              </div>
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                                Impact
                              </h4>
                            </div>
                            <p className="text-[10px] text-slate-600 leading-snug mt-0.5">
                              Created a transparent and scalable collaboration experience that supports more effective partnerships between brands and creators within the creative ecosystem.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between items-center relative p-2.5 rounded-2xl bg-white/80 border border-sky-200/70 shadow-xs overflow-hidden h-full carousel-container" data-carousel="aisee-mobile">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
              <div className="w-72 h-72 rounded-full bg-blue-200/40 blur-2xl"></div>
              <div className="absolute top-3 right-6 w-2 h-2 rounded-full bg-blue-400/60"></div>
              <div className="absolute bottom-4 left-4 w-2.5 h-2.5 rounded-full bg-sky-300/60"></div>
            </div>
            <div className="relative z-10 flex items-center justify-between w-full px-1 text-xs font-bold text-sky-800 tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span className="text-[10px] font-mono uppercase text-slate-500">
                  Team Project · 12
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-medium text-slate-600">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#13688D]"></span>
                  #13688D
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#559AB5]"></span>
                  #559AB5
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-white border border-slate-300"></span>
                  #FFFFFF
                </span>
              </div>
            </div>
            <div className="relative z-10 w-full max-w-sm interactive-mockup-wrapper flex items-center justify-center my-auto py-1">
              <div className="relative w-full overflow-hidden rounded-xl" id="aisee-mobile-slides">
                <div className="carousel-slide transition-all duration-300">
                  
                </div>
                <div className="carousel-slide transition-all duration-300 hidden">
                  
                </div>
              </div>
              <button aria-label="Previous slide" className="slide-nav-btn absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { prevSlide('aisee-mobile'); }} type="button">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
              <button aria-label="Next slide" className="slide-nav-btn absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { nextSlide('aisee-mobile'); }} type="button">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center gap-1.5 pt-1.5 relative z-20" id="aisee-mobile-dots">
              <button className="carousel-dot h-1.5 rounded-full transition-all bg-sky-700 w-5" onClick={() => { goToSlide('aisee-mobile', 0); }} type="button"></button>
              <button className="carousel-dot h-1.5 rounded-full transition-all bg-sky-200 w-2" onClick={() => { goToSlide('aisee-mobile', 1); }} type="button"></button>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 w-full pt-2 border-t border-sky-100">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white border border-slate-200/80 shadow-xs text-[10px] font-semibold text-slate-800">
                <svg className="w-3 h-3 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                Campaign Detail
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white border border-slate-200/80 shadow-xs text-[10px] font-semibold text-slate-800">
                <svg className="w-3 h-3 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                AI Trend Analysis
              </span>
            </div>
          </div>
        </div>
      </article>
  );
}
