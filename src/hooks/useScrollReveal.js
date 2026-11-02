import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SELECTOR = "main > section, main > div > section, main article.project-card-item";

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    const frame = requestAnimationFrame(() => {
      const items = [...document.querySelectorAll(SELECTOR)].filter((el) => !el.parentElement.closest(".rv"));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("rv-in");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0 },
      );
      items.forEach((el) => {
        el.classList.add("rv");
        observer.observe(el);
      });
      cleanup = () => observer.disconnect();
    });
    let cleanup = () => {};
    return () => {
      cancelAnimationFrame(frame);
      cleanup();
    };
  }, [pathname]);
}
