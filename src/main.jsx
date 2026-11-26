import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/portfolio-theme.css";
import "./styles/refresh.css";
import "./styles/mobile.css";
import "./styles/hero-header.css";
import "./styles/projects.css";
import "./styles/skills-journey.css";
import "./styles/empty-grid.css";
import "./styles/i18n.css";

// Behavior modules mutate the DOM, so StrictMode is disabled.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>,
);
