import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";
import { setLanguage } from "./translator.js";

export const LANGUAGES = [
  { code: "en", short: "EN", label: "English" },
  { code: "id", short: "ID", label: "Bahasa Indonesia" },
];

const STORAGE_KEY = "portfolio-language";
const LanguageContext = createContext({ language: "en", setLanguage: () => {} });

function readInitialLanguage() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "id" || fromUrl === "en") return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") return saved;
  } catch {
    /* storage can be unavailable (private mode) */
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [language, setCurrent] = useState(readInitialLanguage);

  // Layout effect: the first translation lands before the browser paints, so there is no flash of English.
  useLayoutEffect(() => {
    setLanguage(language);
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore */
    }
  }, [language]);

  const change = useCallback((next) => setCurrent(next === "id" ? "id" : "en"), []);
  const value = useMemo(() => ({ language, setLanguage: change }), [language, change]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
