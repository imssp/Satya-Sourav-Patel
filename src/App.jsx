import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Certifications } from "@/sections/Certifications";
import { Blogs } from "@/sections/Blogs";
import { Contact } from "@/sections/Contact";

function App() {
  return (
      
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Blogs />
          <Contact />
        </main>

        <Footer />
      </div>
  );
}

export default App;