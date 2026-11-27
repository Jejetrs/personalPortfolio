import VideoHighlight from "@/components/VideoHighlight.jsx";
import { Prsi, baseCss } from "./AnalysisKit.jsx";

const VIDEO_ID = "1ZCeQb2X0lZQ7DzovJzCLxNJg3BcT7fQC";
const VIDEO_POSTER = "/assets/experience/Samsung%20Innovation%20Campus/Product%20Thinking.png";
const AGROSENSE_PHOTOS = [
  {
    src: "/assets/experience/Samsung%20Innovation%20Campus/Agrosense%20IoT%20Hardware1.jpeg",
    alt: "Hydroponic growing rack and AgroSense system concept",
    caption: "Hydroponic setup and growing rack",
  },
  {
    src: "/assets/experience/Samsung%20Innovation%20Campus/Agrosense%20IoT%20Hardware2.jpeg",
    alt: "AgroSense plant and sensor system diagram",
    caption: "Plant and sensor system diagram",
  },
  {
    src: "/assets/experience/Samsung%20Innovation%20Campus/Agrosense%20IoT%20Hardware3.png",
    alt: "AgroSense hydroponic prototype and circuit setup",
    caption: "Prototype setup and circuit overview",
  },
  {
    src: "/assets/experience/Samsung%20Innovation%20Campus/Agrosense%20IoT%20Hardware4.jpeg",
    alt: "Close-up of the AgroSense sensor circuit",
    caption: "Sensor circuit and wiring",
  },
];

/* ---- Numbers are counted from the team's research boards (Samsung Innovation Campus, Batch 5). Edit here to change the card. ---- */

/* Problem – Role – Solution – Impact. Keep each column short; numbers go in `nums`. */
const PRSI = [
  {
    key: "problem", letter: "P", label: "Problem",
    head: "Growers can't see disease or climate problems early.",
    points: [
      "Most don't know which disease hit a plant or how to treat it.",
      "Watching plants all day takes time many growers don't have.",
      "Water, air and humidity shift unseen, and the harvest suffers.",
    ],
    nums: [
      { n: "20", l: "pain-point notes from the team" },
      { n: "6", l: "problem themes: water, climate, humidity, system, air, disease" },
    ],
  },
  {
    key: "role", letter: "R", label: "Role",
    head: "Product Analyst & Designer.",
    points: [
      "Applied design thinking to synthesize 20 team pain-point notes into 6 themes.",
      "Helped prioritize 48 ideas into 15 near-term actions and 4 deliverables.",
      "Translated findings into 4 user-flow scenarios and aligned interface needs with AI integration.",
    ],
  },
  {
    key: "solution", letter: "S", label: "Solution",
    head: "One dashboard for sensors and leaf-disease checks.",
    points: [
      "ESP32 sensors read water, air, humidity and pH.",
      "A leaf photo goes to a deep-learning model (Xception + DenseNet).",
      "A Streamlit dashboard shows it all. LED alerts work offline.",
    ],
    nums: [
      { n: "6", l: "live readings on the dashboard" },
      { n: "4", l: "user-flow scenarios designed" },
    ],
  },
  {
    key: "impact", letter: "I", label: "Impact",
    head: "A working prototype that reached the program finals.",
    points: ["Sensor readings and leaf analysis run end to end in a demo."],
    nums: [
      { n: "Finalist", l: "Samsung Innovation Campus, Batch 5" },
      { n: "66%", l: "sample scab prediction in the demo, not model accuracy", warn: true },
    ],
    note: "A prototype with no field trial. Not a commercial deployment.",
  },
];

/* From research to scope: each number is a count on the team's boards. */
const FUNNEL = [
  { n: 24, l: "research sources" },
  { n: 20, l: "pain-point notes" },
  { n: 6, l: "how-might-we questions" },
  { n: 48, l: "solution ideas · brainstorming" },
  { n: 15, l: "ideas to do now" },
  { n: 4, l: "deliverables" },
];

/* Prioritization matrix: 48 ideas sorted by value and effort. */
const MATRIX = [
  { key: "now", tag: "High value · Low effort", name: "Do it now", n: 15, text: "pH, temperature, CO₂ and humidity sensors, deep-learning disease detection, automatic adjustment." },
  { key: "next", tag: "High value · High effort", name: "Do next", n: 12, text: "Turbidity and smell checks, sensor calibration, an exhaust fan, spare parts." },
  { key: "later", tag: "Low value · Low effort", name: "Do later", n: 14, text: "Weather-data lookups, humidity forecasting, asking a botanist." },
  { key: "last", tag: "Low value · High effort", name: "Do last", n: 7, text: "A farm robot, a closed greenhouse, air purifiers." },
];

const THEME = {
  acc: "#0f8f6a", acc2: "#d97706", glow1: "rgba(15,143,106,.5)", glow2: "rgba(217,119,6,.3)",
  soft: "#ecfaf4", strong: "#0b6b4f", roleTint: "#fcd9a0",
  base: "linear-gradient(135deg,#0a1f1c 0%,#0f3a33 55%,#124d43 100%)",
};

