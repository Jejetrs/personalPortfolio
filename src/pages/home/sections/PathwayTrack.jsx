import { scheduleHidePillarCard, showPillarCard, togglePillarCard } from '@/behaviors/home/interactionHandlers.js';

export default function PathwayTrack() {
  return (
    <div className="relative w-full h-[250px]" id="pathway-track">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 900 240">
        <defs>
          <linearGradient id="waveLineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.9"></stop>
            <stop offset="45%" stopColor="#0d9488" stopOpacity="0.95"></stop>
            <stop offset="80%" stopColor="#059669" stopOpacity="0.9"></stop>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.95"></stop>
          </linearGradient>
          <linearGradient id="waveGlowGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35"></stop>
            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.45"></stop>
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.35"></stop>
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <path className="animate-wave-glow" d="M 108 34.56 C 193.5 34.56, 193.5 111.36, 279 111.36 C 364.5 111.36, 364.5 34.56, 450 34.56 C 535.5 34.56, 535.5 111.36, 621 111.36 C 706.5 111.36, 706.5 34.56, 792 34.56" fill="none" stroke="url(#waveGlowGradient)" strokeLinecap="round" strokeWidth="14"></path>
        <path d="M 108 34.56 C 193.5 34.56, 193.5 111.36, 279 111.36 C 364.5 111.36, 364.5 34.56, 450 34.56 C 535.5 34.56, 535.5 111.36, 621 111.36 C 706.5 111.36, 706.5 34.56, 792 34.56" fill="none" stroke="url(#waveLineGradient)" strokeLinecap="round" strokeWidth="2" opacity="0.5"></path>
        <path className="animate-wave-flow" d="M 108 34.56 C 193.5 34.56, 193.5 111.36, 279 111.36 C 364.5 111.36, 364.5 34.56, 450 34.56 C 535.5 34.56, 535.5 111.36, 621 111.36 C 706.5 111.36, 706.5 34.56, 792 34.56" fill="none" stroke="url(#waveLineGradient)" strokeLinecap="round" strokeWidth="4" opacity="0.72"></path>
        <path className="animate-wave-signal" d="M 108 34.56 C 193.5 34.56, 193.5 111.36, 279 111.36 C 364.5 111.36, 364.5 34.56, 450 34.56 C 535.5 34.56, 535.5 111.36, 621 111.36 C 706.5 111.36, 706.5 34.56, 792 34.56" fill="none" pathLength="1000" stroke="url(#waveLineGradient)" strokeLinecap="round" strokeWidth="4.5" filter="url(#glowFilter)"></path>
        <circle className="animate-pulse" cx="194" cy="73" fill="#6366f1" r="3.5" style={{ animationDelay: "0.0s" }}></circle>
        <circle cx="345" cy="90" fill="#7c3aed" r="3.5" filter="url(#glowFilter)"></circle>
        <circle className="animate-pulse" cx="392" cy="51" fill="#0d9488" r="3.5" style={{ animationDelay: "0.6s" }}></circle>
        <circle cx="516" cy="56" fill="#2563eb" r="3.5" filter="url(#glowFilter)"></circle>
        <circle className="animate-pulse" cx="563" cy="95" fill="#d97706" r="3.5" style={{ animationDelay: "1.2s" }}></circle>
        <circle cx="706" cy="73" fill="#10b981" r="3.5" filter="url(#glowFilter)"></circle>
        <g className="animate-wave-vector" filter="url(#glowFilter)">
          <circle fill="#4f46e5" fillOpacity="0.14" r="12"></circle>
          <circle fill="#fff" r="7.5" stroke="#4f46e5" strokeWidth="1.5"></circle>
          <path d="M -2.5 -4 L 3.5 0 L -2.5 4 Z" fill="#0d9488"></path>
          <circle cx="-13" fill="#fff" fillOpacity="0.9" r="1.8"></circle>
          <circle cx="-19" fill="#fff" fillOpacity="0.65" r="1.3"></circle>
        </g>
        <circle className="animate-wave-beacon" fill="#fff" r="4" filter="url(#glowFilter)">
          <animateMotion dur="7s" path="M 108 34.56 C 193.5 34.56, 193.5 111.36, 279 111.36 C 364.5 111.36, 364.5 34.56, 450 34.56 C 535.5 34.56, 535.5 111.36, 621 111.36 C 706.5 111.36, 706.5 34.56, 792 34.56" repeatCount="indefinite"></animateMotion>
        </circle>
        <circle className="animate-wave-beacon" fill="#fff" r="2.5" filter="url(#glowFilter)">
          <animateMotion begin="3.5s" dur="8s" path="M 108 34.56 C 193.5 34.56, 193.5 111.36, 279 111.36 C 364.5 111.36, 364.5 34.56, 450 34.56 C 535.5 34.56, 535.5 111.36, 621 111.36 C 706.5 111.36, 706.5 34.56, 792 34.56" repeatCount="indefinite"></animateMotion>
        </circle>
      </svg>
      {" "}
      <div className="pathway-node absolute left-[12%] top-[10px] -translate-x-1/2 flex flex-col items-center group" onMouseEnter={() => { showPillarCard(0); }} onMouseLeave={() => { scheduleHidePillarCard(); }}>
        <div className="mb-3 px-3.5 py-2 rounded-2xl bg-white border-2 border-primary shadow-lg shadow-indigo-600/15 card-lift transition-all flex flex-col text-left scale-105 opacity-100" id="callout-0">
          <span className="text-xs font-black text-[#131b2e]">
            {"Business & User Discovery"}
          </span>
          {" "}
          <span className="text-[10px] font-mono text-slate-500">
            Market • Competitors • Users
          </span>
        </div>
        <button aria-controls="pathway-modal-card" aria-expanded="false" className="pathway-node-btn w-[52px] h-[52px] rounded-full bg-white border-[3.5px] border-primary text-primary font-black font-mono text-sm sm:text-base flex items-center justify-center shadow-lg shadow-indigo-600/25 transition-all" id="node-btn-0" onFocus={() => { showPillarCard(0); }} onClick={() => { togglePillarCard(0); }}>
          01
        </button>
        {" "}
        <span className="mt-2 text-[10px] font-mono font-bold text-primary bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200" id="step-badge-0">
          Discover
        </span>
      </div>
      <div className="pathway-node absolute left-[31%] top-[90px] -translate-x-1/2 flex flex-col items-center group" onMouseEnter={() => { showPillarCard(1); }} onMouseLeave={() => { scheduleHidePillarCard(); }}>
        <button aria-controls="pathway-modal-card" aria-expanded="false" className="pathway-node-btn w-[52px] h-[52px] rounded-full bg-white border-[3.5px] border-slate-300 text-slate-600 font-black font-mono text-sm sm:text-base flex items-center justify-center shadow-md hover:border-slate-400 transition-all" id="node-btn-1" onFocus={() => { showPillarCard(1); }} onClick={() => { togglePillarCard(1); }}>
          02
        </button>
        {" "}
        <span className="mt-2 text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200" id="step-badge-1">
          Define
        </span>
        <div className="mt-3 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm opacity-75 card-lift transition-all flex flex-col text-left" id="callout-1">
          <span className="text-xs font-black text-[#131b2e]">
            Product Definition
          </span>
          {" "}
          <span className="text-[10px] font-mono text-slate-500">
            Requirements • Flows • Scope
          </span>
        </div>
      </div>
      <div className="pathway-node absolute left-[50%] top-[10px] -translate-x-1/2 flex flex-col items-center group" onMouseEnter={() => { showPillarCard(2); }} onMouseLeave={() => { scheduleHidePillarCard(); }}>
        <div className="mb-3 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm opacity-75 card-lift transition-all flex flex-col text-left" id="callout-2">
          <span className="text-xs font-black text-[#131b2e]">
            UI/UX Design
          </span>
          {" "}
          <span className="text-[10px] font-mono text-slate-500">
            Wireframes • Prototypes • UI
          </span>
        </div>
        <button aria-controls="pathway-modal-card" aria-expanded="false" className="pathway-node-btn w-[52px] h-[52px] rounded-full bg-white border-[3.5px] border-slate-300 text-slate-600 font-black font-mono text-sm sm:text-base flex items-center justify-center shadow-md hover:border-slate-400 transition-all" id="node-btn-2" onFocus={() => { showPillarCard(2); }} onClick={() => { togglePillarCard(2); }}>
          03
        </button>
        {" "}
        <span className="mt-2 text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200" id="step-badge-2">
          Design
        </span>
      </div>
      <div className="pathway-node absolute left-[69%] top-[90px] -translate-x-1/2 flex flex-col items-center group" onMouseEnter={() => { showPillarCard(3); }} onMouseLeave={() => { scheduleHidePillarCard(); }}>
        <button aria-controls="pathway-modal-card" aria-expanded="false" className="pathway-node-btn w-[52px] h-[52px] rounded-full bg-white border-[3.5px] border-slate-300 text-slate-600 font-black font-mono text-sm sm:text-base flex items-center justify-center shadow-md hover:border-slate-400 transition-all" id="node-btn-3" onFocus={() => { showPillarCard(3); }} onClick={() => { togglePillarCard(3); }}>
          04
        </button>
        {" "}
        <span className="mt-2 text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200" id="step-badge-3">
          {"Build & Integrate"}
        </span>
        <div className="mt-3 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm opacity-75 card-lift transition-all flex flex-col text-left" id="callout-3">
          <span className="text-xs font-black text-[#131b2e]">
            {"Full-Stack & AI Development"}
          </span>
          {" "}
          <span className="text-[10px] font-mono text-slate-500">
            Frontend • Backend • AI/ML
          </span>
        </div>
      </div>
      <div className="pathway-node absolute left-[88%] top-[10px] -translate-x-1/2 flex flex-col items-center group" onMouseEnter={() => { showPillarCard(4); }} onMouseLeave={() => { scheduleHidePillarCard(); }}>
        <div className="mb-3 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm opacity-75 card-lift transition-all flex flex-col text-left" id="callout-4">
          <span className="text-xs font-black text-[#131b2e]">
            {"Validation & Product Delivery"}
          </span>
          {" "}
          <span className="text-[10px] font-mono text-slate-500">
            Testing • Docs • Teamwork
          </span>
        </div>
        <button aria-controls="pathway-modal-card" aria-expanded="false" className="pathway-node-btn w-[52px] h-[52px] rounded-full bg-white border-[3.5px] border-slate-300 text-slate-600 font-black font-mono text-sm sm:text-base flex items-center justify-center shadow-md hover:border-slate-400 transition-all" id="node-btn-4" onFocus={() => { showPillarCard(4); }} onClick={() => { togglePillarCard(4); }}>
          05
        </button>
        {" "}
        <span className="mt-2 text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200" id="step-badge-4">
          {"Validate & Deliver"}
        </span>
      </div>
    </div>
  );
}
