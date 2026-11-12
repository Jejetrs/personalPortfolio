import AppLink from '@/components/AppLink.jsx';

const GITHUB_ICON =
  "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z";
const GITHUB_ICON_LEGACY =
  "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z";

export default function Footer({ spacing = 'mt-12', legacyGithubIcon = false }) {
  return (
    <footer className={`bg-white border-t border-slate-200 ${spacing} pt-8 pb-8`} data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              JT
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 leading-tight">
                Jessica Theresia
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Product · UI/UX · AI/ML Engineer · Digital Product Development
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-600">
            <AppLink to="/#about" className="hover:text-indigo-600 transition">
              Home
            </AppLink>
            {" "}
            <AppLink to="/#about" className="hover:text-indigo-600 transition">
              About
            </AppLink>
            {" "}
            <AppLink to="/#selected-works" className="hover:text-indigo-600 transition">
              Projects
            </AppLink>
            {" "}
            <AppLink to="/#resume" className="hover:text-indigo-600 transition">
              Certificates
            </AppLink>
            {" "}
            <AppLink to="/#contact" className="hover:text-indigo-600 transition">
              Contact
            </AppLink>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 flex items-center justify-center text-xs transition" href="https://www.linkedin.com/in/jessica-trs" rel="noopener noreferrer" target="_blank">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            {" "}
            <a aria-label="GitHub" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center text-xs transition" href="https://github.com/Jejetrs" rel="noopener noreferrer" target="_blank">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={legacyGithubIcon ? GITHUB_ICON_LEGACY : GITHUB_ICON} fillRule="evenodd"></path>
              </svg>
            </a>
            {" "}
            <AppLink to="/#contact" className="px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition">
              Let's Connect →
            </AppLink>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>
            © 2026 Jessica Theresia.
          </p>
          <p className="text-slate-400">
            Turning real problems into products that matter.
          </p>
        </div>
      </div>
    </footer>
  );
}
