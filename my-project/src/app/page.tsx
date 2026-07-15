import Image from "next/image";
import Link from "next/link";
import avatar from "../../icons/avatar.jpg";
import { EXPERIENCE } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { CERTIFICATIONS } from "@/data/certifications";
import { VOLUNTEERING } from "@/data/volunteering";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Relevant Courses", href: "#courses" },
  { label: "Certifications", href: "#certifications" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Fun Facts", href: "#fun-facts" },
  { label: "Contacts", href: "#contacts" },
];

type Skill = { name: string; icon: string; invert?: boolean };

const SKILLS: { category: string; items: Skill[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "/programming-icons/python.svg.webp" },
      { name: "JavaScript", icon: "/programming-icons/javascript.png" },
      { name: "TypeScript", icon: "/programming-icons/typescript.webp" },
      { name: "HTML", icon: "/programming-icons/HTML.webp" },
      { name: "CSS", icon: "/programming-icons/css.webp" },
      { name: "Java", icon: "/programming-icons/java.png" },
      { name: "R", icon: "/programming-icons/r.webp" },
      { name: "C++", icon: "/programming-icons/cpp.webp" },
      { name: "C", icon: "/programming-icons/c.jpg" },
      { name: "GD Script", icon: "/programming-icons/gdscript.webp" },
    ],
  },
  {
    category: "Developer & Design Tools",
    items: [
      { name: "VS Code", icon: "/programming-icons/vscode.webp" },
      { name: "GitHub", icon: "/programming-icons/github.svg", invert: true },
      { name: "JupyterLab", icon: "/programming-icons/jupyterlab.webp" },
      { name: "IntelliJ IDEA", icon: "/programming-icons/intellijidea.webp" },
      { name: "Godot Engine", icon: "/programming-icons/godotengine.webp" },
      { name: "Figma", icon: "/programming-icons/figma.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "sklearn", icon: "/programming-icons/sklearn.svg" },
      { name: "pandas", icon: "/programming-icons/pandas.webp" },
      { name: "numpy", icon: "/programming-icons/numpy.jpg" },
      { name: "matplotlib", icon: "/programming-icons/matplotlib.webp" },
      { name: "pymongo", icon: "/programming-icons/pymongo.png" },
      { name: "Express.js", icon: "/programming-icons/express-js.png" },
      { name: "Node.js", icon: "/programming-icons/node-js.png" },
      { name: "Chai", icon: "/programming-icons/chai.png" },
      { name: "tidyverse", icon: "/programming-icons/tidyverse.png" },
      { name: "tidymodels", icon: "/programming-icons/tidymodels.png" },
      { name: "JUnit", icon: "/programming-icons/junit.png" },
      { name: "Swing", icon: "/programming-icons/swing.png" },
    ],
  },
  {
    category: "Database Management Systems",
    items: [
      { name: "MongoDB", icon: "/programming-icons/mongodb.webp" },
      { name: "Oracle", icon: "/programming-icons/oracle.jpeg" },
    ],
  },
];

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


