export type Skill = { name: string; icon: string; invert?: boolean };

export const SKILLS: { category: string; items: Skill[] }[] = [
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
