
export default function BeautyGlossaryCard() {
  return (
      <article className="rounded-3xl bg-[#faf5ff] border border-purple-200/80 shadow-sm relative overflow-hidden project-card-item p-5 sm:p-7 space-y-4" id="beauty-glossary-card" data-live-url="">
        <div className="flex flex-wrap items-center justify-between gap-2 project-card-header">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-700 text-white font-bold text-xs shadow-xs">
              03
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-purple-100/70 text-purple-900 text-xs font-semibold rounded-full border border-purple-200/70">
              Large Language Model
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-purple-100/70 text-purple-900 text-xs font-semibold rounded-full border border-purple-200/70">
              Chatbot
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-blue-100/70 text-blue-900 text-xs font-semibold rounded-full border border-blue-200/70">
              NLP
            </span>
            {" "}
            <span className="px-2.5 py-0.5 bg-violet-100/70 text-violet-900 text-xs font-semibold rounded-full border border-violet-200/70">
              RAG
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
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs transition shadow-xs active:scale-95" href="https://colab.research.google.com/drive/15lvjg8hXrcK3upTdTAJERWu_3XRSZx_e?usp=sharing" target="_blank" rel="noopener noreferrer">
              <span>
                GitHub
              </span>
              <span className="text-xs">
                ↗
              </span>
            </a>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs transition shadow-xs" hidden data-live-link="">
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
                Beauty Glossary LLM Chatbot
              </h2>
              <p className="text-xs font-semibold text-purple-800 uppercase tracking-wider mt-1">
                {"Domain-specific Chatbot for Beauty & Skincare Knowledge · RAG & Gradio"}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A domain-specific LLM chatbot that answers beauty and skincare questions using structured, context-grounded knowledge extracted from trusted web content, helping users get accurate and reliable information.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-purple-100 shadow-xs text-xs font-bold text-purple-800">
                Model: Groq Llama 3.1
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white border border-purple-100 shadow-xs text-xs font-bold text-purple-800">
                Context Limit: 20k chars
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white border border-purple-100 shadow-xs text-xs font-bold text-purple-800">
                Interface: Gradio v4.26
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-gradient-to-tr from-white/95 via-purple-50/70 to-white/90 border border-purple-200/80 shadow-sm">
            <div className="w-full rounded-2xl overflow-hidden bg-white/90 border border-purple-200 shadow-md relative group">
              
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-200 text-purple-900 text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                {" GRADIO RAG INTERFACE"}
              </div>
              <button aria-label="Previous preview" className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ‹
              </button>
              <button aria-label="Next preview" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200/80 flex items-center justify-center hover:bg-white text-slate-700 font-bold text-sm transition-all z-10">
                ›
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1.5 pt-3 pb-0.5">
              <span className="w-6 h-2 rounded-full bg-purple-600 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-purple-200 hover:bg-purple-300 transition-all"></span>
              <span className="w-2 h-2 rounded-full bg-purple-200 hover:bg-purple-300 transition-all"></span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-purple-200/70 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/95 border border-purple-100 rounded-xl p-3 space-y-1.5 shadow-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1 text-[11px]">
                <span className="">
                  📑
                </span>
                <span className="">
                  System Pipeline (RAG)
                </span>
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Web scraping via Firecrawl → Markdown processing → Context chunking → Groq Llama 3.1 retrieval-augmented prompt engineering.
              </p>
            </div>
            <div className="bg-white/95 border border-purple-100 rounded-xl p-3 space-y-1.5 shadow-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1 text-[11px]">
                <span className="">
                  🗄️
                </span>
                <span className="">
                  Data Grounding
                </span>
              </div>
              <p className="text-[9.5px] text-slate-600 leading-snug">
                Curated corpus from healthline.com, paulaschoice.com, and certified dermatologist publications to eliminate hallucinations.
              </p>
            </div>
            <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-3 space-y-1.5 shadow-xs">
              <div className="font-bold text-purple-900 flex items-center gap-1 text-[11px]">
                <span className="">
                  💡
                </span>
                <span className="">
                  Key Insights
                </span>
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                {"Grounded context improves factual adherence by >90% compared to vanilla zero-shot models in skincare advisory tasks."}
              </p>
            </div>
          </div>
        </div>
      </article>
  );
}
