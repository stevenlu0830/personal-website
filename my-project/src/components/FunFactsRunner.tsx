"use client";

import { useInstall } from "./InstallContext";
import {
  CodeCell,
  ImportCode,
  DisplayLine,
  DictList,
  NameErrorLine,
} from "./codecell";
import {
  TRAVEL,
  LANGUAGES,
  SONGS_CANTOPOP,
  SONGS_OTHER,
  type Song,
} from "@/data/funfacts";

// Bullet list of linked songs, printed in console white.
function SongBullets({ songs }: { songs: Song[] }) {
  return (
    <div className="text-[#dddddd]">
      {songs.map((s) => (
        <div key={s.href}>
          <span aria-hidden="true">♪ </span>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-[#4a90c2]"
          >
            {s.label}
          </a>
        </div>
      ))}
    </div>
  );
}

const CANTO = "Favourite Canto-pop Songs";
const OTHER = "Favourite Songs other than Canto-pop";
const TRAVEL_ARG = "Bucket-list Travel Places";
const LANG = "Spoken Languages";

export default function FunFactsRunner() {
  const { installed, funDefined, setFunDefined, funOutputs, setFunOutputs } =
    useInstall();

  const runFirst = () => {
    if (installed) setFunDefined(true);
    setFunOutputs((prev) => ({
      ...prev,
      [TRAVEL_ARG]: installed ? "ok" : "error",
    }));
  };

  const runFollow = (arg: string) => {
    setFunOutputs((prev) => ({
      ...prev,
      [arg]: funDefined ? "ok" : "error",
    }));
  };

  const okOr = (arg: string, ok: React.ReactNode) => {
    const state = funOutputs[arg];
    if (state === "ok") return ok;
    if (state === "error")
      return <NameErrorLine name={arg === TRAVEL_ARG ? "FunFacts" : "fun_facts"} />;
    return undefined;
  };

  return (
    <section id="fun-facts" className="mt-20 space-y-6">
      {/* Cell 1: import + travel places */}
      <CodeCell onRun={runFirst} output={okOr(TRAVEL_ARG, <DictList rows={TRAVEL} />)}>
        <ImportCode cls="FunFacts" variable="fun_facts" arg={TRAVEL_ARG} />
      </CodeCell>

      {/* Cell 2: Canto-pop (with reminder comment) */}
      <CodeCell
        onRun={() => runFollow(CANTO)}
        output={okOr(CANTO, <SongBullets songs={SONGS_CANTOPOP} />)}
      >
        <span className="block text-[#6a9955]">
          # Run the code box above before running the following three code boxes
        </span>
        <DisplayLine variable="fun_facts" arg={CANTO} />
      </CodeCell>

      {/* Cell 3: other songs */}
      <CodeCell
        onRun={() => runFollow(OTHER)}
        output={okOr(OTHER, <SongBullets songs={SONGS_OTHER} />)}
      >
        <DisplayLine variable="fun_facts" arg={OTHER} />
      </CodeCell>

      {/* Cell 4: spoken languages */}
      <CodeCell
        onRun={() => runFollow(LANG)}
        output={okOr(LANG, <DictList rows={LANGUAGES} />)}
      >
        <DisplayLine variable="fun_facts" arg={LANG} />
      </CodeCell>
    </section>
  );
}
