import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  useEffect(() => {
    const preventContextMenu = (event) => event.preventDefault();
    const preventCopy = (event) => event.preventDefault();
    const preventDrag = (event) => {
      if (event.target.closest("img, video, audio, iframe, a")) event.preventDefault();
    };
    const preventSaveShortcuts = (event) => {
      const key = event.key.toLowerCase();
      const blocked = (event.ctrlKey || event.metaKey)
        && ["s", "p", "u"].includes(key);
      const devtools = event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key);
      if (blocked || devtools || key === "f12") {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventCopy);
    document.addEventListener("cut", preventCopy);
    document.addEventListener("dragstart", preventDrag);
    document.addEventListener("keydown", preventSaveShortcuts, true);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("cut", preventCopy);
      document.removeEventListener("dragstart", preventDrag);
      document.removeEventListener("keydown", preventSaveShortcuts, true);
    };
  }, []);

  return <AppRoutes />;
}
