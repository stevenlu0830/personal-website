"use client";

import { useRef, useState } from "react";
import { useInstall } from "./InstallContext";

type RunState = "idle" | "running" | "done";

export default function PipInstall() {
  const [state, setState] = useState<RunState>("idle");
  const { installed, install, runAll } = useInstall();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = () => {
    if (timer.current) clearTimeout(timer.current);
    // Show "Collecting…" immediately, then the success line shortly after,
    // to simulate pip actually doing the install.
    setState("running");
    timer.current = setTimeout(() => {
      setState("done");
      install();
    }, 900);
  };

  // Reflect a restored install (from a previous session/navigation): show the
  // completed output without replaying the animation.
  const showOutput = state !== "idle" || installed;
  const showSuccess = state === "done" || installed;

  return (
    <div className="mt-10 w-full text-left">
      {/* Run all (runs every cell) + Run — above the box, right-aligned */}
      <div className="mb-2 flex flex-col items-end gap-1">
        <button
          type="button"
          onClick={() => {
            setState("done");
            runAll();
          }}
          className="rounded border border-border px-3 py-1 text-sm text-[var(--cli)] transition-colors hover:border-[var(--accent)]"
        >
          ▶▶ Run all
        </button>
        <button
          type="button"
          onClick={run}
          disabled={state === "running"}
          className="rounded border border-border px-3 py-1 text-sm text-[var(--cli)] transition-colors hover:border-[var(--accent)] disabled:opacity-60"
        >
          {state === "running" ? "Running…" : "▶ Run"}
        </button>
      </div>
      <div className="rounded border border-border bg-surface">
        {/* read-only code — scrolls horizontally instead of wrapping */}
        <div className="overflow-x-auto px-4 py-3">
          <code className="block select-none whitespace-nowrap text-sm leading-relaxed">
            <span className="block text-[var(--comment)]">
              # Run this before running all code boxes below
            </span>
            <span className="block">
              <span className="text-[var(--pip)]">!</span>
              <span className="text-[var(--cli)]">pip install stevenlu0830</span>
            </span>
          </code>
        </div>

        {/* simulated CLI output */}
        {showOutput && (
          <div className="border-t border-border px-4 py-3 text-sm text-[var(--cli)]">
            <p>Collecting stevenlu0830</p>
            {showSuccess && <p>Successfully installed stevenlu0830</p>}
          </div>
        )}
      </div>
    </div>
  );
}
