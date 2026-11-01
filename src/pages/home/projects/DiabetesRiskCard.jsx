
export default function DiabetesRiskCard() {
  return (
      <article className="rounded-3xl bg-[#fff1f2] border border-rose-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="diabetes-risk-card" data-live-url="https://predictive-analytic-diabetes.streamlit.app/">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs shadow-xs">
              07
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-rose-100/70 text-rose-900 text-xs font-semibold rounded-full border border-rose-200/70">
              Machine Learning
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-pink-100/70 text-pink-900 text-xs font-semibold rounded-full border border-pink-200/70">
              Predictive Analytics
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-purple-100/70 text-purple-900 text-xs font-semibold rounded-full border border-purple-200/70">
              Streamlit Web App
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
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://github.com/Jejetrs/Predictive-Analytic---Diabetes" target="_blank" rel="noopener noreferrer">
              <span>
                GitHub
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition shadow-xs" href="https://predictive-analytic-diabetes.streamlit.app/" target="_blank" rel="noopener noreferrer" data-live-link="">
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
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none sm:text-4xl">
                Predictive Analytics for Diabetes Risk
              </h2>
              <p className="text-xs font-semibold text-rose-800 uppercase tracking-wider mt-1">
                {"Healthcare Machine Learning · Classification & Risk Profiling"}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A machine learning model to predict the risk of diabetes based on medical features, helping early detection and supporting preventive healthcare actions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="rounded-xl bg-white border border-rose-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Total Records
                </span>
                {" "}
                <span className="text-xs font-extrabold text-rose-700">
                  2,768
                </span>
              </div>
              <div className="rounded-xl bg-white border border-rose-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Random Forest Acc
                </span>
                {" "}
                <span className="text-xs font-extrabold text-rose-700">
                  99.67%
                </span>
              </div>
              <div className="rounded-xl bg-white border border-rose-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Recall Score
                </span>
                {" "}
                <span className="text-xs font-extrabold text-rose-700">
                  99.48%
                </span>
              </div>
              <div className="rounded-xl bg-white border border-rose-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Precision
                </span>
                {" "}
                <span className="text-xs font-extrabold text-rose-700">
                  97.67%
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-rose-50/70 to-white/90 border border-rose-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-rose-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-rose-200 text-rose-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                {" CLINICAL TRIAGE DASHBOARD"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-rose-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-rose-200 hover:bg-rose-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-rose-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-rose-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Model Benchmarking
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Compared KNN (98.91%), Logistic Regression (99.57%), and Random Forest (99.67% accuracy, 0.9967 F1).
              </p>
            </div>
            <div className="bg-white/95 border border-rose-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                {"Preprocessing & SMOTE"}
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Handled zero-imputation for insulin and skin thickness, robust scaling, and SMOTE to balance class distributions.
              </p>
            </div>
            <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-rose-900 text-[11px]">
                Clinical Impact
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                High sensitivity (99.48% recall) ensures minimal false negatives in pre-diagnostic patient triage.
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
