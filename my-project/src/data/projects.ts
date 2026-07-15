export type ProjectLink = { label: string; href: string };

export type ProjectAttachment =
  | { kind: "pdf"; label: string; src: string }
  | {
      kind: "image";
      label: string;
      src: string;
      width: number;
      height: number;
    };

export type Project = {
  slug: string;
  name: string;
  dates: string;
  context: string;
  /** A single paragraph, or an array of paragraphs */
  description: string | string[];
  bullets: string[];
  skills: string[];
  links?: ProjectLink[];
  attachments?: ProjectAttachment[];
};

export const PROJECTS: Project[] = [
  {
    slug: "film-industry-research",
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
    skills: ["Matplotlib", "PyMongo", "Jupyter Lab", "Scikit-learn", "MongoDB"],
    attachments: [
      {
        kind: "pdf",
        label: "Project Presentation",
        src: "/projects-file-attachments/film-industry-1.pdf",
      },
      {
        kind: "pdf",
        label: "Project Report",
        src: "/projects-file-attachments/film-industry-2.pdf",
      },
    ],
  },
  {
    slug: "ubc-grade-calculator",
    name: "UBC Grade Calculator",
    dates: "Jan 2026",
    context: "nwHacks 2026 Hackathon Project",
    description: [
      "We often used grade calculators on the website to calculate course grades in order to track the progress of our courses so far. However, lots of calculators we found on the website are too simple such that they’ve missed subtle breakdown of course grades such as the contributions to course grade by one single assignment or one single phase of course project.",
      "Perhaps a spreadsheet would help, but you need to create a table, enter the formula to calculate the course grades. For better approximation you also need to take account of dropping or downweighting lowest grades if necessary which makes the formula more complex. UBC Grade Calculator is a web application vibe-coded by Lovable AI to simplify grade calculation process by user-friendly interfaces, buttons and drop/downweighting grade settings, and the app calculates the final grades for you.",
    ],
    bullets: [
      "Conceptualized and rapidly prototyped a comprehensive web application during nwHacks 2026, utilizing ChatGPT for feature ideation and Lovable AI for rapid code generation and deployment.",
      "Engineered intuitive user interfaces that simplify complex grading calculations, allowing students to dynamically track assignment breakdowns, project phases, and overall course progress.",
      "Implemented advanced grade-tracking logic, including customized settings for dropping or downweighting the lowest grades, replacing manual and complex spreadsheet formulas with a seamless, automated tool.",
    ],
    skills: ["Lovable", "Vibe Coding"],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/stevenlu0830/grade-calculator",
      },
    ],
  },
  {
    slug: "ubc-section-insights",
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
    skills: [
      "Full-Stack Development",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Software Engineering",
    ],
    links: [
      {
        label: "Demo Video",
        href: "https://youtu.be/iOwl0U4kJtI",
      },
    ],
  },
  {
    slug: "umbra",
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
    skills: ["GitHub", "Godot", "GD Script", "Game Programming"],
    links: [
      {
        label: "Steam Store Page",
        href: "https://store.steampowered.com/app/3553640/Umbra/",
      },
    ],
    attachments: [
      {
        kind: "image",
        label: "Best Graphics",
        src: "/projects-file-attachments/umbra-by-avalon-games.png",
        width: 1540,
        height: 1504,
      },
    ],
  },
  {
    slug: "nest-finder",
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
    skills: ["HTML", "CSS", "JavaScript", "Figma", "Front-End Development"],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/anthonyl8/nest-finder",
      },
    ],
  },
  {
    slug: "homework-tracking",
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
    skills: [
      "Java",
      "Java Swing",
      "JUnit",
      "Test-Driven Development",
      "User Stories",
      "VS Code",
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/stevenlu0830/Project-2024W1-CPSC-210",
      },
    ],
  },
  {
    slug: "heart-disease-prediction",
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
    skills: ["Matplotlib", "tidyverse", "GitHub", "Jupyter Lab", "R tidymodels"],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/stevenlu0830/dsci-100-2024-s1-project",
      },
    ],
    attachments: [
      {
        kind: "pdf",
        label: "Project Report (PDF)",
        src: "/projects-file-attachments/heart-disease-prediction.pdf",
      },
    ],
  },
  {
    slug: "yap",
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
    links: [
      {
        label: "Event Post",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7205961981890080768/",
      },
    ],
  },
];
