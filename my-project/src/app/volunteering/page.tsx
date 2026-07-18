import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import { VolunteeringCard } from "@/components/cards";
import { VOLUNTEERING } from "@/data/volunteering";

export const metadata: Metadata = { title: "All Volunteering · Steven Lu" };

export default function AllVolunteeringPage() {
  return (
    <div>
      <BackButton fallback="/#volunteering" label="Back to home" />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-bold text-[var(--fn)]">All Volunteering</h1>
        <div className="mt-8 space-y-6">
          {VOLUNTEERING.map((role) => (
            <VolunteeringCard key={role.slug} role={role} />
          ))}
        </div>
      </main>
    </div>
  );
}
