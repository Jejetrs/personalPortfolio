import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/portfolio-theme.css";
import "./styles/refresh.css";
import "./styles/mobile.css";

// StrictMode is intentionally not used: the page enhancement modules in `behaviors/`
// mutate the rendered DOM once and are not safe under double-invoked effects.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
