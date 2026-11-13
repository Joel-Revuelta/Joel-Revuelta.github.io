import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main
        id="main"
        className="mx-auto w-full max-w-6xl px-5 pb-0 pt-8 md:px-8 md:pb-0 md:pt-28"
      >
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Stack />
      </main>
      <Contact />
    </>
  );
}
