/* eslint-disable @next/next/no-img-element */
import SectionTitle from './SectionTitle';
import { programmingLanguages, frontend, backend, others } from '../data';
import { StackItem } from '../types';

function StackPill({ item }: { item: StackItem }) {
  return (
    <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg h-12 px-4 shadow-sm hover:bg-zinc-800 transition-colors">
      <img src={item.image} alt={item.name} className="h-6 object-contain" />
      <h3 className="font-medium text-gray-200">{item.name}</h3>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24">
      <SectionTitle>Stack</SectionTitle>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-5 text-gray-100">Programming languages</h2>
        <div className="flex flex-wrap gap-3">
          {programmingLanguages.map((item, idx) => (
            <StackPill key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-5 text-gray-100">Frontend</h2>
        <div className="flex flex-wrap gap-3">
          {frontend.map((item, idx) => (
            <StackPill key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-5 text-gray-100">Backend</h2>
        <div className="flex flex-wrap gap-3">
          {backend.map((item, idx) => (
            <StackPill key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-5 text-gray-100">Others</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((item, idx) => (
            <StackPill key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
