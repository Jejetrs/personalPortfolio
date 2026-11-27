import { createPortal } from 'react-dom';
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
        <LastEvents />
        <Experience />
        <DesignProcess />
        <section className="rf pjs" id="selected-works">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pj-head mb-7">
              <p className="section-kicker">
                <span aria-hidden="true" />
                Deep Dive : Every Project Card
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
                Pick a field, then a project. Deep in a long project, the round menu button in the corner switches projects without scrolling back up.
              </p>
            </div>
            <div className="pj-split">
              <div aria-label="Project menu" className="pj-top" id="about-project-menu" role="group">
                <div className="pj-top-in">
                  <p className="hidden" id="about-project-counter"></p>
                  <div className="pj-dd" id="about-project-dropdown">
                    <span className="pj-dd-cap">Field</span>
                    <p className="pj-dd-help" id="about-project-category-hint">Choose a field to filter the projects below.</p>
                    <button aria-controls="about-project-categories" aria-describedby="about-project-category-hint" aria-expanded="false" aria-haspopup="true" className="pj-dd-toggle" id="about-project-dd-toggle" type="button">
                      <span className="pj-dd-dot" id="about-project-dd-dot" aria-hidden="true"></span>
                      <span className="pj-dd-label" id="about-project-dd-label">UI/UX Design</span>
                      <svg aria-hidden="true" className="pj-dd-chev" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewBox="0 0 24 24" width="16"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                    <div aria-label="Filter projects by category" className="pj-dd-menu" hidden id="about-project-categories" role="group">
                      <button aria-pressed="false" className="project-filter about-project-category inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-xs hover:bg-slate-50 hover:text-slate-900 transition shadow-xs active:scale-95" data-project-category="analytics" type="button">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>
                          IT Product/Business Analytics
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
                          Machine Learning/AI Engineering
                        </span>
                      </button>
                      {" "}
                      <button aria-pressed="false" className="project-filter about-project-category inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-xs hover:bg-slate-50 hover:text-slate-900 transition shadow-xs active:scale-95" data-project-category="developer" type="button">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span>
                          Developer & Database
                        </span>
                      </button>
                    </div>
                  </div>
                  <div aria-label="Projects in this field" className="pj-list" id="about-project-track" role="group"></div>
                  <p className="hidden rounded-xl border border-dashed border-slate-300 bg-white/70 px-4 py-6 text-center text-xs text-slate-500" id="about-project-empty">
                    No projects in this category yet.
                  </p>
                  <div className="hidden" id="about-project-dots"></div>
                </div>
              </div>
              <div aria-live="polite" className="pj-main min-w-0" id="about-project-detail"></div>
            </div>
            {createPortal(
            <div className="pj-fab" id="pj-fab">
              <button aria-controls="pj-fab-panel" aria-expanded="false" aria-haspopup="true" aria-label="Open the project menu" className="pj-fab-btn" id="pj-fab-btn" type="button">
                <span aria-hidden="true" className="pj-fab-bars"><i /><i /><i /></span>
              </button>
              <div aria-label="Switch project" className="pj-fab-panel" id="pj-fab-panel" role="group">
                <label className="pj-fab-field">
                  <span>Field</span>
                  <select id="pj-fab-select">
                    <option value="analytics">IT Product/Business Analytics</option>
                    <option value="team">Project Management &amp; Leadership</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="aiml">Machine Learning/AI Engineering</option>
                    <option value="developer">Developer &amp; Database</option>
                  </select>
                </label>
                <div className="pj-fab-list" id="pj-fab-list"></div>
                <button className="pj-fab-top" id="pj-fab-top" type="button">Back to the full menu ↑</button>
              </div>
            </div>,
              document.body,
            )}
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
                OPEN TO WORK &amp; OPPORTUNITIES
              </p>
              <h2>
                Open to new opportunities.
              </h2>
              <p className="ct-lead">
                I&apos;m currently seeking opportunities in <strong>Product Management, Business Analysis, UI/UX Design, AI/ML, and Software Development.</strong>
                <br /><br />
                Feel free to connect with me on LinkedIn or reach out via email.
              </p>
            </div>
            <div className="ct-links">
              <a className="ct-link linkedin" href="https://www.linkedin.com/in/jessica-trs" target="_blank" rel="noopener noreferrer">
                <span className="ct-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.2 8.1H1.5V22h3.7V8.1ZM3.35 2A2.16 2.16 0 1 0 3.35 6.3 2.16 2.16 0 0 0 3.35 2ZM22.5 14.03c0-4.18-2.23-6.13-5.2-6.13-2.4 0-3.47 1.32-4.07 2.25V8.1H9.53V22h3.7v-6.88c0-1.82.35-3.58 2.6-3.58 2.21 0 2.24 2.08 2.24 3.7V22h3.7l.73-7.97Z" />
                  </svg>
                </span>
                <span>
                  <b>LinkedIn</b>
                  <small>Connect professionally</small>
                </span>
                <i aria-hidden="true">↗</i>
              </a>
              <a className="ct-link" href="mailto:jssicatheresia@gmail.com">
                <span className="ct-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                    <path d="m3.5 6 8.5 6.5L20.5 6" />
                  </svg>
                </span>
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
