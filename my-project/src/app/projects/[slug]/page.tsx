import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import { PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return { title: project ? `${project.name} · Steven Lu` : "Steven Lu" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div>
      <BackButton fallback="/#projects" label="Back to Projects" />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-bold text-[var(--fn)]">{project.name}</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">{project.dates}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((s) => (
            <span
              key={s}
              className="inline-block rounded border border-border bg-surface px-2 py-0.5 text-xs text-[var(--muted)]"
            >
              {s}
            </span>
          ))}
        </div>

        <section className="mt-10">
          <div className="mt-4 space-y-4 leading-relaxed text-[var(--foreground)]">
            <p>{project.context}</p>
            {(Array.isArray(project.description)
              ? project.description
              : [project.description]
            ).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="space-y-3">
              {project.bullets.map((b) => (
                <li key={b}>
                  <span aria-hidden="true">- </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {((project.links && project.links.length > 0) ||
          (project.attachments && project.attachments.length > 0)) && (
          <section className="mt-10 space-y-10">
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded border border-border bg-surface px-3 py-1 text-sm text-[var(--muted)] transition-colors hover:border-[var(--fn)]"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            )}
            {project.attachments?.map((attachment) => (
              <figure key={attachment.src}>
                <figcaption className="mb-2 text-sm">
                  <a
                    href={attachment.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted)] transition-colors hover:text-[var(--fn)]"
                  >
                    {attachment.label} <span aria-hidden="true">↗</span>
                  </a>
                </figcaption>
                {attachment.kind === "pdf" ? (
                  <iframe
                    src={attachment.src}
                    title={attachment.label}
                    className="h-[36rem] w-full rounded border border-border"
                  />
                ) : (
                  <Image
                    src={attachment.src}
                    alt={attachment.label}
                    width={attachment.width}
                    height={attachment.height}
                    className="h-auto w-full max-w-2xl rounded border border-border"
                  />
                )}
              </figure>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
