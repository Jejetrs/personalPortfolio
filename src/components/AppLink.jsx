import { Link, useLocation } from "react-router-dom";
import { TAILWIND_GROUP } from "@/routes/paths.js";

/** Router link that falls back to a full page load when the target page needs another Tailwind configuration. */
export default function AppLink({ to, ...props }) {
  const { pathname } = useLocation();
  const target = String(to).split(/[?#]/)[0] || "/";
  const crossGroup = TAILWIND_GROUP[target] !== TAILWIND_GROUP[pathname];
  return <Link to={to} reloadDocument={crossGroup} {...props} />;
}
