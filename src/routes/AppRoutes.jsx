import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import WorkPage from "../pages/work/WorkPage.jsx";
import { LEGACY_PAGES, ROUTES } from "./paths.js";

function LegacyRedirect({ to }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.projects} element={<Navigate to="/#selected-works" replace />} />
        <Route path={ROUTES.aiml} element={<Navigate to="/#selected-works" replace />} />
        <Route path={ROUTES.uiux} element={<Navigate to="/#selected-works" replace />} />
        <Route path={ROUTES.work} element={<WorkPage />} />
        {Object.entries(LEGACY_PAGES).map(([file, to]) => (
          <Route key={file} path={file} element={<LegacyRedirect to={to} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
