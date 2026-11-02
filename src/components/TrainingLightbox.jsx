import { useEffect, useRef, useState } from "react";

const EMPTY = { photos: [], active: 0 };

function readPhoto(trigger) {
  const photo = trigger.querySelector("img");
  const current = {
    src: photo?.currentSrc || photo?.src,
    alt: photo?.alt ?? "",
    title: trigger.querySelector("strong")?.textContent || "Documentation image",
    caption: trigger.querySelector(".training-doc-copy > span:last-child")?.textContent || "",
  };
  return trigger.dataset.trainingGallery
    ? JSON.parse(trigger.dataset.trainingGallery)
    : [current];
}

export default function TrainingLightbox() {
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);
  const [{ photos, active }, setView] = useState(EMPTY);
  const current = photos[active];

  useEffect(() => {
    const onClick = (event) => {
      const trigger = event.target.closest?.("[data-training-doc]");
      if (!trigger) return;
      const group = Array.from(
        document.querySelectorAll(`[data-training-doc="${trigger.dataset.trainingDoc}"]`),
      );
      if (!group.length) return;
      lastFocus.current = trigger;
      setView({ photos: group.flatMap(readPhoto), active: 0 });
      if (!dialogRef.current.open) dialogRef.current.showModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const step = (delta) =>
    setView((view) =>
      view.photos.length
        ? { ...view, active: (view.active + delta + view.photos.length) % view.photos.length }
        : view,
    );

  const handleClose = () => {
    setView(EMPTY);
    lastFocus.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="training-lightbox"
      id="training-documentation-lightbox"
      aria-label="Training documentation image viewer"
      onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
      onClose={handleClose}
      onKeyDown={handleKeyDown}
    >
      <div className="training-lightbox-shell">
        <div className="training-lightbox-top">
          <strong id="training-lightbox-title">{current?.title}</strong>
          <div className="training-lightbox-controls">
            <span className="training-lightbox-position" id="training-lightbox-position">
              {current ? `${active + 1} / ${photos.length}` : null}
            </span>
            <button type="button" id="training-lightbox-prev" aria-label="Previous image" onClick={() => step(-1)}>
              <span aria-hidden="true" style={{ fontSize: "24px", lineHeight: "1" }}>‹</span>
            </button>
            <button type="button" id="training-lightbox-next" aria-label="Next image" onClick={() => step(1)}>
              <span aria-hidden="true" style={{ fontSize: "24px", lineHeight: "1" }}>›</span>
            </button>
            <button
              type="button"
              id="training-lightbox-close"
              aria-label="Close photo viewer"
              onClick={() => dialogRef.current.close()}
            >
              <span aria-hidden="true" style={{ fontSize: "23px", lineHeight: "1" }}>×</span>
            </button>
          </div>
        </div>
        <figure className="training-lightbox-figure">
          <img id="training-lightbox-image" src={current?.src} alt={current?.alt ?? ""} />
          <figcaption id="training-lightbox-caption">{current?.caption}</figcaption>
        </figure>
      </div>
    </dialog>
  );
}
