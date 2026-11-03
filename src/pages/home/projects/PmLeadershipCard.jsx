import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const EV = (folder, file) => `/assets/events/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
const PM_FILE = (file) => `/assets/projects/Project%20Management/${encodeURIComponent(file)}`;
const BA_FILE = (file) => `/assets/projects/Business%20Analyst/${encodeURIComponent(file)}`;
const TIMELINE_URL = "https://docs.google.com/spreadsheets/d/1leW0-s1cpyUfS_7pGFf2CgZ8bJ0YVjL1KM1baphrSSc/edit?usp=sharing";

const PROGRAMS = [
  {
    id: "digistar",
    tab: "Digistar Capstone",
    role: "Project Management",
    kicker: "DIGISTAR CAPSTONE · PROJECT MANAGEMENT",
    headline: "Keeping the Team Aligned, From Planning to Pitching",
    body:
      "Leading Team 32 meant keeping everyone informed and moving toward the same goal. I used a shared monitoring sheet to organize tasks, track deadlines, and coordinate our progress through mentoring, project discussions, and final pitching.",
    contributionsLabel: "MY CONTRIBUTIONS",
    stats: [["Team 32", "Team leadership"], ["Top 3", "Internal pitch result"]],
    points: [
      "Problem & stakeholder analysis: Reviewed marketplace trust issues, competitor context, SWOT and Business Model Canvas to frame the opportunity.",
      "Product scope & value: Helped translate the fake-review challenge into a proposed AI-assisted review-risk concept and clear value proposition.",
      "Project coordination: Used a shared tracker to keep tasks, progress discussions and business–AI follow-ups visible.",
      "Stakeholder communication: Contributed to the solution narrative and final pitch; the team achieved third place internally.",
    ],
    digistarDecisionTitle: "PRODUCT DECISIONS & DELIVERY LOGIC",
    digistarDecisions: [
      ["01", "Business question", "How might marketplace users identify suspicious reviews more confidently?", "Problem framing · Trust & review quality"],
      ["02", "Product direction", "Propose AI-assisted review-risk signals as decision support, rather than claiming fully automated moderation.", "Concept scope · Proposed, not launched"],
      ["03", "Delivery alignment", "Link B2B research and value proposition discussions to AI team considerations through tracking and follow-ups.", "Coordination · Business ↔ AI"],
      ["04", "Pitch outcome", "Communicate user problem, proposed features and business value in a coherent story.", "Team result · 3rd place internal pitch"],
    ],
    digistarWorkflowTitle: "PRODUCT-TO-PITCH WORKFLOW",
    digistarWorkflow: [
      ["01", "Identify the challenge", "Review trust and marketplace pain points."],
      ["02", "Research the context", "Competitive landscape, SWOT and BMC."],
      ["03", "Frame the solution", "Proposed review-risk analysis and business value."],
      ["04", "Communicate the concept", "Align teams and prepare the final pitch."],
    ],
    digistarDecisionNote: "What this demonstrates: business analysis used to guide product choices and cross-team alignment—not a claim of commercial deployment.",
    digistarLearning: "Product direction becomes clearer when business challenges are explicitly connected to proposed capabilities and decision criteria.",
    links: [{ label: "Open the Trustee case study", href: "/?project=trustee-business-card", internal: true }],
    photos: [
      ["Business Analyst", "Fase Pembuatan Feature Request - Digistar.png", "Feature request development", "Documenting the stages of the feature request process."],
      ["Business Analyst", "Metrik Evaluasi - Digistar.png", "Evaluation metrics", "Defining metrics to assess the proposed product feature."],
      ["Business Analyst", "Rating Feature Request - Digistar.png", "Feature request rating", "Evaluating and prioritizing the proposed feature request."],
      ["Business Analyst", "Spesifikasi AI -Digistar.png", "AI specifications", "Capturing the AI requirements and specifications for the concept."],
    ],
  },
  {
    id: "asah",
    tab: "ASAH 2026",
    role: "Project Management & Team Leadership",
    kicker: "PRODUCT SCOPE · PROJECT MANAGEMENT · TECHNICAL DELIVERY",
    headline: "Turning a Sales Problem into a Coordinated Six-Week Build",
    body:
      "LeadSight proposed a predictive lead-scoring portal to help banking sales teams prioritize outreach. As capstone team leader and a front-end contributor, I helped translate the MVP scope into workstreams, dependencies, milestones and delivery preparation.",
    contributionsLabel: "MY CONTRIBUTIONS",
    stats: [["5", "Team members"], ["3", "Workstreams"], ["6 weeks", "Planned timeline"]],
    points: [
      "MVP planning: Organized the dashboard, customer segmentation and AI insight scope into scheduled deliverables.",
      "Workstream ownership: Coordinated responsibilities across Machine Learning, Front-End and Back-End contributors.",
      "Dependencies & risks: Tracked integration needs and documented possible blockers including data imbalance, API dependencies and limited time.",
      "Delivery support: Helped coordinate integration preparation, documentation and final presentation while contributing to React development.",
    ],
    playbook: [],
    highlight: ["KEY DEPENDENCY", "ML output → API integration → React dashboard", "A working product depends on data contracts and timing, not only separate feature completion."],
    quote: "Managing delivery means accounting for dependencies, not simply checking whether individual tasks are finished.",
    quoteLabel: "KEY LEARNING",
    extraSections: [
      {
        title: "PROJECT DELIVERY PLAN · SIX WEEKS",
        items: [
          ["W1", "Dataset & UI/UX scope"],
          ["W2", "Model, React & API build"],
          ["W3", "Testing & integration"],
          ["W4", "Deployment & unit test plan"],
          ["W5", "Documentation"],
          ["W6", "Brief & presentation"],
        ],
      },
      {
        title: "FROM PRODUCT REQUIREMENTS TO TEAM DELIVERY",
        items: [
          ["01 · User problem", "Sales staff need a clearer basis for prioritizing prospects than broad demographic outreach."],
          ["02 · MVP scope", "Dashboard analytics, priority categories and AI-assisted sales insights were defined as proposed core capabilities."],
          ["03 · Execution path", "ML scoring → Backend API & database → React dashboard; each dependency affects downstream work."],
          ["04 · Quality checkpoint", "The team presentation reports 16 of 16 functional black-box scenarios passing."],
        ],
      },
    ],
    links: [{ label: "Open the LeadSight developer project", href: "/?project=leadsight-project-card#selected-works", internal: true }],
    photos: [
      ["ASAH 2026", "Capstone Team Meeting Progress.jpeg", "Writing the plan live", "Drafting the project plan with the team."],
      ["ASAH 2026", "Advisor Meeting.webp", "Advisor session", "Syncing direction with our advisor."],
      ["ASAH 2026", "Capstone Team Discuss.jpeg", "Design review", "Walking the team through a review."],
      ["ASAH 2026", "Pitching.jpeg", "Final pitch", "Presenting the competitor analysis."],
    ],
  },
  {
    id: "arkavidia",
    tab: "Arkavidia 9.0",
    role: "Product Management",
    kicker: "PRODUCT DISCOVERY · MVP PRIORITIZATION · SPRINT COLLABORATION",
    headline: "Prioritizing a Product Direction Under a 24-Hour Deadline",
    body:
      "AiDorse was a hackathon concept for helping MSMEs plan creator campaigns. I contributed to early research, translated pain points into proposed features and user flows, and aligned product ideas with the team's technical and presentation constraints.",
    contributionsLabel: "MY CONTRIBUTIONS",
    stats: [["5", "MSME respondents"], ["1", "Creator interview"], ["Top 10", "Finalist"]],
    points: [
      "User discovery: Used exploratory input from five MSMEs and one creator to surface campaign-brief, creator-fit and budget challenges.",
      "Product requirements: Mapped pain points into AI-assisted brief suggestions, creator matching and campaign visibility concepts.",
      "MVP & UX decisions: Developed brand–creator user flows and prototype screens to make the priority experience understandable.",
      "Sprint coordination & pitch: Aligned product direction with teammates during the 24-hour build-and-pitch window.",
    ],
    playbook: [],
    highlight: ["RAPID PRODUCT THINKING", "Focus on the user journey before adding more features.", "Concept and prototype produced in a hackathon, not a launched marketplace."],
    quote: "A short development window makes it even more important to anchor the proposed solution in explicit user problems.",
    quoteLabel: "KEY LEARNING",
    extraSections: [
      {
        title: "24-HOUR PRODUCT DISCOVERY & SPRINT FLOW",
        items: [
          ["01 · Discover", "Survey MSMEs and interview a creator."],
          ["02 · Synthesize", "Map pain points around briefs, fit, cost and visibility."],
          ["03 · Design", "Translate needs into flows and prototype screens."],
          ["04 · Present", "Explain the user journey, value and technical concept."],
        ],
      },
    ],
    links: [],
    photos: [
      ["Arkavidia 9.0", "Userflow AiDorse.png", "AiDorse user flow", "The flow that aligned the team before building.", "contain"],
      ["Arkavidia 9.0", "pitching.jpeg", "Pitching on stage", "Presenting to the judges."],
      ["Arkavidia 9.0", "consultation to wiz.ai.webp", "Practitioner consultation", "Testing assumptions with industry.", "contain"],
      ["Arkavidia 9.0", "pitching2.jpeg", "Live demo", "Demo during the finalist pitch."],
      ["Arkavidia 9.0", "night code.png", "Late-night build", "Crunch time before the deadline."],
      ["Arkavidia 9.0", "tim profile.jpeg", "Team at Block71", "Hacking and pitching day, Bandung."],
      ["Arkavidia 9.0", "flyer congratulation by Gunadarma.jpeg", "Campus recognition", "Congratulations from Gunadarma University."],
    ],
  },
];

const ARTIFACTS = [
  { href: TIMELINE_URL, title: "Project timeline", text: "Live Google Sheet · view only", icon: "sheet", tag: "Sheet" },
  { href: PM_FILE("Example project plan.pdf"), title: "Project plan", text: "Scope, milestones and responsibilities", icon: "doc", tag: "PDF" },
];

const STYLE = `
.pmx{--ink:#14284b;--mut:#5f7089;--line:#dbe6f5;--acc:#2a5fb4;--acc2:#7c5cff;position:relative;overflow:hidden;padding:20px;border:1px solid var(--line);border-radius:24px;color:var(--ink);background:linear-gradient(135deg,#fff 0%,#f3f7ff 60%,#f1ecff 100%);font-size:12.5px;line-height:1.5}
.pmx *{box-sizing:border-box}
.pmx .head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:8px 24px}
.pmx .eyebrow{margin:0 0 5px;font:700 10.5px/1 "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--acc2)}
.pmx h2{margin:0;font-size:26px;line-height:1.1;letter-spacing:-.03em;font-weight:800}
.pmx h2 span{background:linear-gradient(90deg,var(--acc),var(--acc2));-webkit-background-clip:text;background-clip:text;color:transparent}
.pmx .lead{margin:0;max-width:44ch;color:var(--mut);font-size:12.5px}
.pmx .roles{display:flex;gap:6px;margin:14px 0 0;padding:4px;border:1px solid var(--line);border-radius:14px;background:#ffffffb8}
.pmx .role{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;padding:8px 12px;text-align:left;font:inherit;color:inherit;cursor:pointer;border:0;border-radius:10px;background:transparent;transition:background .2s,color .2s}
.pmx .role:hover{background:#eef3fc}
.pmx .role:focus-visible{outline:3px solid #9fb3d6;outline-offset:1px}
.pmx .role small{font:700 9.5px/1.2 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--mut)}
.pmx .role b{font-size:13px;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pmx .role[aria-selected=true]{background:var(--ink);color:#fff;box-shadow:0 8px 18px #14284b33}
.pmx .role[aria-selected=true] small{color:#c4d3ee}
.pmx .panel{margin-top:14px;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:16px;align-items:start;animation:pmxin .35s ease both}
@keyframes pmxin{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.pmx .kicker{margin:0 0 4px;font:700 10px/1.3 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--acc2)}
.pmx h3{margin:0 0 6px;font-size:19px;line-height:1.2;letter-spacing:-.02em}
.pmx .body{margin:0;color:#46506a;font-size:12.5px}
.pmx .stats{display:flex;flex-wrap:wrap;gap:6px;margin:9px 0}
.pmx .stat{display:flex;align-items:baseline;gap:6px;padding:5px 10px;border-radius:10px;background:#fff;border:1px solid var(--line)}
.pmx .stat b{font-size:15px;line-height:1.1;color:var(--acc);letter-spacing:-.02em}
.pmx .stat span{font-size:10.5px;color:var(--mut)}
.pmx ol.pts{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;counter-reset:p}
.pmx ol.pts li{counter-increment:p;display:grid;grid-template-columns:22px minmax(0,1fr);column-gap:6px;align-content:start;min-width:0;padding:8px 9px;border:1px solid #dfe7f5;border-left:3px solid var(--acc2);border-radius:5px 10px 10px 5px;background:#ffffffd0}
.pmx ol.pts li::before{content:counter(p,decimal-leading-zero);grid-row:1/3;font:700 10px/1.6 "JetBrains Mono",monospace;color:var(--acc2)}
.pmx .point-label{display:block;color:#243653;font-size:11px;font-weight:800;line-height:1.3}
.pmx .point-copy{display:block;margin-top:1px;color:#67738c;font-size:10.5px;line-height:1.4}
.pmx .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
.pmx .chip{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:99px;border:1px solid var(--line);background:#fff;color:var(--ink);font-size:11px;font-weight:700;text-decoration:none;transition:transform .2s,border-color .2s}
.pmx .chip:hover{transform:translateY(-1px);border-color:#b9c9e6}
.pmx .chip.solid{background:var(--ink);border-color:var(--ink);color:#fff}
.pmx .chip em{font:700 9px/1 "JetBrains Mono",monospace;font-style:normal;padding:3px 6px;border-radius:99px;background:#eef3fc;color:var(--acc)}
.pmx .gal{min-width:0}
.pmx .feat{position:relative;display:block;width:100%;padding:0;overflow:hidden;cursor:zoom-in;border:1px solid var(--line);border-radius:14px;background:#fff;aspect-ratio:16/10;font:inherit}
.pmx .feat img{width:100%;height:100%;object-fit:cover;display:block}
.pmx .feat.contain img{object-fit:contain;background:#fff}
.pmx .fcap{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 8px;margin:6px 2px 0}.pmx .fcap b{font-size:11.5px}.pmx .fcap span{font-size:10.5px;color:var(--mut)}
.pmx .thumbs{display:flex;gap:6px;margin-top:6px;overflow-x:auto;padding-bottom:2px}
.pmx .thumb{flex:1 1 0;max-width:calc((100% - 24px)/5);min-width:54px;aspect-ratio:16/10;padding:0;overflow:hidden;cursor:pointer;border:2px solid transparent;border-radius:8px;background:#e8eefa;opacity:.72;transition:opacity .2s,border-color .2s}
.pmx .thumb img{width:100%;height:100%;object-fit:cover;display:block}
.pmx .thumb.contain img{object-fit:contain;background:#fff}
.pmx .thumb:hover{opacity:1}.pmx .thumb[aria-current=true]{opacity:1;border-color:var(--acc2)}
.pmx .thumb:focus-visible{outline:3px solid #9fb3d6;outline-offset:1px}
.pmx .dd{margin-top:12px}
.pmx .dd-btn{display:flex;align-items:center;gap:8px;width:100%;padding:9px 13px;border:1px solid var(--line);border-radius:12px;background:#ffffffcc;color:var(--ink);font:700 12px/1.3 inherit;font-family:inherit;text-align:left;cursor:pointer;transition:background .2s}
.pmx .dd-btn:hover{background:#fff}
.pmx .dd-btn:focus-visible{outline:3px solid #9fb3d6;outline-offset:2px}
.pmx .dd-btn i{width:8px;height:8px;border-radius:50%;background:var(--acc2);flex:none}
.pmx .dd-btn .n{padding:2px 9px;border-radius:99px;background:#eef3fc;color:var(--mut);font-size:10px;font-weight:700}
.pmx .dd-btn .act{margin-left:auto;display:flex;align-items:center;gap:6px;color:var(--mut);font-size:11px;font-weight:600}
.pmx .dd-btn svg{transition:transform .25s}.pmx .dd-btn[aria-expanded=true] svg{transform:rotate(180deg)}
.pmx .dd-body{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding-top:10px}
.pmx .dd-body>*{min-width:0}
.pmx .box{padding:12px 14px;border:1px solid var(--line);border-radius:14px;background:#ffffffd6}
.pmx .box.wide{grid-column:1/-1}
.pmx .box h4{margin:0 0 8px;color:var(--acc2);font:700 9.5px/1.4 "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase}
.pmx .items{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}
.pmx .items.six{grid-template-columns:repeat(3,minmax(0,1fr))}
.pmx .item{padding:7px 9px;border:1px solid #e5e9f5;border-radius:10px;background:#fff}
.pmx .item b{display:block;margin-bottom:1px;color:var(--ink);font-size:11px}
.pmx .item span{display:block;color:var(--mut);font-size:10px;line-height:1.4}
.pmx .note{margin:8px 0 0;padding:7px 10px;border-left:3px solid var(--acc2);border-radius:0 9px 9px 0;background:#f1edff;color:#45526c;font-size:10.5px;line-height:1.45}
.pmx .note strong{color:#34236b}
.pmx .tbl-wrap{overflow-x:auto;border:1px solid #e3def7;border-radius:11px;background:#fff}
.pmx table{width:100%;border-collapse:collapse;text-align:left}
.pmx th,.pmx td{padding:6px 8px;vertical-align:top;border-bottom:1px solid #ece8f7;font-size:10px;line-height:1.4}
.pmx thead th{background:#f7f4ff;color:var(--acc2);font-size:8.5px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
.pmx tbody tr:last-child th,.pmx tbody tr:last-child td{border-bottom:0}
.pmx tbody th{color:#34236b;font-weight:700}
.pmx tbody th span{display:block;color:var(--acc2);font:800 9px/1.2 "JetBrains Mono",monospace}
.pmx td{color:#465674}.pmx td:last-child{color:#6f4bce;font-weight:600}
.pmx-lb{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(10,14,26,.94);animation:pmxin .25s ease}
.pmx-lb .stage{flex:1;width:100%;min-height:0;overflow:auto;display:flex;padding:56px 16px 8px}
.pmx-lb img{margin:auto;max-width:100%;max-height:100%;object-fit:contain;border-radius:10px;cursor:zoom-in}
.pmx-lb.zoom img{max-width:none;max-height:none;width:min(220%,2400px);cursor:zoom-out}
.pmx-lb .cap{padding:8px 16px 16px;color:#e8eefc;font:600 13px/1.4 system-ui,sans-serif;text-align:center}
.pmx-lb button{position:absolute;display:grid;place-items:center;width:42px;height:42px;border:0;border-radius:50%;background:#fff;color:#111;font-size:22px;cursor:pointer}
.pmx-lb .x{top:12px;right:14px}.pmx-lb .p{left:12px;top:50%}.pmx-lb .n{right:12px;top:50%}
@media(max-width:900px){.pmx .panel{grid-template-columns:1fr}.pmx .dd-body{grid-template-columns:1fr}.pmx .items.six{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){.pmx{padding:16px;border-radius:20px}.pmx h2{font-size:22px}.pmx .roles{flex-direction:column}.pmx ol.pts,.pmx .items{grid-template-columns:1fr}.pmx .role b{white-space:normal}}
@media(prefers-reduced-motion:reduce){.pmx .panel{animation:none}}
`;

function Lightbox({ photos, index, onClose, onMove }) {
  const [zoom, setZoom] = useState(false);
  const photo = photos[index];
  useEffect(() => {
    setZoom(false);
  }, [index]);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onMove(1);
      if (event.key === "ArrowLeft") onMove(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onMove]);
  if (!photo) return null;
  return createPortal(
    <div className={`pmx-lb${zoom ? " zoom" : ""}`} role="dialog" aria-modal="true" aria-label={photo.title} onClick={onClose}>
      <div className="stage" onClick={onClose}>
        <img alt={photo.title} src={photo.src} onClick={(event) => { event.stopPropagation(); setZoom((value) => !value); }} />
      </div>
      <div className="cap">{photo.title}{photos.length > 1 ? `  ·  ${index + 1}/${photos.length}` : ""}</div>
      <button className="x" type="button" aria-label="Close photo" onClick={onClose}>×</button>
      {photos.length > 1 && (
        <>
          <button className="p" type="button" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); onMove(-1); }}>‹</button>
          <button className="n" type="button" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); onMove(1); }}>›</button>
        </>
      )}
    </div>,
    document.body,
  );
}

const ICON = {
  sheet: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M4 15h16M10 4v16" /></>,
  doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
};


const CHEVRON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 9l-7 7-7-7" />
  </svg>
);

function Details({ program }) {
  const hasDecisions = program.digistarDecisions?.length > 0;
  const sections = program.extraSections || [];
  const count = (hasDecisions ? 2 : 0) + sections.length + (program.highlight || program.quote ? 1 : 0);
  const [open, setOpen] = useState(false);
  if (!count) return null;
  return (
    <div className="dd">
      <button type="button" className="dd-btn" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <i />
        <span>Delivery details</span>
        <span className="n">{count} sections</span>
        <span className="act">{open ? "Hide" : "Show"} details {CHEVRON}</span>
      </button>
      {open && (
        <div className="dd-body">
          {hasDecisions && (
            <>
              <section className="box">
                <h4>{program.digistarDecisionTitle}</h4>
                <div className="tbl-wrap">
                  <table>
                    <thead><tr><th scope="col">Stage</th><th scope="col">Decision</th><th scope="col">Context</th></tr></thead>
                    <tbody>
                      {program.digistarDecisions.map(([number, title, text, meta]) => (
                        <tr key={number}><th scope="row"><span>{number}</span>{title}</th><td>{text}</td><td>{meta}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="note">{program.digistarDecisionNote}</p>
              </section>
              <section className="box">
                <h4>{program.digistarWorkflowTitle}</h4>
                <div className="tbl-wrap">
                  <table>
                    <thead><tr><th scope="col">Step</th><th scope="col">Activity</th><th scope="col">Focus</th></tr></thead>
                    <tbody>
                      {program.digistarWorkflow.map(([number, title, text]) => (
                        <tr key={number}><th scope="row">{number}</th><td><b>{title}</b></td><td>{text}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="note"><strong>Key learning:</strong> {program.digistarLearning}</p>
              </section>
            </>
          )}
          {sections.map((section, index) => (
            <section className={`box${index === 0 && sections.length > 1 ? " wide" : ""}`} key={section.title}>
              <h4>{section.title}</h4>
              <div className={`items${section.items.length === 6 ? " six" : ""}`}>
                {section.items.map(([title, text]) => (
                  <div className="item" key={title}>
                    <b>{title}</b>
                    {text && <span>{text}</span>}
                  </div>
                ))}
              </div>
            </section>
          ))}
          {(program.highlight || program.quote) && (
            <section className="box">
              <h4>{program.highlight ? program.highlight[0] : program.quoteLabel}</h4>
              {program.highlight && <div className="item"><b>{program.highlight[1]}</b><span>{program.highlight[2]}</span></div>}
              {program.quote && <p className="note"><strong>{program.quoteLabel || "KEY LEARNING"}:</strong> {program.quote}</p>}
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default function PmLeadershipCard() {
  const [active, setActive] = useState(PROGRAMS[0].id);
  const [shownIndex, setShownIndex] = useState(0);
  const [open, setOpen] = useState(-1);
  const program = PROGRAMS.find((item) => item.id === active);
  const photos = program.photos.map(([folder, file, title, text, fit]) => ({
    src: folder === "Business Analyst" ? BA_FILE(file) : EV(folder, file),
    title,
    text,
    fit: fit || (folder === "Business Analyst" ? "contain" : ""),
  }));
  const close = useCallback(() => setOpen(-1), []);
  const move = useCallback((step) => setOpen((value) => (value + step + photos.length) % photos.length), [photos.length]);
  const select = (id) => { setActive(id); setShownIndex(0); };
  const current = photos[Math.min(shownIndex, photos.length - 1)];
  const links = [
    ...program.links.map((link) => ({ ...link, solid: true })),
    ...(program.id === "asah" ? ARTIFACTS.map((file) => ({ href: file.href, label: file.title, tag: file.tag, external: true })) : []),
  ];

  return (
    <>
      <style>{STYLE}</style>
      <article className="project-card-item pmx" data-category="team leadership" id="pm-leadership-card">
        <div className="head">
          <div>
            <p className="eyebrow">Project management · leadership</p>
            <h2>
              How I Keep Projects <span>on Track</span>
            </h2>
          </div>
          <p className="lead">
            A closer look at how I plan, coordinate, and support team progress across different projects.
          </p>
        </div>

        <div className="roles" role="tablist" aria-label="Management roles">
          {PROGRAMS.map((item) => (
            <button key={item.id} type="button" role="tab" className="role" aria-selected={item.id === active} onClick={() => select(item.id)}>
              <small>{item.tab}</small>
              <b>{item.role}</b>
            </button>
          ))}
        </div>

        <div className={`panel panel-${program.id}`} key={program.id} role="tabpanel">
          <div className="story">
            <p className="kicker">{program.kicker}</p>
            <h3>{program.headline}</h3>
            <p className="body">{program.body}</p>
            <div className="stats">
              {program.stats.map(([value, label]) => (
                <div className="stat" key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <ol className="pts">
              {program.points.map((point) => {
                const separator = point.indexOf(": ");
                return (
                  <li key={point}>
                    {separator > 0 ? (
                      <>
                        <span className="point-label">{point.slice(0, separator)}</span>
                        <span className="point-copy">{point.slice(separator + 2)}</span>
                      </>
                    ) : <span className="point-copy">{point}</span>}
                  </li>
                );
              })}
            </ol>
            {links.length > 0 && (
              <div className="chips">
                {links.map((link) => (
                  <a className={`chip${link.solid ? " solid" : ""}`} key={link.href} href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                    {link.label} {link.tag ? <em>{link.tag}</em> : "→"}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="gal">
            <button className={`feat${current.fit === "contain" ? " contain" : ""}`} type="button" onClick={() => setOpen(photos.indexOf(current))} aria-label={`Enlarge ${current.title}`}>
              <img alt={current.title} src={current.src} />
              </button>
            <p className="fcap"><b>{current.title}</b><span>{current.text}</span></p>
            {photos.length > 1 && (
              <div className="thumbs">
                {photos.map((photo, index) => (
                  <button className={`thumb${photo.fit === "contain" ? " contain" : ""}`} type="button" key={photo.src} aria-current={index === shownIndex} aria-label={`Show ${photo.title}`} onClick={() => setShownIndex(index)}>
                    <img alt="" loading="lazy" src={photo.src} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <Details program={program} key={`d-${program.id}`} />
      </article>
      {open >= 0 && <Lightbox photos={photos} index={open} onClose={close} onMove={move} />}
    </>
  );
}
