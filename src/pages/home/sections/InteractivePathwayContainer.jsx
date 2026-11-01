import PathwayGraph from './PathwayGraph.jsx';
import { cancelHidePillarCard, scheduleHidePillarCard, stepPillar } from '@/behaviors/home/interactionHandlers.js';

export default function InteractivePathwayContainer() {
  return (
    <div className="bg-gradient-to-b from-[#fafaff] to-white border border-indigo-100/90 rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_12px_44px_rgba(79,70,229,0.06)] relative overflow-hidden" id="interactive-pathway-container">
      <div className="flex justify-end mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500 mr-1 hidden sm:inline" id="step-counter">
            Pillar 1 of 5
          </span>
          {" "}
          <button aria-label="Previous Pillar" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary flex items-center justify-center transition shadow-sm active:scale-95" onClick={() => { stepPillar(-1); }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          {" "}
          <button aria-label="Next Pillar" className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary flex items-center justify-center transition shadow-sm active:scale-95" onClick={() => { stepPillar(1); }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <PathwayGraph />
      <div aria-hidden="true" className="fixed z-30 flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none" id="pathway-modal-overlay" onMouseEnter={() => { cancelHidePillarCard(); }} onMouseLeave={() => { scheduleHidePillarCard(); }}>
        <div aria-labelledby="modal-title" className="w-full bg-white/95 backdrop-blur-xl border border-slate-200 ring-1 ring-slate-200/80 relative" id="pathway-modal-card">
          <div className="flex items-center gap-2 mb-2 relative z-10">
            <div className="w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 transition-colors shadow-sm bg-teal-50 text-teal-700 border-teal-100" id="modal-icon-box">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <div>
              <p className="mb-0.5 text-[9px] font-mono font-bold uppercase tracking-[0.1em] text-teal-700" id="modal-phase-badge">
                01 · DISCOVER
              </p>
              <h3 className="text-base font-black text-[#131b2e] tracking-tight" id="modal-title">
                {"Business & User Discovery"}
              </h3>
            </div>
          </div>
          <p className="relative z-10 text-slate-600" id="modal-description">
            Explore business needs, market trends, and user challenges to identify problems and product opportunities.
          </p>
          <div className="relative z-10 mb-2 bg-slate-50/70 border border-slate-100 rounded-xl p-2.5">
            <ul className="space-y-1 text-[11px] text-slate-700 leading-[1.35]" id="modal-bullets">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 shrink-0"></span>
                {" "}
                <span className="">
                  Analyze business context, market trends, and competitors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 shrink-0"></span>
                {" "}
                <span className="">
                  Identify user needs, pain points, and opportunities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 shrink-0"></span>
                {" "}
                <span className="">
                  Translate research findings into actionable insights
                </span>
              </li>
            </ul>
          </div>
          <div className="relative z-10" id="modal-tools-panel">
            <h4 className="font-mono">
              {"CORE TOOLS & SKILLS"}
            </h4>
            <div className="flex flex-wrap gap-1" id="modal-tools"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
