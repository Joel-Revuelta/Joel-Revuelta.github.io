/* eslint-disable @next/next/no-img-element */
import SectionTitle from './SectionTitle';

const bullets = [
  'Co-developed a blood and tissue bank management system for Banc de Sang i Teixits using Java Spring Boot microservices and Angular.',
  'Designed reactive user interfaces and key operational workflows, keeping everyday tasks clear for the people using them.',
  'Implemented unit and integration test suites, improving software reliability across a cross-functional team.',
];

const tags = ['Java', 'Spring Boot', 'Angular', 'Unit testing'];

export default function Experience() {
  return (
    <section id="experience" className="mt-28 scroll-mt-24 md:mt-36">
      <SectionTitle>Experience</SectionTitle>

      <article className="rounded-2xl border border-line bg-surface p-6 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
              <img src="/ntt.jpeg" alt="" className="h-full w-full object-contain" />
            </span>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                Web Developer Intern
              </h3>
              <p className="mt-1 text-sm text-muted">NTT Data</p>
            </div>
          </div>

          <p className="font-mono text-xs leading-relaxed text-muted sm:text-right">
            Oct 2023 – Dec 2023
            <br />
            Oct 2024 – Aug 2025
          </p>
        </div>

        <ul className="mt-6 max-w-2xl space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-sm leading-relaxed text-foreground/75"
            >
              <span
                aria-hidden="true"
                className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
