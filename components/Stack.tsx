/* eslint-disable @next/next/no-img-element */
import SectionTitle from './SectionTitle';
import { stackGroups } from '../data';

export default function Stack() {
  return (
    <section id="stack" className="mt-28 scroll-mt-24 md:mt-36">
      <SectionTitle>Stack</SectionTitle>

      <div className="grid gap-x-10 gap-y-9 md:grid-cols-2">
        {stackGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-mono text-xs text-muted">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-2 pr-3.5"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-white/95 p-0.5">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="text-sm text-foreground/85">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
