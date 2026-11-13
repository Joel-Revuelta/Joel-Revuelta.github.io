import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-4 md:min-h-[calc(100svh-7rem)] md:pt-10">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] md:gap-14">
        <div>
          <div className="rise flex items-center gap-3">
            <Image
              src="/pfp.png"
              width={56}
              height={56}
              alt="Joel Revuelta"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-line"
            />
            <p className="font-mono text-xs text-muted">Barcelona, Spain</p>
          </div>

          <h1 className="rise mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl [animation-delay:70ms]">
            Joel Revuelta
          </h1>

          <p className="rise mt-4 text-xl text-foreground/90 md:text-2xl [animation-delay:140ms]">
            <span className="block">Software engineer —</span>
            <span className="block">full-stack and systems.</span>
          </p>

          <p className="rise mt-5 max-w-lg text-base leading-relaxed text-muted [animation-delay:210ms]">
            I build full-stack products and high-performance systems in
            TypeScript, Python and C++.
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:280ms]">
            <a href="#projects" className="btn btn-primary">
              View selected work
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/joel-revuelta-cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </div>

          <div className="rise mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5 font-mono text-xs text-muted [animation-delay:350ms]">
            <span>EPITECH &amp; Koç University</span>
            <span aria-hidden="true" className="text-muted/50">·</span>
            <span>Extia Hackathon winner 2024</span>
          </div>
        </div>

        <div className="rise relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface [animation-delay:160ms]">
          <Image
            src="/hero-brass.webp"
            width={864}
            height={1080}
            priority
            alt="Ray-traced brass orbital rings, glass planets and a glowing sun above a mirror floor"
            className="settle h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
