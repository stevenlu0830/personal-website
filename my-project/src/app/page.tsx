import Image from "next/image";
import avatar from "../../icons/avatar.jpg";
import SiteNav from "@/components/SiteNav";
import PipInstall from "@/components/PipInstall";
import AboutRunner from "@/components/AboutRunner";
import ExperienceRunner from "@/components/ExperienceRunner";
import ProjectsRunner from "@/components/ProjectsRunner";
import TechSkillsRunner from "@/components/TechSkillsRunner";
import EducationRunner from "@/components/EducationRunner";
import CoursesRunner from "@/components/CoursesRunner";
import CertificationsRunner from "@/components/CertificationsRunner";
import VolunteeringRunner from "@/components/VolunteeringRunner";
import FunFactsRunner from "@/components/FunFactsRunner";

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
        <EducationRunner />

        {/* Relevant Courses */}
        <CoursesRunner />

        {/* Certifications */}
        <CertificationsRunner />

        {/* Volunteering */}
        <VolunteeringRunner />

        {/* Fun Facts */}
        <FunFactsRunner />

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
