const STEPS = [
  {
    n: "01",
    verb: "Discover & Analyze",
    title: "Understand the people, process, and problem.",
    text: "Explore user needs, business challenges, existing workflows, and pain points to understand what matters before proposing solutions.",
    methods: [
      { label: "User Research", perspective: "research" },
      { label: "Interviews & Surveys", perspective: "research" },
      { label: "Pain Point Analysis", perspective: "research" },
      { label: "Business Research", perspective: "business" },
    ],
    applied: ["AOShuttle", "Trustee", "Leadsight", "AiSee"],
  },
  {
    n: "02",
    verb: "Define & Prioritize",
    title: "Turn insights into clear direction.",
    text: "Translate research findings into problem statements, product requirements, and priorities while considering user value, business goals, and project constraints.",
    methods: [
      { label: "Requirements Analysis", perspective: "business" },
      { label: "User Journeys", perspective: "research" },
      { label: "MVP Scoping", perspective: "business" },
      { label: "Task Prioritization", perspective: "business" },
    ],
    applied: ["LeadSight", "Trustee"],
  },
  {
    n: "03",
    verb: "Design & Specify",
    title: "Make ideas clear, usable, and feasible.",
    text: "Transform requirements into user flows, wireframes, prototypes, and interface specifications that support both user experience and technical implementation.",
    methods: [
      { label: "User Flows", perspective: "research" },
      { label: "Wireframing", perspective: "research" },
      { label: "Prototyping", perspective: "research" },
      { label: "Design Systems", perspective: "research" },
    ],
    applied: ["INAPROC", "Nusca", "AiSee"],
  },
  {
    n: "04",
    verb: "Coordinate & Build",
    title: "Connect planning with implementation.",
    text: "Collaborate across teams, coordinate development activities, and contribute to implementation while considering technical feasibility and integration needs.",
    methods: [
      { label: "Milestone Tracking", perspective: "business" },
      { label: "Design Handoff", perspective: "engineering" },
      { label: "React.js", perspective: "engineering" },
      { label: "API Integration", perspective: "engineering" },
    ],
    applied: ["LeadSight", "INAPROC", "Trustee"],
  },
  {
    n: "05",
    verb: "Validate & Improve",
    title: "Test, learn, and make informed improvements.",
    text: "Evaluate usability, functionality, and user feedback to identify issues, assess whether solutions meet requirements, and guide future improvements.",
    methods: [
      { label: "Usability Testing", perspective: "research" },
      { label: "UAT", perspective: "business" },
      { label: "Black-Box Testing", perspective: "engineering" },
      { label: "Feedback Analysis", perspective: "research" },
    ],
    applied: ["Nusca", "AiSee", "Smart Focus Alert"],
  },
];

export default function DesignProcessPart1Part1() {
  return (
    <>
      <ul className="pr-legend" aria-label="Perspectives">
        <li className="pr-perspective pr-perspective--research">Research &amp; Design</li>
        <li className="pr-perspective pr-perspective--business">Business &amp; Product</li>
        <li className="pr-perspective pr-perspective--engineering">Engineering &amp; Delivery</li>
      </ul>
      <ol className="pr-track">
        {STEPS.map((step) => (
          <li className="pr-step" key={step.n}>
            <div className="pr-top">
              <span className="pr-n">{step.n}</span>
              <span className="pr-verb">{step.verb}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <p className="pr-methods-label">Methods:</p>
            <ul className="pr-tags" aria-label="Methods">
              {step.methods.map((tag) => (
                <li className={`pr-tag--${tag.perspective}`} key={tag.label}>{tag.label}</li>
              ))}
            </ul>
            <p className="pr-proof">
              <b>Applied in</b>
              {step.applied.join(" · ")}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
