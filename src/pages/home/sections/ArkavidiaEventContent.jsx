import AppLink from '@/components/AppLink.jsx';
import ArkavidiaEventContentPart1 from './ArkavidiaEventContentPart1.jsx';

export default function ArkavidiaEventContent() {
  return (
    <div className="hidden space-y-5 event-story" id="arkavidia-event-content" data-event-panel="arkavidia">
      <div className="event-story-hero event-story-hero--violet">
        <div>
          <span className="event-story-eyebrow">
            THE EXPERIENCE
          </span>
          <h4>
            One intense sprint. Many perspectives. One product story.
          </h4>
          <p>
            During a 24-hour on-site hackathon at Block71 Bandung, our team worked on AiDorse, an AI-powered MSME endorsement concept. I helped shape the experience through UI/UX design and user-focused flows, supported collaboration with front-end, back-end, and AI contributors, and presented the product rationale in the final pitch.
          </p>
        </div>
        <div className="event-story-highlight">
          <span>
            MY ROLE
          </span>
          <strong>
            UI/UX Designer · Cross-Functional Product Contributor
          </strong>
          <span className="event-story-highlight-divider"></span>
          <span>
            EVENT OUTCOME
          </span>
          <strong>
            National Finalist
          </strong>
        </div>
      </div>
      <section className="event-photo-feature" aria-label="Featured event documentation">
        <div className="event-photo-feature-media">
          <button type="button" className="event-proof-button event-proof-button--featured" data-event-photo="arkavidia" data-event-photo-order="0" data-photo-key="arkavidia-cover" data-photo-src="/assets/events/Arkavidia%209.0/tim%20profile.jpeg" data-photo-title="The 24-hour hackathon experience" data-photo-caption="Team profile from the on-site Hackvidia event at Block71 Bandung." disabled aria-label="Photo pending: The 24-hour hackathon experience">
            <img className="event-proof-image" alt="The 24-hour hackathon experience" loading="lazy" decoding="async" hidden />
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
                The 24-hour hackathon experience
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
            The 24-hour hackathon experience
          </h4>
          <p>
            A space for a real moment that shows the people and process behind this experience.
          </p>
          <span className="event-photo-feature-hint">
            Team profile from the on-site Hackvidia event at Block71 Bandung.
          </span>
        </div>
      </section>
      <ArkavidiaEventContentPart1 />
      <div className="event-story-end">
        <div>
          <span className="event-story-eyebrow">
            RESULT
          </span>
          <p className="event-story-result">
            Selected as a national finalist in the Hackvidia competition.
          </p>
          <span className="event-story-eyebrow">
            WHAT STAYED WITH ME
          </span>
          <p className="event-story-takeaway">
            Under tight deadlines, clear priorities and open communication matter as much as technical skills.
          </p>
          <div className="event-story-tags">
            <span className="event-story-tag">
              UI/UX Design
            </span>
            <span className="event-story-tag">
              AiDorse Concept
            </span>
            <span className="event-story-tag">
              24-Hour Hackathon
            </span>
            <span className="event-story-tag">
              Cross-Functional Team
            </span>
          </div>
        </div>
        <AppLink to="/#selected-works" className="event-story-link">
          {"View Related Projects "}
          <span aria-hidden="true">
            ↗
          </span>
        </AppLink>
      </div>
    </div>
  );
}
