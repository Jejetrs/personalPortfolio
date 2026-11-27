/* Shared pieces for the business / product analysis cards (LeadSight, AgroSense).
   <Prsi/> is the one-glance Problem – Role – Solution – Impact summary: four short columns, numbers first.
   Colours come from the card's own CSS variables (--acc, --acc2, --ink, --mut, --line), so each card keeps its look. */

const CSS = `
.ba-prsi{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:0}
.ba-prsi .ba-col{display:flex;flex-direction:column;gap:8px;min-width:0;padding:14px 15px 15px;border:1px solid #e5e9f2;border-radius:14px;background:#fff}
.ba-prsi .ba-col-top{display:flex;align-items:center;gap:8px}
.ba-prsi .ba-letter{display:grid;flex:none;width:24px;height:24px;place-items:center;border-radius:8px;background:var(--acc);color:#fff;font:800 12px/1 "JetBrains Mono",monospace}
.ba-prsi .ba-role .ba-letter{background:var(--acc2)}
.ba-prsi .ba-impact .ba-letter{background:#16a34a}
.ba-prsi .ba-col-label{color:var(--ink);font:800 11px/1.2 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
.ba-prsi .ba-head{margin:0;color:var(--ink);font-size:14px;font-weight:800;line-height:1.3;letter-spacing:-.015em}
.ba-prsi .ba-points{display:flex;flex-direction:column;gap:5px;margin:0;padding:0;list-style:none}
.ba-prsi .ba-points li{position:relative;padding-left:13px;color:var(--mut);font-size:11.5px;line-height:1.45}
.ba-prsi .ba-points li::before{content:"";position:absolute;left:0;top:.55em;width:5px;height:5px;border-radius:50%;background:var(--acc);opacity:.55}
.ba-prsi .ba-nums{display:flex;flex-direction:column;gap:6px;margin-top:auto;padding-top:4px}
.ba-prsi .ba-num{display:flex;align-items:baseline;gap:9px;padding:7px 10px;border-radius:11px;background:#f4f6fc}
.ba-prsi .ba-num b{flex:none;min-width:3.1ch;color:var(--acc);font-size:20px;font-weight:800;line-height:1;letter-spacing:-.04em}
.ba-prsi .ba-num span{color:#46506a;font-size:10.5px;font-weight:600;line-height:1.3;text-wrap:balance}
.ba-prsi .ba-nums.is-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}
.ba-prsi .ba-nums.is-grid .ba-num{flex-direction:column;gap:3px}
.ba-prsi .ba-nums.is-grid .ba-num b{font-size:19px}
.ba-prsi .ba-num.is-warn b{color:#d9622a}
.ba-prsi .ba-impact .ba-num b{color:#15803d}
.ba-prsi .ba-impact .ba-num.is-warn b{color:#d9622a}
.ba-prsi .ba-note{margin:0;padding:6px 9px;border-left:3px solid #d9a441;border-radius:0 8px 8px 0;background:#fff8e8;color:#6d5a2a;font-size:10.5px;line-height:1.4}
@media(max-width:1100px){.ba-prsi{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){.ba-prsi{grid-template-columns:1fr}}
`;

