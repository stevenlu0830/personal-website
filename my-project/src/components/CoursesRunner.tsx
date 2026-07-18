"use client";

import { useEffect } from "react";
import { useInstall } from "./InstallContext";
import { CodeCell, ImportCode, DictList, NameErrorLine } from "./codecell";
import { COURSES } from "@/data/courses";

const ROWS = COURSES.map((c) => ({ "course code": c.code, name: c.name }));

export default function CoursesRunner() {
  const { installed, runAllToken, coursesOutput, setCoursesOutput } =
    useInstall();
  const run = () => setCoursesOutput(installed ? "ok" : "error");

  useEffect(() => {
    if (runAllToken > 0) setCoursesOutput("ok");
  }, [runAllToken, setCoursesOutput]);

  return (
    <section id="courses" className="mt-20">
      <CodeCell
        onRun={run}
        output={
          coursesOutput === "ok" ? (
            <DictList rows={ROWS} />
          ) : coursesOutput === "error" ? (
            <NameErrorLine name="RelevantCourses" />
          ) : undefined
        }
      >
        <ImportCode cls="RelevantCourses" variable="courses" />
      </CodeCell>
    </section>
  );
}
