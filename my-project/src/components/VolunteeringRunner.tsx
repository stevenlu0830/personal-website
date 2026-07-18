"use client";

import { useEffect } from "react";
import { useInstall } from "./InstallContext";
import { CodeCell, ImportCode, NameErrorLine } from "./codecell";
import { VolunteeringCard, ViewAllButton } from "./cards";
import { VOLUNTEERING } from "@/data/volunteering";

export default function VolunteeringRunner() {
  const { installed, runAllToken, volunteeringOutput, setVolunteeringOutput } =
    useInstall();
  const run = () => setVolunteeringOutput(installed ? "ok" : "error");

  useEffect(() => {
    if (runAllToken > 0) setVolunteeringOutput("ok");
  }, [runAllToken, setVolunteeringOutput]);

  return (
    <section id="volunteering" className="mt-20">
      <CodeCell
        onRun={run}
        outputDark
        output={
          volunteeringOutput === "ok" ? (
            <>
              <div className="space-y-4">
                {VOLUNTEERING.map((role, i) => (
                  <VolunteeringCard
                    key={role.slug}
                    role={role}
                    className={i >= 2 ? "max-sm:hidden" : ""}
                  />
                ))}
              </div>
              {VOLUNTEERING.length > 2 && (
                <div className="mt-4">
                  <ViewAllButton
                    href="/volunteering"
                    label="View All Volunteering"
                  />
                </div>
              )}
            </>
          ) : volunteeringOutput === "error" ? (
            <NameErrorLine name="Volunteering" />
          ) : undefined
        }
      >
        <ImportCode cls="Volunteering" variable="volunteer" />
      </CodeCell>
    </section>
  );
}
