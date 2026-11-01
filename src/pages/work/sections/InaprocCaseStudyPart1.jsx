import ContentOverview from './ContentOverview.jsx';
import ContentWs3 from './ContentWs3.jsx';
import { switchInaprocTab } from '@/behaviors/workTabs.js';

export default function InaprocCaseStudyPart1() {
  return (
    <div className="space-y-4 pt-2">
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant/40" role="tablist">
        <button className="inaproc-tab flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs text-center transition-all text-on-surface-variant font-medium" id="tab-btn-overview" onClick={() => { switchInaprocTab('overview'); }}>
          <span className="flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[15px]">
              grid_view
            </span>
            {"Overview & Context"}
          </span>
        </button>
        <button className="inaproc-tab flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs text-center transition-all hover:bg-surface-container text-on-surface-variant font-medium" id="tab-btn-ws1" onClick={() => { switchInaprocTab('ws1'); }}>
          <span className="flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[15px]">
              widgets
            </span>
            WS 01: Design System
          </span>
        </button>
        <button className="inaproc-tab flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs text-center transition-all hover:bg-surface-container text-on-surface-variant font-medium" id="tab-btn-ws2" onClick={() => { switchInaprocTab('ws2'); }}>
          <span className="flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[15px]">
              web
            </span>
            WS 02: Landing Page
          </span>
        </button>
        <button className="inaproc-tab flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs text-center transition-all hover:bg-surface-container text-on-surface-variant font-medium" id="tab-btn-ws3" onClick={() => { switchInaprocTab('ws3'); }}>
          <span className="flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[15px]">
              verified_user
            </span>
            WS 03: B2B Fundamental
          </span>
        </button>
        <button className="inaproc-tab flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs text-center transition-all hover:bg-surface-container bg-surface-container-lowest text-primary shadow-sm font-semibold" id="tab-btn-metrics" onClick={() => { switchInaprocTab('metrics'); }}>
          <span className="flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[15px]">
              analytics
            </span>
            {"Output & Metrics"}
          </span>
        </button>
      </div>
      <ContentOverview />
      <div className="inaproc-tab-content space-y-4 hidden" id="content-ws1">
        <div className="bg-surface-container-low/40 rounded-xl border border-outline-variant/40 p-5 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary font-label-kicker">
            Workstream 01 // Component Audit · UI Refinement · Design Documentation
          </span>
          <h4 className="text-headline-sm font-bold text-on-surface">
            INAPROC Design System V3
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Refined reusable UI components to align with the established design system and support consistent implementation across the INAPROC ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold font-label-code">
                01
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                {"Component Audit & Alignment"}
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Reviewed component dimensions, spacing, colors, typography, borders, iconography, alignment, and variants to identify inconsistencies and guide refinements.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold font-label-code">
                02
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                Reusable Component Architecture
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Worked with Figma components, variables, variants, properties, and Auto Layout to structure reusable UI elements and accommodate different states and configurations.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold font-label-code">
                03
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                {"Design Specifications & Documentation"}
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Prepared component specifications and design documentation as a shared reference for Design and Development teams, supporting clearer handoffs and more consistent implementation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold font-label-code">
                04
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                Product Interface Implementation
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Applied the design system to the INAPROC E-Katalog product detail page, integrating elements such as navigation, breadcrumbs, product information, imagery, and order cards into a cohesive interface.
            </p>
          </div>
        </div>
      </div>
      <div className="inaproc-tab-content space-y-4 hidden" id="content-ws2">
        <div className="bg-surface-container-low/40 rounded-xl border border-outline-variant/40 p-5 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary font-label-kicker">
            Workstream 02 // Product Understanding · Information Architecture · Design Benchmarking
          </span>
          <h4 className="text-headline-sm font-bold text-on-surface">
            INAPROC Portal Experience Exploration
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Explored opportunities to improve how users understand and navigate the INAPROC ecosystem, using product analysis and design references to inform potential directions for the portal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[10px] font-bold font-label-code">
                01
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                {"Product & Information Analysis"}
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Analyzed portal characteristics, menu purposes, information hierarchy, and previous design iterations to build a clearer understanding of the existing experience.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[10px] font-bold font-label-code">
                02
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                Design Benchmarking
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Reviewed national and international websites to explore alternative approaches to layout, navigation, content organization, and information presentation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[10px] font-bold font-label-code">
                03
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                {"Visual & Interaction Exploration"}
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Explored website animation, full-page scrolling, and alternative layout concepts as references for communicating information and presenting the INAPROC ecosystem.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[10px] font-bold font-label-code">
                04
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wide">
                Ecosystem Communication
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Developed an interactive video storyline concept to explain the relationships between INAPROC services and make the ecosystem easier for the public to understand.
            </p>
          </div>
        </div>
      </div>
      <ContentWs3 />
      <div className="inaproc-tab-content space-y-4" id="content-metrics">
        <div className="bg-surface-container-low/40 rounded-xl border border-outline-variant/40 p-4 space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-tertiary font-label-kicker">
            {"Outcomes & Key Learnings"}
          </span>
          <h4 className="text-body-lg font-bold text-on-surface">
            {"Design Practice, Product Thinking & Collaboration"}
          </h4>
          <p className="text-xs text-on-surface-variant">
            Key outcomes developed across system design, product exploration, and stakeholder communication.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">
                library_add_check
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase">
                Reusable Design System
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Refined components and documented design specifications to support consistency, reusability, and clearer collaboration between Design and Development.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                description
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase">
                Product-Oriented Design
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Strengthened my ability to connect interface decisions with product structure, information hierarchy, user needs, and the broader digital ecosystem.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                group
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase">
                Cross-Functional Collaboration
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Worked with mentors, researchers, UI/UX designers, and developers through regular reviews, feedback, and iterative refinement.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">
                military_tech
              </span>
              <h5 className="text-xs font-bold text-on-surface uppercase">
                {"Business & Stakeholder Communication"}
              </h5>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Applied B2B fundamentals to a team-based use case proposal and gained experience presenting product and UX solutions to stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
