const STEPS = [
  {
    n: "01",
    verb: "Understand",
    title: "Know the user, test the assumptions",
    text: "Who they are, what they do today, and what I only think I know.",
    design: ["Interviews & surveys", "Card sorting", "Affinity diagram"],
    tech: ["Data Profiling"],
    proof: "AOShuttle · card sorting reshaped the app structure",
  },
  {
    n: "02",
    verb: "Prioritize",
    title: "Decide which needs come first",
    text: "Rank needs by value, time, data and tech limits before drawing anything.",
    design: ["SWOT", "Business model", "Competitor analysis"],
    tech: ["Feasibility check"],
    proof: "Trustee · market research and business model",
  },
  {
    n: "03",
    verb: "Design",
    title: "Shape the solution",
    text: "Turn the priority list into flows, screens and a system that can be built.",
    design: ["User flow", "Wireframe", "Figma design system"],
    tech: ["System design", "API & database plan"],
    proof: "INAPROC · design system and components",
  },
  {
    n: "04",
    verb: "Build",
    title: "Make it work end to end",
    text: "Code the interface, the service and the model so the idea survives real use.",
    design: ["Design handoff"],
    tech: ["React", "Flask / Node.js", "Python ML", "Git"],
    proof: "Smart Focus Alert · detection model, web app, reports",
  },
  {
    n: "05",
    verb: "Validate",
    title: "Test, then improve",
    text: "Put it in front of testers, measure, and feed the findings back in.",
    design: ["Usability testing", "SEQ / UAT scoring"],
    tech: ["Black-box testing", "Model evaluation"],
    proof: "Nusca · UAT 4.55 / 5 from 10+ testers",
  },
];

export default function DesignProcessPart1Part1() {
  return (
    <>
      <p className="pr-legend" aria-hidden="true">
        <span className="d">Design &amp; research</span>
        <span className="t">Engineering</span>
      </p>
      <ol className="pr-track">
        {STEPS.map((step) => (
          <li className="pr-step" key={step.n}>
            <div className="pr-top">
              <span className="pr-n">{step.n}</span>
              <span className="pr-verb">{step.verb}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <ul className="pr-tags d" aria-label="Design and research">
              {step.design.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <ul className="pr-tags t" aria-label="Engineering">
              {step.tech.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="pr-proof">
              <b>Seen in</b>
              {step.proof}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
