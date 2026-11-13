"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const INITIAL_LIMIT = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_LIMIT);

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionTitle>Projects</SectionTitle>

      <div className="flex flex-col gap-8">
        {visibleProjects.map((project) => (
          <div key={project.title} className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
            <div className="border-b border-zinc-800/70">
              <img
                src={project.image}
                className="block w-full h-auto bg-[#1a1a1a]"
                alt={`${project.title} project cover`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
                  {project.subtitle && (
                    <p className="text-gray-400 font-medium">{project.subtitle}</p>
                  )}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View the ${project.title} project`} className="shrink-0 p-2 hover:bg-zinc-800 rounded-lg transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-2xl mt-3 mb-6">{project.description}</p>
              <div className="flex items-center gap-3">
                {project.techIcons.map((icon) => (
                  <img key={icon.image} src={icon.image} alt={icon.alt} className="h-8" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > INITIAL_LIMIT && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full text-white font-medium transition-colors shadow-sm"
          >
            {showAll ? 'Show Less' : `Show More Projects (${projects.length - INITIAL_LIMIT})`}
          </button>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/Joel-Revuelta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          See more projects on GitHub
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
