export default function LastEventsGallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center" id="last-events-gallery">
      <div className="lg:col-span-4 last-events-copy">
        <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-primary mb-3">
          {"Highlights & Moments"}
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-[#131b2e] tracking-tight leading-[1]">
          Previous Events
        </h2>
        <p className="mt-3 max-w-sm text-sm sm:text-base leading-relaxed text-slate-600">
          Three moments that pushed me beyond the classroom: leading a business pitch, delivering a capstone, and building under a hackathon deadline.
        </p>
      </div>
      <div className="w-full max-w-[42rem] justify-self-end lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4" aria-label="Event stories">
        <button className="last-event-card event-cover event-cover--indigo" type="button" data-event-index="0" data-event-title="Digistar Class Intern — B2B Pitching" data-event-date="2026" aria-controls="last-event-detail" aria-expanded="false" aria-label="Read Digistar Class Intern — B2B Pitching event story">
          <img className="event-cover-real-image" alt="" hidden aria-hidden="true" />
          {" "}
          <span className="event-cover-grain" aria-hidden="true"></span>
          {" "}
          <span className="event-cover-content">
            <span className="event-cover-top">
              <span className="event-cover-number">
                01 / 03
              </span>
              <svg className="event-cover-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                <path d="M7 9h10M7 13h7M12 18v3M8 21h8"></path>
              </svg>
            </span>
            {" "}
            <span className="event-cover-bottom">
              <span className="event-cover-kicker">
                B2B PITCHING · 2026
              </span>
              <strong>
                Digistar Class Intern
              </strong>
              <span className="event-cover-meta">
                3rd Place · Internal B2B Pitching
              </span>
              <span className="event-cover-cta">
                {"Explore the story "}
                <span aria-hidden="true">
                  ↗
                </span>
              </span>
            </span>
          </span>
        </button>
        {" "}
        <button className="last-event-card event-cover event-cover--cyan" type="button" data-event-index="1" data-event-title="ASAH 2025 — Leading the LeadSight Capstone" data-event-date="2025–2026 · Distinction Graduate" aria-controls="last-event-detail" aria-expanded="false" aria-label="Read ASAH 2025 — Leading the LeadSight Capstone event story">
          <img className="event-cover-real-image" alt="" hidden aria-hidden="true" />
          {" "}
          <span className="event-cover-grain" aria-hidden="true"></span>
          {" "}
          <span className="event-cover-content">
            <span className="event-cover-top">
              <span className="event-cover-number">
                02 / 03
              </span>
              <svg className="event-cover-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m9 9-3 3 3 3m6-6 3 3-3 3m-2-7-2 8"></path>
              </svg>
            </span>
            {" "}
            <span className="event-cover-bottom">
              <span className="event-cover-kicker">
                {"CAPSTONE & LEADERSHIP · 2025–2026"}
              </span>
              <strong>
                ASAH 2025
              </strong>
              <span className="event-cover-meta">
                Distinction Graduate
              </span>
              <span className="event-cover-cta">
                {"Explore the story "}
                <span aria-hidden="true">
                  ↗
                </span>
              </span>
            </span>
          </span>
        </button>
        {" "}
        <button className="last-event-card event-cover event-cover--violet" type="button" data-event-index="2" data-event-title="Arkavidia 9.0 — Hackvidia" data-event-date="2025" aria-controls="last-event-detail" aria-expanded="false" aria-label="Read Arkavidia 9.0 — Hackvidia event story">
          <img className="event-cover-real-image" alt="" hidden aria-hidden="true" />
          {" "}
          <span className="event-cover-grain" aria-hidden="true"></span>
          {" "}
          <span className="event-cover-content">
            <span className="event-cover-top">
              <span className="event-cover-number">
                03 / 03
              </span>
              <svg className="event-cover-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="m13 2-9 12h7l-1 8 10-12h-7l0-8Z"></path>
              </svg>
            </span>
            {" "}
            <span className="event-cover-bottom">
              <span className="event-cover-kicker">
                24-HOUR HACKATHON · 2025
              </span>
              <strong>
                Arkavidia 9.0
              </strong>
              <span className="event-cover-meta">
                National Finalist
              </span>
              <span className="event-cover-cta">
                {"Explore the story "}
                <span aria-hidden="true">
                  ↗
                </span>
              </span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
