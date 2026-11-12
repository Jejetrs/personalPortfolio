import { Outlet } from "react-router-dom";
import useScrollRestoration from "../hooks/useScrollRestoration.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

export default function SiteLayout() {
  useScrollRestoration();
  useScrollReveal();
  return <Outlet />;
}
