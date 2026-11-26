export default function LeadsightProjectCard() {
  return (
      <>
      <style>{`

.ls{color:#0f172a;font-size:12px;line-height:1.5}
.ls *{box-sizing:border-box}.ls h1,.ls h2,.ls h3,.ls p{margin:0;padding:0}
.ls.project-card-item{display:block!important;background:linear-gradient(135deg,#faf8ff,#f3efff)!important;border:1px solid #ede9fe!important;border-radius:1.5rem!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}
.ls .project-card-header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-bottom:1px solid #ede9fe;padding-bottom:.75rem;margin-bottom:.75rem}
.ls .ls-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.ls .ls-num{display:grid;place-items:center;width:24px;height:24px;border-radius:9999px;background:#6d28d9;color:#fff;font-size:12px;font-weight:700;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.ls .ls-chip{font-size:.75rem;font-weight:600;line-height:1.15rem;padding:.25rem .75rem;border-radius:9999px;color:#4c1d95;background:#ffffffcc;border:1px solid #ddd6feb3;box-shadow:0 1px 2px rgba(0,0,0,.05)}.ls .ls-chip.role{background:#ede9feb3}
.ls .ls-action{display:inline-flex;align-items:center;gap:6px;text-decoration:none;font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.45rem .95rem;border-radius:.75rem;background:#6d28d9;color:#fff;border:0;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.05)}.ls .ls-action:hover{background:#5b21b6}
.ls .ls-grid{display:grid;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);gap:20px;align-items:start}
.ls .ls-title{font-size:1.875rem;font-weight:800;letter-spacing:-.025em;line-height:1.2;color:#0f172a}.ls .ls-title span{color:#6d28d9}
.ls .ls-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#5b21b6;margin-top:.25rem}
.ls .ls-lead{font-size:12px;line-height:1.625;color:#334155;margin:.75rem 0}
@media(min-width:640px){.ls .ls-lead{font-size:14px}}
.ls .ls-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin:.75rem 0}
.ls .ls-metric{display:flex;flex-direction:column;text-align:center;border-radius:12px;padding:8px;background:#ffffffe6;border:1px solid #ede9fe;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.ls .ls-metric small{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;line-height:1.25}
.ls .ls-metric b{font-size:12px;font-weight:800;color:#6d28d9;line-height:1.5}
.ls .ls-panel{background:#fffffff2;border:1px solid #ede9fe;border-radius:12px;padding:12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.ls .ls-panel h3{font-size:11px;font-weight:700;color:#1e293b;margin-bottom:8px;line-height:1.4}
.ls .ls-arch{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.ls .ls-node{font-size:9.5px;font-weight:600;padding:6px 8px;border-radius:8px;background:#f5f3ffb3;border:1px solid #ede9fe;color:#334155}.ls .ls-arrow{color:#c4b5fd;font-size:10px}
.ls .ls-micro{font-size:9.5px;color:#64748b;line-height:1.4;margin-top:8px}
.ls .ls-feats{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.ls .ls-feat{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#f5f3ffb3;border:1px solid #ede9fe;border-radius:8px;font-size:11px;font-weight:700;color:#1e293b}
.ls .ls-ico{display:grid;place-items:center;width:24px;height:24px;flex:none;border-radius:8px;background:#ede9fe;color:#6d28d9;font-size:11px}
.ls .ls-tech{font-size:9.5px;line-height:1.5;color:#475569;background:#ffffffe6;border:1px solid #ede9fe;border-radius:12px;padding:8px 12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}.ls .ls-tech b{color:#6d28d9}
.ls .ls-iconbtn{padding:4px 6px;background:#f2f4ff;border:0;border-radius:6px;font-size:10px;color:#5657ab;cursor:pointer}
.ls .ls-dgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding-top:12px}
.ls .ls-dgrid>div{background:#fff;border:1px solid #ede9fe;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.ls .ls-dgrid h4{margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0f172a}.ls .ls-dgrid p{font-size:10.5px;line-height:1.5;color:#475569}
@media(max-width:1080px){.ls .ls-grid{grid-template-columns:minmax(0,1fr)}}
@media(max-width:620px){.ls .ls-metrics{grid-template-columns:repeat(2,1fr)}.ls .ls-dgrid{grid-template-columns:1fr}}

.ls{--dev-acc:#6d28d9;--dev-line:#ddd6fe}
.ls .ls-grid{align-items:stretch}
.ls .ls-iframe{position:absolute;inset:0;display:block;width:100%;height:100%;border:0;background:#fff}

.ls .ls-stage{position:relative;flex:1;min-height:260px;background:#0f0a1f;display:grid}.ls .ls-stage video{width:100%;height:100%;object-fit:contain;background:#0f0a1f}.ls .ls-novideo{place-self:center;text-align:center;color:#c4b5fd;padding:24px;font-size:12px;display:grid;gap:6px}.ls .ls-novideo[hidden]{display:none}.ls .ls-novideo b{color:#fff;font-size:13px}.ls .ls-novideo code{background:#2e1065;padding:1px 5px;border-radius:4px}
.ls{--dev-acc:#6d28d9;--dev-line:#ddd6fe}
.ls .ls-grid{align-items:stretch}
.ls .ls-demo-col{display:flex;min-width:0}
.ls .ls-demo-col .video-highlight{grid-template-columns:1fr;margin:0;width:100%;height:100%}
.ls .ls-video{display:none}
.ls .ls-app{display:flex;flex-direction:column;flex:1;min-width:0;overflow:hidden;border:1px solid #ede9fe;border-radius:12px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.ls .ls-bar{display:flex;align-items:center;gap:5px;height:34px;padding:0 12px;background:#f5f3ff;border-bottom:1px solid #ede9fe}
.ls .ls-bar i{width:8px;height:8px;border-radius:50%;background:#fd7e7e}.ls .ls-bar i:nth-child(2){background:#ffc75b}.ls .ls-bar i:nth-child(3){background:#4cc99b}
.ls .ls-bar span{margin-left:auto;font-size:9px;font-weight:700;letter-spacing:.05em;color:#94a3b8;text-transform:uppercase}
.ls .ls-apphead{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #f1eefb}
.ls .ls-apphead strong{display:block;font-size:15px;letter-spacing:-.025em;color:#2e1065}.ls .ls-apphead small{display:block;font-size:10px;color:#8b8fa8}
.ls .ls-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding:12px 14px 0}
.ls .ls-stat{border-radius:10px;padding:8px 10px;color:#fff;background:linear-gradient(135deg,#7c3aed,#6d28d9)}.ls .ls-stat small{display:block;font-size:9px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;opacity:.85}.ls .ls-stat b{font-size:14px;font-weight:800}
.ls .ls-body{display:flex;flex-direction:column;flex:1;padding:12px 14px;background:#fcfbff}
.ls .ls-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px}
.ls .ls-search{flex:1 1 140px;min-width:0;border:1px solid #e4def7;border-radius:9px;background:#fff;padding:8px 12px;font:inherit;font-size:12px;color:#0f172a}
.ls .ls-chips{display:flex;gap:6px}
.ls .ls-chip{border:1px solid #e4def7;background:#fff;border-radius:9px;color:#6b6b8d;padding:6px 10px;font:inherit;font-size:11px;font-weight:600;cursor:pointer}
.ls .ls-chip.active{background:#ede9fe;color:#5b21b6;border-color:#c4b5fd}
.ls .ls-sort{border:1px solid #e4def7;background:#fff;border-radius:9px;color:#5b21b6;padding:6px 10px;font:inherit;font-size:11px;font-weight:600;cursor:pointer}
.ls .ls-tablewrap{overflow-x:auto;border:1px solid #ede9fe;border-radius:10px;background:#fff}
.ls .ls-table{width:100%;border-collapse:collapse;font-size:11px}
.ls .ls-table th{padding:8px 10px;text-align:left;font-size:9px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#94a3b8;background:#faf8ff;border-bottom:1px solid #ede9fe;white-space:nowrap}
.ls .ls-table td{padding:8px 10px;border-bottom:1px solid #f4f1fc;color:#334155;white-space:nowrap}
.ls .ls-table tr:last-child td{border-bottom:0}.ls .ls-table tbody tr{cursor:pointer}.ls .ls-table tbody tr:hover{background:#faf8ff}.ls .ls-table tbody tr.sel{background:#f3efff}
.ls .ls-table td:first-child{font-weight:700;color:#1e293b}
.ls .ls-badge{display:inline-block;border-radius:9999px;padding:2px 8px;font-size:10px;font-weight:700}.ls .ls-badge.p{background:#dcfce7;color:#166534}.ls .ls-badge.n{background:#f1f5f9;color:#475569}
.ls .ls-score{display:flex;align-items:center;gap:8px}.ls .ls-meter{width:48px;height:8px;border-radius:9999px;background:#e5e7eb;overflow:hidden}.ls .ls-meter i{display:block;height:100%;border-radius:9999px;transition:width .6s}
.ls .ls-score span{min-width:2.4rem;font-weight:700;color:#374151}
.ls .ls-empty td{text-align:center;color:#7683a1;padding:22px}
.ls .ls-note{margin-top:auto;padding-top:10px;font-size:9.5px;color:#7b7fa0}
@media(max-width:620px){.ls .ls-stats{grid-template-columns:1fr 1fr 1fr}.ls .ls-metrics{grid-template-columns:repeat(2,1fr)}.ls .ls-feats{grid-template-columns:1fr}}

.ls .ls-dgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.ls .ls-dgrid>div{background:#fff;border:1px solid #ede9fe;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.ls .ls-dgrid h4{margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0f172a}.ls .ls-dgrid p{font-size:10.5px;line-height:1.5;color:#475569}
@media(max-width:620px){.ls .ls-dgrid{grid-template-columns:1fr}}

`}</style>
      <article className="rounded-2xl project-card-item ls" data-category="developer react frontend dashboard ml" id="leadsight-project-card" data-live-url="">
        <div className="dev-top">
          <div className="dev-tags">
            <span className="dev-num sf-number">
              06
            </span>
            <span className="dev-tag role">
              Frontend Developer
            </span>
            <span className="dev-tag">
              React 19
            </span>
            <span className="dev-tag">
              Vite
            </span>
            <span className="dev-tag">
              TailwindCSS
            </span>
            <span className="dev-tag">
              Recharts
            </span>
            <span className="dev-switch" data-live-badge="" data-state="checking" role="switch" aria-checked="false" aria-readonly="true" aria-disabled="true" aria-label="Live deploy status" tabIndex="-1">
              <span className="dev-switch-label">
                Live deploy
              </span>
              <span className="dev-switch-track">
                <i></i>
              </span>
              <span className="dev-switch-text" data-live-text="">
                Checking…
              </span>
            </span>
          </div>
          <div className="dev-actions">
            <a className="dev-btn ghost" href="https://github.com/LeadSight" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="dev-btn solid" data-live-link="" hidden target="_blank" rel="noopener noreferrer">
              Open Live App ↗
            </a>
          </div>
        </div>
        <div className="ls-grid">
          <section>
            <h2 className="ls-title">
              Lead
              <span>
                Sight
              </span>
            </h2>
            <p className="ls-eyebrow">
              Frontend Engineering · Customer Priority Dashboard
            </p>
            <p className="ls-lead">
              Implemented the React dashboard structure for customer prioritization, probability scores, campaign analytics, and promotion notes using Vite, TailwindCSS, and Recharts.
            </p>
            <div className="ls-metrics">
              <div className="ls-metric">
                <small>
                  UI Framework
                </small>
                <b>
                  React 19
                </b>
              </div>
              <div className="ls-metric">
                <small>
                  Pages
                </small>
                <b>
                  6
                </b>
              </div>
              <div className="ls-metric">
                <small>
                  Dashboard Charts
                </small>
                <b>
                  12
                </b>
              </div>
              <div className="ls-metric">
                <small>
                  API Functions
                </small>
                <b>
                  17
                </b>
              </div>
            </div>
            <div className="ls-panel">
              <h3>
                ⌘ Frontend Architecture
              </h3>
              <div className="ls-arch">
                <span className="ls-node">
                  Pages + Components
                </span>
                <span className="ls-arrow">
                  →
                </span>
                <span className="ls-node">
                  Context + Hooks
                </span>
                <span className="ls-arrow">
                  →
                </span>
                <span className="ls-node">
                  api.js
                </span>
                <span className="ls-arrow">
                  →
                </span>
                <span className="ls-node">
                  REST API + ML Service
                </span>
              </div>
              <p className="ls-micro">
                Pages compose reusable components; contexts and hooks hold auth, customers and dashboard state; api.js sends token-based requests to the backend and the ML prediction endpoint.
              </p>
            </div>
            <div className="ls-panel">
              <h3>
                ⚙ Implemented Features
              </h3>
              <div className="ls-feats">
                <div className="ls-feat">
                  <span className="ls-ico">
                    ♙
                  </span>
                  {"Login, Forgot & Reset Password"}
                </div>
                <div className="ls-feat">
                  <span className="ls-ico">
                    ▦
                  </span>
                  Dashboard · Stats + 12 Charts
                </div>
                <div className="ls-feat">
                  <span className="ls-ico">
                    ☰
                  </span>
                  Customer Table · Search, Filter, Pagination
                </div>
                <div className="ls-feat">
                  <span className="ls-ico">
                    ◎
                  </span>
                  {"ML Probability Score & Priority Label"}
                </div>
                <div className="ls-feat">
                  <span className="ls-ico">
                    ✎
                  </span>
                  Customer Notes · Add / Edit / Delete
                </div>
                <div className="ls-feat">
                  <span className="ls-ico">
                    ✦
                  </span>
                  AI Customer Insight
                </div>
              </div>
            </div>
            <p className="ls-tech">
              <b>
                Frontend scope:
              </b>
              {" React Router 7 · protected routes · Context API · custom hooks · shadcn-style UI · Recharts · Framer Motion · Lucide icons."}
            </p>
          </section>
          <section className="ls-demo-col">
            {/* Filled by the project image card (see PROJECT_ASSETS["leadsight-project-card"] in projectAssets.js). */}
            <div className="lg:col-span-5"></div>
          </section>
        </div>
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
            <div className="ls-dgrid">
              <div>
                <h4>
                  {"Auth & Session"}
                </h4>
                <p>
                  Login, forgot-password and reset-password pages sit outside the protected routes. Requests carry a Bearer token from AuthContext, and the access token is refreshed through a cookie-based refresh endpoint.
                </p>
              </div>
              <div>
                <h4>
                  {"ML & Insight Flow"}
                </h4>
                <p>
                  Customer features are posted to the ML endpoint; the client accepts several response shapes, shows the probability score with a colour scale, and saves it to the backend. A separate prompt endpoint returns an AI insight for a customer.
                </p>
              </div>
              <div>
                <h4>
                  {"State & Tooling"}
                </h4>
                <p>
                  Context providers (auth, customers, dashboard) and hooks keep data logic out of components. A small Express dev server serves sample customers and a health check, and an activity logger keeps recent UI events locally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      </>
  );
}
