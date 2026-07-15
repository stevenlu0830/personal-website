import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import { VOLUNTEERING } from "@/data/volunteering";

export function generateStaticParams() {
  return VOLUNTEERING.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = VOLUNTEERING.find((v) => v.slug === slug);
  return { title: role ? `${role.title} · Steven Lu` : "Steven Lu" };
}

export default async function VolunteeringPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = VOLUNTEERING.find((v) => v.slug === slug);
  if (!role) notFound();

  return (
    <div>
      <BackButton fallback="/#volunteering" label="Back to Volunteering" />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-bold text-[#dcdcaa]">{role.title}</h1>
        <p className="mt-3 text-[#9ddcff]">{role.org}</p>
        <p className="mt-1 text-sm text-[#9ddcff]">{role.meta}</p>

        {role.bullets.length > 0 && (
          <section className="mt-10">
            <ul className="mt-4 space-y-3 leading-relaxed text-[#dea893]">
              {role.bullets.map((b) => (
                <li key={b}>
                  <span aria-hidden="true" className="text-[#dea893]">
                    -{" "}
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
