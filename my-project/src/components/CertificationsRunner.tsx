"use client";

import { useEffect } from "react";
import { useInstall } from "./InstallContext";
import { CodeCell, ImportCode, NameErrorLine } from "./codecell";
import { CertificationCard, ViewAllButton } from "./cards";
import { CERTIFICATIONS } from "@/data/certifications";

export default function CertificationsRunner() {
  const { installed, runAllToken, certsOutput, setCertsOutput } = useInstall();
  const run = () => setCertsOutput(installed ? "ok" : "error");

  useEffect(() => {
    if (runAllToken > 0) setCertsOutput("ok");
  }, [runAllToken, setCertsOutput]);

  return (
    <section id="certifications" className="mt-20">
      <CodeCell
        onRun={run}
        outputDark
        output={
          certsOutput === "ok" ? (
            <>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <CertificationCard
                    key={cert.slug}
                    cert={cert}
                    className={i >= 2 ? "max-sm:hidden" : ""}
                  />
                ))}
              </div>
              {CERTIFICATIONS.length > 2 && (
                <div className="mt-4">
                  <ViewAllButton
                    href="/certifications"
                    label="View All Certifications"
                  />
                </div>
              )}
            </>
          ) : certsOutput === "error" ? (
            <NameErrorLine name="Certifications" />
          ) : undefined
        }
      >
        <ImportCode cls="Certifications" variable="certs" />
      </CodeCell>
    </section>
  );
}
