import SectionTitle from './SectionTitle';

/* eslint-disable @next/next/no-img-element */

export default function Education() {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>

      <div className="flex flex-col gap-5">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
            <div className="flex items-center gap-3">
              <img src="/epi.png" className="h-8" alt="EPITECH logo" />
              <h2 className="text-xl font-semibold m-0 text-white">EPITECH</h2>
            </div>
            <h4 className="text-gray-400 font-medium">2022-2025</h4>
          </div>
          <h4 className="text-lg text-gray-300 md:ml-11">Bachelor&apos;s Degree in Software Development and Information Technologies</h4>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <img src="/epi.png" className="h-8" alt="EPITECH logo" />
              <h2 className="text-xl font-semibold m-0 text-white">EPITECH</h2>
              <span className="text-gray-500 hidden md:inline">•</span>
              <img src="/koç.png" className="h-8" alt="Koç University logo" />
              <h2 className="text-xl font-semibold m-0 text-white">Koç University</h2>
            </div>
            <h4 className="text-gray-400 font-medium">2025-2027</h4>
          </div>
          <h4 className="text-lg text-gray-300 md:ml-11">Master&apos;s Degree in Software Development and Information Technologies</h4>
        </div>
      </div>
    </section>
  );
}
