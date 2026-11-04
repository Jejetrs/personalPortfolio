import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { startAutoSlideshow } from "@/lib/autoSlideshow.js";

const EV = (folder, file) => `/assets/events/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
const PM_FILE = (file) => `/assets/projects/Project%20Management/${encodeURIComponent(file)}`;
const BA_FILE = (file) => `/assets/projects/Business%20Analyst/${encodeURIComponent(file)}`;
const TIMELINE_URL = "https://docs.google.com/spreadsheets/d/1leW0-s1cpyUfS_7pGFf2CgZ8bJ0YVjL1KM1baphrSSc/edit?usp=sharing";

const PROGRAMS = [
  {
    id: "digistar",
    number: "01",
    tab: "Digistar Class Intern",
    role: "Project Management",
    tags: ["Marketplace Trust", "Product Management"],
    kicker: "TRUSTEE - DIGISTAR CLASS INTERN 2026",
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
    number: "02",
    tab: "ASAH 2026",
    role: "Project Management & Team Leadership",
    tags: ["Banking & Sales", "Project Management"],
    kicker: "LEADSIGHT - ASAH 2026",
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
    number: "03",
    tab: "AiDORSE - Arkavidia 9.0",
    role: "Product Management",
    tags: ["Creator Economy", "Product Management"],
    kicker: "ARKAVIDIA 9.0",
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

const ASAH_RESOURCES = [
  { href: TIMELINE_URL, title: "Project timeline", text: "Live Google Sheet · view only", icon: "sheet", tag: "Sheet" },
  { href: PM_FILE("Example project plan.pdf"), title: "Project plan", text: "Scope, milestones and responsibilities", icon: "doc", tag: "PDF" },
];

const STYLE = `
.pmx{--ink:#172033;--mut:#607089;--line:#c9eee0;--acc:#007c56;--acc2:#00805a;--soft:#d8f7e9;--card-start:#f3faf7;--card-mid:#ebf7f2;--card-end:#e4f5ed;position:relative;overflow:hidden;padding:16px;border:1px solid var(--line);border-radius:16px;color:var(--ink);background:linear-gradient(135deg,var(--card-start) 0%,var(--card-mid) 60%,var(--card-end) 100%);font-size:14px;line-height:1.5;box-shadow:0 12px 32px rgba(20,32,63,.06)}
.pmx.pmx-digistar{--line:#f3d4b2;--acc:#bd641c;--acc2:#d47b2a;--soft:#ffecd8;--card-start:#fffaf4;--card-mid:#fff3e5;--card-end:#ffefd9}
.pmx.pmx-asah{--line:#dfd2f3;--acc:#7046a8;--acc2:#865ac0;--soft:#eee4fb;--card-start:#fbf8ff;--card-mid:#f4edfc;--card-end:#eee6fa}
.pmx.pmx-arkavidia{--line:#cbdcf5;--acc:#326ab0;--acc2:#4c83c7;--soft:#e1edfc;--card-start:#f7faff;--card-mid:#edf4fd;--card-end:#e5effc}
.pmx *{box-sizing:border-box}
.pmx .panel{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:20px;align-items:stretch;animation:pmxin .35s ease both}
@keyframes pmxin{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.pmx .story{display:flex;grid-column:span 7;min-width:0;flex-direction:column}
.pmx .project-tags{display:flex;grid-column:1/-1;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:0;padding-bottom:12px;border-bottom:1px solid var(--line)}
.pmx .project-number{display:inline-flex;align-items:center;justify-content:center;flex:none;width:24px;height:24px;border-radius:50%;background:var(--acc);color:#fff;font-size:12px;font-weight:700}
.pmx .project-tag{display:inline-flex;align-items:center;min-height:24px;padding:2px 10px;border:1px solid var(--line);border-radius:999px;background:#ffffffd9;color:var(--acc);font-size:11px;font-weight:600;line-height:1.4}
.pmx .project-tag[data-primary=true]{background:var(--soft)}
.pmx .project-title{margin-top:24px}
.pmx h3{margin:0;font-size:24px;line-height:1.2;letter-spacing:-.025em;font-weight:700;color:#172033}
.pmx .kicker{margin:8px 0 0;font-family:inherit;font-size:12px;font-weight:600;line-height:1.4;letter-spacing:.05em;text-transform:uppercase;color:var(--acc)}
.pmx .body{margin:18px 0 0;color:#40536a;font-size:14px;line-height:1.625}
.pmx .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,140px),1fr));gap:8px;width:100%;margin:14px 0 0}
.pmx .stat{display:flex;min-width:0;min-height:54px;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 10px;border:1px solid var(--line);border-radius:12px;background:#ffffffd9;text-align:center}
.pmx .stat b{font-size:14px;line-height:1.2;color:var(--acc);letter-spacing:-.02em}
.pmx .stat span{font-size:10px;font-weight:700;line-height:1.35;color:#91a4ba;text-transform:uppercase;letter-spacing:.04em}
.pmx ol.pts{margin:8px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;counter-reset:p}
.pmx ol.pts li{counter-increment:p;display:grid;grid-template-columns:22px minmax(0,1fr);column-gap:6px;align-content:start;min-width:0;padding:9px 10px;border:1px solid #dfe7f5;border-left:3px solid var(--acc2);border-radius:5px 10px 10px 5px;background:#ffffffd0}
.pmx ol.pts li::before{content:counter(p,decimal-leading-zero);grid-row:1/3;font:700 10px/1.6 "JetBrains Mono",monospace;color:var(--acc2)}
.pmx .point-label{display:block;color:#243653;font-size:12px;font-weight:700;line-height:1.35}
.pmx .point-copy{display:block;margin-top:2px;color:#67738c;font-size:12px;line-height:1.45}
.pmx .chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 0 auto}
.pmx .chip{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:10px;border:1px solid var(--line);background:#ffffffd9;color:var(--acc);font-size:11px;font-weight:700;text-decoration:none;transition:transform .2s,border-color .2s,background .2s}
.pmx .chip:hover{transform:translateY(-1px);border-color:#b9c9e6}
.pmx .chip.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.pmx .chip em{font:700 9px/1 "JetBrains Mono",monospace;font-style:normal;padding:3px 6px;border-radius:99px;background:var(--soft);color:var(--acc)}
.pmx .gal{position:relative;display:flex;grid-column:span 5;min-width:0;min-height:0;flex-direction:column;gap:18px;overflow:hidden;padding:18px;border:1px solid #c9e8ff;border-radius:26px;background:#ffffffd9}
.pmx .gallery-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 2px}
.pmx .gallery-label{display:flex;align-items:center;gap:7px;min-width:0;color:#607089;font:700 10px/1.3 "JetBrains Mono",monospace;letter-spacing:.08em;text-transform:uppercase}
.pmx .gallery-label::before{content:"";width:7px;height:7px;flex:none;border-radius:50%;background:var(--acc)}
.pmx .gallery-count{flex:none;padding:4px 10px;border-radius:999px;background:linear-gradient(100deg,var(--acc),var(--acc2));color:#fff;font-size:10px;font-weight:800;line-height:1.2;text-transform:uppercase}
.pmx .gallery-stage{position:relative;display:flex;flex:1 1 0;align-items:center;justify-content:center;width:100%;min-height:0;padding:14px 18px 64px;overflow:hidden;border-radius:24px;background:radial-gradient(ellipse at 18% 18%,#a9e5f8 0%,transparent 48%),radial-gradient(ellipse at 84% 88%,#d7c4ff 0%,transparent 54%),linear-gradient(135deg,#c8edfb 0%,#edf1ff 54%,#e0d5ff 100%)}
.pmx .feat{display:flex;flex:1;align-items:center;justify-content:center;width:100%;height:100%;min-width:0;min-height:0;padding:0;overflow:visible;cursor:zoom-in;border:0;border-radius:0;background:transparent;box-shadow:none;font:inherit}
.pmx .feat img{display:block;width:auto;height:auto;max-width:100%;max-height:100%;object-fit:contain;border-radius:16px;box-shadow:0 14px 30px #1720331a;animation:pmx-gallery-fade .5s ease-in-out both}
@keyframes pmx-gallery-fade{from{opacity:0}to{opacity:1}}
.pmx .gallery-nav{position:absolute;top:50%;display:grid;width:36px;height:36px;padding:0;place-items:center;transform:translateY(-50%);border:1px solid rgba(255,255,255,.55);border-radius:50%;background:rgba(15,23,42,.58);color:#fff;backdrop-filter:blur(8px);box-shadow:0 4px 12px #1720331a;line-height:0;cursor:pointer;transition:background-color .25s ease,opacity .25s ease}
.pmx .gallery-nav svg{display:block;width:18px;height:18px}
.pmx .gallery-nav:hover{background:#4f46e5}
.pmx .gallery-nav:focus-visible,.pmx .gallery-dot:focus-visible{outline:3px solid var(--acc2);outline-offset:2px}
.pmx .gallery-nav.prev{left:12px}.pmx .gallery-nav.next{right:12px}
.pmx .gallery-dots{position:absolute;right:0;bottom:14px;left:0;display:flex;justify-content:center;gap:6px;width:max-content;max-width:calc(100% - 24px);margin:auto;padding:5px 8px;border:1px solid #ffffffad;border-radius:999px;background:#ffffffdc;backdrop-filter:blur(8px)}
.pmx .gallery-dot{width:8px;height:8px;flex:none;padding:0;border:0;border-radius:999px;background:#b8d9ff;cursor:pointer;transition:width .2s,background .2s}
.pmx .gallery-dot[aria-current=true]{width:20px;background:var(--acc)}
.pmx .fcap{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin:0 2px;color:var(--mut);font-size:11px;line-height:1.4}
.pmx .fcap b{overflow:hidden;color:var(--ink);font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}
.pmx .fcap span{flex:none;font:600 10px/1.3 "JetBrains Mono",monospace;letter-spacing:.03em}
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
.pmx .note{margin:8px 0 0;padding:7px 10px;border-left:3px solid var(--acc2);border-radius:0 9px 9px 0;background:var(--soft);color:#45526c;font-size:10.5px;line-height:1.45}
.pmx .note strong{color:var(--acc)}
.pmx .tbl-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:11px;background:#fff}
.pmx table{width:100%;border-collapse:collapse;text-align:left}
.pmx th,.pmx td{padding:6px 8px;vertical-align:top;border-bottom:1px solid var(--line);font-size:10px;line-height:1.4}
.pmx thead th{background:var(--soft);color:var(--acc2);font-size:8.5px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
.pmx tbody tr:last-child th,.pmx tbody tr:last-child td{border-bottom:0}
.pmx tbody th{color:var(--acc);font-weight:700}
.pmx tbody th span{display:block;color:var(--acc2);font:800 9px/1.2 "JetBrains Mono",monospace}
.pmx td{color:#465674}.pmx td:last-child{color:var(--acc2);font-weight:600}
.pmx-lb{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(10,14,26,.94);animation:pmxin .25s ease}
.pmx-lb .stage{flex:1;width:100%;min-height:0;overflow:auto;display:flex;padding:56px 16px 8px}
.pmx-lb img{margin:auto;max-width:100%;max-height:100%;object-fit:contain;border-radius:10px;cursor:zoom-in;animation:pmx-gallery-fade .5s ease-in-out both}
.pmx-lb.zoom img{max-width:none;max-height:none;width:min(220%,2400px);cursor:zoom-out}
.pmx-lb .cap{padding:8px 16px 16px;color:#e8eefc;font:600 13px/1.4 system-ui,sans-serif;text-align:center}
.pmx-lb button{position:absolute;display:grid;place-items:center;width:36px;height:36px;padding:0;border:1px solid rgba(255,255,255,.55);border-radius:50%;background:rgba(15,23,42,.58);color:#fff;backdrop-filter:blur(8px);line-height:0;cursor:pointer;transition:background-color .25s ease,opacity .25s ease}
.pmx-lb .p:hover,.pmx-lb .n:hover{background:#4f46e5}
.pmx-lb button svg{display:block;width:18px;height:18px}
.pmx-lb .x{top:12px;right:14px}.pmx-lb .p{left:12px;top:50%}.pmx-lb .n{right:12px;top:50%}
@media(min-width:640px){.pmx{padding:20px}.pmx h3{font-size:30px}}
@media(max-width:1023px){.pmx .panel{grid-template-columns:1fr}.pmx .story,.pmx .gal{grid-column:1}.pmx .gallery-stage{flex:initial;aspect-ratio:1/1}.pmx .feat{height:100%}.pmx .dd-body{grid-template-columns:1fr}.pmx .items.six{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:860px){.pmx .project-tags .chips{flex:1 0 100%;margin-left:0;justify-content:flex-start}}
@media(max-width:640px){.pmx{padding:16px;border-radius:16px}.pmx h3{font-size:24px}.pmx .project-title{margin-top:18px}.pmx .kicker{font-size:11px}.pmx .body{margin-top:14px;font-size:12px}.pmx .stats{margin-top:12px}.pmx .stat{min-height:50px;padding:7px}.pmx ol.pts,.pmx .items{grid-template-columns:1fr}.pmx .gal{gap:12px;padding:10px;border-radius:20px}.pmx .gallery-stage{padding:10px 12px 48px;border-radius:18px}.pmx .gallery-nav.prev{left:6px}.pmx .gallery-nav.next{right:6px}.pmx .gallery-dots{bottom:10px;gap:5px;padding:4px 7px}.pmx .gallery-dot{width:7px;height:7px}.pmx .gallery-dot[aria-current=true]{width:18px}}
@media(prefers-reduced-motion:reduce){.pmx .panel,.pmx .feat img,.pmx-lb img{animation:none}}
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
        <img key={photo.src} alt={photo.title} src={photo.src} onClick={(event) => { event.stopPropagation(); setZoom((value) => !value); }} />
      </div>
      <div className="cap">{photo.title}{photos.length > 1 ? `  ·  ${index + 1}/${photos.length}` : ""}</div>
      <button className="x" type="button" aria-label="Close photo" onClick={onClose}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="m18 6-12 12M6 6l12 12" /></svg></button>
      {photos.length > 1 && (
        <>
          <button className="p" type="button" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); onMove(-1); }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></button>
          <button className="n" type="button" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); onMove(1); }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></button>
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

export default function PmLeadershipCard({ programId = PROGRAMS[0].id }) {
  const [shownIndex, setShownIndex] = useState(0);
  const [open, setOpen] = useState(-1);
  const galleryRef = useRef(null);
  const program = PROGRAMS.find((item) => item.id === programId) || PROGRAMS[0];
  const photos = program.photos.map(([folder, file, title, text]) => ({
    src: folder === "Business Analyst" ? BA_FILE(file) : EV(folder, file),
    title,
    text,
  }));
  const close = useCallback(() => setOpen(-1), []);
  const move = useCallback((step) => setOpen((value) => (value + step + photos.length) % photos.length), [photos.length]);
  const current = photos[Math.min(shownIndex, photos.length - 1)];
  useEffect(() => {
    if (photos.length < 2) return undefined;
    return startAutoSlideshow(galleryRef.current, () => {
      setShownIndex((index) => (index + 1) % photos.length);
    });
  }, [photos.length]);
  const links = [
    ...program.links.map((link) => ({ ...link, solid: true })),
    ...(program.id === "asah" ? ASAH_RESOURCES.map((file) => ({ href: file.href, label: file.title, tag: file.tag, external: true })) : []),
  ];

  return (
    <>
      <style>{STYLE}</style>
      <article className={`project-card-item pmx pmx-${program.id}`} data-category="team leadership" id={program.id === "digistar" ? "pm-leadership-card" : `pm-${program.id}-card`}>
        <div className={`panel panel-${program.id}`}>
          <div className="project-tags" aria-label="Project number and role">
            <span className="project-number">{program.number}</span>
            {(program.tags || [program.role]).map((tag, index) => (
              <span className="project-tag" key={tag} data-primary={index === 0 ? "true" : undefined}>{tag}</span>
            ))}
            {links.length > 0 && (
              <div className="chips" aria-label="Project links">
                {links.map((link) => (
                  <a className={`chip${link.solid ? " solid" : ""}`} key={link.href} href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                    {link.label} {link.tag ? <em>{link.tag}</em> : "→"}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="story">
            <div className="project-title">
              <h3>{program.headline}</h3>
              <p className="kicker">{program.kicker}</p>
            </div>
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
          </div>
          <div className="gal">
            <div className="gallery-head">
              <span className="gallery-label">Project · {program.tab}</span>
              <span className="gallery-count">{photos.length} visuals</span>
            </div>
            <div className="gallery-stage" ref={galleryRef}>
              <button className="feat" type="button" onClick={() => setOpen(shownIndex)} aria-label={`Enlarge ${current.title}`}>
                <img key={current.src} alt={current.title} src={current.src} />
              </button>
              {photos.length > 1 && (
                <>
                  <button className="gallery-nav prev" type="button" aria-label="Previous visual" onClick={() => setShownIndex((shownIndex - 1 + photos.length) % photos.length)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></button>
                  <button className="gallery-nav next" type="button" aria-label="Next visual" onClick={() => setShownIndex((shownIndex + 1) % photos.length)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></button>
                  <div className="gallery-dots" aria-label="Select a visual">
                    {photos.map((photo, index) => (
                      <button
                        key={photo.src}
                        className="gallery-dot"
                        type="button"
                        aria-label={`Show ${photo.title}`}
                        aria-current={index === shownIndex}
                        onClick={() => setShownIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <p className="fcap">
              <b title={current.title}>{current.title}</b>
              <span>Next · {photos[(shownIndex + 1) % photos.length].title} &nbsp; {String(shownIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
            </p>
          </div>
        </div>

        <Details program={program} key={`d-${program.id}`} />
      </article>
      {open >= 0 && <Lightbox photos={photos} index={open} onClose={close} onMove={move} />}
    </>
  );
}
