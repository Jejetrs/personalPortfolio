import InaprocCaseStudyPart1 from './InaprocCaseStudyPart1.jsx';
import TelkomDesignShowcase from './TelkomDesignShowcase.jsx';

export default function InaprocCaseStudy() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 md:p-8 shadow-sm space-y-6" id="inaproc-case-study">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-outline-variant/40 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1"></div>
          <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold tracking-tight">
            {"INAPROC: Design System Refinement & Landing Page Revamp"}
          </h3>
          <p className="text-body-sm text-on-surface-variant">
            A unified product case study bridging foundational token architecture and civic landing page UX
          </p>
        </div>
      </div>
      <TelkomDesignShowcase />
      <div className="tas-divider"><span>Case Study Details</span></div>
      <InaprocCaseStudyPart1 />
    </div>
  );
}
