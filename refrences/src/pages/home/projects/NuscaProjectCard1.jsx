import PrivateLink from "./PrivateLink.jsx";
import { goToSlide, nextSlide, prevSlide, toggleAccordion } from '@/behaviors/home/projectHandlers.js';

const UAT_RATINGS = [
  ["Perceived usefulness", 4.8],
  ["Ease of learning", 4.67],
  ["Decision support", 4.67],
  ["Visual presentation", 4.6],
  ["Satisfaction & reuse intent", 4.6],
  ["Ease of use", 4.53],
  ["Save / print results", 4.53],
  ["Information clarity", 4.47],
  ["Efficiency", 4.4],
  ["Trust in AI results", 4.27],
];

const BLACK_BOX_SCENARIOS = [
  "Valid image upload",
  "Reject non-images",
  "Reject files over 5 MB",
  "Camera capture",
  "Camera permission denied",
  "Crop, rotate & zoom",
  "Confirm & analyze",
  "Valid nutrition analysis",
  "Nutri-Level consistency",
  "Backend disconnection",
  "Full image view",
  "Scan another product",
];

const PRODUCT_OPPORTUNITIES = [
  ["01 · Trust", "Explain how nutrient values determine the Nutri-Level; let users verify them against the label."],
  ["02 · Efficiency", "Improve analysis speed and communicate progress while users wait."],
  ["03 · Continuity", "Explore scan history, clearer GGL guidance, and more visible save/print actions."],
];

