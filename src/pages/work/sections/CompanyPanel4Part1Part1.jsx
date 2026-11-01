export default function CompanyPanel4Part1Part1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-5 rounded-xl bg-surface-container-low/50 border border-outline-variant/40 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all">
        <div className="space-y-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">
              article
            </span>
          </div>
          <h4 className="text-body-sm font-bold text-on-surface">
            Project Evaluation
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Reviewed ML and AI Engineer submissions based on predefined module requirements and assessment criteria.
          </p>
        </div>
        <span className="text-[10px] font-bold font-label-code text-primary uppercase">
          Scope 01
        </span>
      </div>
      <div className="p-5 rounded-xl bg-surface-container-low/50 border border-outline-variant/40 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all">
        <div className="space-y-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">
              code
            </span>
          </div>
          <h4 className="text-body-sm font-bold text-on-surface">
            Technical Review
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Evaluated model implementation, architecture, code structure, and whether the submitted solution met project requirements.
          </p>
        </div>
        <span className="text-[10px] font-bold font-label-code text-primary uppercase">
          Scope 02
        </span>
      </div>
      <div className="p-5 rounded-xl bg-surface-container-low/50 border border-outline-variant/40 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all">
        <div className="space-y-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">
              chat
            </span>
          </div>
          <h4 className="text-body-sm font-bold text-on-surface">
            Structured Feedback
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Provided clear and actionable feedback to help learners identify technical issues and improve their project submissions.
          </p>
        </div>
        <span className="text-[10px] font-bold font-label-code text-primary uppercase">
          Scope 03
        </span>
      </div>
      <div className="p-5 rounded-xl bg-surface-container-low/50 border border-outline-variant/40 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all">
        <div className="space-y-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">
              checklist
            </span>
          </div>
          <h4 className="text-body-sm font-bold text-on-surface">
            Documentation Review
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Checked project documentation to ensure the implementation could be understood and evaluated consistently.
          </p>
        </div>
        <span className="text-[10px] font-bold font-label-code text-primary uppercase">
          Scope 04
        </span>
      </div>
    </div>
  );
}
