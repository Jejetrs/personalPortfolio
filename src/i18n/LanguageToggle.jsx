import { LANGUAGES, useLanguage } from "./LanguageContext.jsx";

/** Small EN | ID switch that lives in the navbar. */
export default function LanguageToggle({ className = "" }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label="Language" translate="no" data-active={language}>
      <span className="lang-toggle-thumb" aria-hidden="true"></span>
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          className="lang-toggle-btn"
          lang={item.code}
          aria-pressed={language === item.code}
          aria-label={item.label}
          title={item.label}
          onClick={() => setLanguage(item.code)}
        >
          {item.short}
        </button>
      ))}
    </div>
  );
}
