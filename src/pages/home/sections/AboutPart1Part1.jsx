const LINKEDIN = "https://www.linkedin.com/in/jessica-trs";
const EMAIL = "mailto:jssicatheresia@gmail.com";

export default function AboutPart1Part1() {
  return (
    <div className="hx-grid">
      <div className="hx-copy">
        <h1 className="hx-title">
          Jessica Theresia<em>.</em>
        </h1>
        <p className="hx-roles">
          <span className="hx-role hot">Digital Product & Business Analysis</span>
          <span className="hx-role">UI/UX Designer</span>
          <span className="hx-role">Developer & AI/ML</span>
        </p>
        <div className="hx-profile-tags">
          <span>Bekasi, Indonesia</span>
          <span>GPA 3.97</span>
        </div>
        <p className="hx-lead">
          I enjoy turning complex problems into <span className="hx-highlight">human-centered</span> digital solutions. With experience across research and analysis, UI/UX design, AI/ML, and full-stack development, I bring together user needs, business goals, and technical understanding to create products that are practical, meaningful, and built with purpose.
        </p>
        <p
          aria-label="Turning user needs into clear and lasting products"
          className="hx-signature hero-typewriter font-handwriting"
          role="text"
        >
          <span aria-hidden="true" className="hero-typewriter-text" id="hero-typewriter-text"></span>
        </p>
        <div className="hx-actions">
          <a className="hx-btn solid" href="#selected-works">
            See the work
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </a>
          <a className="hx-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="hx-btn" href={EMAIL}>
            Email me
          </a>
        </div>
      </div>
      <div className="hx-visual">
        <div className="hx-backdrop" aria-hidden="true" />
        <div className="hx-photo">
          <img alt="Jessica Theresia" src="/assets/Photo%20Profile.png" />
        </div>
      </div>
    </div>
  );
}
