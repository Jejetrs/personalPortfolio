import PrivateLink from "./PrivateLink.jsx";

export default function SmartFocusAlertDeveloperCard() {
  return (
      <>
      <style>{`
.sf{--ink:#172b48;--line:#dae6f7;--txt:#192c46;--mut:#637891;--brand:#215cc3;color:var(--txt);font-size:13px;line-height:1.5}
.sf *{box-sizing:border-box}
.sf h2,.sf h3,.sf h4,.sf p,.sf ul,.sf ol{margin:0;padding:0}
.sf.project-card-item{display:block!important;padding:20px 22px!important;border:1px solid #d3e3f6!important;border-radius:20px!important;background:linear-gradient(115deg,#fcfeff,#f4f9ff)!important;box-shadow:0 12px 34px #20466c0c!important}
.sf .project-card-header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:14px;margin-bottom:0;border-bottom:1px solid var(--line)}
.sf .taglist{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.sf .sf-number{display:grid;place-items:center;width:29px;height:29px;border-radius:50%;background:#205dc4;color:#fff;font-size:11px;font-weight:800}
.sf .tag{border:1px solid #d0e1fa;border-radius:99px;padding:5px 10px;background:#fff;color:#2960a5;font-size:10px;font-weight:700}.sf .tag.primary{background:#ebf3ff;color:#1954b5}
.sf .headerlink,.sf .footer a.solid{background:#225dbf;color:#fff;text-decoration:none;font-size:11px;font-weight:750;padding:9px 14px;border-radius:9px;white-space:nowrap}
.sf .headerlink:hover{background:#1a4ca3}
.sf code{font:600 10.5px ui-monospace,SFMono-Regular,Menlo,monospace;background:#e8f1ff;color:#1c4f9f;border-radius:5px;padding:1px 5px}
.sf .hero{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:18px;margin-top:18px;align-items:start}
.sf .hero>*{min-width:0}
.sf .title{font-size:clamp(32px,3.2vw,46px);line-height:1.05;letter-spacing:-.05em;color:#182c49;font-weight:800}.sf .title span{color:#2c68c7}
.sf .overline{color:#2161bd;font-size:10px;font-weight:800;letter-spacing:.09em;margin-top:8px;text-transform:uppercase}
.sf .lead{color:#56708e;font-size:13px;line-height:1.6;margin-top:9px;max-width:70ch}
.sf .metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:15px}
.sf .metric{background:#fff;border:1px solid var(--line);border-radius:11px;padding:12px 9px;min-width:0}.sf .metric b{display:block;font-size:13px;color:#195aaf;line-height:1.2}.sf .metric small{display:block;font-size:10px;color:#7589a2;margin-top:3px}
.sf .panel{margin-top:10px;background:#fff;border:1px solid var(--line);border-radius:13px;padding:13px}
.sf .panel h3{font-size:13px;font-weight:800;margin-bottom:9px;color:#223852}
.sf .steps{list-style:none;display:grid;gap:7px}
.sf .steps li{display:grid;grid-template-columns:20px minmax(0,1fr);gap:8px;align-items:start;font-size:11px;color:#69819d;line-height:1.5}
.sf .steps i{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#eef6ff;color:#285b98;border:1px solid #d6e5fa;font-family:inherit;font-weight:800;font-size:10px;line-height:1;font-style:normal}
.sf .steps b{color:#274c7e;font-weight:750}
.sf .steps em{font-style:normal;font-size:9.5px;font-weight:750;background:#eef6ff;color:#285b98;border:1px solid #e0ebf8;border-radius:6px;padding:1px 6px;margin-left:3px;white-space:nowrap}
.sf .featuregrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.sf .featuregrid>div{min-width:0;padding:9px 10px;border:1px solid #e1eaf7;background:#f8fbff;border-radius:9px}
.sf .featuregrid strong{display:block;font-size:11px;color:#274c7e}.sf .featuregrid small{display:block;font-size:10.5px;color:#7387a1;margin-top:3px;line-height:1.5}
.sf .sf-goto{margin-top:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;text-align:left;cursor:pointer;border:1px dashed #a9c6ee;background:#f1f7ff;border-radius:11px;padding:9px 13px;color:#1c5ab4;font:inherit;transition:background .2s,border-color .2s}
.sf .sf-goto:hover{background:#e4efff;border-color:#4979ce}
.sf .sf-goto b{display:block;font-size:11.5px}.sf .sf-goto small{display:block;font-size:10.5px;color:var(--mut)}.sf .sf-goto>span:last-child{font-size:16px;font-weight:800;flex:none}
.sf .demo-area{border:1px solid #d6e5fa;background:#fff;border-radius:15px;padding:13px;box-shadow:0 9px 26px #1d40750b;min-width:0}
.sf .demo-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:11px}.sf .demo-head strong{font-size:14px;color:#223852}.sf .demo-head span{font-size:10px;color:#6d86a6;background:#f0f6ff;padding:5px 8px;border-radius:40px}
.sf .demo-foot{font-size:10px;color:#8193a9;margin-top:9px}
.sf .flowline{display:flex;flex-wrap:wrap;align-items:center;gap:6px}.sf .flowline span{background:#eef6ff;color:#285b98;border:1px solid #e0ebf8;padding:7px 8px;border-radius:8px;font-size:10px;font-weight:750}.sf .flowline i{font-style:normal;color:#8ba7c9}.sf .panel p{font-size:11px;color:#69819d;margin-top:8px}
.sf .details{margin-top:10px;background:#f1f7ff;border:1px solid #d9e8fa;border-radius:11px;padding:0 13px}
.sf .details summary{cursor:pointer;padding:11px 0;font-weight:750;color:#255b9c;font-size:11px;list-style:none;display:flex;justify-content:space-between}.sf .details summary::-webkit-details-marker{display:none}
.sf .details[open] summary span{transform:rotate(45deg)}.sf .details summary span{transition:transform .2s;font-size:14px;line-height:1}
.sf .detailsgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;border-top:1px solid #d9e8fa;padding:12px 0 14px}.sf .detailsgrid b{font-size:11px;color:#274c7e}.sf .detailsgrid p{font-size:11px;color:#617992;margin-top:3px;line-height:1.5}
.sf .detailsgrid .sf-code{grid-column:1/-1}
.sf .sf-code{background:#13243d;border-radius:10px;padding:12px 14px;color:#dbe7fb;min-width:0}
.sf .sf-code header{display:flex;align-items:center;gap:6px;margin-bottom:8px}.sf .sf-code header i{width:8px;height:8px;border-radius:9999px;background:#2f4a73}.sf .sf-code header span{margin-left:auto;font:600 10px ui-monospace,Menlo,monospace;color:#8fa8cf}
.sf .sf-code pre{margin:0;overflow-x:auto;font:500 10.5px/1.65 ui-monospace,SFMono-Regular,Menlo,monospace;color:#dbe7fb;white-space:pre}
.sf .sf-code .c{color:#7b93b8}.sf .sf-code .k{color:#7dd3fc}.sf .sf-code .f{color:#fcd34d}.sf .sf-code .s{color:#86efac}
.sf .sf-gallery{margin-top:16px;padding:16px;border:1px solid #dce7f7;border-radius:14px;background:#fff;min-width:0;width:100%}
.sf .sf-gallery-heading{display:flex;justify-content:space-between;align-items:center;gap:9px;margin-bottom:11px}
.sf .sf-gallery-heading h3{margin:0;font-size:12px;color:#223852;font-weight:800}.sf .sf-gallery-heading p{margin:2px 0 0;font-size:10px;color:#7d91aa}
.sf .sf-gallery-nav{display:flex;align-items:center;gap:7px;flex-shrink:0}
.sf .sf-gallery-nav button{width:28px;height:28px;border:1px solid #cddff6;border-radius:8px;background:#f4f8ff;color:#255db0;cursor:pointer}
.sf .sf-gallery-nav button:disabled{opacity:.35;cursor:not-allowed}
.sf .sf-gallery-nav span{font-size:10px;min-width:27px;text-align:center;color:#6683a5}
.sf .sf-gal-track{display:flex;gap:9px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:thin;padding-bottom:8px}
.sf .sf-gal-slide{flex:0 0 min(31.8%,340px);margin:0;scroll-snap-align:start;border:1px solid #dce9fa;border-radius:10px;background:#fff;overflow:hidden;min-width:0}
.sf .sf-gal-open{display:block;width:100%;padding:0;border:0;background:#eef5ff;cursor:zoom-in;aspect-ratio:16/9;overflow:hidden}
.sf .sf-gal-open img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
.sf .sf-gal-slide figcaption{padding:9px 10px}.sf .sf-gal-slide figcaption strong{display:block;color:#294d78;font-size:10.5px}.sf .sf-gal-slide figcaption span{display:block;color:#7a8ea8;font-size:10px;margin-top:3px;line-height:1.4}
.sf .footer{border-top:1px solid var(--line);margin-top:15px;padding-top:13px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;color:#8799af;font-size:10px}
.sf .footer .links{display:flex;gap:8px;flex-wrap:wrap}
.sf .footer a{font-size:11px;font-weight:750;text-decoration:none;padding:7px 11px;border-radius:9px;color:#1c5ab4;border:1px solid #c8ddf7;background:transparent}
.sf .footer a:hover{background:#edf5ff}.sf .footer a.solid{color:#fff;background:#225dbf;border-color:#225dbf}.sf .footer a.solid:hover{background:#1a4ca3}
.sf a:focus-visible,.sf button:focus-visible,.sf input:focus-visible{outline:2px solid #77aaff;outline-offset:2px}

.sf .sf-dl{background:linear-gradient(160deg,#2a2070 0%,#17133a 62%,#120f2c 100%);border:1px solid #3a3385;border-radius:24px;padding:14px 16px 12px;color:#e9e6ff;box-shadow:0 18px 44px rgba(26,16,80,.35)}
.sf .sf-dl-h{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:4px 12px}
.sf .sf-dl-h h3{font-size:21px;font-weight:800;letter-spacing:-.02em;color:#fff}
.sf .sf-dl-h span{font-size:12px;color:#b9b3e8}
.sf .sf-dl-h code{background:#d9d3ff;color:#3b21a8;font-size:11.5px;padding:2px 8px;border-radius:7px}
.sf .sf-dl-chips{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 12px}
.sf .sf-dl-chip{cursor:pointer;border:1px solid #4a4295;background:transparent;color:#e1ddff;border-radius:9999px;padding:7px 15px;font:inherit;font-size:13px;font-weight:600;line-height:1.2;transition:background .2s,color .2s,border-color .2s}
.sf .sf-dl-chip:hover{background:rgba(255,255,255,.08)}
.sf .sf-dl-chip[aria-pressed=true]{background:#f1efff;color:#1c1844;border-color:#f1efff}
.sf .sf-dl button:focus-visible,.sf .sf-dl input:focus-visible{outline:3px solid #c4b5fd;outline-offset:2px}
.sf .sf-dl-grid{display:grid;grid-template-columns:150px minmax(0,1fr);gap:16px;align-items:start}
.sf .sf-dl-face svg{display:block;width:100%;height:auto;border-radius:14px}
.sf .sf-dl-pill{margin-top:10px;display:block;text-align:center;background:#8b7cf6;color:#15112e;font-size:12.5px;font-weight:800;letter-spacing:.03em;border-radius:9999px;padding:9px 6px}
.sf .sf-dl-ctrls{display:flex;flex-direction:column;gap:6px;min-width:0}
.sf .sf-dl-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 10px;align-items:baseline}
.sf .sf-dl-row label{font-size:13px;font-weight:600;color:#f1efff}
.sf .sf-dl-row label em{font-style:normal;font-weight:500;color:#b9b3e8}
.sf .sf-dl-row output{font:700 12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff}
.sf .sf-dl-row input[type=range]{grid-column:1/-1}
.sf .sf-dl input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:22px;margin:0;background:transparent;cursor:pointer;--p:50%}
.sf .sf-dl input[type=range]::-webkit-slider-runnable-track{height:8px;border-radius:9999px;background:linear-gradient(90deg,#8b7cf6 var(--p),#3d3c4f var(--p))}
.sf .sf-dl input[type=range]::-moz-range-track{height:8px;border-radius:9999px;background:linear-gradient(90deg,#8b7cf6 var(--p),#3d3c4f var(--p))}
.sf .sf-dl input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;margin-top:-7px;border-radius:9999px;background:#8b7cf6;border:3px solid #b9aefc;box-shadow:0 2px 8px rgba(0,0,0,.35)}
.sf .sf-dl input[type=range]::-moz-range-thumb{width:16px;height:16px;border-radius:9999px;background:#8b7cf6;border:3px solid #b9aefc}
.sf .sf-dl-check{display:flex;align-items:center;gap:10px;font-size:13px;font-weight:600;color:#f1efff;cursor:pointer;width:max-content}
.sf .sf-dl-check input{width:18px;height:18px;margin:0;accent-color:#3b6cf0}
.sf .sf-dl-sep{height:1px;background:#3a3385;margin:10px 0 8px}
.sf .sf-dl-why{font-size:14.5px;font-weight:600;color:#fff;line-height:1.45}
.sf .sf-dl-prog{height:8px;border-radius:9999px;background:#3d3c4f;overflow:hidden;margin:8px 0 8px}
.sf .sf-dl-prog i{display:block;height:100%;width:0;border-radius:9999px;background:#8b7cf6;transition:width .25s ease}
.sf .sf-dl-time{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 14px;align-items:center}
.sf .sf-dl-time .sf-dl-row{grid-column:1}
.sf .sf-dl-replay{grid-column:2;grid-row:1/3;cursor:pointer;border:1px solid #4a4295;background:#2b2575;color:#fff;border-radius:14px;padding:9px 18px;font:inherit;font-size:14px;font-weight:600}
.sf .sf-dl-replay:hover{background:#38309a}
.sf .sf-dl-alert{margin-top:8px;border:1px solid #4a4295;background:rgba(255,255,255,.04);color:#d4cffb;border-radius:12px;padding:8px 12px;font-size:12.5px;line-height:1.45}
.sf .sf-dl-alert.is-fired{border-color:#f59e0b;background:rgba(245,158,11,.12);color:#fde2b0}
.sf .sf-dl{padding:12px 14px 10px;border-radius:20px}
.sf .sf-dl-h h3{font-size:18px}
.sf .sf-dl-chips{margin:8px 0 10px;gap:6px}.sf .sf-dl-chip{padding:5px 12px;font-size:12px}
.sf .sf-dl-grid{grid-template-columns:120px minmax(0,1fr);gap:14px}
.sf .sf-dl-pill{margin-top:7px;padding:7px 4px;font-size:11.5px}
.sf .sf-dl-ctrls{gap:3px}.sf .sf-dl-row label{font-size:12px}
.sf .sf-dl input[type=range]{height:18px}
.sf .sf-dl-check{font-size:12px}
.sf .sf-dl-sep{margin:8px 0 6px}
.sf .sf-dl-why{font-size:13px}
.sf .sf-dl-prog{margin:6px 0}
.sf .sf-dl-replay{padding:7px 14px;font-size:13px}
.sf .sf-dl-alert{margin-top:6px;padding:6px 10px;font-size:12px}
.sf .sf-dl-grid{grid-template-columns:130px minmax(0,1fr);gap:16px}
.sf .sf-dl-h span{font-size:11px}
.sf .sf-dl-chip{padding:4px 10px;font-size:11.5px}
.sf .sf-dl-row label{font-size:11.5px}.sf .sf-dl-row label em{display:block}
.sf .sf-dl-time{grid-template-columns:minmax(0,1fr)}.sf .sf-dl-replay{grid-column:1;grid-row:auto;justify-self:start;margin-top:4px}
@media (max-width:640px){.sf .sf-dl-grid{grid-template-columns:minmax(0,1fr)}.sf .sf-dl-face{max-width:170px}}
@media (prefers-reduced-motion:reduce){.sf .sf-dl-prog i{transition:none}}
@media(max-width:1060px){.sf .hero{grid-template-columns:minmax(0,1fr)}}
@media(max-width:780px){.sf .sf-gal-slide{flex-basis:min(73%,330px)}.sf .detailsgrid{grid-template-columns:1fr}}
@media(max-width:520px){.sf .sf-gal-slide{flex-basis:88%}}
@media(max-width:640px){.sf.project-card-item{padding:14px!important}.sf .project-card-header{align-items:flex-start;flex-wrap:wrap}.sf .metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.sf .featuregrid{grid-template-columns:minmax(0,1fr)}.sf .footer{flex-wrap:wrap}}

.sf .sf-goto-link{font:inherit;font-size:11px;font-weight:750;padding:7px 11px;border-radius:9px;color:#1c5ab4;border:1px dashed #a9c6ee;background:#f1f7ff;cursor:pointer}.sf .sf-goto-link:hover{background:#e4efff}

.sf .lab-wrap{min-width:0}
.sf .lab-wrap .sf-dl{border-radius:15px}

.sf .sf-hood-body{padding:12px 14px;display:flex;flex-direction:column;gap:10px}
.sf .sf-hood-body h4{font-size:11.5px;font-weight:800;color:#274c7e}
.sf .sf-hood-body .sf-code{padding:10px 12px}
.sf .sf-hood-body ul{list-style:none;display:grid;gap:7px}
.sf .sf-hood-body li b{font-size:11px;color:#274c7e}.sf .sf-hood-body li p{font-size:10.5px;color:#617992;line-height:1.45;margin-top:1px}
@media(max-width:780px){.sf .sf-gal-hood{flex-basis:min(88%,420px)}}

.sf .sf-gal-track{align-items:flex-start}

.sf .sf-code-frame{aspect-ratio:16/9;background:#13243d;display:flex;align-items:center;justify-content:center;overflow:hidden}
.sf .sf-code-frame .sf-code{background:transparent;padding:0 14px;width:100%}
.sf .sf-code-frame .sf-code pre{font-size:9.5px;line-height:1.55;overflow:hidden}
.sf .sf-code-frame .sf-code header{margin-bottom:6px}

/* Developer card */
.sf.project-card-item{padding:1.25rem!important;border:1px solid #dbeafe!important;border-radius:1.5rem!important;background:linear-gradient(135deg,#f6f8fd,#eef4ff)!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}
@media(min-width:640px){.sf.project-card-item{padding:1.5rem!important}}
.sf{color:#0f172a;font-size:12px;line-height:1.5}
.sf .sf-number{width:24px;height:24px;font-size:12px;font-weight:700;background:#1d4ed8;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.sf .tag{font-size:.75rem;font-weight:600;line-height:1.15rem;padding:.25rem .75rem;color:#1e3a8a;background:#ffffffcc;border:1px solid #bfdbfeb3;box-shadow:0 1px 2px rgba(0,0,0,.05)}.sf .tag.primary{background:#dbeafeb3}
.sf .headerlink{background:#1d4ed8;font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.45rem .95rem;border-radius:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}.sf .headerlink:hover{background:#1e40af}
.sf .title{color:#0f172a;letter-spacing:-.025em;line-height:1.2}.sf .title span{color:#1d4ed8}
.sf .overline{font-size:.75rem;font-weight:700;letter-spacing:.05em;color:#1e40af;margin-top:.25rem}
.sf .lead{font-size:12px;line-height:1.625;color:#334155;margin:.75rem 0;max-width:none}
@media(min-width:640px){.sf .lead{font-size:14px}}
.sf .metrics{gap:6px;margin:.75rem 0}
.sf .metric{display:flex;flex-direction:column-reverse;text-align:center;border-radius:12px;padding:8px;background:#ffffffe6;border:1px solid #dbeafe;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.sf .metric small{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;line-height:1.25;margin:0}
.sf .metric b{font-size:12px;font-weight:800;color:#1d4ed8;line-height:1.5}
.sf .panel,.sf .sf-gallery{background:#fffffff2;border:1px solid #dbeafe;border-radius:12px;padding:12px;margin-top:.75rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.sf .panel h3,.sf .sf-gallery-heading h3{font-size:11px;font-weight:700;color:#1e293b;margin-bottom:8px;line-height:1.4}.sf .sf-gallery-heading h3{margin-bottom:0}
.sf .flowline span{font-size:9.5px;font-weight:600;padding:6px 8px;border-radius:8px;background:#eff6ffb3;border:1px solid #dbeafe;color:#334155}
.sf .panel p{font-size:9.5px;color:#64748b;line-height:1.4}
.sf .featuregrid{gap:6px}.sf .featuregrid>div{padding:8px 10px;background:#eff6ffb3;border:1px solid #dbeafe;border-radius:8px}
.sf .featuregrid strong{font-size:11px;font-weight:700;color:#1e293b}.sf .featuregrid small{font-size:9.5px;line-height:1.4;color:#475569}
.sf .sf-gallery-heading p{font-size:9.5px;color:#94a3b8}
.sf .sf-gal-slide{border:1px solid #dbeafe;border-radius:12px}.sf .sf-gal-slide figcaption strong{font-size:10px;font-weight:700;color:#334155}.sf .sf-gal-slide figcaption span{font-size:9px;color:#94a3b8}
.sf .sf-gallery-nav button{border-color:#dbeafe;background:#fff;color:#1d4ed8;border-radius:8px}.sf .sf-gallery-nav span{font-family:ui-monospace,Menlo,monospace;font-size:10px;color:#94a3b8}
.sf .footer{font-size:10px;color:#94a3b8}.sf .footer a,.sf .footer .sf-goto-link{font-size:11px;font-weight:600;border-radius:12px;padding:6px 12px;border:1px solid #dbeafe;background:#fff;color:#1d4ed8;box-shadow:0 1px 2px rgba(0,0,0,.05)}
@media(max-width:640px){.sf.project-card-item{padding:1.25rem!important}}

.sf{--dev-acc:#1d4ed8;--dev-line:#bfdbfe}

`}</style>
      <article className="project-card-item sf relative overflow-hidden" id="smart-focus-alert-developer-card" data-category="developer fullstack flask computer-vision" data-live-url="https://www.figma.com/proto/pBIGNOVNe6UQSEpDH3sqxK/SMART-FOCUS?node-id=19-556&p=f&t=h6tQAszTVhB3iYr3-1&scaling=scale-down-width&content-scaling=fixed&page-id=9%3A108&starting-point-node-id=19%3A556" data-live-health="https://smartfocus.up.railway.app/">
        <div className="dev-top">
          <div className="dev-tags">
            <span className="dev-num sf-number">
              05
            </span>
            <span className="dev-tag role">
              Full-stack Developer
            </span>
            <span className="dev-tag">
              Flask
            </span>
            <span className="dev-tag">
              MediaPipe · OpenCV
            </span>
            <span className="dev-tag">
              JavaScript
            </span>
            <span className="dev-tag">
              Docker
            </span>
            
          </div>
          <div className="dev-actions">
            <PrivateLink label="GitHub" restricted />
            <button type="button" className="dev-btn ghost" data-sf-goto="uiux" data-sf-target="smart-focus-alert-card-1">
              UI/UX case study ↗
            </button>
            <span className="dev-switch" data-live-badge="" data-state="checking" role="switch" aria-checked="false" aria-readonly="true" aria-disabled="true" aria-label="Live deploy status" tabIndex="-1">
              <span className="dev-switch-label">Live deploy</span>
              <span className="dev-switch-track"><i></i></span>
              <span className="dev-switch-text" data-live-text="">Checking…</span>
            </span>
            <a className="dev-btn solid" hidden data-live-link="" target="_blank" rel="noopener noreferrer">Open Live App ↗</a>
          </div>
        </div>
        <div className="hero">
          <section className="overview">
            <h2 className="title">
              {"Smart Focus "}
              <span>
                Alert
              </span>
            </h2>
            <div className="overline">
              FULL-STACK DEVELOPMENT · COMPUTER VISION
            </div>
            <p className="lead">
              A Flask web app that monitors attention through webcam or uploaded media, detects drowsiness and distraction, and generates audio alerts and session reports.
            </p>
            <div className="metrics">
              <div className="metric">
                <b>
                  Flask
                </b>
                <small>
                  Python backend
                </small>
              </div>
              <div className="metric">
                <b>
                  MediaPipe
                </b>
                <small>
                  Face landmarks
                </small>
              </div>
              <div className="metric">
                <b>
                  Browser APIs
                </b>
                <small>
                  {"Camera & alerts"}
                </small>
              </div>
              <div className="metric">
                <b>
                  PDF + Video
                </b>
                <small>
                  Generated output
                </small>
              </div>
            </div>
            <section className="panel compact">
              <h3>
                How it works
              </h3>
              <div className="flowline">
                <span>
                  Browser frame
                </span>
                <i>
                  →
                </i>
                <span>
                  Flask + MediaPipe
                </span>
                <i>
                  →
                </i>
                <span>
                  Detection rules
                </span>
                <i>
                  →
                </i>
                <span>
                  Alert / report
                </span>
              </div>
              <p>
                JavaScript captures frames. Python processes facial landmarks; the browser plays alerts and presents results.
              </p>
            </section>
            <section className="panel compact">
              <h3>
                Tech Stack
              </h3>
              <div className="featuregrid">
                <div>
                  <strong>
                    Frontend
                  </strong>
                  <small>
                    JavaScript ES6+ · HTML/CSS · Canvas · MediaDevices · Web Audio · Speech Synthesis
                  </small>
                </div>
                <div>
                  <strong>
                    {"Backend & Vision"}
                  </strong>
                  <small>
                    Python 3.11 · Flask 2.3 · MediaPipe · OpenCV · SciPy
                  </small>
                </div>
                <div>
                  <strong>
                    Reports
                  </strong>
                  <small>
                    ReportLab · Annotated video output
                  </small>
                </div>
                <div>
                  <strong>
                    Deployment
                  </strong>
                  <small>
                    Docker · Gunicorn · Railway · Health check
                  </small>
                </div>
              </div>
            </section>
          </section>
          <section className="lab-wrap">
            <div className="sf-dl" data-sf-lab="" aria-label="Detection lab">
              <div className="sf-dl-h">
                <h3>
                  Detection lab
                </h3>
                <span>
                  {"Thresholds taken from "}
                  <code>
                    app.py
                  </code>
                </span>
              </div>
              <div className="sf-dl-chips" role="group" aria-label="Preset states">
                <button type="button" className="sf-dl-chip" data-sf-preset="focused" aria-pressed="false">
                  Focused
                </button>
                {" "}
                <button type="button" className="sf-dl-chip" data-sf-preset="drowsy" aria-pressed="false">
                  Drowsy
                </button>
                {" "}
                <button type="button" className="sf-dl-chip" data-sf-preset="yawning" aria-pressed="false">
                  Yawning
                </button>
                {" "}
                <button type="button" className="sf-dl-chip" data-sf-preset="away" aria-pressed="true">
                  Looking away
                </button>
                {" "}
                <button type="button" className="sf-dl-chip" data-sf-preset="nobody" aria-pressed="false">
                  Nobody there
                </button>
              </div>
              <div className="sf-dl-grid">
                <div className="sf-dl-face">
                  <svg viewBox="0 0 160 160" role="img" aria-label="Face that reacts to the sliders" xmlns="http://www.w3.org/2000/svg">
                    <rect width="160" height="160" rx="14" fill="#1b1744"></rect>
                    <g data-sf="brackets" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M14 34V16h18"></path>
                      <path d="M128 16h18v18"></path>
                      <path d="M146 126v18h-18"></path>
                      <path d="M32 144H14v-18"></path>
                    </g>
                    <g data-sf="head">
                      <ellipse cx="80" cy="82" rx="40" ry="52" fill="#221d5a" stroke="#6d5fc0" strokeWidth="1.6"></ellipse>
                      <clipPath id="sf-dl-cl">
                        <ellipse data-sf-eye="" cx="64" cy="70" rx="10" ry="5"></ellipse>
                      </clipPath>
                      <clipPath id="sf-dl-cr">
                        <ellipse data-sf-eye="" cx="96" cy="70" rx="10" ry="5"></ellipse>
                      </clipPath>
                      <ellipse data-sf-eye="" cx="64" cy="70" rx="10" ry="5" fill="#fff"></ellipse>
                      <ellipse data-sf-eye="" cx="96" cy="70" rx="10" ry="5" fill="#fff"></ellipse>
                      <circle data-sf-iris="" data-base="64" cy="70" r="4.2" fill="#8b7cf6" clipPath="url(#sf-dl-cl)"></circle>
                      <circle data-sf-iris="" data-base="96" cy="70" r="4.2" fill="#8b7cf6" clipPath="url(#sf-dl-cr)"></circle>
                      <ellipse data-sf="mouth" cx="80" cy="113" rx="14" ry="3.4" fill="none" stroke="#f472b6" strokeWidth="1.8"></ellipse>
                    </g>
                  </svg>
                  {" "}
                  <span className="sf-dl-pill" data-sf="pill">
                    NOT FOCUSED
                  </span>
                </div>
                <div className="sf-dl-ctrls">
                  <div className="sf-dl-row">
                    <label htmlFor="sf-dl-ear">
                      {"Eye openness "}
                      <em>
                        (EAR, closed below 0.15)
                      </em>
                    </label>
                    <output data-sf="ear-v" htmlFor="sf-dl-ear">
                      0.30
                    </output>
                    <input type="range" id="sf-dl-ear" data-sf="ear" min="0" max="0.42" step="0.01" defaultValue="0.30" />
                  </div>
                  <div className="sf-dl-row">
                    <label htmlFor="sf-dl-mar">
                      {"Mouth opening "}
                      <em>
                        (MAR, yawn above 0.50)
                      </em>
                    </label>
                    <output data-sf="mar-v" htmlFor="sf-dl-mar">
                      0.12
                    </output>
                    <input type="range" id="sf-dl-mar" data-sf="mar" min="0" max="0.7" step="0.01" defaultValue="0.12" />
                  </div>
                  <div className="sf-dl-row">
                    <label htmlFor="sf-dl-iris">
                      {"Iris offset "}
                      <em>
                        (not focused above 2.5 px)
                      </em>
                    </label>
                    <output data-sf="iris-v" htmlFor="sf-dl-iris">
                      4.5 px
                    </output>
                    <input type="range" id="sf-dl-iris" data-sf="iris" min="0" max="6" step="0.1" defaultValue="4.5" />
                  </div>
                  <label className="sf-dl-check">
                    <input type="checkbox" data-sf="face-on" defaultChecked />
                    Face visible in frame
                  </label>
                </div>
              </div>
              <div className="sf-dl-sep"></div>
              <p className="sf-dl-why" data-sf="why" aria-live="polite">
                The iris is 4.5 px off centre, past the 2.5 px limit.
              </p>
              <div className="sf-dl-prog" role="progressbar" aria-label="Progress toward the alert" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" data-sf="prog-wrap">
                <i data-sf="prog" style={{ width: "100%" }}></i>
              </div>
              <div className="sf-dl-time">
                <div className="sf-dl-row">
                  <label htmlFor="sf-dl-time">
                    Time spent in this state
                  </label>
                  <output data-sf="time-v" htmlFor="sf-dl-time">
                    14 s
                  </output>
                  <input type="range" id="sf-dl-time" data-sf="time" min="0" max="16" step="0.5" defaultValue="14" />
                </div>
                <button type="button" className="sf-dl-replay" data-sf="replay">
                  Replay
                </button>
              </div>
              <p className="sf-dl-alert is-fired" data-sf="alert" aria-live="polite">
                Alert fired at 8 s: 400 Hz beep and a spoken message. 1 reminder so far, one every 5 s.
              </p>
            </div>
            <p className="demo-foot">
              Thresholds come from the original Python logic. The demo does not use your camera or call the Flask server.
            </p>
          </section>
        </div>
        <section aria-label="Original running project output" className="sf-gallery" data-gallery="">
          <div className="sf-gallery-heading">
            <div>
              <h3>
                Running App Screens
              </h3>
              <p>
                Screens from the deployed app · click to enlarge
              </p>
            </div>
            <div className="sf-gallery-nav">
              <button aria-label="Previous screenshot" data-gal-prev="" type="button">
                ←
              </button>
              <span data-gal-counter="">
                1 / 6
              </span>
              <button aria-label="Next screenshot" data-gal-next="" type="button">
                →
              </button>
            </div>
          </div>
          <div className="sf-gal-track" data-gal-track="" tabIndex="0">
            <figure className="sf-gal-slide">
              <div className="sf-code-frame">
                <div className="sf-code">
                  <header>
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>
                      app.py · model_detect()
                    </span>
                  </header>
                  <pre>
                    <span className="c">
                      {"# EAR from six eye landmarks"}
                    </span>
                    {"\near = ("}
                    <span className="f">
                      {"euclid"}
                    </span>
                    {"(p2, p6) + "}
                    <span className="f">
                      {"euclid"}
                    </span>
                    {"(p3, p5))\n      / ("}
                    <span className="k">
                      {"2.0"}
                    </span>
                    {" * "}
                    <span className="f">
                      {"euclid"}
                    </span>
                    {"(p1, p4))\n"}
                    <span className="c">
                      {"# priority-ordered state"}
                    </span>
                    {"\n"}
                    <span className="k">
                      {"if"}
                    </span>
                    {"   ear < "}
                    <span className="k">
                      {"0.15"}
                    </span>
                    {": state = "}
                    <span className="s">
                      {"\"SLEEPING\""}
                    </span>
                    {"\n"}
                    <span className="k">
                      {"elif"}
                    </span>
                    {" mar > "}
                    <span className="k">
                      {"0.5"}
                    </span>
                    {":  state = "}
                    <span className="s">
                      {"\"YAWNING\""}
                    </span>
                    {"\n"}
                    <span className="k">
                      {"elif"}
                    </span>
                    {" "}
                    <span className="k">
                      {"not"}
                    </span>
                    {" focused:\n      state = "}
                    <span className="s">
                      {"\"NOT FOCUSED\""}
                    </span>
                    {"\n"}
                    <span className="c">
                      {"# alert only after the hold time"}
                    </span>
                    {"\n"}
                    <span className="k">
                      {"if"}
                    </span>
                    {" duration >= THRESHOLDS[state]:\n    "}
                    <span className="f">
                      {"trigger_alert"}
                    </span>
                    {"(state)"}
                  </pre>
                </div>
              </div>
              <figcaption>
                <strong>
                  Detection logic
                </strong>
                <span>
                  Priority-ordered state check from app.py.
                </span>
              </figcaption>
            </figure>
            <figure className="sf-gal-slide">
              <button type="button" className="sf-gal-open" data-gal-open="" aria-label="Enlarge: No-person detection">
                <img alt="No-person detection" loading="lazy" src="/assets/projects/AI%20ML%20Engineer/Smart%20Focus%20Alert/Deteksi%20no%20Person%20Full.webp" />
              </button>
              <figcaption>
                <strong>
                  No-person detection
                </strong>
                <span>
                  State shown when no person is in frame.
                </span>
              </figcaption>
            </figure>
            <figure className="sf-gal-slide">
              <button type="button" className="sf-gal-open" data-gal-open="" aria-label="Enlarge: Session result page">
                <img alt="Session result page" loading="lazy" src="/assets/projects/AI%20ML%20Engineer/Smart%20Focus%20Alert/Result%20Page.webp" />
              </button>
              <figcaption>
                <strong>
                  Session result page
                </strong>
                <span>
                  Result page after a monitoring session.
                </span>
              </figcaption>
            </figure>
            <figure className="sf-gal-slide">
              <button type="button" className="sf-gal-open" data-gal-open="" aria-label="Enlarge: PDF report">
                <img alt="PDF report" loading="lazy" src="/assets/projects/AI%20ML%20Engineer/Smart%20Focus%20Alert/Sample%20PDF%20Report%20Live.webp" />
              </button>
              <figcaption>
                <strong>
                  PDF report
                </strong>
                <span>
                  Sample PDF report from a live session.
                </span>
              </figcaption>
            </figure>
            <figure className="sf-gal-slide">
              <button type="button" className="sf-gal-open" data-gal-open="" aria-label="Enlarge: Portfolio design mockup">
                <img alt="Portfolio design mockup" loading="lazy" src="/assets/projects/UI%20UX/smart%20focus%20alert/Desain%20Mockup%20Portfolio.jpg" />
              </button>
              <figcaption>
                <strong>
                  Portfolio design mockup
                </strong>
                <span>
                  Smart Focus Alert portfolio design mockup.
                </span>
              </figcaption>
            </figure>
            <figure className="sf-gal-slide">
              <button type="button" className="sf-gal-open" data-gal-open="" aria-label="Enlarge: Time calculation">
                <img alt="Time calculation" loading="lazy" src="/assets/projects/UI%20UX/smart%20focus%20alert/Time%20Calculate.webp" />
              </button>
              <figcaption>
                <strong>
                  Time calculation
                </strong>
                <span>
                  Time calculation view.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      </article>
      </>
  );
}
