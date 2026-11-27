import VideoHighlight from "@/components/VideoHighlight.jsx";
import { Prsi, baseCss } from "./AnalysisKit.jsx";

const LEADSIGHT_VIDEO_ID = "1YcuRaOq3cR49pWVPmXh29hRSJCqcGhOX";
const LEADSIGHT_VIDEO_POSTER = "/assets/experience/ASAH%202025/Leadsight%20Profile.png";

/* ---- Numbers come from the ASAH capstone deck (A25-CS086). Edit here to change the card. ---- */

/* Problem – Role – Solution – Impact. Keep each column short; numbers go in `nums`. */
const PRSI = [
  {
    key: "problem", letter: "P", label: "Problem",
    head: "Sales teams call broad lists with no clear priority.",
    points: [
      "Outbound banking calls spread effort across prospects without ranking them.",
      "Reviewing leads by hand takes time and gives little context.",
    ],
    nums: [{ n: "3×", l: "Up to 3× better prospect identification with ML (Cowan et al., 2023; third-party study)" }],
  },
  {
    key: "role", letter: "R", label: "Role",
    head: "Project Manager and Front-End Contributor.",
    points: [
      "Planned the capstone across ML, front-end and back-end workstreams.",
      "Built front-end dashboard views as a contributor.",
      "Framed the business case: users, competitors and rollout metrics.",
    ],
    nums: [{ n: "6", l: "weeks of delivery planned" }],
  },
  {
    key: "solution", letter: "S", label: "Solution",
    head: "A dashboard that scores leads and shows why.",
    points: [
      "Predictive lead scoring: priority vs. non-priority customers.",
      "Customer segmentation and campaign analytics in one view.",
      "AI-assisted insights for more relevant outreach.",
    ],
    nums: [{ n: "3", l: "core capabilities" }, { n: "6", l: "existing tools benchmarked" }],
  },
  {
    key: "impact", letter: "I", label: "Impact",
    head: "Works as a prototype. Business impact is not measured.",
    points: ["Tests show the features work, not that sales improve."],
    nums: [
      { n: "16/16", l: "black-box tests passed" },
      { n: "87.5%", l: "accuracy (ROC-AUC 77%)" },
      { n: "38%", l: "priority-class recall, the weak spot", warn: true },
      { n: "0.29 s", l: "prediction time" },
    ],
    note: "Capstone concept on a public dataset. Never launched in a bank.",
  },
];

/* Positions are percentages inside the plot: x = left → right (simple/niche → enterprise/complex), y = top → bottom (predictive → rule-based). */
const MAP_POINTS = [
  { name: "LeadSight", x: 23, y: 15, self: true },
  { name: "Freshworks", x: 31, y: 41 },
  { name: "Salesforce", x: 58, y: 43 },
  { name: "Dynamics 365", x: 73, y: 30 },
  { name: "Zoho", x: 88, y: 43 },
  { name: "Google Sheets", x: 29, y: 77 },
  { name: "HubSpot", x: 75, y: 77 },
];

const KPIS = ["User adoption", "Operational efficiency", "Scoring performance", "User satisfaction", "Business impact"];

const ROLLOUT = [
  { when: "Weeks 1–2", what: "Soft launch" },
  { when: "Weeks 3–4", what: "Iterate" },
  { when: "Month 2", what: "Internal pilot" },
  { when: "Month 3", what: "Wider deployment" },
  { when: "Month 4", what: "Improve" },
];

/* Budget share by category (IDR 22M in total; the four groups are my own, for readability). */
const BUDGET_GROUPS = [
  { g: 1, label: "Infrastructure & hosting", pct: 57 },
  { g: 2, label: "Tools", pct: 20 },
  { g: 3, label: "Quality & enablement", pct: 14 },
  { g: 4, label: "Contingency", pct: 9 },
];

