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
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary font-sans antialiased overflow-x-hidden">
      
      {/* --- Global Background Effects --- */}
      {/* 1. Subtle global gradient orb */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[150px]" />
      </div>
      
      {/* 2. Optional: Noise texture for a premium glass/matte feel (requires a transparent noise.png in public folder) */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

      {/* --- Main Content Layout --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* flex-grow ensures the footer is always pushed to the bottom */}
        <main className="flex-grow w-full flex flex-col items-center">
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
    </div>
  );
}

export default App;