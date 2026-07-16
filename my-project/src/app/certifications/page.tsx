import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import { CertificationCard } from "@/components/cards";
import { CERTIFICATIONS } from "@/data/certifications";

export const metadata: Metadata = { title: "All Certifications · Steven Lu" };

export default function AllCertificationsPage() {
  return (
    <div>
      <BackButton fallback="/#certifications" label="Back to home" />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-bold text-[#dcdcaa]">All Certifications</h1>
        <div className="mt-8 space-y-6">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.slug} cert={cert} />
          ))}
        </div>
      </main>
    </div>
  );
}
