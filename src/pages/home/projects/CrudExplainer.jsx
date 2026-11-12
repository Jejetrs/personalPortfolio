const LETTERS = [
  ["C", "Create"],
  ["R", "Read"],
  ["U", "Update"],
  ["D", "Delete"],
];

export default function CrudExplainer({ title = "CRUD, in plain words", rows, note }) {
  return (
    <>
      <style>{`
.crud-note.crud-note{container-type:inline-size;margin-top:.75rem;padding:12px;border:1px solid #cbd5e1;border-radius:12px;background:rgba(255,255,255,.95);color:#0f172a;font-size:11px;line-height:1.5}
.crud-note.crud-note h3{margin:0 0 4px;font-size:11px;font-weight:700;line-height:1.4;color:#1e293b}
.crud-note .crud-intro{margin:0 0 8px;color:#475569}
.crud-note .crud-rows{display:grid;gap:6px;margin:0;padding:0;list-style:none}
.crud-note .crud-rows li{display:flex;gap:8px;align-items:flex-start;margin:0}
.crud-note .crud-letter{display:grid;place-items:center;flex:none;width:20px;height:20px;border-radius:6px;background:#0f172a;color:#fff;font:700 10px/1 ui-monospace,Consolas,monospace}
.crud-note .crud-body{display:grid;gap:1px;min-width:0}
.crud-note .crud-body b{font-size:11px;color:#0f172a}
.crud-note .crud-body code{margin-left:6px;padding:1px 5px;border-radius:5px;background:#e2e8f0;font:600 9.5px/1.4 ui-monospace,Consolas,monospace;color:#334155;overflow-wrap:anywhere}
.crud-note .crud-body>span{color:#475569}
.crud-note .crud-foot{margin:8px 0 0;font-size:9.5px;line-height:1.4;color:#64748b}
@container (min-width:440px){.crud-note .crud-rows{grid-template-columns:1fr 1fr;gap:8px 14px}}
      `}</style>
      <div className="crud-note">
        <h3>{title}</h3>
        <p className="crud-intro">
          CRUD is the four basic things an app does with data: <b>C</b>reate, <b>R</b>ead, <b>U</b>pdate and <b>D</b>elete.
        </p>
        <ul className="crud-rows">
          {rows.map((row, index) => (
            <li key={LETTERS[index][1]}>
              <span className="crud-letter" aria-hidden="true">
                {LETTERS[index][0]}
              </span>
              <span className="crud-body">
                <b>
                  {LETTERS[index][1]}
                  {row.verb && <code>{row.verb}</code>}
                </b>
                <span>{row.text}</span>
              </span>
            </li>
          ))}
        </ul>
        {note && <p className="crud-foot">{note}</p>}
      </div>
    </>
  );
}
