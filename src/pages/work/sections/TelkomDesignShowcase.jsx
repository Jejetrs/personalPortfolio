import { useEffect, useRef, useState } from 'react';
import { TELKOM_DESIGN_SAMPLES } from './telkomDesignSamples.js';

export default function TelkomDesignShowcase() {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const rail = useRef(null);
  const zoomRef = useRef(null);
  const last = TELKOM_DESIGN_SAMPLES.length - 1;
  const current = TELKOM_DESIGN_SAMPLES[index];

  useEffect(() => {
    const active = rail.current?.children[index];
    if (active && rail.current) {
      rail.current.scrollTo({ left: active.offsetLeft - rail.current.clientWidth / 2 + active.clientWidth / 2, behavior: 'smooth' });
    }
  }, [index]);

  useEffect(() => {
    const dialog = zoomRef.current;
    if (!dialog) return;
    if (zoom && !dialog.open) dialog.showModal();
    if (!zoom && dialog.open) dialog.close();
  }, [zoom]);

  const go = (next) => setIndex(Math.min(last, Math.max(0, next)));
  const onKey = (event) => {
    if (event.key === 'ArrowRight') go(index + 1);
    if (event.key === 'ArrowLeft') go(index - 1);
  };

  return (
    <div className="tas" onKeyDown={onKey}>
      <div className="tas-head">
        <span className="tas-title">
          <span className="material-symbols-outlined" aria-hidden="true">photo_library</span>
          Design showcase
        </span>
        <span className="tas-count">{String(index + 1).padStart(2, '0')} / {String(TELKOM_DESIGN_SAMPLES.length).padStart(2, '0')}</span>
        <div className="tas-controls">
          {index === last ? (
            <button type="button" className="tas-btn tas-return" onClick={() => go(0)} aria-label="Back to the first design preview">
              <span className="material-symbols-outlined" aria-hidden="true">keyboard_double_arrow_left</span>
              Back to start
            </button>
          ) : null}
          {index > 0 && index < last ? (
            <button type="button" className="tas-btn" onClick={() => go(index - 1)} aria-label="Previous design preview">
              <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            </button>
          ) : null}
          {index < last ? (
            <button type="button" className="tas-btn tas-next" onClick={() => go(index + 1)} aria-label="Next design preview">
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </button>
          ) : null}
        </div>
      </div>

      <figure className="tas-stage">
        <img className="tas-backdrop" src={current.thumb} alt="" aria-hidden="true" />
        <button type="button" className="tas-view" onClick={() => setZoom(true)} aria-label={`Enlarge: ${current.title}`}>
          <img key={current.src} className="tas-image" src={current.src} alt={current.title} decoding="async" />
        </button>
        <span className="tas-tag">{current.tag}</span>
        <span className="tas-zoom" aria-hidden="true">
          Click to enlarge
        </span>
      </figure>

      <div className="tas-caption" key={`c-${index}`}>
        <h4>{current.title}</h4>
        <p>{current.text}</p>
      </div>

      <div className="tas-rail" ref={rail} role="tablist" aria-label="Design preview thumbnails">
        {TELKOM_DESIGN_SAMPLES.map((sample, i) => (
          <button
            type="button"
            key={sample.src}
            role="tab"
            aria-selected={i === index}
            className={`tas-thumb${i === index ? ' is-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show ${sample.title}`}
          >
            <img src={sample.thumb} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      <dialog className="tas-zoom-dialog" ref={zoomRef} onClose={() => setZoom(false)} onClick={(event) => event.target === zoomRef.current && setZoom(false)}>
        <button type="button" className="tas-zoom-close" onClick={() => setZoom(false)} aria-label="Close enlarged design preview">×</button>
        {zoom ? <img src={current.src} alt={current.title} /> : null}
      </dialog>
    </div>
  );
}
