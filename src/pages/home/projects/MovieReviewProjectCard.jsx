
export default function MovieReviewProjectCard() {
  return (
      <>
      <style>{`

.mv{color:#0f172a;font-size:12px;line-height:1.5}
.mv *{box-sizing:border-box}.mv h1,.mv h2,.mv h3,.mv p{margin:0;padding:0}
.mv.project-card-item{display:block!important;background:linear-gradient(135deg,#fff7f8,#ffe4e6)!important;border:1px solid #ffe4e6!important;border-radius:1.5rem!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}
.mv .project-card-header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-bottom:1px solid #ffe4e6;padding-bottom:.75rem;margin-bottom:.75rem}
.mv .mv-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.mv .mv-num{display:grid;place-items:center;width:24px;height:24px;border-radius:9999px;background:#e11d48;color:#fff;font-size:12px;font-weight:700;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.mv .mv-chip{font-size:.75rem;font-weight:600;line-height:1.15rem;padding:.25rem .75rem;border-radius:9999px;color:#881337;background:#ffffffcc;border:1px solid #fecdd3b3;box-shadow:0 1px 2px rgba(0,0,0,.05)}.mv .mv-chip.role{background:#ffe4e6b3}
.mv .mv-action{display:inline-flex;align-items:center;gap:6px;text-decoration:none;font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.45rem .95rem;border-radius:.75rem;background:#e11d48;color:#fff;border:0;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.05)}.mv .mv-action:hover{background:#be123c}
.mv .mv-grid{display:grid;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);gap:20px;align-items:start}
.mv .mv-title{font-size:1.875rem;font-weight:800;letter-spacing:-.025em;line-height:1.2;color:#0f172a}.mv .mv-title span{color:#e11d48}
.mv .mv-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#be123c;margin-top:.25rem}
.mv .mv-lead{font-size:12px;line-height:1.625;color:#334155;margin:.75rem 0}
@media(min-width:640px){.mv .mv-lead{font-size:14px}}
.mv .mv-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin:.75rem 0}
.mv .mv-metric{display:flex;flex-direction:column;text-align:center;border-radius:12px;padding:8px;background:#ffffffe6;border:1px solid #ffe4e6;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.mv .mv-metric small{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;line-height:1.25}
.mv .mv-metric b{font-size:12px;font-weight:800;color:#e11d48;line-height:1.5}
.mv .mv-panel{background:#fffffff2;border:1px solid #ffe4e6;border-radius:12px;padding:12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.mv .mv-panel h3{font-size:11px;font-weight:700;color:#1e293b;margin-bottom:8px;line-height:1.4}
.mv .mv-arch{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.mv .mv-node{font-size:9.5px;font-weight:600;padding:6px 8px;border-radius:8px;background:#fff1f2b3;border:1px solid #ffe4e6;color:#334155}.mv .mv-arrow{color:#fda4af;font-size:10px}
.mv .mv-micro{font-size:9.5px;color:#64748b;line-height:1.4;margin-top:8px}
.mv .mv-feats{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.mv .mv-feat{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#fff1f2b3;border:1px solid #ffe4e6;border-radius:8px;font-size:11px;font-weight:700;color:#1e293b}
.mv .mv-ico{display:grid;place-items:center;width:24px;height:24px;flex:none;border-radius:8px;background:#ffe4e6;color:#e11d48;font-size:11px}
.mv .mv-tech{font-size:9.5px;line-height:1.5;color:#475569;background:#ffffffe6;border:1px solid #ffe4e6;border-radius:12px;padding:8px 12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}.mv .mv-tech b{color:#e11d48}
.mv .mv-iconbtn{padding:4px 6px;background:#f2f4ff;border:0;border-radius:6px;font-size:10px;color:#5657ab;cursor:pointer}
.mv .mv-dgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding-top:12px}
.mv .mv-dgrid>div{background:#fff;border:1px solid #ffe4e6;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.mv .mv-dgrid h4{margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0f172a}.mv .mv-dgrid p{font-size:10.5px;line-height:1.5;color:#475569}
@media(max-width:1080px){.mv .mv-grid{grid-template-columns:minmax(0,1fr)}}
@media(max-width:620px){.mv .mv-metrics{grid-template-columns:repeat(2,1fr)}.mv .mv-dgrid{grid-template-columns:1fr}}

.mv{--dev-acc:#e11d48;--dev-line:#fecdd3}
.mv .mv-grid{align-items:stretch}
.mv .mv-iframe{position:absolute;inset:0;display:block;width:100%;height:100%;border:0;background:#fff}

.mv .mv-stage{position:relative;flex:1;min-height:260px;background:#12080b;display:grid}.mv .mv-stage video{width:100%;height:100%;object-fit:contain;background:#12080b}.mv .mv-novideo{place-self:center;text-align:center;color:#fda4af;padding:24px;font-size:12px;display:grid;gap:6px}.mv .mv-novideo[hidden]{display:none}.mv .mv-novideo b{color:#fff;font-size:13px}.mv .mv-novideo code{background:#881337;padding:1px 5px;border-radius:4px}
.mv{--dev-acc:#e11d48;--dev-line:#fecdd3}
.mv .mv-grid{align-items:stretch}
.mv .mv-demo-col{display:flex;min-width:0}
.mv .mv-app{display:flex;flex-direction:column;flex:1;min-width:0;overflow:hidden;border:1px solid #ffe4e6;border-radius:12px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.mv .mv-bar{display:flex;align-items:center;gap:5px;height:34px;padding:0 12px;background:#fff1f2;border-bottom:1px solid #ffe4e6}
.mv .mv-bar i{width:8px;height:8px;border-radius:50%;background:#fd7e7e}.mv .mv-bar i:nth-child(2){background:#ffc75b}.mv .mv-bar i:nth-child(3){background:#4cc99b}
.mv .mv-bar span{margin-left:auto;font-size:9px;font-weight:700;letter-spacing:.05em;color:#94a3b8;text-transform:uppercase}
.mv .mv-apphead{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #fde8ea}
.mv .mv-apphead strong{display:block;font-size:15px;letter-spacing:-.025em;color:#881337}.mv .mv-apphead small{display:block;font-size:10px;color:#8b8fa8}
.mv .mv-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding:12px 14px 0}
.mv .mv-stat{border-radius:10px;padding:8px 10px;color:#fff;background:linear-gradient(135deg,#f43f5e,#e11d48)}.mv .mv-stat small{display:block;font-size:9px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;opacity:.85}.mv .mv-stat b{font-size:14px;font-weight:800}
.mv .mv-body{display:flex;flex-direction:column;flex:1;padding:12px 14px;background:#fffafa}
.mv .mv-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px}
.mv .mv-search{flex:1 1 140px;min-width:0;border:1px solid #fbd5da;border-radius:9px;background:#fff;padding:8px 12px;font:inherit;font-size:12px;color:#0f172a}
.mv .mv-chips{display:flex;gap:6px}
.mv .mv-chip{border:1px solid #fbd5da;background:#fff;border-radius:9px;color:#6b6b8d;padding:6px 10px;font:inherit;font-size:11px;font-weight:600;cursor:pointer}
.mv .mv-chip.active{background:#ffe4e6;color:#be123c;border-color:#fda4af}
.mv .mv-sort{border:1px solid #fbd5da;background:#fff;border-radius:9px;color:#be123c;padding:6px 10px;font:inherit;font-size:11px;font-weight:600;cursor:pointer}
.mv .mv-tablewrap{overflow-x:auto;border:1px solid #ffe4e6;border-radius:10px;background:#fff}
.mv .mv-table{width:100%;border-collapse:collapse;font-size:11px}
.mv .mv-table th{padding:8px 10px;text-align:left;font-size:9px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#94a3b8;background:#fff7f8;border-bottom:1px solid #ffe4e6;white-space:nowrap}
.mv .mv-table td{padding:8px 10px;border-bottom:1px solid #fde8ea;color:#334155;white-space:nowrap}
.mv .mv-table tr:last-child td{border-bottom:0}.mv .mv-table tbody tr{cursor:pointer}.mv .mv-table tbody tr:hover{background:#fff7f8}.mv .mv-table tbody tr.sel{background:#ffe4e6}
.mv .mv-table td:first-child{font-weight:700;color:#1e293b}
.mv .mv-badge{display:inline-block;border-radius:9999px;padding:2px 8px;font-size:10px;font-weight:700}.mv .mv-badge.p{background:#dcfce7;color:#166534}.mv .mv-badge.n{background:#f1f5f9;color:#475569}
.mv .mv-score{display:flex;align-items:center;gap:8px}.mv .mv-meter{width:48px;height:8px;border-radius:9999px;background:#e5e7eb;overflow:hidden}.mv .mv-meter i{display:block;height:100%;border-radius:9999px;transition:width .6s}
.mv .mv-score span{min-width:2.4rem;font-weight:700;color:#374151}
.mv .mv-empty td{text-align:center;color:#7683a1;padding:22px}
.mv .mv-note{margin-top:auto;padding-top:10px;font-size:9.5px;color:#7b7fa0}
@media(max-width:620px){.mv .mv-stats{grid-template-columns:1fr 1fr 1fr}.mv .mv-metrics{grid-template-columns:repeat(2,1fr)}.mv .mv-feats{grid-template-columns:1fr}}

.mv .mv-dgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.mv .mv-dgrid>div{background:#fff;border:1px solid #ffe4e6;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.mv .mv-dgrid h4{margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#0f172a}.mv .mv-dgrid p{font-size:10.5px;line-height:1.5;color:#475569}
@media(max-width:620px){.mv .mv-dgrid{grid-template-columns:1fr}}

`}</style>
      <article className="rounded-2xl project-card-item mv" data-category="developer react frontend fullstack movie" id="movie-review-project-card" data-live-url="">
        <div className="dev-top">
          <div className="dev-tags">
            <span className="dev-num sf-number">
              07
            </span>
            <span className="dev-tag role">
              Frontend Developer
            </span>
            <span className="dev-tag">
              React
            </span>
            <span className="dev-tag">
              Redux Toolkit
            </span>
            <span className="dev-tag">
              Axios
            </span>
            <span className="dev-tag">
              TMDB API
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
            <a className="dev-btn ghost" href="https://github.com/Jejetrs/moviews" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="dev-btn solid" data-live-link="" hidden target="_blank" rel="noopener noreferrer">
              Open Live App ↗
            </a>
          </div>
        </div>
        <div className="mv-grid">
          <section>
            <h2 className="mv-title">
              Movie
              <span>
                Review
              </span>
            </h2>
            <p className="mv-eyebrow">
              Frontend Engineering · Movie Discovery Web App
            </p>
            <p className="mv-lead">
              A React frontend for browsing movies and TV shows on the TMDB API: debounced search, filterable browse, trailers, and a watchlist, ratings and reviews that persist in the browser through Redux.
            </p>
            <div className="mv-metrics">
              <div className="mv-metric">
                <small>
                  UI Library
                </small>
                <b>
                  React
                </b>
              </div>
              <div className="mv-metric">
                <small>
                  Pages
                </small>
                <b>
                  12
                </b>
              </div>
              <div className="mv-metric">
                <small>
                  Components
                </small>
                <b>
                  19
                </b>
              </div>
              <div className="mv-metric">
                <small>
                  Custom Hooks
                </small>
                <b>
                  6
                </b>
              </div>
            </div>
            <div className="mv-panel">
              <h3>
                ⌘ Architecture
              </h3>
              <div className="mv-arch">
                <span className="mv-node">
                  Pages + Components
                </span>
                <span className="mv-arrow">
                  →
                </span>
                <span className="mv-node">
                  Data hooks
                </span>
                <span className="mv-arrow">
                  →
                </span>
                <span className="mv-node">
                  Axios
                </span>
                <span className="mv-arrow">
                  →
                </span>
                <span className="mv-node">
                  TMDB API
                </span>
              </div>
              <p className="mv-micro">
                Axios is configured once with the TMDB base URL and bearer token. Hooks wrap each request with loading, error and retry state, while Redux holds the trending banner and the user library (watchlist, ratings, reviews).
              </p>
            </div>
            <div className="mv-panel">
              <h3>
                ⚙ Implemented Features
              </h3>
              <div className="mv-feats">
                <div className="mv-feat">
                  <span className="mv-ico">
                    ▶
                  </span>
                  Hero Carousel · Trending Today / Week
                </div>
                <div className="mv-feat">
                  <span className="mv-ico">
                    ☰
                  </span>
                  Browse · Genre, Rating, Year, Sort in URL
                </div>
                <div className="mv-feat">
                  <span className="mv-ico">
                    ⌕
                  </span>
                  Debounced Search with Live Suggestions
                </div>
                <div className="mv-feat">
                  <span className="mv-ico">
                    ◎
                  </span>
                  Details · One Request, Trailer, Cast, Similar
                </div>
                <div className="mv-feat">
                  <span className="mv-ico">
                    ★
                  </span>
                  {"Persistent Ratings & Reviews"}
                </div>
                <div className="mv-feat">
                  <span className="mv-ico">
                    ▣
                  </span>
                  Watchlist · Sort and Filter
                </div>
              </div>
            </div>
            <p className="mv-tech">
              <b>
                Frontend scope:
              </b>
              {" React Router · Redux Toolkit · Axios · custom hooks · react-icons · moment · custom CSS design system."}
            </p>
          </section>
          <section className="mv-demo-col">
            <div className="mv-app mv-video" data-ls-video="">
              <div className="mv-bar">
                <i></i>
                <i></i>
                <i></i>
                <span>
                  Movie Review · Live demo
                </span>
              </div>
              <div className="mv-stage">
                <video controls playsInline preload="metadata" poster="data:image/webp;base64,UklGRsIRAABXRUJQVlA4ILYRAABwigCdASqAApABPm02mUikIyKhJHLocIANiWVu/E85Uc8+luvlQIaP9r/ae/MrH1r+1/sl/bf1v9BPFN0r76/jBylB4PVD3L/U/4L8ifoD/sfUN5gX6bf5/+kf4P9j/im9R3mC/Wz/mf6/3nf+Z/Tfbr/Wv2j9wD+ff1j/4diJ+4fsAfs/6uv/I/aX4Sf2k/a74Ef55/hP/V7AHoAf/PrT5gL+9h/gPZ+dx6oiquPKYXKB8aJb3n2lnfKKXtLO+UUvaWeJxe0s75RS9pZ3yil7SzvlFL2lnfKKXtLO+UUvaWd8ope0s75RS9pZ3yil7SuVb4+f//n6OurAGZt57H5o893EtBRz2azOcnGlnfKKXtLO+UUvaWds7YD56efv5R6Z/53GMbcfXugwmwo7SOXfsXfL5YDS+Wd8ope0s75RS9pZ2wdW3Hvc/WTQRaVPL5tkovM+KF9pTB6LmmXwL3dLHfKKXtLO+UUvaVwUS7KUEFfuRkodjIYxw6K++e7Qtkv1PpKqjHfKKXtLO+UUvaO9HDEgxlwQxA5NnpLwltl7K3oedtBfeArPjRLe8+0s75RO/FkZTazvssEv8ZlEhzGeOKSqbLx/6GRUGWnv10Zxseb7VolyWW3FSmHtB0NZOBRS9pZ3yil47PfdqlJzVD6UPnGZkPVgkiXWtK57JyggPtXtAQfQQeoFopPvgAllf9GpEjmPjRLe8+0s75GPhC3SByzzkeeqSds1UKfSgQHg5qMYzwXPQvS1w4FFL2lnfKKXhT4fQKXH9W0lCDT6hwon26FjZd1KaqcZgmDBuSZ/uPTPjNQzJb3n2lnfKKXiNEDoqEQrWZlUBXN9ISbSrsS6Bi0gJPSdIysEecODikyGXs9oJ7Jv2FSwope0s75RS8EeBNKigdV8pdqWD+ep+ElihBerTR43SlvI2K4TZ0k0a1EF2nxL2lnfKKXtLO2c2aQurB5YFdA2Xv91FH+e7xYQOO70/Z85D0MS5WOrNsfGiW959pZ3wlhGDIcdFWNPZuE3wniLRpXCBRWhR0rllr8GAtWqQES1AVRiSAdLS0S3vPtLO+RdUqDNdEjK05d91KucUQybZ9O+Vs8jtE4IzC6cL+NEt7z7SzvlE7EfkRgaPorCmdpg5lOP3yOqIYSuwG4o22cOgIyKTjKi+iFL2lnfKKXtLO+RSgEopPItPs0AWGV9M1pl45Hc16nm3fYLoJ6Nw8GE8REIAGUGm/QF7SzvlFL2lnfKKX5mQiYLdUP85nh/52kYqXdZdgqgkEv2YYRPe4YBrCDIWQtChZAfzgUUvaWd8ope0s77tpXWifHpQ2RVWPipVsq8SqYQmpWOh1hpxYUUvaWd8ope0s7ggvn+9AjT8a7lrNUjELJEukbVyDVt98MVTENDjDOTvPtLO+UUvaWd8opf4soyCVXpaz85GPzvlFL2lnfKKXtLO+UUvaWd8ope0s75RS9pZ3yil7SzvlFL2lnfKKXtGgAA/vvKWCKzT2iopqqRAAAx8nYAAAAAAAAcTO1ZqaNhJ45+9ouQ3t1e+F08F5GERWcHLI7dXQJEcgQSyhbkkKRhSP6xt3ImmKZ8NDaVx+nxM4/tqrmsHiWsgSlUNvzyzpqC9M96wgeUvfAgERV9IEJghhLgc8wmRwnS44nejc/RLLVe7TYIEh0gIIVR5LeoOyL6vaYvVXSXaSpIurrofdP/jlbkJcF6vgiKrDqQE3PJNQSnx0c9fBvPLwNJHLBj0qXm54N3/aBGLT9B8LfeeAAOKxHuPlzm1mSekLl9ClwQiInMy2T2kQ2EmjLnNlZUX+fRwVqqb70FkIPYAXf4Unup1dR5w+U2+9GZhw+4+3iAqzC27GjeNWvo3IzF9OQcdxpCcuJsh8X+0KUNwa2H7b0NalwlZsvmB4a9AZVX/lzj5dwhjDNmvor3at6N2RgavgnTFPnSFpdfeW9jqTZ6xuCOtMMEO+o3myPuHNbo1AX9aEowJkOADFwDB1555qv8n5I1DNU7SHD1AG8zzRYAvAmRwrwykLvt/co1/37LCgoK9yGNUPV2S7sWAU7InPKw7rDQrOg0rIY4wciR42HtKcVIJ49qnimp3OxUovbZL2EWLe42kppuq22dg9qUJu5TUsfqyzEmugO1Hs10Yuk11eVkG3jtYMko502z70jjEfbmoPHaNTcTz+gphDI722Bc8OwCzhUlzlZKeWCYdqPKxaCWC3gCmyNLYOQp/6MjlBfRY1mHtiJfaQ9Q8KnZ+nSGWa7wszRYCeqsbOmvXPWbA0BNnNVUV7eohooxONMRD2oM4lIo7fnMY3x4wC2Om2UfgaH43Yu8NLwyVT4pUROVddBPpIBWt47FfoklSEsNqj08WlXC2UmGiyor904ZkPHl2bYFYNDoXsD1joAOaOANmOg6hGpgUE9aeG5ebfyxb9OF55WukRi1tsLuTxL5VAGtVLI6XaEZiKeUbcVo4omu6BFo3FB1t5XM6i1riSIUTVBkRa963h1ylGRBSNwQrn5IFCw9LguCR3fQBjHBw3sWq5iGPpZ4vmhlbnzu8NrQ/Qw94BgVESLvIMms85eX1kZk6wMsm+Ol1pAF7cvvhkaNQIGtk4JRJm6ykfTejuxL2RVvq1xJSUKw2fG9waEWcTBVerffYZki0hv7qkLu+PZXLxlxVUL/P4va2T047WTE+1xjrBCRT/+MsyfJzNA3aOhBlLEa6bUT8zBOn1mLznwEbX9d05nXJIO4LW3QKKkIFikHoSBPbff7ZkRo9ua/OBOmhhu1QG+xpPzGuyNu6GAgdxWlCd50qLhCPjM+Be3pxFUmP/DHrndYj8kvfnXEYnpv+eboLDbrkPzaJEIHO2JViRQzNiXIGEm2S1qgXNQo3HDhh/oUjYMI7PkSW1JPTe2NgCsaf6CLAA0AGr7bfMVIK7bxDgxOhs+bXTM0tSTmbkqUb/irWUch1XO9VbUxL2BX1kiBieDS1lqZkVHRvHk4Tfs7juisCyHXBB9P9Rupxx7qYBmPilLAInAV4CbHJre32lUCx4G0BiKBTh0FPwfILuFwuHF0foJjtJFG95i71wtVF4Vl1Hx6y9bTB/DW0SqGTGk381+FYqb+97CJ7Qh/6hC9i5Elf1/Cnzf06VGDXj+XQj8ukg/MEqiAuhodNc/151u3GzNzC3s4edXxrDhtykp4vulyeEC7vI+MO4NMEcq+drMQ99us5xGvrb5eQFS1+zz1fXEW9FnCrNk0JYqmJuFFO+XuNCGLTXaS4r6mMWLTetADkd6PQRU1sNlgOtaU8gTHnR7/CMuGfh9lxKo+20nXJAiAMStNSQ79Qb7LCngEzLV8H6gP4XEcQtXI2B9OCpfboVf4hfCi/FnQA5fGGoCCMBHdhbMMEkJWog0Fh6uy+hfBXPlhN9w8VNiQLykICD81iIWPx8DaQZVQ4Uk/tEuMovrc8xawJNo/sJA/jF8VEFjuLKzXp0xzgAXiMxptIm4TjLqeX3JvMB/de1REyFRcfKFB8bxOsrUcWpPmtosotUDmtA6eOiQCFjMn3M/hKvYvaI8M/VvJ8t1jb6rxhTxEqErKZ61TODa0B2MYj9jEIcKgltDpddH62VZvcKon/HazV3eGfBK6BeJQxYEq1cR22ukRUnlwLg72Uk2cDcH936PJvurzR+BwbfV2j9Yz9O2D0inPgeutbHll3awaM97SPASidDft8pPLI28QOmN4DzrDWwQyG7LEpbp9MFehoFGr5ebFjAcoS4dfv1/jp6ppM5yGoUnFTPcY6uNlhSS8C2a7OlSm8Zi6F5QjkCCQyEOpBGExlp9vi71YcdL3rhcIeqhw+H6QWkhKU9WZoZGdIcXi7UM89eFYruOZPkPUJ+FJOuTxLGm+5h9Laj1BlJ36n/ggPr02CiBz/wOHd7GB0yTRebkQckHIst+vYPZRmYnA6TBAJ8pIymE9gEm/ElSsdmr6evGEvRRAignw2QBoKj25yXE0Kc8vLNS456L7oGKTq9OsdlQT6jNj5NwmlcJA/41izUxSmGyOokPjA5YO/GL4+ifREpEYV4AF8CpEKxPHoNdM/e6g3/tP67Cx8PGAUoxUoE0noiobaHu3/jAFETmCu4PVq0KlvYaNmA/+OkbJB6/rtodSMJQ65PRTRVIfTwPjCshv8KYNFu156wStAayijfwp2/HObC2nnKdDbO4Sp4a/u2au9Hs9MgHcpZrJ5yE32cj66+ppad9JTrTaXXHpceIugGmP0I+TmXMJJfr/w/6KIAg3rp/54Cv1C3U21l9tXfQit7R323/DVjvGAXuesMPLy6Ov4LVtNckdshtV7A72nt3uOvfUbboGKYEhm+fhfrsyiZj+XPWRymn2EKA/eNLg1UBcA7FW88tY+FZPyr3e67nuHaXsaNGKjBS7ZrXFX5EnW1458Wx74/2Z+fwDCKk0yc6htXayHio+9N0QW1KPNx9Fc1o6iEfkK9cvOYzxNSuHwuOr4t0rJIx3+oNR/dA7AQVKyUCjuPGdKBpiASALog7diiAyFcJTM+pTAp27gfQIdGSvJC2Kxd4pm/qCE7I8HgIg/WhmKNDbBJjptJ+QYLZ5QQHR3O+lF04lIFCjTrKKbgAlRQD7tp/cvpsf9LljqjsvxYT5/hG2iTX58/cGajhODED7dAUglQ0jmU/98A54SNxwlQxczU8D0h+oG08o55N8JXj3G7VFPFTQ5/xhmBNxxpP3br87mZ2dPeQmIziKcMAvYJINsuFUS6C0NnyPUsW8Kmx8Z7tshUW3ZfbTyy2lRwEMoALqh+Ttd+0tw+d8YY44tl6XtDe2F5BWrHQSCdwQbzAVFAIDSleuA/jmj72uDJZANnsUXIj80M+qu0UjtM8FPA5PLSOm6zfPEN2DeV+6ij0Jx61+qxus34Rete+HLEjD1i09GVXJICJoZ7F+O9aOZLLsfntj4ulxr+1+NOC255v6YcArRtDTUaF6LeYNKwfv5l6h6q9DOi7xUcqES5j+iAB3BQDvo/gOEJqdZP4E8EbmI+mGS1CxlLXk4ia34JV49j31m2k5La1k9q4FIIsfEgEeB0ivfce6XxdlOkUx78F3Rh0MPANUKXPoJInRmaCDFYTFj9gf/pTsbr6KEeqFbsSTuasn07DDhD3jN8ClTI8vc4vpzQGWcnmhiFXnGgTtgNkPFutjI2p/BP6mw8xA6VhsB7cp3F09Kl7IAAESbcVPhL5HfHc/u1AFtPMMO9DCz1zlFBMhZ6b1znKQKhgWI+a3nuhId9O7E3CH9aSUYZ8nmrijlNNB/75gVnIHyr7mcRp/nuCqXVi4kxkNwdGENXfEhhQPftguHBerBPTCQTKKWuHCjfEh+UoOSG8NRZkfT8r6Qw7ys3vVNH9RTD2b0lTU6vxTHjmCC5ySvWKvcRZuotu0jkCEz0xsYyz5V69RIhRoiSEAO7rz237359WFNR3FD3RWiNruPnqZ8KEASk2/V6lSMpzQq05hh8NtqQ9bD2kzYzwADlo1FX1OFQIuEnxsW7z2iKFBvgSCRhsljxe0dqBuGepklB5iH9YB5sc4umk7YiN740SRTcX2Z/ZhL4cQ2UvS9e4t90MWoJlnWqjCm0k6j0/DF3RVMrpZne2DVY4N9rLIaTBjAoAhokX5qMnwUSgyTOhOdGL1D8gAQgJg6LWP/sxd0Msz6jgdnYptL/aeayV433SvP5sUlK+GhM6Rh3Y44ugd/eAiXnp7mnT+WIQ6f6MU/E47DCNmEa9eJ91htt79e/nR8gAAS7zLLKOpeDmgkQa5KbruhovfLTWdOOhAeT/ZCg8ypsLKLlplANm7Iw+0zYhqxQF1Z4xx8PucILAe0Id+9VbI51DnzQYAFibEflSBEe1Le2E5/JRRWbiDSuCht9IWjzkg1NgjIq8vnmvQABttLEvLlIDNrGt4cK5+1uF6VERVF0Maa9PnfxvqR94VjZ23mcDflzjk1GLp03ldH1pSizyN7ChZTM4CBVScaQDFP3pqKmMP0dN4xA/nmQbt5UQQvd8ETBRvDjTm0Rc1m8ngwsd77XCtAyqGcZHxgAAAAAAAAAAAAAAA" aria-label="Movie Review live demo video">
                  <source src="movie-review-demo.mp4" type="video/mp4" />
                </video>
                <div className="mv-novideo" hidden>
                  <b>
                    Demo video belum tersedia
                  </b>
                  <span>
                    {"Letakkan file "}
                    <code>
                      movie-review-demo.mp4
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
            <div className="mv-dgrid">
              <div>
                <h4>
                  Data Fetching
                </h4>
                <p>
                  useFetch and useFetchDetails return data, loading, error and a reload function, and ignore stale responses. usePagedFetch merges pages without duplicates for Browse and Search. The details page loads credits, videos, similar and recommendations in one request with append_to_response.
                </p>
              </div>
              <div>
                <h4>
                  {"State & Persistence"}
                </h4>
                <p>
                  userSlice keeps auth, watchlist, ratings and reviews. A store.subscribe listener writes them to localStorage only when those slices change, and auth is hydrated at startup so the header updates right after login.
                </p>
              </div>
              <div>
                <h4>
                  {"Routing & UI"}
                </h4>
                <p>
                  Browse filters live in the URL through useSearchParams, so every view is shareable. useDebounce limits search requests, useOutsideClick closes menus, and a toast context replaces alerts. Skeletons and an error state with retry cover slow or failed requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      </>
  );
}
