export default function CompanyPanel3Part1() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-2 pb-1">
        <span className="text-xs font-bold uppercase tracking-wider text-primary font-label-code">
          KEY RESPONSIBILITIES
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-surface-container-low/40 border border-outline-variant/40 flex items-start gap-4 hover:border-primary/50 transition-colors">
          <div className="flex flex-col items-center justify-between gap-3 flex-shrink-0">
            <span className="material-symbols-outlined text-[24px] text-primary">
              code
            </span>
          </div>
          <div className="space-y-1">
            <h4 className="text-body-md font-bold text-on-surface">
              Technical Instruction
            </h4>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Delivered practical HTML, CSS, and JavaScript sessions, guiding participants through coding exercises and debugging.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-surface-container-low/40 border border-outline-variant/40 flex items-start gap-4 hover:border-primary/50 transition-colors">
          <div className="flex flex-col items-center justify-between gap-3 flex-shrink-0">
            <span className="material-symbols-outlined text-[24px] text-primary">
              groups
            </span>
          </div>
          <div className="space-y-1">
            <h4 className="text-body-md font-bold text-on-surface">
              Workshop Coordination
            </h4>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Supported workshop preparation, session flow, participant assistance, and event hosting.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-surface-container-low/40 border border-outline-variant/40 flex items-start gap-4 hover:border-primary/50 transition-colors">
          <div className="flex flex-col items-center justify-between gap-3 flex-shrink-0">
            <span className="material-symbols-outlined text-[24px] text-primary">
              build
            </span>
          </div>
          <div className="space-y-1">
            <h4 className="text-body-md font-bold text-on-surface">
              Technical Support
            </h4>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Assisted with technical setup and troubleshooting to help learning activities run smoothly.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-surface-container-low/40 border border-outline-variant/40 flex items-start gap-4 hover:border-primary/50 transition-colors">
          <div className="flex flex-col items-center justify-between gap-3 flex-shrink-0">
            <span className="material-symbols-outlined text-[24px] text-primary">
              description
            </span>
          </div>
          <div className="space-y-1">
            <h4 className="text-body-md font-bold text-on-surface">
              {"Documentation & Coordination"}
            </h4>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Supported program execution through documentation, equipment preparation, and operational coordination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
