import AboutPart1Part1 from './AboutPart1Part1.jsx';

const PILLARS = [
  ["01", "Understand the business", "Read the market and the competitors first, so the design solves a real problem."],
  ["02", "Design for people", "Turn needs into flows, prototypes and interfaces that get tested before they get built."],
  ["03", "Keep the team moving", "Plan, schedule and unblock, from the first kickoff through the final pitch."],
  ["04", "Build it properly", "Full-stack, APIs and ML, so the idea works outside the mockup too."],
];

export default function AboutPart1() {
  return (
    <div className="hx-inner">
      <AboutPart1Part1 />
      <ol className="hx-pillars">
        {PILLARS.map(([n, title, text]) => (
          <li className="hx-pillar" key={n}>
            <span className="hx-num">{n}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
