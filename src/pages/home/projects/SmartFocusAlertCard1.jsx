import PrivateLink from "./PrivateLink.jsx";
import { goToSlide, nextSlide, prevSlide, toggleAccordion } from '@/behaviors/home/projectHandlers.js';

import UxDropdown from './UxDropdown.jsx';

export default function SmartFocusAlertCard1() {
  return (
      <article className="rounded-2xl bg-[#f6f8fd] border border-blue-100 shadow-sm relative overflow-hidden project-card-item p-4 sm:p-6 space-y-4" data-category="aiml web uiux" id="smart-focus-alert-card-1">
        <div className="relative z-10 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 project-card-header">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs shadow-xs">
                      04
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      {"AI & Computer Vision"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      Productivity
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      Web Application
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    
                    <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs transition shadow-xs" href="https://www.figma.com/proto/pBIGNOVNe6UQSEpDH3sqxK/SMART-FOCUS?node-id=19-556&amp;p=f&amp;t=njEg9MLtPiUcaLq1-1&amp;scaling=scale-down-width&amp;content-scaling=fixed&amp;page-id=9%3A108&amp;starting-point-node-id=19%3A556" target="_blank" rel="noopener noreferrer">
                      <span className="">
                        View Prototype
                      </span>
                      <span className="text-xs">
                        ↗
                      </span>
                    </a>
                    <PrivateLink label="Live app" />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                    Smart Focus Alert
                  </h2>
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.5-6.2 4.5 2.3-7.3-6.1-4.5h7.6z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider mt-1">
                  UI/UX Designer · Researcher · Fullstack Engineer · AI Engineer
                </p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                An AI-powered web application that monitors user focus in real time using computer vision and MediaPipe Face Mesh, helping learners stay aware of distractions and improve productivity during online learning.
              </p>
              <div className="flex flex-wrap items-center justify-start gap-2.5 pt-1">
                <div className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-100/90 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block leading-tight tracking-wider">
                      Usability Score
                    </span>
                    <span className="text-xs font-bold text-blue-800">
                      {"87.67 "}
                      <span className="text-[10px] font-normal text-slate-400">
                        / 100
                      </span>
                    </span>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-100/90 shadow-xs flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1c1.88-.34 3.32-1.78 3.61-3.96C19.08 11.63 21 9.55 21 7V5c0-1.1-.9-2-2-2zM5 7h2v3c-1.1 0-2-.9-2-2V7zm14 1c0 1.1-.9 2-2 2V5h2v3z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block leading-tight tracking-wider">
                      Black-box
                    </span>
                    <span className="text-xs font-bold text-emerald-700">
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-2 carousel-container" data-carousel="smart-focus">
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <svg className="absolute w-[110%] h-[110%] text-blue-200/50 animated-blob-slow" fill="none" viewBox="0 0 300 200">
                  <path d="M40,110 C15,50 85,20 160,25 C235,30 280,35 270,115 C260,195 180,180 110,180 C40,180 65,170 40,110 Z" fill="currentColor"></path>
                </svg>
                <div className="w-72 h-72 rounded-full bg-blue-200/40 blur-2xl"></div>
                <div className="absolute top-5 right-9 w-2 h-2 rounded-full bg-blue-400/60"></div>
                <div className="absolute bottom-5 left-7 w-3 h-3 rounded-full bg-blue-300/60"></div>
              </div>
              <div className="hidden md:flex absolute -top-2 left-2 z-20 items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-blue-200 shadow-xs text-blue-700 font-handwriting text-xs">
                <span className="">
                  Real-time focus monitoring with AI
                </span>
                <svg className="w-3.5 h-3.5 text-blue-600 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div className="relative z-10 w-full max-w-sm interactive-mockup-wrapper">
                <div className="relative w-full overflow-hidden rounded-xl" id="smart-focus-slides">
                  <div className="carousel-slide transition-all duration-300">
                    
                  </div>
                  <div className="carousel-slide transition-all duration-300 hidden">
                    
                  </div>
                </div>
                <button aria-label="Previous slide" className="slide-nav-btn absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { prevSlide('smart-focus'); }} type="button">
                  <svg className="w-4 h-4 animated-blob-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <button aria-label="Next slide" className="slide-nav-btn absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-900" onClick={() => { nextSlide('smart-focus'); }} type="button">
                  <svg className="w-4 h-4 animated-blob-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5 pt-3 relative z-20" id="smart-focus-dots">
                <button className="carousel-dot h-1.5 rounded-full transition-all bg-blue-700 w-5" onClick={() => { goToSlide('smart-focus', 0); }} type="button"></button>
                <button className="carousel-dot h-1.5 rounded-full transition-all bg-blue-200 w-2" onClick={() => { goToSlide('smart-focus', 1); }} type="button"></button>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-100/90 pt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="bg-white rounded-xl p-3.5 border border-blue-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                        <path d="M12 8v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-900">
                      Problem
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Learners often lose focus during online learning without realizing distraction or drowsiness.
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium pt-1 border-t border-slate-100">
                  Unmonitored self-paced study
                </span>
              </div>
              <div className="bg-white rounded-xl p-3.5 border border-blue-100 shadow-xs space-y-1.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-900">
                      Solution
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    A real-time AI-based focus monitoring system with instant alerts to help users regain concentration.
                  </p>
                </div>
                <span className="text-[10px] text-emerald-800 font-medium pt-1 border-t border-slate-100">
                  Real-time adaptive feedback
                </span>
              </div>
              <div className="bg-white rounded-xl p-3.5 border border-blue-100 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-900">
                    Key Features
                  </h4>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-600 font-medium">
                  <li className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Real-time Focus Detection
                  </li>
                  <li className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    {"Drowsiness & Yawn Detection"}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Eye Gaze Tracking
                  </li>
                  <li className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Focus Activity Report (PDF)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    {"Sound & Text-to-Speech Alert"}
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-2.5 border border-blue-100 shadow-xs"><UxDropdown title="Development process" meta="4 steps"><ol className="space-y-1 text-[11px] text-slate-600 font-medium">
                  <li className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    {" Empathy Mapping"}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    {" Wireframing & UI Prototype"}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    {" System Design & Product Dev"}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      4
                    </span>
                    {" Usability & Black-box Testing"}
                  </li>
                </ol></UxDropdown></div>
            </div>
            <div className="pt-2 border-t border-blue-100/90">
              <button id="smart-focus-accordion-btn" type="button" onClick={() => { toggleAccordion('smart-focus'); }} aria-expanded="false" className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-blue-100 shadow-xs transition group">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                  <span className="accordion-text text-xs font-bold text-slate-800 tracking-tight group-hover:text-blue-700 transition-colors">
                    {"View Full Case Study & Research Breakdown"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    {"Wireframes & Insights"}
                  </span>
                  <svg className="accordion-chevron w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div id="smart-focus-accordion" className="case-study-accordion-content">
                <div className="case-study-accordion-inner">
                  <div className="pt-3 grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
                    <div className="md:col-span-6 bg-white rounded-xl p-3.5 border border-blue-100/90 shadow-xs space-y-2 flex flex-col">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-900 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          Sample Wireframe / UI Design
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Figma Architecture
                        </span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center overflow-hidden h-full">
                        <img alt="Smart Focus Alert result page design" className="h-full w-full object-contain" loading="lazy" src="/assets/projects/UI%20UX/smart%20focus%20alert/Result%20Page.webp" />
                      </div>
                    </div>
                    <div className="md:col-span-6 bg-white rounded-xl p-3.5 border border-blue-100/90 shadow-xs space-y-2">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-700 shadow-xs">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">
                          {"Research & Insights"}
                        </h4>
                      </div>
                      <div className="relative py-2">
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                          <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-100/70 shadow-xs flex items-center justify-center text-center min-h-[64px]">
                            <p className="text-xs font-semibold text-slate-700 leading-snug">
                              Gets distracted easily during online classes
                            </p>
                          </div>
                          <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100/70 shadow-xs flex items-center justify-center text-center min-h-[64px]">
                            <p className="text-xs font-semibold text-slate-700 leading-snug">
                              Sometimes feels drowsy without noticing
                            </p>
                          </div>
                          <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200/70 shadow-xs flex items-center justify-center text-center min-h-[64px]">
                            <p className="text-xs font-semibold text-slate-700 leading-snug">
                              Wants real-time feedback to stay on track
                            </p>
                          </div>
                          <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100/70 shadow-xs flex items-center justify-center text-center min-h-[64px]">
                            <p className="text-xs font-semibold text-slate-700 leading-snug">
                              Needs a simple and non-intrusive tool
                            </p>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                          <div className="w-20 h-20 rounded-full bg-white/95 p-1 shadow-md border border-blue-100/80 flex items-center justify-center">
                            <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden relative">
                              <svg className="w-14 h-14 translate-y-1" fill="none" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" fill="#EFF6FF" r="48"></circle>
                                <ellipse cx="50" cy="82" fill="#2563EB" rx="24" ry="16"></ellipse>
                                <rect fill="FED7AA" height="12" rx="4" width="12" x="44" y="58"></rect>
                                <circle cx="50" cy="46" fill="#FED7AA" r="16"></circle>
                                <path d="M34 44 C34 32, 42 26, 52 26 C64 26, 67 33, 67 42 C67 45, 65 48, 63 48 C61 48, 61 44, 57 41 C53 38, 45 40, 42 45 C40 48, 36 50, 34 44 Z" fill="#1E293B"></path>
                                <circle cx="45" cy="46" fill="#1E293B" r="1.8"></circle>
                                <circle cx="55" cy="46" fill="#1E293B" r="1.8"></circle>
                                <path d="M48 52 Q50 54 52 52" fill="none" stroke="#F87171" strokeLinecap="round" strokeWidth="1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs italic text-slate-500 font-normal pt-1.5 border-t border-slate-100">
                        Insights from user research and empathy mapping.
                      </p>
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
