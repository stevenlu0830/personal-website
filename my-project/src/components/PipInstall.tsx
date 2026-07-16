"use client";

import { useRef, useState } from "react";

type RunState = "idle" | "running" | "done";

export default function PipInstall() {
  const [state, setState] = useState<RunState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = () => {
    if (timer.current) clearTimeout(timer.current);
    // Show "Collecting…" immediately, then the success line shortly after,
    // to simulate pip actually doing the install.
    setState("running");
    timer.current = setTimeout(() => setState("done"), 900);
  };

  return (
    <div className="mt-10 w-full text-left">
      <div className="rounded border border-border bg-surface">
        {/* read-only code + Run button */}
        <div className="flex items-center gap-3 px-4 py-3">
          <code className="flex-1 select-none text-sm">
            <span className="text-[#f44747]">!</span>
            <span className="text-[#dddddd]">pip install stevenlu0830</span>
          </code>
          <button
            type="button"
            onClick={run}
            disabled={state === "running"}
            className="shrink-0 rounded border border-border px-3 py-1 text-sm text-[#dddddd] transition-colors hover:border-[#4fc9af] disabled:opacity-60"
          >
            {state === "running" ? "Running…" : "▶ Run"}
          </button>
        </div>

        {/* simulated CLI output */}
        {state !== "idle" && (
          <div className="border-t border-border px-4 py-3 text-sm text-[#dddddd]">
            <p>Collecting stevenlu0830</p>
            {state === "done" && <p>Successfully installed stevenlu0830</p>}
          </div>
        )}
      </div>
    </div>
  );
}
