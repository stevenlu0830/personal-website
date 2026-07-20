"use client";

import { useInstall } from "./InstallContext";

const INTRO = [
  "Hi, I'm Steven! I am a third-year Computer Science student at the University of British Columbia, specializing in the AI Option. I have a strong interest in artificial intelligence, machine learning, software engineering, data science, and web development, and I am currently seeking internship and co-op opportunities to apply my skills.",
  "Outside of my studies, I enjoy playing badminton, bowling, listening to music, singing and travelling. I'm always open to new opportunities and networking — feel free to reach out and connect!",
];

export default function AboutRunner() {
  const { installed, aboutOutput: output, setAboutOutput } = useInstall();

  // Capture the result at the moment Run is clicked (like a real REPL cell),
  // so it doesn't change on its own if the install state changes afterwards.
  const run = () => setAboutOutput(installed ? "intro" : "error");

  return (
    <section id="about" className="mt-20">
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
            <span className="block text-[var(--comment)]">
              # Reminder: Run the above code box first
            </span>
            <span className="block">
              <span className="text-[var(--keyword)]">from </span>
              <span className="text-[var(--accent)]">stevenlu0830</span>
              <span className="text-[var(--keyword)]"> import </span>
              <span className="text-[var(--accent)]">About</span>
            </span>
            <span className="block">&nbsp;</span>
            <span className="block">
              <span className="text-[var(--muted)]">about_myself</span>
              <span className="text-[var(--cli)]"> = </span>
              <span className="text-[var(--accent)]">About</span>
              <span className="text-[var(--bracket)]">()</span>
            </span>
            <span className="block">
              <span className="text-[var(--muted)]">about_myself</span>
              <span className="text-[var(--cli)]">.</span>
              <span className="text-[var(--fn)]">display</span>
              <span className="text-[var(--bracket)]">()</span>
            </span>
          </code>
        </div>

        {/* simulated CLI output */}
        {output && (
          <div className="border-t border-border px-4 py-3 text-sm leading-relaxed">
            {output === "intro" ? (
              INTRO.map((p, i) => (
                <p key={i} className={`text-[var(--cli)] ${i > 0 ? "mt-3" : ""}`}>
                  {p}
                </p>
              ))
            ) : (
              <p>
                <span className="text-[var(--errname)]">NameError</span>
                <span className="text-[var(--cli)]">: </span>
                <span className="text-[var(--errmsg)]">
                  name &apos;About&apos; is not defined
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
