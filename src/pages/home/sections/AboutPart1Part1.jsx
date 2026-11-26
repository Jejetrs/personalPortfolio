import ProfileStory from "./ProfileStory.jsx";

const LINKEDIN = "https://www.linkedin.com/in/jessica-trs";
const EMAIL = "mailto:jssicatheresia@gmail.com";

const FACTS = [
  { label: "Education", value: "Informatics", sub: "Gunadarma University" },
  { label: "Industry Experience", value: "Designer Intern", sub: "MAGENTA Program · Telkom DDP · INAPROC" },
  { label: "Specialization", value: "AI × Product UX", sub: "DBS Foundation Camp & ASAH" },
];

export default function AboutPart1Part1() {
  return (
    <>
      <div className="hh-top">
        <p className="hh-pill">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>Bekasi, Indonesia</span>
        </p>
        <h1 className="hh-title" aria-label="Jessica Theresia">
          <span>Jessica</span> <span>Theresia<em>.</em></span>
        </h1>
        <p className="hh-roles">
          <span>IT Product &amp; Business Analysis</span>
          <i aria-hidden="true" />
          <span>UI/UX Design</span>
          <i aria-hidden="true" />
          <span>Development &amp; AI/ML</span>
        </p>
        <p
          aria-label="Turning needs into products that matter."
          className="hh-sign hero-typewriter"
          role="text"
        >
          <span aria-hidden="true" className="hero-typewriter-text" id="hero-typewriter-text"></span>
        </p>
        <div className="hh-actions hh-hero-actions">
          <a
            className="solid"
            href="#profile-card"
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
              const profileCard = document.getElementById('profile-card');
              if (!profileCard) return;

              event.preventDefault();
              profileCard.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                block: 'start',
              });
              if (window.location.hash !== '#profile-card') {
                window.history.pushState(null, '', '#profile-card');
              }
            }}
          >
            Get to Know Me
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </a>
          <a href={EMAIL}>Direct Email</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      <article className="hh-card" id="profile-card" aria-label="Profile">
        <div className="hh-body">
          <div className="hh-id">
            <div className="hh-frame">
              <img alt="Jessica Theresia" src="/assets/Photo%20Profile.png" />
              <div className="hh-cap">
                <b>Jessica Theresia</b>
                <span>GPA 3.97</span>
              </div>
            </div>
          </div>

          <div className="hh-summary">
            <h2 className="hh-h2">Bridging business needs, product thinking, and engineering feasibility.</h2>
            <p className="hh-lead">
              My passion for technology goes beyond programming. I am curious about how ideas take shape, why solutions are needed, and how technology creates value for businesses and users. Through my experience in Business Analysis, Product Development, UI/UX Design, Software Development, and AI/ML, I combine strategic thinking, creativity, and technical skills to solve complex challenges.
            </p>
            <dl className="hh-facts">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                  <small>{fact.sub}</small>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <ProfileStory />
      </article>
    </>
  );
}