const S = "#leadsight-business-analysis-card.lba";
const LS_THEME = { acc: "#4f46e5", acc2: "#f07838", glow1: "rgba(79,70,229,.5)", glow2: "rgba(240,120,56,.34)", soft: "#f4f5ff", strong: "#4338ca", roleTint: "#ffb98a", base: "linear-gradient(135deg,#0d1735 0%,#16244f 55%,#1d2f6b 100%)" };
const EXTRA_CSS = baseCss(S, "lba", LS_THEME) + `
${S} .lba-roll{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:18px}
${S} .lba-steps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}
${S} .lba-steps li{min-width:0;padding-top:14px;border-top:3px solid var(--acc)}
${S} .lba-steps b{display:block;color:#70798a;font:600 11px/1.35 "Plus Jakarta Sans",sans-serif}
${S} .lba-steps span{display:block;margin-top:4px;color:var(--ink);font-size:12px;font-weight:700;line-height:1.35}
${S} .lba-pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
${S} .lba-pills em{width:100%;color:#70798a;font:600 11px/1.4 "Plus Jakarta Sans",sans-serif;font-style:normal}
${S} .lba-pills span{display:inline-flex;padding:5px 10px;border:1px solid #e2e5eb;border-radius:9px;background:#fff;color:var(--ink);font-size:11px;font-weight:600}
${S} .lba-budget-top{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px;margin-bottom:12px}
${S} .lba-budget-top b{color:var(--acc);font-size:26px;font-weight:800;letter-spacing:-.04em;line-height:1}
${S} .lba-budget-top span{color:var(--mut);font-size:11px}
${S} .lba-stack{display:flex;height:15px;overflow:hidden;border-radius:5px;background:#e8eefa}
${S} .lba-stack i{display:block;height:100%}
${S} .lba-g1{background:#4338ca}${S} .lba-g2{background:#818cf8}${S} .lba-g3{background:#c7d2fe}${S} .lba-g4{background:#9ca3af}
${S} .lba-legend{display:flex;flex-direction:column;gap:7px;margin:14px 0 0;color:#556176;font-size:11px}
${S} .lba-legend span{display:flex;align-items:center;gap:7px}
${S} .lba-legend i{flex:none;width:10px;height:10px;border-radius:3px}
${S} .lba-legend b{margin-left:auto;color:var(--ink);font-weight:800}
${S} .lba-box{padding:22px 24px;border:1px solid #e2e5eb;border-radius:16px;background:#fff;box-shadow:none}
${S} .lba-box{padding:18px 20px}
${S} .lba-box h3{margin:0 0 12px;color:var(--ink);font-size:15px;font-weight:700}
${S} .lba-note{margin-top:8px;color:#7a8799;font-size:10px;line-height:1.7}
${S} .lba-map{margin:0 0 12px}
${S} .lba-map-grid{display:grid;grid-template-columns:minmax(80px,.55fr) minmax(0,3fr) minmax(80px,.55fr);grid-template-areas:". top ." "left plot right" ". bottom .";gap:8px 12px;align-items:center}
${S} .lba-ax{text-align:center;color:var(--acc);font-style:italic}
${S} .lba-ax b{display:block;font-size:11.5px;font-weight:800;line-height:1.3}
${S} .lba-ax span{display:block;font-size:10.5px;font-weight:600;opacity:.85}
${S} .lba-ax-top{grid-area:top}${S} .lba-ax-left{grid-area:left}${S} .lba-ax-right{grid-area:right}${S} .lba-ax-bottom{grid-area:bottom}
${S} .lba-plot{grid-area:plot;position:relative;aspect-ratio:2/1;min-height:300px;overflow:hidden;border:1px solid var(--line);border-radius:16px;background-color:#fbfcff;background-image:radial-gradient(rgba(79,70,229,.10) 1px,transparent 1px);background-size:20px 20px}
${S} .lba-plot-hl{position:absolute;left:0;top:0;width:50%;height:50%;background:linear-gradient(135deg,rgba(79,70,229,.13),rgba(79,70,229,.02))}
${S} .lba-axis-h,${S} .lba-axis-v{position:absolute;background:var(--acc);opacity:.8}
${S} .lba-axis-h{left:12px;right:12px;top:50%;height:2px;margin-top:-1px}
${S} .lba-axis-v{top:12px;bottom:12px;left:50%;width:2px;margin-left:-1px}
${S} .lba-axis-h::before,${S} .lba-axis-h::after,${S} .lba-axis-v::before,${S} .lba-axis-v::after{content:"";position:absolute;border:5px solid transparent}
${S} .lba-axis-h::before{left:-3px;top:-4px;border-left:0;border-right:8px solid var(--acc)}
${S} .lba-axis-h::after{right:-3px;top:-4px;border-right:0;border-left:8px solid var(--acc)}
${S} .lba-axis-v::before{top:-3px;left:-4px;border-top:0;border-bottom:8px solid var(--acc)}
${S} .lba-axis-v::after{bottom:-3px;left:-4px;border-bottom:0;border-top:8px solid var(--acc)}
${S} .lba-pt{position:absolute;z-index:1;transform:translate(-50%,-50%);display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border:1px solid var(--line);border-radius:99px;background:#fff;box-shadow:0 6px 16px rgba(20,32,63,.09);color:var(--ink);font-size:11px;font-weight:700;white-space:nowrap}
${S} .lba-pt i{width:8px;height:8px;border-radius:50%;background:#9aa6c4}
${S} .lba-pt-self{z-index:2;padding:7px 14px;border-color:var(--acc);background:var(--acc);color:#fff;font-size:12.5px;font-weight:800;box-shadow:0 10px 24px rgba(79,70,229,.38)}
${S} .lba-pt-self i{background:#ffb98a}
${S} .lba-pt-self::after{content:"";position:absolute;inset:-5px;border:2px solid rgba(79,70,229,.35);border-radius:99px;animation:lba-ring 2.4s ease-out infinite}
${S} .lba-map-cap{margin:8px 2px 0;color:#7a8799;font-size:10.5px}
@keyframes lba-ring{0%{transform:scale(.92);opacity:.9}100%{transform:scale(1.18);opacity:0}}
@media(max-width:900px){${S} .lba-roll{grid-template-columns:1fr}}
@media(max-width:640px){
${S} .lba-steps{grid-template-columns:1fr;gap:10px}
${S} .lba-steps li{padding:0 0 0 18px;border-top:0;border-left:3px solid var(--acc)}
${S} .lba-steps li{padding:0 0 0 14px;border-top:0;border-left:3px solid var(--acc)}
${S} .lba-map-grid{grid-template-columns:1fr 1fr;grid-template-areas:"top top" "plot plot" "left right" "bottom bottom"}
${S} .lba-plot{aspect-ratio:auto;height:340px;min-height:0}
${S} .lba-pt{padding:4px 9px;font-size:10.5px}
${S} .lba-pt-self{padding:6px 11px;font-size:11.5px}
}
@media(prefers-reduced-motion:reduce){${S} .lba-pt-self::after{animation:none;opacity:.5}}
`;

