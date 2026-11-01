
export default function WhatsappSentimentCard() {
  return (
      <article className="rounded-3xl bg-[#ecfdf5] border border-emerald-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="whatsapp-sentiment-card" data-live-url="">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-xs">
              06
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-emerald-100/70 text-emerald-900 text-xs font-semibold rounded-full border border-emerald-200/70">
              NLP
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-teal-100/70 text-teal-900 text-xs font-semibold rounded-full border border-teal-200/70">
              Sentiment Analysis
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-green-100/70 text-green-900 text-xs font-semibold rounded-full border border-green-200/70">
              {"BiLSTM & CNN"}
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
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://github.com/Jejetrs/Dicoding-DBS-Camp-2025---Project-Analisis-Sentimen---Pengembang-ML" target="_blank" rel="noopener noreferrer">
              <span>
                GitHub
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-xs" hidden data-live-link="">
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
                WhatsApp Play Store Sentiment Analysis
              </h2>
              <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mt-1">
                {"NLP Engineer · Text Classification & Word2Vec"}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A sentiment analysis project that classifies WhatsApp user reviews from Google Play into positive, neutral, and negative sentiments to uncover public perception and user experience issues.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="rounded-xl bg-white border border-emerald-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Total Reviews
                </span>
                {" "}
                <span className="text-xs font-extrabold text-emerald-700">
                  15,000
                </span>
              </div>
              <div className="rounded-xl bg-white border border-emerald-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Best Model
                </span>
                {" "}
                <span className="text-xs font-extrabold text-emerald-700">
                  CNN + Word2Vec
                </span>
              </div>
              <div className="rounded-xl bg-white border border-emerald-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Test Accuracy
                </span>
                {" "}
                <span className="text-xs font-extrabold text-emerald-700">
                  99.46%
                </span>
              </div>
              <div className="rounded-xl bg-white border border-emerald-200 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  BiLSTM Acc
                </span>
                {" "}
                <span className="text-xs font-extrabold text-emerald-700">
                  99.26%
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-emerald-50/70 to-white/90 border border-emerald-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-emerald-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-200 text-emerald-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {" DEEP LEARNING BENCHMARK"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-emerald-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-200 hover:bg-emerald-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-200 hover:bg-emerald-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-emerald-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-emerald-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Text Preprocessing
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Lowercasing, Indonesian slang normalization, typo fixing, Sastrawi stemming, and tokenization prior to embedding.
              </p>
            </div>
            <div className="bg-white/95 border border-emerald-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                {"Embedding & Deep Learning"}
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Evaluated TF-IDF vs Word2Vec (CBOW). CNN + Word2Vec yielded highest generalization at 99.46% test accuracy.
              </p>
            </div>
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-emerald-900 text-[11px]">
                Impact
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                Identified recurring user dissatisfaction triggers: post-update crashes and media backup failures.
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
