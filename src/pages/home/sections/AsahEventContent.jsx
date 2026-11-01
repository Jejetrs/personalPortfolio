import AppLink from '@/components/AppLink.jsx';
import AsahEventContentPart1 from './AsahEventContentPart1.jsx';

export default function AsahEventContent() {
  return (
    <div className="hidden space-y-5 event-story" id="asah-event-content" data-event-panel="asah">
      <div className="event-story-hero event-story-hero--cyan">
        <div>
          <span className="event-story-eyebrow">
            THE EXPERIENCE
          </span>
          <h4>
            Building a product while leading the people behind it.
          </h4>
          <p>
            ASAH was where I combined full-stack development with hands-on team leadership. As the Capstone Team Leader for LeadSight, a predictive sales-lead dashboard prototype, I helped guide our team through project planning, technical discussions, development, and final pitching.
          </p>
        </div>
        <div className="event-story-highlight">
          <span>
            MY ROLE
          </span>
          <strong>
            {"Capstone Team Leader · Project Manager · Front-End & Back-End Contributor"}
          </strong>
          <span className="event-story-highlight-divider"></span>
          <span>
            EVENT OUTCOME
          </span>
          <strong>
            Distinction Graduate
          </strong>
        </div>
      </div>
      <section className="event-photo-feature" aria-label="Featured event documentation">
        <div className="event-photo-feature-media">
          <button type="button" className="event-proof-button event-proof-button--featured" data-event-photo="asah" data-event-photo-order="0" data-photo-key="asah-cover" data-photo-src="/assets/events/ASAH%202026/Distinction%20Graduate1.jpeg" data-photo-gallery='[{"src":"/assets/events/ASAH%202026/Distinction%20Graduate1.jpeg","title":"Distinction Graduate 1","caption":"ASAH graduation documentation from the Distinction Graduate milestone."},{"src":"/assets/events/ASAH%202026/Distinction%20Graduate2.jpeg","title":"Distinction Graduate 2","caption":"ASAH graduation documentation celebrating the completed journey."},{"src":"/assets/events/ASAH%202026/Distinction%20Graduate3.jpeg","title":"Distinction Graduate 3","caption":"Another graduation moment from the ASAH Distinction Graduate milestone."}]' data-photo-title="Celebrating the Journey" data-photo-caption="From collaborative development sessions to graduation day, ASAH became a meaningful milestone in my technical and leadership journey." disabled aria-label="Photo pending: Celebrating the Journey">
            <img className="event-proof-image" alt="Celebrating the Journey" loading="lazy" decoding="async" hidden />
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
                Celebrating the Journey
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
          <button type="button" className="event-proof-next" data-photo-next aria-label="Next graduation photo">
            Next
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
            Celebrating the Journey
          </h4>
          <p>
            From collaborative development sessions to graduation day, ASAH became a meaningful milestone in my technical and leadership journey.
          </p>
          <span className="event-photo-feature-hint">
            Photo Documentation: Distinction Graduate 1–3
          </span>
        </div>
      </section>
      <AsahEventContentPart1 />
      <div className="event-story-end">
        <div>
          <span className="event-story-eyebrow">
            RESULT
          </span>
          <p className="event-story-result">
            Graduated with Distinction
          </p>
          <span className="event-story-eyebrow">
            WHAT STAYED WITH ME
          </span>
          <p className="event-story-takeaway">
            “Great products need both strong execution and a team moving together.”
          </p>
          <div className="event-story-tags">
            <span className="event-story-tag">
              Full-Stack Development
            </span>
            <span className="event-story-tag">
              Team Leadership
            </span>
            <span className="event-story-tag">
              Product Delivery
            </span>
            <span className="event-story-tag">
              Cross-Functional Collaboration
            </span>
          </div>
        </div>
        <AppLink to="/work" className="event-story-link">
          {"Explore Training Experience "}
          <span aria-hidden="true">
            ↗
          </span>
        </AppLink>
      </div>
    </div>
  );
}
