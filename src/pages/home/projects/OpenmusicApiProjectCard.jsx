
export default function OpenmusicApiProjectCard() {
  return (
      <>
      <style>{`
.openmusic-card{--om-ink:#182d4a;--om-muted:#62738b;--om-blue:#245cce;--om-border:#d5e5fd;color:var(--om-ink)}.openmusic-card *{box-sizing:border-box}.openmusic-card .om-layout{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:22px;padding-top:20px}.openmusic-card .om-heading{font-size:clamp(30px,3vw,42px);line-height:1.08;letter-spacing:-.045em;margin:0 0 6px;font-weight:800}.openmusic-card .om-heading span{color:#2867c4}.openmusic-card .om-eyebrow{font-size:11px;letter-spacing:.11em;text-transform:uppercase;font-weight:800;color:#2663c1}.openmusic-card .om-copy{color:#62738b;font-size:14px;line-height:1.65;margin:10px 0}.openmusic-card .om-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:15px 0 11px}.openmusic-card .om-stat{border:1px solid #d5e5fd;background:#fff;border-radius:12px;padding:10px 5px;text-align:center}.openmusic-card .om-stat b{display:block;color:#0e54b4;font-size:19px}.openmusic-card .om-stat span{font-size:9px;color:#6e819b;font-weight:800;text-transform:uppercase}.openmusic-card .om-note{border:1px solid #d5e5fd;background:#edf6ff;border-radius:10px;padding:10px 12px;color:#3b628d;font-size:11px;line-height:1.5;margin-bottom:10px}.openmusic-card .om-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.openmusic-card .om-panel{border:1px solid #d5e5fd;background:#fff;border-radius:12px;padding:13px;min-width:0}.openmusic-card .om-panel h3{font-size:13px;margin:0 0 9px}.openmusic-card .om-panel.om-wide{grid-column:span 2}.openmusic-card .om-feature{display:flex;gap:8px;font-size:11px;line-height:1.45;margin:7px 0}.openmusic-card .om-number{width:20px;height:20px;flex:none;border-radius:6px;background:#dcecff;color:#1761c7;display:grid;place-items:center;font-size:10px;font-weight:800}.openmusic-card .om-list{margin:0;padding-left:17px;color:#50637c;font-size:11px;line-height:1.6}.openmusic-card .om-flow{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.openmusic-card .om-node{border:1px solid #cfddf0;background:#edf5ff;border-radius:8px;padding:6px 8px;font-size:10px;font-weight:750}.openmusic-card .om-arrow{color:#5f8cc7;font-weight:800}.openmusic-card .om-api{border:1px solid var(--om-border);border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 8px 25px #1f407112}.openmusic-card .om-api-head{padding:10px 13px;background:#f0f5fd;border-bottom:1px solid #dbe7f5;display:flex;align-items:center;gap:7px}.openmusic-card .om-light{width:9px;height:9px;border-radius:50%;background:#ff7c7c}.openmusic-card .om-light:nth-child(2){background:#ffcc67}.openmusic-card .om-light:nth-child(3){background:#52c988}.openmusic-card .om-api-head strong{margin-left:auto;font-size:10px;letter-spacing:.08em;color:#8092ab}.openmusic-card .om-api-body{padding:13px}.openmusic-card .om-api-title{font-size:15px;font-weight:800;margin:0 0 5px}.openmusic-card .om-api-intro{font-size:11px;color:#62738b;line-height:1.5;margin:0 0 10px}.openmusic-card .om-routes{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}.openmusic-card .om-routes button{border:1px solid #dbe6f7;background:#fff;color:#517092;border-radius:8px;padding:7px 9px;font-size:10px;font-weight:750;cursor:pointer}.openmusic-card .om-routes button.is-active{background:#e5f0ff;color:#1558b7;border-color:#b9d3fa}.openmusic-card .om-routes button:focus-visible,.openmusic-card .om-send:focus-visible,.openmusic-card .om-gallery button:focus-visible,.openmusic-card .om-details-toggle:focus-visible{outline:3px solid #8bbafc;outline-offset:2px}.openmusic-card .om-request{display:flex;border:1px solid #d7e5f7;border-radius:9px;overflow:hidden;font-size:11px}.openmusic-card .om-method{padding:9px;background:#e6f8ed;color:#10834c;font-weight:800;display:grid;place-items:center}.openmusic-card .om-path{padding:9px;flex:1;background:#f8fbff;font-family:ui-monospace,Consolas,monospace;overflow-wrap:anywhere;align-content:center}.openmusic-card .om-send{border:0;background:#1f63c4;color:#fff;padding:9px 11px;font-size:11px;font-weight:800;cursor:pointer}.openmusic-card .om-code-label{display:flex;justify-content:space-between;margin:10px 0 5px;font-size:11px;font-weight:800}.openmusic-card .om-code{background:#101d34;color:#d9eaff;border-radius:10px;padding:10px;font:10px/1.6 ui-monospace,Consolas,monospace;white-space:pre-wrap;overflow-wrap:anywhere;overflow:auto;max-height:150px;min-height:56px}.openmusic-card .om-status{min-height:18px;font-size:10px;color:#3b628d;margin-top:6px}.openmusic-card .om-gallery{margin-top:11px;border:1px solid #d5e5fd;border-radius:12px;background:#fff;padding:11px}.openmusic-card .om-gallery-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:7px}.openmusic-card .om-gallery-head h3{font-size:12px;margin:0}.openmusic-card .om-gallery-controls{display:flex;align-items:center;gap:6px;font-size:10px;color:#617895;font-weight:750}.openmusic-card .om-gallery button{border:1px solid #c6d8f1;border-radius:7px;background:#f5f9ff;color:#245cce;padding:5px 9px;font-weight:800;cursor:pointer}.openmusic-card .om-gallery button:disabled{opacity:.4;cursor:not-allowed}.openmusic-card .om-gallery-track{display:flex;gap:9px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:thin;padding-bottom:4px}.openmusic-card .om-slide{flex:0 0 76%;scroll-snap-align:start;border:1px solid #d5e5fd;border-radius:9px;overflow:hidden;background:#f8fbff}.openmusic-card .om-placeholder{aspect-ratio:16/9;background:repeating-linear-gradient(135deg,#eaf3ff 0 15px,#f5f9ff 15px 30px);display:grid;place-items:center;text-align:center;padding:8px;color:#6682a8;font-size:10px;font-weight:800;border-bottom:1px dashed #c8daf1}.openmusic-card .om-caption{padding:8px}.openmusic-card .om-caption strong{display:block;font-size:10px}.openmusic-card .om-caption span{display:block;margin-top:3px;font-size:9px;color:#617895;line-height:1.4}.openmusic-card .om-details{margin-top:13px;border-top:1px solid #d5e5fd;padding-top:12px}.openmusic-card .om-details-toggle{border:0;background:transparent;color:#245cce;font-size:12px;font-weight:800;cursor:pointer;padding:7px 0}.openmusic-card .om-details-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding-top:8px}.openmusic-card .om-details-grid section{border:1px solid #d5e5fd;background:#fff;border-radius:10px;padding:11px}.openmusic-card .om-details-grid h3{font-size:11px;margin:0 0 6px}.openmusic-card .om-details-grid p{font-size:10px;line-height:1.5;color:#62738b;margin:0}@media(max-width:900px){.openmusic-card .om-layout{grid-template-columns:1fr;gap:14px}}@media(max-width:640px){.openmusic-card .om-layout{padding-top:13px}.openmusic-card .om-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.openmusic-card .om-grid{grid-template-columns:1fr}.openmusic-card .om-panel.om-wide{grid-column:auto}.openmusic-card .om-details-grid{grid-template-columns:1fr}.openmusic-card .om-slide{flex-basis:88%}.openmusic-card .om-api-body{padding:10px}}

.openmusic-card .om-slide>img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:#f5f9ff;border-bottom:1px solid #d5e5fd}
.openmusic-card .om-architecture-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.openmusic-card .om-architecture-node{border:1px solid #cbdff5;border-radius:10px;padding:10px 7px;background:#f2f8ff;text-align:center;font-size:11px;font-weight:750}
.openmusic-card .om-architecture-node em{display:block;margin-top:3px;color:#657c99;font-size:10px;font-weight:500;font-style:normal}
@media(max-width:640px){.openmusic-card .om-architecture-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}

.openmusic-card{--dev-acc:#1853aa;--dev-line:#bfdbfe;font-size:12px;line-height:1.5}
.openmusic-card .om-layout{padding-top:0!important;gap:20px}
.openmusic-card .om-copy{margin:.75rem 0!important}
.openmusic-card .om-stats{gap:6px!important;margin:.75rem 0!important}
.openmusic-card .om-note{margin:.75rem 0 0!important}
.openmusic-card .om-grid{gap:.75rem!important;margin-top:.75rem}
.openmusic-card .om-panel,.openmusic-card .om-gallery{padding:12px!important;background:#fffffff2}
.openmusic-card .om-panel{margin-top:.75rem}.openmusic-card .om-grid .om-panel{margin-top:0}
.openmusic-card .om-gallery{margin-top:.75rem!important}
.openmusic-card .om-api-intro,.openmusic-card .om-panel p{font-size:9.5px!important;line-height:1.4}
.openmusic-card .om-panel>p:last-child{margin-top:8px}

`}</style>
      <article className="openmusic-card rounded-2xl border border-[#c8dcf4] bg-gradient-to-br from-[#f4f9ff] via-white to-[#f6faff] p-4 shadow-[0_18px_50px_rgba(24,55,77,.07)] sm:p-5 project-card-item relative overflow-hidden" data-category="developer backend api hapi postgres redis rabbitmq" data-openmusic-project="" data-live-url="" id="openmusic-api-project-card">
        <div className="dev-top">
          <div className="dev-tags">
            <span className="dev-num sf-number">
              03
            </span>
            <span className="dev-tag role">
              Backend Developer
            </span>
            <span className="dev-tag">
              REST API
            </span>
            <span className="dev-tag">
              Hapi.js
            </span>
            <span className="dev-tag">
              PostgreSQL
            </span>
            <span className="dev-tag">
              Redis
            </span>
            <span className="dev-tag">
              RabbitMQ
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
        <div className="om-layout">
          <section>
            <h2 className="om-heading">
              {"OpenMusic "}
              <span>
                API V3
              </span>
            </h2>
            <div className="om-eyebrow">
              Backend Engineering · Music Platform Services
            </div>
            <p className="om-copy">
              A RESTful backend for managing albums, songs, users, playlists, and collaborations. The project integrates JWT authentication, PostgreSQL relational storage, album cover uploads, Redis caching, and RabbitMQ-based asynchronous playlist exports.
            </p>
            <div className="om-stats">
              <div className="om-stat">
                <span>
                  Framework
                </span>
                <b>
                  Hapi.js
                </b>
              </div>
              <div className="om-stat">
                <span>
                  Database
                </span>
                <b>
                  PostgreSQL
                </b>
              </div>
              <div className="om-stat">
                <span>
                  Caching
                </span>
                <b>
                  Redis
                </b>
              </div>
              <div className="om-stat">
                <span>
                  Queue
                </span>
                <b>
                  RabbitMQ
                </b>
              </div>
            </div>
            <div className="om-note">
              Source-based implementation: Hapi.js + PostgreSQL + Redis + RabbitMQ. The API explorer is an illustrative local simulation, not a live server.
            </div>
            <div className="om-grid">
              <section className="om-panel">
                <h3>
                  Core Backend Features
                </h3>
                <div className="om-feature">
                  <span className="om-number">
                    01
                  </span>
                  <span>
                    {"Album & song CRUD"}
                  </span>
                </div>
                <div className="om-feature">
                  <span className="om-number">
                    02
                  </span>
                  <span>
                    JWT access and refresh tokens
                  </span>
                </div>
                <div className="om-feature">
                  <span className="om-number">
                    03
                  </span>
                  <span>
                    Playlist ownership and collaborations
                  </span>
                </div>
                <div className="om-feature">
                  <span className="om-number">
                    04
                  </span>
                  <span>
                    Activity history for playlist songs
                  </span>
                </div>
                <div className="om-feature">
                  <span className="om-number">
                    05
                  </span>
                  <span>
                    Album cover uploads and likes
                  </span>
                </div>
                <div className="om-feature">
                  <span className="om-number">
                    06
                  </span>
                  <span>
                    Async playlist export and Redis caching
                  </span>
                </div>
              </section>
              <section className="om-panel">
                <h3>
                  Code Architecture
                </h3>
                <ul className="om-list">
                  <li>
                    <b>
                      api/
                    </b>
                    {" handlers, routes, plugins"}
                  </li>
                  <li>
                    <b>
                      services/postgres/
                    </b>
                    {" data access"}
                  </li>
                  <li>
                    <b>
                      services/redis/
                    </b>
                    {" cache"}
                  </li>
                  <li>
                    <b>
                      services/rabbitmq/
                    </b>
                    {" producer"}
                  </li>
                  <li>
                    <b>
                      validator/
                    </b>
                    {" Joi schemas"}
                  </li>
                  <li>
                    <b>
                      migrations/
                    </b>
                    {" relational schema"}
                  </li>
                </ul>
              </section>
              <section className="om-panel om-wide">
                <h3>
                  Typical Request Flow
                </h3>
                <div className="om-flow">
                  <span className="om-node">
                    HTTP Client
                  </span>
                  <span className="om-arrow">
                    →
                  </span>
                  <span className="om-node">
                    Hapi Route
                  </span>
                  <span className="om-arrow">
                    →
                  </span>
                  <span className="om-node">
                    JWT / Joi
                  </span>
                  <span className="om-arrow">
                    →
                  </span>
                  <span className="om-node">
                    Service
                  </span>
                  <span className="om-arrow">
                    →
                  </span>
                  <span className="om-node">
                    PostgreSQL
                  </span>
                </div>
                <p className="om-api-intro" style={{ margin: "9px 0 0" }}>
                  The request flow depends on the route. Some endpoints are public, while playlist operations, liking albums, collaborations, and exports require authentication.
                </p>
              </section>
              <section className="om-panel om-wide">
                <h3>
                  System Architecture
                </h3>
                <div className="om-architecture-grid">
                  <div className="om-architecture-node">
                    HTTP Client
                    <em>
                      Postman / future frontend
                    </em>
                  </div>
                  <div className="om-architecture-node">
                    Hapi.js API
                    <em>
                      Routes ? handlers ? JWT ? Joi
                    </em>
                  </div>
                  <div className="om-architecture-node">
                    PostgreSQL
                    <em>
                      Albums ? songs ? playlists ? users
                    </em>
                  </div>
                  <div className="om-architecture-node">
                    Redis
                    <em>
                      Album likes cache
                    </em>
                  </div>
                  <div className="om-architecture-node">
                    RabbitMQ
                    <em>
                      Playlist export job
                    </em>
                  </div>
                  <div className="om-architecture-node">
                    Local storage
                    <em>
                      Album cover uploads
                    </em>
                  </div>
                </div>
                <p className="om-api-intro" style={{ margin: "9px 0 0" }}>
                  PostgreSQL stores primary application data, Redis caches album likes, and RabbitMQ queues playlist export requests. The provided archive does not include the email consumer.
                </p>
              </section>
            </div>
          </section>
          <section>
            <div className="om-api">
              <div className="om-api-head">
                <span className="om-light"></span>
                <span className="om-light"></span>
                <span className="om-light"></span>
                <strong>
                  API EXPLORER · STATIC EXAMPLES
                </strong>
              </div>
              <div className="om-api-body">
                <h3 className="om-api-title">
                  OpenMusic · API Explorer
                </h3>
                <p className="om-api-intro">
                  Representative request and response structures. Select an endpoint, then send the sample to view its expected JSON shape.
                </p>
                <div className="om-routes" role="group" aria-label="OpenMusic API examples">
                  <button type="button" data-openmusic-route="album" className="is-active" aria-pressed="true">
                    Albums
                  </button>
                  <button type="button" data-openmusic-route="songs" aria-pressed="false">
                    Songs
                  </button>
                  <button type="button" data-openmusic-route="auth" aria-pressed="false">
                    Auth
                  </button>
                  <button type="button" data-openmusic-route="playlist" aria-pressed="false">
                    Playlists
                  </button>
                  <button type="button" data-openmusic-route="export" aria-pressed="false">
                    Async Export
                  </button>
                  <button type="button" data-openmusic-route="likes" aria-pressed="false">
                    Likes
                  </button>
                </div>
                <div className="om-request">
                  <span className="om-method" data-openmusic-method="">
                    GET
                  </span>
                  <span className="om-path" data-openmusic-path="">
                    {"/albums/{id}"}
                  </span>
                  <button className="om-send" type="button" data-openmusic-send="">
                    Send ↗
                  </button>
                </div>
                <div className="om-code-label">
                  {"Request / body "}
                  <span className="font-normal text-slate-400">
                    Sample
                  </span>
                </div>
                <pre className="om-code" data-openmusic-request="">
                  {"GET /albums/album-id\nAuthorization: not required"}
                </pre>
                <div className="om-code-label">
                  {"Response / expected shape "}
                  <span className="rounded-md bg-[#e3f8e9] px-2 py-1 text-[10px] text-[#137844]">
                    JSON
                  </span>
                </div>
                <pre className="om-code" data-openmusic-response="">
                  {"// Select Send to show the sample response."}
                </pre>
                <div className="om-status" data-openmusic-status="" aria-live="polite" role="status">
                  Local simulation — no request is sent to a server.
                </div>
              </div>
            </div>
            <section className="om-gallery" data-openmusic-gallery="" aria-label="Original running project screenshots">
              <div className="om-gallery-head">
                <h3>
                  OpenMusic API Test Screenshots
                </h3>
                <div className="om-gallery-controls">
                  <button type="button" data-openmusic-prev="" aria-label="Previous screenshot" disabled>
                    ←
                  </button>
                  <span data-openmusic-counter="">
                    1 / 5
                  </span>
                  <button type="button" data-openmusic-next="" aria-label="Next screenshot">
                    →
                  </button>
                </div>
              </div>
              <p className="om-api-intro">
                Postman screenshots showing the API test run and sample song and album responses.
              </p>
              <div className="om-gallery-track" data-openmusic-track="" tabIndex="0">
                <article className="om-slide" data-openmusic-slide="">
                  <div className="om-placeholder">
                    ADD ORIGINAL SCREENSHOT 01
                  </div>
                  <div className="om-caption">
                    <strong>
                      Collection run · Open Music API Test
                    </strong>
                    <span>
                      457 tests passed, 0 failed, 12 ms average response
                    </span>
                  </div>
                </article>
                <article className="om-slide" data-openmusic-slide="">
                  <div className="om-placeholder">
                    ADD ORIGINAL SCREENSHOT 02
                  </div>
                  <div className="om-caption">
                    <strong>
                      GET /songs · All songs
                    </strong>
                    <span>
                      200, list of songs with id, title and performer
                    </span>
                  </div>
                </article>
                <article className="om-slide" data-openmusic-slide="">
                  <div className="om-placeholder">
                    ADD ORIGINAL SCREENSHOT 03
                  </div>
                  <div className="om-caption">
                    <strong>
                      POST /songs · Invalid payload
                    </strong>
                    <span>
                      400 with "title" is required
                    </span>
                  </div>
                </article>
                <article className="om-slide" data-openmusic-slide="">
                  <div className="om-placeholder">
                    ADD ORIGINAL SCREENSHOT 04
                  </div>
                  <div className="om-caption">
                    <strong>
                      PUT /albums/:id · Invalid payload
                    </strong>
                    <span>
                      400 with "name" is required
                    </span>
                  </div>
                </article>
                <article className="om-slide" data-openmusic-slide="">
                  <div className="om-placeholder">
                    ADD ORIGINAL SCREENSHOT 05
                  </div>
                  <div className="om-caption">
                    <strong>
                      DELETE /albums/:id · Invalid id
                    </strong>
                    <span>
                      404 album not found; a valid id returns 200
                    </span>
                  </div>
                </article>
              </div>
            </section>
          </section>
        </div>
        <div className="project-dropdown-disclosure dev-dd" data-dev-dd="">
          <button type="button" className="project-dropdown-toggle" aria-expanded="false">
            <span className="dd-title">
              <span className="dd-icon" aria-hidden="true">
                ☷
              </span>
              <span className="dd-name">
                Project details
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
            <div className="om-details-grid">
              <section>
                <h3>
                  {"Problem & objective"}
                </h3>
                <p>
                  Build a REST-based music service for content management, personal playlists, collaborative access, and backend integrations without depending on a custom user interface.
                </p>
              </section>
              <section>
                <h3>
                  Implementation decisions
                </h3>
                <p>
                  Routes, handlers, services, validators, and migrations keep concerns separate. PostgreSQL stores application data; JWT secures protected endpoints; Redis caches album likes; RabbitMQ queues playlist export requests.
                </p>
              </section>
              <section>
                <h3>
                  {"Evidence & limitations"}
                </h3>
                <p>
                  The available project archive includes source code, migrations, and endpoint documentation. Production deployment, the email consumer, and automated test results are not verified.
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>
      </>
  );
}
