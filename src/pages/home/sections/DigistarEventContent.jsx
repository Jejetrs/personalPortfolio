import AppLink from '@/components/AppLink.jsx';
import DigistarEventContentPart1 from './DigistarEventContentPart1.jsx';

export default function DigistarEventContent() {
  return (
    <div className="hidden space-y-5 event-story" id="digistar-event-content" data-event-panel="digistar">
      <div className="event-story-hero event-story-hero--indigo">
        <div>
          <span className="event-story-eyebrow">
            THE EXPERIENCE
          </span>
          <h4>
            Leading ideas from business research to the final pitch.
          </h4>
          <p>
            Fake reviews raise real questions about buyer trust and seller fairness. During the Digistar internship, our B2B and AI team explored this challenge and proposed Trustee, an AI-assisted review intelligence concept. I helped connect the business case with technical discussions and presented the solution in our final pitch.
          </p>
        </div>
        <div className="event-story-highlight">
          <span>
            MY ROLE
          </span>
          <strong>
            {"Team Leader · Business Analysis & B2B–AI Coordination"}
          </strong>
          <span className="event-story-highlight-divider"></span>
          <span>
            EVENT OUTCOME
          </span>
          <strong>
            3rd Place · Internal B2B Pitching
          </strong>
        </div>
      </div>
      <section className="event-photo-feature" aria-label="Featured event documentation">
        <div className="event-photo-feature-media">
          <button type="button" className="event-proof-button event-proof-button--featured" data-event-photo="digistar" data-event-photo-order="0" data-photo-key="digistar-cover" data-photo-src="/assets/events/B2B%20DCI%202026/Best%203%20Use%20Case%20Project.webp" data-photo-title="The people behind the pitch" data-photo-caption="Best 3 Use Case Project result from the B2B pitching competition." disabled aria-label="Photo pending: The people behind the pitch">
            <img className="event-proof-image" alt="The people behind the pitch" loading="lazy" decoding="async" hidden />
            {" "}
            <span className="event-proof-placeholder" aria-hidden="true">
              <span className="event-proof-symbol">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 7h3l2-2h6l2 2h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"></path>
                  <circle cx="12" cy="13" r="3.5"></circle>
                </svg>
              </span>
              <span className="event-proof-placeholder-label">
                PHOTO DOCUMENTATION
              </span>
              <strong>
                The people behind the pitch
              </strong>
              <small>
                Reserved for your original photo
              </small>
            </span>
            {" "}
            <span className="event-proof-expand" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M8 3H4a1 1 0 0 0-1 1v4M16 3h4a1 1 0 0 1 1 1v4M8 21H4a1 1 0 0 1-1-1v-4M16 21h4a1 1 0 0 0 1-1v-4"></path>
              </svg>
            </span>
          </button>
          {" "}
          <span className="event-proof-corner">
            FEATURED MOMENT · 01 / 04
          </span>
        </div>
        <div className="event-photo-feature-copy">
          <span className="event-story-eyebrow">
            BEHIND THE SCENES
          </span>
          <h4>
            The people behind the pitch
          </h4>
          <p>
            A space for a real moment that shows the people and process behind this experience.
          </p>
          <span className="event-photo-feature-hint">
            Best 3 Use Case Project
          </span>
        </div>
      </section>
      <DigistarEventContentPart1 />
      <div className="event-story-end">
        <div>
          <span className="event-story-eyebrow">
            RESULT
          </span>
          <p className="event-story-result">
            3rd place in the internal B2B pitching competition.
          </p>
          <span className="event-story-eyebrow">
            WHAT STAYED WITH ME
          </span>
          <p className="event-story-takeaway">
            A compelling solution needs a clear business problem, a feasible technical direction, and a team that tells one story.
          </p>
          <div className="event-story-tags">
            <span className="event-story-tag">
              Business Analysis
            </span>
            <span className="event-story-tag">
              Trustee Concept
            </span>
            <span className="event-story-tag">
              Team Leadership
            </span>
            <span className="event-story-tag">
              Stakeholder Pitching
            </span>
          </div>
        </div>
        <AppLink to="/?project=trustee#selected-works" className="event-story-link">
          {"Explore Trustee Case Study "}
          <span aria-hidden="true">
            ↗
          </span>
        </AppLink>
      </div>
    </div>
  );
}
