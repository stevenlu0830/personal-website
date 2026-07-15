"use client";

import { useEffect } from "react";

// Smooth-scrolls same-page hash links (the sidebar nav, the avatar "home"
// link). This is scoped to intentional in-page anchor clicks only, so it does
// NOT affect route navigation — back/forward between detail pages and the home
// page stays instant (see ScrollMemory), which is what makes the restored
// scroll position appear without any visible motion.
export default function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const anchor = (e.target as HTMLElement).closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
