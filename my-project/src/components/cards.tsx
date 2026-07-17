import Link from "next/link";
import type { Job } from "@/data/experience";
import type { Project } from "@/data/projects";
import type { Certification } from "@/data/certifications";
import type { Volunteering } from "@/data/volunteering";

const CARD_BASE =
  "group block rounded border border-border bg-surface p-5 transition-colors hover:border-[#dcdcaa]";

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="shrink-0 text-muted transition-transform group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded border border-border bg-background px-2 py-0.5 text-xs text-muted">
      {label}
    </span>
  );
}

// Mobile-only "View All" button shown below a truncated card list.
export function ViewAllButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded border border-border bg-surface px-5 py-3 text-center text-sm text-[#dcdcaa] transition-colors hover:border-[#dcdcaa] sm:hidden"
    >
      {label} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function ExperienceCard({ job }: { job: Job }) {
  return (
    <Link href={`/experience/${job.slug}`} className={CARD_BASE}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold text-[#dcdcaa]">{job.title}</h3>
        <Arrow />
      </div>
      <p className="text-[#9ddcff]">{job.org}</p>
      <p className="text-sm text-[#9ddcff]">{job.meta}</p>
    </Link>
  );
}

export function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className={`${CARD_BASE} ${className}`}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold text-[#dcdcaa]">{project.name}</h3>
        <Arrow />
      </div>
      <p className="mt-1 text-sm text-[#9ddcff]">{project.dates}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.skills.map((s) => (
          <SkillTag key={s} label={s} />
        ))}
      </div>
    </Link>
  );
}

export function CertificationCard({
  cert,
  className = "",
}: {
  cert: Certification;
  className?: string;
}) {
  return (
    <Link
      href={`/certifications/${cert.slug}`}
      className={`${CARD_BASE} ${className}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold text-[#dcdcaa]">{cert.name}</h3>
        <Arrow />
      </div>
      <p className="text-[#9ddcff]">{cert.org}</p>
      <p className="text-sm text-[#9ddcff]">{cert.meta}</p>
    </Link>
  );
}

export function VolunteeringCard({
  role,
  className = "",
}: {
  role: Volunteering;
  className?: string;
}) {
  return (
    <Link
      href={`/volunteering/${role.slug}`}
      className={`${CARD_BASE} ${className}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold text-[#dcdcaa]">{role.title}</h3>
        <Arrow />
      </div>
      <p className="text-[#9ddcff]">{role.org}</p>
      <p className="text-sm text-[#9ddcff]">{role.meta}</p>
    </Link>
  );
}
