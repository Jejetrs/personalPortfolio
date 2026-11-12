import PTTelekomunikasiIndonesiaPart1 from './PTTelekomunikasiIndonesiaPart1.jsx';
import { selectCompany } from '@/behaviors/work.js';

export default function PTTelekomunikasiIndonesia() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <aside className="lg:sticky lg:top-24 self-start space-y-3 lg:col-span-3">
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface font-label-kicker">
                Trajectory
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-medium font-label-code border border-outline-variant/30">
              4 Roles
            </span>
          </div>
          <div className="space-y-2.5 relative">
            <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-30 z-0 pointer-events-none"></div>
            <button className="company-nav-btn w-full text-left relative flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group z-10 bg-surface-container-low/60 border border-outline-variant/40" id="nav-item-1" onClick={() => { selectCompany(1); }}>
              <div className="mt-0.5 flex-shrink-0 relative z-10">
                <div className="w-7 h-7 rounded-lg bg-primary text-surface-container-lowest flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[15px]">
                    domain
                  </span>
                </div>
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="date-accent text-[10px] font-bold uppercase tracking-wider text-primary font-label-code">
                    Mar – Jul 2026
                  </span>
                  <span className="category-accent px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-semibold font-label-code flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-tertiary"></span>
                    Enterprise
                  </span>
                </div>
                <h3 className="text-body-sm font-bold text-on-surface truncate leading-tight">
                  PT Telekomunikasi Indonesia
                </h3>
                <p className="text-[11px] text-on-surface-variant truncate">
                  Designer Intern
                </p>
              </div>
            </button>
            <button className="company-nav-btn w-full text-left relative flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-surface-container border group z-10 bg-surface-container-low/60 border-outline-variant/40" id="nav-item-2" onClick={() => { selectCompany(2); }}>
              <div className="mt-0.5 flex-shrink-0 relative z-10">
                <div className="w-7 h-7 rounded-lg bg-surface-container-highest text-secondary flex items-center justify-center border border-outline-variant/40 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[15px]">
                    psychology
                  </span>
                </div>
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="date-accent text-[10px] font-semibold uppercase tracking-wider text-secondary font-label-code">
                    Jan – Mar 2026
                  </span>
                  <span className="category-accent px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[9px] font-semibold font-label-code">
                    Cohort ML
                  </span>
                </div>
                <h3 className="text-body-sm font-bold text-on-surface truncate leading-tight">
                  Coding Camp DBS Foundation
                </h3>
                <p className="text-[11px] text-on-surface-variant truncate">
                  Facilitator (AI Engineer Path)
                </p>
              </div>
            </button>
            <button className="company-nav-btn w-full text-left relative flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-surface-container border group z-10 bg-primary/10 border-2 border-primary/60 shadow-sm" id="nav-item-3" onClick={() => { selectCompany(3); }}>
              <div className="mt-0.5 flex-shrink-0 relative z-10">
                <div className="w-7 h-7 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center border border-outline-variant/40 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[15px]">
                    terminal
                  </span>
                </div>
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="date-accent text-[10px] font-semibold uppercase tracking-wider text-primary font-label-code">
                    Apr 2023 – Sep 2026
                  </span>
                  <span className="category-accent px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[9px] font-medium font-label-code">
                    Lab
                  </span>
                </div>
                <h3 className="text-body-sm font-bold text-on-surface truncate leading-tight">
                  LepKom Gunadarma University Laboratory
                </h3>
                <p className="text-[11px] text-on-surface-variant truncate">
                  Instructor · Host · Assistant
                </p>
              </div>
            </button>
            <button className="company-nav-btn w-full text-left relative flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-surface-container border group z-10 bg-surface-container-low/60 border-outline-variant/40" id="nav-item-4" onClick={() => { selectCompany(4); }}>
              <div className="mt-0.5 flex-shrink-0 relative z-10">
                <div className="w-7 h-7 rounded-lg bg-surface-container-highest text-tertiary flex items-center justify-center border border-outline-variant/40 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[15px]">
                    verified
                  </span>
                </div>
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="date-accent text-[10px] font-semibold uppercase tracking-wider text-tertiary font-label-code">
                    Jun – Jul 2026
                  </span>
                  <span className="category-accent px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-semibold font-label-code">
                    MLOps
                  </span>
                </div>
                <h3 className="text-body-sm font-bold text-on-surface truncate leading-tight">
                  Dicoding Indonesia
                </h3>
                <p className="text-[11px] text-on-surface-variant truncate">
                  ML External Reviewer – Freelance
                </p>
              </div>
            </button>
          </div>
        </div>
      </aside>
      <PTTelekomunikasiIndonesiaPart1 />
    </section>
  );
}
