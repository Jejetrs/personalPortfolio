import { useEffect, useInsertionEffect } from "react";

export default function useDocumentMeta({ title, htmlClass = "", bodyClass = "", tailwindConfig, css, cssId }) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.className;
    const prevBody = body.className;
    html.className = htmlClass;
    body.className = bodyClass;
    return () => {
      html.className = prevHtml;
      body.className = prevBody;
    };
  }, [htmlClass, bodyClass]);

  useInsertionEffect(() => {
    if (tailwindConfig && window.tailwind) window.tailwind.config = tailwindConfig;
  }, [tailwindConfig]);

  useInsertionEffect(() => {
    if (!css) return undefined;
    const style = document.createElement("style");
    style.dataset.pageStyles = cssId || "page";
    style.textContent = css;
    const links = document.head.querySelectorAll('link[rel="stylesheet"]');
    const anchor = links.length ? links[links.length - 1] : null;
    if (anchor) anchor.after(style);
    else document.head.prepend(style);
    return () => style.remove();
  }, [css, cssId]);
}
