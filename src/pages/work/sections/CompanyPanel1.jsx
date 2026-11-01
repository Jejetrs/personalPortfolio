import InaprocCaseStudy from './InaprocCaseStudy.jsx';
import TelkomCtaVault from './TelkomCtaVault.jsx';
import { changeSlide, setSlide } from '@/behaviors/work.js';

export default function CompanyPanel1() {
  return (
    <section className="company-stage space-y-6 hidden" id="company-panel-1">
      <p className="wk-lead">
        <span>
          {"I joined to tidy up a design system, and left having handed developers something they could build from."}
          <small>Telkom Indonesia · INAPROC · Mar – Jul 2026</small>
        </span>
      </p>
      <div className="work-hero relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50/70 to-cyan-50/50 p-5 md:p-6 shadow-sm">
        <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border-[24px] border-indigo-100/40" aria-hidden="true"></div>
        <div className="work-hero-grid relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
          <div className="work-hero-main flex min-w-0 flex-col gap-3 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-ping"></span>
                Mar 2026 – Jul 2026
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white/85 px-3 py-1 text-[10px] font-semibold text-indigo-800">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                  business
                </span>
                GovTech Procurement by Telkom Indonesia
              </span>
            </div>
            <div className="min-w-0 space-y-1">
              <h2 className="text-xl font-extrabold leading-snug tracking-tight text-[#131b2e] sm:text-2xl">
                PT Telekomunikasi Indonesia (Persero) Tbk
              </h2>
              <p className="text-sm font-bold leading-snug text-indigo-700">
                Designer Intern
              </p>
            </div>
            <p className="max-w-2xl text-[13px] leading-relaxed text-slate-600">
              Audited and aligned 30+ Inaproc Design System components toward V3, designed production-ready interfaces using tokenized architectures, prepared developer handoff specifications, and represented the use case team in the internal B2B pitching competition.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t border-indigo-100 pt-3">
              <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {"Skills & Tools"}
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Design System Audit
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                {"Tokens & Variables"}
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Developer Handoff
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                B2B Pitching
              </span>
            </div>
          </div>
          <div className="work-hero-side flex min-w-0 flex-col rounded-2xl bg-[#17234a] p-4 text-white shadow-lg shadow-indigo-950/10 lg:col-span-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">
                Experience Snapshot
              </span>
              <span className="material-symbols-outlined text-xl text-indigo-200" aria-hidden="true">
                hub
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
              <span className="text-3xl font-black tracking-tight">
                30+
              </span>
              <span className="text-xs text-indigo-100">
                components audited
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-indigo-100">
              {"V3 Ready · Tokens & Variables · Production Handoff"}
            </p>
            <div className="mt-auto border-t border-white/20 pt-3">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined shrink-0 text-lg text-amber-300" aria-hidden="true">
                  emoji_events
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug">
                    3rd Place
                  </p>
                  <p className="text-[11px] text-indigo-200">
                    Internal B2B Pitching Finals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TelkomCtaVault />
      <div className="hidden bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">
              photo_library
            </span>
            <h3 className="text-body-md font-bold text-on-surface uppercase tracking-wider font-label-kicker">
              TELKOM DOCUMENTATION VAULT
            </h3>
          </div>
        </div>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/10] bg-surface-container rounded-xl border border-outline-variant/50 overflow-hidden shadow-inner group/frame">
          <div className="slide-item-1 absolute inset-0 transition-opacity duration-500 flex flex-col opacity-100">
            <img alt="Design revamp board for INAPROC" className="w-full h-full object-cover" src="/assets/experience/Telkom%20Designer%20Intern/Design%20Revamp.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 text-surface-container-lowest text-label-code font-label-code text-body-sm flex justify-between items-center">
              <span className="">
                /images/Work/telkom-team-activity.jpg
              </span>
              <span className="bg-primary/90 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                Sprint Review Session
              </span>
            </div>
          </div>
          <div className="slide-item-1 absolute inset-0 transition-opacity duration-500 flex flex-col opacity-0 pointer-events-none">
            <img alt="Variable and token audit in Figma" className="w-full h-full object-cover" src="/assets/experience/Telkom%20Designer%20Intern/Variable%20Audit%20%26%20Adjusment.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 text-surface-container-lowest text-label-code font-label-code text-body-sm flex justify-between items-center">
              <span className="">
                /images/Work/telkom-system-presentation.jpg
              </span>
              <span className="bg-primary/90 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                Token Architecture Review
              </span>
            </div>
          </div>
          <div className="slide-item-1 absolute inset-0 transition-opacity duration-500 flex flex-col opacity-0 pointer-events-none">
            <img alt="E-Katalog layout practice" className="w-full h-full object-cover" src="/assets/experience/Telkom%20Designer%20Intern/Layout%20Example%20of%20E-Katalog%20Practice.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 text-surface-container-lowest text-label-code font-label-code text-body-sm flex justify-between items-center">
              <span className="">
                /images/Work/telkom-prototype-demo.jpg
              </span>
              <span className="bg-primary/90 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                INAPROC E-Katalog High-Fi Flow
              </span>
            </div>
          </div>
          <button className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-on-surface/50 hover:bg-primary text-surface-container-lowest backdrop-blur-md flex items-center justify-center transition-all z-20" onClick={() => { changeSlide(1, -1); }}>
            <span className="material-symbols-outlined text-[20px]">
              chevron_left
            </span>
          </button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-on-surface/50 hover:bg-primary text-surface-container-lowest backdrop-blur-md flex items-center justify-center transition-all z-20" onClick={() => { changeSlide(1, 1); }}>
            <span className="material-symbols-outlined text-[20px]">
              chevron_right
            </span>
          </button>
          <div className="absolute bottom-11 left-0 right-0 flex justify-center gap-1.5 z-10">
            <span className="dot-1 h-2 rounded-full transition-all cursor-pointer bg-surface-container-lowest w-4" onClick={() => { setSlide(1, 0); }}></span>
            <span className="dot-1 w-2 h-2 rounded-full transition-all cursor-pointer bg-surface-container-lowest/40" onClick={() => { setSlide(1, 1); }}></span>
            <span className="dot-1 w-2 h-2 rounded-full transition-all cursor-pointer bg-surface-container-lowest/40" onClick={() => { setSlide(1, 2); }}></span>
          </div>
        </div>
      </div>
      <InaprocCaseStudy />
      <div className="bg-surface-container-low/80 rounded-2xl border border-outline-variant/40 p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">
            psychology
          </span>
          <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
            {"Retrospective & Key Learnings"}
          </h3>
        </div>
        <blockquote className="text-body-md text-on-surface border-l-2 border-primary pl-4 leading-relaxed">
          “A scalable design system is not just a collection of reusable components. It is a shared foundation for consistency, collaboration, and better product decisions.”
        </blockquote>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <span className="block text-xs font-bold uppercase tracking-wider text-primary font-label-kicker">
              Cross-Functional Alignment
            </span>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Learned that clear component specifications and consistent design tokens help bridge the gap between design intent and development implementation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <span className="block text-xs font-bold uppercase tracking-wider text-tertiary font-label-kicker">
              User-Centered Thinking
            </span>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Recognized the importance of designing government digital services around diverse user needs, clear information hierarchy, and accessible interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
