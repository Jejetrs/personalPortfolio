import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/portfolio-theme.css";
import "./styles/refresh.css";
import "./styles/mobile.css";

// Behavior modules mutate the DOM, so StrictMode is disabled.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
