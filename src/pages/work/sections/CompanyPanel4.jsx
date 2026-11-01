import CompanyPanel4Part1 from './CompanyPanel4Part1.jsx';

export default function CompanyPanel4() {
  return (
    <section className="company-stage space-y-6 hidden" id="company-panel-4">
      <p className="wk-lead">
        <span>
          {"Reviewing other people's ML projects made me a stricter reviewer of my own."}
          <small>Dicoding Indonesia · Jun – Jul 2026</small>
        </span>
      </p>
      <div className="work-hero relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50/70 to-cyan-50/50 p-5 md:p-6 shadow-sm">
        <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border-[24px] border-indigo-100/40" aria-hidden="true"></div>
        <div className="work-hero-grid relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
          <div className="work-hero-main flex min-w-0 flex-col gap-3 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-ping"></span>
                Jun 2026 — Jul 2026
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white/85 px-3 py-1 text-[10px] font-semibold text-indigo-800">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                  work
                </span>
                Freelance
              </span>
            </div>
            <div className="min-w-0 space-y-1">
              <h2 className="text-xl font-extrabold leading-snug tracking-tight text-[#131b2e] sm:text-2xl">
                Dicoding Indonesia
              </h2>
              <p className="text-sm font-bold leading-snug text-indigo-700">
                Machine Learning External Reviewer
              </p>
            </div>
            <p className="max-w-2xl text-[13px] leading-relaxed text-slate-600">
              Reviewed Machine Learning and AI Engineer project submissions against learning standards and assessment criteria, evaluating model implementation, code quality, and documentation with structured, actionable feedback.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t border-indigo-100 pt-3">
              <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {"Skills & Tools"}
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Python
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Colab · Kaggle
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                ML · AI
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Copywriting
              </span>
            </div>
          </div>
          <div className="work-hero-side flex min-w-0 flex-col rounded-2xl bg-[#17234a] p-4 text-white shadow-lg shadow-indigo-950/10 lg:col-span-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">
                Experience Snapshot
              </span>
              <span className="material-symbols-outlined text-xl text-indigo-200" aria-hidden="true">
                rate_review
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
              <span className="text-3xl font-black tracking-tight">
                04
              </span>
              <span className="text-xs text-indigo-100">
                review focus areas
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-indigo-100">
              {"Project Review · Rubric-Based Evaluation · Technical Feedback · Code & Docs Quality"}
            </p>
            <div className="mt-auto border-t border-white/20 pt-3">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined shrink-0 text-lg text-amber-300" aria-hidden="true">
                  psychology
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug">
                    {"ML & AI Project Reviewer"}
                  </p>
                  <p className="text-[11px] text-indigo-200">
                    Freelance · Jun – Jul 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyPanel4Part1 />
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-outline-variant/40">
          <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">
              lightbulb
            </span>
          </div>
          <div>
            <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold tracking-tight">
              Core Learnings
            </h3>
            <p className="text-xs text-on-surface-variant">
              Professional insights gained from evaluating high-volume technical cohorts
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-surface-container-low/60 border border-outline-variant/40 space-y-3 flex items-start gap-4 hover:border-tertiary/50 transition-all">
            <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[22px]">
                track_changes
              </span>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-body-md font-bold text-on-surface">
                Systematic Evaluation
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Strengthened my ability to assess technical solutions against structured requirements and evaluation criteria.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-low/60 border border-outline-variant/40 space-y-3 flex items-start gap-4 hover:border-tertiary/50 transition-all">
            <div className="w-11 h-11 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[22px]">
                forum
              </span>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-body-md font-bold text-on-surface">
                Technical Communication
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Improved how I communicate implementation issues and translate technical observations into actionable feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
