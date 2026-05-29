"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  // Show 2 projects initially to keep the page short, reveal the rest when clicked.
  const INITIAL_LIMIT = 2;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_LIMIT);

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionTitle>Projects</SectionTitle>

      <div className="flex flex-col gap-8">
        {visibleProjects.map((project, idx) => (
          <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-4">
               <img src={project.image} className="project-image w-full" alt={`${project.title} Project`} />
            </div>
            <div className="lg:w-1/2 p-6 flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
                {project.subtitle && (
                  <p className="text-gray-400 font-medium mb-3">{project.subtitle}</p>
                )}
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-auto flex justify-between items-center">
                <img src={project.techIcon} alt={project.techAlt} className="h-8" />
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View the ${project.title} project`} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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
    </section>
  );
}
