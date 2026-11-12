function EvidenceButton({ order, src, title, caption, gallery }) {
  return (
    <div className="event-proof-carousel">
      <button
        type="button"
        className="event-proof-button"
        data-event-photo="digistar"
        data-event-photo-order={order}
        data-photo-key={`digistar-contribution-${order}`}
        data-photo-src={src}
        data-photo-gallery={gallery ? JSON.stringify(gallery) : undefined}
        data-photo-title={title}
        data-photo-caption={caption}
        disabled
        aria-label={`Photo pending: ${title}`}
      >
        <img className="event-proof-image" alt={title} loading="lazy" decoding="async" hidden />
        <span className="event-proof-placeholder" aria-hidden="true">
          <span className="event-proof-symbol">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 7h3l2-2h6l2 2h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"></path>
              <circle cx="12" cy="13" r="3.5"></circle>
            </svg>
          </span>
          <span className="event-proof-placeholder-label">PHOTO DOCUMENTATION</span>
          <strong>{title}</strong>
          <small>Reserved for your original photo</small>
        </span>
        <span className="event-proof-expand" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M8 3H4a1 1 0 0 0-1 1v4M16 3h4a1 1 0 0 1 1 1v4M8 21H4a1 1 0 0 1-1-1v-4M16 21h4a1 1 0 0 1 1-1v-4"></path>
          </svg>
        </span>
      </button>
      {gallery && (
        <button type="button" className="event-proof-next" data-photo-next aria-label="Next photo">
          Next
        </button>
      )}
    </div>
  );
}

function EvidenceCard({ index, title, description, children }) {
  return (
    <article className="event-role-card event-role-card--with-photo">
      <div className="event-proof-visual">
        {children}
        <span className="event-proof-caption">
          <span>{String(index).padStart(2, "0")} · EVIDENCE</span>
          {title}
        </span>
      </div>
      <span className="event-role-index">{String(index).padStart(2, "0")}</span>
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
}

export default function DigistarEventContentPart1Part1() {
  return (
    <div className="event-role-grid">
      <EvidenceCard index={1} title="Frame the problem" description="Built the business context through mentor discussions and pitching practice.">
        <EvidenceButton
          order={1}
          src="/assets/events/B2B%20DCI%202026/Discuss%20With%20Mentor.webp"
          title="Discuss With Mentor"
          caption="Discussion with a mentor to frame the business problem."
          gallery={[
            { src: "/assets/events/B2B%20DCI%202026/Discuss%20With%20Mentor.webp", title: "Discuss With Mentor", caption: "Discussion with a mentor to frame the business problem." },
            { src: "/assets/events/B2B%20DCI%202026/Pitching%20Practice%20Class.webp", title: "Pitching Practice Class", caption: "Pitching practice to refine the problem statement and solution story." },
          ]}
        />
      </EvidenceCard>
      <EvidenceCard index={2} title="Keep the team align" description="Monitored team progress and kept the business, product, and AI workstreams aligned.">
        <EvidenceButton
          order={2}
          src="/assets/events/B2B%20DCI%202026/Team%20Monitoring.png"
          title="Team Monitoring"
          caption="Team monitoring during the B2B project work."
        />
      </EvidenceCard>
      <EvidenceCard index={3} title="Make the case" description="Represented the team in the pitching competition, explaining the solution and its business value.">
        <EvidenceButton
          order={3}
          src="/assets/events/B2B%20DCI%202026/Pitching%20Competition.jpeg"
          title="Pitching Competition"
          caption="Pitching Competition presentation for the B2B use case."
        />
      </EvidenceCard>
    </div>
  );
}
