/* eslint-disable @next/next/no-img-element */
import SectionTitle from './SectionTitle';

const degrees = [
  {
    school: 'EPITECH',
    period: '2022 – 2025',
    degree: 'Bachelor’s in Software Development and Information Technologies',
    logos: [{ src: '/epi.png', alt: 'EPITECH' }],
  },
  {
    school: 'EPITECH · Koç University',
    period: '2025 – 2027',
    degree: 'Master’s in Software Development and Information Technologies',
    logos: [
      { src: '/epi.png', alt: 'EPITECH' },
      { src: '/koç.png', alt: 'Koç University' },
    ],
  },
];

const languages = [
  { name: 'Catalan', level: 'Native' },
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Professional' },
];

export default function Education() {
  return (
    <section id="education" className="mt-28 scroll-mt-24 md:mt-36">
      <SectionTitle>Education</SectionTitle>

      <div className="grid gap-4 md:grid-cols-2">
        {degrees.map((item) => (
          <article
            key={item.period}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {item.logos.map((logo) => (
                  <span
                    key={logo.src}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-full object-contain"
                    />
                  </span>
                ))}
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-foreground">
                  {item.school}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-muted">
                  {item.period}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              {item.degree}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-line bg-surface px-6 py-4">
        <span className="font-mono text-xs text-muted">Languages</span>
        {languages.map((language, index) => (
          <span
            key={language.name}
            className="flex items-center gap-3 text-sm text-foreground/80"
          >
            {index > 0 && (
              <span aria-hidden="true" className="text-muted/50">
                ·
              </span>
            )}
            <span>
              {language.name}{' '}
              <span className="text-muted">{language.level}</span>
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
