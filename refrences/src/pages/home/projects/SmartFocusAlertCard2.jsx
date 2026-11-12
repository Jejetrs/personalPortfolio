import PrivateLink from "./PrivateLink.jsx";

export default function SmartFocusAlertCard2() {
  return (
      <article className="rounded-3xl bg-[#f0f7ff] border border-blue-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="smart-focus-alert-card-2" data-live-url="https://www.figma.com/proto/pBIGNOVNe6UQSEpDH3sqxK/SMART-FOCUS?node-id=19-556&p=f&t=h6tQAszTVhB3iYr3-1&scaling=scale-down-width&content-scaling=fixed&page-id=9%3A108&starting-point-node-id=19%3A556" data-live-health="https://smartfocus.up.railway.app/">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs shadow-xs">
              02
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
              Computer Vision
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
              Face Detection
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-cyan-100/70 text-cyan-900 text-xs font-semibold rounded-full border border-cyan-200/70">
              Real-time Monitoring
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PrivateLink label="GitHub" restricted />
            <PrivateLink label="Code" />
            <span className="dev-switch" data-live-badge="" data-state="checking" role="switch" aria-checked="false" aria-readonly="true" aria-disabled="true" aria-label="Live deploy status" tabIndex="-1">
              <span className="dev-switch-label">Live deploy</span>
              <span className="dev-switch-track"><i></i></span>
              <span className="dev-switch-text" data-live-text="">Checking…</span>
            </span>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs transition shadow-xs" hidden data-live-link="" target="_blank" rel="noopener noreferrer">Open Live App ↗</a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-2">
          <div className="lg:col-span-7 space-y-3.5">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Smart Focus Alert
              </h2>
              <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider mt-1">
                {"Web-based Application for Online Learning Focus Monitoring · Python & MediaPipe"}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A web-based computer vision application that monitors user attention in real time using MediaPipe Face Mesh and triggers automatic alerts when distraction is detected.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-100 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {" "}
                <span className="text-xs font-bold text-blue-800">
                  {"EAR Threshold: "}
                  {"<"}
                  {" 0.19"}
                </span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-100 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                {" "}
                <span className="text-xs font-bold text-blue-800">
                  {"MAR Threshold: > 0.30"}
                </span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-100 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                {" "}
                <span className="text-xs font-bold text-blue-800">
                  Alert Latency: ≥ 3s
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-blue-50/70 to-white/90 border border-blue-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-blue-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-blue-200 text-blue-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                {" REAL-TIME WEBCAM INFERENCE"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-blue-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-blue-200 hover:bg-blue-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-blue-200 hover:bg-blue-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-blue-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-blue-100 rounded-xl p-3 space-y-2 shadow-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px]">
                <span className="">
                  ⚙️
                </span>
                <span className="">
                  Methodology Flow
                </span>
              </div>
              <ol className="text-[9.5px] text-slate-600 space-y-1 list-decimal pl-4 leading-snug">
                <li className="">
                  {"Planning (problem definition & scope)"}
                </li>
                <li className="">
                  Requirements Analysis
                </li>
                <li className="">
                  {"Architecture & Flowchart Design"}
                </li>
                <li className="">
                  Implementation (Flask + MediaPipe)
                </li>
                <li className="">
                  {"Testing & Real-time Evaluation"}
                </li>
                <li className="">
                  {"Maintenance & TTS alert optimization"}
                </li>
              </ol>
            </div>
            <div className="bg-white/95 border border-blue-100 rounded-xl p-3 space-y-2 shadow-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px]">
                <span className="">
                  🎚️
                </span>
                <span className="">
                  Threshold Parameters
                </span>
              </div>
              <table className="w-full text-left text-[8.5px]">
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="py-1 font-bold text-blue-900">
                      {"EAR "}
                      {"<"}
                      {" 0.19"}
                    </td>
                    <td className="">
                      Closed eyes (drowsiness detection)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold text-blue-900">
                      {"MAR > 0.30"}
                    </td>
                    <td className="">
                      Yawning / speaking movement
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold text-blue-900">
                      {"Head Pose > 20°"}
                    </td>
                    <td className="">
                      Not facing camera / screen distraction
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold text-blue-900">
                      Duration ≥ 3s
                    </td>
                    <td className="">
                      Triggers audible TTS audio notification
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white/95 border border-blue-100 rounded-xl p-3 space-y-2 shadow-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px]">
                <span className="">
                  📦
                </span>
                <span className="">
                  {"Tech Stack & Tools"}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 text-[8.5px]">
                <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-semibold border border-blue-100">
                  Python
                </span>
                {" "}
                <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-semibold border border-blue-100">
                  OpenCV
                </span>
                {" "}
                <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-semibold border border-blue-100">
                  MediaPipe Face Mesh
                </span>
                {" "}
                <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-semibold border border-blue-100">
                  Flask
                </span>
                {" "}
                <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-semibold border border-blue-100">
                  HTML/JS
                </span>
                {" "}
                <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-semibold border border-blue-100">
                  Text-to-Speech
                </span>
              </div>
              <div className="pt-1 text-[9px] text-slate-500 leading-snug">
                Deployed on Railway Cloud with sub-50ms inference latency.
              </div>
            </div>
          </div>
        </div>
      </article>
  );
}
