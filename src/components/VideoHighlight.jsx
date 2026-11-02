import { useState } from "react";

/** Google Drive share id → inline player URL. */
export const drivePreviewUrl = (id) => `https://drive.google.com/file/d/${id}/preview?rm=minimal`;

/**
 * The player is created on first click so the card stays light until someone
 * actually wants to watch. The sandbox blocks the preview from opening the
 * source in a new window.
 */
export default function VideoHighlight({ driveId, poster, label = "Capstone highlight", title, caption, accent = "#4f46e5" }) {
  const [playing, setPlaying] = useState(false);
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
      <div className="video-highlight-frame">
        {playing ? (
          <>
            <iframe
              src={drivePreviewUrl(driveId)}
              title={title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="no-referrer"
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
            <span className="video-highlight-source-guard" aria-hidden="true" />
          </>
        ) : (
          <button type="button" className="video-highlight-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
            {poster ? <img src={poster} alt="" loading="lazy" /> : null}
            <span className="video-highlight-play" aria-hidden="true">▶</span>
          </button>
        )}
      </div>
    </figure>
  );
}
