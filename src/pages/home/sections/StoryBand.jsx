const CHAPTERS = [
  {
    when: "2023",
    verb: "Teach",
    title: "Started by explaining things",
    text: "Joined the LepKom lab as an instructor and workshop host while studying Informatics. Explaining code to beginners taught me to simplify.",
  },
  {
    when: "2024",
    verb: "Build",
    title: "First real teams, real deadlines",
    text: "2nd place in Machine Learning at KOMPRES 15 (May), Samsung Innovation Campus finalist (Sep), and Top 2 team project at Digistar Class by Telkom (Oct).",
  },
  {
    when: "2025",
    verb: "Lead",
    title: "Ran the plan, not just the part",
    text: "Graduated Coding Camp DBS Foundation as an ML Engineer, reached the Arkavidia 9.0 Hackvidia finals (May), and led the ASAH capstone team.",
  },
  {
    when: "2026",
    verb: "Ship",
    title: "Work other people depend on",
    text: "Telkom Magenta internship as a Designer (Mar–Jul), 30+ INAPROC components audited, 3rd in the Digistar B2B pitch, and Coding Camp facilitator for 20+ learners.",
  },
];

export default function StoryBand() {
  return (
    <section className="sb rf" id="story" aria-labelledby="story-title">
      <span className="sb-glow g1" aria-hidden="true" />
      <span className="sb-glow g2" aria-hidden="true" />
      <div className="sb-inner">
        <header className="sb-head">
          <p className="sb-kicker">How I got here</p>
          <h2 id="story-title">
            One habit since 2023: <em>make it work for the next person.</em>
          </h2>
        </header>
        <ol className="sb-track">
          {CHAPTERS.map((chapter, index) => (
            <li className="sb-card" key={chapter.when} style={{ "--i": index }}>
              <div className="sb-top">
                <span className="sb-year">{chapter.when}</span>
                <span className="sb-verb">{chapter.verb}</span>
              </div>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </li>
          ))}
        </ol>
        <p className="sb-foot">
          <span>Teach</span>
          <i aria-hidden="true">→</i>
          <span>Build</span>
          <i aria-hidden="true">→</i>
          <span>Lead</span>
          <i aria-hidden="true">→</i>
          <span>Deliver</span>
          <small>Each step added a layer; the projects below show all four.</small>
        </p>
      </div>
    </section>
  );
}
