
export default function BankFraudCard() {
  return (
      <article className="rounded-3xl bg-[#fffbeb] border border-amber-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="bank-fraud-card" data-live-url="">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs shadow-xs">
              05
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-amber-100/70 text-amber-900 text-xs font-semibold rounded-full border border-amber-200/70">
              Machine Learning
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-orange-100/70 text-orange-900 text-xs font-semibold rounded-full border border-orange-200/70">
              Unsupervised + Supervised
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-yellow-100/70 text-yellow-900 text-xs font-semibold rounded-full border border-yellow-200/70">
              Fraud Detection
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
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://github.com/Jejetrs/Dicoding-DBS-Camp---ML-Pemula-Module./tree/main" target="_blank" rel="noopener noreferrer">
              <span>
                GitHub
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition shadow-xs" hidden data-live-link="">
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                {"Clustering & Classification for Bank Fraud Detection"}
              </h2>
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mt-1">
                {"Machine Learning · PCA, K-Means & Random Forest"}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Combined clustering and classification to detect fraudulent transaction patterns in bank data using real-world-style tabular features.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="rounded-xl bg-white border border-amber-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Total Clusters
                </span>
                {" "}
                <span className="text-xs font-extrabold text-amber-700">
                  6 (k=6)
                </span>
              </div>
              <div className="rounded-xl bg-white border border-amber-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Silhouette Score
                </span>
                {" "}
                <span className="text-xs font-extrabold text-amber-700">
                  0.99
                </span>
              </div>
              <div className="rounded-xl bg-white border border-amber-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Tuned Accuracy
                </span>
                {" "}
                <span className="text-xs font-extrabold text-emerald-700">
                  100%
                </span>
              </div>
              <div className="rounded-xl bg-white border border-amber-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  F1 Score
                </span>
                {" "}
                <span className="text-xs font-extrabold text-emerald-700">
                  1.00
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-amber-50/70 to-white/90 border border-amber-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-amber-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-200 text-amber-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {" 3D PCA CLUSTER MATRIX"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-amber-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-amber-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-amber-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Unsupervised Clustering
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                SelectKBest features projected through 3D PCA. K-Means clustering optimal at k=6 based on elbow and silhouette criteria.
              </p>
            </div>
            <div className="bg-white/95 border border-amber-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Supervised Classification
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Logistic Regression and Random Forest tuned via grid search, achieving 100% precision and recall on held-out transactions.
              </p>
            </div>
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-amber-900 text-[11px]">
                Behavioral Insights
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                Identified distinct transaction signatures: doctors favor branch debit, students frequent ATM withdrawals, and retirees use credit channels.
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
