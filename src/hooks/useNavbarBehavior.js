import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useNavbarBehavior(sectionIds, navbarRef) {
  const { pathname } = useLocation();
  const [compact, setCompact] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const waiting = useRef(false);
  const settleTimer = useRef(0);
  const idsKey = sectionIds.join("|");

  useEffect(() => {
    let frame = 0;
    let isCompact = false;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        isCompact = isCompact ? y > 24 : y > 40;
        setCompact(isCompact);
        frame = 0;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const sections = idsKey
      .split("|")
      .filter(Boolean)
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((s) => s.el);
    if (!sections.length) {
      setActiveId(null);
      return undefined;
    }

    const updateActive = () => {
      const bottom = navbarRef.current?.getBoundingClientRect().bottom ?? 0;
      const line = bottom + 120;
      let current = sections[0].id;
      sections.forEach(({ id, el }) => {
        if (el.getBoundingClientRect().top <= line) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActiveId(current);
    };
    const settle = () => {
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        waiting.current = false;
        updateActive();
      }, 180);
    };
    const onScroll = () => (waiting.current ? settle() : updateActive());

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    updateActive();
    return () => {
      window.clearTimeout(settleTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [idsKey, pathname, navbarRef]);

  const selectSection = useCallback((id) => {
    waiting.current = true;
    setActiveId(id);
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      waiting.current = false;
    }, 180);
  }, []);

  return { compact, activeId, selectSection };
}
