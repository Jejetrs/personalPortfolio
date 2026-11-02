import { Link, useLocation } from "react-router-dom";
import { TAILWIND_GROUP } from "@/routes/paths.js";

export default function AppLink({ to, ...props }) {
  const { pathname } = useLocation();
  const target = String(to).split(/[?#]/)[0] || "/";
  const crossGroup = TAILWIND_GROUP[target] !== TAILWIND_GROUP[pathname];
  return <Link to={to} reloadDocument={crossGroup} {...props} />;
}
