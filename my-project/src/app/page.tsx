const NAV_ITEMS = [
  { label: "Home", href: "#home" },
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

const EXPERIENCE = [
  {
    title: "Software Engineer",
    org: "Fano (Fano Labs) · Co-op",
    meta: "Jun 2026 – Present · Hong Kong SAR · Hybrid",
    bullets: [],
  },
  {
    title: "Artificial Intelligence Engineer",
    org: "Dyna.Ai · Internship",
    meta: "Jun 2025 – Jul 2025 · Hong Kong SAR · On-site",
    bullets: [
      "Led the integration of LLMs into business processes such as credit card marketing and HR recruitment to streamline workflows, enable automation and reduce human effort.",
      "Compared and analysed the performance of AI agent studios using Dyna's LLM-based AI Agent Builder Platform, leveraging knowledge management, knowledge space, and character configuration to evaluate effectiveness and optimize outcomes.",
      "Collaborated with a banking client to gather, track, and regularly refine user requirements, ensuring alignment between business needs and AI solution design.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Film Industry Research",
    dates: "Jan 2026 – Apr 2026",
    context: "UBC CPSC-368 Course Project",
    description:
      "As the film industry involves complex interactions between many stakeholders such as actors, film producers and casting directors, this drives us to study how structural and creative factors in filmmaking influence performance outcomes, specifically in movie ratings and career progression. It moves beyond subjective opinion and explores whether measurable relationships exist between industry structure and success indicators.",
    bullets: [
      "Analysed the impact of film production teams on movie ratings and career outcomes across three genres using MongoDB queries and linear regression models",
      "Integrated datasets from IMDb, TMDb and MovieLens to construct a comprehensive dataset for analysis",
      "Pre-processed data by handling missing values and reducing dataset size to improve processing efficiency",
    ],
    skills: ["Matplotlib", "PyMongo", "MongoDB", "Linear Regression"],
  },
  {
    name: "UBC Grade Calculator",
    dates: "Jan 2026",
    context: "nwHacks 2026 Hackathon Project",
    description:
      "Lots of grade calculators on the web are too simple and miss the subtle breakdown of course grades, such as the contribution of a single assignment or a single phase of a course project. UBC Grade Calculator is a web application vibe-coded with Lovable AI that simplifies the grade calculation process with user-friendly interfaces and drop/downweighting grade settings — the app calculates the final grades for you.",
    bullets: [
      "Conceptualized and rapidly prototyped a comprehensive web application during nwHacks 2026, utilizing ChatGPT for feature ideation and Lovable AI for rapid code generation and deployment.",
      "Engineered intuitive user interfaces that simplify complex grading calculations, allowing students to dynamically track assignment breakdowns, project phases, and overall course progress.",
      "Implemented advanced grade-tracking logic, including customized settings for dropping or downweighting the lowest grades, replacing manual and complex spreadsheet formulas with a seamless, automated tool.",
    ],
    skills: ["Lovable", "Vibe Coding"],
  },
  {
    name: "UBC Section Insights",
    dates: "Sep 2025 – Dec 2025",
    context: "UBC CPSC-310 Course Project",
    description:
      "A full-stack project that allows users to gain insights into UBC courses. Users can upload course datasets stored in the backend, delete datasets, and view insights such as Highest Averages, Most Fails and Instructor Effectiveness — useful for UBC students when selecting courses.",
    bullets: [
      "Developed a full-stack web application to analyze UBC course, department, and instructor data using custom query functionality",
      "Designed and implemented an interactive UI enabling users to upload, manage, and query datasets efficiently",
      "Built a robust backend with Express.js and Node.js to handle data processing and query execution",
      "Achieved 99% line coverage by writing over 220 tests using the Chai testing framework",
    ],
    skills: ["Full-Stack Development", "Node.js", "Express.js", "Chai"],
  },
  {
    name: "Umbra, by Avalon Games",
    dates: "Oct 2024 – Apr 2025",
    context: "UBC Game Development Club Group Project",
    description:
      '"As a kid troubled by nightmare… traverse through your old home in your dreamscape, familiar but now swarmed with monsters, and defeat your inner demons one room at a time." Umbra is a 3D RPG adventure game made with Godot Engine that focuses on shadow mechanics. It was awarded best graphics out of 16 games in the 2025 year-end showcase!',
    bullets: [
      "Developed a 3D real-player adventure game in a team using Godot Engine with a focus on shadow mechanics",
      "Improved user experience by adding features such as changing the background music when the level changes and stopping the music when the game pauses, implemented with GD Script",
      "Maintained stability by fixing bugs related to audio and animations to prevent game crashes",
      "Collaborated with the art teams and the writing team to create a new level and add 8 elements to the level",
    ],
    skills: ["GitHub", "Godot", "GD Script"],
  },
  {
    name: "Nest Finder Web Application",
    dates: "Jan 2025",
    context: "nwHacks 2025 Group Project",
    description:
      "Nest Finder is a centralised web application for UBC students to search for houses in Vancouver. Instead of visiting multiple websites, we used software such as Facebook Marketplace Scraper and Kijiji to collect data so that users can compare prices and areas of different houses in just one application.",
    bullets: [
      "Created the Nest Finder web application using HTML and CSS that acts as a centralized platform for searching houses",
      "Enabled the log-in feature using JavaScript to authenticate a user before the user accesses the main website",
      "Designed the user interface by drawing the layout of different pages and creating the transitions between them using Figma",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    name: "Homework Tracking Desktop Application",
    dates: "Sep 2024 – Dec 2024",
    context: "UBC CPSC-210 Course Project",
    description:
      "A desktop application developed in both console-based and Graphical User Interface (GUI) versions that helps you keep track of assignments. You may add an assignment to the unfinished assignments list, remove an assignment, finish an assignment, and more. With the help of JSON files, you can save your progress and reload all information when you recompile the program.",
    bullets: [
      "Developed an assignment tracking desktop application that allows users to add unlimited assignments to the list of unfinished assignments and record their starting time, with 8 more user stories.",
      "Followed the test-driven development process and implemented the console-based version in Java, with JSON files that let users store and load all information about their assignment lists.",
      "Wrote 24 tests using the JUnit framework covering 100% of the code to ensure the application is bug-free.",
      "Developed a GUI version using Java Swing including interactive buttons, icons for visualisation, and warning messages that help maintain the robustness of the application.",
    ],
    skills: ["Java", "Java Swing", "JUnit", "JSON"],
  },
  {
    name: "Heart Disease Prediction",
    dates: "May 2024 – Jun 2024",
    context: "UBC DSCI-100 Course Project",
    description:
      "Used nearly 1200 heart disease records from the UCI website to wrangle, analyze and visualize data. Developed a model to predict levels of heart disease based on factors such as age, blood pressure and maximum heart rate, and evaluated the performance of the model in terms of accuracy, precision and recall.",
    bullets: [
      "Analyzed more than 1200 heart disease records from the UCI Repository using the R language and its tidyverse package",
      "Wrangled data into a fit-for-purpose format and visualized selected data for the purpose of data analysis",
      "Used cross-validation to choose a suitable number of neighbors and the K-nearest neighbors model to predict levels of heart disease based on 13 factors including blood pressure and maximum heart rate",
      "Evaluated the performance of the model by finding its accuracy and calculating precision and recall",
    ],
    skills: ["Matplotlib", "tidyverse", "tidymodels", "R", "K-Nearest Neighbors"],
  },
  {
    name: '"yap" — Social Media App Design',
    dates: "Jun 2024",
    context: "Dream Launch Startup Hackathon @ DreamLinked Group Project",
    description:
      "A fresh take on social media, Yap asks university students exciting new questions every week, generated by GPT-4, bringing fun and engagement back to social platforms.",
    bullets: [
      'Designed a social media app called "yap" in a team during the hackathon that asks exciting questions every week',
      "Brainstormed ideas about bringing fun and engagement by connecting university students together via the app",
      "Created a user-friendly and visually appealing interface using Adobe XD",
    ],
    skills: ["User Interface Design", "Teamwork", "Adobe XD"],
  },
  {
    name: "StarList App Design",
    dates: "Oct 2024",
    context: "HelloHacks (organised by UBC BizTech)",
    description:
      "StarList is an app that allows users to connect, share opinions and express their passion for specific songs, artists and moments in music.",
    bullets: [
      "Designed the StarList app in a team, enabling users to connect and share their passion for music",
      "Created a backend simulation of the app using Python and a GitHub repository",
      'Created a frontend simulation of the app using Figma, exploring the UI with the "workflow" feature to organize nearly 10 elements',
    ],
    skills: ["Python", "Figma", "GitHub", "Product Management"],
  },
  {
    name: "E-Waste Management: China vs India",
    dates: "May 2024 – Jun 2024",
    context: "Research paper — UBC WRDS 150(A)",
    description:
      "A comparative case study analysis of e-waste management in China and India.",
    bullets: [
      "Researched e-waste management in China and India as case studies from a total of 25 primary and secondary sources",
      "Compared and discussed how China and India managed e-waste in different ways with the aid of a table and a diagram",
      "Created a visually appealing infographic using Canva to briefly describe the research situation and findings",
    ],
    skills: ["Canva", "Research Skills", "Case Studies", "Proposal Writing"],
  },
];

const SKILLS: { category: string; items: string }[] = [
  {
    category: "Languages",
    items:
      "Python, JavaScript, TypeScript, HTML/CSS, Java, R, C++, C, GD Script",
  },
  {
    category: "Developer & Design Tools",
    items: "VS Code, GitHub, JupyterLab, IntelliJ IDEA, Godot Engine, Figma",
  },
  {
    category: "Frameworks & Libraries",
    items:
      "sklearn, pandas, numpy, matplotlib, pymongo, Express.js, Node.js, Chai, tidyverse, tidymodels, JUnit, Swing",
  },
  {
    category: "Database Management Systems",
    items: "MongoDB, Oracle",
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

const VOLUNTEERING = [
  {
    title: "Event Captain",
    org: "HK House",
    meta: "Feb 2025 – May 2026 · Arts and Culture",
    bullets: [
      "Led volunteers of the HK House organization by briefing them on their tasks during the event day",
      "Managed on-site operations for a high-attendance event with over 1000 participants to ensure events run smoothly",
      "Supported coordination between the volunteers and the event planning team to ensure effective communication",
      "Addressed volunteers' questions regarding their tasks to make them clear on their responsibilities",
    ],
  },
  {
    title: "Game Helper",
    org: "HK House",
    meta: "May 2024 – Present · Arts and Culture",
    bullets: [
      "Promoted Hong Kong culture by introducing cultural games to over 1000 participants across the world",
      "Enhanced participants' experience by playing cultural games with them",
      "Created a welcoming environment to let participants enjoy and immerse in a variety of cultural games",
      "Offered hints, tips, and strategies to help participants advance in cultural games and solve riddles",
    ],
  },
  {
    title: "Student Volunteer (Science RXN)",
    org: "Science Undergraduate Society of UBC Vancouver",
    meta: "Sep 2025 · Science and Technology",
    bullets: [
      "Created exciting and meaningful experiences for first-year science students to foster engagement and involvement in the science community",
      "Built and promoted a respectful, inclusive, and welcoming environment for all students",
      "Assisted the station coordinator with event setup and cleanup to ensure smooth operations and an organized environment",
    ],
  },
  {
    title: "Vice Chairman (Transport and Logistics Club)",
    org: "Chan Sui Ki (La Salle) College",
    meta: "Sep 2020 – Aug 2022 · Science and Technology",
    bullets: [
      "Worked with internal members to plan and organize events such as movie sharing and trivia quizzes",
      "Participated in the preparation and running of the club's weekly meetings by creating and keeping track of agendas",
      "Discussed the feasibility of organizing events based on factors such as time, budget and manpower",
    ],
  },
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
        <span aria-hidden="true" className="text-muted">
          ##{" "}
        </span>
        {title}
      </h2>
      <div className="mt-6 space-y-8">{children}</div>
    </section>
  );
}

function Entry({
  title,
  org,
  meta,
  bullets,
}: {
  title: string;
  org: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <div className="border-l-2 border-border pl-5">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-accent">{org}</p>
      <p className="text-sm text-muted">{meta}</p>
      {bullets.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm leading-relaxed">
          {bullets.map((b) => (
            <li key={b}>
              <span aria-hidden="true" className="text-accent">
                -{" "}
              </span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded border border-border bg-background px-2 py-0.5 text-xs text-muted">
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="rounded border border-border bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-lg font-bold">{project.name}</h3>
        <p className="text-sm text-muted">{project.dates}</p>
      </div>
      <p className="text-sm text-accent">{project.context}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed">
        {project.bullets.map((b) => (
          <li key={b}>
            <span aria-hidden="true" className="text-accent">
              -{" "}
            </span>
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.skills.map((s) => (
          <SkillTag key={s} label={s} />
        ))}
      </div>
    </div>
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
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl flex-wrap gap-x-5 gap-y-1 px-6 py-3 text-sm">
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

      <main className="mx-auto max-w-4xl px-6 pb-24">
        {/* Home */}
        <section id="home" className="pt-24 text-center">
          <p className="text-accent">$ whoami</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">Steven Lu</h1>
          <p className="mt-4 text-muted">
            Computer Science (AI Option) @ The University of British Columbia
          </p>
          <p className="mt-2 text-sm text-muted">
            AI · Machine Learning · Software Engineering · Data Science · Web
            Development
          </p>
        </section>

        {/* About */}
        <Section id="about" title="About">
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
        <Section id="experience" title="Experience">
          {EXPERIENCE.map((e) => (
            <Entry key={e.title} {...e} />
          ))}
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </Section>

        {/* Technical Skills */}
        <Section id="skills" title="Technical Skills">
          <div className="space-y-4">
            {SKILLS.map((s) => (
              <div key={s.category}>
                <h3 className="font-bold">{s.category}</h3>
                <p className="mt-1 text-sm text-muted">{s.items}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <Entry
            title="The University of British Columbia"
            org="Bachelor of Science (BSc), Computer Science"
            meta="Sep 2023 – Apr 2028 · GPA: 3.8"
            bullets={[
              "Activities and societies: Dream Launch Startup Hackathon, HelloHacks, UBC Game Dev Project Team, nwHacks",
              "Originally from Arts, transferred to Science in June 2024",
            ]}
          />
          <Entry
            title="Chan Sui Ki (La Salle) College"
            org="Secondary"
            meta="Sep 2017 – Aug 2023"
            bullets={[
              "Activities and societies: Transport and Logistics Club, Mathematics Gifted Programme",
            ]}
          />
        </Section>

        {/* Relevant Courses */}
        <Section id="courses" title="Relevant Courses">
          <ul className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {COURSES.map((c) => (
              <li key={c.code} className="flex gap-3">
                <span className="shrink-0 text-accent">{c.code}</span>
                <span className="text-muted">{c.name}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Certifications */}
        <Section id="certifications" title="Certifications">
          <Entry
            title="Google AI Professional Certificate"
            org="Coursera"
            meta="Issued Jun 2026"
            bullets={["Google Gemini and Google AI Studio"]}
          />
          <Entry
            title="Mathematics Gifted Programme"
            org="The Hong Kong Polytechnic University"
            meta="Issued Aug 2021"
            bullets={["Mathematics"]}
          />
        </Section>

        {/* Volunteering */}
        <Section id="volunteering" title="Volunteering">
          {VOLUNTEERING.map((v) => (
            <Entry key={v.title} {...v} />
          ))}
        </Section>

        {/* Fun Facts */}
        <Section id="fun-facts" title="Fun Facts">
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
          <SongList title="Favourite Canto-pop" songs={SONGS_CANTOPOP} />
          <SongList
            title="Favourite Songs (other than Canto-pop)"
            songs={SONGS_OTHER}
          />
        </Section>

        {/* Contacts — TODO: replace the placeholder links below with your real
            LinkedIn URL, email address, and GitHub username before publishing */}
        <Section id="contacts" title="Contacts — Let's connect!">
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-accent">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-accent"
              >
                linkedin.com/in/your-profile
              </a>
            </li>
            <li>
              <span className="text-accent">Email: </span>
              <a
                href="mailto:your.email@example.com"
                className="underline decoration-border underline-offset-4 hover:text-accent"
              >
                your.email@example.com
              </a>
            </li>
            <li>
              <span className="text-accent">GitHub: </span>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-accent"
              >
                github.com/your-username
              </a>
            </li>
          </ul>
        </Section>

      </main>

      <footer className="mx-auto max-w-4xl border-t border-border px-6 py-6 text-center text-xs text-muted">
        <p>© 2026 Steven Lu · Built with Next.js</p>
      </footer>
    </div>
  );
}
