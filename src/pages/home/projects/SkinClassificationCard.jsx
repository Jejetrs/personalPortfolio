export default function SkinClassificationCard() {
  return (
      <article className="rounded-3xl bg-[#f0fdfa] border border-teal-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="skin-classification-card" data-live-url="">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs shadow-xs">
              09
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-teal-100/70 text-teal-900 text-xs font-semibold rounded-full border border-teal-200/70">
              Computer Vision
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-cyan-100/70 text-cyan-900 text-xs font-semibold rounded-full border border-cyan-200/70">
              Deep Learning
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
              Image Classification
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
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://github.com/mtridryn/Capstone-Project/tree/master/ml" target="_blank" rel="noopener noreferrer">
              <span>
                GitHub
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition shadow-xs" hidden data-live-link="">
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
                Skin Type Classification
              </h2>
              <p className="text-xs font-semibold text-teal-800 uppercase tracking-wider mt-1">
                Deep Learning for Dermatological Analysis · CNN 4-Channel Input
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A deep learning-based image classification model to identify human skin types (oily, dry, or normal) using facial images. The model leverages both RGB and grayscale images to enable personalized skincare recommendations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="rounded-xl bg-white border border-teal-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Training Acc
                </span>
                {" "}
                <span className="text-xs font-extrabold text-teal-700">
                  99.58%
                </span>
              </div>
              <div className="rounded-xl bg-white border border-teal-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Testing Acc
                </span>
                {" "}
                <span className="text-xs font-extrabold text-teal-700">
                  98.33%
                </span>
              </div>
              <div className="rounded-xl bg-white border border-teal-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Overall F1
                </span>
                {" "}
                <span className="text-xs font-extrabold text-teal-700">
                  0.99
                </span>
              </div>
              <div className="rounded-xl bg-white border border-teal-100 p-2 text-center shadow-xs">
                <span className="block text-[8px] uppercase font-bold text-slate-400">
                  Input Channels
                </span>
                {" "}
                <span className="text-xs font-extrabold text-teal-700">
                  4 (RGB+Gray)
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-teal-50/70 to-white/90 border border-teal-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-teal-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-teal-200 text-teal-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                {" 4-CHANNEL CNN CLASSIFIER"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-teal-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-teal-200 hover:bg-teal-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-teal-200 hover:bg-teal-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-teal-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-teal-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                4-Channel Architecture
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Input layer: 224 × 224 × 4 (RGB + Grayscale). Stacked Conv2D (32, 64 filters), MaxPooling, Batch Normalization, Dropout (0.4), and Softmax.
              </p>
            </div>
            <div className="bg-white/95 border border-teal-100 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Test Classification Report
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Precision: Oily 0.98, Dry 0.99, Normal 0.98. Recall: Oily 0.99, Dry 0.98, Normal 0.98 with balanced support across 290 test images.
              </p>
            </div>
            <div className="bg-teal-50/80 border border-teal-200 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-teal-900 text-[11px]">
                Skincare Tech Application
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                Ready for automated consumer onboarding in mobile e-commerce and dermatological advisory systems.
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
