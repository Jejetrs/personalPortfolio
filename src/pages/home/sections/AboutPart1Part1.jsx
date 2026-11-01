const LINKEDIN = "https://www.linkedin.com/in/jessica-trs";
const EMAIL = "mailto:jssicatheresia@gmail.com";

const FLOATERS = [
  ["GPA 3.97", "Informatics, 4.00 scale"],
  ["Design Intern ‘26", "Learning on real projects"],
  ["ASAH", "Distinction graduate"],
];

export default function AboutPart1Part1() {
  return (
    <div className="hx-grid">
      <div className="hx-copy">
        <p className="hx-eyebrow">
          <span className="hx-dot" aria-hidden="true" />
          Open to opportunities · Bekasi, Indonesia
        </p>
        <h1 className="hx-title">
          Jessica
          <br />
          Theresia<em>.</em>
        </h1>
        <p className="hx-roles">
          <span className="hx-role hot">UI/UX Designer</span>
          <span className="hx-role">AI/ML Engineer</span>
          <span className="hx-role">Digital Product Development</span>
        </p>
        <p className="hx-lead">
          I like problems that start out messy. I research them, design the product, and build it myself, so what leaves my desk
          is something people can actually use.
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
        <div className="hx-block" aria-hidden="true" />
        <div className="hx-ring" aria-hidden="true" />
        <div className="hx-photo">
          <img alt="Jessica Theresia" src="/assets/Photo%20Profile.png" />
        </div>
        {FLOATERS.map(([big, small], index) => (
          <div className={`hx-float f${index + 1}`} key={big}>
            <b>{big}</b>
            <span>{small}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
