import AppLink from '@/components/AppLink.jsx';

export default function ContentWs3() {
  return (
    <div className="inaproc-tab-content space-y-4 hidden" id="content-ws3">
      <div className="relative overflow-hidden rounded-xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/80 via-white to-emerald-50/50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-indigo-200/30 blur-2xl" aria-hidden="true"></div>
        <div className="relative z-10 flex flex-wrap items-start justify-between gap-3">
          <div className="max-w-2xl space-y-2">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-indigo-700 font-label-code">
              <span className="material-symbols-outlined text-[16px]">
                hub
              </span>
              {"WS 03 · B2B BUSINESS & AI USE CASE"}
            </p>
            <h4 className="text-lg font-extrabold tracking-tight text-slate-900">
              Trustee — Trusted Review Intelligence
            </h4>
            <p className="text-xs leading-relaxed text-slate-600">
              A concept proposal for more trustworthy marketplace reviews, connecting business analysis, product strategy, AI feasibility, and cross-functional team collaboration.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-bold text-amber-900">
            Concept Proposal · Not Launched
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
              <span className="material-symbols-outlined text-[19px]">
                problem
              </span>
            </span>
            <h5 className="text-xs font-extrabold text-slate-900">
              Business Problem
            </h5>
          </div>
          <p className="text-xs leading-relaxed text-slate-600">
            Manipulated reviews can mislead buyers, disadvantage honest sellers, and increase marketplace moderation effort.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <span className="material-symbols-outlined text-[19px]">
                psychology
              </span>
            </span>
            <h5 className="text-xs font-extrabold text-slate-900">
              Proposed Product Solution
            </h5>
          </div>
          <p className="text-xs leading-relaxed text-slate-600">
            Trustee proposes AI-assisted review risk analysis, review trust scores, and moderation insights to support safer purchasing decisions.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <span className="material-symbols-outlined text-[19px]">
                analytics
              </span>
            </span>
            <h5 className="text-xs font-extrabold text-slate-900">
              {"Business Analysis & Documents"}
            </h5>
          </div>
          <p className="text-xs leading-relaxed text-slate-600">
            Contributed to company profiling and Business Model Canvas, supported by market and competitor research, SWOT, and a solution pitch.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800">
              <span className="material-symbols-outlined text-[19px]">
                groups
              </span>
            </span>
            <h5 className="text-xs font-extrabold text-slate-900">
              {"Team Coordination & Alignment"}
            </h5>
          </div>
          <p className="text-xs leading-relaxed text-slate-600">
            Coordinated team discussions and helped align B2B documentation with AI development needs, leading into the final solution pitch.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-xl border border-indigo-200/60 bg-indigo-50/50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 space-y-1">
          <p className="text-xs font-extrabold text-slate-900">
            Supporting Project Documents
          </p>
          <p className="text-[11px] leading-relaxed text-slate-600">
            {"Company Profiling & SWOT · Business Model Canvas · Trustee Pitch Deck"}
          </p>
          <p className="text-[10px] text-slate-500">
            Curated, public-facing case study; internal progress workbook remains private.
          </p>
        </div>
        <AppLink to="/?project=trustee#selected-works" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-label="View complete Trustee Business Analytics case study and supporting documents">
          {"View Full Case Study "}
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            arrow_outward
          </span>
        </AppLink>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-3.5">
        <span className="material-symbols-outlined flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-white">
          emoji_events
        </span>
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800 font-label-kicker">
            Team Achievement
          </span>
          <p className="text-xs font-bold text-slate-900">
            3rd Place · Internal B2B Pitching Competition
          </p>
        </div>
      </div>
    </div>
  );
}
