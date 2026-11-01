// Collapsed-by-default dropdown used for every "UX process" block inside a project card.
export default function UxDropdown({ title = 'UX process', meta, children }) {
  return (
    <details className="ux-dd">
      <summary className="ux-dd-summary">
        <span className="ux-dd-title">{title}</span>
        {meta ? <span className="ux-dd-meta">{meta}</span> : null}
        <svg className="ux-dd-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="ux-dd-body">{children}</div>
    </details>
  );
}