export function Prsi({ items, label = "Problem, role, solution and impact" }) {
  return (
    <>
      <style>{CSS}</style>
      <section className="ba-prsi" aria-label={label}>
        {items.map((it) => (
          <div className={`ba-col ba-${it.key}`} key={it.key}>
            <div className="ba-col-top">
              <span className="ba-letter" aria-hidden="true">{it.letter}</span>
              <span className="ba-col-label">{it.label}</span>
            </div>
            <h3 className="ba-head">{it.head}</h3>
            {it.points && it.points.length > 0 && (
              <ul className="ba-points">
                {it.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
            {it.nums && it.nums.length > 0 && (
              <div className={`ba-nums${it.nums.length > 2 ? " is-grid" : ""}`}>
                {it.nums.map((n) => (
                  <div className={`ba-num${n.warn ? " is-warn" : ""}`} key={n.l}>
                    <b>{n.n}</b>
                    <span>{n.l}</span>
                  </div>
                ))}
              </div>
            )}
            {it.note && <p className="ba-note">{it.note}</p>}
          </div>
        ))}
      </section>
    </>
  );
}

/* Common look of the analysis cards. S = "#card-id.class", p = class prefix, t = theme colours. */
export const baseCss = (S, p, t) => `
${S}{--ink:#14203f;--mut:#5d6b86;--line:#e2e8f4;--acc:${t.acc};--acc2:${t.acc2};position:relative;overflow:hidden;padding:clamp(16px,2.6vw,32px);border:1px solid #dde3f2;border-radius:28px;color:var(--ink);background:#fff;font-size:12.5px;line-height:1.5;box-shadow:0 18px 50px rgba(20,32,63,.08)}
${S} *{box-sizing:border-box}
${S} h2,${S} h3,${S} p{margin:0}
${S} .${p}-head{position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.04fr);gap:clamp(16px,3vw,32px);align-items:center;padding:clamp(24px,3.4vw,40px) clamp(20px,3.2vw,40px) clamp(44px,4.6vw,56px);border-radius:18px;color:#fff;background:radial-gradient(760px 380px at 92% -12%,${t.glow2},transparent 62%),radial-gradient(620px 360px at -8% 112%,${t.glow1},transparent 62%),${t.base}}
${S} .${p}-head::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px);background-size:22px 22px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 70%);mask-image:linear-gradient(90deg,transparent,#000 70%);pointer-events:none}
${S} .${p}-hero-copy,${S} .${p}-video-highlight{position:relative;z-index:1}
${S} .${p}-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px}
${S} .${p}-chips span{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.09);color:#dfe6ff;border-radius:99px;padding:3px 10px;font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
${S} .${p}-chips .${p}-chip-warn{background:rgba(255,184,107,.14);border-color:rgba(255,184,107,.4);color:#ffd2a1}
${S} .${p}-title{font-size:clamp(34px,4.4vw,46px)!important;line-height:1!important;letter-spacing:-.05em;font-weight:800;color:#fff}
${S} .${p}-summary{margin:10px 0 0;color:rgba(228,234,255,.84);font-size:12.5px;line-height:1.75;max-width:52ch}
${S} .${p}-role{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;max-width:max-content;margin-top:16px;padding:10px 16px;border:1px solid rgba(255,255,255,.14);border-radius:12px;background:rgba(255,255,255,.07)}
${S} .${p}-role b{color:${t.roleTint};font:800 10px/1.4 "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase}
${S} .${p}-role span{color:#eef2ff;font-size:11px;font-weight:700}
${S} .${p}-role span+span::before{content:"";display:inline-block;width:4px;height:4px;margin-right:12px;border-radius:50%;background:rgba(255,255,255,.4);vertical-align:middle}
${S} .${p}-video-highlight{min-width:0;overflow:hidden;border:1px solid rgba(255,255,255,.2);border-radius:14px;background:#0a1230;box-shadow:0 24px 44px -12px rgba(3,8,28,.6)}
${S} .${p}-video-highlight .video-highlight{display:block;margin:0;padding:0;border-radius:0;background:transparent;box-shadow:none}
${S} .${p}-video-highlight .video-highlight-meta{display:none}
${S} .${p}-video-highlight .video-highlight-frame{border-radius:0;box-shadow:none}
${S} .${p}-video-highlight .video-highlight-poster img{opacity:.82}
${S} .${p}-stats{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:-34px clamp(10px,2.4vw,22px) 0}
${S} .${p}-stat{display:flex;align-items:center;gap:12px;min-width:0;padding:14px 18px;border:1px solid var(--line);border-radius:12px;background:#fff;box-shadow:0 6px 18px rgba(20,32,63,.06)}
${S} .${p}-stat b{flex:none;color:#0f1a38;font-size:19px;line-height:1.1;font-weight:800;letter-spacing:-.04em}
${S} .${p}-stat:nth-child(2) b{color:${t.acc2}}
${S} .${p}-stat span{color:#4a5b78;font-size:10.5px;font-weight:700;line-height:1.3}
${S} .${p}-body{margin-top:30px}
${S} .${p}-sec{margin:26px 0 10px}
${S} .${p}-kicker{margin-bottom:3px;color:var(--acc);font:700 10px/1.3 "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
${S} .${p}-h{margin:0 0 4px!important;color:#0f1a38;font-size:18px!important;font-weight:800;line-height:1.2;letter-spacing:-.02em}
${S} .${p}-sub{margin:0 0 10px;color:#46506a;font-size:12px}
${S} .${p}-insight{margin-top:10px;padding:8px 12px;border-left:3px solid var(--acc);border-radius:0 12px 12px 0;background:${t.soft};color:#45526c;font-size:11.5px;line-height:1.5}
${S} .${p}-insight strong{color:${t.strong}}
${S} .${p}-warning{margin-top:14px;padding:8px 12px;border-left:3px solid ${t.acc2};border-radius:0 10px 10px 0;background:#fff8e8;color:#6d5a2a;font-size:11px;line-height:1.5}
${S} .${p}-box{padding:14px 16px;border:1px solid var(--line);border-radius:16px;background:#fff;box-shadow:0 8px 22px rgba(20,32,63,.04)}
${S} .${p}-box h3{margin:0 0 10px;color:var(--ink);font-size:13px;font-weight:800}
${S} .${p}-note{margin-top:8px;color:#7a8799;font-size:10.5px}
@media(max-width:900px){${S} .${p}-head{grid-template-columns:1fr}${S} .${p}-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){
${S}{padding:14px;border-radius:22px}
${S} .${p}-head{padding:22px 18px 44px}
${S} .${p}-title{font-size:28px!important}
${S} .${p}-stats{grid-template-columns:1fr;gap:10px;margin:-34px 8px 0}
${S} .${p}-stat{padding:12px 14px}
${S} .${p}-role{max-width:none}
}
`;
