/** Placeholder for links withheld while the related research is still being written up. */
export default function PrivateLink({ label = "Private link" }) {
  return (
    <span
      title="This link is kept private while the related research paper is being written."
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        border: "1px dashed #94a3b8",
        borderRadius: "12px",
        background: "rgba(248,250,252,.85)",
        color: "#475569",
        font: "600 12px/1.2 inherit",
        cursor: "help",
        whiteSpace: "nowrap",
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
      {label} · research in progress
    </span>
  );
}
