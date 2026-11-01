import PrivateLink from "./PrivateLink.jsx";

export default function NuscaProjectCard2() {
  return (
      <article className="relative overflow-hidden project-card-item rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#e6fcf1] p-5 sm:p-7 shadow-sm transition-all duration-300" id="nusca-project-card-2">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-teal-200/30 blur-2xl"></div>
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs shadow-xs">
              01
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-emerald-100/90 text-[#006e4b] text-[11px] font-semibold rounded-full border border-emerald-200/80 shadow-xs">
              Computer Vision
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-white/80 text-[#006e4b] text-[11px] font-semibold rounded-full border border-emerald-200/80 shadow-xs backdrop-blur-sm">
              Document AI
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-white/80 text-[#006e4b] text-[11px] font-semibold rounded-full border border-emerald-200/80 shadow-xs backdrop-blur-sm">
              OCR
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-white/80 text-[#006e4b] text-[11px] font-semibold rounded-full border border-emerald-200/80 shadow-xs backdrop-blur-sm">
              Nutrition Label
            </span>
          </div>
          <div className="flex items-center gap-2">
            
            <PrivateLink label="Live app" />
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 pb-4">
          <div className="space-y-3.5 lg:col-span-7">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  NUSCA
                </h2>
                <span className="text-2xl">
                  🍃
                </span>
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#006e4b]">
                AI/ML Engineer · Nutrition Label Intelligence
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              An end-to-end AI pipeline for Indonesian packaged-drink nutrition labels that localizes the nutrition panel, extracts 9 nutritional fields, and determines Nutri-Level A–D classification using a deterministic rule-based approach.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-1">
              <div className="rounded-xl border border-emerald-200/70 bg-white/90 p-2 text-center shadow-xs backdrop-blur-sm">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                  Field Acc
                </span>
                {" "}
                <span className="text-xs font-extrabold text-[#006e4b]">
                  93.66%
                </span>
              </div>
              <div className="rounded-xl border border-emerald-200/70 bg-white/90 p-2 text-center shadow-xs backdrop-blur-sm">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                  Exact Match
                </span>
                {" "}
                <span className="text-xs font-extrabold text-blue-700">
                  82.69%
                </span>
              </div>
              <div className="rounded-xl border border-emerald-200/70 bg-white/90 p-2 text-center shadow-xs backdrop-blur-sm">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                  Presence
                </span>
                {" "}
                <span className="text-xs font-extrabold text-teal-700">
                  100%
                </span>
              </div>
              <div className="rounded-xl border border-emerald-200/70 bg-white/90 p-2 text-center shadow-xs backdrop-blur-sm">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                  Nutri-Level
                </span>
                {" "}
                <span className="text-xs font-extrabold text-amber-600">
                  95.6%
                </span>
              </div>
              <div className="rounded-xl border border-emerald-200/70 bg-white/90 p-2 text-center shadow-xs backdrop-blur-sm">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                  UAT Score
                </span>
                {" "}
                <span className="text-xs font-extrabold text-slate-800">
                  {"4.55 "}
                  <span className="text-[9px] font-normal text-slate-400">
                    / 5
                  </span>
                </span>
              </div>
              <div className="rounded-xl border border-emerald-200/70 bg-white/90 p-2 text-center shadow-xs backdrop-blur-sm">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                  CER Error
                </span>
                {" "}
                <span className="text-xs font-extrabold text-teal-600">
                  0.52%
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 border border-emerald-100 rounded-xl p-2 shadow-xs">
              <div aria-label="Nutri-Level classifications A to D" className="flex shrink-0 items-center gap-1">
                <span className="rounded-md bg-emerald-100 px-1.5 py-1 text-[10px] font-extrabold text-emerald-800">
                  A
                </span>
                {" "}
                <span className="rounded-md bg-lime-100 px-1.5 py-1 text-[10px] font-extrabold text-lime-800">
                  B
                </span>
                {" "}
                <span className="rounded-md bg-amber-100 px-1.5 py-1 text-[10px] font-extrabold text-amber-800">
                  C
                </span>
                {" "}
                <span className="rounded-md bg-rose-100 px-1.5 py-1 text-[10px] font-extrabold text-rose-800">
                  D
                </span>
              </div>
              <span className="text-[11px] text-slate-600 leading-snug">
                Deterministic grading based on Kepmenkes 301/2026 standard.
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-emerald-50/70 to-white/90 border border-emerald-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-emerald-50/70 to-teal-100/60 border border-emerald-200 shadow-md relative group p-2.5 sm:p-3">
              <div className="pointer-events-none absolute -right-6 -top-6 w-28 h-28 rounded-full bg-emerald-300/30 blur-xl"></div>
              <div className="pointer-events-none absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-teal-200/40 blur-xl"></div>
              <svg className="pointer-events-none absolute right-2 top-2 w-20 h-20 text-emerald-600/10" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="15" cy="15" r="3"></circle>
                <circle cx="35" cy="15" r="3"></circle>
                <circle cx="55" cy="15" r="3"></circle>
                <circle cx="75" cy="15" r="3"></circle>
                <circle cx="15" cy="35" r="3"></circle>
                <circle cx="35" cy="35" r="3"></circle>
                <circle cx="55" cy="35" r="3"></circle>
                <circle cx="75" cy="35" r="3"></circle>
                <circle cx="15" cy="55" r="3"></circle>
                <circle cx="35" cy="55" r="3"></circle>
                <circle cx="55" cy="55" r="3"></circle>
                <circle cx="75" cy="55" r="3"></circle>
              </svg>
              <div className="relative w-full rounded-xl overflow-hidden bg-white/95 border border-emerald-100/90 shadow-sm">
                
                <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-200 text-[#006e4b] text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {" OCR PIPELINE & GRADE"}
                </div>
                <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-emerald-100 text-[9px] font-semibold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">
                    Nutri-Level A–D
                  </span>
                  <span className="text-slate-300">
                    •
                  </span>
                  <span className="">
                    Deterministic
                  </span>
                </div>
              </div>
              <button aria-label="Previous preview" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
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
        <div className="relative z-10 pt-4 border-t border-emerald-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch text-xs">
            <div className="bg-white/95 border border-emerald-100 rounded-xl p-3 space-y-2 shadow-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                <span className="">
                  🕸️
                </span>
                <span className="">
                  AI/ML Pipeline Flow
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[8.5px] text-slate-700">
                <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100/90 font-medium">
                  <span className="font-bold text-[#006e4b]">
                    1.
                  </span>
                  {" Input Label Image"}
                </div>
                <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100/90 font-medium">
                  <span className="font-bold text-[#006e4b]">
                    2.
                  </span>
                  {" EasyOCR Localization"}
                </div>
                <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100/90 font-medium">
                  <span className="font-bold text-[#006e4b]">
                    3.
                  </span>
                  {" Donut Extraction"}
                </div>
                <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100/90 font-medium">
                  <span className="font-bold text-[#006e4b]">
                    4.
                  </span>
                  {" Normalization /100ml"}
                </div>
                <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100/90 font-medium">
                  <span className="font-bold text-[#006e4b]">
                    5.
                  </span>
                  {" Rule-Based Grade"}
                </div>
                <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100/90 font-medium">
                  <span className="font-bold text-[#006e4b]">
                    6.
                  </span>
                  {" Nutri-Level Output"}
                </div>
              </div>
            </div>
            <div className="bg-white/95 border border-emerald-100 rounded-xl p-3 space-y-2 shadow-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                <span className="">
                  ⚙️
                </span>
                <span className="">
                  {"Models & Techniques"}
                </span>
              </div>
              <ul className="text-[9.5px] text-slate-600 space-y-1 list-disc pl-4 leading-snug">
                <li className="">
                  <strong>
                    EasyOCR:
                  </strong>
                  {" Fast bounding box detection and OCR."}
                </li>
                <li className="">
                  <strong>
                    Donut Transformer:
                  </strong>
                  {" naver-clova-ix/donut-base fine-tuned."}
                </li>
                <li className="">
                  <strong>
                    Rule-Based Logic:
                  </strong>
                  {" Kepmenkes HK.01.07/MENKES/301/2026."}
                </li>
                <li className="">
                  <strong>
                    Lowest Grade Wins:
                  </strong>
                  {" Ensures conservative health safety."}
                </li>
              </ul>
            </div>
            <div className="bg-white/95 border border-emerald-100 rounded-xl p-3 space-y-2 shadow-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                <span className="">
                  🍩
                </span>
                <span className="">
                  Donut Fine-Tuning Specs
                </span>
              </div>
              <div className="text-[9.5px] space-y-1.5 text-slate-600">
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="">
                    Best Checkpoint:
                  </span>
                  <strong className="text-emerald-700">
                    Epoch 24
                  </strong>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="">
                    Beam Search:
                  </span>
                  <strong>
                    6
                  </strong>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="">
                    Resolution:
                  </span>
                  <strong>
                    1280 × 960 px
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="">
                    Max Target Tokens:
                  </span>
                  <strong>
                    160
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
            <div className="sm:col-span-5 bg-white/95 border border-emerald-100 rounded-xl p-3 space-y-1.5 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Extracted Fields (9)
              </div>
              <div className="flex flex-wrap gap-1 text-[8px]">
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  1. Takaran Saji
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  2. Sajian/Kemasan
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  3. Jumlah/Kemasan
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  4. Lemak Total
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  5. Lemak Jenuh
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  6. Gula
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  7. Sukrosa
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  8. Laktosa
                </span>
                {" "}
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                  9. Garam (Natrium)
                </span>
              </div>
            </div>
            <div className="sm:col-span-3 bg-white/95 border border-emerald-100 rounded-xl p-3 space-y-1.5 shadow-xs">
              <div className="font-bold text-slate-800 text-[11px]">
                Dataset Breakdown
              </div>
              <div className="text-[9.5px] text-slate-600 space-y-1">
                <div className="">
                  {"Total Images: "}
                  <strong>
                    514
                  </strong>
                  {" (448 pos · 66 neg)"}
                </div>
                <div className="">
                  {"Test Set: "}
                  <strong>
                    52
                  </strong>
                  {" (45 pos · 7 neg)"}
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 space-y-1 shadow-xs">
              <div className="font-bold text-[#006e4b] text-[11px]">
                💡 Key Insights
              </div>
              <p className="text-[9.5px] text-slate-700 leading-relaxed">
                {"Nutri-Level classification achieved "}
                <strong>
                  95.6% accuracy
                </strong>
                {" on the test set, with errors mainly caused by extraction-value mismatch rather than field absence."}
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
