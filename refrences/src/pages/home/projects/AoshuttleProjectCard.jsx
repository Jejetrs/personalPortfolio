import { goToSlide, nextSlide, prevSlide, toggleAccordion } from '@/behaviors/home/projectHandlers.js';

export default function AoshuttleProjectCard() {
  return (
      <article className="rounded-2xl bg-[#f3faf8] border border-teal-100 shadow-sm relative overflow-hidden project-card-item p-4 sm:p-6 space-y-4" data-category="uiux web" id="aoshuttle-project-card" data-live-url="">
        <div className="relative z-10 space-y-3.5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="space-y-3 lg:col-span-7 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1 project-card-header">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-700 text-white font-bold text-xs shadow-xs">
                        08
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-teal-200/80 text-teal-800 text-[11px] font-semibold shadow-xs">
                        Campus Assignment
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-teal-100/70 border border-teal-200/70 text-teal-900 text-[11px] font-semibold">
                        Public Transit
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-teal-100/70 border border-teal-200/70 text-teal-900 text-[11px] font-semibold">
                        Mobile App
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
                      <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs transition shadow-xs" href="https://www.figma.com/proto/wXETuQuIodDACgIQfcx1ms/Prak.-IMK_Jessica-Theresia_51422702?node-id=93-2808&amp;node-type=canvas&amp;t=WsmXhkpWMncCL88K-1&amp;scaling=scale-down&amp;content-scaling=fixed&amp;page-id=93%3A1510&amp;starting-point-node-id=93%3A2808&amp;show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                        <span className="">
                          View Prototype
                        </span>
                        <span className="text-xs">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-900 tracking-tight leading-none">
                    {"AOShuttle "}
                    <span className="text-teal-700">
                      Mobile App
                    </span>
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    UI Designer · UX Designer · UX Researcher
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Redesigned a public transportation mobile application of AOShuttle to improve usability and efficiency for daily commuting needs through a clearer structure and user-centered navigation.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-[#fff5f6] border border-rose-100 shadow-xs space-y-1 flex flex-col justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                        !
                      </div>
                      <h5 className="text-[11px] font-bold text-slate-900 leading-tight">
                        Problem Statement
                      </h5>
                    </div>
                    <p className="text-[10px] text-slate-600 leading-snug">
                      Users experienced difficulties due to poor usability, including complex ticket booking, unclear route information, limited search tolerance, and inefficient access to customer support.
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#f5faf7] border border-emerald-100 shadow-xs space-y-1 flex flex-col justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                        💡
                      </div>
                      <h5 className="text-[11px] font-bold text-slate-900 leading-tight">
                        Solution
                      </h5>
                    </div>
                    <p className="text-[10px] text-slate-600 leading-snug">
                      The solution focused on restructuring the application using a card sorting method to organize features into clear and intuitive functional areas.
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-sky-100 shadow-xs space-y-1 flex flex-col justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                        ⚙
                      </div>
                      <h5 className="text-[11px] font-bold text-slate-900 leading-tight">
                        User Flow Use Cases
                      </h5>
                    </div>
                    <div className="space-y-1 text-[10px]">
                      <div className="flex items-start gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          01
                        </span>
                        <div>
                          <strong className="text-slate-800 block leading-none">
                            Main Features
                          </strong>
                          <span className="text-slate-500 text-[9px]">
                            Quick access to essential services
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          02
                        </span>
                        <div>
                          <strong className="text-slate-800 block leading-none">
                            Booking
                          </strong>
                          <span className="text-slate-500 text-[9px]">
                            Search and purchase bus tickets
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          03
                        </span>
                        <div>
                          <strong className="text-slate-800 block leading-none">
                            Live Chat
                          </strong>
                          <span className="text-slate-500 text-[9px]">
                            Get help from customer support
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          04
                        </span>
                        <div>
                          <strong className="text-slate-800 block leading-none">
                            History
                          </strong>
                          <span className="text-slate-500 text-[9px]">
                            View past bookings and trips
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          05
                        </span>
                        <div>
                          <strong className="text-slate-800 block leading-none">
                            {"Settings & Services"}
                          </strong>
                          <span className="text-slate-500 text-[9px]">
                            {"Manage account & app preferences"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-2 carousel-container rounded-2xl bg-white/60 border border-teal-100/60 overflow-hidden" data-carousel="aoshuttle">
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <svg className="absolute w-[110%] h-[110%] text-teal-200/50 animated-blob" fill="none" viewBox="0 0 300 200">
                  <path d="M45,110 C20,60 85,15 160,35 C235,55 285,30 275,105 C265,180 180,185 110,175 C40,165 70,160 45,110 Z" fill="currentColor"></path>
                </svg>
                <div className="w-72 h-72 rounded-full bg-teal-200/40 blur-2xl"></div>
                <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-teal-400/60"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-teal-300/60"></div>
              </div>
              <div className="relative z-10 w-full max-w-sm interactive-mockup-wrapper">
                <div className="relative w-full overflow-hidden rounded-xl" id="aoshuttle-slides">
                  <div className="carousel-slide transition-all duration-300">
                    
                  </div>
                </div>
                <button aria-label="Previous slide" className="slide-nav-btn absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { prevSlide('aoshuttle'); }} type="button">
                  <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <button aria-label="Next slide" className="slide-nav-btn absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { nextSlide('aoshuttle'); }} type="button">
                  <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5 pt-2 relative z-20" id="aoshuttle-dots">
                <button className="carousel-dot h-1.5 rounded-full transition-all bg-teal-700 w-5" onClick={() => { goToSlide('aoshuttle', 0); }} type="button"></button>
                <button className="carousel-dot h-1.5 rounded-full transition-all bg-teal-200 w-2" onClick={() => { goToSlide('aoshuttle', 0); }} type="button"></button>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-teal-100/90">
            <button id="aoshuttle-accordion-btn" type="button" onClick={() => { toggleAccordion('aoshuttle'); }} aria-expanded="false" className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-teal-200/80 shadow-xs transition group">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-700"></span>
                <span className="accordion-text text-xs font-bold text-slate-800 tracking-tight group-hover:text-teal-800 transition-colors">
                  {"View Full Case Study & Research Breakdown"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800">
                <span className="text-[11px] font-mono uppercase text-slate-400">
                  {"Card Sorting & 92.5 Score"}
                </span>
                <svg className="accordion-chevron w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
            <div id="aoshuttle-accordion" className="case-study-accordion-content">
              <div className="case-study-accordion-inner">
                <div className="pt-3 grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
                  <div className="lg:col-span-7 p-3 rounded-2xl bg-white/90 border border-teal-100/80 shadow-xs space-y-2 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                            📋
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                            UX Research Process — Card Sorting
                          </h4>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-100 text-[10px] font-semibold text-teal-800">
                          Information Architecture
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 italic leading-snug">
                      Organized features and functional hierarchy based on users' mental models to establish intuitive navigation categories.
                    </p>
                  </div>
                  <div className="lg:col-span-5 p-3 rounded-2xl bg-white/90 border border-teal-100/80 shadow-xs flex flex-col justify-between space-y-2.5">
                    <div className="flex items-center justify-between gap-2 border-b border-teal-100/80 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          📊
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                          Usability Test Score
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-900 text-[10px] font-bold border border-emerald-200">
                        Validated
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl my-auto">
                      <div className="w-20 h-20 rounded-full border-4 border-emerald-500 bg-white flex flex-col items-center justify-center shadow-sm flex-shrink-0">
                        <span className="text-2xl font-bold text-slate-900 tracking-tight leading-none">
                          92.5
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-600 mt-0.5">
                          (Grade A)
                        </span>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <p className="text-slate-700 text-xs leading-relaxed font-normal">
                          {"The redesigned app achieved a usability test score of "}
                          <strong className="font-bold text-slate-900">
                            92.5
                          </strong>
                          , indicating high usability and user satisfaction.
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 italic text-center sm:text-left">
                      Evaluated with representative commuters.
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
