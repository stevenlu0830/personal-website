import Image from "next/image";
import avatar from "../../icons/avatar.jpg";
import SiteNav from "@/components/SiteNav";
import PipInstall from "@/components/PipInstall";
import AboutRunner from "@/components/AboutRunner";
import ExperienceRunner from "@/components/ExperienceRunner";
import ProjectsRunner from "@/components/ProjectsRunner";
import TechSkillsRunner from "@/components/TechSkillsRunner";
import {
  CertificationCard,
  VolunteeringCard,
  ViewAllButton,
} from "@/components/cards";
import { CERTIFICATIONS } from "@/data/certifications";
import { VOLUNTEERING } from "@/data/volunteering";

const COURSES = [
  { code: "CPSC 330", name: "Applied Machine Learning" },
  { code: "CPSC 368", name: "Databases in Data Science" },
  { code: "CPSC 320", name: "Intermediate Algorithm Analysis and Design" },
  { code: "CPSC 322", name: "Introduction to Artificial Intelligence" },
  { code: "CPSC 310", name: "Introduction to Software Engineering" },
  { code: "CPSC 221", name: "Data Structures and Algorithms" },
  { code: "CPSC 213", name: "Introduction to Computer Systems" },
  { code: "CPSC 210", name: "Software Construction" },
  { code: "CPSC 110", name: "Computation, Programs, and Programming" },
  { code: "CPSC 121", name: "Models of Computation" },
];

const SONGS_CANTOPOP = [
  {
    label: "張敬軒 Hins Cheung — 隱形遊樂場 Imaginary Fairground",
    href: "https://www.youtube.com/watch?v=y9ntnHvD4tQ",
  },
  {
    label: "林家謙 Terence Lam — 特倫斯夢遊仙境 Wonderland",
    href: "https://www.youtube.com/watch?v=i2lIeLceOQg",
  },
  {
    label: "MC 張天賦 — 小心地滑 Caution Wet Floor",
    href: "https://www.youtube.com/watch?v=FlsxLlozYdw",
  },
];

const SONGS_OTHER = [
  {
    label: "sombr — back to friends",
    href: "https://www.youtube.com/watch?v=c8zq4kAn_O0",
  },
  {
    label: "The Weeknd — Blinding Lights",
    href: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
  },
  {
    label: "Owl City & Carly Rae Jepsen — Good Time",
    href: "https://www.youtube.com/watch?v=H7HmzwI67ec",
  },
];

const CONTACTS: {
  type: string;
  href: string;
  text: string;
  icon: string;
  external: boolean;
  invert?: boolean;
}[] = [
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/stevenlu0830/",
    text: "linkedin.com/in/stevenlu0830",
    icon: "/contact-icons/linkedin.svg.webp",
    external: true,
  },
  {
    type: "Email",
    href: "mailto:stevenlu0830@gmail.com",
    text: "stevenlu0830@gmail.com",
    icon: "/contact-icons/gmail.svg.webp",
    external: false,
  },
  {
    type: "GitHub",
    href: "https://github.com/stevenlu0830",
    text: "github.com/stevenlu0830",
    icon: "/contact-icons/github.png",
    external: true,
    invert: true,
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-20">
      <h2 className="text-2xl font-bold text-accent">
        {title}
      </h2>
      <div className="mt-6 space-y-8">{children}</div>
    </section>
  );
}


