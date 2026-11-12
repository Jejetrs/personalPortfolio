import ArkavidiaEventContent from './ArkavidiaEventContent.jsx';
import AsahEventContent from './AsahEventContent.jsx';
import DigistarEventContent from './DigistarEventContent.jsx';

export default function LastEventDetailPart1() {
  return (
    <div className="last-event-detail-panel">
      <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-indigo-200 hover:text-primary" id="last-event-back" type="button">
        <span aria-hidden="true">
          ←
        </span>
        {" Back to events"}
      </button>
      <div className="mb-5 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-indigo-700" id="last-event-detail-eyebrow">
            Event Story
          </p>
          <h3 className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-[#131b2e]" id="last-event-detail-title">
            Event
          </h3>
          <p className="mt-1 text-xs font-semibold text-slate-500" id="last-event-detail-date"></p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-800" id="last-event-detail-status">
          Event Highlight
        </span>
      </div>
      <DigistarEventContent />
      <AsahEventContent />
      <ArkavidiaEventContent />
    </div>
  );
}
