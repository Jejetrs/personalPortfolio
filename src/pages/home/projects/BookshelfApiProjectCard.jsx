
export default function BookshelfApiProjectCard() {
  return (
      <>
      <style>{`
.bk{color:#0f172a;font-size:12px;line-height:1.5}
.bk *{box-sizing:border-box}.bk h1,.bk h2,.bk h3,.bk p{margin:0;padding:0}
.bk.project-card-item{display:block!important;background:linear-gradient(135deg,#f0fdf4,#ecfdf5 50%,#e6fcf1)!important;border:1px solid #a7f3d0cc!important;border-radius:1.5rem!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}
.bk .project-card-header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-bottom:1px solid #d1fae5;padding-bottom:.75rem;margin-bottom:.75rem}
.bk .bk-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.bk .bk-num{display:grid;place-items:center;width:24px;height:24px;border-radius:9999px;background:#047857;color:#fff;font-size:12px;font-weight:700;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.bk .bk-chip{font-size:.75rem;font-weight:600;line-height:1.15rem;padding:.25rem .75rem;border-radius:9999px;color:#006e4b;background:#ffffffcc;border:1px solid #a7f3d0cc;box-shadow:0 1px 2px rgba(0,0,0,.05)}.bk .bk-chip.role{background:#d1fae5e6}
.bk .bk-action{font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.45rem .95rem;border-radius:.75rem;background:#006e4b;color:#fff;border:0;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.05)}.bk .bk-action:hover{background:#065f46}
.bk .bk-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:19px;align-items:start}
.bk .bk-title{font-size:1.875rem;font-weight:800;letter-spacing:-.025em;line-height:1.2;color:#0f172a}.bk .bk-title span{color:#006e4b}
.bk .bk-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#006e4b;margin-top:.25rem}
.bk .bk-lead{font-size:12px;line-height:1.625;color:#334155;margin:.75rem 0}
@media(min-width:640px){.bk .bk-lead{font-size:14px}}
.bk .bk-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin:.75rem 0}
.bk .bk-metric{display:flex;flex-direction:column-reverse;text-align:center;border-radius:12px;padding:8px;background:#ffffffe6;border:1px solid #d1fae5;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.bk .bk-metric small{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;line-height:1.25}
.bk .bk-metric strong{font-size:12px;font-weight:800;color:#006e4b;line-height:1.5}
.bk .bk-panel,.bk .bk-gallery{background:#fffffff2;border:1px solid #d1fae5;border-radius:12px;padding:12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.bk .bk-panel h3,.bk .bk-gallery-top h3{font-size:11px;font-weight:700;color:#1e293b;margin-bottom:8px;line-height:1.4}.bk .bk-gallery-top h3{margin-bottom:0}
.bk .bk-pipe{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.bk .bk-step{font-size:9.5px;font-weight:600;padding:6px 8px;border-radius:8px;background:#ecfdf5b3;border:1px solid #d1fae5;color:#334155}.bk .bk-arrow{color:#6ee7b7;font-size:10px}
.bk .bk-micro{font-size:9.5px;color:#64748b;line-height:1.4;margin-top:8px}
.bk .bk-caps{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.bk .bk-cap{padding:8px 10px;background:#ecfdf5b3;border:1px solid #d1fae5;border-radius:8px}.bk .bk-cap b{display:block;font-size:11px;font-weight:700;color:#1e293b}.bk .bk-cap span{font-size:9.5px;line-height:1.4;color:#475569}
.bk code{font:10px ui-monospace,Menlo,monospace;background:#d1fae5;color:#065f46;border-radius:4px;padding:0 4px}
.bk .bk-note{font-size:9.5px;line-height:1.5;color:#475569;background:#ffffffe6;border:1px solid #d1fae5;border-radius:12px;padding:8px 12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}.bk .bk-note strong{color:#006e4b}
.bk .bk-api{margin-top:0;background:#fff;border:1px solid #d1fae5;border-radius:12px;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.bk .bk-bar{display:flex;align-items:center;gap:5px;height:34px;padding:0 12px;background:#f3f7fa;border-bottom:1px solid #d1fae5}
.bk .bk-bar i{width:8px;height:8px;border-radius:50%;background:#ff8585}.bk .bk-bar i:nth-child(2){background:#ffcf65}.bk .bk-bar i:nth-child(3){background:#52c98c}
.bk .bk-bar span{margin-left:auto;font-size:9px;font-weight:700;letter-spacing:.05em;color:#94a3b8;text-transform:uppercase}
.bk .bk-api-body{padding:12px}.bk .bk-api-head{display:flex;justify-content:space-between;align-items:center;gap:8px}
.bk .bk-api-head h3{font-size:14px;font-weight:800;color:#0f172a}.bk .bk-status{font-size:10px;font-weight:700;padding:2px 10px;border-radius:9999px;background:#d1fae5;color:#065f46}
.bk .bk-api-desc{font-size:10px;color:#64748b;margin:4px 0 10px}
.bk .bk-explorer{display:grid;grid-template-columns:138px minmax(0,1fr);gap:10px}
.bk .bk-routes{display:flex;flex-direction:column;gap:5px;background:#f8fbfa;border:1px solid #d1fae5;padding:8px;border-radius:10px}
.bk .bk-routes strong{font-size:9px;font-weight:700;letter-spacing:.05em;color:#94a3b8;margin:2px 0 4px}
.bk .bk-route{border:0;text-align:left;background:#fff;border-radius:7px;padding:8px 7px;font:600 10px/1.4 ui-monospace,Menlo,monospace;color:#475569;display:flex;gap:6px;align-items:center;cursor:pointer}
.bk .bk-route.active{background:#d1fae5;box-shadow:inset 0 0 0 1px #6ee7b7;color:#065f46}
.bk .bk-verb{font-size:10px;font-weight:800}.bk .post{color:#b46d14}.bk .get{color:#047857}.bk .put{color:#346bbb}.bk .delete{color:#bd4255}
.bk .bk-work{min-width:0}.bk .bk-reqline{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.bk .bk-reqline code{font:700 11px ui-monospace,Menlo,monospace;background:none;color:#0f172a;padding:0}
.bk .bk-run{margin-left:auto;background:#006e4b;color:#fff;border:0;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:600;cursor:pointer}.bk .bk-run:hover{background:#065f46}
.bk .bk-cap-line{display:flex;justify-content:space-between;gap:8px;color:#94a3b8;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin:8px 0 4px}.bk .bk-cap-line span{text-transform:none;letter-spacing:0;font-weight:600}
.bk .bk-code{margin:0;border-radius:8px;background:#0f2a22;color:#d1fae5;padding:10px;font:10.5px/1.6 ui-monospace,Menlo,monospace;white-space:pre-wrap;overflow-wrap:anywhere;overflow:auto;min-height:96px;max-height:190px}
.bk .bk-code.req{min-height:80px;max-height:105px;background:#ecfdf5;color:#065f46;border:1px solid #d1fae5}
.bk .bk-resp-meta b{color:#047857}
.bk .bk-gallery-top{display:flex;justify-content:space-between;align-items:center;gap:12px}.bk .bk-gallery-top p{font-size:9.5px;color:#94a3b8;margin-top:2px}
.bk .bk-controls{display:flex;align-items:center;gap:8px}.bk .bk-controls button{border:1px solid #d1fae5;background:#fff;color:#006e4b;border-radius:8px;padding:4px 12px;font-size:13px;cursor:pointer}.bk .bk-controls button:disabled{opacity:.35;cursor:default}.bk .bk-controls span{font:10px ui-monospace,Menlo,monospace;color:#94a3b8}
.bk .bk-track{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px 1px 4px}
.bk .bk-slide{flex:0 0 calc((100% - 20px)/3);scroll-snap-align:start;margin:0;border:1px solid #d1fae5;border-radius:12px;overflow:hidden;background:#fff;min-width:0}
.bk .bk-ph{height:112px;display:grid;place-content:center;text-align:center;background:repeating-linear-gradient(135deg,#ecfdf5 0 12px,#f7fefb 12px 24px);color:#6b9e8c;font-size:10px;font-weight:700;border-bottom:1px solid #d1fae5}.bk .bk-ph em{font-style:normal;font-size:22px}
.bk .bk-slide figcaption{padding:9px 10px}.bk .bk-slide figcaption strong{display:block;font-size:10px;font-weight:700;color:#334155}.bk .bk-slide figcaption span{display:block;font-size:9px;color:#94a3b8;margin-top:3px}
.bk .bk-detail{margin-top:.75rem}
.bk .bk-detail summary{list-style:none;display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;background:#ffffffcc;border:1px solid #d1fae5;box-shadow:0 1px 2px rgba(0,0,0,.05);font-size:12px;font-weight:700;letter-spacing:-.025em;color:#1e293b;cursor:pointer;transition:background .2s}
.bk .bk-detail summary::-webkit-details-marker{display:none}.bk .bk-detail summary:hover{background:#fff;color:#006e4b}
.bk .bk-detail summary:before{content:"";width:8px;height:8px;border-radius:9999px;background:#006e4b;flex:none}
.bk .bk-detail summary:after{content:"";margin-left:auto;width:16px;height:16px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23006e4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E") center/contain no-repeat;transition:transform .3s}
.bk .bk-detail[open] summary:after{transform:rotate(180deg)}
.bk .bk-dgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding-top:12px}
.bk .bk-dgrid>div{background:#fff;border:1px solid #d1fae5;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.bk .bk-dgrid h4{margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0f172a}.bk .bk-dgrid p{font-size:10.5px;line-height:1.5;color:#475569}
@media(max-width:1050px){.bk .bk-grid{grid-template-columns:minmax(0,1fr)}.bk .bk-slide{flex-basis:calc((100% - 10px)/2)}}
@media(max-width:560px){.bk .bk-metrics{grid-template-columns:repeat(2,1fr)}.bk .bk-caps,.bk .bk-dgrid{grid-template-columns:1fr}.bk .bk-explorer{grid-template-columns:1fr}.bk .bk-routes{flex-direction:row;overflow-x:auto}.bk .bk-routes strong{display:none}.bk .bk-route{white-space:nowrap}.bk .bk-slide{flex-basis:87%}}

.bk{--dev-acc:#006e4b;--dev-line:#a7f3d0}
.bk .bk-dgrid{padding-top:0}

`}</style>
      <article className="rounded-2xl project-card-item bk" data-category="developer nodejs api backend" id="bookshelf-api-project-card" data-live-url="">
        <div className="dev-top">
          <div className="dev-tags">
            <span className="dev-num sf-number">
              02
            </span>
            <span className="dev-tag role">
              Backend Developer
            </span>
            <span className="dev-tag">
              Node.js
            </span>
            <span className="dev-tag">
              Express v5
            </span>
            <span className="dev-tag">
              REST API
            </span>
            <span className="dev-tag">
              In-memory
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
          </div>
        </div>
        <div className="bk-grid">
          <section>
            <h2 className="bk-title">
              {"BOOKSHELF "}
              <span>
                API
              </span>
            </h2>
            <p className="bk-eyebrow">
              Backend Engineering · Book Management Service
            </p>
            <p className="bk-lead">
              Built a RESTful API for book management using Express, with CRUD operations, search filters, input validation, and JSON responses.
            </p>
            <div className="bk-metrics">
              <div className="bk-metric">
                <strong>
                  5
                </strong>
                <small>
                  API routes
                </small>
              </div>
              <div className="bk-metric">
                <strong>
                  3
                </strong>
                <small>
                  Query filters
                </small>
              </div>
              <div className="bk-metric">
                <strong>
                  Express 5
                </strong>
                <small>
                  Framework
                </small>
              </div>
              <div className="bk-metric">
                <strong>
                  JS Array
                </strong>
                <small>
                  Storage
                </small>
              </div>
            </div>
            <div className="bk-panel">
              <h3>
                ↗ How Requests Work
              </h3>
              <div className="bk-pipe">
                <span className="bk-step">
                  HTTP Client
                </span>
                <span className="bk-arrow">
                  →
                </span>
                <span className="bk-step">
                  Express Route
                </span>
                <span className="bk-arrow">
                  →
                </span>
                <span className="bk-step">
                  JS Array
                </span>
                <span className="bk-arrow">
                  →
                </span>
                <span className="bk-step">
                  JSON Response
                </span>
              </div>
              <p className="bk-micro">
                Handlers validate input, execute book operations, and return appropriate HTTP status codes.
              </p>
            </div>
            <div className="bk-panel">
              <h3>
                ⚙ Implemented Capabilities
              </h3>
              <div className="bk-caps">
                <div className="bk-cap">
                  <b>
                    CRUD Endpoints
                  </b>
                  <span>
                    Create, list, retrieve, update, and delete books.
                  </span>
                </div>
                <div className="bk-cap">
                  <b>
                    Query Filtering
                  </b>
                  <span>
                    <code>
                      ?name
                    </code>
                    {", "}
                    <code>
                      ?reading
                    </code>
                    {", "}
                    <code>
                      ?finished
                    </code>
                    .
                  </span>
                </div>
                <div className="bk-cap">
                  <b>
                    Input Validation
                  </b>
                  <span>
                    Required book name and reading-progress checks.
                  </span>
                </div>
                <div className="bk-cap">
                  <b>
                    Response Handling
                  </b>
                  <span>
                    201 / 200 success and 400 / 404 errors.
                  </span>
                </div>
              </div>
            </div>
            <p className="bk-note">
              <strong>
                Storage trade-off:
              </strong>
              {" Books live in a JavaScript array. Changes work during the running process, but data resets when the server restarts."}
            </p>
          </section>
          <section className="bk-api" data-bk-lab="">
            <div className="bk-bar">
              <i></i>
              <i></i>
              <i></i>
              <span>
                Interactive API explorer · local simulation
              </span>
            </div>
            <div className="bk-api-body">
              <div className="bk-api-head">
                <h3>
                  Bookshelf · API Explorer
                </h3>
                <span className="bk-status">
                  Simulation
                </span>
              </div>
              <p className="bk-api-desc">
                Explore the real route structure with browser-only sample operations. No backend connection.
              </p>
              <div className="bk-explorer">
                <nav className="bk-routes" aria-label="API routes">
                  <strong>
                    ENDPOINTS
                  </strong>
                  <button type="button" className="bk-route active" data-bk-route="create">
                    <span className="bk-verb post">
                      POST
                    </span>
                    {" /books"}
                  </button>
                  <button type="button" className="bk-route" data-bk-route="list">
                    <span className="bk-verb get">
                      GET
                    </span>
                    {" /books"}
                  </button>
                  <button type="button" className="bk-route" data-bk-route="detail">
                    <span className="bk-verb get">
                      GET
                    </span>
                    {" /books/:id"}
                  </button>
                  <button type="button" className="bk-route" data-bk-route="update">
                    <span className="bk-verb put">
                      PUT
                    </span>
                    {" /books/:id"}
                  </button>
                  <button type="button" className="bk-route" data-bk-route="delete">
                    <span className="bk-verb delete">
                      DELETE
                    </span>
                    {" /books/:id"}
                  </button>
                </nav>
                <div className="bk-work">
                  <div className="bk-reqline">
                    <span className="bk-verb post" data-bk="verb">
                      POST
                    </span>
                    <code data-bk="path">
                      /books
                    </code>
                    <button type="button" className="bk-run" data-bk="run">
                      Run example ↗
                    </button>
                  </div>
                  <div className="bk-cap-line">
                    {"Request payload "}
                    <span>
                      Source-aligned example
                    </span>
                  </div>
                  <pre className="bk-code req" data-bk="request"></pre>
                  <div className="bk-cap-line">
                    {"Response "}
                    <span className="bk-resp-meta" data-bk="status">
                      Run to inspect output
                    </span>
                  </div>
                  <pre className="bk-code" data-bk="response">
                    {"// Select an endpoint and click Run example."}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="bk-gallery" data-gallery="" aria-label="Running project output">
          <div className="bk-gallery-top">
            <div>
              <h3>
                ▧ Original Running Project Output
              </h3>
              <p>
                Replace these slots with real screenshots from your running API, such as Postman requests and terminal output.
              </p>
            </div>
            <div className="bk-controls">
              <button type="button" data-gal-prev="" aria-label="Previous screenshot">
                ←
              </button>
              <span data-gal-counter="">
                1 / 3
              </span>
              <button type="button" data-gal-next="" aria-label="Next screenshot">
                →
              </button>
            </div>
          </div>
          <div className="bk-track" data-gal-track="">
            <figure className="bk-slide">
              <div className="bk-ph">
                <em>
                  ▧
                </em>
                ADD SCREENSHOT 01
              </div>
              <figcaption>
                <strong>
                  Create Book
                </strong>
                <span>
                  POST /books · HTTP 201 response
                </span>
              </figcaption>
            </figure>
            <figure className="bk-slide">
              <div className="bk-ph">
                <em>
                  ▧
                </em>
                ADD SCREENSHOT 02
              </div>
              <figcaption>
                <strong>
                  {"Search & Filter"}
                </strong>
                <span>
                  GET /books?reading=1 or ?finished=0
                </span>
              </figcaption>
            </figure>
            <figure className="bk-slide">
              <div className="bk-ph">
                <em>
                  ▧
                </em>
                ADD SCREENSHOT 03
              </div>
              <figcaption>
                <strong>
                  API Runtime
                </strong>
                <span>
                  Terminal, routes, or Postman test execution
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      </article>
      </>
  );
}
