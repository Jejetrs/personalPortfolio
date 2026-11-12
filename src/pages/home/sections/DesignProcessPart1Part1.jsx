const STEPS = [
  {
    n: "01",
    verb: "Question",
    title: "Look beyond what's being asked.",
    text: "I try to understand the underlying problem, question assumptions, and identify actual needs before exploring solutions.",
    question: "Are we solving the right problem?",
  },
  {
    n: "02",
    verb: "Balance",
    title: "Find the balance between ideal and practical.",
    text: "I consider user needs, business goals, technical feasibility, and available resources to develop valuable, realistic solutions without unnecessary complexity.",
    question: "What matters most, and what are we compromising?",
  },
  {
    n: "03",
    verb: "Clarify",
    title: "Make the reasoning as clear as the solution.",
    text: "I communicate the reasoning behind decisions and document key considerations to help others understand the direction and move forward.",
    question: "Can others understand why this direction makes sense?",
  },
  {
    n: "04",
    verb: "Align",
    title: "Progress works better when everyone understands their part.",
    text: "I focus on clear responsibilities, open communication, and consistent follow-ups to keep teams aligned and dependencies visible.",
    question: "Does everyone know what needs to happen next?",
  },
  {
    n: "05",
    verb: "Reflect",
    title: "Look beyond whether something simply works.",
    text: "I see testing and feedback as opportunities to challenge assumptions, not just confirm success. I use findings and limitations to identify areas for improvement.",
    question: "What did we actually learn, and what should change?",
  },
];

export default function DesignProcessPart1Part1() {
  return (
    <>
      <ol className="pr-track">
        {STEPS.map((step) => (
          <li className="pr-step" key={step.n}>
            <div className="pr-top">
              <span className="pr-n">{step.n}</span>
              <span className="pr-verb">{step.verb}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="pr-question">
              <span>THE QUESTION I ASK</span>
              <p><em>{step.question}</em></p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
