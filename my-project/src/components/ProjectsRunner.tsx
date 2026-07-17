"use client";

import { useInstall } from "./InstallContext";
import { ProjectCard, ViewAllButton } from "./cards";
import { PROJECTS } from "@/data/projects";

export default function ProjectsRunner() {
  const { installed, projectsOutput: output, setProjectsOutput } = useInstall();

  const run = () => setProjectsOutput(installed ? "grid" : "error");

  return (
    <section id="projects" className="mt-20">
      {/* Run button — above the box, right-aligned */}
      <div className="mb-2 flex justify-end">
        <button
          type="button"
          onClick={run}
          className="rounded border border-border px-3 py-1 text-sm text-[#dddddd] transition-colors hover:border-[#4fc9af]"
        >
          ▶ Run
        </button>
      </div>
      <div className="rounded border border-border bg-surface">
        {/* read-only code — scrolls horizontally instead of wrapping */}
        <div className="overflow-x-auto px-4 py-3">
          <code className="block select-none whitespace-nowrap text-sm leading-relaxed">
            <span className="block">
              <span className="text-[#c586c0]">from </span>
              <span className="text-[#4fc9af]">stevenlu0830</span>
              <span className="text-[#c586c0]"> import </span>
              <span className="text-[#4fc9af]">Projects</span>
            </span>
            <span className="block">&nbsp;</span>
            <span className="block">
              <span className="text-[#9ddcff]">projects</span>
              <span className="text-[#dddddd]"> = </span>
              <span className="text-[#4fc9af]">Projects</span>
              <span className="text-[#ffd800]">()</span>
            </span>
            <span className="block">
              <span className="text-[#9ddcff]">projects</span>
              <span className="text-[#dddddd]">.</span>
              <span className="text-[#dcdcaa]">display</span>
              <span className="text-[#ffd800]">()</span>
            </span>
          </code>
        </div>

        {/* simulated output: the project buttons (top 2 + View All on mobile),
            or a NameError */}
        {output && (
          <div className="border-t border-border bg-background px-4 py-3 text-sm leading-relaxed">
            {output === "grid" ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2">
                  {PROJECTS.map((p, i) => (
                    <ProjectCard
                      key={p.slug}
                      project={p}
                      className={i >= 2 ? "max-sm:hidden" : ""}
                    />
                  ))}
                </div>
                {PROJECTS.length > 2 && (
                  <div className="mt-6">
                    <ViewAllButton href="/projects" label="View All Projects" />
                  </div>
                )}
              </>
            ) : (
              <p>
                <span className="text-[#d670d6]">NameError</span>
                <span className="text-[#dddddd]">: </span>
                <span className="text-[#c152be]">
                  name &apos;Projects&apos; is not defined
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
