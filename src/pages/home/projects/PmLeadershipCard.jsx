import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const EV = (folder, file) => `/assets/events/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
const PM_FILE = (file) => `/assets/projects/Project%20Management/${encodeURIComponent(file)}`;
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
    stats: [],
    points: [
      "Project Planning: Organized tasks and milestones around the program timeline.",
      "Progress Monitoring: Maintained a shared tracker to keep responsibilities and deadlines visible.",
      "Team Coordination: Supported discussions, mentoring follow-ups, and pitching preparation.",
    ],
    playbookTitle: "HOW WE BROUGHT TRUSTEE FROM RESEARCH TO PITCH",
    playbook: [
      ["01 · Business Research & Analysis", "Analyzed Shopee's business context, competitors, and customer challenges to identify product opportunities."],
      ["02 · Business Strategy & Solution Planning", "Developed the Business Model Canvas and helped shape Trustee's proposed value and business direction."],
      ["03 · Team Coordination", "Led team discussions, tracked project activities, and aligned business requirements with the AI team's work."],
      ["04 · Solution Pitching", "Presented Trustee's business problem, proposed AI solution, and value proposition, contributing to our Top 3 pitching achievement."],
    ],
    links: [{ label: "Open the Trustee case study", href: "/?project=trustee-business-card", internal: true }],
    photos: [
      ["B2B DCI 2026", "Team Monitoring.png", "Team monitoring sheet", "The sheet the team used to follow the use case.", "contain"],
      ["B2B DCI 2026", "Pitching Competition.jpeg", "Pitching competition", "Presenting Trustee to the judges."],
      ["B2B DCI 2026", "Best 3 Use Case Project.webp", "Best 3 Use Case", "Announcement of the third place use case team."],
      ["B2B DCI 2026", "Role Play Consultative Selling.jpeg", "Role play", "Practising the client conversation."],
      ["B2B DCI 2026", "Discuss With Mentor.webp", "Mentor review", "Turning mentor feedback into next tasks."],
      ["B2B DCI 2026", "Pitching Practice Class.webp", "Pitch practice", "Rehearsing the pitch in class."],
      ["B2B DCI 2026", "Graduate.webp", "Graduation", "Digital Product division graduation."],
    ],
  },
  {
    id: "arkavidia",
    tab: "Arkavidia 9.0",
    role: "Product Management",
    kicker: "PRODUCT MANAGEMENT · ARKAVIDIA 9.0",
    headline: "Turning Ideas into a Clear Product Direction",
    body:
      "During a 24-hour hackathon, I helped shape AiDorse, an AI-powered endorsement platform for MSMEs. My role focused on defining the product direction, designing user flows, and aligning the team around a solution we could realistically develop and present.",
    contributionsLabel: "MY CONTRIBUTIONS",
    stats: [["24h", "Hackathon Sprint"], ["Top 10", "Finalist"]],
    points: [
      "Product Planning: Defined key features and user flows to guide design and development.",
      "Product Validation: Discussed the solution with an industry practitioner to refine its direction.",
      "Team Coordination: Aligned product discussions, development priorities, and final pitching.",
    ],
    playbookTitle: "HOW WE SHAPED AIDORSE IN 24 HOURS",
    playbook: [
      ["01 · Product Direction", "Defined AiDorse's core features and value proposition for MSMEs."],
      ["02 · User Experience Planning", "Mapped user flows and designed interfaces to guide the development process."],
      ["03 · Technical Alignment", "Collaborated with frontend, backend, and AI teammates to align product needs with technical feasibility."],
      ["04 · Validation & Pitching", "Refined the concept through industry feedback and prepared the product story for final pitching."],
    ],
    links: [],
    photos: [
      ["Arkavidia 9.0", "Userflow AiDorse.png", "AiDorse user flow", "The flow that aligned the team before building.", "contain"],
      ["Arkavidia 9.0", "pitching.jpeg", "Pitching on stage", "Presenting to the judges."],
      ["Arkavidia 9.0", "consultation to wiz.ai.webp", "Practitioner consultation", "Testing assumptions with industry.", "contain"],
      ["Arkavidia 9.0", "pitching2.jpeg", "Live demo", "Demo during the finalist pitch."],
      ["Arkavidia 9.0", "night code.png", "Late-night build", "Crunch time before the deadline."],
      ["Arkavidia 9.0", "tim profile.jpeg", "Team at Block71", "Hacking and pitching day, Bandung."],
      ["Arkavidia 9.0", "WhatsApp Image 2026-11-01 at 12.34.23.jpeg", "Between rounds", "Teamwork between rounds."],
      ["Arkavidia 9.0", "WhatsApp Image 2026-11-01 at 12.34.24 (1).jpeg", "Before the final", "Resetting before the final pitch."],
      ["Arkavidia 9.0", "flyer congratulation by Gunadarma.jpeg", "Campus recognition", "Congratulations from Gunadarma University."],
    ],
  },
  {
    id: "action",
    tab: "ACTION 2025",
    role: "Project Management & Team Leadership",
    kicker: "PROJECT MANAGEMENT & TEAM LEADERSHIP",
    headline: "Keeping the Team Aligned from Planning to Delivery",
    body:
      "As the LeadSight Capstone Team Leader, I coordinated project planning across Machine Learning, Front-End, and Back-End teams. I helped organize responsibilities, track milestones, and support collaboration to keep development aligned with our project goals.",
    contributionsLabel: "MY CONTRIBUTIONS",
    stats: [["3", "Learning Paths"], ["29", "Scheduled Activities"], ["6-Week", "Timeline"]],
    points: [
      "Project Planning: Created a shared timeline with clear tasks, responsibilities, and milestones across three learning paths.",
      "Team Coordination: Led regular discussions and progress check-ins to keep everyone aligned.",
      "Risk & Issue Management: Identified conditional tasks, such as model optimization and bug fixing, to account for development uncertainties.",
      "Integration & Delivery: Coordinated the team's preparation for integration testing, documentation, and final presentation.",
    ],
    playbookTitle: "HOW I MANAGED THE LEADSIGHT CAPSTONE",
    playbook: [
      ["01 · Project Planning", "Structured the six-week timeline across Machine Learning, Front-End, and Back-End development."],
      ["02 · Progress Monitoring", "Organized tasks, responsibilities, and milestones in a shared tracker to keep the team aligned."],
      ["03 · Risk & Issue Management", "Planned for potential delays, model optimization, and bug fixes throughout development."],
      ["04 · Integration & Delivery", "Coordinated preparation for system integration, testing, documentation, and final presentation."],
    ],
    links: [],
    photos: [
      ["ASAH 2026", "Capstone Team Meeting Progress.jpeg", "Writing the plan live", "Drafting the project plan with the team."],
      ["ASAH 2026", "Advisor Meeting.webp", "Advisor session", "Syncing direction with our advisor."],
      ["ASAH 2026", "Capstone Team Discuss.jpeg", "Design review", "Walking the team through a review."],
      ["ASAH 2026", "Pitching.jpeg", "Final pitch", "Presenting the competitor analysis."],
      ["ASAH 2026", "Distinction Graduate1.jpeg", "Graduation day", "Graduated with distinction at Asah."],
      ["ASAH 2026", "Distinction Graduate2.jpeg", "With the team", "Celebrating with the cohort."],
      ["ASAH 2026", "Distinction Graduate3.jpeg", "With mentors", "Cohort photo with mentors and the program team."],
    ],
  },
];

const ARTIFACTS = [
  { href: TIMELINE_URL, title: "Project timeline", text: "Live Google Sheet · view only", icon: "sheet", tag: "Sheet" },
  { href: PM_FILE("Example project plan.pdf"), title: "Project plan", text: "Scope, milestones and responsibilities", icon: "doc", tag: "PDF" },
];

const PLAYBOOK = [
  ["Write the scope down", "29 activities in six milestones, so “done” was never a feeling."],
  ["Show progress in one place", "A shared sheet with owners and status, so nobody had to ask."],
  ["Buffer the uncertain part", "Conditional tasks absorb tuning and bug fixes without moving the deadline."],
  ["Test the whole chain", "Rehearse the pitch, run the end-to-end test, then hand off."],
];

const STYLE = `
.pmx{--ink:#14284b;--mut:#5f7089;--line:#dbe6f5;--acc:#2a5fb4;--acc2:#7c5cff;position:relative;overflow:hidden;padding:30px;border:1px solid var(--line);border-radius:24px;color:var(--ink);background:linear-gradient(135deg,#fff 0%,#f3f7ff 55%,#f1ecff 100%);font-size:13px;line-height:1.55}
.pmx *{box-sizing:border-box}
.pmx .blob{position:absolute;border-radius:50%;filter:blur(50px);opacity:.45;pointer-events:none;animation:pmxfloat 16s ease-in-out infinite}
.pmx .b1{width:260px;height:260px;right:-80px;top:-80px;background:#b9d3ff}
.pmx .b2{width:200px;height:200px;left:-60px;bottom:40px;background:#d9ccff;animation-delay:-7s}
@keyframes pmxfloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(22px,-16px) scale(1.1)}}
.pmx>*{position:relative;z-index:1}
.pmx .head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 28px}
.pmx .eyebrow{margin:0 0 6px;font:700 11px/1 "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--acc2)}
.pmx h2{margin:0;font-size:30px;line-height:1.1;letter-spacing:-.03em;font-weight:800}
.pmx h2 span{background:linear-gradient(90deg,var(--acc),var(--acc2));-webkit-background-clip:text;background-clip:text;color:transparent}
.pmx .lead{margin:0;max-width:46ch;color:var(--mut);font-size:13.5px}
.pmx .contributions-label{margin:18px 0 8px;font:700 11px/1 "JetBrains Mono",monospace;letter-spacing:.14em;color:var(--acc2)}
.pmx .roles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:22px 0 0}
.pmx .role{position:relative;display:flex;flex-direction:column;gap:3px;padding:14px 16px;text-align:left;font:inherit;color:inherit;cursor:pointer;border:1px solid var(--line);border-radius:16px;background:#ffffffb8;transition:transform .25s,box-shadow .25s,background .25s,border-color .25s}
.pmx .role:hover{transform:translateY(-2px);box-shadow:0 10px 24px #234c731a}
.pmx .role:focus-visible{outline:3px solid #9fb3d6;outline-offset:2px}
.pmx .role small{font:700 10.5px/1.2 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--mut)}
.pmx .role b{font-size:15px;letter-spacing:-.01em}
.pmx .role i{font-style:normal;font-size:12px;color:var(--acc2);font-weight:700}
.pmx .role[aria-selected=true]{background:var(--ink);border-color:var(--ink);color:#fff;box-shadow:0 14px 30px #14284b44}
.pmx .role[aria-selected=true] small{color:#c4d3ee}.pmx .role[aria-selected=true] i{color:#c9b9ff}
.pmx .panel{margin-top:20px;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:24px;align-items:start;animation:pmxin .45s ease both}
@keyframes pmxin{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.pmx .kicker{margin:0 0 6px;font:700 10.5px/1.3 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--acc2)}
.pmx h3{margin:0 0 8px;font-size:22px;line-height:1.2;letter-spacing:-.025em}
.pmx .body{margin:0;color:#46506a;font-size:13.5px}
.pmx .stats{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}
.pmx .stat{padding:8px 14px;border-radius:14px;background:#fff;border:1px solid var(--line)}
.pmx .stat b{display:block;font-size:20px;line-height:1.1;color:var(--acc);letter-spacing:-.02em}
.pmx .stat span{font-size:11px;color:var(--mut)}
.pmx ol.pts{margin:0;padding:0;list-style:none;display:grid;gap:7px;counter-reset:p}
.pmx ol.pts li{counter-increment:p;display:flex;gap:10px;padding:9px 12px;border-left:3px solid var(--acc2);border-radius:4px 12px 12px 4px;background:#ffffffd0;font-size:12.5px}
.pmx ol.pts li::before{content:counter(p,decimal-leading-zero);flex:none;font:700 10.5px/1.9 "JetBrains Mono",monospace;color:var(--acc2)}
.pmx .cta{display:inline-flex;align-items:center;gap:6px;margin-top:12px;padding:8px 14px;border-radius:99px;background:var(--ink);color:#fff;font-weight:700;font-size:12px;text-decoration:none;transition:transform .2s}
.pmx .cta:hover{transform:translateY(-2px)}
.pmx .mos{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-auto-rows:92px;gap:10px}
.pmx .ph{position:relative;display:block;padding:0;overflow:hidden;cursor:zoom-in;border:0;border-radius:16px;background:#e8eefa;font:inherit;transition:transform .3s,box-shadow .3s}
.pmx .ph:hover{transform:translateY(-3px);box-shadow:0 14px 28px #234c7330}
.pmx .ph:focus-visible{outline:3px solid #9fb3d6;outline-offset:2px}
.pmx .ph img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s}
.pmx .ph.contain img{object-fit:contain;background:#fff}
.pmx .ph:hover img{transform:scale(1.05)}
.pmx .ph .cap{position:absolute;left:0;right:0;bottom:0;display:block;padding:22px 11px 9px;text-align:left;color:#fff;background:linear-gradient(transparent,#101626d9);opacity:0;transform:translateY(6px);transition:opacity .25s,transform .25s}
.pmx .ph:hover .cap,.pmx .ph:focus-visible .cap,.pmx .ph.t0 .cap{opacity:1;transform:none}
.pmx .ph .cap b{display:block;font-size:12px}.pmx .ph .cap em{display:block;font-style:normal;font-size:10.5px;opacity:.85;line-height:1.35}
.pmx .ph.t0{grid-column:1/4;grid-row:1/4}
.pmx .ph.t1{grid-column:4/7;grid-row:1/3}
.pmx .ph.t2{grid-column:4/6;grid-row:3/5}
.pmx .ph.t3{grid-column:6/7;grid-row:3/5}
.pmx .ph.t4{grid-column:1/3;grid-row:4/5}
.pmx .ph.t5{grid-column:3/4;grid-row:4/5}
.pmx .ph .more{position:absolute;inset:0;display:grid;place-items:center;background:#1c2438b8;color:#fff;font-weight:800;font-size:17px;letter-spacing:-.01em}
.pmx .art{margin-top:24px;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:24px;align-items:start}
.pmx .sec{margin:0 0 10px;font:700 11px/1 "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--mut)}
.pmx .files{display:grid;gap:10px}
.pmx .file{display:flex;gap:12px;align-items:center;padding:13px 15px;border:1px solid var(--line);border-radius:16px;background:#fff;color:inherit;text-decoration:none;transition:transform .25s,box-shadow .25s,border-color .25s}
.pmx .file:hover{transform:translateY(-2px);box-shadow:0 10px 24px #234c731c;border-color:#b9c9e6}
.pmx .file .ic{display:grid;place-items:center;flex:none;width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#e6efff,#efe8ff);color:var(--acc)}
.pmx .file b{display:block;font-size:13px}.pmx .file span span{display:block;font-size:11.5px;color:var(--mut)}
.pmx .file em{margin-left:auto;font:700 10px/1 "JetBrains Mono",monospace;font-style:normal;padding:4px 9px;border-radius:99px;background:#eef3fc;color:var(--acc)}
.pmx .play{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.pmx .play div{padding:13px 15px;border:1px solid var(--line);border-radius:16px;background:#ffffffc8}
.pmx .play b{display:block;font-size:13px;margin-bottom:2px}
.pmx .play span{font-size:12px;color:#4d5870}
.pmx-lb{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(10,14,26,.94);animation:pmxin .25s ease}
.pmx-lb .stage{flex:1;width:100%;min-height:0;overflow:auto;display:flex;padding:56px 16px 8px}
.pmx-lb img{margin:auto;max-width:100%;max-height:100%;object-fit:contain;border-radius:10px;cursor:zoom-in}
.pmx-lb.zoom img{max-width:none;max-height:none;width:min(220%,2400px);cursor:zoom-out}
.pmx-lb .cap{padding:8px 16px 16px;color:#e8eefc;font:600 13px/1.4 system-ui,sans-serif;text-align:center}
.pmx-lb button{position:absolute;display:grid;place-items:center;width:42px;height:42px;border:0;border-radius:50%;background:#fff;color:#111;font-size:22px;cursor:pointer}
.pmx-lb .x{top:12px;right:14px}.pmx-lb .p{left:12px;top:50%}.pmx-lb .n{right:12px;top:50%}
@media(max-width:900px){.pmx .panel,.pmx .art{grid-template-columns:1fr}.pmx .roles{grid-template-columns:1fr}}
@media(max-width:560px){.pmx{padding:18px;border-radius:20px}.pmx h2{font-size:24px}.pmx .play{grid-template-columns:1fr}
.pmx .mos{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:110px}
.pmx .ph.t0{grid-column:1/3;grid-row:1/3}.pmx .ph.t1,.pmx .ph.t2,.pmx .ph.t3,.pmx .ph.t4,.pmx .ph.t5{grid-column:auto;grid-row:auto}}
@media(prefers-reduced-motion:reduce){.pmx .blob,.pmx .panel{animation:none}}
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

export default function PmLeadershipCard() {
  const [active, setActive] = useState(PROGRAMS[0].id);
  const [open, setOpen] = useState(-1);
  const program = PROGRAMS.find((item) => item.id === active);
  const photos = program.photos.map(([folder, file, title, text, fit]) => ({ src: EV(folder, file), title, text, fit }));
  const close = useCallback(() => setOpen(-1), []);
  const move = useCallback((step) => setOpen((value) => (value + step + photos.length) % photos.length), [photos.length]);
  const shown = photos.slice(0, 6);
  const extra = photos.length - shown.length;

  return (
    <>
      <style>{STYLE}</style>
      <article className="project-card-item pmx" data-category="team leadership" id="pm-leadership-card">
        <span className="blob b1" />
        <span className="blob b2" />
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
            <button key={item.id} type="button" role="tab" className="role" aria-selected={item.id === active} onClick={() => setActive(item.id)}>
              <small>{item.tab}</small>
              <b>{item.role}</b>
              <i>{item.kicker}</i>
            </button>
          ))}
        </div>

        <div className="panel" key={program.id} role="tabpanel">
          <div>
            <p className="kicker">{program.role}</p>
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
            {program.contributionsLabel && <p className="contributions-label">{program.contributionsLabel}</p>}
            <ol className="pts">
              {program.points.map((point) => {
                const separator = point.indexOf(": ");
                return (
                  <li key={point}>
                    {separator > 0 ? <><b>{point.slice(0, separator + 1)}</b>{point.slice(separator + 1)}</> : point}
                  </li>
                );
              })}
            </ol>
            {program.links.map((link) => (
              <a className="cta" key={link.href} href={link.href}>
                {link.label} →
              </a>
            ))}
          </div>
          <div className="mos">
            {shown.map((photo, index) => (
              <button className={`ph t${index}${photo.fit === "contain" ? " contain" : ""}`} type="button" key={photo.src} onClick={() => setOpen(index)} aria-label={`Enlarge ${photo.title}`}>
                <img alt={photo.title} loading="lazy" src={photo.src} />
                <span className="cap">
                  <b>{photo.title}</b>
                  <em>{photo.text}</em>
                </span>
                {index === shown.length - 1 && extra > 0 && <span className="more">+{extra} more</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="art">
          <div>
            <p className="sec">Planning artifacts</p>
            <div className="files">
              {ARTIFACTS.map((file) => (
                <a className="file" key={file.href} href={file.href} target="_blank" rel="noreferrer">
                  <span className="ic">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {ICON[file.icon]}
                    </svg>
                  </span>
                  <span>
                    <b>{file.title}</b>
                    <span>{file.text}</span>
                  </span>
                  <em>{file.tag}</em>
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="sec">{program.playbookTitle || "The playbook behind all three"}</p>
            <div className="play">
              {(program.playbook || PLAYBOOK).map(([title, text]) => (
                <div key={title}>
                  <b>{title}</b>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
      {open >= 0 && <Lightbox photos={photos} index={open} onClose={close} onMove={move} />}
    </>
  );
}
