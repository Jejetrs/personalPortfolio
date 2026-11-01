import { Outlet } from "react-router-dom";
import useScrollRestoration from "../hooks/useScrollRestoration.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

/** Shared shell: resets/scrolls the viewport on navigation and eases sections in. Pages own their header, footer and head metadata. */
export default function SiteLayout() {
  useScrollRestoration();
  useScrollReveal();
  return <Outlet />;
}
