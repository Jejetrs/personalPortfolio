import { useRef, useState } from "react";
import FullscreenButton from "@/components/FullscreenButton.jsx";

export const drivePreviewUrl = (id) => `https://drive.google.com/file/d/${id}/preview?rm=minimal`;

export default function VideoHighlight({ driveId, poster, label = "Capstone highlight", title, caption, accent = "#4f46e5" }) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef(null);
  return (
    <figure className="video-highlight" style={{ "--vh-accent": accent }}>
      <div className="video-highlight-meta">
        <span className="video-highlight-label">
          <i aria-hidden="true">▶</i>
          {label}
        </span>
        <strong>{title}</strong>
        {caption ? <span className="video-highlight-caption">{caption}</span> : null}
      </div>
      <div className="video-highlight-frame video-stage" ref={frameRef}>
        {playing ? (
          <>
            <iframe
              className="drive-video-embed"
              ref={(frame) => frame?.focus({ preventScroll: true })}
              src={drivePreviewUrl(driveId)}
              title={title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="no-referrer"
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
          </>
        ) : (
          <button type="button" className="video-highlight-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
            {poster ? <img src={poster} alt="" loading="lazy" /> : null}
            <span className="video-highlight-play" aria-hidden="true">▶</span>
          </button>
        )}
        {playing && <FullscreenButton targetRef={frameRef} />}
      </div>
    </figure>
  );
}
