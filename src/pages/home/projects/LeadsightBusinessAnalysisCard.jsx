import { useState } from "react";
import VideoHighlight from "@/components/VideoHighlight.jsx";

const LEADSIGHT_VIDEO_ID = "1YcuRaOq3cR49pWVPmXh29hRSJCqcGhOX";
const LEADSIGHT_VIDEO_POSTER = "/assets/experience/ASAH%202025/Leadsight%20Profile.png";

const detailTabs = [
  { id: "problem", num: "01", label: "Business Problem" },
  { id: "market", num: "02", label: "Market & Users" },
  { id: "strategy", num: "03", label: "Product Strategy" },
  { id: "rollout", num: "04", label: "Success Metrics" },
];

export default function LeadsightBusinessAnalysisCard() {
  const [activeTab, setActiveTab] = useState(detailTabs[0].id);

  return (
    <>
      <style>{`
.lba{--ink:#14284b;--mut:#5f7089;--line:#dbe6f5;--acc:#2a5fb4;--acc2:#7c5cff;position:relative;overflow:hidden;padding:clamp(10px,1.6vw,16px);border:1px solid #dde3f2;border-radius:28px;color:var(--ink);background:#fff;font-size:12.5px;line-height:1.5;box-shadow:0 18px 50px rgba(20,32,63,.08)}
.lba *{box-sizing:border-box}
#leadsight-business-analysis-card.lba h2,#leadsight-business-analysis-card.lba h3,#leadsight-business-analysis-card.lba p{margin:0}
#leadsight-business-analysis-card.lba .lba-head{position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.04fr);gap:clamp(16px,3vw,32px);align-items:center;padding:clamp(16px,2.4vw,24px) clamp(16px,2.4vw,26px) clamp(34px,3.6vw,44px);border-radius:18px;color:#fff;background:radial-gradient(760px 380px at 92% -12%,rgba(42,95,180,.42),transparent 62%),radial-gradient(620px 360px at -8% 112%,rgba(124,92,255,.44),transparent 62%),linear-gradient(135deg,#0d1735 0%,#16244f 55%,#1d2f6b 100%)}
#leadsight-business-analysis-card.lba .lba-eyebrow{margin-bottom:8px;font:800 10px/1.3 "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:#ffb98a}
#leadsight-business-analysis-card.lba .lba-title{font-size:clamp(30px,4vw,42px)!important;line-height:1.02;letter-spacing:-.05em;font-weight:800;color:#fff}
#leadsight-business-analysis-card.lba .lba-title span{color:#ffc79f}
#leadsight-business-analysis-card.lba .lba-summary{margin:10px 0;color:rgba(228,234,255,.84);font-size:12.5px;line-height:1.65;max-width:52ch}
#leadsight-business-analysis-card.lba .lba-role{display:inline-flex;padding:8px 12px;border:1px solid rgba(255,255,255,.14);border-radius:12px;background:rgba(255,255,255,.07);color:#eef2ff;font:700 10px/1.4 "JetBrains Mono",monospace;letter-spacing:.05em;text-transform:uppercase}
#leadsight-business-analysis-card.lba .lba-stats{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:-34px clamp(10px,2.4vw,22px) 0}
#leadsight-business-analysis-card.lba .lba-stat{display:flex;align-items:center;gap:9px;min-width:0;padding:8px 12px;border:1px solid var(--line);border-radius:12px;background:#fff;box-shadow:0 10px 22px rgba(20,32,63,.08)}
#leadsight-business-analysis-card.lba .lba-stat b{flex:none;color:var(--ink);font-size:19px;line-height:1.1;font-weight:800;letter-spacing:-.04em}
#leadsight-business-analysis-card.lba .lba-stat span{color:#4a5b78;font-size:10.5px;font-weight:700;line-height:1.3}
#leadsight-business-analysis-card.lba .lba-photo{margin:0}
#leadsight-business-analysis-card.lba .lba-photo img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);border-radius:14px;background:#e8eefa}
#leadsight-business-analysis-card.lba .lba-photo figcaption{margin:6px 2px 0;font-size:10.5px;color:var(--mut)}
#leadsight-business-analysis-card.lba .lba-video-highlight{min-width:0;border:1px solid rgba(255,255,255,.2);border-radius:14px;overflow:hidden;background:#0a1230;box-shadow:0 24px 44px -12px rgba(3,8,28,.6)}
#leadsight-business-analysis-card.lba .lba-video-highlight .video-highlight{display:block;margin:0;padding:0;border-radius:0;background:transparent;box-shadow:none}
#leadsight-business-analysis-card.lba .lba-video-highlight .video-highlight-meta{display:none}
#leadsight-business-analysis-card.lba .lba-video-highlight .video-highlight-frame{border-radius:0;box-shadow:none}
#leadsight-business-analysis-card.lba .lba-video-highlight .video-highlight-poster img{opacity:.82}
#leadsight-business-analysis-card.lba .lba-tabs{display:flex;gap:6px;margin:14px 0 0;padding:4px;border:1px solid var(--line);border-radius:14px;background:#ffffffb8}
#leadsight-business-analysis-card.lba .lba-tab{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;padding:8px 12px;text-align:left;font:inherit;color:inherit;cursor:pointer;border:0;border-radius:10px;background:transparent;transition:background .2s}
#leadsight-business-analysis-card.lba .lba-tab:hover{background:#eef3fc}
#leadsight-business-analysis-card.lba .lba-tab:focus-visible{outline:3px solid #9fb3d6;outline-offset:1px}
#leadsight-business-analysis-card.lba .lba-tab small{font:700 9.5px/1.2 "JetBrains Mono",monospace;letter-spacing:.1em;color:var(--mut)}
#leadsight-business-analysis-card.lba .lba-tab b{font-size:13px;letter-spacing:-.01em}
#leadsight-business-analysis-card.lba .lba-tab[aria-selected=true]{background:var(--ink);color:#fff;box-shadow:0 8px 18px #14284b33}
#leadsight-business-analysis-card.lba .lba-tab[aria-selected=true] small{color:#c4d3ee}
#leadsight-business-analysis-card.lba .lba-panel{margin-top:14px;animation:lba-fade .3s ease both}
#leadsight-business-analysis-card.lba .lba-kicker{margin-bottom:4px;font:700 10px/1.3 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--acc2)}
#leadsight-business-analysis-card.lba .lba-panel-title{font-size:19px!important;line-height:1.2;letter-spacing:-.02em;margin-bottom:6px}
#leadsight-business-analysis-card.lba .lba-sub{margin-bottom:10px;color:#46506a;font-size:12.5px}
#leadsight-business-analysis-card.lba .lba-value-title{margin:14px 0 8px!important;font-size:14px!important;letter-spacing:-.01em}
#leadsight-business-analysis-card.lba .lba-grid3,#leadsight-business-analysis-card.lba .lba-persona{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
#leadsight-business-analysis-card.lba .lba-card{padding:11px 13px;border:1px solid var(--line);border-radius:12px;background:#ffffffd6}
#leadsight-business-analysis-card.lba .lba-card h3{margin:6px 0 3px;font-size:12.5px;color:var(--ink)}
#leadsight-business-analysis-card.lba .lba-card p{color:var(--mut);font-size:11px;line-height:1.45}
#leadsight-business-analysis-card.lba .lba-glyph{display:grid;width:28px;height:28px;place-items:center;border-radius:9px;background:#eef3fc;color:var(--acc);font-size:14px}
#leadsight-business-analysis-card.lba .lba-label{color:var(--acc2);font:700 9.5px/1.3 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
#leadsight-business-analysis-card.lba .lba-persona .lba-card{border-top:3px solid var(--acc2)}
#leadsight-business-analysis-card.lba .lba-insight{margin-top:10px;padding:8px 12px;border-left:3px solid var(--acc2);border-radius:0 10px 10px 0;background:#f1edff;color:#45526c;font-size:11.5px;line-height:1.5}
#leadsight-business-analysis-card.lba .lba-insight strong{color:#34236b}
#leadsight-business-analysis-card.lba .lba-flow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
#leadsight-business-analysis-card.lba .lba-flow-step{padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:#ffffffd6}
#leadsight-business-analysis-card.lba .lba-stepnum{color:var(--acc2);font:700 9.5px/1.3 "JetBrains Mono",monospace;letter-spacing:.08em}
#leadsight-business-analysis-card.lba .lba-flow-step strong{display:block;margin:3px 0 2px;font-size:12px}
#leadsight-business-analysis-card.lba .lba-flow-step p{color:var(--mut);font-size:10.5px;line-height:1.4}
#leadsight-business-analysis-card.lba .lba-note{margin-top:10px;color:#7a8799;font-size:10.5px}
#leadsight-business-analysis-card.lba .lba-matrix{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
#leadsight-business-analysis-card.lba .lba-quad{padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:#ffffffd6}
#leadsight-business-analysis-card.lba .lba-qtag{color:var(--acc2);font:700 9.5px/1.3 "JetBrains Mono",monospace;letter-spacing:.08em}
#leadsight-business-analysis-card.lba .lba-quad h3{margin:3px 0 2px;font-size:12.5px}
#leadsight-business-analysis-card.lba .lba-quad p{color:var(--mut);font-size:11px;line-height:1.45}
#leadsight-business-analysis-card.lba .lba-metricrow,#leadsight-business-analysis-card.lba .lba-phase{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
#leadsight-business-analysis-card.lba .lba-metric-card{padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:#ffffffd6}
#leadsight-business-analysis-card.lba .lba-tag{color:var(--acc2);font:700 9.5px/1.3 "JetBrains Mono",monospace}
#leadsight-business-analysis-card.lba .lba-metric-card strong{display:block;margin:3px 0 2px;font-size:12px}
#leadsight-business-analysis-card.lba .lba-metric-card p{color:var(--mut);font-size:10.5px;line-height:1.4}
#leadsight-business-analysis-card.lba .lba-phase{margin:0}
#leadsight-business-analysis-card.lba .lba-phase .lba-card{border-top:3px solid var(--acc2)}
#leadsight-business-analysis-card.lba .lba-phase h3{font-size:12px}
#leadsight-business-analysis-card.lba .lba-impact{display:grid;grid-template-columns:1.05fr .95fr;gap:8px;margin-top:10px}
#leadsight-business-analysis-card.lba .lba-impact h3{font-size:14px;margin:2px 0 6px}
#leadsight-business-analysis-card.lba .lba-barrow{display:flex;align-items:center;gap:10px;margin:7px 0}
#leadsight-business-analysis-card.lba .lba-barlabel{width:128px;color:var(--mut);font-size:11px}
#leadsight-business-analysis-card.lba .lba-bartrack{height:10px;flex:1;overflow:hidden;border-radius:8px;background:#e8eefa}
#leadsight-business-analysis-card.lba .lba-barfill{height:100%;border-radius:8px;background:linear-gradient(90deg,#7c9cf0,var(--acc))}
#leadsight-business-analysis-card.lba .lba-barfill.coral{background:linear-gradient(90deg,#b9a2ff,var(--acc2))}
#leadsight-business-analysis-card.lba .lba-pct{width:52px;color:var(--ink);font-size:12px;font-weight:800;text-align:right}
#leadsight-business-analysis-card.lba .lba-impact-copy{color:var(--mut);font-size:11px;line-height:1.5}
#leadsight-business-analysis-card.lba .lba-warning{margin-top:10px;padding:8px 12px;border-left:3px solid #d9a441;border-radius:0 10px 10px 0;background:#fff8e8;color:#6d5a2a;font-size:11px;line-height:1.5}
#leadsight-business-analysis-card.lba .lba-source{margin-top:12px;padding-top:9px;border-top:1px solid var(--line);color:#7a8799;font-size:10px}
@keyframes lba-fade{from{opacity:.4;transform:translateY(4px)}to{opacity:1;transform:none}}
@media(max-width:900px){#leadsight-business-analysis-card.lba .lba-head{grid-template-columns:1fr}#leadsight-business-analysis-card.lba .lba-flow,#leadsight-business-analysis-card.lba .lba-metricrow,#leadsight-business-analysis-card.lba .lba-phase{grid-template-columns:repeat(2,minmax(0,1fr))}#leadsight-business-analysis-card.lba .lba-impact{grid-template-columns:1fr}}
@media(max-width:900px){#leadsight-business-analysis-card.lba .lba-stats{margin-top:-34px}}
@media(max-width:640px){.lba{padding:14px;border-radius:22px}#leadsight-business-analysis-card.lba .lba-title{font-size:28px!important}#leadsight-business-analysis-card.lba .lba-stats{grid-template-columns:1fr;margin:-34px 8px 0}#leadsight-business-analysis-card.lba .lba-tabs{flex-direction:column}#leadsight-business-analysis-card.lba .lba-grid3,#leadsight-business-analysis-card.lba .lba-persona,#leadsight-business-analysis-card.lba .lba-matrix,#leadsight-business-analysis-card.lba .lba-flow,#leadsight-business-analysis-card.lba .lba-metricrow,#leadsight-business-analysis-card.lba .lba-phase{grid-template-columns:1fr}#leadsight-business-analysis-card.lba .lba-barlabel{width:96px}}
@media(prefers-reduced-motion:reduce){#leadsight-business-analysis-card.lba .lba-panel{animation:none}}
#leadsight-business-analysis-card.lba{--ink:#14203f;--mut:#5d6b86;--line:#e2e8f4;--acc:#4f46e5;--acc2:#f07838;padding:clamp(16px,2.6vw,32px)}
#leadsight-business-analysis-card.lba .lba-head{padding:clamp(24px,3.4vw,40px) clamp(20px,3.2vw,40px);background:radial-gradient(760px 380px at 92% -12%,rgba(240,120,56,.34),transparent 62%),radial-gradient(620px 360px at -8% 112%,rgba(79,70,229,.5),transparent 62%),linear-gradient(135deg,#0d1735 0%,#16244f 55%,#1d2f6b 100%)}
#leadsight-business-analysis-card.lba .lba-head::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px);background-size:22px 22px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 70%);mask-image:linear-gradient(90deg,transparent,#000 70%);pointer-events:none}
#leadsight-business-analysis-card.lba .lba-hero-copy,#leadsight-business-analysis-card.lba .lba-video-highlight{position:relative;z-index:1}
#leadsight-business-analysis-card.lba .lba-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px}
#leadsight-business-analysis-card.lba .lba-chips span{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.09);color:#dfe6ff;border-radius:99px;padding:3px 10px;font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
#leadsight-business-analysis-card.lba .lba-chips .lba-chip-warn{background:rgba(255,184,107,.14);border-color:rgba(255,184,107,.4);color:#ffd2a1}
#leadsight-business-analysis-card.lba .lba-title{font-size:clamp(34px,4.4vw,46px)!important;line-height:1!important;letter-spacing:-.05em}
#leadsight-business-analysis-card.lba .lba-title span{color:#ffc79f}
#leadsight-business-analysis-card.lba .lba-summary{margin:10px 0 0;line-height:1.75}
#leadsight-business-analysis-card.lba .lba-role{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;padding:10px 16px;margin-top:16px;border-radius:12px;background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.14);max-width:max-content}
#leadsight-business-analysis-card.lba .lba-role b{color:#ffb98a;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
#leadsight-business-analysis-card.lba .lba-role span{color:#eef2ff;font-size:11px;font-weight:700}
#leadsight-business-analysis-card.lba .lba-role span+span::before{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.4);margin-right:12px;vertical-align:middle}
#leadsight-business-analysis-card.lba .lba-stats{gap:14px}
#leadsight-business-analysis-card.lba .lba-stat{padding:14px 18px;gap:12px;box-shadow:0 6px 18px rgba(20,32,63,.06)}
#leadsight-business-analysis-card.lba .lba-stat b{color:#0f1a38}
#leadsight-business-analysis-card.lba .lba-stat:nth-child(2) b{color:#f07838}
#leadsight-business-analysis-card.lba .lba-tabs{gap:8px;padding:6px;border-color:var(--line);border-radius:16px;background:#f6f8fd}
#leadsight-business-analysis-card.lba .lba-tab{padding:12px 14px;border-radius:12px}
#leadsight-business-analysis-card.lba .lba-tab:hover{background:#f4f5ff}
#leadsight-business-analysis-card.lba .lba-tab[aria-selected=true]{background:#16244f;color:#fff;border:1px solid #2b3e8c;box-shadow:0 8px 18px rgba(22,36,79,.24)}
#leadsight-business-analysis-card.lba .lba-tab[aria-selected=true] small{color:#c4d3ee}
#leadsight-business-analysis-card.lba .lba-panel{margin-top:20px}
#leadsight-business-analysis-card.lba .lba-kicker,#leadsight-business-analysis-card.lba .lba-label,#leadsight-business-analysis-card.lba .lba-qtag,#leadsight-business-analysis-card.lba .lba-tag,#leadsight-business-analysis-card.lba .lba-stepnum{color:var(--acc)}
#leadsight-business-analysis-card.lba .lba-panel-title{color:#0f1a38;font-weight:800}
#leadsight-business-analysis-card.lba .lba-card,#leadsight-business-analysis-card.lba .lba-flow-step,#leadsight-business-analysis-card.lba .lba-quad,#leadsight-business-analysis-card.lba .lba-metric-card{border-color:var(--line);border-radius:16px;background:#fff;box-shadow:0 8px 22px rgba(20,32,63,.04)}
#leadsight-business-analysis-card.lba .lba-glyph{background:#f4f5ff;color:#4338ca}
#leadsight-business-analysis-card.lba .lba-persona .lba-card,#leadsight-business-analysis-card.lba .lba-phase .lba-card{border-top:3px solid var(--acc)}
#leadsight-business-analysis-card.lba .lba-insight{border-left-color:var(--acc);border-radius:0 12px 12px 0;background:#f4f5ff}
#leadsight-business-analysis-card.lba .lba-insight strong{color:#4338ca}
#leadsight-business-analysis-card.lba .lba-bartrack{background:#e8eefa}
#leadsight-business-analysis-card.lba .lba-barfill{background:linear-gradient(90deg,#8b83f5,var(--acc))}
#leadsight-business-analysis-card.lba .lba-barfill.coral{background:linear-gradient(90deg,#ffb98a,#f07838)}
#leadsight-business-analysis-card.lba .lba-warning{border-left-color:#f07838}
@media(max-width:900px){#leadsight-business-analysis-card.lba .lba-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){#leadsight-business-analysis-card.lba{padding:14px;border-radius:22px}#leadsight-business-analysis-card.lba .lba-head{padding:22px 18px}#leadsight-business-analysis-card.lba .lba-stats{grid-template-columns:1fr;gap:10px;margin:-34px 8px 0}#leadsight-business-analysis-card.lba .lba-stat{padding:12px 14px}#leadsight-business-analysis-card.lba .lba-role{max-width:none}}
      `}</style>
      <article className="project-card-item lba" id="leadsight-business-analysis-card">
        <div className="lba-top">
          <header className="lba-head">
            <div className="lba-hero-copy">
              <div className="lba-chips" aria-label="Project categories">
                <span>Business Analysis</span>
                <span>ASAH Capstone</span>
                <span className="lba-chip-warn">Concept · Not launched</span>
              </div>
              <h2 className="lba-title">LeadSight</h2>
              <p className="lba-summary">
                A proposed lead-prioritization concept for banking sales teams, combining predictive
                scoring, customer segmentation, and analytics to support more informed outreach.
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

        <nav className="lba-tabs" role="tablist" aria-label="LeadSight case study sections">
          {detailTabs.map((tab) => (
            <button
              aria-controls={`panel-${tab.id}`}
              aria-selected={activeTab === tab.id}
              className="lba-tab"
              id={`tab-${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                event.preventDefault();
                const currentIndex = detailTabs.findIndex(({ id }) => id === tab.id);
                const direction = event.key === "ArrowRight" ? 1 : -1;
                const nextIndex = (currentIndex + direction + detailTabs.length) % detailTabs.length;
                const nextTab = detailTabs[nextIndex];
                setActiveTab(nextTab.id);
                event.currentTarget.parentElement
                  ?.querySelector(`#tab-${nextTab.id}`)
                  ?.focus();
              }}
              role="tab"
              tabIndex={activeTab === tab.id ? 0 : -1}
              type="button"
            >
              <small>{tab.num}</small>
              <b>{tab.label}</b>
            </button>
          ))}
        </nav>

        <section
          className="lba-panel"
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          aria-live="polite"
        >
          {activeTab === "problem" && (
            <>
              <p className="lba-kicker">01 / PROBLEM DEFINITION</p>
              <h2 className="lba-panel-title">Why does lead prioritization matter?</h2>
              <p className="lba-sub">The project explores a common outbound banking challenge: broad calling lists and simple demographic grouping may make it harder for sales teams to decide whom to approach first.</p>
              <div className="lba-grid3">
                <div className="lba-card soft"><div className="lba-glyph">☎</div><h3>Untargeted outreach</h3><p>Conventional calling strategies can distribute effort across prospects without clear prioritization.</p></div>
                <div className="lba-card soft"><div className="lba-glyph">▦</div><h3>Limited decision context</h3><p>Sales teams need a clearer view of customer characteristics, priority groups, and campaign information.</p></div>
                <div className="lba-card soft"><div className="lba-glyph">◷</div><h3>Operational inefficiency</h3><p>Time spent reviewing leads manually creates an opportunity to improve selection and planning.</p></div>
              </div>
              <div className="lba-insight"><strong>Business question:</strong> How could a sales team prioritize likely prospects and understand campaign performance without relying only on broad, manual segmentation?</div>
              <div style={{ marginTop: 12 }}>
                <p className="lba-kicker">ANALYSIS TO SOLUTION</p>
                <h3 className="lba-value-title">The proposed decision flow</h3>
                <div className="lba-flow">
                  <div className="lba-flow-step"><span className="lba-stepnum">STEP 01</span><strong>Understand the challenge</strong><p>Identify inefficiencies in prospect selection and outbound contact workflows.</p></div>
                  <div className="lba-flow-step"><span className="lba-stepnum">STEP 02</span><strong>Structure the data</strong><p>Use the public UCI Bank Marketing dataset to explore patterns and build a predictive model.</p></div>
                  <div className="lba-flow-step"><span className="lba-stepnum">STEP 03</span><strong>Surface priorities</strong><p>Present lead scores and segments in a readable sales dashboard.</p></div>
                  <div className="lba-flow-step"><span className="lba-stepnum">STEP 04</span><strong>Support decisions</strong><p>Help teams review targets, plan outreach, and track campaign activity.</p></div>
                </div>
              </div>
              <p className="lba-note">Problem framing and product concept are drawn from the LeadSight capstone presentation, not from a live bank deployment.</p>
            </>
          )}

          {activeTab === "market" && (
            <>
              <p className="lba-kicker">02 / BUSINESS &amp; COMPETITOR ANALYSIS</p>
              <h2 className="lba-panel-title">Designed for internal banking teams.</h2>
              <p className="lba-sub">Rather than a consumer-facing app, the proposed product focuses on sales and management decision-making. The deck also positions LeadSight against more generic and complex CRM/analytics alternatives.</p>
              <div className="lba-persona">
                <div className="lba-card"><div className="lba-label">Primary user</div><h3>Sales &amp; Marketing</h3><p>Review prospect priority, plan contact activities, and navigate candidate lists with relevant context.</p></div>
                <div className="lba-card"><div className="lba-label">Decision stakeholder</div><h3>Management</h3><p>Review high-level campaign performance and gain visibility into sales activity.</p></div>
                <div className="lba-card"><div className="lba-label">Supporting stakeholders</div><h3>Data / BI &amp; IT</h3><p>Provide technical and data-integration considerations for a potential internal rollout.</p></div>
              </div>
              <h3 className="lba-value-title">Competitive positioning</h3>
              <div className="lba-matrix">
                <div className="lba-quad"><div className="lba-qtag">DIFFERENTIATION</div><h3>Focused banking use case</h3><p>LeadSight was conceived around deposit-sales lead prioritization rather than broad, multi-industry CRM workflows.</p></div>
                <div className="lba-quad"><div className="lba-qtag">USABILITY</div><h3>Simpler internal experience</h3><p>A focused interface is intended to make predictive scoring and outreach decisions easier for sales users to interpret.</p></div>
                <div className="lba-quad"><div className="lba-qtag">ANALYTICS</div><h3>Predictive lead scoring</h3><p>AI-supported segmentation is proposed as an alternative to simple rules or demographic-only lists.</p></div>
                <div className="lba-quad"><div className="lba-qtag">PRODUCT SCOPE</div><h3>Analytics + workflow</h3><p>Combines dashboards, lead grouping, and AI insights in one concept instead of presenting a model in isolation.</p></div>
              </div>
              <div className="lba-insight"><strong>Positioning hypothesis:</strong> A narrower workflow may be easier for a banking sales team to learn than an enterprise suite—but user research and live adoption data would be needed to validate this advantage.</div>
            </>
          )}

          {activeTab === "strategy" && (
            <>
              <p className="lba-kicker">03 / PRODUCT DEFINITION</p>
              <h2 className="lba-panel-title">Make predictions actionable, not just visible.</h2>
              <p className="lba-sub">The value proposition connects three capabilities that support the same decision: understand performance, identify priority leads, and prepare more relevant outreach.</p>
              <div className="lba-grid3">
                <div className="lba-card"><div className="lba-glyph">▥</div><h3>01 · Analytics dashboard</h3><p>Summarizes customer and campaign information in a single view for review and monitoring.</p></div>
                <div className="lba-card"><div className="lba-glyph">◉</div><h3>02 · Customer segmentation</h3><p>Groups prospective customers into priority and non-priority categories, with supporting demographic and financial context.</p></div>
                <div className="lba-card"><div className="lba-glyph">✧</div><h3>03 · AI-assisted insights</h3><p>Explores more personalized outreach recommendations based on customer and campaign context.</p></div>
              </div>
              <h3 className="lba-value-title">Product value chain</h3>
              <div className="lba-flow lba-product-flow">
                <div className="lba-flow-step"><span className="lba-stepnum">INPUT</span><strong>Customer data</strong><p>Structured information from the public Bank Marketing dataset.</p></div>
                <div className="lba-flow-step"><span className="lba-stepnum">ANALYSIS</span><strong>Predictive scoring</strong><p>Machine-learning model produces lead prioritization output.</p></div>
                <div className="lba-flow-step"><span className="lba-stepnum">EXPERIENCE</span><strong>Clear dashboard</strong><p>Sales teams view segments, information, and recommendations.</p></div>
                <div className="lba-flow-step"><span className="lba-stepnum">INTENDED VALUE</span><strong>Better prioritization</strong><p>Focus outreach planning around interpretable lead scores.</p></div>
              </div>
              <div className="lba-insight"><strong>What the product must get right:</strong> Model outputs need to be understandable and useful for the specific sales task. Technical performance alone is not sufficient evidence of business value.</div>
            </>
          )}

          {activeTab === "rollout" && (
            <>
              <div className="lba-panel-head">
                <div>
                  <p className="lba-kicker">04 / BUSINESS METRICS &amp; IMPLEMENTATION PLANNING</p>
                  <h2 className="lba-panel-title">Defining success before deployment.</h2>
                  <p className="lba-sub">The team proposed a phased internal rollout and five measurement areas. These are planned evaluation criteria—not observed business outcomes.</p>
                </div>
              </div>
              <div className="lba-metricrow">
                <div className="lba-metric-card"><div className="lba-tag">KPI 01</div><strong>User adoption</strong><p>Active users and login frequency during the first 30 days.</p></div>
                <div className="lba-metric-card"><div className="lba-tag">KPI 02</div><strong>Operational efficiency</strong><p>Time required to select leads and support outbound contact.</p></div>
                <div className="lba-metric-card"><div className="lba-tag">KPI 03</div><strong>Scoring performance</strong><p>Alignment between lead scores and actual conversions.</p></div>
                <div className="lba-metric-card"><div className="lba-tag">KPI 04</div><strong>User satisfaction</strong><p>Feedback after early usage and requested improvements.</p></div>
                <div className="lba-metric-card"><div className="lba-tag">KPI 05</div><strong>Business impact</strong><p>Conversion and operating-cost outcomes if deployed.</p></div>
              </div>
              <h3 className="lba-value-title">Proposed rollout roadmap</h3>
              <div className="lba-phase">
                <div className="lba-card"><span className="lba-stepnum">WEEKS 1–2</span><h3>Soft launch</h3><p>Gather feedback from a small pilot group.</p></div>
                <div className="lba-card"><span className="lba-stepnum">WEEKS 3–4</span><h3>Iterate</h3><p>Refine workflows and integration based on feedback.</p></div>
                <div className="lba-card"><span className="lba-stepnum">MONTH 2</span><h3>Internal pilot</h3><p>Support testing and onboarding of sales users.</p></div>
                <div className="lba-card"><span className="lba-stepnum">MONTH 3</span><h3>Wider deployment</h3><p>Expand operational usage, subject to validation.</p></div>
                <div className="lba-card"><span className="lba-stepnum">MONTH 4</span><h3>Improve</h3><p>Maintain and iterate against usage data.</p></div>
              </div>
              <div className="lba-impact">
                <div className="lba-card soft">
                  <p className="lba-kicker">MODEL EVALUATION · REPORTED IN TEAM DECK</p>
                  <h3>A metric worth questioning</h3>
                  <div className="lba-barrow"><div className="lba-barlabel">Overall accuracy</div><div className="lba-bartrack"><div className="lba-barfill" style={{ width: "87.5%" }} /></div><div className="lba-pct">87.5%</div></div>
                  <div className="lba-barrow"><div className="lba-barlabel">Priority-class recall</div><div className="lba-bartrack"><div className="lba-barfill coral" style={{ width: "38%" }} /></div><div className="lba-pct">38%</div></div>
                  <p className="lba-impact-copy">The deck reports strong overall accuracy but lower recall for the priority class. That matters because overlooking genuinely promising leads may weaken the tool&apos;s intended business value.</p>
                </div>
                <div className="lba-card soft">
                  <p className="lba-kicker">PRODUCT LEARNING</p>
                  <h3>Validate the right outcome</h3>
                  <p>Before claiming lead selection is more efficient, a real pilot would need to test threshold choices, false-negative trade-offs, workflow usability, and actual conversion outcomes.</p>
                  <div className="lba-insight" style={{ marginTop: 14 }}><strong>Decision principle:</strong> Model quality, user adoption, and sales impact should be measured separately.</div>
                </div>
              </div>
              <div className="lba-warning"><strong>Evidence boundary:</strong> LeadSight is an ASAH capstone developed using a public dataset. The four-month rollout and proposed business KPIs in the presentation are plans, not proof of internal bank adoption, real revenue uplift, or operational cost reduction.</div>
            </>
          )}
        </section>

      </article>
    </>
  );
}
