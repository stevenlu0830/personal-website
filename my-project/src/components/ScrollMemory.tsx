"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const KEY = "home-scroll";
const DETAIL_PATH = /^\/(projects|experience|certifications|volunteering)\//;

// useLayoutEffect would warn during SSR, so fall back to useEffect there.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollMemory() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  // Remember the home-page scroll position when a detail-page link is clicked
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.("a");
      if (anchor && DETAIL_PATH.test(anchor.getAttribute("href") ?? "")) {
        sessionStorage.setItem(KEY, String(window.scrollY));
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Restore it when navigating from a detail page back to the home page.
  // Runs before paint (useLayoutEffect) so the page never flashes at the top,
  // and forces non-smooth scrolling so the jump is never animated.
  useIsomorphicLayoutEffect(() => {
    const cameFromDetail = DETAIL_PATH.test(prevPath.current);
    prevPath.current = pathname;
    if (pathname !== "/" || !cameFromDetail) return;

    const saved = sessionStorage.getItem(KEY);
    if (saved === null) return;
    const y = Number(saved);

    // Scrolling is instant site-wide (smooth is scoped to in-page nav clicks
    // via SmoothAnchors), so the restore never animates. Running before paint
    // means the page's first frame is already at the saved position — the
    // user sees no motion. The rAF loop just waits for the page to reach full
    // height before scrolling, in case layout isn't settled on the first frame.
    let tries = 0;
    const restore = () => {
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      if (maxY >= y || tries > 60) {
        window.scrollTo(0, y);
      } else {
        tries += 1;
        requestAnimationFrame(restore);
      }
    };
    restore();
  }, [pathname]);

  return null;
}
