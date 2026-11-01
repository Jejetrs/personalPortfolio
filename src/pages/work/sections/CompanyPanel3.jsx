import CompanyPanel3Part1 from './CompanyPanel3Part1.jsx';

export default function CompanyPanel3() {
  return (
    <section className="company-stage space-y-6 hidden" id="company-panel-3">
      <p className="wk-lead">
        <span>
          {"Where it started: explaining code to other students, workshop after workshop."}
          <small>LepKom Gunadarma University Laboratory · Apr 2023 – Sep 2026</small>
        </span>
      </p>
      <div className="work-hero relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50/70 to-cyan-50/50 p-5 md:p-6 shadow-sm">
        <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border-[24px] border-indigo-100/40" aria-hidden="true"></div>
        <div className="work-hero-grid relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
          <div className="work-hero-main flex min-w-0 flex-col gap-3 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-ping"></span>
                Apr 2023 – Sep 2026
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white/85 px-3 py-1 text-[10px] font-semibold text-indigo-800">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                  school
                </span>
                Gunadarma University
              </span>
            </div>
            <div className="min-w-0 space-y-1">
              <h2 className="text-xl font-extrabold leading-snug tracking-tight text-[#131b2e] sm:text-2xl">
                LepKom Gunadarma University Laboratory
              </h2>
              <p className="text-sm font-bold leading-snug text-indigo-700">
                Technical Instruction · Workshop Operations · Problem Solving
              </p>
            </div>
            <p className="max-w-2xl text-[13px] leading-relaxed text-slate-600">
              Supported programming workshops and laboratory activities through hands-on instruction, event coordination, and technical assistance for participants.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t border-indigo-100 pt-3">
              <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {"Skills & Tools"}
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                HTML/CSS
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                JavaScript
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Technical Solving
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Workshop Ops
              </span>
            </div>
          </div>
          <div className="work-hero-side flex min-w-0 flex-col rounded-2xl bg-[#17234a] p-4 text-white shadow-lg shadow-indigo-950/10 lg:col-span-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">
                Experience Snapshot
              </span>
              <span className="material-symbols-outlined text-xl text-indigo-200" aria-hidden="true">
                terminal
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
              <span className="text-3xl font-black tracking-tight">
                04
              </span>
              <span className="text-xs text-indigo-100">
                core responsibilities
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-indigo-100">
              Programming Instruction · Workshop Operations · Technical Support · Certification Readiness
            </p>
            <div className="mt-auto border-t border-white/20 pt-3">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined shrink-0 text-lg text-amber-300" aria-hidden="true">
                  badge
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug">
                    LepKom Gunadarma
                  </p>
                  <p className="text-[11px] text-indigo-200">
                    Laboratory assistant · 2023 – 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 md:p-8 shadow-sm space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-outline font-label-kicker flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">
                photo_library
              </span>
              {"Visual Artifacts & Interactive Screens"}
            </span>
            <div className="flex items-center gap-1.5">
              <button className="w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all border border-outline-variant/50" data-artifact-direction="-1" type="button" aria-label="Previous visual artifact">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
              </button>
              {" "}
              <button className="w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all border border-outline-variant/50" data-artifact-direction="1" type="button" aria-label="Next visual artifact">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 pt-1 scroll-smooth snap-x snap-mandatory" id="lepkom-artifact-carousel">
            <div className="min-w-[340px] md:min-w-[480px] max-w-[500px] flex-shrink-0 snap-start bg-surface-container-low/60 rounded-xl border border-outline-variant/50 overflow-hidden group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img alt="LepKom assistant programming instruction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/experience/Lepkom%20Gunadarma/Lepkom%20Asisstant.jpg" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-on-surface/85 backdrop-blur-md text-[10px] font-label-code text-surface-container-lowest font-medium">
                  LepKom Assistant
                </div>
              </div>
              <div className="p-3 bg-surface-container-lowest border-t border-outline-variant/40">
                <p className="text-xs font-bold text-on-surface">
                  {"Programming Sessions & Hands-on Instruction"}
                </p>
                <p className="text-[11px] text-on-surface-variant truncate">
                  {"HTML, CSS, JavaScript, participant guidance & practical learning"}
                </p>
              </div>
            </div>
            <div className="min-w-[340px] md:min-w-[480px] max-w-[500px] flex-shrink-0 snap-start bg-surface-container-low/60 rounded-xl border border-outline-variant/50 overflow-hidden group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img alt="LSP assistant certification support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/experience/Lepkom%20Gunadarma/LSP%20Asisstant.jpeg" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-on-surface/85 backdrop-blur-md text-[10px] font-label-code text-surface-container-lowest font-medium">
                  LSP Assistant
                </div>
              </div>
              <div className="p-3 bg-surface-container-lowest border-t border-outline-variant/40">
                <p className="text-xs font-bold text-on-surface">
                  {"LSP Certification Support"}
                </p>
                <p className="text-[11px] text-on-surface-variant truncate">
                  {"Certification preparation, technical guidance & participant support"}
                </p>
              </div>
            </div>
            <div className="min-w-[340px] md:min-w-[480px] max-w-[500px] flex-shrink-0 snap-start bg-surface-container-low/60 rounded-xl border border-outline-variant/50 overflow-hidden group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img alt="LSP assistant training session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/experience/Lepkom%20Gunadarma/LSP%20Asisstant2.jpeg" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-on-surface/85 backdrop-blur-md text-[10px] font-label-code text-surface-container-lowest font-medium">
                  LSP Assistant
                </div>
              </div>
              <div className="p-3 bg-surface-container-lowest border-t border-outline-variant/40">
                <p className="text-xs font-bold text-on-surface">
                  {"Certification Readiness"}
                </p>
                <p className="text-[11px] text-on-surface-variant truncate">
                  {"LSP preparation and participant guidance"}
                </p>
              </div>
            </div>
            <div className="min-w-[340px] md:min-w-[480px] max-w-[500px] flex-shrink-0 snap-start bg-surface-container-low/60 rounded-xl border border-outline-variant/50 overflow-hidden group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img alt="LepKom workshop coordination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/experience/Lepkom%20Gunadarma/Workshop%20Coordinator.png" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-on-surface/85 backdrop-blur-md text-[10px] font-label-code text-surface-container-lowest font-medium">
                  Workshop Coordinator
                </div>
              </div>
              <div className="p-3 bg-surface-container-lowest border-t border-outline-variant/40">
                <p className="text-xs font-bold text-on-surface">
                  {"Workshop Operations & Coordination"}
                </p>
                <p className="text-[11px] text-on-surface-variant truncate">
                  {"Event coordination, technical setup and participant support"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyPanel3Part1 />
      <div className="bg-surface-container-low/60 rounded-2xl border border-outline-variant/40 p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">
              psychology
            </span>
          </div>
          <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
            {"Retrospective & Core Learnings"}
          </h3>
        </div>
        <blockquote className="italic text-body-md text-on-surface border-l-2 border-primary pl-4 py-1 leading-relaxed">
          “Working as both an instructor and technical support strengthened my ability to communicate clearly, understand learners’ needs, and solve problems in real time.”
        </blockquote>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary font-label-kicker block">
              TECHNICAL COMMUNICATION
            </span>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Learned to translate technical concepts into clear, practical guidance for learners with different levels of understanding.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary font-label-kicker block">
              OPERATIONAL PROBLEM SOLVING
            </span>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Strengthened my ability to troubleshoot issues, coordinate activities, and respond to technical challenges in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
