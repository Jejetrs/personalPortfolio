import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { pillarMeta, pillarsData } from './skillsData.js';

/* "Where My Skills Connect": five skills in a vertical list joined by a winding animated line.
   The detail card sits on the right and swaps whenever another skill is chosen. */

const COUNT = pillarsData.length;
const NODE = 48; // node diameter
const EDGE_X = 28; // x of the left-hand nodes
const MIN_ROW = 86; // smallest row height on wide screens
const MOBILE_ROW = 100; // row height when the card sits below the list
const ROW_GAP = 8; // extra spacing between skill pillars on wide screens
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function useMedia(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);
  return matches;
}

export default function SkillsJourney() {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(520);
  const [cardHeight, setCardHeight] = useState(0);
  const listRef = useRef(null);
  const cardRef = useRef(null);
  const stackRef = useRef(null);
  const footRef = useRef(null);
  const buttonRefs = useRef([]);
  const wide = useMedia('(min-width: 900px)');
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)');

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const measure = () => setWidth(list.clientWidth || 520);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  // The card is as tall as its tallest skill, so it never changes height when the skill changes.
  // The list then takes the same height, which keeps both columns level.
  useLayoutEffect(() => {
    const card = cardRef.current;
    const stack = stackRef.current;
    const foot = footRef.current;
    if (!card || !stack || !foot) return undefined;
    const measure = () => {
      const style = getComputedStyle(card);
      const frame = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      setCardHeight(Math.ceil(stack.offsetHeight + foot.offsetHeight + frame));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stack);
    observer.observe(foot);
    observer.observe(card);
    return () => observer.disconnect();
  }, [wide]);

  const select = useCallback((index, { scroll = false } = {}) => {
    setActive(index);
    if (scroll && !window.matchMedia('(min-width: 900px)').matches) {
      window.setTimeout(() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
    }
  }, []);

  const move = (direction) => select((active + direction + COUNT) % COUNT);

  const onKeyDown = (event) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = null;
    if (event.key in keys) next = (active + keys[event.key] + COUNT) % COUNT;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = COUNT - 1;
    if (next === null) return;
    event.preventDefault();
    select(next);
    buttonRefs.current[next]?.focus();
  };

  const listHeight = wide
    ? Math.max(cardHeight, COUNT * MIN_ROW) + (COUNT - 1) * ROW_GAP
    : COUNT * MOBILE_ROW;
  const rowHeight = listHeight / COUNT;
  const centerY = (i) => rowHeight * (i + 0.5);

  // Node positions: they alternate between two columns so the line winds down the list.
  const amplitude = width < 420 ? 44 : clamp(width * 0.3, 80, 150);
  const points = pillarsData.map((_, i) => ({ x: EDGE_X + (i % 2 ? amplitude : 0), y: centerY(i) }));
  const segments = points.slice(1).map((end, i) => {
    const start = points[i];
    const mid = (start.y + end.y) / 2;
    return `M ${start.x} ${start.y} C ${start.x} ${mid}, ${end.x} ${mid}, ${end.x} ${end.y}`;
  });
  const fullPath = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map((end, i) => {
    const start = points[i];
    const mid = (start.y + end.y) / 2;
    return `C ${start.x} ${mid}, ${end.x} ${mid}, ${end.x} ${end.y}`;
  }).join(' ');

  // A pointer on the card's edge shows which row the card belongs to.
  const pointerY = clamp(centerY(active), 30, Math.max(30, listHeight - 30));

  const data = pillarsData[active];
  const meta = pillarMeta[active];
  const cardStyle = { '--acc': meta.accent, '--soft': meta.soft, '--edge': meta.edge };

  return (
    <div className="sj" id="skills-journey">
      <div className="sj-list" ref={listRef} style={{ height: listHeight }} role="list" aria-label="Skill pillars" onKeyDown={onKeyDown}>
        <svg className="sj-line" width={width} height={listHeight} viewBox={`0 0 ${width} ${listHeight}`} aria-hidden="true">
          <defs>
            <filter id="sj-blur" x="-30%" y="-10%" width="160%" height="120%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            {segments.map((_, i) => (
              <linearGradient key={i} id={`sj-grad-${i}`} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={points[i].y} y2={points[i + 1].y}>
                <stop offset="0%" stopColor={pillarMeta[i].accent} />
                <stop offset="100%" stopColor={pillarMeta[i + 1].accent} />
              </linearGradient>
            ))}
          </defs>
          {segments.map((d, i) => {
            const lit = i < active;
            return (
              <g key={i} className={lit ? 'sj-seg is-lit' : 'sj-seg'}>
                <path className="sj-seg-glow" d={d} stroke={`url(#sj-grad-${i})`} filter="url(#sj-blur)" />
                <path className="sj-seg-line" d={d} stroke={`url(#sj-grad-${i})`} pathLength="1" style={{ animationDelay: `${i * 0.35}s` }} />
                <path className="sj-seg-flow" d={d} />
              </g>
            );
          })}
          {!reduceMotion && (
            <>
              <circle className="sj-beacon" r="5" filter="url(#sj-blur)">
                <animateMotion dur="11s" repeatCount="indefinite" path={fullPath} />
              </circle>
              <circle className="sj-beacon sj-beacon-core" r="3.2">
                <animateMotion dur="11s" repeatCount="indefinite" path={fullPath} />
              </circle>
            </>
          )}
        </svg>
        {pillarsData.map((item, i) => {
          const m = pillarMeta[i];
          const state = i === active ? 'is-active' : i < active ? 'is-passed' : '';
          return (
            <button
              key={item.index}
              ref={(node) => { buttonRefs.current[i] = node; }}
              type="button"
              role="listitem"
              className={`sj-row ${state}`}
              style={{ top: centerY(i) - rowHeight / 2 + 4, height: rowHeight - 8, '--acc': m.accent, '--soft': m.soft }}
              aria-current={i === active ? 'true' : undefined}
              aria-controls="sj-card"
              onPointerEnter={(event) => { if (event.pointerType === 'mouse') select(i); }}
              onFocus={() => select(i)}
              onClick={() => select(i, { scroll: true })}
            >
              <span className="sj-node" style={{ left: points[i].x - NODE / 2 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="sj-label" style={{ left: points[i].x + NODE / 2 + 14 }}>
                <span className="sj-tag">{m.phase}</span>
                <strong>{item.title}</strong>
                <small>{m.keywords}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div className="sj-stage">
        <div className="sj-card-wrap">
          <div className="sj-card" id="sj-card" ref={cardRef} style={{ ...cardStyle, minHeight: wide ? listHeight : undefined }} role="region" aria-live="polite" aria-label={data.title}>
            <span className="sj-pointer" style={{ top: pointerY }} aria-hidden="true" />
            <div className="sj-stack" ref={stackRef}>
              {pillarsData.map((item, i) => (
                <div
                  className={i === active ? 'sj-card-body is-on' : 'sj-card-body'}
                  key={item.index}
                  aria-hidden={i === active ? undefined : 'true'}
                  inert={i === active ? undefined : true}
                >
                  <div className="sj-card-head">
                    <span className="sj-icon" dangerouslySetInnerHTML={{ __html: item.iconSvg }} />
                    <div>
                      <p className="sj-badge">{item.phaseBadge}</p>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p className="sj-desc">{item.description}</p>
                  <ul className="sj-bullets">
                    {item.bullets.map((text) => (
                      <li key={text}><i aria-hidden="true" /><span>{text}</span></li>
                    ))}
                  </ul>
                  <div className="sj-group">
                    <h4>Core skills</h4>
                    <div className="sj-chips">
                      {item.coreSkills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </div>
                  <div className="sj-group">
                    <h4>{i === 3 ? 'Tools & technologies' : 'Tools'}</h4>
                    <div className="sj-chips sj-chips-tools">
                      {item.tools.map((tool) => <span key={tool}>{tool}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sj-card-foot" ref={footRef}>
              <span className="sj-counter">{String(active + 1).padStart(2, '0')} / {String(COUNT).padStart(2, '0')}</span>
              <div className="sj-dots" aria-hidden="true">
                {pillarsData.map((item, i) => (
                  <i key={item.index} className={i === active ? 'is-on' : ''} />
                ))}
              </div>
              <div className="sj-nav">
                <button type="button" aria-label="Previous skill" onClick={() => move(-1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button type="button" aria-label="Next skill" onClick={() => move(1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
