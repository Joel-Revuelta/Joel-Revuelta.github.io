/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-start pt-12 md:pt-24 scroll-mt-24">
      <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden mb-8 border border-zinc-800">
        <Image src="/pfp.png" alt="Joel Revuelta" fill className="object-cover" priority />
      </div>

      <h1 className="font-bold text-5xl md:text-6xl mb-2 text-white">Joel Revuelta</h1>
      <h3 className="text-xl md:text-2xl text-gray-400 mb-8">Software developer</h3>

      <div className="flex gap-4 mt-3">
        <a href="mailto:joel.revuel@gmail.com" className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors flex items-center justify-center">
          <img src="/email.svg" alt="email" className="w-6 h-6 svg-white" />
        </a>
        <a href="https://www.linkedin.com/in/joel-revuelta" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors flex items-center justify-center">
          <img src="/linkedin.svg" alt="linkedin" className="w-6 h-6 svg-white" />
        </a>
        <a href="https://github.com/Joel-Revuelta" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors flex items-center justify-center">
          <img src="/github.svg" alt="github" className="w-6 h-6 svg-white" />
        </a>
        <a href="/Joel Revuelta - CV.pdf" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors flex items-center justify-center">
          <img src="/file.svg" alt="CV" className="w-6 h-6 svg-white" />
        </a>
      </div>
    </section>
  );
}