function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded border border-border bg-background px-2 py-0.5 text-xs text-muted">
      {label}
    </span>
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
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm">
        {songs.map((s) => (
          <li key={s.href}>
            <span aria-hidden="true" className="text-accent">
              ♪{" "}
            </span>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 hover:text-accent"
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
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur lg:fixed lg:inset-y-0 lg:left-0 lg:w-56 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:bg-background lg:backdrop-blur-none">
        <nav className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-5 gap-y-1 px-6 py-3 text-sm lg:mx-0 lg:max-w-none lg:flex-col lg:items-start lg:gap-y-3 lg:py-10">
          <a href="#home" className="shrink-0">
            <Image
              src={avatar}
              alt="Home"
              className="h-8 w-8 rounded-full border border-border object-cover transition-colors hover:border-accent lg:h-14 lg:w-14"
            />
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

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
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#dcdcaa]">
            Steven Lu
          </h1>
          <p className="mt-4 text-[#dea893]">
            Computer Science (AI Option) @ The University of British Columbia
          </p>
          <p className="mt-2 text-sm text-[#dea893]">
            AI · Machine Learning · Software Engineering · Data Science · Web
            Development
          </p>
        </section>

        {/* About */}
        <Section id="about" title="🤓 About">
          <p className="leading-relaxed">
            Hi, I&apos;m Steven! I am a third-year Computer Science student at
            the University of British Columbia, specializing in the AI Option.
            I have a strong interest in artificial intelligence, machine
            learning, software engineering, data science, and web development,
            and I am currently seeking internship and co-op opportunities to
            apply my skills.
          </p>
          <p className="leading-relaxed">
            Outside of my studies, I enjoy playing badminton, bowling,
            listening to music, singing and travelling. I&apos;m always open to
            new opportunities and networking — feel free to reach out and
            connect!
          </p>
        </Section>

        {/* Experience */}
        <Section id="experience" title="💻 Experience">
          {EXPERIENCE.map((job) => (
            <Link
              key={job.slug}
              href={`/experience/${job.slug}`}
              className="group block rounded border border-border bg-surface p-5 transition-colors hover:border-[#dcdcaa]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-bold text-[#dcdcaa]">
                  {job.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="text-[#9ddcff]">{job.org}</p>
              <p className="text-sm text-[#9ddcff]">{job.meta}</p>
            </Link>
          ))}
        </Section>

        {/* Projects */}
        <Section id="projects" title="👨🏻‍💻 Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block rounded border border-border bg-surface p-5 transition-colors hover:border-[#dcdcaa]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#dcdcaa]">{p.name}</h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#9ddcff]">{p.dates}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <SkillTag key={s} label={s} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* Technical Skills */}
        <Section id="skills" title="🦾 Technical Skills">
          <div className="space-y-8">
            {SKILLS.map((s) => (
              <div key={s.category}>
                <h3 className="font-bold text-[#dcdcaa]">{s.category}</h3>
                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
                  {s.items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      <Image
                        src={skill.icon}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                        className={`h-5 w-5 shrink-0 rounded-sm object-contain${skill.invert ? " invert" : ""}`}
                      />
                      <span className="text-sm text-muted">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

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
          {CERTIFICATIONS.map((cert) => (
            <Link
              key={cert.slug}
              href={`/certifications/${cert.slug}`}
              className="group block rounded border border-border bg-surface p-5 transition-colors hover:border-[#dcdcaa]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-bold text-[#dcdcaa]">
                  {cert.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="text-[#9ddcff]">{cert.org}</p>
              <p className="text-sm text-[#9ddcff]">{cert.meta}</p>
            </Link>
          ))}
        </Section>

        {/* Volunteering */}
        <Section id="volunteering" title="💁🏻‍♂️ Volunteering">
          {VOLUNTEERING.map((role) => (
            <Link
              key={role.slug}
              href={`/volunteering/${role.slug}`}
              className="group block rounded border border-border bg-surface p-5 transition-colors hover:border-[#dcdcaa]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-bold text-[#dcdcaa]">
                  {role.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="text-[#9ddcff]">{role.org}</p>
              <p className="text-sm text-[#9ddcff]">{role.meta}</p>
            </Link>
          ))}
        </Section>

        {/* Fun Facts */}
        <Section id="fun-facts" title="🤡 Fun Facts">
          <div>
            <h3 className="font-bold">Bucket-list Traveling Destinations</h3>
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
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-accent">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/stevenlu0830/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-accent"
              >
                linkedin.com/in/stevenlu0830
              </a>
            </li>
            <li>
              <span className="text-accent">Email: </span>
              <a
                href="mailto:stevenlu0830@gmail.com"
                className="underline decoration-border underline-offset-4 hover:text-accent"
              >
                stevenlu0830@gmail.com
              </a>
            </li>
            <li>
              <span className="text-accent">GitHub: </span>
              <a
                href="https://github.com/stevenlu0830"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-accent"
              >
                github.com/stevenlu0830
              </a>
            </li>
          </ul>
        </Section>

        </main>

        <footer className="mx-auto max-w-4xl border-t border-border px-6 py-6 text-center text-xs text-muted">
          <p>© 2026 Steven Lu · Built with Next.js</p>
        </footer>
      </div>
    </div>
  );
}
