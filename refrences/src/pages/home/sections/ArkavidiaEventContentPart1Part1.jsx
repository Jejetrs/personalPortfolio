function EvidenceButton({ order, src, title, caption, gallery }) {
  return (
    <div className="event-proof-carousel">
      <button
        type="button"
        className="event-proof-button"
        data-event-photo="arkavidia"
        data-event-photo-order={order}
        data-photo-key={`arkavidia-contribution-${order}`}
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

export default function ArkavidiaEventContentPart1Part1() {
  return (
    <div className="event-role-grid">
      <EvidenceCard
        index={1}
        title="Clarify the experience"
        description="Turned user needs into navigable flows, layouts, and interface decisions."
      >
        <EvidenceButton
          order={1}
          src="/assets/events/Arkavidia%209.0/Userflow%20AiDorse.png"
          title="Userflow AiDorse"
          caption="User flow work for the AiDorse product experience."
        />
      </EvidenceCard>
      <EvidenceCard
        index={2}
        title="Connect design and code"
        description="Worked across the team to support integration between UI and application functionality."
      >
        <EvidenceButton
          order={2}
          src="/assets/events/Arkavidia%209.0/night%20code.png"
          title="Night Code"
          caption="Late-night coding during the 24-hour hackathon sprint."
        />
      </EvidenceCard>
      <EvidenceCard
        index={3}
        title="Present under pressure"
        description="Helped communicate the product vision and user value during the final pitching session."
      >
        <EvidenceButton
          order={3}
          src="/assets/events/Arkavidia%209.0/consultation%20to%20wiz.ai.webp"
          title="Consultation to wiz.ai"
          caption="Consultation and feedback before the final presentation."
          gallery={[
            { src: "/assets/events/Arkavidia%209.0/consultation%20to%20wiz.ai.webp", title: "Consultation to wiz.ai", caption: "Consultation and feedback before the final presentation." },
            { src: "/assets/events/Arkavidia%209.0/pitching.jpeg", title: "Pitching", caption: "Final pitching presentation of the AiDorse product concept." },
            { src: "/assets/events/Arkavidia%209.0/pitching2.jpeg", title: "Pitching 2", caption: "Additional final pitching documentation from Hackvidia." },
          ]}
        />
      </EvidenceCard>
    </div>
  );
}
