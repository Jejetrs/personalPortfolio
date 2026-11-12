import { goToSlide, nextSlide, prevSlide, toggleAccordion } from '@/behaviors/home/projectHandlers.js';

export default function AiseeWebsiteCard() {
  return (
      <article className="rounded-2xl bg-[#f6faf0] border border-lime-100 shadow-sm relative overflow-hidden project-card-item p-4 sm:p-6 space-y-4" data-category="b2b web uiux" id="aisee-website-card" data-live-url="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div>
              <div className="flex items-center justify-between gap-3 mb-1.5 project-card-header w-full">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs shadow-xs">
                    07
                  </span>
                  <span className="px-2.5 py-0.5 bg-emerald-100/70 text-emerald-900 text-[11px] font-semibold rounded-full border border-emerald-200/70">
                    Web Portal
                  </span>
                  <span className="px-2.5 py-0.5 bg-emerald-100/70 text-emerald-900 text-[11px] font-semibold rounded-full border border-emerald-200/70">
                    B2B SaaS
                  </span>
                  <span className="px-2.5 py-0.5 bg-emerald-100/70 text-emerald-900 text-[11px] font-semibold rounded-full border border-emerald-200/70">
                    Analytics
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
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
                  <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://www.figma.com/proto/ZpnZlm37pdzru5Qn5ypged/Action-2025?node-id=1043-16851&amp;p=f&amp;t=m6txVK6CpBjAjOhr-1&amp;scaling=scale-down-width&amp;content-scaling=fixed&amp;page-id=775%3A5801&amp;starting-point-node-id=1043%3A16851" target="_blank" rel="noopener noreferrer">
                    <span className="">
                      View Prototype
                    </span>
                    <span className="text-xs">
                      ↗
                    </span>
                  </a>
                  
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <span className="text-emerald-700 font-extrabold text-2xl mr-1">
                    ✦
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 tracking-tight leading-none">
                    AiSee
                  </h2>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold border border-emerald-200/70">
                  web version
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-700 mt-1">
                {"Project Manager · UI/UX Designer "}
                <span className="text-slate-300">
                  |
                </span>
                {" "}
                <span className="text-emerald-700 font-bold italic">
                  Action 2025 (UNESA)
                </span>
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-800 font-semibold">
                AiSee
              </strong>
              {" is a web-based collaboration platform developed as an extension of "}
              <strong className="text-slate-800 font-semibold">
                AiDorse
              </strong>
              , offering a more complete set of features and analytics to support scalable partnerships between brands and content creators.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-xs flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  !
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-emerald-950 leading-tight">
                    Problem
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Influencer marketing often suffers from unclear campaign briefs, creator finding friction, and opaque metrics.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-xs flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  💡
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-emerald-950 leading-tight">
                    Solution
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    AI-driven creator matching, brief optimization, and unified performance analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-1 border-t border-emerald-100/70">
              <button id="aisee-website-accordion-btn" type="button" onClick={() => { toggleAccordion('aisee-website'); }} aria-expanded="false" className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-emerald-200/80 shadow-xs transition group">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                  <span className="accordion-text text-xs font-bold text-slate-800 tracking-tight group-hover:text-emerald-800 transition-colors">
                    {"View Full Case Study & Research Breakdown"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    {"Platform Features & SUS"}
                  </span>
                  <svg className="accordion-chevron w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div id="aisee-website-accordion" className="case-study-accordion-content">
                <div className="case-study-accordion-inner">
                  <div className="pt-3 space-y-2.5">
                    <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-xs space-y-1.5">
                      <h4 className="text-xs font-bold text-emerald-950 leading-tight">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-1.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                          <strong className="text-[10px] font-bold text-slate-900 block leading-tight">
                            👥 Creator Matching
                          </strong>
                          <span className="text-[10px] text-slate-600 leading-snug">
                            Targeted persona match
                          </span>
                        </div>
                        <div className="p-1.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                          <strong className="text-[10px] font-bold text-slate-900 block leading-tight">
                            📄 Brief Insight
                          </strong>
                          <span className="text-[10px] text-slate-600 leading-snug">
                            AI brief refinement
                          </span>
                        </div>
                        <div className="p-1.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                          <strong className="text-[10px] font-bold text-slate-900 block leading-tight">
                            📊 Performance Analytics
                          </strong>
                          <span className="text-[10px] text-slate-600 leading-snug">
                            Real-time metrics
                          </span>
                        </div>
                        <div className="p-1.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                          <strong className="text-[10px] font-bold text-slate-900 block leading-tight">
                            👤 Profile Analytics
                          </strong>
                          <span className="text-[10px] text-slate-600 leading-snug">
                            Credibility check
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-xs flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ★
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-emerald-950 leading-tight">
                            Evaluation
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            <strong className="font-bold text-slate-800">
                              SUS Score: 72.14 (Good)
                            </strong>
                            {" intuitive and aligned with user needs."}
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-xs flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          📈
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-emerald-950 leading-tight">
                            Impact
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            Enables transparent and scalable digital collaboration in creative economy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-2 carousel-container rounded-2xl bg-white/60 border border-emerald-100/60 overflow-hidden" data-carousel="aisee-website">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
              <svg className="absolute w-[110%] h-[110%] text-emerald-200/50 animated-blob" fill="none" viewBox="0 0 300 200">
                <path d="M45,110 C20,60 85,15 160,35 C235,55 285,30 275,105 C265,180 180,185 110,175 C40,165 70,160 45,110 Z" fill="currentColor"></path>
              </svg>
              <div className="w-72 h-72 rounded-full bg-emerald-200/40 blur-2xl"></div>
              <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-emerald-400/60"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-emerald-300/60"></div>
            </div>
            <div className="relative z-10 w-full max-w-sm interactive-mockup-wrapper">
              <div className="relative w-full overflow-hidden rounded-xl" id="aisee-website-slides">
                <div className="carousel-slide transition-all duration-300">
                  
                </div>
              </div>
              <button aria-label="Previous slide" className="slide-nav-btn absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { prevSlide('aisee-website'); }} type="button">
                <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
              <button aria-label="Next slide" className="slide-nav-btn absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { nextSlide('aisee-website'); }} type="button">
                <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center gap-1.5 pt-2 relative z-20" id="aisee-website-dots">
              <button className="carousel-dot h-1.5 rounded-full transition-all bg-emerald-700 w-5" onClick={() => { goToSlide('aisee-website', 0); }} type="button"></button>
              <button className="carousel-dot h-1.5 rounded-full transition-all bg-emerald-200 w-2" onClick={() => { goToSlide('aisee-website', 0); }} type="button"></button>
            </div>
          </div>
        </div>
      </article>
  );
}
