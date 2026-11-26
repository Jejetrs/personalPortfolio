import { useState } from "react";

export default function FullscreenButton({ targetRef }) {
  const [error, setError] = useState("");

  const toggleFullscreen = async () => {
    const target = targetRef.current;
    if (!target) {
      setError("The video is not ready for fullscreen.");
      return;
    }

    try {
      if (document.fullscreenElement === target) {
        await document.exitFullscreen();
      } else if (target.requestFullscreen) {
        await target.requestFullscreen();
      } else {
        setError("Fullscreen is not supported in this browser.");
      }
    } catch {
      setError("Could not open fullscreen. Try the video player's controls.");
    }
  };

  return (
    <>
      <button
        aria-label="Toggle video fullscreen"
        className="video-fullscreen-button"
        onClick={toggleFullscreen}
        title="Fullscreen"
        type="button"
      >
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
      {error && <span aria-live="polite" className="video-fullscreen-error" role="status">{error}</span>}
    </>
  );
}
