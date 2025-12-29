import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Project />
      <About />
      <Experience />
      <Help />
      <Contact />
    </ReactLenis>
  );
}
