"use client";

import { useEffect } from "react";
import { useInstall } from "./InstallContext";
import { ExperienceCard } from "./cards";
import { EXPERIENCE } from "@/data/experience";

export default function ExperienceRunner() {
  const { installed, runAllToken, experienceOutput: output, setExperienceOutput } =
    useInstall();

  const run = () => setExperienceOutput(installed ? "cards" : "error");

  useEffect(() => {
    if (runAllToken > 0) setExperienceOutput("cards");
  }, [runAllToken, setExperienceOutput]);

  return (
    <section id="experience" className="mt-20">
      {/* Run button — above the box, right-aligned */}
      <div className="mb-2 flex justify-end">
        <button
          type="button"
          onClick={run}
          className="rounded border border-border px-3 py-1 text-sm text-[var(--cli)] transition-colors hover:border-[var(--accent)]"
        >
          ▶ Run
        </button>
      </div>
      <div className="rounded border border-border bg-surface">
        {/* read-only code — scrolls horizontally instead of wrapping */}
        <div className="overflow-x-auto px-4 py-3">
          <code className="block select-none whitespace-nowrap text-sm leading-relaxed">
            <span className="block">
              <span className="text-[var(--keyword)]">from </span>
              <span className="text-[var(--accent)]">stevenlu0830</span>
              <span className="text-[var(--keyword)]"> import </span>
              <span className="text-[var(--accent)]">Experience</span>
            </span>
            <span className="block">&nbsp;</span>
            <span className="block">
              <span className="text-[var(--muted)]">experience</span>
              <span className="text-[var(--cli)]"> = </span>
              <span className="text-[var(--accent)]">Experience</span>
              <span className="text-[var(--bracket)]">()</span>
            </span>
            <span className="block">
              <span className="text-[var(--muted)]">experience</span>
              <span className="text-[var(--cli)]">.</span>
              <span className="text-[var(--fn)]">display</span>
              <span className="text-[var(--bracket)]">()</span>
            </span>
          </code>
        </div>

        {/* simulated output: the experience buttons, or a NameError */}
        {output && (
          <div className="border-t border-border bg-background px-4 py-3 text-sm leading-relaxed">
            {output === "cards" ? (
              <div className="space-y-4">
                {EXPERIENCE.map((job) => (
                  <ExperienceCard key={job.slug} job={job} />
                ))}
              </div>
            ) : (
              <p>
                <span className="text-[var(--errname)]">NameError</span>
                <span className="text-[var(--cli)]">: </span>
                <span className="text-[var(--errmsg)]">
                  name &apos;Experience&apos; is not defined
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