export default function LeadsightBusinessAnalysisCard() {
  return (
    <>
      <style>{EXTRA_CSS}</style>
      <article className="project-card-item lba" id="leadsight-business-analysis-card">
        <div className="lba-top">
          <header className="lba-head">
            <div className="lba-hero-copy">
              <div className="lba-chips" aria-label="Project categories">
                <span>Product Analysis</span>
                <span>ASAH Capstone</span>
                <span className="lba-chip-warn">Concept · Not launched</span>
              </div>
              <h2 className="lba-title">LeadSight</h2>
              <p className="lba-summary">
                How a banking sales team could rank leads with machine learning: the problem, the
                competitors, and how success would be measured.
              </p>
              <div className="lba-role">
                <b>My role</b>
                <span>Project Manager</span>
                <span>Front-End Contributor</span>
              </div>
            </div>
            <div className="lba-video-highlight">
              <VideoHighlight
                driveId={LEADSIGHT_VIDEO_ID}
                poster={LEADSIGHT_VIDEO_POSTER}
                label="LeadSight video"
                title="Capstone presentation"
                accent="#2a5fb4"
              />
            </div>
          </header>
          <div className="lba-stats" aria-label="Project summary">
            <div className="lba-stat"><b>3</b><span>Core capabilities</span></div>
            <div className="lba-stat"><b>16/16</b><span>Functional tests passed</span></div>
            <div className="lba-stat"><b>4 months</b><span>Proposed rollout</span></div>
          </div>
        </div>

        <div className="lba-body">
          <Prsi items={PRSI} />

          <section className="lba-sec">
            <p className="lba-kicker">Market</p>
            <h2 className="lba-h">Competitive positioning</h2>
            <figure className="lba-map" role="group" aria-label="Competitor positioning map">
              <div className="lba-map-grid">
                <div className="lba-ax lba-ax-top"><b>Predictive ML &amp; bank-focused</b><span>(many features)</span></div>
                <div className="lba-ax lba-ax-left"><b>Simple &amp; niche focus</b><span>(specific conditions)</span></div>
                <div className="lba-plot">
                  <div className="lba-plot-hl" />
                  <div className="lba-axis-h" />
                  <div className="lba-axis-v" />
                  {MAP_POINTS.map((p) => (
                    <span className={`lba-pt${p.self ? " lba-pt-self" : ""}`} key={p.name} style={{ left: `${p.x}%`, top: `${p.y}%` }}><i />{p.name}</span>
                  ))}
                </div>
                <div className="lba-ax lba-ax-right"><b>Enterprise &amp; complex</b><span>(dynamic conditions)</span></div>
                <div className="lba-ax lba-ax-bottom"><b>Rule-based &amp; general</b><span>(few products)</span></div>
              </div>
              <figcaption className="lba-map-cap">Placement is the team&apos;s qualitative judgment in the capstone deck, not a formal market study.</figcaption>
            </figure>
            <div className="lba-insight"><strong>Reading:</strong> LeadSight sits in the predictive, niche corner: one banking use case, against broader enterprise suites.</div>
          </section>

          <section className="lba-sec">
            <p className="lba-kicker">Plan</p>
            <h2 className="lba-h">Proposed rollout and budget</h2>
            <div className="lba-roll">
              <div className="lba-box">
                <h3>Proposed rollout roadmap</h3>
                <ol className="lba-steps">
                  {ROLLOUT.map((r) => (
                    <li key={r.when}><b>{r.when}</b><span>{r.what}</span></li>
                  ))}
                </ol>
                <div className="lba-pills">
                  <em>Five KPIs to track</em>
                  {KPIS.map((k) => <span key={k}>{k}</span>)}
                </div>
              </div>
              <div className="lba-box">
                <h3>Where the budget would go</h3>
                <div className="lba-budget-top"><b>IDR 22M</b><span>proposed, 9 line items</span></div>
                <div className="lba-stack" role="img" aria-label="Budget split by category">
                  {BUDGET_GROUPS.map((b) => (<i className={`lba-g${b.g}`} key={b.g} style={{ width: `${b.pct}%` }} />))}
                </div>
                <div className="lba-legend">
                  {BUDGET_GROUPS.map((b) => (<span key={b.g}><i className={`lba-g${b.g}`} />{b.label}<b>{`${b.pct}%`}</b></span>))}
                </div>
                <p className="lba-note">Line items are from the deck. Grouping into four categories is my own, for readability.</p>
              </div>
            </div>
            <p className="lba-note">Rollout, budget and KPIs are capstone proposals, not observed results.</p>
          </section>
        </div>
      </article>
    </>
  );
}
