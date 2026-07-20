export type Contact = {
  type: string;
  href: string;
  text: string;
  icon: string;
  external: boolean;
  invert?: boolean;
  // Alternate icon to use in light mode (e.g. a dark GitHub logo).
  lightIcon?: string;
};

export const CONTACTS: Contact[] = [
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
    lightIcon: "/contact-icons/github-forlight.png",
  },
];
