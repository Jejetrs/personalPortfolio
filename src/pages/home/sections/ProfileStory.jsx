import { useState } from "react";
import { CHAPTERS } from "@/pages/home/data/chapters.js";
import { CHAPTER_ROLES, FIT, ROLES } from "@/pages/home/data/storyProfile.js";

export default function ProfileStory() {
  const [role, setRole] = useState("all");
  const fit = FIT[role];

  const onTabKey = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const keys = ROLES.map((item) => item.key);
    const next = (keys.indexOf(role) + (event.key === "ArrowRight" ? 1 : -1) + keys.length) % keys.length;
    setRole(keys[next]);
    document.getElementById(`hh-tab-${keys[next]}`)?.focus();
  };

  return (
    <section className="hh-story" id="story" aria-labelledby="hh-story-title">
      <header>
        <p className="hh-kicker">How I got here</p>
        <h3 id="hh-story-title">Learning, growing, and finding my way through experience.</h3>
        <p className="hh-story-sub">
          Every year has brought new opportunities to explore, work with different people, and take on greater responsibilities.
        </p>
      </header>

      <ol>
        {CHAPTERS.map((chapter, index) => {
          const match = role !== "all" && CHAPTER_ROLES[index].includes(role);
          const dim = role !== "all" && !match;
          return (
            <li className={`${match ? "is-lit" : ""}${dim ? " is-dim" : ""}`.trim()} key={chapter.when}>
              <div className="hh-yr">
                <b>{chapter.when}</b>
                <span>{chapter.verb}</span>
              </div>
              <h4>{chapter.title}</h4>
              <p>{chapter.text}</p>
            </li>
          );
        })}
      </ol>

      <div className="hh-ask">
        <div className="hh-ask-head">
          <p className="hh-ask-label" id="hh-ask-label">My short story as</p>
          <div aria-labelledby="hh-ask-label" className="hh-ask-tabs" onKeyDown={onTabKey} role="tablist">
            {ROLES.map((item) => (
              <button
                aria-controls="hh-ask-panel"
                aria-selected={role === item.key}
                id={`hh-tab-${item.key}`}
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
        </div>

        <div aria-labelledby={`hh-tab-${role}`} className="hh-ask-panel" id="hh-ask-panel" key={role} role="tabpanel">
          <section className="hh-ask-col hh-ask-intro">
            <h4 className="hh-ask-title">{fit.title}</h4>
            <p className="hh-ask-headline">{fit.headline}</p>
            <p className="hh-ask-sec">What I Bring</p>
            <p className="hh-ask-copy">{fit.whatBring}</p>
          </section>
          <section className="hh-ask-col">
            <p className="hh-ask-sec">Proof in Practice</p>
            <ul className="hh-ask-proof">
              {fit.proof.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </section>
          <section className="hh-ask-col">
            <p className="hh-ask-sec">Where I'm Growing</p>
            <p className="hh-ask-copy">{fit.growing}</p>
            <p className="hh-ask-explore">
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
    </section>
  );
}