function SongList({
  title,
  songs,
}: {
  title: string;
  songs: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-bold text-[#dcdcaa]">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm">
        {songs.map((s) => (
          <li key={s.href}>
            <span aria-hidden="true" className="text-[#9ddcff]">
              ♪{" "}
            </span>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ddcff] underline decoration-border underline-offset-4 transition-colors hover:text-[#4a90c2]"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <SiteNav />

      <div className="lg:pl-56">
        <main className="mx-auto max-w-4xl px-6 pb-24">
        {/* Home */}
        <section id="home" className="pt-24 text-center">
          <Image
            src={avatar}
            alt=""
            priority
            className="mx-auto h-36 w-36 rounded-full border-2 border-border object-cover"
          />
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#4fc9af]">
            Steven Lu
          </h1>
          <p className="mt-4 text-[#dea893]">
            Computer Science (AI Option) @ The University of British Columbia
          </p>
          <p className="mt-2 text-sm text-[#dea893]">
            AI · Machine Learning · Software Engineering · Data Science · Web
            Development
          </p>
          <PipInstall />
        </section>

        {/* About */}
        <AboutRunner />

        {/* Experience */}
        <ExperienceRunner />

        {/* Projects */}
        <ProjectsRunner />

        {/* Technical Skills */}
        {/* Technical Skills */}
        <TechSkillsRunner />

        {/* Education */}
        <Section id="education" title="📚 Education">
          {[
            {
              school: "The University of British Columbia",
              degree: "Bachelor of Science (BSc), Computer Science",
              years: "Sep 2023 – Apr 2028 · GPA: 3.8",
            },
            {
              school: "Chan Sui Ki (La Salle) College",
              degree: "Secondary",
              years: "Sep 2017 – Aug 2023",
            },
          ].map((edu) => (
            <div key={edu.school} className="border-l-2 border-border pl-5">
              <h3 className="text-lg font-bold text-[#dcdcaa]">{edu.school}</h3>
              <p className="text-[#9ddcff]">{edu.degree}</p>
              <p className="text-sm text-[#9ddcff]">{edu.years}</p>
            </div>
          ))}
        </Section>

        {/* Relevant Courses */}
        <Section id="courses" title="👨🏻‍🏫 Relevant Courses">
          <ul className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {COURSES.map((c) => (
              <li key={c.code} className="flex gap-3">
                <span className="shrink-0 text-[#dcdcaa]">{c.code}</span>
                <span className="text-muted">{c.name}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Certifications */}
        <Section id="certifications" title="🌟 Certifications">
          {CERTIFICATIONS.map((cert, i) => (
            <CertificationCard
              key={cert.slug}
              cert={cert}
              className={i >= 2 ? "max-sm:hidden" : ""}
            />
          ))}
          {CERTIFICATIONS.length > 2 && (
            <ViewAllButton
              href="/certifications"
              label="View All Certifications"
            />
          )}
        </Section>

        {/* Volunteering */}
        <Section id="volunteering" title="💁🏻‍♂️ Volunteering">
          {VOLUNTEERING.map((role, i) => (
            <VolunteeringCard
              key={role.slug}
              role={role}
              className={i >= 2 ? "max-sm:hidden" : ""}
            />
          ))}
          {VOLUNTEERING.length > 2 && (
            <ViewAllButton href="/volunteering" label="View All Volunteering" />
          )}
        </Section>

        {/* Fun Facts */}
        <Section id="fun-facts" title="🤡 Fun Facts">
          <div>
            <h3 className="font-bold text-[#dcdcaa]">
              Bucket-list Traveling Destinations
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {[
                "London @ UK",
                "Montreal @ Canada",
                "Somewhere in Malaysia — haven't decided yet",
                "Turkey",
              ].map((place) => (
                <li key={place}>
                  <span aria-hidden="true">✈ </span>
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <SongList title="Favourite Canto-pop Songs" songs={SONGS_CANTOPOP} />
          <SongList
            title="Favourite Songs (other than Canto-pop)"
            songs={SONGS_OTHER}
          />
        </Section>

        {/* Contacts — TODO: replace the placeholder links below with your real
            LinkedIn URL, email address, and GitHub username before publishing */}
        <Section id="contacts" title="🤝 Contacts — Let's connect!">
          <div className="flex gap-5">
            {CONTACTS.map((c) => (
              <a
                key={c.type}
                href={c.href}
                aria-label={c.type}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src={c.icon}
                  alt={c.type}
                  width={32}
                  height={32}
                  unoptimized
                  className={`h-16 w-16 object-contain${c.invert ? " invert" : ""}`}
                />
              </a>
            ))}
          </div>
          <ul className="space-y-2 text-sm">
            {CONTACTS.map((c) => (
              <li key={c.type}>
                <span className="text-[#dcdcaa]">{c.type}: </span>
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-[#9ddcff] underline decoration-border underline-offset-4 transition-colors hover:text-[#4a90c2]"
                >
                  {c.text}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        </main>

        <footer className="mx-auto max-w-4xl border-t border-border px-6 py-6 text-center text-xs text-[#dea893]">
          <p>© 2026 Steven Lu · Built with Next.js</p>
        </footer>
      </div>
    </div>
  );
}
