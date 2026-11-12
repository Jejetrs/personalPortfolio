import { useEffect, useRef, useState } from 'react';
import '../../../styles/process-loop.css';

const STEPS = [
  {
    n: '01',
    verb: 'Question',
    title: "Look beyond what's being asked.",
    text: 'I try to understand the underlying problem, question assumptions, and identify actual needs before exploring solutions.',
    question: 'Are we solving the right problem?',
  },
  {
    n: '02',
    verb: 'Balance',
    title: 'Find the balance between ideal and practical.',
    text: 'I consider user needs, business goals, technical feasibility, and available resources to develop valuable, realistic solutions without unnecessary complexity.',
    question: 'What matters most, and what are we compromising?',
  },
  {
    n: '03',
    verb: 'Clarify',
    title: 'Make the reasoning as clear as the solution.',
    text: 'I communicate the reasoning behind decisions and document key considerations to help others understand the direction and move forward.',
    question: 'Can others understand why this direction makes sense?',
  },
  {
    n: '04',
    verb: 'Align',
    title: 'Progress works better when everyone understands their part.',
    text: 'I focus on clear responsibilities, open communication, and consistent follow-ups to keep teams aligned and dependencies visible.',
    question: 'Does everyone know what needs to happen next?',
  },
  {
    n: '05',
    verb: 'Reflect',
    title: 'Look beyond whether something simply works.',
    text: 'I see testing and feedback as opportunities to challenge assumptions, not just confirm success. I use findings and limitations to identify areas for improvement.',
    question: 'What did we actually learn, and what should change?',
  },
];

const RING_RADIUS = 37;

function getNodePosition(index) {
  const angle = ((-90 + (360 / STEPS.length) * index) * Math.PI) / 180;
  return [
    50 + RING_RADIUS * Math.cos(angle),
    50 + RING_RADIUS * Math.sin(angle),
  ];
}

function getArcPath(index) {
  const [startX, startY] = getNodePosition(index);
  const [endX, endY] = getNodePosition((index + 1) % STEPS.length);
  return `M${startX.toFixed(2)} ${startY.toFixed(2)}A${RING_RADIUS} ${RING_RADIUS} 0 0 1 ${endX.toFixed(2)} ${endY.toFixed(2)}`;
}

export default function DesignProcessPart1Part1() {
  const rootRef = useRef(null);
  const [tick, setTick] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const activeIndex = ((tick % STEPS.length) + STEPS.length) % STEPS.length;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const selectStep = (index) => {
    setIsAutoPlaying(false);
    setTick((currentTick) => {
      const currentIndex = ((currentTick % STEPS.length) + STEPS.length) % STEPS.length;
      let difference = (index - currentIndex + STEPS.length) % STEPS.length;
      if (difference > STEPS.length / 2) difference -= STEPS.length;
      return currentTick + difference;
    });
  };

  const handleTabKeyDown = (event) => {
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key)
      ? 1
      : ['ArrowLeft', 'ArrowUp'].includes(event.key)
        ? -1
        : 0;
    if (!direction) return;

    event.preventDefault();
    const nextIndex = (activeIndex + direction + STEPS.length) % STEPS.length;
    selectStep(nextIndex);
    document.getElementById(`process-tab-${nextIndex}`)?.focus();
  };

  return (
    <div
      className="process-loop"
      data-live={isAutoPlaying && isVisible ? 'on' : 'off'}
      ref={rootRef}
    >
      <div className="process-loop-ring">
        <svg aria-hidden="true" className="process-loop-svg" viewBox="0 0 100 100">
          {STEPS.map((step, index) => (
            <path
              className={`process-loop-arc${index === activeIndex ? ' is-active' : ''}`}
              d={getArcPath(index)}
              key={step.n}
            />
          ))}
          <g className="process-loop-dot" style={{ transform: `rotate(${(360 / STEPS.length) * tick}deg)` }}>
            <circle cx="50" cy={50 - RING_RADIUS} r="2.2" />
          </g>
        </svg>

        <div aria-hidden="true" className="process-loop-core">
          <span className="process-loop-core-number" data-odd={activeIndex % 2 === 0} key={activeIndex}>
            {STEPS[activeIndex].n}
          </span>
        </div>

        <div
          aria-label="How I work"
          className="process-loop-tabs"
          onKeyDown={handleTabKeyDown}
          role="tablist"
        >
          {STEPS.map((step, index) => {
            const [x, y] = getNodePosition(index);
            return (
              <button
                aria-controls={`process-panel-${index}`}
                aria-selected={index === activeIndex}
                className="process-loop-tab"
                id={`process-tab-${index}`}
                key={step.n}
                onClick={() => selectStep(index)}
                role="tab"
                style={{ left: `${x}%`, top: `${y}%` }}
                tabIndex={index === activeIndex ? 0 : -1}
                type="button"
              >
                <i>{step.n}</i>
                <b>{step.verb}</b>
              </button>
            );
          })}
        </div>
      </div>

      <div className="process-loop-card">
        {STEPS.map((step, index) => (
          <div
            aria-labelledby={`process-tab-${index}`}
            aria-hidden={index !== activeIndex}
            className="process-loop-panel"
            data-active={index === activeIndex}
            id={`process-panel-${index}`}
            key={step.n}
            role="tabpanel"
            tabIndex={index === activeIndex ? 0 : -1}
          >
            <span className="process-loop-verb">{step.verb}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="process-loop-question">
              <span>THE QUESTION I ASK</span>
              <p><em>{step.question}</em></p>
            </div>
          </div>
        ))}
        {isAutoPlaying && (
          <span
            aria-hidden="true"
            className="process-loop-timer"
            key={tick}
            onAnimationEnd={() => setTick((currentTick) => currentTick + 1)}
          />
        )}
      </div>
    </div>
  );
}
