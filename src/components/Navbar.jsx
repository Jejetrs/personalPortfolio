import { useRef } from "react";
import AppLink from "@/components/AppLink.jsx";
import useNavbarBehavior from "@/hooks/useNavbarBehavior.js";
import { ROUTES } from "@/routes/paths.js";

const EMAIL = "jssicatheresia@gmail.com";

/** Navigation entries. `sectionId` marks links that scroll-spy on the home page. */
const NAV_ITEMS = [
  { key: "about", label: "About", to: "/#about", sectionId: "about" },
  { key: "projects", label: "Projects", to: "/#selected-works", sectionId: "selected-works" },
  { key: "work", label: "Experience", to: ROUTES.work },
  { key: "contact", label: "Contact", to: "/#contact", sectionId: "contact" },
];

const VARIANTS = {
  default: {
    headerClass: "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-indigo-100/80 transition-all portfolio-navbar",
    innerClass: "max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4 relative z-10",
    navClass: "flex items-center gap-1 sm:gap-4 lg:gap-6 text-[10px] sm:text-sm font-semibold",
    linkIdle: "text-slate-600 hover:text-primary transition hover:-translate-y-0.5",
    linkActive:
      "text-primary font-bold transition flex items-center gap-1 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full",
  },
  classic: {
    headerClass: "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs portfolio-navbar",
    innerClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
    navClass: "hidden md:flex items-center gap-7",
    linkIdle: "text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors",
    linkActive:
      "text-xs font-bold text-indigo-600 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600",
  },
};

function RollLabel({ label }) {
  return (
    <span className="portfolio-nav-roll">
      <span>{label}</span>
      <span aria-hidden="true">{label}</span>
    </span>
  );
}

function PortfolioMark({ variant }) {
  const isClassic = variant === "classic";
  return (
    <span className={`portfolio-brand-mark flex items-center gap-2.5 ${isClassic ? "" : "sm:gap-3"}`}>
      <img
        src="/assets/Logo.png"
        alt=""
        aria-hidden="true"
        className={`w-auto object-contain ${isClassic ? "h-8" : "h-9 sm:h-10"}`}
      />
      <span className={`whitespace-nowrap tracking-[0.24em] ${isClassic ? "text-sm font-bold text-slate-900 group-hover:text-indigo-600" : "text-sm font-extrabold text-[#131b2e] transition group-hover:text-primary sm:text-base"}`}>
        PORTFOLIO
      </span>
      <span aria-hidden="true" className={`hidden items-center gap-1.5 sm:flex ${isClassic ? "text-indigo-300" : "text-indigo-300"}`}>
        <span className="h-px w-8 bg-current sm:w-12"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
      </span>
    </span>
  );
}

function Brand({ variant, showStatus }) {
  if (variant === "classic") {
    return (
      <AppLink to="/#about" className="flex items-center group" aria-label="Portfolio home">
        <PortfolioMark variant={variant} />
      </AppLink>
    );
  }
  return (
    <AppLink to="/#about" className="flex items-center group shrink-0" aria-label="Portfolio home">
      <PortfolioMark variant={variant} />
      {showStatus && (
        <span className="sr-only">
          Open to Full-time Opportunities
        </span>
      )}
    </AppLink>
  );
}

function EmailButton({ className }) {
  return (
    <a
      aria-label={`Email ${EMAIL}`}
      className={className}
      href={`mailto:${EMAIL}`}
      title={`Email ${EMAIL}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <path d="m4 7 8 6 8-6"></path>
      </svg>{" "}
      <span className="hidden sm:inline lg:hidden">Email</span>{" "}
      <span className="hidden lg:inline">{EMAIL}</span>
    </a>
  );
}

/**
 * Site navbar.
 * @param active  key of the nav item that represents the current page ("projects" | "work" | undefined)
 * @param variant "default" | "classic" (the older, flatter header used by the UI/UX page)
 */
export default function Navbar({ active, variant = "default", showStatus = true }) {
  const v = VARIANTS[variant];
  const headerRef = useRef(null);
  const spyIds = NAV_ITEMS.filter((i) => i.sectionId).map((i) => i.sectionId);
  const { compact, activeId, selectSection } = useNavbarBehavior(spyIds, headerRef);
  const spyActive = activeId != null;

  const emailClass =
    variant === "classic"
      ? "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
      : "inline-flex items-center gap-0 sm:gap-2 rounded-full border border-slate-200 bg-white px-2 sm:px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50";

  const links = NAV_ITEMS.map((item) => {
    const isPageActive = item.key === active;
    const current = spyActive && item.sectionId ? item.sectionId === activeId : !spyActive && isPageActive;
    return (
      <AppLink
        key={item.key}
        to={item.to}
        className={`${isPageActive ? v.linkActive : v.linkIdle} portfolio-nav-link`}
        aria-label={item.label}
        aria-current={current ? "page" : undefined}
        onClick={() => item.sectionId && selectSection(item.sectionId)}
      >
        <RollLabel label={item.label} />
      </AppLink>
    );
  });

  return (
    <header ref={headerRef} className={`${v.headerClass}${compact ? " is-compact" : ""}`}>
      <div className={v.innerClass}>
        <Brand variant={variant} showStatus={showStatus} />
        <nav className={v.navClass}>
          {links}
          {variant === "default" && <EmailButton className={emailClass} />}
        </nav>
        {variant === "classic" && (
          <div className="flex items-center gap-3">
            <EmailButton className={emailClass} />
          </div>
        )}
      </div>
    </header>
  );
}
