/* eslint-disable @next/next/no-img-element */
import SectionTitle from './SectionTitle';

export default function Experience() {
  return (
    <section>
      <SectionTitle>Experience</SectionTitle>

      <details className="group bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm open:bg-zinc-900 transition-colors">
        <summary className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 cursor-pointer list-none gap-2 hover:bg-zinc-800/50 transition-colors relative">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-white p-1 rounded">
                <img src="/ntt.jpeg" className="h-6 w-6 object-contain" alt="NTT Data logo" />
            </div>
            <h2 className="text-xl font-semibold m-0 text-white group-open:text-blue-400 transition-colors">NTT Data - Web Developer Intern</h2>
          </div>
          <h4 className="text-gray-400 font-medium md:mr-6 whitespace-nowrap">Oct 2023 - Dec 2023, Oct 2024 - Aug 2025</h4>
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 md:block hidden">
            <svg className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>
        <div className="px-6 pb-6 pt-2 text-gray-300 border-t border-zinc-800/50">
          <p className="m-0 leading-relaxed">
            Worked on a major project for Banc de Sang i Teixits to build a completely new software system for managing all internal operations and workflows related to blood and tissue management. Focused mainly on the frontend using Angular, with some backend work in Java (Spring Boot), as part of a large cross-functional team.
          </p>
        </div>
      </details>
    </section>
  );
}
