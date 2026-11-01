
export default function NotesApplicationProjectCard() {
  return (
      <>
      <style>{`
.nt{color:#0f172a;font-size:12px;line-height:1.5}
.nt *{box-sizing:border-box}.nt h1,.nt h2,.nt h3,.nt p{margin:0;padding:0}
.nt.project-card-item{display:block!important;background:linear-gradient(135deg,#f6f8fd,#eef4ff)!important;border:1px solid #dbeafe!important;border-radius:1.5rem!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}
.nt .project-card-header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-bottom:1px solid #dbeafe;padding-bottom:.75rem;margin-bottom:.75rem}
.nt .nt-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.nt .nt-num{display:grid;place-items:center;width:24px;height:24px;border-radius:9999px;background:#1d4ed8;color:#fff;font-size:12px;font-weight:700;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nt .nt-chip{font-size:.75rem;font-weight:600;line-height:1.15rem;padding:.25rem .75rem;border-radius:9999px;color:#1e3a8a;background:#ffffffcc;border:1px solid #bfdbfeb3;box-shadow:0 1px 2px rgba(0,0,0,.05)}.nt .nt-chip.role{background:#dbeafeb3}
.nt .nt-action{display:inline-flex;align-items:center;gap:6px;text-decoration:none;font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.45rem .95rem;border-radius:.75rem;background:#1d4ed8;color:#fff;border:0;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.05)}.nt .nt-action:hover{background:#1e40af}
.nt .nt-grid{display:grid;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);gap:20px;align-items:start}
.nt .nt-title{font-size:1.875rem;font-weight:800;letter-spacing:-.025em;line-height:1.2;color:#0f172a}.nt .nt-title span{color:#1d4ed8}
.nt .nt-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#1e40af;margin-top:.25rem}
.nt .nt-lead{font-size:12px;line-height:1.625;color:#334155;margin:.75rem 0}
@media(min-width:640px){.nt .nt-lead{font-size:14px}}
.nt .nt-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin:.75rem 0}
.nt .nt-metric{display:flex;flex-direction:column;text-align:center;border-radius:12px;padding:8px;background:#ffffffe6;border:1px solid #dbeafe;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nt .nt-metric small{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;line-height:1.25}
.nt .nt-metric b{font-size:12px;font-weight:800;color:#1d4ed8;line-height:1.5}
.nt .nt-panel{background:#fffffff2;border:1px solid #dbeafe;border-radius:12px;padding:12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nt .nt-panel h3{font-size:11px;font-weight:700;color:#1e293b;margin-bottom:8px;line-height:1.4}
.nt .nt-arch{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.nt .nt-node{font-size:9.5px;font-weight:600;padding:6px 8px;border-radius:8px;background:#eff6ffb3;border:1px solid #dbeafe;color:#334155}.nt .nt-arrow{color:#93c5fd;font-size:10px}
.nt .nt-micro{font-size:9.5px;color:#64748b;line-height:1.4;margin-top:8px}
.nt .nt-feats{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.nt .nt-feat{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#eff6ffb3;border:1px solid #dbeafe;border-radius:8px;font-size:11px;font-weight:700;color:#1e293b}
.nt .nt-ico{display:grid;place-items:center;width:24px;height:24px;flex:none;border-radius:8px;background:#dbeafe;color:#1d4ed8;font-size:11px}
.nt .nt-tech{font-size:9.5px;line-height:1.5;color:#475569;background:#ffffffe6;border:1px solid #dbeafe;border-radius:12px;padding:8px 12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}.nt .nt-tech b{color:#1d4ed8}
.nt .nt-app{overflow:hidden;border-radius:12px;background:#fff;border:1px solid #dbeafe;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nt .nt-browser{display:flex;align-items:center;gap:5px;height:34px;padding:0 12px;background:#eff5ff;border-bottom:1px solid #dbeafe}
.nt .nt-browser i{width:8px;height:8px;border-radius:50%;background:#fd7e7e}.nt .nt-browser i:nth-child(2){background:#ffc75b}.nt .nt-browser i:nth-child(3){background:#4cc99b}
.nt .nt-browser span{margin-left:auto;font-size:9px;font-weight:700;letter-spacing:.05em;color:#94a3b8;text-transform:uppercase}
.nt .nt-apphead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;background:#fff;border-bottom:1px solid #edf0f9}
.nt .nt-apphead strong{display:block;color:#242252;font-size:15px;letter-spacing:-.025em}.nt .nt-apphead small{display:block;color:#8790ad;font-size:10px}
.nt .nt-tiny-actions{display:flex;gap:6px;flex-wrap:wrap}
.nt .nt-tiny{border:1px solid #dae5fb;background:#fff;color:#4f6490;border-radius:8px;padding:6px 9px;font-size:11px;font-weight:600;cursor:pointer}
.nt .nt-appbody{padding:14px;background:#fafaff;min-height:420px}
.nt .nt-toolbar{display:flex;gap:8px;align-items:center;margin-bottom:12px}
.nt .nt-search{flex:1;min-width:0;border:1px solid #e0e4f4;border-radius:9px;background:#fff;padding:9px 12px;font:inherit;font-size:12px;color:#0f172a}
.nt .nt-primary{background:#1d4ed8;color:#fff;border:0;border-radius:8px;padding:8px 12px;font-family:inherit;font-weight:600;font-size:11px;line-height:1.25;cursor:pointer}.nt .nt-primary:hover{background:#1e40af}
.nt .nt-form{display:none;background:#fff;border:1px solid #dfe5f4;border-radius:12px;padding:12px;margin-bottom:12px}.nt .nt-form.open{display:block}
.nt .nt-form input,.nt .nt-form textarea{display:block;width:100%;border:1px solid #dfe5f4;border-radius:8px;padding:9px;font:inherit;font-size:12px;margin-bottom:8px;resize:vertical;color:#0f172a;background:#fff}
.nt .nt-row{display:flex;gap:7px}.nt .nt-cancel{background:#f3f5fb;color:#556984;border:0;border-radius:8px;padding:8px 12px;font-family:inherit;font-weight:600;font-size:11px;line-height:1.25;cursor:pointer}
.nt .nt-tabs{display:flex;gap:6px;margin-bottom:12px}
.nt .nt-tabs button{border:1px solid #d9e1f2;background:#fff;border-radius:9px;color:#66769a;padding:6px 11px;font-family:inherit;font-weight:600;font-size:11px;line-height:1.25;cursor:pointer}
.nt .nt-tabs button.active{background:#ebeaff;color:#554bdb;border-color:#cbc6ff}
.nt .nt-notegrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
.nt .nt-note{display:flex;flex-direction:column;gap:5px;min-height:124px;background:#fff;border:1px solid #e1e5f4;border-radius:12px;padding:11px}
.nt .nt-note h3{font-size:12px;font-weight:700;color:#292848;margin:0}
.nt .nt-note p{font-size:11px;line-height:1.5;color:#7982a0;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}
.nt .nt-note footer{margin-top:auto;display:flex;justify-content:space-between;align-items:center;gap:6px}.nt .nt-note footer small{font-size:9px;color:#9aa5bf}
.nt .nt-note-actions{display:flex;gap:4px}.nt .nt-iconbtn{padding:4px 6px;background:#f2f4ff;border:0;border-radius:6px;font-size:10px;color:#5657ab;cursor:pointer}
.nt .nt-empty{grid-column:1/-1;padding:28px;text-align:center;color:#7683a1;font-size:12px}
.nt .nt-status{font-size:10px;color:#7b86a1;margin-top:10px}
.nt .nt-appfoot{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;border-top:1px solid #e9eefa;padding:9px 14px;color:#94a3b8;font-size:9.5px}
.nt .nt-app.dark .nt-apphead{background:#252543}.nt .nt-app.dark .nt-apphead strong{color:#f9f9ff}.nt .nt-app.dark .nt-appbody{background:#1b1b34}
.nt .nt-app.dark .nt-note,.nt .nt-app.dark .nt-form{background:#282843;border-color:#444467}.nt .nt-app.dark .nt-note h3{color:#fff}.nt .nt-app.dark .nt-note p{color:#b0b1d1}
.nt .nt-app.dark .nt-search{background:#292945;border-color:#454563;color:#fff}.nt .nt-app.dark .nt-tabs button{background:#30304d;color:#d4d2ef;border-color:#444467}.nt .nt-app.dark .nt-tabs button.active{background:#5b50c8;color:#fff}
.nt .nt-app.dark .nt-form input,.nt .nt-app.dark .nt-form textarea{background:#31314c;color:#fff;border-color:#50506c}
.nt .nt-dgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding-top:12px}
.nt .nt-dgrid>div{background:#fff;border:1px solid #dbeafe;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nt .nt-dgrid h4{margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0f172a}.nt .nt-dgrid p{font-size:10.5px;line-height:1.5;color:#475569}
@media(max-width:1080px){.nt .nt-grid{grid-template-columns:minmax(0,1fr)}.nt .nt-appbody{min-height:340px}}
@media(max-width:620px){.nt .nt-metrics{grid-template-columns:repeat(2,1fr)}.nt .nt-notegrid{grid-template-columns:1fr}.nt .nt-dgrid{grid-template-columns:1fr}}

.nt{--dev-acc:#1d4ed8;--dev-line:#bfdbfe}
.nt .nt-grid{align-items:stretch}
.nt .nt-live-col{display:flex;min-width:0}
.nt .nt-live{display:flex;flex-direction:column;flex:1;min-width:0;overflow:hidden;border:1px solid #dbeafe;border-radius:12px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.nt .nt-live-bar{display:flex;align-items:center;gap:5px;height:34px;padding:0 12px;background:#eff5ff;border-bottom:1px solid #dbeafe}
.nt .nt-live-bar i{width:8px;height:8px;border-radius:50%;background:#fd7e7e}.nt .nt-live-bar i:nth-child(2){background:#ffc75b}.nt .nt-live-bar i:nth-child(3){background:#4cc99b}
.nt .nt-live-bar span{margin-left:auto;font-size:9px;font-weight:700;letter-spacing:.05em;color:#94a3b8;text-transform:uppercase}
.nt .nt-live-frame{position:relative;flex:1 1 auto;min-height:440px;background:#f3f7fd}
.nt .nt-iframe{position:absolute;inset:0;display:block;width:100%;height:100%;border:0;background:#fff}
.nt .nt-live-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 12px;border-top:1px solid #dbeafe;font-size:10px;color:#94a3b8}
.nt .nt-live-foot .dev-btn{padding:.3rem .75rem}

`}</style>
      <article className="rounded-2xl project-card-item nt" data-category="developer react frontend" id="notes-application-project-card" data-live-url="https://jnotes-application.vercel.app/login">
        <div className="dev-top">
          <div className="dev-tags">
            <span className="dev-num sf-number">
              01
            </span>
            <span className="dev-tag role">
              Frontend Developer
            </span>
            <span className="dev-tag">
              React 19
            </span>
            <span className="dev-tag">
              React Router 7
            </span>
            <span className="dev-tag">
              Context API
            </span>
            <span className="dev-tag">
              REST Integration
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
            <a className="dev-btn ghost" href="https://github.com/Jejetrs" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="dev-btn solid" href="https://jnotes-application.vercel.app/login" target="_blank" rel="noopener noreferrer" data-live-link="">
              Open Live App ↗
            </a>
          </div>
        </div>
        <div className="nt-grid">
          <section>
            <h2 className="nt-title">
              {"Notes "}
              <span>
                Application
              </span>
              {" ✎"}
            </h2>
            <p className="nt-eyebrow">
              Frontend Engineering · Personal Notes Management
            </p>
            <p className="nt-lead">
              A React notes manager with authenticated access, note creation, editing, search, archiving, and personalized theme and language preferences.
            </p>
            <div className="nt-metrics">
              <div className="nt-metric">
                <small>
                  UI Framework
                </small>
                <b>
                  React 19
                </b>
              </div>
              <div className="nt-metric">
                <small>
                  Navigation
                </small>
                <b>
                  Router 7
                </b>
              </div>
              <div className="nt-metric">
                <small>
                  Shared State
                </small>
                <b>
                  Context API
                </b>
              </div>
              <div className="nt-metric">
                <small>
                  Backend
                </small>
                <b>
                  Dicoding API
                </b>
              </div>
            </div>
            <div className="nt-panel">
              <h3>
                ⌘ Frontend Architecture
              </h3>
              <div className="nt-arch">
                <span className="nt-node">
                  React Components
                </span>
                <span className="nt-arrow">
                  →
                </span>
                <span className="nt-node">
                  Router + Context
                </span>
                <span className="nt-arrow">
                  →
                </span>
                <span className="nt-node">
                  Dicoding REST API
                </span>
              </div>
              <p className="nt-micro">
                React handles the UI; Router manages protected pages; Context shares authentication and preferences; authenticated requests connect to the external Notes API.
              </p>
            </div>
            <div className="nt-panel">
              <h3>
                ⚙ Implemented Features
              </h3>
              <div className="nt-feats">
                <div className="nt-feat">
                  <span className="nt-ico">
                    ♙
                  </span>
                  {"Login & Register"}
                </div>
                <div className="nt-feat">
                  <span className="nt-ico">
                    ✎
                  </span>
                  Create / Edit / Delete
                </div>
                <div className="nt-feat">
                  <span className="nt-ico">
                    ▤
                  </span>
                  {"Archive & Restore"}
                </div>
                <div className="nt-feat">
                  <span className="nt-ico">
                    ⌕
                  </span>
                  Search Notes
                </div>
                <div className="nt-feat">
                  <span className="nt-ico">
                    ☾
                  </span>
                  Theme Switching
                </div>
                <div className="nt-feat">
                  <span className="nt-ico">
                    文
                  </span>
                  ID / EN Language
                </div>
              </div>
            </div>
            <p className="nt-tech">
              <b>
                Frontend scope:
              </b>
              {" reusable React components · form state · protected routes · token-based API calls · theme and language contexts."}
            </p>
          </section>
          <section className="nt-live-col">
            <div className="nt-live">
              <div className="nt-live-bar">
                <i></i>
                <i></i>
                <i></i>
                <span>
                  Live deployment · Vercel
                </span>
              </div>
              <div className="nt-live-frame" data-live-frame="">
                <iframe title="Notes Application deployed preview" src="https://jnotes-application.vercel.app/login" className="nt-iframe" loading="lazy" allow="clipboard-read; clipboard-write" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-same-origin allow-scripts allow-forms allow-modals allow-popups allow-presentation"></iframe>
              </div>
            </div>
          </section>
        </div>
      </article>
      </>
  );
}
