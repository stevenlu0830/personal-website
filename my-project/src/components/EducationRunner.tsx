"use client";

import { useInstall } from "./InstallContext";
import { CodeCell, ImportCode, NameErrorLine } from "./codecell";
import { EDUCATION } from "@/data/education";

export default function EducationRunner() {
  const { installed, educationOutput, setEducationOutput } = useInstall();
  const run = () => setEducationOutput(installed ? "ok" : "error");

  return (
    <section id="education" className="mt-20">
      <CodeCell
        onRun={run}
        output={
          educationOutput === "ok" ? (
            <div className="space-y-4">
              {EDUCATION.map((e) => (
                <div key={e.school}>
                  <p className="font-bold text-[#dcdcaa]">{e.school}</p>
                  <p className="text-[#9ddcff]">{e.degree}</p>
                  <p className="text-[#9ddcff]">{e.years}</p>
                </div>
              ))}
            </div>
          ) : educationOutput === "error" ? (
            <NameErrorLine name="Education" />
          ) : undefined
        }
      >
        <ImportCode cls="Education" variable="education" />
      </CodeCell>
    </section>
  );
}
