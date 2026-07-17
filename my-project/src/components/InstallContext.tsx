"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type AboutOutput = null | "intro" | "error";
type ExperienceOutput = null | "cards" | "error";
type ProjectsOutput = null | "grid" | "error";

type CellCtx = {
  installed: boolean;
  install: () => void;
  aboutOutput: AboutOutput;
  setAboutOutput: (v: AboutOutput) => void;
  experienceOutput: ExperienceOutput;
  setExperienceOutput: (v: ExperienceOutput) => void;
  projectsOutput: ProjectsOutput;
  setProjectsOutput: (v: ProjectsOutput) => void;
};

const Ctx = createContext<CellCtx>({
  installed: false,
  install: () => {},
  aboutOutput: null,
  setAboutOutput: () => {},
  experienceOutput: null,
  setExperienceOutput: () => {},
  projectsOutput: null,
  setProjectsOutput: () => {},
});

// Holds the interactive code-cell state (pip installed, About / Experience
// outputs). Rendered in the ROOT LAYOUT, so the state survives client-side
// navigation (detail page → back) but is in-memory only — a full page refresh
// remounts the layout and resets every cell to "not run".
export function InstallProvider({ children }: { children: ReactNode }) {
  const [installed, setInstalled] = useState(false);
  const [aboutOutput, setAboutOutput] = useState<AboutOutput>(null);
  const [experienceOutput, setExperienceOutput] =
    useState<ExperienceOutput>(null);
  const [projectsOutput, setProjectsOutput] = useState<ProjectsOutput>(null);

  return (
    <Ctx.Provider
      value={{
        installed,
        install: () => setInstalled(true),
        aboutOutput,
        setAboutOutput,
        experienceOutput,
        setExperienceOutput,
        projectsOutput,
        setProjectsOutput,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useInstall = () => useContext(Ctx);
