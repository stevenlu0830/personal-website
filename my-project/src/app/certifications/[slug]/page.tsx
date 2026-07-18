import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import { CERTIFICATIONS } from "@/data/certifications";

export function generateStaticParams() {
  return CERTIFICATIONS.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cert = CERTIFICATIONS.find((c) => c.slug === slug);
  return { title: cert ? `${cert.name} · Steven Lu` : "Steven Lu" };
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = CERTIFICATIONS.find((c) => c.slug === slug);
  if (!cert) notFound();

  return (
    <div>
      <BackButton fallback="/#certifications" label="Back to Certifications" />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-bold text-[var(--fn)]">{cert.name}</h1>
        <p className="mt-3 text-[var(--muted)]">{cert.org}</p>
        <p className="mt-1 text-sm text-[var(--muted)]">{cert.meta}</p>

        {cert.pdf && (
          <figure className="mt-10">
            <figcaption className="mb-2 text-sm">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--fn)]"
              >
                {cert.name} <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
            <iframe
              src={cert.pdf}
              title={cert.name}
              className="h-[36rem] w-full rounded border border-border"
            />
          </figure>
        )}
      </main>
    </div>
  );
}