const S = "#agrosense-business-analysis-card.ags";
const CSS = baseCss(S, "ags", THEME) + `
${S} .ags-funnel{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;margin:0;padding:0;list-style:none}
${S} .ags-funnel li{position:relative;display:flex;flex-direction:column;gap:3px;padding:12px 12px 11px;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:0 8px 22px rgba(20,32,63,.04)}
${S} .ags-funnel li:not(:last-child)::after{content:"→";position:absolute;right:-12px;top:50%;z-index:1;transform:translateY(-50%);color:var(--acc);font-size:14px;font-weight:800}
${S} .ags-funnel b{color:var(--acc);font-size:26px;font-weight:800;line-height:1;letter-spacing:-.04em}
${S} .ags-funnel li:nth-child(5) b{color:#15803d}
${S} .ags-funnel span{color:#46506a;font-size:10.5px;font-weight:600;line-height:1.3}
${S} .ags-mx{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
${S} .ags-tile{display:flex;flex-direction:column;gap:6px;padding:13px 15px;border:1px solid var(--line);border-radius:16px;background:#fff}
${S} .ags-tile.is-now{border-color:#a7e3c4;background:linear-gradient(160deg,#fff 0%,#ecfaf4 100%)}
${S} .ags-tile-top{display:flex;align-items:baseline;gap:10px}
${S} .ags-tile-top b{color:var(--acc);font-size:28px;font-weight:800;line-height:1;letter-spacing:-.04em}
${S} .ags-tile-top h3{margin:0;color:var(--ink);font-size:13px;font-weight:800}
${S} .ags-tile small{margin-left:auto;color:#7a8799;font:700 9px/1.3 "JetBrains Mono",monospace;letter-spacing:.06em;text-align:right;text-transform:uppercase}
${S} .ags-bar{height:8px;overflow:hidden;border-radius:99px;background:#e8eefa}
${S} .ags-bar i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#7ad1ac,var(--acc))}
${S} .ags-tile.is-last .ags-bar i,${S} .ags-tile.is-later .ags-bar i{background:#c5cde0}
${S} .ags-tile p{color:var(--mut);font-size:11.5px;line-height:1.45}
${S} .ags-figs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:0}
${S} .ags-fig{margin:0}
${S} .ags-fig img{display:block;width:100%;height:clamp(110px,13vw,170px);padding:4px;border:1px solid var(--line);border-radius:10px;background:#f6f8fc;object-fit:contain}
${S} .ags-fig figcaption{margin:5px 2px 0;color:var(--mut);font-size:10px;line-height:1.35}
@media(max-width:1100px){${S} .ags-funnel{grid-template-columns:repeat(3,minmax(0,1fr))}${S} .ags-funnel li:nth-child(3)::after{display:none}${S} .ags-figs{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){${S} .ags-funnel{grid-template-columns:repeat(2,minmax(0,1fr))}${S} .ags-funnel li::after{display:none}${S} .ags-mx{grid-template-columns:1fr}${S} .ags-fig img{height:120px}}
`;

export default function AgrosenseBusinessAnalysisCard() {
  return (
    <>
      <style>{CSS}</style>
      <article className="project-card-item ags" id="agrosense-business-analysis-card">
        <div className="ags-top">
          <header className="ags-head">
            <div className="ags-hero-copy">
              <div className="ags-chips" aria-label="Project categories">
                <span>Product Analysis &amp; Design</span>
                <span>Samsung Innovation Campus</span>
                <span className="ags-chip-warn">Prototype · Not commercial</span>
              </div>
              <h2 className="ags-title">AgroSense</h2>
              <p className="ags-summary">
                How a hydroponic grower could watch plant health and growing conditions in one
                place: the problem, the research behind it, and what the team built.
              </p>
              <div className="ags-role">
                <b>My role</b>
                <span>Product Analyst &amp; Designer</span>
              </div>
            </div>
            <div className="ags-video-highlight">
              <VideoHighlight
                driveId={VIDEO_ID}
                poster={VIDEO_POSTER}
                label="AgroSense video"
                title="Project presentation"
                accent="#0f8f6a"
              />
            </div>
          </header>
          <div className="ags-stats" aria-label="Project summary">
            <div className="ags-stat"><b>24</b><span>Research sources</span></div>
            <div className="ags-stat"><b>48</b><span>Solution ideas</span></div>
            <div className="ags-stat"><b>Finalist</b><span>Program result</span></div>
          </div>
        </div>

        <div className="ags-body">
          <Prsi items={PRSI} />

          <section className="ags-sec">
            <p className="ags-kicker">Research</p>
            <h2 className="ags-h">From research to scope</h2>
            <ol className="ags-funnel">
              {FUNNEL.map((f) => (
                <li key={f.l}><b>{f.n}</b><span>{f.l}</span></li>
              ))}
            </ol>
          </section>

          <section className="ags-sec">
            <p className="ags-kicker">Prioritization</p>
            <h2 className="ags-h">48 ideas, sorted by value and effort</h2>
            <div className="ags-mx">
              {MATRIX.map((m) => (
                <div className={`ags-tile is-${m.key}`} key={m.key}>
                  <div className="ags-tile-top">
                    <b>{m.n}</b>
                    <h3>{m.name}</h3>
                    <small>{m.tag}</small>
                  </div>
                  <div className="ags-bar" role="img" aria-label={`${m.n} of 48 ideas`}><i style={{ width: `${(m.n / 48) * 100}%` }} /></div>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ags-sec">
            <p className="ags-kicker">Product</p>
            <h2 className="ags-h">The prototype</h2>
            <div className="ags-figs">
              {AGROSENSE_PHOTOS.map((photo) => (
                <figure className="ags-fig" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="ags-note">Counts come from the team&apos;s research boards. The 66% scab result is one sample from the demo.</p>
          </section>
        </div>
      </article>
    </>
  );
}
