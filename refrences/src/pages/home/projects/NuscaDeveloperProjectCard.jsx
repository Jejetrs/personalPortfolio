import PrivateLink from "./PrivateLink.jsx";

export default function NuscaDeveloperProjectCard() {
  return (
      <>
      <style>{`
.nu{--ink:#193c35;--muted:#657b76;--line:#d7e9e2;color:var(--ink);font-size:13px;line-height:1.5}
.nu *{box-sizing:border-box}.nu h2,.nu h3,.nu h4,.nu p,.nu ul{margin:0;padding:0}
.nu.project-card-item{display:block!important;padding:20px 22px!important;background:linear-gradient(130deg,#fcfefd,#f3faf7)!important;border:1px solid #d5e9e1!important;border-radius:22px!important;box-shadow:0 20px 56px #244e3b0c!important}
.nu .project-card-header{display:flex;align-items:center;justify-content:space-between;gap:14px;border-bottom:1px solid var(--line);padding-bottom:15px;margin-bottom:0}
.nu .nu-chips{display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.nu .nu-index{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#007f62;color:#fff;font-weight:800;font-size:12px}
.nu .nu-chip{border:1px solid #cfe7dc;background:#fff;border-radius:99px;padding:5px 10px;font-weight:700;font-size:11px;color:#177657}.nu .nu-chip.role{background:#e4f6ed}
.nu .nu-action{border:0;border-radius:10px;background:#087e61;color:#fff;font-weight:750;padding:10px 13px;font-size:12px;white-space:nowrap;text-decoration:none}.nu .nu-action:hover{background:#066a52}
.nu code{font:600 10.5px ui-monospace,SFMono-Regular,Menlo,monospace;background:#e4f6ed;color:#075f48;border-radius:5px;padding:1px 5px}
.nu .nu-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:20px;margin-top:19px;align-items:start}.nu .nu-grid>*{min-width:0}
.nu .nu-title{font-size:clamp(32px,3.4vw,46px);line-height:1.05;letter-spacing:-.05em;margin:0 0 6px;color:#14332c;font-weight:800}.nu .nu-title span{color:#08a67a}
.nu .nu-eyebrow{text-transform:uppercase;letter-spacing:.09em;font-size:10px;font-weight:850;color:#008965}
.nu .nu-lead{font-size:13px;line-height:1.55;color:#59716a;margin:9px 0 14px;max-width:60ch}
.nu .nu-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:12px 0}
.nu .nu-metric{background:#fff;border:1px solid var(--line);border-radius:12px;padding:11px 9px;min-width:0}.nu .nu-metric strong{display:block;font-size:15px;color:#076d54;line-height:1.25}.nu .nu-metric small{display:block;font-size:10px;color:#78928a;margin-top:3px}
.nu .nu-panel{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px;margin-top:10px}.nu .nu-panel h3{font-size:14px;letter-spacing:-.01em;margin-bottom:10px}
.nu .nu-process{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}
.nu .nu-step{display:flex;flex-direction:column;gap:3px;font-weight:750;font-size:11px;color:#086c53;border:1px solid #bfe5d5;background:#edf9f2;border-radius:9px;padding:10px 7px;min-width:0}.nu .nu-step small{font-size:9px;font-weight:500;color:#648479;line-height:1.35}
.nu .nu-micro{font-size:11px;color:#668279;margin-top:9px}
.nu .nu-caps{display:grid;grid-template-columns:1fr 1fr;gap:8px}.nu .nu-cap{display:flex;gap:8px;align-items:start;font-size:11px;color:#416258;min-height:72px}
.nu .nu-ico{width:24px;height:24px;flex:none;display:grid;place-items:center;background:#e4f7ed;border-radius:8px;color:#087d5b;font-weight:800}
.nu .nu-stackwide{margin-top:15px}.nu .nu-stack{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.nu .nu-stack>div{background:#f6faf8;border:1px solid #e0ece7;border-radius:10px;padding:13px 14px;min-width:0}.nu .nu-stack h4{font-size:12px;margin-bottom:6px}.nu .nu-stack p{font-size:11px;color:#637b73;line-height:1.55}
.nu .nu-gallery{margin-top:12px;border:1px solid var(--line);background:#fff;border-radius:15px;padding:14px}
.nu .nu-gallery-top{display:flex;align-items:center;justify-content:space-between;gap:12px}.nu .nu-gallery-top h3{font-size:14px}.nu .nu-gallery-top p{font-size:10px;color:#7f9289;margin-top:2px}
.nu .nu-controls{display:flex;gap:8px;align-items:center}.nu .nu-controls button{border:1px solid #cce3d7;background:#f4faf7;border-radius:8px;color:#08775a;padding:5px 12px;font-size:14px;cursor:pointer}.nu .nu-controls button:disabled{opacity:.35;cursor:not-allowed}.nu .nu-controls span{font-size:11px;color:#71867c}
.nu .nu-track{display:flex;align-items:flex-start;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px 1px 5px;scrollbar-width:thin}
.nu .nu-slide{flex:0 0 calc((100% - 20px)/3);margin:0;scroll-snap-align:start;border:1px solid #e0ece6;border-radius:12px;overflow:hidden;min-width:0}
.nu .nu-open{display:block;width:100%;padding:0;border:0;background:#ecf8f2;cursor:zoom-in;aspect-ratio:16/9;overflow:hidden}.nu .nu-open img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
.nu .nu-slide figcaption{padding:10px}.nu .nu-slide figcaption strong{display:block;font-size:11px}.nu .nu-slide figcaption span{display:block;font-size:10px;color:#7f9289;margin-top:4px}
.nu .nu-codeframe{aspect-ratio:16/9;background:#142c25;display:flex;align-items:center;justify-content:center;overflow:hidden}
.nu .nu-code{width:100%;padding:0 14px;color:#d4f9df}.nu .nu-code header{display:flex;align-items:center;gap:6px;margin-bottom:6px}.nu .nu-code header i{width:8px;height:8px;border-radius:9999px;background:#2b5a4a}.nu .nu-code header span{margin-left:auto;font:600 10px ui-monospace,Menlo,monospace;color:#8fc3ad}
.nu .nu-code pre{margin:0;overflow:hidden;font:500 9.5px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace;color:#d4f9df;white-space:pre}
.nu .nu-code .c{color:#6f9d8a}.nu .nu-code .k{color:#7dd3fc}.nu .nu-code .f{color:#fcd34d}.nu .nu-code .s{color:#86efac}
.nu .nu-detail{margin-top:13px}.nu .nu-detail summary{cursor:pointer;padding:12px 15px;font-size:12px;font-weight:800;border:1px solid var(--line);border-radius:12px;background:#fff;list-style:none}.nu .nu-detail summary::-webkit-details-marker{display:none}
.nu .nu-detail summary:after{content:'＋';float:right;color:#178d6a}.nu .nu-detail[open] summary:after{content:'−'}.nu .nu-detail[open] summary{border-radius:12px 12px 0 0}
.nu .nu-detail-body{padding:12px 14px;background:#fff;border:1px solid var(--line);border-top:0;border-radius:0 0 12px 12px}
.nu .nu-dgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.nu .nu-dgrid h4{font-size:12px;margin-bottom:6px}.nu .nu-dgrid li{font-size:11px;color:#617b70;line-height:1.6}.nu .nu-dgrid ul{padding-left:17px}
.nu .nu-footer{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;font-size:10px;color:#82988d;margin-top:12px}
.nu .nu-links{display:flex;gap:8px;flex-wrap:wrap}.nu .nu-links button{font:inherit;font-size:11px;font-weight:750;padding:8px 11px;border-radius:10px;border:1px dashed #9fd3bf;background:#f1faf6;color:#08765b;cursor:pointer}.nu .nu-links button:hover{background:#e0f4ea}
.nu a:focus-visible,.nu button:focus-visible,.nu summary:focus-visible,.nu input:focus-visible{outline:3px solid #68d0a8;outline-offset:2px}
@media(max-width:1050px){.nu .nu-grid{grid-template-columns:minmax(0,1fr)}.nu .nu-slide{flex-basis:calc((100% - 10px)/2)}}

/* Grading lab */
.nu .nu-gl{margin:0}
.nu .nu-gl{background:linear-gradient(160deg,#0f4a38 0%,#0c2a21 62%,#08201a 100%);border:1px solid #1f6b52;border-radius:20px;padding:12px 14px 10px;color:#e6f6ef;box-shadow:0 18px 44px rgba(6,60,44,.3)}
.nu .nu-gl-h{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:4px 12px}
.nu .nu-gl-h h3{font-size:18px;font-weight:800;letter-spacing:-.02em;color:#fff}
.nu .nu-gl-h span{font-size:12px;color:#9cc9b6}
.nu .nu-gl-h code{background:#d1fae5;color:#065f46;font-size:11.5px;padding:2px 8px;border-radius:7px}
.nu .nu-gl-chips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 10px}
.nu .nu-gl-chip{cursor:pointer;border:1px solid #2c7a60;background:transparent;color:#d9f3e8;border-radius:9999px;padding:5px 12px;font:inherit;font-size:12px;font-weight:600;line-height:1.2}
.nu .nu-gl-chip:hover{background:rgba(255,255,255,.08)}
.nu .nu-gl-chip[aria-pressed=true]{background:#ecfdf5;color:#0b2a21;border-color:#ecfdf5}
.nu .nu-gl button:focus-visible,.nu .nu-gl input:focus-visible{outline:3px solid #6ee7b7;outline-offset:2px}
.nu .nu-gl-rows{display:flex;flex-direction:column;gap:4px}
.nu .nu-gl-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:0 10px;align-items:baseline}
.nu .nu-gl-row label{font-size:12px;font-weight:600;color:#ecfdf5}
.nu .nu-gl-row label em{font-style:normal;font-weight:500;color:#9cc9b6}
.nu .nu-gl-row output{font:700 12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff}
.nu .nu-gl-row input{grid-column:1/-1}
.nu .nu-gl input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:18px;margin:0;background:transparent;cursor:pointer;--p:50%}
.nu .nu-gl input[type=range]::-webkit-slider-runnable-track{height:8px;border-radius:9999px;background:linear-gradient(90deg,#34d399 var(--p),#2c403a var(--p))}
.nu .nu-gl input[type=range]::-moz-range-track{height:8px;border-radius:9999px;background:linear-gradient(90deg,#34d399 var(--p),#2c403a var(--p))}
.nu .nu-gl input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;margin-top:-6px;border-radius:9999px;background:#34d399;border:3px solid #a7f3d0;box-shadow:0 2px 8px rgba(0,0,0,.35)}
.nu .nu-gl input[type=range]::-moz-range-thumb{width:14px;height:14px;border-radius:9999px;background:#34d399;border:3px solid #a7f3d0}
.nu .nu-gl-sep{height:1px;background:#1f6b52;margin:8px 0}
.nu .nu-gl-out{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) minmax(0,1.15fr);gap:6px}
.nu .nu-lv{border-radius:12px;background:rgba(255,255,255,.05);border:1px solid #1f6b52;padding:6px 8px;text-align:center}
.nu .nu-lv span{display:block;font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#9cc9b6}
.nu .nu-lv b{display:inline-grid;place-items:center;width:28px;height:28px;margin-top:3px;border-radius:9px;font-size:15px;font-weight:800;color:#fff;background:#16a34a}
.nu .nu-lv small{display:block;margin-top:3px;font-size:9.5px;color:#9cc9b6;line-height:1.3}
.nu .nu-lv.is-driver{border-color:#6ee7b7;box-shadow:0 0 0 1px #6ee7b7 inset}
.nu .nu-final{border-radius:12px;background:#ecfdf5;color:#0b2a21;padding:6px 10px;display:flex;align-items:center;gap:10px}
.nu .nu-final b{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:12px;font-size:22px;font-weight:800;color:#fff;background:#16a34a}
.nu .nu-final p{font-size:11.5px;line-height:1.35;font-weight:600}
.nu .nu-json{margin:8px 0 0;background:rgba(0,0,0,.28);border-radius:10px;padding:8px 10px;font:500 10.5px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;color:#d7efe4;white-space:pre;overflow-x:auto}
.nu .nu-gl-note{margin-top:6px;font-size:10.5px;color:#9cc9b6}
@media (max-width:900px){.nu .nu-gl-out{grid-template-columns:repeat(3,minmax(0,1fr))}.nu .nu-final{grid-column:1/-1}.nu .nu-paths{grid-template-columns:minmax(0,1fr)}.nu .nu-paths>.h{display:none}.nu .nu-paths>b{background:var(--soft);border-top:1px solid var(--bd)}.nu .nu-paths>code{margin:4px 11px 0}.nu .nu-paths>span{padding-top:2px}.nu .nu-gotos{grid-template-columns:1fr}}

/* Developer card */
.nu.project-card-item{padding:1.25rem!important;border:1px solid #a7f3d0cc!important;border-radius:1.5rem!important;background:linear-gradient(135deg,#f0fdf4,#ecfdf5 50%,#e6fcf1)!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}
@media(min-width:640px){.nu.project-card-item{padding:1.5rem!important}}
.nu{color:#0f172a;font-size:12px;line-height:1.5}
.nu .nu-index{width:24px;height:24px;font-size:12px;font-weight:700;background:#047857;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nu .nu-chip{font-size:.75rem;font-weight:600;line-height:1.15rem;padding:.25rem .75rem;color:#006e4b;background:#ffffffcc;border:1px solid #a7f3d0cc;box-shadow:0 1px 2px rgba(0,0,0,.05)}.nu .nu-chip.role{background:#d1fae5e6}
.nu .nu-action{background:#006e4b;font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.45rem .95rem;border-radius:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}.nu .nu-action:hover{background:#065f46}
.nu .nu-title{color:#0f172a;letter-spacing:-.025em;line-height:1.2}.nu .nu-title span{color:#006e4b}
.nu .nu-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.05em;color:#006e4b;margin-top:.25rem}
.nu .nu-lead{font-size:12px;line-height:1.625;color:#334155;margin:.75rem 0;max-width:none}
@media(min-width:640px){.nu .nu-lead{font-size:14px}}
.nu .nu-metrics{gap:6px;margin:.75rem 0}
.nu .nu-metric{display:flex;flex-direction:column-reverse;text-align:center;border-radius:12px;padding:8px;background:#ffffffe6;border:1px solid #d1fae5;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nu .nu-metric small{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;line-height:1.25;margin:0}
.nu .nu-metric strong{font-size:12px;font-weight:800;color:#006e4b;line-height:1.5}
.nu .nu-panel,.nu .nu-gallery{background:#fffffff2;border:1px solid #d1fae5;border-radius:12px;padding:12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nu .nu-panel h3,.nu .nu-gallery-top h3{font-size:11px;font-weight:700;color:#1e293b;letter-spacing:0;margin-bottom:8px;line-height:1.4}.nu .nu-gallery-top h3{margin-bottom:0}
.nu .nu-process{gap:6px}.nu .nu-step{font-size:9.5px;font-weight:600;padding:8px 6px;border-radius:8px;background:#ecfdf5b3;border:1px solid #d1fae5;color:#334155}.nu .nu-step small{font-size:8.5px;color:#64748b}
.nu .nu-micro{font-size:9.5px;color:#64748b;line-height:1.4}
.nu .nu-stack{display:grid;grid-template-columns:minmax(0,1fr);gap:6px}.nu .nu-stackpanel .nu-stack>div{padding:8px 10px;background:#ecfdf5b3;border:1px solid #d1fae5;border-radius:8px}
.nu .nu-stack h4{font-size:11px;font-weight:700;color:#1e293b;margin-bottom:3px}.nu .nu-stack p{font-size:9.5px;line-height:1.4;color:#475569}
.nu .nu-gallery-top p{font-size:9.5px;color:#94a3b8}
.nu .nu-slide{border:1px solid #d1fae5;border-radius:12px}.nu .nu-slide figcaption strong{font-size:10px;font-weight:700;color:#334155}.nu .nu-slide figcaption span{font-size:9px;color:#94a3b8}
.nu .nu-controls button{border-color:#d1fae5;background:#fff;color:#006e4b;border-radius:8px}.nu .nu-controls span{font-family:ui-monospace,Menlo,monospace;font-size:10px;color:#94a3b8}
/* Process dropdown */
.nu .nu-detail{margin-top:.75rem}
.nu .nu-detail summary{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 14px;border-radius:12px;background:#ffffffcc;border:1px solid #d1fae5;box-shadow:0 1px 2px rgba(0,0,0,.05);font-size:12px;font-weight:700;letter-spacing:-.025em;color:#1e293b;transition:background .2s}
.nu .nu-detail summary:hover{background:#fff;color:#006e4b}
.nu .nu-detail summary:before{content:"";width:8px;height:8px;border-radius:9999px;background:#006e4b;margin-right:8px;flex:none}
.nu .nu-detail summary{justify-content:flex-start}
.nu .nu-detail summary:after{content:"";float:none;margin-left:auto;width:16px;height:16px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23006e4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E") center/contain no-repeat;transition:transform .3s}
.nu .nu-detail[open] summary:after{content:"";transform:rotate(180deg)}
.nu .nu-detail[open] summary{border-radius:12px}
.nu .nu-detail-body{border:0;background:transparent;padding:12px 0 0}
.nu .nu-dgrid{gap:12px}.nu .nu-dgrid>div{background:#fff;border:1px solid #d1fae5;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nu .nu-dgrid h4{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0f172a;margin-bottom:8px}.nu .nu-dgrid li{font-size:10.5px;line-height:1.5;color:#475569}
.nu .nu-footer{font-size:10px;color:#94a3b8}.nu .nu-links button{font-size:11px;font-weight:600;border-radius:12px;padding:6px 12px;border:1px solid #d1fae5;background:#fff;color:#006e4b;box-shadow:0 1px 2px rgba(0,0,0,.05)}.nu .nu-links button:hover{background:#ecfdf5b3}
@media(max-width:650px){.nu.project-card-item{padding:1.25rem!important}}

.nu{--dev-acc:#006e4b;--dev-line:#a7f3d0}
.nu .nu-dgrid{padding-top:0}

`}</style>
      <article className="project-card-item nu relative overflow-hidden" id="nusca-developer-project-card" data-category="developer fullstack react fastapi" data-live-url="https://nusca.vercel.app/">
        <div className="dev-top">
          <div className="dev-tags">
            <span className="dev-num sf-number">
              04
            </span>
            <span className="dev-tag role">
              Full-stack Developer
            </span>
            <span className="dev-tag">
              React 18 · Vite
            </span>
            <span className="dev-tag">
              FastAPI
            </span>
            <span className="dev-tag">
              OCR · Donut
            </span>
            <span className="dev-tag">
              Docker
            </span>
            
          </div>
          <div className="dev-actions">
            <PrivateLink label="GitHub" restricted />
            <button type="button" className="dev-btn ghost" data-sf-goto="uiux" data-sf-target="nusca-project-card-1">
              UI/UX case study ↗
            </button>
            <button type="button" className="dev-btn ghost" data-sf-goto="aiml" data-sf-target="nusca-project-card-2">
              AI/ML case study ↗
            </button>
            <span className="dev-switch" data-live-badge="" data-state="checking" role="switch" aria-checked="false" aria-readonly="true" aria-disabled="true" aria-label="Live deploy status" tabIndex="-1">
              <span className="dev-switch-label">Live deploy</span>
              <span className="dev-switch-track"><i></i></span>
              <span className="dev-switch-text" data-live-text="">Checking…</span>
            </span>
            <a className="dev-btn solid" hidden data-live-link="" target="_blank" rel="noopener noreferrer">Open Live App ↗</a>
          </div>
        </div>
        <div className="nu-grid">
          <section className="nu-intro">
            <h2 className="nu-title">
              {"Nusca "}
              <span>
                / NutriScan
              </span>
            </h2>
            <div className="nu-eyebrow">
              Full-stack Development · Nutrition Label Analysis
            </div>
            <p className="nu-lead">
              A full-stack nutrition-label scanner built with React and FastAPI. It converts beverage-label photos into structured nutrition data and a Nutri-Level A–D grade.
            </p>
            <div className="nu-metrics">
              <div className="nu-metric">
                <strong>
                  React 18
                </strong>
                <small>
                  Frontend
                </small>
              </div>
              <div className="nu-metric">
                <strong>
                  FastAPI
                </strong>
                <small>
                  Backend · 3 routes
                </small>
              </div>
              <div className="nu-metric">
                <strong>
                  OCR + Donut
                </strong>
                <small>
                  AI extraction
                </small>
              </div>
              <div className="nu-metric">
                <strong>
                  Docker ×2
                </strong>
                <small>
                  Deployment
                </small>
              </div>
            </div>
            <div className="nu-panel">
              <h3>
                End-to-End Architecture
              </h3>
              <div className="nu-process">
                <span className="nu-step">
                  React UI
                  <small>
                    capture · crop · upload
                  </small>
                </span>
                <span className="nu-step">
                  FastAPI
                  <small>
                    validate · parse
                  </small>
                </span>
                <span className="nu-step">
                  OCR + Donut
                  <small>
                    extract fields
                  </small>
                </span>
                <span className="nu-step">
                  Grade A–D
                  <small>
                    render result
                  </small>
                </span>
              </div>
              <p className="nu-micro">
                React sends the cropped image as FormData; FastAPI handles validation, OCR and grading; React shows the API result or a clearly labeled error state.
              </p>
            </div>
            <div className="nu-panel nu-stackpanel">
              <h3>
                Tech Stack
              </h3>
              <div className="nu-stack">
                <div>
                  <h4>
                    Frontend
                  </h4>
                  <p>
                    React 18 · Vite 6 · react-image-crop · Canvas · MediaDevices · fetch
                  </p>
                </div>
                <div>
                  <h4>
                    {"Backend & AI"}
                  </h4>
                  <p>
                    Python 3.11 · FastAPI · Uvicorn · Pillow · EasyOCR · PyTorch · Transformers
                  </p>
                </div>
                <div>
                  <h4>
                    Deployment
                  </h4>
                  <p>
                    Docker ×2 · Nginx · Hugging Face Spaces · CORS allow-list
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="nu-gl" data-nu-lab="" aria-label="Grading lab">
            <div className="nu-gl-h">
              <h3>
                Grading lab
              </h3>
              <span>
                {"Rules from "}
                <code>
                  nutrilevel.py
                </code>
              </span>
            </div>
            <div className="nu-gl-chips" role="group" aria-label="Example drinks">
              <button type="button" className="nu-gl-chip" data-nu-preset="water" aria-pressed="false">
                Water
              </button>
              {" "}
              <button type="button" className="nu-gl-chip" data-nu-preset="tea" aria-pressed="true">
                Sweet tea
              </button>
              {" "}
              <button type="button" className="nu-gl-chip" data-nu-preset="cola" aria-pressed="false">
                Cola
              </button>
              {" "}
              <button type="button" className="nu-gl-chip" data-nu-preset="milk" aria-pressed="false">
                Milk drink
              </button>
            </div>
            <div className="nu-gl-rows">
              <div className="nu-gl-row">
                <label htmlFor="nu-gl-gula">
                  {"Sugar "}
                  <em>
                    (g per 100 ml)
                  </em>
                </label>
                <output data-nu="gula-v" htmlFor="nu-gl-gula">
                  8.0
                </output>
                <input type="range" id="nu-gl-gula" data-nu="gula" min="0" max="15" step="0.1" defaultValue="8" />
              </div>
              <div className="nu-gl-row">
                <label htmlFor="nu-gl-garam">
                  {"Sodium "}
                  <em>
                    (mg per 100 ml)
                  </em>
                </label>
                <output data-nu="garam-v" htmlFor="nu-gl-garam">
                  20
                </output>
                <input type="range" id="nu-gl-garam" data-nu="garam" min="0" max="600" step="5" defaultValue="20" />
              </div>
              <div className="nu-gl-row">
                <label htmlFor="nu-gl-lj">
                  {"Saturated fat "}
                  <em>
                    (g per 100 ml)
                  </em>
                </label>
                <output data-nu="lj-v" htmlFor="nu-gl-lj">
                  0.0
                </output>
                <input type="range" id="nu-gl-lj" data-nu="lj" min="0" max="4" step="0.1" defaultValue="0" />
              </div>
            </div>
            <div className="nu-gl-sep"></div>
            <div className="nu-gl-out" aria-live="polite">
              <div className="nu-lv" data-nu="lv-gula">
                <span>
                  Sugar
                </span>
                <b>
                  C
                </b>
                <small>
                  A ≤1 · B ≤5 · C ≤10 g
                </small>
              </div>
              <div className="nu-lv" data-nu="lv-garam">
                <span>
                  Sodium
                </span>
                <b>
                  B
                </b>
                <small>
                  A ≤5 · B ≤120 · C ≤500 mg
                </small>
              </div>
              <div className="nu-lv" data-nu="lv-lj">
                <span>
                  Sat. fat
                </span>
                <b>
                  A
                </b>
                <small>
                  A ≤0.7 · B ≤1.2 · C ≤2.8 g
                </small>
              </div>
              <div className="nu-final">
                <b data-nu="final">
                  C
                </b>
                <p data-nu="final-t">
                  Sugar sets the grade: the worst component wins.
                </p>
              </div>
            </div>
            <pre className="nu-json" data-nu="json" aria-label="API response excerpt"></pre>
            <p className="nu-gl-note">
              Values are rounded to 1 decimal before banding. Sugar counts net of lactose.
            </p>
          </div>
        </div>
        <section className="nu-gallery" data-gallery="" aria-label="Running app screenshots">
          <div className="nu-gallery-top">
            <div>
              <h3>
                Running App Screens
              </h3>
              <p>
                Screens from the deployed app · click to enlarge
              </p>
            </div>
            <div className="nu-controls">
              <button type="button" data-gal-prev="" aria-label="Previous screenshot">
                ←
              </button>
              <span data-gal-counter="">
                1 / 6
              </span>
              <button type="button" data-gal-next="" aria-label="Next screenshot">
                →
              </button>
            </div>
          </div>
          <div className="nu-track" data-gal-track="" tabIndex="0">
            <figure className="nu-slide">
              <div className="nu-codeframe">
                <div className="nu-code">
                  <header>
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>
                      inference.py · run_pipeline()
                    </span>
                  </header>
                  <pre>
                    <span className="f">
                      {"ocr_res"}
                    </span>
                    {" = ocr."}
                    <span className="f">
                      {"readtext"}
                    </span>
                    {"(image)\n"}
                    <span className="k">
                      {"if"}
                    </span>
                    {" "}
                    <span className="f">
                      {"anchor_hits"}
                    </span>
                    {"(ocr_res) < "}
                    <span className="k">
                      {"2"}
                    </span>
                    {":\n    "}
                    <span className="k">
                      {"return"}
                    </span>
                    {" "}
                    <span className="s">
                      {"\"no_label\""}
                    </span>
                    {"      "}
                    <span className="c">
                      {"# gate 1"}
                    </span>
                    {"\npanel  = "}
                    <span className="f">
                      {"crop_panel"}
                    </span>
                    {"(image, ocr_res)\nfields = "}
                    <span className="f">
                      {"donut_read"}
                    </span>
                    {"(panel)\n"}
                    <span className="k">
                      {"if not any"}
                    </span>
                    {"(k "}
                    <span className="k">
                      {"in"}
                    </span>
                    {" fields "}
                    <span className="k">
                      {"for"}
                    </span>
                    {" k "}
                    <span className="k">
                      {"in"}
                    </span>
                    {" CORE):\n    "}
                    <span className="k">
                      {"return"}
                    </span>
                    {" "}
                    <span className="s">
                      {"\"no_label\""}
                    </span>
                    {"      "}
                    <span className="c">
                      {"# gate 2"}
                    </span>
                    {"\nfields["}
                    <span className="s">
                      {"\"garam\""}
                    </span>
                    {"] = "}
                    <span className="f">
                      {"reconcile_sodium"}
                    </span>
                    {"(...)\ncalc = "}
                    <span className="f">
                      {"nutri_level"}
                    </span>
                    {"(fields)"}
                  </pre>
                </div>
              </div>
              <figcaption>
                <strong>
                  Inference pipeline
                </strong>
                <span>
                  Two gates around the Donut model.
                </span>
              </figcaption>
            </figure>
            <figure className="nu-slide">
              <button type="button" className="nu-open" data-gal-open="" aria-label="Enlarge: Camera capture">
                <img src="nusca-dev-1-capture.webp" alt="Nusca · Camera capture" loading="lazy" decoding="async" />
              </button>
              <figcaption>
                <strong>
                  Camera capture
                </strong>
                <span>
                  Screenshot from the running app.
                </span>
              </figcaption>
            </figure>
            <figure className="nu-slide">
              <button type="button" className="nu-open" data-gal-open="" aria-label="Enlarge: Crop the label">
                <img src="nusca-dev-2-crop.webp" alt="Nusca · Crop the label" loading="lazy" decoding="async" />
              </button>
              <figcaption>
                <strong>
                  Crop the label
                </strong>
                <span>
                  Screenshot from the running app.
                </span>
              </figcaption>
            </figure>
            <figure className="nu-slide">
              <button type="button" className="nu-open" data-gal-open="" aria-label="Enlarge: Analyzing">
                <img src="nusca-dev-3-analyze.webp" alt="Nusca · Analyzing" loading="lazy" decoding="async" />
              </button>
              <figcaption>
                <strong>
                  Analyzing
                </strong>
                <span>
                  Screenshot from the running app.
                </span>
              </figcaption>
            </figure>
            <figure className="nu-slide">
              <button type="button" className="nu-open" data-gal-open="" aria-label="Enlarge: Grade result">
                <img src="nusca-dev-4-result.webp" alt="Nusca · Grade result" loading="lazy" decoding="async" />
              </button>
              <figcaption>
                <strong>
                  Grade result
                </strong>
                <span>
                  Screenshot from the running app.
                </span>
              </figcaption>
            </figure>
            <figure className="nu-slide">
              <button type="button" className="nu-open" data-gal-open="" aria-label="Enlarge: Result on mobile">
                <img src="nusca-dev-mobile.webp" alt="Nusca · Result on mobile" loading="lazy" decoding="async" />
              </button>
              <figcaption>
                <strong>
                  Result on mobile
                </strong>
                <span>
                  Screenshot from the running app.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="project-dropdown-disclosure dev-dd" data-dev-dd="">
          <button type="button" className="project-dropdown-toggle" aria-expanded="false">
            <span className="dd-title">
              <span className="dd-icon" aria-hidden="true">
                ☷
              </span>
              <span className="dd-name">
                Advanced implementation details
              </span>
              <span className="project-dropdown-badge dev-badge">
                3 sections
              </span>
            </span>
            <span className="dd-act">
              <span data-dd-label="">
                Show Details
              </span>
              <span className="accordion-chevron" aria-hidden="true">
                ⌄
              </span>
            </span>
          </button>
          <div className="dev-dd-body" hidden>
            <div className="nu-dgrid">
              <div>
                <h4>
                  {"API & Client Behavior"}
                </h4>
                <ul>
                  <li>
                    {"Image submission uses multipart "}
                    <code>
                      POST /analyze
                    </code>
                    .
                  </li>
                  <li>
                    Non-images (400) and files over 5 MB (413) are rejected with the API's own message.
                  </li>
                  <li>
                    No model loaded: the API answers in demo mode and the UI labels it as demo.
                  </li>
                </ul>
              </div>
              <div>
                <h4>
                  Inference Pipeline
                </h4>
                <ul>
                  <li>
                    EasyOCR reads text once; anchor matching checks the image is a nutrition label.
                  </li>
                  <li>
                    The image is cropped to the nutrition panel before Donut reads nine tagged fields.
                  </li>
                  <li>
                    A second check rejects output missing the core nutrition data.
                  </li>
                </ul>
              </div>
              <div>
                <h4>
                  {"Grading & Delivery"}
                </h4>
                <ul>
                  <li>
                    The server calculates per-100 ml values; the worst component determines the grade.
                  </li>
                  <li>
                    The client only maps results to colours, tips and charts.
                  </li>
                  <li>
                    React and FastAPI ship as separate Docker images.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
      </>
  );
}
