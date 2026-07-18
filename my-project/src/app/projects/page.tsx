import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import { ProjectCard } from "@/components/cards";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = { title: "All Projects · Steven Lu" };

export default function AllProjectsPage() {
  return (
    <div>
      <BackButton fallback="/#projects" label="Back to home" />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-bold text-[var(--fn)]">All Projects</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
