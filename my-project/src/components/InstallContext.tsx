"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type AboutOutput = null | "intro" | "error";
type ExperienceOutput = null | "cards" | "error";
type ProjectsOutput = null | "grid" | "error";
type SimpleOutput = null | "ok" | "error";
type MultiOutputs = Record<string, "ok" | "error">;

type CellCtx = {
  installed: boolean;
  install: () => void;
  aboutOutput: AboutOutput;
  setAboutOutput: (v: AboutOutput) => void;
  experienceOutput: ExperienceOutput;
  setExperienceOutput: (v: ExperienceOutput) => void;
  projectsOutput: ProjectsOutput;
  setProjectsOutput: (v: ProjectsOutput) => void;
  // Technical Skills: whether the first cell defined `tech_skills`, plus each
  // cell's output keyed by category.
  techDefined: boolean;
  setTechDefined: (v: boolean) => void;
  techOutputs: MultiOutputs;
  setTechOutputs: Dispatch<SetStateAction<MultiOutputs>>;
  // Single-cell sections
  educationOutput: SimpleOutput;
  setEducationOutput: (v: SimpleOutput) => void;
  coursesOutput: SimpleOutput;
  setCoursesOutput: (v: SimpleOutput) => void;
  certsOutput: SimpleOutput;
  setCertsOutput: (v: SimpleOutput) => void;
  volunteeringOutput: SimpleOutput;
  setVolunteeringOutput: (v: SimpleOutput) => void;
  // Fun Facts: whether the first cell defined `fun_facts`, plus per-cell output.
  funDefined: boolean;
  setFunDefined: (v: boolean) => void;
  funOutputs: MultiOutputs;
  setFunOutputs: Dispatch<SetStateAction<MultiOutputs>>;
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
  techDefined: false,
  setTechDefined: () => {},
  techOutputs: {},
  setTechOutputs: () => {},
  educationOutput: null,
  setEducationOutput: () => {},
  coursesOutput: null,
  setCoursesOutput: () => {},
  certsOutput: null,
  setCertsOutput: () => {},
  volunteeringOutput: null,
  setVolunteeringOutput: () => {},
  funDefined: false,
  setFunDefined: () => {},
  funOutputs: {},
  setFunOutputs: () => {},
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
  const [techDefined, setTechDefined] = useState(false);
  const [techOutputs, setTechOutputs] = useState<MultiOutputs>({});
  const [educationOutput, setEducationOutput] = useState<SimpleOutput>(null);
  const [coursesOutput, setCoursesOutput] = useState<SimpleOutput>(null);
  const [certsOutput, setCertsOutput] = useState<SimpleOutput>(null);
  const [volunteeringOutput, setVolunteeringOutput] =
    useState<SimpleOutput>(null);
  const [funDefined, setFunDefined] = useState(false);
  const [funOutputs, setFunOutputs] = useState<MultiOutputs>({});

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
        techDefined,
        setTechDefined,
        techOutputs,
        setTechOutputs,
        educationOutput,
        setEducationOutput,
        coursesOutput,
        setCoursesOutput,
        certsOutput,
        setCertsOutput,
        volunteeringOutput,
        setVolunteeringOutput,
        funDefined,
        setFunDefined,
        funOutputs,
        setFunOutputs,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useInstall = () => useContext(Ctx);
