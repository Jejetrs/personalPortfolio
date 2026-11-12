import { useState } from "react";
import { CHAPTER_ROLES, FIT, ROLES } from "@/pages/home/data/storyProfile.js";
import "@/styles/story.css";

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
    verb: "Deliver",
    title: "Work other people depend on",
    text: "Telkom Magenta internship as a Designer (Mar–Jul), 30+ INAPROC components audited, 3rd in the Digistar B2B pitch, and Coding Camp facilitator for 20+ learners.",
  },
];

export default function StoryBand() {
  const [role, setRole] = useState("all");
  const fit = FIT[role];
  const lit = CHAPTERS.filter((_, index) => role !== "all" && CHAPTER_ROLES[index].includes(role));

  const onTabKey = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const keys = ROLES.map((item) => item.key);
    const next = (keys.indexOf(role) + (event.key === "ArrowRight" ? 1 : -1) + keys.length) % keys.length;
    setRole(keys[next]);
    document.getElementById(`sb-tab-${keys[next]}`)?.focus();
  };

  return (
    <section className="sb rf" id="story" aria-labelledby="story-title">
      <span className="sb-glow g1" aria-hidden="true" />
      <span className="sb-glow g2" aria-hidden="true" />
      <div className="sb-inner">
        <header className="sb-head">
          <p className="sb-kicker">How I got here</p>
          <h2 id="story-title">
            Learning, growing, and finding my way through experience.
          </h2>
          <p>
            Every year has brought new opportunities to explore, work with different people, and take on greater responsibilities.
          </p>
        </header>
        <ol className="sb-track">
          {CHAPTERS.map((chapter, index) => {
            const match = role !== "all" && CHAPTER_ROLES[index].includes(role);
            const dim = role !== "all" && !match;
            return (
              <li
                className={`sb-card${match ? " is-lit" : ""}${dim ? " is-dim" : ""}`}
                key={chapter.when}
                style={{ "--i": index, "--sb-delay": `${index * 120}ms` }}
              >
                <span className="sb-check" aria-hidden="true">
                  <svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" /></svg>
                </span>
                {index < CHAPTERS.length - 1 && (
                  <span className="sb-link" aria-hidden="true">
                    <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                      <defs>
                        <marker id={`sb-arrow-${index}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                          <path d="M0 0 L6 3 L0 6 Z" />
                        </marker>
                      </defs>
                      <path
                        d={index % 2 === 0 ? "M0 0 C 50 0, 50 20, 100 20" : "M0 20 C 50 20, 50 0, 100 0"}
                        markerEnd={`url(#sb-arrow-${index})`}
                      />
                    </svg>
                  </span>
                )}
                <div className="sb-top">
                  <span className="sb-year">{chapter.when}</span>
                  <span className="sb-verb">{chapter.verb}</span>
                </div>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </li>
            );
          })}
        </ol>
        <div className="sb-ask">
          <div className="sb-ask-head">
            <p className="sb-ask-label" id="sb-ask-label">Read my story as</p>
            <div aria-labelledby="sb-ask-label" className="sb-ask-tabs" onKeyDown={onTabKey} role="tablist">
              {ROLES.map((item) => (
                <button
                  aria-controls="sb-ask-panel"
                  aria-selected={role === item.key}
                  id={`sb-tab-${item.key}`}
                  key={item.key}
                  onClick={() => setRole(item.key)}
                  role="tab"
                  tabIndex={role === item.key ? 0 : -1}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p aria-live="polite" className="sb-ask-lit">
              {lit.length ? (
                <>Lit up: {lit.map((chapter) => `${chapter.when} ${chapter.verb}`).join(" · ")}</>
              ) : (
                "All four chapters"
              )}
            </p>
          </div>
          <div aria-labelledby={`sb-tab-${role}`} className="sb-ask-panel" id="sb-ask-panel" key={role} role="tabpanel">
            <section className="sb-ask-col sb-ask-intro">
              <h3 className="sb-ask-title">{fit.title}</h3>
              <p className="sb-ask-headline">{fit.headline}</p>
              <p className="sb-ask-section-label">What I Bring</p>
              <p className="sb-ask-copy">{fit.whatBring}</p>
            </section>
            <section className="sb-ask-col">
              <p className="sb-ask-section-label">Proof in Practice</p>
              <ul className="sb-ask-proof">
                {fit.proof.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </section>
            <section className="sb-ask-col">
              <p className="sb-ask-section-label">Where I'm Growing</p>
              <p className="sb-ask-grow">{fit.growing}</p>
              <p className="sb-ask-explore">
                <b>Explore:</b>
                {fit.links.map((link) => (
                  <a href={link.to ? `/?project=${link.to}#selected-works` : "#selected-works"} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </p>
            </section>
          </div>
        </div>
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