export default function NuscaProjectCard1() {
  return (
      <article className="relative overflow-hidden project-card-item rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-[#f3faf7] via-[#ebf7f2] to-[#e4f5ed] p-5 sm:p-7 shadow-sm transition-all duration-300" data-category="aiml web uiux" id="nusca-project-card-1" data-live-url="https://nusca.vercel.app/" style={{ borderRadius: "36px 16px 40px 20px" }}>
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-teal-200/30 blur-2xl"></div>
        <div className="relative z-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#006e4b] text-white font-bold text-xs shadow-xs">
                  03
                </span>
                <span className="px-2.5 py-0.5 bg-emerald-100/90 text-[#006e4b] text-[11px] font-semibold rounded-full border border-emerald-200/80 shadow-xs">
                  {"Nutrition & Health"}
                </span>
                <span className="px-2.5 py-0.5 bg-white/80 text-[#006e4b] text-[11px] font-semibold rounded-full border border-emerald-200/80 shadow-xs backdrop-blur-sm">
                  Web Application
                </span>
                <span className="px-2.5 py-0.5 bg-white/80 text-[#006e4b] text-[11px] font-semibold rounded-full border border-emerald-200/80 shadow-xs backdrop-blur-sm">
                  UI/UX Design
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PrivateLink label="GitHub" restricted />
                <span className="dev-switch" data-live-badge="" data-state="checking" role="switch" aria-checked="false" aria-readonly="true" aria-disabled="true" aria-label="Live deploy status" tabIndex="-1">
                  <span className="dev-switch-label">Live deploy</span>
                  <span className="dev-switch-track"><i></i></span>
                  <span className="dev-switch-text" data-live-text="">Checking…</span>
                </span>
                <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition shadow-xs" hidden data-live-link="" target="_blank" rel="noopener noreferrer">Open Live App ↗</a>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Nusca
                  </h2>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#006e4b]">
                    {"Final Research Project · UI/UX Designer & UX Researcher"}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm font-normal leading-relaxed text-slate-700">
              A web application designed to help users scan packaged drink nutrition labels and instantly understand Nutri-Level results through an accessible, human-centered experience.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2 w-full justify-start">
                <div className="rounded-xl border border-emerald-200/70 bg-white/90 px-3.5 py-1.5 text-center shadow-xs backdrop-blur-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                    UAT Score
                  </span>
                  <span className="text-xs font-extrabold text-[#006e4b]">
                    91.07%
                  </span>
                </div>
                <div className="rounded-xl border border-emerald-200/70 bg-white/90 px-3.5 py-1.5 text-center shadow-xs backdrop-blur-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                    Participants
                  </span>
                  <span className="text-xs font-extrabold text-[#006e4b]">
                    15 users
                  </span>
                </div>
                <div className="rounded-xl border border-emerald-200/70 bg-white/90 px-3.5 py-1.5 text-center shadow-xs backdrop-blur-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                    Avg. Rating
                  </span>
                  <span className="text-xs font-extrabold text-[#006e4b]">
                    4.55 / 5
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-container relative flex flex-col items-center justify-center p-3 lg:col-span-5" data-carousel="nusca">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
              <svg className="animated-blob absolute h-[115%] w-[115%] text-emerald-300/40" fill="none" viewBox="0 0 300 200">
                <path d="M45,110 C20,60 85,15 160,35 C235,55 285,30 275,105 C265,180 180,185 110,175 C40,165 70,160 45,110 Z" fill="currentColor"></path>
              </svg>
              <div className="h-64 w-64 rounded-full bg-emerald-200/40 blur-2xl"></div>
              <div className="absolute right-8 top-4 h-2 w-2 rounded-full bg-emerald-600/50"></div>
              <div className="absolute bottom-6 left-6 h-3 w-3 rounded-full bg-teal-300/60"></div>
            </div>
            <div className="interactive-mockup-wrapper relative z-10 w-full max-w-sm overflow-hidden border border-emerald-200/80 bg-white/80 p-2.5 shadow-sm backdrop-blur-sm" style={{ borderRadius: "36px 18px 42px 20px" }}>
              <div className="relative w-full overflow-hidden rounded-2xl" id="nusca-slides">
                <div className="carousel-slide transition-all duration-300">
                  
                </div>
                <div className="carousel-slide hidden transition-all duration-300">
                  
                </div>
              </div>
              <button aria-label="Previous slide" className="slide-nav-btn absolute -left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-slate-700 shadow-sm hover:text-slate-900" onClick={() => { prevSlide('nusca'); }} type="button">
                <svg className="animated-blob h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
              <button aria-label="Next slide" className="slide-nav-btn absolute -right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-slate-700 shadow-sm hover:text-slate-900" onClick={() => { nextSlide('nusca'); }} type="button">
                <svg className="animated-blob h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </div>
            <div className="relative z-20 flex items-center justify-center gap-1.5 pt-3" id="nusca-dots">
              <button className="carousel-dot h-1.5 w-5 rounded-full bg-emerald-700 transition-all" onClick={() => { goToSlide('nusca', 0); }} type="button"></button>
              <button className="carousel-dot h-1.5 w-2 rounded-full bg-emerald-200 transition-all" onClick={() => { goToSlide('nusca', 1); }} type="button"></button>
            </div>
          </div>
        </div>
        <div className="relative z-10 space-y-4 border-t border-emerald-200/70 pt-4">
          <div className="grid grid-cols-1 gap-3 text-xs md:grid-cols-12">
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-xs backdrop-blur-sm space-y-1.5 md:col-span-4" style={{ borderRadius: "20px 8px 20px 8px" }}>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                  Problem Statement
                </h4>
              </div>
              <p className="text-xs font-normal leading-relaxed text-slate-600">
                Consumers often struggle to decipher nutrition facts from dense numeric tables without manual calculation and nutritional domain expertise.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-xs backdrop-blur-sm space-y-1.5 md:col-span-4" style={{ borderRadius: "8px 20px 8px 20px" }}>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#006e4b]"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                  Design Goal
                </h4>
              </div>
              <p className="text-xs font-normal leading-relaxed text-slate-600">
                Create an intuitive, guided mobile scanning flow that automatically extracts nutrition data and renders clear, grade-based Nutri-Level feedback.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-xs backdrop-blur-sm space-y-1.5 md:col-span-4" style={{ borderRadius: "20px 8px 20px 8px" }}>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                  Key Features
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-700">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-2">
                  <span className="block text-[10px] font-bold text-slate-900">
                    Label Scan
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Guided camera capture
                  </span>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-2">
                  <span className="block text-[10px] font-bold text-slate-900">
                    Nutri-Grade
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Instant A–D rating
                  </span>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-2">
                  <span className="block text-[10px] font-bold text-slate-900">
                    Breakdown
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {"Sugar, salt & fat bars"}
                  </span>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-2">
                  <span className="block text-[10px] font-bold text-slate-900">
                    History
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Saved drink comparisons
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-emerald-200/70">
            <button id="nusca-accordion-btn" type="button" onClick={() => { toggleAccordion('nusca'); }} aria-expanded="false" className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-emerald-200/80 shadow-xs transition group">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#006e4b]"></span>
                <span className="accordion-text text-xs font-bold text-slate-800 tracking-tight group-hover:text-emerald-800 transition-colors">
                  {"View Full Case Study & Research Breakdown"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                <span className="text-[11px] font-mono uppercase text-slate-400">
                  4 Phases Workflow
                </span>
                <svg className="accordion-chevron w-4 h-4 text-[#006e4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
            <div id="nusca-accordion" className="case-study-accordion-content">
              <div className="case-study-accordion-inner">
                <div className="pt-3 space-y-2.5">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="relative space-y-1 rounded-2xl border border-emerald-100 bg-white/95 p-3.5 shadow-xs transition hover:border-emerald-300" style={{ borderRadius: "20px 10px 20px 10px" }}>
                      <div className="flex items-center justify-between">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#006e4b] text-[10px] font-bold text-white shadow-xs">
                          01
                        </span>
                        <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-xs font-bold text-emerald-400 sm:block">
                          ›
                        </span>
                      </div>
                      <h5 className="mt-1.5 text-xs font-bold leading-tight text-slate-900">
                        User Research
                      </h5>
                      <p className="text-[11px] leading-snug text-slate-500">
                        {"Conducted surveys & interviews on nutritional label readability habits."}
                      </p>
                    </div>
                    <div className="relative space-y-1 rounded-2xl border border-emerald-100 bg-white/95 p-3.5 shadow-xs transition hover:border-emerald-300" style={{ borderRadius: "10px 20px 10px 20px" }}>
                      <div className="flex items-center justify-between">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#006e4b] text-[10px] font-bold text-white shadow-xs">
                          02
                        </span>
                        <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-xs font-bold text-emerald-400 sm:block">
                          ›
                        </span>
                      </div>
                      <h5 className="mt-1.5 text-xs font-bold leading-tight text-slate-900">
                        Wireframing
                      </h5>
                      <p className="text-[11px] leading-snug text-slate-500">
                        {"Mapped fast scanning viewfinder heuristics & quick summary wireflows."}
                      </p>
                    </div>
                    <div className="relative space-y-1 rounded-2xl border border-emerald-100 bg-white/95 p-3.5 shadow-xs transition hover:border-emerald-300" style={{ borderRadius: "20px 10px 20px 10px" }}>
                      <div className="flex items-center justify-between">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#006e4b] text-[10px] font-bold text-white shadow-xs">
                          03
                        </span>
                        <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-xs font-bold text-emerald-400 sm:block">
                          ›
                        </span>
                      </div>
                      <h5 className="mt-1.5 text-xs font-bold leading-tight text-slate-900">
                        Interface Design
                      </h5>
                      <p className="text-[11px] leading-snug text-slate-500">
                        {"Designed high-contrast, accessible typography & clean data cards."}
                      </p>
                    </div>
                    <div className="space-y-1 rounded-2xl border border-emerald-100 bg-white/95 p-3.5 shadow-xs transition hover:border-emerald-300 sm:grid-cols-4" style={{ borderRadius: "10px 20px 10px 20px" }}>
                      <div className="flex items-center justify-between">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#006e4b] text-[10px] font-bold text-white shadow-xs">
                          04
                        </span>
                      </div>
                      <h5 className="mt-1.5 text-xs font-bold leading-tight text-slate-900">
                        Usability Testing
                      </h5>
                      <p className="text-[11px] leading-snug text-slate-500">
                        Tested with 15 participants, receiving an average rating of 4.55 / 5.
                      </p>
                    </div>
                  </div>
                  <section aria-label="Nusca product validation findings" className="rounded-2xl border border-emerald-200/80 bg-white/90 p-3.5 shadow-xs sm:p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#006e4b]">
                        Product validation
                      </h4>
                      <span className="text-[10px] font-medium text-slate-400">
                        Prototype evaluation · n=15
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                      5 students, 5 homemakers, and 5 employed participants (including one healthcare worker) tried the scan workflow, then rated 10 experience dimensions on a 5-point Likert scale.
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      <div className="rounded-lg bg-emerald-50 px-2.5 py-2">
                        <strong className="block text-sm font-extrabold text-[#006e4b]">91.07%</strong>
                        <span className="text-[9px] leading-tight text-slate-500">Overall UAT questionnaire score</span>
                      </div>
                      <div className="rounded-lg bg-emerald-50 px-2.5 py-2">
                        <strong className="block text-sm font-extrabold text-[#006e4b]">4.55 / 5</strong>
                        <span className="text-[9px] leading-tight text-slate-500">Average user rating</span>
                      </div>
                      <div className="rounded-lg bg-emerald-50 px-2.5 py-2">
                        <strong className="block text-sm font-extrabold text-[#006e4b]">4.80 / 5</strong>
                        <span className="text-[9px] leading-tight text-slate-500">Highest: perceived usefulness</span>
                      </div>
                      <div className="rounded-lg bg-amber-50 px-2.5 py-2">
                        <strong className="block text-sm font-extrabold text-amber-700">4.27 / 5</strong>
                        <span className="text-[9px] leading-tight text-slate-500">Lowest: trust in AI results</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="mb-1.5 flex items-center justify-between">
                        <h5 className="text-[10px] font-bold text-slate-700">UAT scores by experience dimension</h5>
                        <span className="text-[9px] text-slate-400">Mean · / 5</span>
                      </div>
                      <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                        {UAT_RATINGS.map(([label, score]) => (
                          <div className="flex items-center gap-2" key={label}>
                            <span className="w-36 shrink-0 truncate text-[9px] text-slate-600">{label}</span>
                            <span className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-emerald-50">
                              <span
                                className={`block h-full rounded-full ${score <= 4.4 ? 'bg-amber-400' : 'bg-emerald-500'}`}
                                style={{ width: `${(score / 5) * 100}%` }}
                              />
                            </span>
                            <strong className="w-7 text-right text-[9px] font-bold tabular-nums text-slate-700">{score.toFixed(2)}</strong>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 border-t border-emerald-100 pt-2.5">
                      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-1">
                        <h5 className="text-[10px] font-bold text-slate-700">Black-box functional coverage</h5>
                        <span className="text-[9px] text-slate-400">12 scenarios documented · not pass/fail results</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {BLACK_BOX_SCENARIOS.map((scenario, index) => (
                          <span className="rounded-md bg-slate-50 px-1.5 py-1 text-[9px] leading-tight text-slate-600" key={scenario}>
                            <strong className="mr-1 text-emerald-700">{String(index + 1).padStart(2, '0')}</strong>{scenario}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 border-t border-emerald-100 pt-2.5">
                      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-1">
                        <h5 className="text-[10px] font-bold text-slate-700">Product opportunities from feedback</h5>
                        <span className="text-[9px] text-slate-400">Proposed, not shipped</span>
                      </div>
                      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
                        {PRODUCT_OPPORTUNITIES.map(([priority, opportunity]) => (
                          <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-2" key={priority}>
                            <strong className="block text-[9px] font-extrabold uppercase tracking-wide text-emerald-800">{priority}</strong>
                            <p className="mt-0.5 text-[9px] leading-relaxed text-slate-600">{opportunity}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-2.5 text-[9px] leading-relaxed text-slate-400">
                      UAT scores reflect this 15-person prototype sample, not population-level adoption, task completion, or model accuracy. The supplied black-box report documents scenarios and expected behavior, but does not include execution outcomes.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
  );
}
