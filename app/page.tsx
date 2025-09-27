import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200">
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Tech Stack Section */}
        <TechStack />
        {/* Experience Section */}
        <Experience />
        {/* Education Section */}
        <Education />
        {/* Certificates Section */}
        <Certificates />
        {/* Projects Section */}
        <Projects />
        {/* Blogs Section */}
        {/* <Blogs /> */}
        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
