
export default function MovieRecommenderCard() {
  return (
      <article className="rounded-3xl bg-[#eef2ff] border border-indigo-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="movie-recommender-card" data-live-url="">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-700 text-white font-bold text-xs shadow-xs">
              08
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-indigo-100/70 text-indigo-900 text-xs font-semibold rounded-full border border-indigo-200/70">
              Recommendation System
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
              Content-Based Filtering
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-purple-100/70 text-purple-900 text-xs font-semibold rounded-full border border-purple-200/70">
              Collaborative Filtering
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
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://github.com/Jejetrs/Movies-Recommendation" target="_blank" rel="noopener noreferrer">
              <span>
                GitHub
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-xs transition shadow-xs" hidden data-live-link="">
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
                Movie Recommendation System
              </h2>
              <p className="text-xs font-semibold text-indigo-800 uppercase tracking-wider mt-1">
                {"Hybrid Model for Personalized Recommendations · TF-IDF & Neural CF"}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A recommendation system that suggests movies based on content similarity and user preferences using a hybrid approach of Content-Based Filtering and Collaborative Filtering.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="rounded-xl bg-white border border-indigo-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Total Movies
                </span>
                {" "}
                <span className="text-xs font-extrabold text-indigo-700">
                  62,423
                </span>
              </div>
              <div className="rounded-xl bg-white border border-indigo-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Ratings Evaluated
                </span>
                {" "}
                <span className="text-xs font-extrabold text-indigo-700">
                  25,000,095
                </span>
              </div>
              <div className="rounded-xl bg-white border border-indigo-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Hybrid RMSE
                </span>
                {" "}
                <span className="text-xs font-extrabold text-emerald-700">
                  0.0894
                </span>
              </div>
              <div className="rounded-xl bg-white border border-indigo-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Catalog Diversity
                </span>
                {" "}
                <span className="text-xs font-extrabold text-indigo-700">
                  91.06%
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-indigo-50/70 to-white/90 border border-indigo-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-indigo-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-indigo-200 text-indigo-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                {" HYBRID MATRIX ARCHITECTURE"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-indigo-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-200 hover:bg-indigo-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-200 hover:bg-indigo-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-indigo-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-indigo-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Content-Based Filtering (CBF)
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                TF-IDF vectorization on movie genres and metadata with cosine similarity to recommend outside current user history.
              </p>
            </div>
            <div className="bg-white/95 border border-indigo-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Collaborative Filtering (CF)
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Neural Network matrix factorization learning latent user-item interaction representations from 25M ratings.
              </p>
            </div>
            <div className="bg-indigo-50/80 border border-indigo-200 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-indigo-900 text-[11px]">
                Hybrid Advantage
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                Combines score weighting to achieve 74.72% catalog coverage and 91.06% diversity while resolving cold-start issues.
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
