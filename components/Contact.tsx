export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-28 scroll-mt-24 border-t border-line md:mt-36">
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-16 md:px-8 md:pb-20 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-foreground md:text-4xl">
              Contact
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Have a project or a role in mind? Email me and I’ll get back to
              you.
            </p>
            <a
              href="mailto:joel.revuel@gmail.com"
              className="mt-5 inline-block text-lg text-foreground underline decoration-muted/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              joel.revuel@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="mailto:joel.revuel@gmail.com" className="btn btn-primary">
              Email Joel
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
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Joel Revuelta · Barcelona, Spain
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Joel-Revuelta"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joel-revuelta"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="mailto:joel.revuel@gmail.com"
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
