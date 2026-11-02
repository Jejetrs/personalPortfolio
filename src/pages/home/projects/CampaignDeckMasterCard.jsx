import { goToSlide, nextSlide, prevSlide, toggleAccordion } from '@/behaviors/home/projectHandlers.js';

import UxDropdown from './UxDropdown.jsx';

export default function CampaignDeckMasterCard() {
  return (
      <article className="rounded-2xl bg-gradient-to-b from-[#fff8f6] via-[#fffaf7] to-[#fff3f0] border border-rose-200/70 shadow-sm relative overflow-hidden project-card-item p-4 sm:p-5 space-y-3.5" data-category="b2b web uiux" id="campaign-deck-master-card" data-live-url="">
        <div className="space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-rose-100/80 pb-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs shadow-xs">
                02
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[11px] font-bold shadow-xs">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1c1.88-.34 3.32-1.78 3.61-3.96C19.08 11.63 21 9.55 21 7V5c0-1.1-.9-2-2-2zM5 7h2v3c-1.1 0-2-.9-2-2V7zm14 1c0 1.1-.9 2-2 2V5h2v3z"></path>
                </svg>
                Top 2 Best Team Project
              </span>
              <span className="px-2 py-0.5 bg-rose-100/80 text-rose-800 text-[11px] font-semibold rounded-full border border-rose-200/60">
                B2B Web Platform
              </span>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-900 text-[11px] font-semibold rounded-full border border-amber-200/70">
                Messaging System
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
              <a className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition shadow-xs" href="https://www.figma.com/proto/W88tC3BrTQv1klClBUhfeh/OCA-Campaign-flow-desaigner?node-id=1034-35226&amp;node-type=frame&amp;t=ezB7vPuy3KentmJL-1&amp;scaling=scale-down-width&amp;content-scaling=fixed&amp;page-id=238%3A24907&amp;starting-point-node-id=1034%3A35226" target="_blank" rel="noopener noreferrer">
                <span className="">
                  View Prototype
                </span>
                <span className="text-xs">
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900">
                    Campaign Deck Master
                  </h2>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-mono font-bold">
                    OCA BLAST Inspired
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-700 mt-0.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-900 font-bold">
                    UI Designer · UX Designer · UX Researcher
                  </span>
                  <span className="text-slate-300">
                    |
                  </span>
                  <span className="text-rose-700 font-semibold italic">
                    Digistar Class 2024 · Telkom Indonesia
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                  Campaign Deck Master is an enterprise messaging campaign web application designed to optimize WhatsApp and Email broadcast communication for businesses, inspired by OCA BLAST by Telkom.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-white/95 border border-rose-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      !
                    </div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-rose-950">
                      Problem
                    </h4>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-0.5 pl-3 list-disc marker:text-rose-500">
                    <li className="">
                      Repetitive manual campaign creation
                    </li>
                    <li className="">
                      Inefficient broadcast workflows
                    </li>
                    <li className="">
                      Limited campaign performance visibility
                    </li>
                  </ul>
                </div>
                <div className="p-2.5 rounded-xl bg-white/95 border border-indigo-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      ◎
                    </div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-indigo-950">
                      Goal
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Design a scalable and enterprise-oriented platform that streamlines content creation, campaign execution, and performance evaluation.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/95 border border-amber-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      ★
                    </div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-950">
                      Key Features
                    </h4>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-0.5 pl-3 list-disc marker:text-amber-500">
                    <li className="">
                      AI Copywriting Assistant
                    </li>
                    <li className="">
                      Campaign Template Builder
                    </li>
                    <li className="">
                      {"WhatsApp & Email Scheduling"}
                    </li>
                    <li className="">
                      Real-time Analytics Dashboard
                    </li>
                  </ul>
                </div>
                <div className="p-2.5 rounded-xl bg-white/95 border border-emerald-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      📊
                    </div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-950">
                      Evaluation
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Conducted usability testing using Userberry with 10 participants, including P2MW entrepreneurs and general users.
                  </p>
                </div>
                <div className="sm:col-span-2 p-2.5 rounded-xl bg-gradient-to-r from-rose-50 via-pink-50/70 to-amber-50/50 border border-rose-200/80 shadow-xs flex items-start gap-2">
                  <div className="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    💡
                  </div>
                  <div className="text-[11px] text-slate-700 leading-relaxed">
                    <strong className="font-bold text-rose-950 uppercase tracking-wider text-[11px] mr-1">
                      {"Impact & Insight:"}
                    </strong>
                    Users showed strong preference for AI-assisted content creation, visual analytics, and structured workflows that improved campaign efficiency and decision-making.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-2 carousel-container rounded-2xl bg-white/60 border border-rose-100/60 overflow-hidden" data-carousel="campaign-deck">
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <svg className="absolute w-[110%] h-[110%] text-rose-200/50 animated-blob" fill="none" viewBox="0 0 300 200">
                  <path d="M45,110 C20,60 85,15 160,35 C235,55 285,30 275,105 C265,180 180,185 110,175 C40,165 70,160 45,110 Z" fill="currentColor"></path>
                </svg>
                <div className="w-72 h-72 rounded-full bg-rose-200/40 blur-2xl"></div>
                <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-rose-400/60"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-rose-300/60"></div>
              </div>
              <div className="relative z-10 flex items-center justify-between w-full px-1 text-xs font-bold text-slate-700 mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span className="text-[10px] font-mono uppercase text-slate-500">
                    System Architecture
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold border border-rose-200/60">
                  Validated with 10 Users
                </span>
              </div>
              <div className="relative z-10 w-full max-w-sm interactive-mockup-wrapper">
                <div className="relative w-full overflow-hidden rounded-xl" id="campaign-deck-slides">
                  <div className="carousel-slide transition-all duration-300">
                    
                  </div>
                </div>
                <button aria-label="Previous slide" className="slide-nav-btn absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { prevSlide('campaign-deck'); }} type="button">
                  <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <button aria-label="Next slide" className="slide-nav-btn absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { nextSlide('campaign-deck'); }} type="button">
                  <svg className="w-4 h-4 animated-blob" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5 pt-2 relative z-20" id="campaign-deck-dots">
                <button className="carousel-dot h-1.5 rounded-full transition-all bg-rose-700 w-5" onClick={() => { goToSlide('campaign-deck', 0); }} type="button"></button>
                <button className="carousel-dot h-1.5 rounded-full transition-all bg-rose-200 w-2" onClick={() => { goToSlide('campaign-deck', 0); }} type="button"></button>
              </div>
              <div className="relative z-10 w-full pt-1.5 mt-1 border-t border-rose-100 flex items-center justify-between text-[11px] text-slate-600">
                <span className="inline-flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Userberry Usability Test
                </span>
                <span className="font-mono font-semibold text-rose-700 text-[10px]">
                  {"Multi-Blast & Templates"}
                </span>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-rose-100">
            <button id="campaign-deck-accordion-btn" type="button" onClick={() => { toggleAccordion('campaign-deck'); }} aria-expanded="false" className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-rose-200/70 shadow-xs transition group">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                <span className="accordion-text text-xs font-bold text-slate-800 tracking-tight group-hover:text-rose-700 transition-colors">
                  {"View Full Case Study & Research Breakdown"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700">
                <span className="text-[11px] font-mono uppercase text-slate-400">
                  {"Research & Journey Maps"}
                </span>
                <svg className="accordion-chevron w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
            <div id="campaign-deck-accordion" className="case-study-accordion-content">
              <div className="case-study-accordion-inner">
                <div className="pt-3 space-y-2">
                  <UxDropdown title="UX process" meta="Discovery to validated enterprise interface"><div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5">
                    <div className="p-2 rounded-xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          01
                        </span>
                        <h4 className="text-[11px] font-bold text-slate-900 leading-tight">
                          User Research
                        </h4>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-snug">
                        {"Surveys (GForms) analyzing blast habits & needs."}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          02
                        </span>
                        <h4 className="text-[11px] font-bold text-slate-900 leading-tight">
                          Affinity Diagram
                        </h4>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-snug">
                        {"Synthesized insights & recurring workflow pain points."}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          03
                        </span>
                        <h4 className="text-[11px] font-bold text-slate-900 leading-tight">
                          Empathy Map
                        </h4>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-snug">
                        {"Framed core user motivations, blockers & expectations."}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-colors">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                          04
                        </span>
                        <h4 className="text-[11px] font-bold text-slate-900 leading-tight">
                          User Journey
                        </h4>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-snug">
                        Structured end-to-end messaging broadcast flow.
                      </p>
                    </div>
                  </div></UxDropdown>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between space-y-3">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-semibold text-slate-400 block leading-tight tracking-wider">
                              {"Quotes & Profile"}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900 leading-tight">
                              User Research Voices
                            </h4>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="px-2.5 py-1.5 rounded-lg bg-rose-50/70 border border-rose-100 text-[11px] italic text-slate-700 leading-snug">
                            “Proses pembuatan campaign masih manual dan memakan waktu”
                          </div>
                          <div className="px-2.5 py-1.5 rounded-lg bg-rose-50/70 border border-rose-100 text-[11px] italic text-slate-700 leading-snug">
                            “Butuh template yang siap pakai”
                          </div>
                          <div className="px-2.5 py-1.5 rounded-lg bg-rose-50/70 border border-rose-100 text-[11px] italic text-slate-700 leading-snug">
                            “Ingin melihat performa campaign dengan lebih jelas”
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                              Goals
                            </span>
                            <ul className="text-[10px] text-slate-600 space-y-0.5 pl-3 list-disc marker:text-emerald-500">
                              <li className="">
                                Meningkatkan penjualan
                              </li>
                              <li className="">
                                Menjangkau pelanggan
                              </li>
                              <li className="">
                                Konten menarik
                              </li>
                            </ul>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block">
                              Frustrations
                            </span>
                            <ul className="text-[10px] text-slate-600 space-y-0.5 pl-3 list-disc marker:text-rose-500">
                              <li className="">
                                {"Proses manual & ulang"}
                              </li>
                              <li className="">
                                Kurang insight
                              </li>
                              <li className="">
                                Tanpa panduan copy
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 italic pt-1 border-t border-slate-100">
                        {"User pain points & motivations"}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between space-y-3">
                      <div className="w-full h-full flex flex-col justify-between space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">
                            Affinity Diagram
                          </h4>
                          <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100 text-[10px] font-bold">
                            5 Themes
                          </span>
                        </div>
                        <div className="w-full h-44 rounded-xl overflow-hidden border border-rose-100/80 bg-slate-50 relative flex items-center justify-center">
                          <img alt="Affinity diagram of the OCA campaign flow" className="h-full w-full object-contain" loading="lazy" src="/assets/projects/UI%20UX/campaign%20deck%20master/Affinity%20Diagram.webp" />
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
                          <p className="text-[10px] text-slate-400 italic">
                            Insight clustering from survey data
                          </p>
                          <span data-project-file-inline="OCA affinity diagram"></span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-xs flex flex-col justify-between space-y-3">
                      <div className="w-full h-full flex flex-col justify-between space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">
                            Customer Journey Map
                          </h4>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                            Validated
                          </span>
                        </div>
                        <div className="w-full h-44 rounded-xl overflow-hidden border border-rose-100/80 bg-slate-50 relative flex items-center justify-center">
                          <img alt="Customer journey map of the campaign flow" className="h-full w-full object-contain" loading="lazy" src="/assets/projects/UI%20UX/campaign%20deck%20master/Customer%20Journey%20Map.webp" />
                        </div>
                        <p className="text-[10px] text-slate-400 italic pt-1 border-t border-slate-100">
                          End-to-end campaign experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
  );
}
