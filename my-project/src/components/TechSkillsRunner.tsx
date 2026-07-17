"use client";

import Image from "next/image";
import { useInstall } from "./InstallContext";
import { SKILLS, type Skill } from "@/data/skills";

// Renders the Python-style list-of-dicts output, printing each icon as its
// actual image where the icon string would be.
function SkillListOutput({ items }: { items: Skill[] }) {
  return (
    <div className="text-[#dddddd]">
      {items.map((item, i) => (
        <div key={item.name} className="whitespace-nowrap">
          {i === 0 ? "[" : ""}
          {"{'name': '"}
          {item.name}
          {"', 'icon': '"}
          <Image
            src={item.icon}
            alt=""
            width={16}
            height={16}
            unoptimized
            className={`inline-block h-4 w-4 object-contain align-middle${
              item.invert ? " invert" : ""
            }`}
          />
          {i === items.length - 1 ? "'}]" : "'},"}
        </div>
      ))}
    </div>
  );
}

function ErrorLine({ name }: { name: string }) {
  return (
    <p>
      <span className="text-[#d670d6]">NameError</span>
      <span className="text-[#dddddd]">: </span>
      <span className="text-[#c152be]">
        name &apos;{name}&apos; is not defined
      </span>
    </p>
  );
}

export default function TechSkillsRunner() {
  const { installed, techDefined, setTechDefined, techOutputs, setTechOutputs } =
    useInstall();

  // First cell: imports TechnicalSkills and defines tech_skills (only if pip
  // was installed). Follow-up cells only work once tech_skills is defined.
  const runFirst = (category: string) => {
    if (installed) setTechDefined(true);
    setTechOutputs((prev) => ({
      ...prev,
      [category]: installed ? "ok" : "error",
    }));
  };

  const runFollow = (category: string) => {
    setTechOutputs((prev) => ({
      ...prev,
      [category]: techDefined ? "ok" : "error",
    }));
  };

  return (
    <section id="skills" className="mt-20 space-y-6">
      {SKILLS.map((group, idx) => {
        const isFirst = idx === 0;
        const output = techOutputs[group.category];
        return (
          <div key={group.category}>
            {/* Run button — above the box, right-aligned */}
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() =>
                  isFirst ? runFirst(group.category) : runFollow(group.category)
                }
                className="rounded border border-border px-3 py-1 text-sm text-[#dddddd] transition-colors hover:border-[#4fc9af]"
              >
                ▶ Run
              </button>
            </div>
            <div className="rounded border border-border bg-surface">
            {/* read-only code — scrolls horizontally instead of wrapping */}
            <div className="overflow-x-auto px-4 py-3">
              <code className="block select-none whitespace-nowrap text-sm leading-relaxed">
                {isFirst && (
                  <>
                    <span className="block">
                      <span className="text-[#c586c0]">from </span>
                      <span className="text-[#4fc9af]">stevenlu0830</span>
                      <span className="text-[#c586c0]"> import </span>
                      <span className="text-[#4fc9af]">TechnicalSkills</span>
                    </span>
                    <span className="block">&nbsp;</span>
                    <span className="block">
                      <span className="text-[#9ddcff]">tech_skills</span>
                      <span className="text-[#dddddd]"> = </span>
                      <span className="text-[#4fc9af]">TechnicalSkills</span>
                      <span className="text-[#ffd800]">()</span>
                    </span>
                  </>
                )}
                {idx === 1 && (
                  <span className="block text-[#6a9955]">
                    # Run the code box above before running the following three
                    code boxes
                  </span>
                )}
                <span className="block">
                  <span className="text-[#9ddcff]">tech_skills</span>
                  <span className="text-[#dddddd]">.</span>
                  <span className="text-[#dcdcaa]">display</span>
                  <span className="text-[#ffd800]">(</span>
                  <span className="text-[#dea893]">
                    &apos;{group.category}&apos;
                  </span>
                  <span className="text-[#ffd800]">)</span>
                </span>
              </code>
            </div>

            {output && (
              <div className="overflow-x-auto border-t border-border px-4 py-3 text-sm leading-relaxed">
                {output === "ok" ? (
                  <SkillListOutput items={group.items} />
                ) : (
                  <ErrorLine name={isFirst ? "TechnicalSkills" : "tech_skills"} />
                )}
              </div>
            )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
