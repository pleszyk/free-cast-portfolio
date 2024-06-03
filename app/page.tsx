import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="h-screen max-w-4xl mx-auto place-items-center">
      <Hero />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
