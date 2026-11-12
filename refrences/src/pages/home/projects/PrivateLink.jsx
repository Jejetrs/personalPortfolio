export default function PrivateLink({ label = "Private link", href, restricted = false }) {
  const content = (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
  );
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    border: "1px dashed #94a3b8",
    borderRadius: "12px",
    background: "rgba(248,250,252,.85)",
    color: "#475569",
    font: "600 12px/1.2 inherit",
    cursor: href ? "pointer" : "help",
    whiteSpace: "nowrap",
    textDecoration: "none",
  };
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={style}>{content}{label}</a>;
  }
  return (
    <span title={restricted ? "This GitHub repository is restricted." : "This link is kept private while the related research paper is being written."} style={style}>
      {content}
      {label} · {restricted ? "Restricted" : "research in progress"}
    </span>
  );
}
