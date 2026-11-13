"use client";

import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Stack", id: "stack" },
  { label: "Contact", id: "contact" },
];

const sectionIds = ["home", "projects", "experience", "education", "stack", "contact"];

export default function Header() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-line/80 bg-background/85 backdrop-blur-md md:block">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
        <a
          href="#home"
          aria-label="Joel Revuelta, back to top"
          className="flex items-center gap-3"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface font-mono text-[11px] font-medium text-accent">
            JR
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            Joel Revuelta
          </span>
        </a>

        <nav aria-label="Sections" className="flex items-center gap-7">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1 text-sm transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100 ${
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-muted after:scale-x-0"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="/joel-revuelta-cv.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
