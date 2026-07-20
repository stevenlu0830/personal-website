"use client";

import Image from "next/image";
import { useTheme } from "./ThemeContext";
import { CONTACTS } from "@/data/contacts";

export default function ContactIcons() {
  const { theme } = useTheme();

  return (
    <div className="flex gap-5">
      {CONTACTS.map((c) => {
        // In light mode, prefer a light-specific icon (and skip the invert
        // that was only there to whiten a dark logo for the dark background).
        const useLight = theme === "light" && !!c.lightIcon;
        const src = useLight ? c.lightIcon! : c.icon;
        const invert = !useLight && c.invert;
        return (
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
              src={src}
              alt={c.type}
              width={32}
              height={32}
              unoptimized
              className={`h-16 w-16 object-contain${invert ? " invert" : ""}`}
            />
          </a>
        );
      })}
    </div>
  );
}
