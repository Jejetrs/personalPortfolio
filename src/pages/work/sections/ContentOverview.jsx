import AppLink from '@/components/AppLink.jsx';

export default function ContentOverview() {
  return (
    <div className="inaproc-tab-content space-y-4 hidden" id="content-overview">
      <div className="bg-surface-container-low/40 rounded-xl border border-outline-variant/40 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-primary font-label-kicker">
            {"Verified Track Record & Responsibilities"}
          </span>
          <span className="text-[11px] font-label-code text-on-surface-variant">
            March 2026 – July 2026
          </span>
        </div>
        <h4 className="text-body-lg font-bold text-on-surface">
          {"Executive Scope: Design Systems Engineering & B2B Product Strategy"}
        </h4>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Core workstreams spanning Inaproc V3 design system refinement, cross-functional developer handoff, and the Trustee B2B–AI product concept.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/50 space-y-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs font-label-code">
              01
            </div>
            <div>
              <h5 className="text-body-sm font-bold text-on-surface">
                {"Inaproc Design System & Implementation"}
              </h5>
              <p className="text-[11px] text-on-surface-variant">
                {"Component auditing, variables, & developer handoff"}
              </p>
            </div>
          </div>
          <ul className="space-y-3 text-xs text-on-surface-variant leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 flex-shrink-0">
                check_circle
              </span>
              <span className="">
                <strong>
                  Audited and aligned 30+ Inaproc Design System components toward V3
                </strong>
                , improving consistency and scalability across reusable UI pattern.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 flex-shrink-0">
                check_circle
              </span>
              <span className="">
                <strong>
                  Designed production-ready interfaces
                </strong>
                {" using reusable components, variables, variants, and properties include auto layout and design token technic."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 flex-shrink-0">
                check_circle
              </span>
              <span className="">
                <strong>
                  Prepared design specifications and component documentation
                </strong>
                {" for developer handoff and implementation."}
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2 py-0.5 rounded-md bg-surface-container text-[10px] font-medium text-on-surface-variant font-label-code">
              Inaproc V3
            </span>
            <span className="px-2 py-0.5 rounded-md bg-surface-container text-[10px] font-medium text-on-surface-variant font-label-code">
              {"Auto Layout & Tokens"}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-surface-container text-[10px] font-medium text-on-surface-variant font-label-code">
              Handoff Docs
            </span>
          </div>
          <AppLink to="/?project=inaproc-project-card#selected-works" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700">
            {"View Inaproc project "}
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_outward
            </span>
          </AppLink>
        </div>
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/50 space-y-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs font-label-code">
              02
            </div>
            <div>
              <h5 className="text-body-sm font-bold text-on-surface">
                {"Cross-Functional Alignment & B2B Pitching"}
              </h5>
              <p className="text-[11px] text-on-surface-variant">
                {"Team collaboration, consultative selling, & 3rd place podium"}
              </p>
            </div>
          </div>
          <ul className="space-y-3 text-xs text-on-surface-variant leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5 flex-shrink-0">
                check_circle
              </span>
              <span className="">
                <strong>
                  Collaborated with cross-functional team
                </strong>
                {" to communicate design decisions, review progress, and refine UI solutions."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5 flex-shrink-0">
                check_circle
              </span>
              <span className="">
                <strong>
                  Completed B2B fundamentals training
                </strong>
                {" covering customer profiling, market segmentation, consultative selling, and value proposition development."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-tertiary-container text-[16px] mt-0.5 flex-shrink-0">
                military_tech
              </span>
              <span className="">
                <strong>
                  Represented the use case team in the final B2B pitching session
                </strong>
                {"; presented product strategy and UX solutions to stakeholders and "}
                <strong>
                  secured 3rd place in the internal pitching competition
                </strong>
                .
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2 py-0.5 rounded-md bg-surface-container text-[10px] font-medium text-on-surface-variant font-label-code">
              Cross-Functional Review
            </span>
            <span className="px-2 py-0.5 rounded-md bg-surface-container text-[10px] font-medium text-on-surface-variant font-label-code">
              B2B Fundamentals
            </span>
            <span className="px-2 py-0.5 rounded-md bg-surface-container text-[10px] font-medium text-on-surface-variant font-label-code">
              3rd Place Pitching
            </span>
          </div>
          <AppLink to="/?project=trustee-business-card#selected-works" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700">
            {"View Trustee project "}
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_outward
            </span>
          </AppLink>
        </div>
      </div>
    </div>
  );
}
