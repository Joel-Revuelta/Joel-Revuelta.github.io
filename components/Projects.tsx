"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const INITIAL_LIMIT = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_LIMIT);
  const remaining = projects.length - INITIAL_LIMIT;

  return (
    <section id="projects" className="mt-28 scroll-mt-24 md:mt-36">
      <SectionTitle>Selected work</SectionTitle>
      <p className="-mt-4 mb-8 max-w-xl text-sm leading-relaxed text-muted md:-mt-6 md:mb-10">
        Five projects across rendering, systems and the web.
      </p>

      <div id="project-list" className="flex flex-col gap-10">
        {visibleProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View the ${project.title} project (opens in a new tab)`}
            className="group block overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-white/15"
          >
            <div className="overflow-hidden border-b border-line">
              <img
                src={project.image}
                width={project.imageWidth}
                height={project.imageHeight}
                alt={`${project.title} project cover`}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
                  )}
                </div>
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent"
                >
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/75">
                {project.description}
              </p>

              <div className="mt-6 flex items-center gap-2.5">
                {project.techIcons.map((icon) => (
                  <span
                    key={icon.image}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 p-1"
                  >
                    <img
                      src={icon.image}
                      alt={icon.alt}
                      className="h-full w-full object-contain"
                    />
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {projects.length > INITIAL_LIMIT && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls="project-list"
            className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            {showAll ? 'Show less' : `Show ${remaining} more ${remaining === 1 ? 'project' : 'projects'}`}
          </button>
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/Joel-Revuelta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          All repositories on GitHub
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
