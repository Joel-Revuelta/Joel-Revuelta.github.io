"use client";

import type { ReactNode } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

type IconName = "home" | "work" | "experience" | "education" | "stack" | "contact";

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </>
  ),
  work: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="M13 5l-2 14" />
    </>
  ),
  experience: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  education: (
    <>
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      <path d="M22 9v5" />
    </>
  ),
  stack: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
};

const items: { label: string; id: string; icon: IconName }[] = [
  { label: "Home", id: "home", icon: "home" },
  { label: "Work", id: "projects", icon: "work" },
  { label: "Experience", id: "experience", icon: "experience" },
  { label: "Education", id: "education", icon: "education" },
  { label: "Stack", id: "stack", icon: "stack" },
  { label: "Contact", id: "contact", icon: "contact" },
];

const sectionIds = ["home", "projects", "experience", "education", "stack", "contact"];

export default function Dock() {
  const active = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="flex items-center gap-0.5 rounded-2xl border border-line bg-surface/95 p-1.5 shadow-xl shadow-black/50 backdrop-blur-md">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={isActive ? "location" : undefined}
              className={`flex h-[52px] w-[46px] flex-col items-center justify-center gap-1 rounded-xl transition-colors min-[380px]:w-[54px] ${
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {paths[item.icon]}
              </svg>
              <span className="hidden text-[9px] font-medium leading-none min-[380px]:block">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
