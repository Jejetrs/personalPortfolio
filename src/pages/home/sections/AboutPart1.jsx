import AboutPart1Part1 from './AboutPart1Part1.jsx';

const PILLARS = [
  ["01", "Understand the Problem", "Explore business needs, market trends, and user challenges before defining a solution."],
  ["02", "Design with Purpose", "Turn research insights into clear user flows, intuitive interfaces, and testable prototypes."],
  ["03", "Align People & Progress", "Coordinate responsibilities, timelines, and discussions to keep teams working toward shared goals."],
  ["04", "Bring Ideas to Life", "Build functional solutions through frontend, backend, APIs, and AI/ML integration."],
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
