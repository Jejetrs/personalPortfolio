import { FIELD_LABELS } from "./groups.js";
import VideoHighlight from "@/components/VideoHighlight.jsx";

/* Opens a chapter (if it was collapsed) and brings it into view. Plain DOM on purpose: the cards inside
   are wired by the project behaviors, so React must not re-render them. */
function goToChapter(event, id) {
  event.preventDefault();
  const chapter = document.getElementById(id);
  if (!chapter) return;
  chapter.open = true;
  chapter.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* The project's main video or image, shown once for the whole project. Video and image share one frame,
   so every multi-field project opens with the same header. */
function Overview({ media, title }) {
  if (!media) return null;
  const isVideo = media.kind === "video";
  return (
    <figure className={`gs-media ${isVideo ? "is-video" : "is-image"}`}>
      <figcaption className="gs-media-bar">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <span>{title} · {isVideo ? "Video" : "Preview"}</span>
      </figcaption>
      <div className="gs-media-stage">
        {isVideo ? (
          <VideoHighlight driveId={media.driveId} poster={media.poster} label={`${title} · video`} title={media.title} accent={media.accent} />
        ) : (
          <img alt={media.alt} decoding="async" loading="eager" src={media.src} />
        )}
      </div>
      <div className="gs-media-cap">
        <strong>{media.title}</strong>
        {media.caption && <span>{media.caption}</span>}
      </div>
    </figure>
  );
}

/* ONE card for a project that covers several fields: a short overview and chapter map on top, then the
   case-study card of each field stacked as chapters. The cards themselves are unchanged. */
export default function GroupCard({ group, field, image, fields, sources, year }) {
  return (
    <article className="gs" data-group={group.slug}>
      <header className={`gs-top${group.overview ? " has-media" : ""}`}>
        <div className="gs-copy">
        <div className="gs-id">
          {image && <img alt="" className="gs-thumb" decoding="async" loading="lazy" src={image} />}
          <div>
            <p className="gs-kicker">Multi-field project</p>
            <h3 className="gs-title">{group.title}</h3>
            <p className="gs-sub">{group.subtitle}</p>
          </div>
          <ul className="gs-fields" aria-label="Fields covered">
            {year && <li className="gs-year" aria-label={`Project year ${year}`}>{year}</li>}
            {fields.map((key) => (
              <li className={`tone-${FIELD_LABELS[key].tone}${key === field ? " is-on" : ""}`} key={key}>{group.fieldLabels?.[key] || FIELD_LABELS[key].short}</li>
            ))}
          </ul>
        </div>
        <p className="gs-summary">{group.summary}</p>
        <p className="gs-map-label">In this project</p>
        <ol className="gs-map">
          {group.parts.map((part, index) => {
            const category = sources[index].category;
            const fieldLabel = part.fieldLabel || FIELD_LABELS[category].short;
            return (
              <li className={category === field ? "is-active" : ""} key={part.id}>
                <a href={`#gs-${group.slug}-${index + 1}`} onClick={(event) => goToChapter(event, `gs-${group.slug}-${index + 1}`)}>
                  <i className={`tone-${FIELD_LABELS[category].tone}`}>{fieldLabel}</i>
                  <span>
                    <strong className="sr-only">{part.chapter}</strong>
                    <small>{part.lead}</small>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
        </div>
        <Overview media={group.overview} title={group.title} />
      </header>

      <div className="gs-stack">
        {group.parts.map((part, index) => {
          const source = sources[index];
          const { Card, cardProps } = source;
          const active = source.category === field;
          const next = group.parts[index + 1];
          const fieldLabel = part.fieldLabel || FIELD_LABELS[source.category].short;
          return (
            <details
              className={`gs-ch tone-${FIELD_LABELS[source.category].tone}${active ? " is-active" : ""}`}
              data-part-category={source.category}
              data-part-id={part.id}
              id={`gs-${group.slug}-${index + 1}`}
              key={part.id}
              open
            >
              <summary className="gs-band">
                <span className="gs-band-tag">{fieldLabel}</span>
                <span className="gs-band-text">
                  <strong className="sr-only">{part.chapter}</strong>
                  <small>{part.lead}</small>
                </span>
                {active && <em className="gs-band-sel">Selected field</em>}
                <span className="gs-band-act" aria-hidden="true" />
                <i className="gs-band-chev" aria-hidden="true" />
              </summary>
              <div className="gs-ch-body">
                <Card {...cardProps} />
              </div>
              {next && (
                <a className="gs-next" href={`#gs-${group.slug}-${index + 2}`} onClick={(event) => goToChapter(event, `gs-${group.slug}-${index + 2}`)}>
                  <span aria-hidden="true" />
                  Next chapter · {next.chapter}
                  <span aria-hidden="true" />
                </a>
              )}
            </details>
          );
        })}
      </div>
    </article>
  );
}
