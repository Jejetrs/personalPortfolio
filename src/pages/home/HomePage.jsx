import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import useDocumentMeta from '@/hooks/useDocumentMeta.js';
import useHomeBehavior from '@/behaviors/home/useHomeBehavior.js';
import { META } from './meta.js';
import About from './sections/About.jsx';
import DesignProcess from './sections/DesignProcess.jsx';
import Experience from './sections/Experience.jsx';
import LastEvents from './sections/LastEvents.jsx';
import Resume from './sections/Resume.jsx';
import StoryBand from './sections/StoryBand.jsx';

export default function HomePage() {
  useDocumentMeta(META);
  useHomeBehavior();
  return (
    <>
      <svg aria-hidden="true" className="inline-defs-container" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}></svg>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-300/20 to-purple-300/10 rounded-full blur-[110px]"></div>
        <div className="absolute top-[30%] -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-300/15 via-indigo-200/10 to-transparent rounded-full blur-[120px]"></div>
      </div>
      <Navbar />
      <main className="relative z-10">
        <About />
        <StoryBand />
        <LastEvents />
        <Experience />
        <DesignProcess />
        <section className="rf pjs" id="selected-works">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pj-head mb-7">
              <p className="pj-kicker">
                <span aria-hidden="true" />
                Selected work
              </p>
              <h2 className="pj-title">
                <span id="about-project-heading">
                  {"UI/UX Design & Research"}
                </span>
                {" "}
                <em>
                  Projects.
                </em>
              </h2>
              <p className="pj-lead" id="about-project-description">
                A collection of human-centered work across research, interaction design, design systems, AI-powered products, and front-end product experiences. Each project reflects my passion for creating meaningful digital experiences.
              </p>
              <p className="pj-hint">
                Pick a lens below. Each card opens the problem, my role and the evidence.
              </p>
            </div>
            <div aria-label="Filter projects by category" className="flex flex-wrap items-center gap-2 pt-1 mb-5" id="about-project-categories" role="group">
              <button aria-pressed="false" className="project-filter about-project-category inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-xs hover:bg-slate-50 hover:text-slate-900 transition shadow-xs active:scale-95" data-project-category="analytics" type="button">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>
                  Business Analytics
                </span>
              </button>
              {" "}
              <button aria-pressed="false" className="project-filter about-project-category inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-xs hover:bg-slate-50 hover:text-slate-900 transition shadow-xs active:scale-95" data-project-category="team" type="button">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <span>
                  {"Project Management & Leadership"}
                </span>
              </button>
              {" "}
              <button aria-pressed="true" className="project-filter about-project-category inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-medium text-xs shadow-xs hover:bg-indigo-700 transition active:scale-95" data-project-category="uiux" type="button">
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                <span>
                  UI/UX Design
                </span>
              </button>
              {" "}
              <button aria-pressed="false" className="project-filter about-project-category inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-xs hover:bg-slate-50 hover:text-slate-900 transition shadow-xs active:scale-95" data-project-category="aiml" type="button">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>
                  AI Engineering
                </span>
              </button>
              {" "}
              <button aria-pressed="false" className="project-filter about-project-category inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-xs hover:bg-slate-50 hover:text-slate-900 transition shadow-xs active:scale-95" data-project-category="developer" type="button">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>
                  Developer
                </span>
              </button>
            </div>
            <div aria-label="Project showcase" aria-live="polite" className="about-project-track" id="about-project-track"></div>
            <p className="hidden rounded-xl border border-dashed border-slate-300 bg-white/70 px-6 py-10 text-center text-sm text-slate-500" id="about-project-empty">
              Belum ada proyek untuk kategori ini.
            </p>
            <div className="mt-3 flex items-center justify-between gap-4 px-1">
              <div aria-label="Select a project" className="flex flex-wrap items-center gap-2" id="about-project-dots"></div>
              <p className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500" id="about-project-counter"></p>
            </div>
            <div aria-live="polite" className="mt-8" id="about-project-detail"></div>
          </div>
        </section>
        <Resume />
        <section className="ct rf" id="contact">
          <span className="ct-blob b1" aria-hidden="true" />
          <span className="ct-blob b2" aria-hidden="true" />
          <div className="ct-inner">
            <div className="ct-copy">
              <p className="ct-kicker">
                <span aria-hidden="true" />
                Open to opportunities
              </p>
              <h2>
                Let&apos;s build something <em>people actually use.</em>
              </h2>
              <p className="ct-lead">
                Product design, AI/ML or front-end roles, internships included. A short note about the problem you are working on is the best way to start.
              </p>
            </div>
            <div className="ct-links">
              <a className="ct-link linkedin" href="https://www.linkedin.com/in/jessica-trs" target="_blank" rel="noopener noreferrer">
                <span>
                  <b>LinkedIn</b>
                  <small>Connect professionally</small>
                </span>
                <i aria-hidden="true">↗</i>
              </a>
              <a className="ct-link" href="mailto:jssicatheresia@gmail.com">
                <span>
                  <b>Email</b>
                  <small>jssicatheresia@gmail.com</small>
                </span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer spacing="mt-0" />
    </>
  );
}
