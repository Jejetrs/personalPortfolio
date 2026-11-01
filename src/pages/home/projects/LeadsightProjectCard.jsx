import VideoHighlight from '@/components/VideoHighlight.jsx';

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
            <a className="dev-btn ghost" href="https://github.com/Jejetrs" target="_blank" rel="noopener noreferrer">
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
              A React dashboard for managing customer promotion: it ranks customers with an ML priority label and probability score, tracks campaign performance in charts, and keeps promotion notes.
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
            <VideoHighlight
              driveId="1YcuRaOq3cR49pWVPmXh29hRSJCqcGhOX"
              poster="/assets/experience/ASAH%202025/Leadsight%20Profile.png"
              title="LeadSight capstone presentation"
              caption="Watch the ASAH capstone walkthrough: the sales-lead problem, the ML scoring approach and the dashboard in action."
              accent="#6d28d9"
            />
            <div className="ls-app ls-video" data-ls-video="">
              <div className="ls-bar">
                <i></i>
                <i></i>
                <i></i>
                <span>
                  LeadSight · Promotion · Live demo
                </span>
              </div>
              <div className="ls-stage">
                <video controls playsInline preload="metadata" poster="data:image/webp;base64,UklGRtAqAABXRUJQVlA4IMQqAABQ0gCdASqAApABPm02l0ikIyUhIvOZ0KANiWNu+BwIy87caeyf2PbMx77N/M/mb/dfeuuD+D/Ff9u+cH+R3AfFf7jy6ubf+j/iPy3+av+z/4/+J92P9Y/xf/n9wX9UP91/hvXM/ZX3seYn+j/479oveM/5H7X+6b/HeoF/UP8r/3/XN9jz/Jf8f/5+4d/Of91/9PaT/8H7q/Cv/af+R+4vtJf+/2AP/l7YX8A///V3rZ8HfO99L2u8NdqH3CTv/33gbtq790N3k7/UeoFwtZ43/a8tP2J7CvS9GhJYgZCfU+CsdLEDIT6nwVjpYgZCfU+CsdLEDIT6nwVjpYgZCfU+CsdLEDIT6nwVjpYgZCfU+CsdLEDIT6nwVjpYgZCfU+CsdLEDIT6nwVjpYgZCfU7YgO5Xa+vByYTx9a8cod7/WD6YW2B++sSN4gqUniJlx5A6tOcCQhAwVjpYgZCfU8iQc61KuyyHzMgBAhM1No/w3SJmw1sf9DBaB2qapWGHV8333TpsGQZEKRYmvCer3XZOIgZCfU+CsdLEDA2KS9XZ4/+NkraILrLxZRHj62Pn4AMq65VSJHKhHX+EGmu9j4kJEWndP1sWR8WHGc3k5iv3Ag2FjpMJLEDIT6nwViJvPGKfgR9oKaH2RYKcmqP1uWNrMzjr8h0HSqT89wWu2EPrrWGcoWTTW8A4POhLadjyP7ZN++XQ28U2JY9kXQDBLwfKlq8/RJDu5e97mBkJ9T4Kx0sMp20R/FpqETR9Nf7uTIrGNdPbrS5D+PTLzwocz64+hZ0cyLDis6jMpHoS47avdzG474J2tFG/uoDsh1muo7nYXSc9KGAAJPz+aYamHZUVjpBoHbXBIXpv+cf0WNykzuQ0Ep7gMgQR58gZ/wW/vYsvyiAZyfl9ZK4r+dkfAqPASRNcoz3yWAF1MzkQMdEBT+uLAdcMzokl/RsJ9anKKGkLYuIn9C3vdMFY6WIGQn1O6f3FJPq1rRHLUMdJpEuMQi2MCjicsgYK9d12iS1PAslQWAWLPjhrl1OWj7YMWHZPHGz+82QP2pnxUncKseCKo0IsCJgn1PgrHSxAufQbEw14RR8CgmcsYmAEJKx+xHyH2qFjuRPW7nPte/2GNj3CIojuC2kW2ULq0GrUOAoW3V1YsAokkpzr8niMliTySWqCSxAyE+p8EG82XM0oN0SnsPvuBpLqqcey8Hd7MuXF1/bRVeiOnfujRJf73wdktbIGRnjkzWrRjLQCsgHjPzBAyE+p8FY6WGaKGwGy9ASY0I+YGspuavvZILCLn5BudJGPf+v2jG6Mp7cvqNz87JNFBwOhkzowYwXfTRhiDIU8OKoksQMhPqfBWOlbaXF9MFStBz/9exmUI+PzRyLl89rGYeRw9ThPJVVezGwldW7CtXhvrebeRZcv32laGebncLRW74XiGOwaEjXovKNQRS/3433HwVjpYgZCfU+CptwZk58clqVhWTuIoII0eyVHprQCHtPrfiOFIvgXZ3OXEN2nqnlKxuqX9HdemOxZtlsyfaB9AOjinvIAUZh1kPsAh/cL0kJl2vz0zYKx0sQMhPqfA9XkElzPPQcAME1npOTdGbdpGgCvFL2R+RKw+gicUidwW3d5msZZEfcOYoFsbK0CAuPKwuxAbB6/5db6cPPmxMiXGO4wMexKaFWyZ+p8Us1HmvUj9wnJsO1IoAbYJLEDIT6ndwMarsdNMT/21ns7DvJGebGoD0fChtUuLy9kWJVVws6q00uW5klMcNaT2w1QI7R7yuyMDO4AmPR1unj08NishguPc23uBeeRr0w+IrAdN+z7mqiHnVigYKx0sQMg/hl2OwuuwbyiFvM35ZnooobwHJqg8wIdsDsC58WKCFUxhCqSXCcPmp20lNhRu4aGTJ+r6lFUPkDKrpqQT3IyaVBNDVKD2SJarnvirzAb5bO+FzXOYLgURCDmYamHZUVjj2n46w7lf444j1cjfzzAsYgl0Wlz3jCVGo7eXdFqzui1FEfdfrVaVjifN++PuTmhH4nFltkO66OqihkCg5uaiD/4Hr4GezPyz4+gqVFY6WIGQn1O5HG8hNvF2jumhC7dvV013HP4b0vrhaLqJtMATM/kinPn5eF6lV7L50/E03LBqv9/MfH4Kx0sQMhPqfWgo2Yd/8zr+2OrTO/4QMhPqfBWOliBkJ9T4Kx0sQMhPqfBWOliBkJ9T4Kx0sQMhPqfBWOliBkJ9T4Kx0sQMhPqfBWOliBkJ9T4Kx0dAAD+/5aLyzz5gAAAAAAAAAAAAAAAADRk2YDDR00hzSTIARTtt4GOhTdM3eDty4v4ULuLorhxIlYPF7x+k93j08RhgWzR8sNpkPUbj8f5ATrryJkj+Gv9/arzN+p1O3DrB6miKQe00gNx4ng1tj0ufcZqeUqrVDP6zhXvix8RrT9Z5vsdmrWzKak/KwNBhixyNXzUqP4PWCKvNIQlJ36z+egDXFXa64kkD02OkQ+rBxM3RmT+cIrkobtl5fWJ24DXjeYW07d0ipDhQhHHYAMGHmNFn/ypnjQ/ZBMvvTB/xtzV5TrvwdW+f5splIAAFHgPByu8EZuHCMGVUG3olAxDOEf6CbAtwGE0dCOGDShzS30g6OvCMAl8c/r6OeIG1eSQsb5cSqSF71bdyvu/ThgtcuM4bfM2l17W2U57SliYAROPdwqJojP23fOYQZ6rSfi8JprxIhKYJGkjRuvf6JRi2S3Vj/SXZwt9emPstyQW+odZqqcE0hp4MwHv/CygGyizmFxBiVEG8muu/ymr2mHhFS3L6lh6j3mWXRD09ofHgQkfcWPHVX/pgr8kecwx4Jb5mIF79BiWbLgfhrwavaMfyg9JsLhiOFtJASRBOJ+Xz44KaGtFT4cVBHNND3ptYcgdJzbymwaqkKJmjD/yfNHupt4CcRq39utRSUR3qUVZL1vXQFGe3NbxUXlrjIPxte0SXT0B1bwj8gfXqVPMokdk3/yIxu0HvChGUNNxxQG2K/094/ccd5p+LOZk9eOhFbg1wSdn3KNw/fl7OiW+FPy7vKc06/+KoosXknVp2XcQ/JYMpxiwhf7S+38bcYvej3MkOiYXuA+2EGlOH61fYOw4XmJh5fJ/pXpF/EyUENYvg0RDVv2fHB/NjensEq5W0c3FM7pLy3hLreqIliSBWvpwaqYxOGWaVsQdvIRN+BBsFhSkW1eKhuLg+Kr/v/jVNaKS4dnuCmQT8u020fCNnmEccTACOsAAfVrjH1A5Pd701CgHRSdXTXDamHtRraTduAZ7Dr2WdvnWPpne7QqD5tM2CM2adaMAx9jx9HHiFtyBZHIpldpnHC2K3HbNgtOot6StulHaORwVHU31YbhU7GNfahLheNmaSntF8936eFuEBFRdom0BWpsHbB6IO2++jm43ikeTBAnrB3YYtU/AvCyNRlUZo3CVCn7GSv9NRsOdYvSfBByEjjYCZ+8mJCn5gxWOOk2Xad924nRPxCXDNa4yy6VKFpNcMGIYy7hzwXX//qrIeXrMGrvW1hCAvAR65tE7BxXq7xWGnA/N16RQI2NkkF6Om0wqL/VPx+gn1q0EcRFD2yIyVC3EBrZ0l3krrvRSlpvmDWSZyNkJT9watLc7mwGGplH9/dzcsWdKbsE97/Ddtfz97l6agMCQx3D2GJT9UoIRlg3TTQrK/3zl34c+db95Sip0ooR4mSjWlTC+ofHxvzkpLa8OevYDFS76iK89TkkeA85rKsZ1BN+a++0fv3wsrNLlv4JHzU3xtVlQkkQ8g/eAOsQKmzp2sIQfINTEc6OtKm3Kx+xwsd/icLf/lgOoxGU+BBPAZHLGv1gEafdOw5n1Mid8ElIRd7OqDF2OawnvncHQmCWppW5LRlAa/ch94xDw5vUTZwMFMpiLrxZliqQZHpZVq1E6o14sJWMiMRPFb6orruFMpsoArto7+KWRendtS4w8v15yyf1Ai8RTrtriO1lsfc7xIAHyiilfZ3Z514P+7KEaf9NfyelUmpk+SZ79SfF/nhFdRXwDnGhR6EZXomy17eLFDAYNTBn59iftsjHK1On195ugWwCRK8AkQ2EuD1HJCIaVhJJ7/WH7ZDIfgZdwNFWpDKLyULPQhGP50K9kcy/ES8vxiXtl0K0LA9B9J2Y4jFGpkno7+fQYsB/CtUzeOxd7b1NX0kqWruOZa4RhVOwJ/CALlGB/M5OdPrp4BNLFtA1HKrmYf7L13UF+7s2spDri9EturM/8c+SuljesTXM2baanwB4vAhZbJN1MbH+AUMALPGoiM4q8MOXP0UrQbo5y/HRrequUT7ppph+387pLcSzx0kiWkKcdB0XLHCw4ceeJmTRqIXgjKh3/JRP4qKqXayb0uvcCfUolTjNa6PLOY0FmuHSePc+21dgLDa1i+pF2Xad6fsniLt8mNuAS4QKMIbjSGlkKLE1FrGgSW/KKsKUkPOQPzjejjqWsBYiYSMXDmVEOXUK+9JSehTARQsoUO7QeNGHmrp9hWZTWj+iljBiiRn14vxOaefWtbnHG45IAQvPqznUmD+ZRlJ+odmUvI8rv5nMMrZ8itvu/OOd4xFAuX/frS7uORNgNcQK9esxv1Rxob4t1WTKqHVCqMdzVvOMyv4/U+GohEaOI0ypERbtzGp5yyM2WTb2re8JPM/sIKm5EvGcvsDJQT2fYzkA+qfUxazZ6Sr/fC/9qMMQ2+O2kzoCNYkt0SRlUm4/Hkn4XmXV7FFSU75/W2ARjJh+ejzvMj7AElJL7n3xMWpGp+cG1zyTOOAfMH4ZNb+5PnafvsDEbi9MYOtcBTt1kGVN2jUswsw/EHoUPQ0hx8+weeL9qj/7MZpgEbzhxypE//Cs61S284xtgX8fzb6mW1Xh+mIIqrr1zLAPXe7jsKHcrgoICdvSBselE+04H9LfL6aNO0zFiFqOUPxX9YhRC35cGNobENxuKSzhKWYgDxpfhsXnjKYcRF5px8cNpVliCiQzWxTscYJxzpVzFY06BsExKfbztboOzNGaprgzvjBe+WXqC8js3M8U/PVd1JtsJmzzki0348yOx+mH7vUaOoiUXBn+dGSWtgurhxf0RnDu79yhNNtQgErKWUCrQDSyk0tWBYc3t0FyJxtACgvFkuzSmak+YfyTxWCM/UkUf2aF9w9unhVF6ZglG0QAthJWk1H2zeZ7+LKJqgGBAcic/0ZjxTvlZGiMLs9HKI6Dg+kY5NOscK0blR06rnNb/SJYyiuK5nBgZcSAy34SC3miESad1xC4hcMiUnMtlY6UZ6w0cK1XpeaqEXwaQL+7eK+nvpvw899nqM6ROqjqahXkdhJGm2TZEZlVAaJdtPGifPtg29Gp2eMZ10z0cKUvAJaQcWwCqYi+a6WnjQv9utTikot2oU3DYBtgf1izHIeIfZFAf5RIFXeWYh4jwIkTh2MhAUO337qDa+3/cXT29KQQKOE5itaO5ZQw/l5vS1BnZNLAXj4XV2UGlDojDm5ocXMUNsz8MhaCpqRmw4pSi9qhmo+Yg1DTvFULpkuiDg4dQoVNo0k2snTat0GjP9DzZ2Nk6ZerwQh4j0kylRLKbwVxURWgaLGUdWTwxbMl8wZExrmFZLWcEAOvgW+LPkVgZQpek5ncKJCkZUBi0nycB0+JvcAtU6Lgci6hmHZmQOsC/ZsjAGXUODFV7KHjN+gwOGvn1S/+Oeif/1qrlMls5dmR/UVwTj92JQ/ZDddK9jFgo9Nz7rCDvZFWqdF/jDhB3HX4wxMl2KLB9Y+9PkEs6HaQMVl+CTM+MQKov6KoudYU2YfxiAoh6aVrJNEgCsYXF9WslPCcSRpozj1GAbGT5RFhxEvSP3G7uUQasg2UMOpQoVT8F/J0pmJyf5uX0IyMBDdM/aW7xY83iEj+YZ97Pw/X10TvTmc+WX2g2OWhrMKUWmIC081Y3cW84/y5BUM3gqbsJmpDOS9Z4JnIQnIHE/4X/XZeRlzedWTtJkQGCC7RcJIomkntkZZRcseSMVS5iwzOWpPiYMy6AN4aZUN39hmgsb756eE3ysiuvbmz2UuwaszpcDZk6iXcmxE+dyzymTQIJFgtYW4BBNCeGxpI9r7jxQoZ7lxnI+/YtH1/in/SvaWHRNGSMnWCSdkbpdfwlPH0vBcvuCn0D8mZ58JqpJ/bjGI2Jc1EO78mhy5SMCmZmrL2Upl2luiL8kO9kcVv5862HRhlBOC9I/xUof14OOFWrzyigFOPD4+GeBmvLg8EB7/muTMfmoAb22WHc3WcT/cPJdMLSQ25HiOEMzMYi1Vh4w6ePqwhFlTl1cQmLAARfJLR9ORazpzT+eSbP7XokQblD+skFNNTDq6dgD813uLHMd9MFYaH/oZHGI7qPg2Ix+/cJxHBn5k4ptKJ3HvM7WNBISTvomRBrWaT1HwEOAF9PbTQ4sFWp3tDek4JCfAixGaVbv63d2Vt0+cNe60WVW8P/EUs+JeyH05CnilQlkhGDebiE/pYsriiHx6pGmWx+tLLqk+Zi4xSVjTxLimXIBhGRwABEwSI8R1POzULmevoKjqNWsig+NnZa4KL/1h7DtDBEWSGNtc+FpiDcuhMu/4ViHbMz1kkDvwDEWr78JYq7YLWzqgqSaL5mt2R66G6PfWS7N/TZV2K8WyA2Z47zusZIjLpHkEdbjU7h5yo7W7TFAp7pm1Eo0i0VD/ZJ8WEeTrBrl9Efl7ja9DIdRSljlD8CbXngeLA/QtBz1H+cJbFW3hm1a1p4zLezkOq7ekHnYO+GqWlMugxtgXE0qDhG7YQZ0sNZicfYa0MUIl4yt/UCyxszeTIYqC28su0GdvNUR/NCAXPBGii4k8cF27OGl1K0G9UIZSluzqdx0tJW5gPJDZdL+/+dPpdK3U7BRDJjrKjfxitQ9VhpMYWiKIAYszKK89hMoJVxVKXw43W1GBZV+EAfBlWWCKMxYRnteD9wSgMZV60LowyPMv2QO2AUI0XUfYZdA6tQKxo3hwyuM0ZQlr6knezVq6fb6dEyMkaJLGQiha9h//453/EfNaD6pPvw3yj/g+I07oscCZn5Fw+zGcw5wWMTXIxgFC2wktcTEQ861brbVtCLOhNMbY7Au9sRGOo+Iwi+gzo+MY7rMHu6NuUa4iT/esR7d9ZI6uu0iDbsocHYLmx+r+bp0HNuu6MUeZP9afZXBbOiJZiexAkga75ZAnyP9lBO1L44KIV6iP5Au0dPo0KKrnwiDrTaQUotWtUH0OkGh3EIodoig54AVdhTNEHRzk94Ahupex3SyoyL9ZvSlPox0eeDGMhq2k9tzLyTdgFNaH+JsBLWlYLlUpKhoEhOHZpaul24UT+Oe+zFawURHLMGgVVl95FxYp3W6FkdA9jRA2ZitlWr7XRuI6Uaq0cs80ytpefHJsGLnUBuw5rlFX0HBgyhuo9SoLWCP9N7hAt8AssN2TTd3nhy/L6fQ/JXgNzFNI6AQAyjXoczv9Rl9ik+o40eDU24sxnEWuQ5M9TGsrOgXlwUfZrRyTLO3FvKrJd2oBLQAAJzc2YoIKnF1xOfXdG6cjkQSoGUeLMara83P5dcJABdAKZFsQnkAEU/ydypcKC/4Np7vmh+cc+4jb8SiSxKUJhb7HYOkQz4oWAoDS5168+RjmU+ayt4vPvHyIVYyRlzEKnJ+QKX5ArCr3SQZubIKgVU22r3c1LkdHpBhEeK2ev6VXSX0xG7cMmLP2UTLshaTdcVCj4kZ4k6fmlmt8J/5uPv3AH6Eck9DwhvetPsZDit3bWE3WR/UYjk442vQyabBkfDckGM1Auue9Bf3aiH33eYJfGYND/T5S9IwZbHFZF+5TEAS5/M9jEpI/wmPM2E82QBXALrCSr0ONBjzizHeDPTAc7GPKDNAN+oryzOXuy/D3SBSIfP7AXVm8in2Kb0FjHsz4CFCGQ8rD8tVV+vR/5NQXTfEBbu3ueNNnSG2l3h4VQC/Fw8j/Iul+R5G6tyk6aDMb1JpGLo+C74Alf30FV3XaIx0Dqnzzhe7+canl1hhaNHN+DPNDktmaDeibZYTEqU5BlzpQxoL/cSnlvs25fCL6gc821e21CrXAP4Zc7U123hthhGHfs6/AAAFjmFcVYAQuJIerlMo4NLQAqFMaOJOnnLCnxqMW3jRkFWv5htwVCubCfw2dpHNDvzyholGJoNvq+35gvNNAd+WRw2sre7oQWV5nzldqm03jJLzrwwmW41/GM/wLeSSnqPq9u6/YicT/zd7u1FD6wR7yAXGtAZxXE6wDy+bj4lePyljmeax9jfMwy4/Gr4dnVCiSEoDi8q412SFDKBGpTkJVWigAf3oh+o6xj9tjVGRADgOsef8smlyaDz2eRrOEk1THVld4o3avet5lXTqwV1J2Rhfn78JXJ0W2UmTnizAov+LF1PRcUkv9ofzi64Mu8ymO7t6ODCLaF3jccDHAe8Ri9EBHqw9VrfhDZE1sd7O0jfCtVfTvMCFpIcjrl83f97GGfj6DFYNbV6pySzrtEJXskGLGTlXaHFuHJljA3oGacJbKcaz68wTIbcstiersgPwaOp8oAxtT5/7QzwZqaDSb3+ksmfjmPn7corRPW2Dr6ANNt+kidqAeatGo68MT4PuFTq05GZHcacvt8T/4MxBZnq0fryzoBSEHigkGlmSZ48ru8J5amB+8kI4i8Eg1TulPUNd9IZOn2Fzy4zkiDQAkBM2WLXu5Eb4Ql60a6yQXig6mcFPtqpWN4pL9/cN3iZPlGkGQFuT3VrDEc+T/vWeX57gm6yH/bsOWcsXdyIeqXhxNly1fx+0MJ6GQShsXd0whMvcwjjVYpCPfTAzC+KrA7t4jJY+nz4QWiOkhqOMMchHjdpG2+sRzbOIplY6+WoZSiBu4KAZ9XgPl0CA44m4Mzmk5dwlbSzPwrbj+DDi4ywlLvqHHb98/lkYrZSY469xrFPdui7NC5JPkJOYBqh+9sq51Aw48T5E41z3meffkTMunQCODI3ibqLfzNNklZnpTW4Hto6x+NSwWrZkvwmCV8F+xYrjjQEAmHavouhO+1skppOmwZhlxblUdCO7cx61371KKDgpLiowntNePBgJW30LPcSswNKA/9JWgvQn0j3Q3Er942fpylrFqo5twx6ZhIXoi7nV9uqUv3U8UtVPBHw7Ru+q/ujOu+DGsNyiKBDv49sOEV/qVgmw3RMchK0NlO/NhsZkVmaoY4kpwg4BC3QdGge29YJ6WPptLAOaW2YGMI3HGF7vioWpJjZo7zuM8ooJwebCH/NGkpQpyoAVnxCz1DerEHfDWJglcW/vl/bYy7P/6zIyEfZS7/aIRb+yN90OOPNg4sz5FWC6PgmMkAhE+Q5aRsGB4bAHCKn2fR4Z7n2o6wJ0YBI4WQ5z2y7oT5B70GCO33i7+mBu7akvlK8Zzi+9cyUmyW85ILtniUZ3kaBgDQtaAaYPBbq7WMLGRopk+mVsYYMiSi5f6rXU5M0tsABi3CPsO05xLnmjaC1Yn2sEgoJwrq3cC+ljTlm40LA2a7K3cOfzg5IIKVrkv2U8b67aqEQo1oxe5U0Wx7HKfitLAMOoqqOYJ9nnAOBLg2moOjH2i+x951oBUmsbqd118gReIFMy6KcSs8r5CRosgrkEU5lmb/XzrGfEbvq+AqL4HHuYhbpHPm23UKj5AuSZ0DRQPj1+KbvXkyJ/3HMNKtglLLcsHF2CvtgL8rx3gFX+m+5/gDA1G7P/MzTESPQmPc9lmiD0SUtiMRJ4bTbuIA8C8uTE7JMLdC04PfCq0+Ga1EoBp4gTYmv1+fZxALABlGBa6Qxquonfy3ao6VLdtqe6DQvp6plgKSY/76H+NEOsph9DTYbDRQ57ZIbnWxWtVdPz+LUpBBjfhRFc02Jk+RfHk6mk4A4T3hryeSfCm0Vw4lRu9WlW2aYLxXoEqYZ9V5FbqUNnGp8jMMcv1XEMi8lasTUFhKYQr+ADKjlzqsClEdgDqk1XyNEcNtwGtOT/0kV3SfPmfGQLS6QCWTm1FuITvyTkdNbwHaud7msW21G/Q+24tZPedZSd7rNmGDmREzcdP3CyRccK65xCkQ22A6AiT3GCfyv4D6x3ypmWa/6o6hj9f9XkOrHHAaG73UcHNTzpyAT/n0T4nEL6mYYA2CAITk1VwyEsVfkioivk/Q1WABoUuHemjcE19E19eyRgs4285B4caHCiTXVJ9zyxvaKWOPF2M2oMCDcUShdEnpawvWHjfwVoLuZIYjL21wPV9jI6/frYRJBOeEoqY4nLpfFB+CHly9Y0ez6Tm1eMzBmb17/rIGneEXgNzufXEE1/jmAtiGkC5ukdHLgKbyhnS4ZWwLEsigIc9lSQYCNQOBte4XHRjZ5+CoGLdLPMpRUh+0LeRFoAXTE4Evi9xO5YN35Xr0skzv5lLSVSihJyYPl4kwQDL86gB9tV2UA/0UKLeFPHVFBdPeMHr7g5ZipThx53oYaPNz7HT4ELn6lUcEhj1oBkv/5QvE8rlhz6hXkGqXVp052iW/pNNqWgR1fWmyZ7tUH1LLGt+zTnYPmfsINHPJTiLUKN6s7dxnxnWIPHtY6veaVDOA44713H+g1SLt3muSO1sJeYOhMx/k6hxno8KKMEnaQnz/qB8KgmsnrTTMKKFByClMyp4Sp/zRZ33pprLHILinykTM3W6rkqaN3N6E/TQBfzJ+A+SNzqHggteg5AP1G8LouKmIjYKoT4C3HXabXE4M2VPDRVihKRgnQq8UoDFWSF02IoXJ7Bj3j54sxJOTa0S+H/5RKJ/ZNGbYw9VmOiECiQZRiv5Dfx0CNN731vkak2UNvPiA0bkcFc1ppKf05jBZuapeobKjD5WV8RTgZ5PI2u3C94NdI77GpBqYEcUIC7Ij0CzDssgVlM68XBHYfyBkR0tCSa4MEFFUQp6q9B4BSJaDrme0t2GocB4zHds/QYgqLPmIv7FIye1vtOpwe0fMMG5r+3oUJ9OkroH4RY0Cb46x/U5k+d8S0+bIcf5xgcBi7y4QQ0h/JVORnWv9CRJBeh951P1P0TFx8LgPruUHTf8wSdwB7cL7rFVlnBnZKL6W0ioKW8z6BuEEy0BI4FvhYaA7ayqhVj8b0AphUJjgPJ0K7oeugpwaKVb+ZisRFoY9xu6yFvobZ9ZzvSNtjy/gJcnbI5jwBg+mSjLxj8ED3/NyUzn33z5rFrDGmw/FD4rn0jNR2OnaAg0bJw1GwHcAf3IXAL7t6KEOMZeC5slBZvRg9klL21rM7vuJS9adgvjpIYfjlSwr4Yjs8TNMsABWyrJ+ctIUjIL6jCMTU9oHYsbQHha/KWRg3FpV7tLmWddEs+pDHiSqjqPR3B2Mqrqz3wcNhj1Cu26f6ORFtCzzwmmxXNxo0a7f43zAPMZoAjP3wIzc+syIh0XA1xnKlXiHuPkz7DpmZgQE4c46q3MJhlD+8FdsBMAiBGEAvKiATeXYakwqyU2kI9t8bO/v9UHoXmY38mUHej6Z0fuwjjQ8/x8VuTw3X1K0Q2I2RBcJBnYcpRrWNk8+qDniqZBlQ2V3XtL4zr15xleq7DdjWBl/hLPQ+xfwbxo3IJm7r4qMIDqQi6T6ua1m3RuPc8qsLZA5XSKzL1s7oR4RWq6fQQRV38HUlDFxUQ5qjEbqWXmhsAdtsKEo70ItreYmzH4mKRbVpIjhHYJwQz5jj2sK0OOCW1QMdtuWO968i6fQDZ4k1x2ZTcRRbOVnT0WvRJxyisyV+ADqVf1cg7O1adNvuNYsUJqID3Nl0b4ojbYZEL1xkLT7T7/oaw86xEfpnVA/se2HdYYxMSDBpujijGhn34q0+PxQRWwTf5mi3c4CKeDLdTpwY4D+UdqH2X8QI0MzPGZVswa5FaCesctRLe6IKPinWcFLPLktxnlDWBrFMIB1tjuhBf2sI8reIQtlMAj5O3rl+wB15HFijYA9V7uJ/LmXpyU4uAgnZ0m8Ypq0i78Pm4O4MjhNnZv+8mMVZ22tD7CgrLziNhwppjfH/fR5Zzel44llONQMIHS52w7WBzN0vqp8y5jOD6IThVHeR/KgCLo2hrz0JIo+YksL/apcH0knENEbXQXyi0ajbTp5zFpewiPBmQaNuiQmn3Zf3FPjXDndS811LqcKtxynPLt1NRLEKz+ZjD6tgXVi5//I9Dl63n81lZzdicJrHM9fSL2s+Ob3eMAMikYYyytUDS/8bbJK0dOyYf0zojkCzz63YYumvx4WtA6FCPX8wP0denSny34K5sGK5HcyFQFxmXbPClMShoHd7mHNs30m2YiSPYuK1VKshMVuPSlayeIuq1pDOAKCHlc+LuWwCeLg2QGyM7OLPzjjnZ9MvFDCxryDpvNw/mP/cuFZjRDMNKVNVrY1EQPb55EdiiEdQHyVBdTNoBTB6TNyiFV/0aRqyDgnosPdsc9/ZOiuocRKgRqHEWqVy6Fw6rejPEaZWjqxG8v2KEF9x9SYg8OVJrC8WYjE9U7K8jV9shrGS53XWMDkZSP6/1vCXQMvTut9WVpA+mIckix7FWDaGHDa5R6hUYswb0B3Z/Fdns7gojdIpQ1qiLrn9omxqb0wxrPKiev7Ebynxy+ke0XPGYwKIA5WiNjaEn6XMMolw5iJ1sMGFf0Tc2dYPCn+mHXzXX6gOX2rSYNs3+qZ18yTGP7cqEWtgHD1153TzB0myJPqY5g980jpZfOxaVgV9WiM/yBkzzu/e4kZGpVD16XDUVkmDx2eA7RAIUy02fxXy/GpaciidyaPlq4ploq4CkHG8mBv1j1ShXfabOCUhKTrNk0ljKZV8mwM4NrwikrEF3mlnYsqIYd+f1lFoxaJ//P90yawOPn/DQ7NJJTn+5Ajb3xW9Ac2qVXWoYrD/I9mCbrBjZ3AUUDSMjDnXOOEt8k94tbu8YXSRElyQC3n0K1Ri/gUMc+dLMDDPE6yOd/lMfZfhuQuAa0tuafJFuO4OCilgLtLaW7haGZI/kseUY/f2C4YsfOIpFm7FDMCxNfHeOu3azPGl/2sP3v6W4eyp+5jSlk3EBDJPto5fgvHf6rF/rZIRYTcYEnNoi5u5uLIAodLFpAGDJo60+DtTjq0AnRTYp+BA3rhSWhJyaLxjRhUaV0gxnkelrNiwYVlPpPeiIRSk9ehBQf3uq1VZJIFVjMtvSHiT5g4chQ4x7khrkE9UJLNxZu0NFPKcOojlvpu5ItNDaVROLEnG/2EomF8DBiygIdFWKHh9Wr3oMXe/8pnsvzN/i/aBdrkBSGsgHCnUbWGwUBfWv3BirhE/jY+Fhnnpcn8frYFvDMbLMc8DazcVBhEMXxlGohgzPq8ZgvkCw8XJy7JrZ4wVY3JbPsjh0lhfGcGOvBrtJ9v88qMDpKJkXlESj2lCPauJC3WJjaQ6zZ0K1BQHsC/qZruCAb3kzfssEsAHtN1PLoEQMqYRoAMOtZFzSvEMyrRYn/b/oG0K85ZEAjDoaWef+HCJucsrs0dU11F/MyVNiZ9UjELmmsqr8g/QGkYhg5jKmtKA19gEZbirknLWSFuSl5ATCczGhV6Stum6anfnB9qU5KGjchWQWW13YEU/Kwqfvt07hOu+SDWfB4vf0dMz9dIYb8KLUxRpfwrYTWs/DPIVb9sfD317IVk29d3rCuNXOXdASJ7xJlvGl5pxFAH+LU7s0S9D1z4a8VGDrgxuQBr+SePBf1dfE1v8Ws/gGfmwjAb9IYX1r8WRg/3ALSw0K2Gkp6oM0ocVR+xj3bKZ5V9xiYnkMskzlqjYBbXsUc8/DzMOTvdasjsCLma5xcSFm2+IKvBIZawFfnOd6wNWMMs/FxPoROSy5OclV9XfOhweTwRbpSUl+GQIygs6KvkSIsyTKgXtX2zLAjOp5XU42Bgw/4DDkJxVbPYibIMBWMyl52iKAffDIgQl7mjq+htJsEJvNFnoGDH07UZhUXSPKKWkUd3KvjTLDzDoQdjBBYjYxt6/Y8Jr6oZX8x9DUqOWNDGSqTQLp77+J1ABQrc/uvuU4I1CByrVnLSar3WeQworISW91tHcBVi6jw034rm/GUvRAH9eIS+JSpLC3/to9NLZ8f7XsMi17F3HBVGogRvYKQ5pELdZt54621dzBOXPLwYF3zNEGqJ921ty4Ooi7TS1331VxrsNicsIGWhCNTTe0Yv/F8NV3LWc/yZtmZB0KJ1A86KHwJQGkfwdKXD6ieGNn1er4AAy42iyJUV+qioa2Qgj7CttfVr4GRIwKeTx/iIUwh8XAAHzWOwpqQpp0GQqT6hBwR5AYOYBQOO4ta4O+TC5vqqnMxL6Gz67CXjIY7f8Hd/LC8cTh1t+/gIR9I4zMSBVzMVTY9dbeqiVSn9ODu7+AvfaAiJjPGjURXjQvK/Me0n3CIg/71BE1KjpeewRPCby2254B6ZBZYWddNKgMduc+DNptSp7udXgwgt0t0a/NWht7Ov19mbwTxK6lhe0eNQIlMEgH6ZK3ilZjY1eRjYIt3tOY9cOGOwVeD91ovGa+r8CTqGyn+Ed2XVDLkYl9CgWgGkMpLoF/UUQXL1+o57EXoPtG0dthtsybaBwiu6CIen2q6WdN+QZGqRGEkP3C2GdS4b7hizMy8Zixff9ZVIAPisWqDOBc+4/IEDCVwAAAAAAAAAAAAAAAAAAAAAAAAAA" aria-label="LeadSight live demo video">
                  <source src="leadsight-demo.mp4" type="video/mp4" />
                </video>
                <div className="ls-novideo" hidden>
                  <b>
                    Demo video belum tersedia
                  </b>
                  <span>
                    {"Letakkan file "}
                    <code>
                      leadsight-demo.mp4
                    </code>
                    {" di folder yang sama dengan halaman ini."}
                  </span>
                </div>
              </div>
            </div>
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
