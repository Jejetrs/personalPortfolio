
export default function TrusteeBusinessCard() {
  return (
      <>
      <style id="trustee-business-card-styles">{`
#trustee-business-card{--dev-acc:#4f46e5;--ink:#14203f;--muted:#5d6b86;--line:#e2e8f4;--navy:#0f1a38;--indigo:#4f46e5;--orange:#f07838;position:relative;background:#fff;color:var(--ink);font-family:inherit;font-size:13px;line-height:1.6;border:1px solid #dde3f2;border-radius:28px;overflow:hidden;padding:clamp(10px,1.6vw,16px);box-shadow:0 18px 50px rgba(20,32,63,.08)}
#trustee-business-card *{box-sizing:border-box}
#trustee-business-card h2,#trustee-business-card h3,#trustee-business-card h4,#trustee-business-card p{font-family:inherit}
#trustee-business-card .tr-top{display:block}
#trustee-business-card .tr-hero{position:relative;overflow:hidden;border-radius:18px;padding:clamp(16px,2.4vw,24px) clamp(16px,2.4vw,26px) clamp(34px,3.6vw,44px);color:#fff;background:radial-gradient(760px 380px at 92% -12%,rgba(240,120,56,.34),transparent 62%),radial-gradient(620px 360px at -8% 112%,rgba(79,70,229,.5),transparent 62%),linear-gradient(135deg,#0d1735 0%,#16244f 55%,#1d2f6b 100%)}
#trustee-business-card .tr-hero::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px);background-size:22px 22px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 70%);mask-image:linear-gradient(90deg,transparent,#000 70%);pointer-events:none}
#trustee-business-card .tr-hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.04fr);gap:clamp(16px,3vw,32px);align-items:center}
#trustee-business-card .tr-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px}
#trustee-business-card .tr-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.09);color:#dfe6ff;border-radius:99px;padding:3px 10px;font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
#trustee-business-card .tr-chip.warn{background:rgba(255,184,107,.14);border-color:rgba(255,184,107,.4);color:#ffd2a1}
#trustee-business-card .tr-chip i{display:block;width:6px;height:6px;border-radius:50%;background:#ffa968}
#trustee-business-card .tr-eyebrow{font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--indigo);display:flex;align-items:center;gap:8px}
#trustee-business-card .tr-eyebrow::before{content:"";width:18px;height:3px;border-radius:3px;background:var(--orange)}
#trustee-business-card .tr-hero .tr-eyebrow{color:#ffb98a}
#trustee-business-card .tr-title{font-size:clamp(34px,4.4vw,46px)!important;line-height:1!important;font-weight:800;letter-spacing:-.05em;margin:0 0 4px!important;color:#fff!important}
#trustee-business-card .tr-tagline{font-size:clamp(13px,1.4vw,15px);font-weight:700;color:#ffc79f;margin:0 0 10px}
#trustee-business-card .tr-lead{font-size:12.5px;line-height:1.65;color:rgba(228,234,255,.84);margin:0 0 14px;max-width:52ch}
#trustee-business-card .tr-role{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);max-width:max-content}
#trustee-business-card .tr-role b{font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#ffb98a}
#trustee-business-card .tr-role span{font-size:11px;font-weight:700;color:#eef2ff}
#trustee-business-card .tr-role span+span::before{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.4);margin-right:12px;vertical-align:middle}
#trustee-business-card .tr-video{min-width:0;border-radius:14px;overflow:hidden;background:#0a1230;border:1px solid rgba(255,255,255,.2);box-shadow:0 24px 44px -12px rgba(3,8,28,.6)}
#trustee-business-card .tr-vbar{display:flex;align-items:center;gap:6px;padding:7px 11px;background:rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.1)}
#trustee-business-card .tr-vbar i{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.28)}
#trustee-business-card .tr-vbar i:first-child{background:#ff8a5c}
#trustee-business-card .tr-vbar span{margin-left:6px;font-size:10px;font-weight:700;color:#c9d3f6;letter-spacing:.03em}
#trustee-business-card .tr-vstage{position:relative;aspect-ratio:16/9;background:#050b22}
#trustee-business-card .tr-vstage iframe{display:block;width:100%;height:100%;border:0;background:#050b22}
#trustee-business-card .tr-novideo{position:absolute;left:0;right:0;bottom:0;display:grid;gap:2px;padding:9px 12px;background:linear-gradient(0deg,rgba(5,11,34,.94),rgba(5,11,34,.7));font-size:10.5px;color:#c9d3f6;text-align:left}
#trustee-business-card .tr-novideo[hidden]{display:none}
#trustee-business-card .tr-novideo b{color:#fff;font-size:11.5px}
#trustee-business-card .tr-novideo code{background:rgba(255,255,255,.14);padding:0 5px;border-radius:4px}
#trustee-business-card .tr-stats{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:-22px clamp(10px,2.4vw,22px) 0}
#trustee-business-card .tr-stat{display:flex;align-items:center;gap:9px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:8px 12px;box-shadow:0 10px 22px rgba(20,32,63,.08);min-width:0}
#trustee-business-card .tr-stat strong{font-size:19px;line-height:1.1;font-weight:800;letter-spacing:-.04em;color:var(--navy);flex:none}
#trustee-business-card .tr-stat strong em{font-style:normal;color:var(--orange)}
#trustee-business-card .tr-stat span{font-size:10.5px;font-weight:700;color:#4a5b78;line-height:1.3}
#trustee-business-card .tr-dd{margin:14px clamp(6px,1.6vw,18px) 0}
#trustee-business-card .tr-dd .dev-dd-body>.tr-sec{padding-inline:0}
#trustee-business-card .tr-dd .dev-dd-body>.tr-sec:first-child{padding-top:12px}
#trustee-business-card .tr-sec{padding:clamp(16px,2.4vw,22px) clamp(6px,1.6vw,18px) 0}
#trustee-business-card .tr-sec-head{margin:0 0 10px}
#trustee-business-card .tr-sec-head h3{font-size:clamp(16px,1.9vw,19px);font-weight:800;letter-spacing:-.03em;line-height:1.25;color:var(--navy);margin:5px 0 0}
#trustee-business-card .tr-sec-head p{margin:5px 0 0;font-size:11px;color:var(--muted);max-width:68ch}
#trustee-business-card [aria-labelledby="tr-evidence-title"]{position:relative}
#trustee-business-card [aria-labelledby="tr-evidence-title"] .tr-tabs{position:static;width:auto;margin:0 0 12px;grid-template-columns:repeat(3,minmax(0,1fr))}
#trustee-business-card [aria-labelledby="tr-evidence-title"] .tr-viewer{margin-left:0}
#trustee-business-card .tr-ps{display:grid;grid-template-columns:minmax(0,1fr) 34px minmax(0,1fr);align-items:stretch}
#trustee-business-card .tr-panel{position:relative;min-width:0;border-radius:16px;padding:14px 16px;overflow:hidden}
#trustee-business-card .tr-panel.problem{background:linear-gradient(150deg,#fff7f1,#fffdfb);border:1px solid #f5dccb}
#trustee-business-card .tr-panel.solution{color:#fff;background:linear-gradient(150deg,#16244f,#24357a);border:1px solid #2b3e8c;box-shadow:0 18px 34px -12px rgba(22,36,79,.55)}
#trustee-business-card .tr-panel.solution::after{content:"";position:absolute;right:-50px;top:-50px;width:170px;height:170px;border-radius:50%;background:radial-gradient(circle,rgba(240,120,56,.4),transparent 70%)}
#trustee-business-card .tr-panel.problem,
#trustee-business-card .tr-panel.solution,
#trustee-business-card .tr-spot,
#trustee-business-card .tr-tab[data-selected=true]{
  color:var(--ink);
  background:#fff;
  border:1px solid var(--line);
  box-shadow:none;
}
#trustee-business-card .tr-panel.solution::after,
#trustee-business-card .tr-spot::after{display:none}
#trustee-business-card .tr-panel.solution h4,
#trustee-business-card .tr-panel.solution p,
#trustee-business-card .tr-spot h4,
#trustee-business-card .tr-spot p,
#trustee-business-card .tr-spot strong,
#trustee-business-card .tr-spot span,
#trustee-business-card .tr-tab[data-selected=true] small{color:var(--ink)}
#trustee-business-card .solution .tr-pico{background:#f4f5ff;color:#4338ca}
#trustee-business-card .tr-tab[data-selected=true] .ico{background:#f4f5ff;color:#4338ca}
#trustee-business-card .tr-panel>*{position:relative;z-index:1}
#trustee-business-card .tr-pico{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;margin-bottom:8px;font-size:14px;font-weight:800;background:#ffe6d6;color:#b2491c}
#trustee-business-card .solution .tr-pico{background:rgba(255,255,255,.14);color:#ffd0a8}
#trustee-business-card .tr-panel h4{margin:0 0 5px;font-size:14px;font-weight:800;letter-spacing:-.02em;color:var(--navy)}
#trustee-business-card .solution h4{color:#fff}
#trustee-business-card .tr-panel p{margin:0 0 10px;font-size:11.5px;line-height:1.6;color:#5b6a84}
#trustee-business-card .solution p{color:rgba(228,234,255,.86)}
#trustee-business-card .tr-tags{display:flex;flex-wrap:wrap;gap:6px}
#trustee-business-card .tr-tags span{font-size:10px;font-weight:800;border-radius:99px;padding:4px 10px;color:#7a4a2d;background:#ffeadb;border:1px solid #f6d6bd}
#trustee-business-card .tr-flow{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}
#trustee-business-card .tr-flow li{position:relative;padding:6px 8px 7px;border-radius:9px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);font-size:10px;font-weight:700;line-height:1.3;color:#fff}
#trustee-business-card .tr-flow li b{display:block;font:800 9px monospace;letter-spacing:.1em;color:#ffb98a;margin-bottom:3px}
#trustee-business-card .tr-link{display:grid;place-items:center}
#trustee-business-card .tr-link span{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--orange);color:#fff;font-size:14px;font-weight:800;box-shadow:0 6px 14px rgba(240,120,56,.38);border:2px solid #fff}
#trustee-business-card .tr-value{display:flex;align-items:center;gap:10px;margin-top:10px;padding:8px 12px;border-radius:11px;background:#f6f8fd;border:1px solid var(--line);font-size:11px;color:#4b5b77;line-height:1.5}
#trustee-business-card .tr-value b{flex:none;font-size:9.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--indigo)}
#trustee-business-card .tr-steps{list-style:none;margin:0;padding:0;position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
#trustee-business-card .tr-steps::before{content:"";position:absolute;left:14px;right:14px;top:13px;height:2px;background:linear-gradient(90deg,var(--indigo),#8b7cf6 55%,var(--orange))}
#trustee-business-card .tr-step{position:relative;min-width:0}
#trustee-business-card .tr-dot{position:relative;z-index:1;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid var(--indigo);color:var(--indigo);font:800 10.5px monospace;margin-bottom:8px;box-shadow:0 0 0 4px #fff}
#trustee-business-card .tr-step:last-child .tr-dot{border-color:var(--orange);color:#c2561c}
#trustee-business-card .tr-step small{display:block;font:800 9.5px monospace;letter-spacing:.1em;color:var(--muted);margin-bottom:3px}
#trustee-business-card .tr-step h4{margin:0 0 3px;font-size:12.5px;font-weight:800;letter-spacing:-.015em;color:var(--navy)}
#trustee-business-card .tr-step p{margin:0 0 7px;font-size:11px;line-height:1.5;color:#5b6a84}
#trustee-business-card .tr-jump{display:inline-flex;align-items:center;gap:5px;border:1px solid #d7dcf7;background:#f4f5ff;color:#4338ca;border-radius:99px;padding:3px 10px;font-size:10px;font-weight:800;cursor:pointer;font-family:inherit}
#trustee-business-card .tr-jump:hover{background:#e9eaff}
#trustee-business-card .tr-tabs{display:grid;grid-template-columns:1fr;gap:8px;position:absolute;left:0;top:0;width:210px}
#trustee-business-card .tr-tab{display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px solid var(--line);border-radius:13px;background:#fff;padding:8px 11px;cursor:pointer;color:var(--ink);font-family:inherit;transition:border-color .2s,box-shadow .2s,background .2s}
#trustee-business-card .tr-tab:hover{border-color:#b6b9f7;box-shadow:0 8px 20px rgba(79,70,229,.1)}
#trustee-business-card .tr-tab .ico{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:9px;background:#eceaff;color:#4338ca;font:800 11px monospace}
#trustee-business-card .tr-tab strong{display:block;font-size:11.5px;line-height:1.3;font-weight:800}
#trustee-business-card .tr-tab small{display:block;margin-top:2px;font-size:10.5px;color:var(--muted)}
#trustee-business-card .tr-tab[data-selected=true]{background:linear-gradient(135deg,#14204a,#22337a);border-color:#22337a;color:#fff;box-shadow:0 14px 28px -10px rgba(22,36,79,.6)}
#trustee-business-card .tr-tab[data-selected=true] .ico{background:var(--orange);color:#fff}
#trustee-business-card .tr-tab[data-selected=true] small{color:#bcc8f2}
#trustee-business-card .tr-viewer{margin-left:224px;overflow:hidden;background:transparent}
#trustee-business-card .tr-viewer-top{display:none}
#trustee-business-card .tr-btn{border:1px solid #d5dbf1;background:#fff;color:#3a3fa8;border-radius:9px;padding:6px 11px;font-size:10.5px;font-weight:800;white-space:nowrap;cursor:pointer;font-family:inherit}
#trustee-business-card .tr-btn.primary{background:var(--navy);border-color:var(--navy);color:#fff}
#trustee-business-card .tr-btn:hover{filter:brightness(.94)}
#trustee-business-card .tr-doc-pages{display:grid;gap:0;padding:0;background:transparent;max-height:clamp(320px,56vh,520px);overflow-y:auto;overscroll-behavior:contain}
#trustee-business-card .tr-doc-pages[data-layout=deck],#trustee-business-card .tr-doc-pages[data-layout=account]{grid-template-columns:minmax(0,1fr);justify-items:stretch}
#trustee-business-card .tr-doc-pages[data-layout=account] .tr-doc-page{width:100%}
#trustee-business-card .tr-doc-pages[data-layout=canvas]{grid-template-columns:minmax(0,1fr)}
#trustee-business-card .tr-doc-page{position:relative;margin:0;background:transparent;border:0;border-radius:0;overflow:hidden;box-shadow:none}
#trustee-business-card .tr-doc-page:hover{transform:none;box-shadow:none}
#trustee-business-card .tr-doc-page img{display:block;width:100%;height:auto;cursor:zoom-in}
#trustee-business-card .tr-doc-page .tr-doc-pdf{display:block;width:100%;min-height:10rem;max-height:min(70dvh,34rem);border:0;background:#fff;cursor:zoom-in;overflow:auto}
#trustee-business-card .tr-doc-pdf .pdf-canvas-page{max-width:none;margin:0;box-shadow:none}
#trustee-business-card .tr-doc-page:has(.tr-doc-pdf){position:relative;border:0;border-radius:0;box-shadow:none;background:transparent}
#trustee-business-card .tr-doc-page:has(.tr-doc-pdf) figcaption{display:none}
#trustee-business-card .tr-doc-expand{position:absolute;top:10px;right:10px;z-index:3;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:rgba(15,23,42,.78);color:#fff;font-size:20px;line-height:1;cursor:pointer;box-shadow:0 4px 12px rgba(15,23,42,.25)}
#trustee-business-card .tr-doc-expand:hover,#trustee-business-card .tr-doc-expand:focus-visible{background:var(--indigo);outline:2px solid #fff;outline-offset:2px}
#trustee-business-card .tr-doc-page figcaption{display:flex;justify-content:space-between;gap:8px;padding:5px 9px;font:700 9px monospace;color:#64748b;border-top:1px solid #e8ecf4;background:#fbfcfe}
#trustee-business-card .tr-note{margin-top:12px!important;display:flex;gap:10px;margin-inline:clamp(6px,1.6vw,18px);margin-bottom:4px;padding:9px 13px;border-radius:12px;background:#fff9f1;border:1px solid #f4dfc0;border-left:4px solid var(--orange);font-size:10.5px;line-height:1.6;color:#6d5a3e}
#trustee-business-card .tr-note b{color:#8a4f1c}
#trustee-business-card .tr-zoom{border:0;background:transparent;position:fixed;inset:0;width:100vw;max-width:none;height:100dvh;max-height:none;margin:0;padding:4.5rem 1.5rem 1.5rem;color:#fff;overflow:hidden}
#trustee-business-card .tr-zoom::backdrop{background:rgba(2,6,23,.94)}
#trustee-business-card .tr-zoom-inner{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%;height:100%;justify-content:center}
#trustee-business-card .tr-zoom-close{position:fixed;top:1.25rem;right:1.5rem;z-index:3;display:grid;place-items:center;width:42px;height:42px;border:1px solid rgba(255,255,255,.35);border-radius:999px;background:rgba(15,23,42,.72);color:#fff;font-size:25px;line-height:1;cursor:pointer}
#trustee-business-card .tr-zoom-close:hover,#trustee-business-card .tr-zoom-close:focus-visible{background:rgba(15,23,42,.95);outline:2px solid #fff;outline-offset:3px}
#trustee-business-card .tr-zoom-image{display:block;max-width:100%;max-height:100%;object-fit:contain;border-radius:10px;background:#fff}
#trustee-business-card .tr-zoom-image[hidden]{display:none}
#trustee-business-card .tr-zoom-pdf{display:block;width:min(100%,1000px);height:100%;border:0;background:transparent;overflow:auto}
#trustee-business-card .tr-zoom-pdf[hidden]{display:none}
#trustee-business-card .tr-co{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.5fr);gap:12px;align-items:stretch}
#trustee-business-card .tr-spot{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:8px;padding:14px 15px;border-radius:16px;color:#fff;background:linear-gradient(150deg,#16244f,#24357a)}
#trustee-business-card .tr-spot::after{content:"";position:absolute;right:-50px;bottom:-50px;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle,rgba(240,120,56,.34),transparent 70%);pointer-events:none}
#trustee-business-card .tr-spot>*{position:relative;z-index:1}
#trustee-business-card .tr-spot-kicker{display:inline-flex;align-items:center;gap:6px;width:max-content;padding:2px 9px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.1);border-radius:99px;font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#e7e9ff}
#trustee-business-card .tr-spot-kicker::before{content:"";width:6px;height:6px;border-radius:50%;background:#ffa968}
#trustee-business-card .tr-spot h4{margin:0;color:#fff;font-size:clamp(14px,1.5vw,16px);font-weight:800;line-height:1.3;letter-spacing:-.025em}
#trustee-business-card .tr-bridge{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:5px;margin-top:auto}
#trustee-business-card .tr-bridge span{display:grid;place-items:center;text-align:center;min-height:30px;border:1px solid rgba(255,255,255,.2);border-radius:9px;background:rgba(255,255,255,.1);padding:3px;font-size:9.5px;font-weight:800;line-height:1.25;color:#fff}
#trustee-business-card .tr-bridge b{color:#ffb98a;font-size:14px;font-weight:700}
#trustee-business-card .tr-co-list{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 18px;align-content:center}
#trustee-business-card .tr-co-list li{display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);min-width:0}
#trustee-business-card .tr-co-list li:nth-last-child(-n+2){border-bottom:0}
#trustee-business-card .tr-co-ico{display:grid;place-items:center;flex:none;width:26px;height:26px;border-radius:8px;background:#edf0ff;color:#5045ca;font-size:13px;font-weight:800}
#trustee-business-card .tr-co-list li:nth-child(2) .tr-co-ico{background:#e9f8f5;color:#0c8475}
#trustee-business-card .tr-co-list li:nth-child(3) .tr-co-ico{background:#fff3e6;color:#b86220}
#trustee-business-card .tr-co-list li:nth-child(4) .tr-co-ico{background:#f4ebff;color:#7546b2}
#trustee-business-card .tr-co-list b{display:block;font-size:11.5px;font-weight:800;letter-spacing:-.02em;color:#1e293b;line-height:1.3}
#trustee-business-card .tr-co-list li>div>span{display:block;margin-top:1px;font-size:10.5px;line-height:1.5;color:#5c6b80}
#trustee-business-card .tr-co-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:10px}
#trustee-business-card .tr-co-bar p{margin:0;font-size:9.5px;line-height:1.5;color:#748296}
#trustee-business-card .tr-co-go{flex:none;white-space:nowrap;border:1px solid #c9cdfc;border-radius:9px;background:#fff;color:#4439ba;font-size:10px;font-weight:800;padding:6px 11px;cursor:pointer;font-family:inherit}
#trustee-business-card .tr-co-go:hover{background:#edf0ff;border-color:#a9affd}
#trustee-business-card .tr-hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px}
#trustee-business-card .tr-live{display:inline-flex;align-items:center;gap:8px;padding:9px 15px;border-radius:12px;background:var(--orange);color:#fff!important;font-size:11.5px;font-weight:800;letter-spacing:.01em;text-decoration:none!important;box-shadow:0 10px 20px -6px rgba(240,120,56,.55);transition:filter .2s,transform .2s}
#trustee-business-card .tr-live:hover{filter:brightness(1.08);transform:translateY(-1px)}
#trustee-business-card .tr-live:focus-visible{outline:2px solid #fff;outline-offset:2px}
#trustee-business-card .tr-live-dot{display:block;width:8px;height:8px;border-radius:50%;background:#fff;box-shadow:0 0 0 0 rgba(255,255,255,.7);animation:trLivePulse 1.8s ease-out infinite}
@keyframes trLivePulse{0%{box-shadow:0 0 0 0 rgba(255,255,255,.65)}70%,100%{box-shadow:0 0 0 7px rgba(255,255,255,0)}}
#trustee-business-card .tr-flow li{background:#f6f7fb;border-color:var(--line);color:var(--ink)}
#trustee-business-card .tr-flow li b{color:#ea580c}
@media(max-width:900px){#trustee-business-card .tr-co{grid-template-columns:1fr}#trustee-business-card .tr-bridge{max-width:340px}#trustee-business-card .tr-hero-grid{grid-template-columns:1fr}#trustee-business-card .tr-stats{grid-template-columns:repeat(2,minmax(0,1fr))}#trustee-business-card .tr-ps{grid-template-columns:1fr;gap:0}#trustee-business-card .tr-link{height:34px}#trustee-business-card .tr-link span{transform:rotate(90deg)}#trustee-business-card .tr-steps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:18px}#trustee-business-card [aria-labelledby=tr-evidence-title] .tr-tabs{position:static;width:auto;grid-template-columns:1fr 1fr;margin-bottom:10px}#trustee-business-card .tr-viewer{margin-left:0}}
@media(max-width:570px){#trustee-business-card .tr-live{width:100%;justify-content:center}#trustee-business-card .tr-co-list{grid-template-columns:1fr}#trustee-business-card .tr-co-list li:nth-last-child(2){border-bottom:1px solid var(--line)}#trustee-business-card .tr-co-bar{flex-direction:column;align-items:flex-start;gap:6px}#trustee-business-card .tr-flow{grid-template-columns:repeat(2,minmax(0,1fr))}#trustee-business-card .tr-steps{grid-template-columns:1fr}#trustee-business-card .tr-doc-pages{padding:8px;gap:8px}#trustee-business-card .tr-doc-pages[data-layout=deck]{grid-template-columns:repeat(2,minmax(0,1fr))}#trustee-business-card .tr-doc-pages[data-layout=account]{grid-template-columns:1fr}#trustee-business-card .tr-zoom-head,#trustee-business-card .tr-zoom-tools{flex-wrap:wrap}#trustee-business-card .tr-role{max-width:none}#trustee-business-card .tr-value{flex-direction:column;align-items:flex-start;gap:3px}#trustee-business-card .tr-note{flex-direction:column;gap:3px}}
@media(prefers-reduced-motion:reduce){#trustee-business-card .tr-doc-page{transition:none}#trustee-business-card .tr-live-dot{animation:none}#trustee-business-card .tr-live{transition:none}}

/* Spacing & rhythm pass: one consistent gutter, roomier sections */
#trustee-business-card{padding:clamp(16px,2.6vw,32px)}
#trustee-business-card .tr-hero{padding:clamp(24px,3.4vw,40px) clamp(20px,3.2vw,40px)}
#trustee-business-card .tr-hero-grid{gap:clamp(24px,4vw,48px)}
#trustee-business-card .tr-chips{gap:8px;margin-bottom:18px}
#trustee-business-card .tr-lead{margin-bottom:20px;line-height:1.75}
#trustee-business-card .tr-tagline{margin-bottom:14px}
#trustee-business-card .tr-role{padding:10px 16px;margin-top:16px}
#trustee-business-card .tr-stats{gap:14px;margin:20px 0 0}
#trustee-business-card .tr-stat{padding:14px 18px;gap:12px;box-shadow:0 6px 18px rgba(20,32,63,.06)}
#trustee-business-card .tr-sec{padding:clamp(32px,4.4vw,52px) 0 0}
#trustee-business-card .tr-dd .dev-dd-body>.tr-sec:first-child{padding-top:clamp(24px,3vw,36px)}
#trustee-business-card .tr-sec-head{margin:0 0 clamp(18px,2.4vw,26px)}
#trustee-business-card .tr-sec-head h3{margin-top:8px}
#trustee-business-card .tr-sec-head p{margin-top:8px;line-height:1.65}
#trustee-business-card .tr-ps{grid-template-columns:minmax(0,1fr) 44px minmax(0,1fr)}
#trustee-business-card .tr-panel{padding:clamp(18px,2.2vw,26px)}
#trustee-business-card .tr-pico{margin-bottom:12px}
#trustee-business-card .tr-panel h4{margin-bottom:8px}
#trustee-business-card .tr-panel p{margin-bottom:16px;line-height:1.7}
#trustee-business-card .tr-tags{gap:8px}
#trustee-business-card .tr-flow{gap:10px}
#trustee-business-card .tr-flow li{padding:10px 12px 11px}
#trustee-business-card .tr-value{margin-top:18px;padding:14px 18px;gap:14px}
#trustee-business-card .tr-steps{gap:clamp(16px,2.4vw,28px)}
#trustee-business-card .tr-step h4{margin-bottom:6px}
#trustee-business-card .tr-step p{margin-bottom:12px;line-height:1.6}
#trustee-business-card .tr-dd{margin:clamp(28px,4vw,44px) 0 0}
#trustee-business-card .tr-tabs{width:228px;gap:10px}
#trustee-business-card .tr-tab{padding:12px 14px}
#trustee-business-card .tr-viewer{margin-left:260px}
#trustee-business-card .tr-note{margin:clamp(28px,4vw,44px) 0 0!important;padding:16px 20px}
@media(max-width:900px){#trustee-business-card .tr-ps{grid-template-columns:minmax(0,1fr)}#trustee-business-card .tr-link{padding:6px 0;transform:rotate(90deg)}#trustee-business-card .tr-stats{grid-template-columns:repeat(2,minmax(0,1fr))}#trustee-business-card .tr-steps{grid-template-columns:repeat(2,minmax(0,1fr))}#trustee-business-card .tr-steps::before{display:none}}
@media(max-width:640px){#trustee-business-card{padding:14px;border-radius:22px}#trustee-business-card .tr-hero{padding:22px 18px}#trustee-business-card .tr-stats{gap:10px}#trustee-business-card .tr-stat{padding:12px 14px}#trustee-business-card .tr-steps{grid-template-columns:minmax(0,1fr)}#trustee-business-card .tr-flow{grid-template-columns:repeat(2,minmax(0,1fr))}}
`}</style>
      <article className="project-card-item" id="trustee-business-card" data-category="analytics business-analysis" aria-label="Trustee business analysis case study">
        <div className="tr-top">
          <header className="tr-hero">
            <div className="tr-hero-grid">
              <div className="tr-hero-copy">
                <div className="tr-chips">
                  <span className="tr-chip">
                    Business Analysis
                  </span>
                  <span className="tr-chip">
                    Digistar Class Internship 2026
                  </span>
                  <span className="tr-chip warn">
                    <i></i>
                    Concept · Not launched
                  </span>
                </div>
                <h2 className="tr-title">
                  Trustee
                </h2>
                <p className="tr-tagline">
                  Trusted Review Intelligence for Shopee
                </p>
                <p className="tr-lead">
                  Market research, SWOT, and a business model turned into an AI-assisted proposal to protect review credibility, from Telkom Indonesia’s Digistar Class Internship 2026.
                </p>
                <div className="tr-hero-actions">
                  <a className="tr-live" href="https://uc12-fakereview.streamlit.app/" target="_blank" rel="noopener noreferrer" aria-label="Open the live Trustee prototype in a new tab">
                    <i className="tr-live-dot" aria-hidden="true"></i>
                    {"Live prototype "}
                    <span aria-hidden="true">
                      ↗
                    </span>
                  </a>
                  <div className="tr-role">
                    <b>
                      My role
                    </b>
                    <span>
                      Team leadership
                    </span>
                    <span>
                      Business analysis
                    </span>
                    <span>
                      Solution pitching
                    </span>
                  </div>
                </div>
              </div>
              <div className="tr-video" data-tr-video="">
                <div className="tr-vbar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>
                    Trustee · Solution pitch
                  </span>
                </div>
                <div className="tr-vstage">
                  <iframe
                    src="https://drive.google.com/file/d/1KmV3Y6WtxhT6N3Vzw_N_4ln9kGBPIGPC/preview"
                    title="Trustee solution pitch video"
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="tr-stats">
            <div className="tr-stat">
              <strong>
                3
              </strong>
              <span>
                Deliverables
              </span>
            </div>
            <div className="tr-stat">
              <strong>
                16
                <em>
                  p
                </em>
              </strong>
              <span>
                Pages of evidence
              </span>
            </div>
            <div className="tr-stat">
              <strong>
                4
              </strong>
              <span>
                Stages, context to solution
              </span>
            </div>
            <div className="tr-stat">
              <strong>
                Concept
              </strong>
              <span>
                Not a deployed system
              </span>
            </div>
          </div>
        </div>
        <section className="tr-sec" aria-labelledby="tr-ps-title">
          <div className="tr-sec-head">
            <div className="tr-eyebrow">
              {"Problem & proposed solution"}
            </div>
            <h3 id="tr-ps-title">
              Why Trustee, and what does it propose?
            </h3>
          </div>
          <div className="tr-ps">
            <div className="tr-panel problem">
              <span className="tr-pico" aria-hidden="true">
                !
              </span>
              <h4>
                The business problem
              </h4>
              <p>
                Fake, duplicated, and AI-generated reviews distort purchase decisions, disadvantage honest sellers, and overwhelm manual moderation.
              </p>
              <div className="tr-tags">
                <span>
                  Buyer trust
                </span>
                <span>
                  Seller fairness
                </span>
                <span>
                  Moderation scale
                </span>
              </div>
            </div>
            <div className="tr-link" aria-hidden="true">
              <span>
                →
              </span>
            </div>
            <div className="tr-panel solution">
              <span className="tr-pico" aria-hidden="true">
                ✦
              </span>
              <h4>
                Trustee, the proposed solution
              </h4>
              <p>
                An AI-assisted concept that reads review content and reviewer behavior, flags suspicious patterns, and supports human moderators.
              </p>
              <ol className="tr-flow">
                <li>
                  <b>
                    01
                  </b>
                  {"Review content & behavior"}
                </li>
                <li>
                  <b>
                    02
                  </b>
                  Pattern analysis
                </li>
                <li>
                  <b>
                    03
                  </b>
                  {"Trust & risk score"}
                </li>
                <li>
                  <b>
                    04
                  </b>
                  Moderator dashboard
                </li>
              </ol>
            </div>
          </div>
          <p className="tr-value">
            <b>
              Intended value
            </b>
            <span>
              More reliable shopping information, fairer seller competition, and focused moderation. Proposed benefits, not measured outcomes.
            </span>
          </p>
        </section>
        <div className="project-dropdown-disclosure dev-dd tr-dd" data-dev-dd="">
          <button type="button" className="project-dropdown-toggle" aria-expanded="false">
            <span className="dd-title">
              <span className="dd-icon" aria-hidden="true">
                ☷
              </span>
              <span className="dd-name">
                From research to product direction
              </span>
              <span className="project-dropdown-badge dev-badge">
                Method · Leadership · 3 documents
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
            <section className="tr-sec" aria-labelledby="tr-method-title">
              <div className="tr-sec-head">
                <div className="tr-eyebrow">
                  How the problem became a proposal
                </div>
              </div>
              <ol className="tr-steps">
                <li className="tr-step">
                  <span className="tr-dot">
                    01
                  </span>
                  <small>
                    CONTEXT
                  </small>
                  <h4>
                    Study the market
                  </h4>
                  <p>
                    Map e-commerce trends and the risks of unreliable reviews.
                  </p>
                  <button className="tr-jump" type="button" data-tr-jump="account">
                    {"Research & SWOT →"}
                  </button>
                </li>
                <li className="tr-step">
                  <span className="tr-dot">
                    02
                  </span>
                  <small>
                    USERS
                  </small>
                  <h4>
                    Understand the impact
                  </h4>
                  <p>
                    Link buyer confidence, seller fairness, and moderation load.
                  </p>
                  <button className="tr-jump" type="button" data-tr-jump="account">
                    {"Research & SWOT →"}
                  </button>
                </li>
                <li className="tr-step">
                  <span className="tr-dot">
                    03
                  </span>
                  <small>
                    STRATEGY
                  </small>
                  <h4>
                    Frame the business case
                  </h4>
                  <p>
                    Test value and resources through SWOT and the Business Model Canvas.
                  </p>
                  <button className="tr-jump" type="button" data-tr-jump="canvas">
                    Model Canvas →
                  </button>
                </li>
                <li className="tr-step">
                  <span className="tr-dot">
                    04
                  </span>
                  <small>
                    SOLUTION
                  </small>
                  <h4>
                    Present Trustee
                  </h4>
                  <p>
                    Propose risk scoring, a moderation dashboard, and a phased rollout.
                  </p>
                  <button className="tr-jump" type="button" data-tr-jump="deck">
                    Solution pitch →
                  </button>
                </li>
              </ol>
            </section>
            <section className="tr-sec tr-coordination" aria-labelledby="tr-coordination-title">
              <div className="tr-sec-head">
                <div className="tr-eyebrow">
                  Team leadership · Digistar 2026
                </div>
                <h3 id="tr-coordination-title">
                  How I coordinated the work behind Trustee
                </h3>
              </div>
              <div className="tr-co">
                <div className="tr-spot">
                  <span className="tr-spot-kicker">
                    Team Leader
                  </span>
                  <h4>
                    Connecting business insights with technical direction.
                  </h4>
                  <div className="tr-bridge" aria-label="Business and AI workstream alignment">
                    <span>
                      Business analysis
                    </span>
                    <b aria-hidden="true">
                      ↔
                    </b>
                    <span>
                      AI solution planning
                    </span>
                  </div>
                </div>
                <ul className="tr-co-list" aria-label="Leadership contributions">
                  <li>
                    <span className="tr-co-ico" aria-hidden="true">
                      ▤
                    </span>
                    <div>
                      <b>
                        Business Deliverables
                      </b>
                      <span>
                        Company profiling and Business Model Canvas inputs.
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="tr-co-ico" aria-hidden="true">
                      ⇄
                    </span>
                    <div>
                      <b>
                        B2B–AI Alignment
                      </b>
                      <span>
                        Refined shared docs and flagged AI templates for updates.
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="tr-co-ico" aria-hidden="true">
                      ▦
                    </span>
                    <div>
                      <b>
                        {"Planning & Milestones"}
                      </b>
                      <span>
                        Used a six-week work plan for activities, dependencies, and handoffs.
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="tr-co-ico" aria-hidden="true">
                      ✦
                    </span>
                    <div>
                      <b>
                        {"Communication & Pitching"}
                      </b>
                      <span>
                        Led team coordination and presented at the final pitch.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tr-co-bar">
                <p>
                  Coordination work, not a production deployment. The timeline is a proposed plan; the internal workbook and personal details are not published.
                </p>
                <button className="tr-co-go" type="button" data-tr-goto="">
                  {"View documents "}
                  <span aria-hidden="true">
                    ↓
                  </span>
                </button>
              </div>
            </section>
            <section className="tr-sec" aria-labelledby="tr-evidence-title">
              <div className="tr-sec-head">
                <div className="tr-eyebrow" id="tr-evidence-title">
                  Original project evidence
                </div>
              </div>
              <div className="tr-tabs" role="group" aria-label="Trustee project documents">
                <button className="tr-tab" data-tr-doc="account" data-selected="true" aria-pressed="true" type="button">
                  <span className="ico">
                    01
                  </span>
                  <span>
                    <strong>
                      {"Company Profiling & SWOT"}
                    </strong>
                    <small>
                      1 file · PDF
                    </small>
                  </span>
                </button>
                {" "}
                <button className="tr-tab" data-tr-doc="canvas" data-selected="false" aria-pressed="false" type="button">
                  <span className="ico">
                    02
                  </span>
                  <span>
                    <strong>
                      Business Model Canvas
                    </strong>
                    <small>
                      1 canvas · image
                    </small>
                  </span>
                </button>
                {" "}
                <button className="tr-tab" data-tr-doc="deck" data-selected="false" aria-pressed="false" type="button">
                  <span className="ico">
                    03
                  </span>
                  <span>
                    <strong>
                      Trustee Solution Pitch
                    </strong>
                    <small>
                      1 document · PDF
                    </small>
                  </span>
                </button>
              </div>
              <div className="tr-viewer" data-tr-viewer="">
                <div className="tr-doc-pages" data-tr-pages="" data-layout="account" role="region" aria-label="Document pages" tabIndex="0"></div>
              </div>
            </section>
          </div>
        </div>
        <p className="tr-note">
          <span>
            <b>
              Project context.
            </b>
            {" A proposed concept from a Telkom Indonesia team program, not an official Shopee implementation. The live link opens a prototype of the review-screening idea. Figures, budgets, and rollout dates in the pitch are proposal assumptions. The public excerpt omits team and contact slides."}
          </span>
        </p>
        <dialog className="tr-zoom" data-tr-dialog="" aria-label="Enlarged Trustee document page">
          <div className="tr-zoom-inner">
            <button className="tr-zoom-close" type="button" data-tr-close="" aria-label="Close document preview">
              ✕
            </button>
            <img className="tr-zoom-image" data-tr-zoom-image="" alt="" hidden />
          </div>
        </dialog>
      </article>
      </>
  );
}
