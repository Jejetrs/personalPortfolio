import CompanyPanel4Part1Part1 from './CompanyPanel4Part1Part1.jsx';

export default function CompanyPanel4Part1() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-2 pb-3 border-b border-outline-variant/40">
        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">
            description
          </span>
        </div>
        <div>
          <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold tracking-tight">
            {"Review Scope & Responsibilities"}
          </h3>
          <p className="text-xs text-on-surface-variant">
            Core assessment criteria applied across all evaluated learner codebases
          </p>
        </div>
      </div>
      <CompanyPanel4Part1Part1 />
    </div>
  );
}
