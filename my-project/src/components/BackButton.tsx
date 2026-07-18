"use client";

import { useRouter } from "next/navigation";

export default function BackButton({
  fallback,
  label,
}: {
  fallback: string;
  label: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        // Going back through history restores the exact scroll position on
        // the main page; the fallback covers direct visits to this page.
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallback);
        }
      }}
      className="fixed left-6 top-6 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-[var(--fn)] hover:text-[var(--fn)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </button>
  );
}
