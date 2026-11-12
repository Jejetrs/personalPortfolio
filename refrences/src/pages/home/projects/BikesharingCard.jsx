
export default function BikesharingCard() {
  return (
      <article className="rounded-3xl bg-[#f0fdfa] border border-cyan-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="bikesharing-card" data-live-url="https://bike-rental-analysis-dashboard.streamlit.app/">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-700 text-white font-bold text-xs shadow-xs">
              04
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-cyan-100/70 text-cyan-900 text-xs font-semibold rounded-full border border-cyan-200/70">
              Data Analytics
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-indigo-100/70 text-indigo-900 text-xs font-semibold rounded-full border border-indigo-200/70">
              Exploratory Data Analysis
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-teal-100/70 text-teal-900 text-xs font-semibold rounded-full border border-teal-200/70">
              Streamlit Dashboard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="dev-switch" data-live-badge="" data-state="checking" role="switch" aria-checked="false" aria-readonly="true" aria-disabled="true" aria-label="Live deploy status" tabIndex="-1">
              <span className="dev-switch-label">
                Live deploy
              </span>
              <span className="dev-switch-track">
                <i></i>
              </span>
              <span className="dev-switch-text" data-live-text="">
                Checking…
              </span>
            </span>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://github.com/Jejetrs/Dicoding-DBS-Camp-2025---Project-Analisis-Data-dengan-Python/blob/main/Notebook.ipynb" target="_blank" rel="noopener noreferrer">
              <span>
                GitHub
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-xs transition shadow-xs" href="https://bike-rental-analysis-dashboard.streamlit.app/" target="_blank" rel="noopener noreferrer" data-live-link="">
              <span>
                Open Live App
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-2">
          <div className="lg:col-span-7 space-y-3.5">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Bike Sharing Demand Analysis
              </h2>
              <p className="text-xs font-semibold text-cyan-800 uppercase tracking-wider mt-1">
                Data Analyst · Capital Bikeshare Washington D.C.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              An interactive dashboard to analyze bike rental trends using historical data from Capital Bikeshare, enabling users to explore patterns across time, season, weather, and other factors that influence bike demand.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="rounded-xl bg-white border border-cyan-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Total Rentals
                </span>
                {" "}
                <span className="text-xs font-extrabold text-cyan-800">
                  3,229,827
                </span>
              </div>
              <div className="rounded-xl bg-white border border-cyan-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Total Revenue
                </span>
                {" "}
                <span className="text-xs font-extrabold text-cyan-800">
                  $2,439,656
                </span>
              </div>
              <div className="rounded-xl bg-white border border-cyan-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Avg Rentals/Day
                </span>
                {" "}
                <span className="text-xs font-extrabold text-cyan-800">
                  8,848
                </span>
              </div>
              <div className="rounded-xl bg-white border border-cyan-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Registered Users
                </span>
                {" "}
                <span className="text-xs font-extrabold text-cyan-800">
                  78.2%
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-cyan-50/70 to-white/90 border border-cyan-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-cyan-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-200 text-cyan-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                {" STREAMLIT ANALYTICS SUITE"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-cyan-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-200 hover:bg-cyan-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-200 hover:bg-cyan-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-cyan-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-cyan-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Dataset Scope
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                16,731 daily records across 2 years (2011–2012) with 14 weather and operational features from Kaggle.
              </p>
            </div>
            <div className="bg-white/95 border border-cyan-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Weather Correlation
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Temperature has strongest positive correlation (+0.40), while humidity and heavy rain show sharp negative impacts.
              </p>
            </div>
            <div className="bg-cyan-50/80 border border-cyan-200 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-cyan-900 text-[11px]">
                Key Business Takeaway
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                Registered users provide predictable baseline commute volume, enabling optimized station fleet rebalancing during peak hours.
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
