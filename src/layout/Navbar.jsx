import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button"; 

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#blogs", label: "Substack Blogs" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative z-50">
        {/* Brand / Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          SSP<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav - Floating Pill */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-surface/30 backdrop-blur-md border border-white/10 shadow-sm">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              Contact Me
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground hover:bg-white/5 rounded-full transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="animate-fade-in" />
          ) : (
            <Menu size={24} className="animate-fade-in" />
          )}
        </button>
      </nav>

      {/* Mobile Menu - Reverted to your original dropdown style */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in absolute top-full left-0 w-full border-b border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full justify-center">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};