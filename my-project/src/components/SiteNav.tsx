"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import avatar from "../../icons/avatar.jpg";
import { ThemeToggle } from "./ThemeContext";

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

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  // Close the mobile drawer with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const navLinks = (onNavigate?: () => void) => (
    <>
      <a
        href="#home"
        aria-label="Home"
        onClick={onNavigate}
        className="shrink-0"
      >
        <Image
          src={avatar}
          alt="Home"
          className="h-14 w-14 rounded-full border border-border object-cover transition-colors hover:border-accent"
        />
      </a>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="text-[var(--accent)] transition-colors hover:text-[var(--muted)]"
        >
          {item.label}
        </a>
      ))}
      <ThemeToggle />
    </>
  );

  return (
    <>
      {/* Desktop: fixed left sidebar (always visible) */}
      <header className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-10 lg:flex lg:w-56 lg:flex-col lg:overflow-y-auto lg:border-r lg:border-border lg:bg-background">
        <nav className="flex flex-col items-start gap-y-3 px-6 py-10 text-sm">
          {navLinks()}
        </nav>
      </header>

      {/* Mobile: menu button (top-left corner) */}
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile: sliding drawer + backdrop */}
      <div className="lg:hidden">
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className={`fixed inset-0 z-30 bg-black/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`fixed inset-y-0 left-0 z-40 flex w-64 max-w-[80%] flex-col overflow-y-auto border-r border-border bg-background px-6 py-6 transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="mb-6 self-end text-muted transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <nav className="flex flex-col items-start gap-y-4 text-sm">
            {navLinks(() => setOpen(false))}
          </nav>
        </div>
      </div>
    </>
  );
}
