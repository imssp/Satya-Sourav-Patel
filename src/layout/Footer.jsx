import { ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon, SubstackIcon } from '@/components/Icons';

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/imssp", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/satyasouravpatel", label: "LinkedIn" },
  { icon: SubstackIcon, href: "https://substack.com/@satyasouravpatel/posts", label: "Substack" },
];

// Split links into logical categories
const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
];

const resourceLinks = [
  { href: "#blogs", label: "Read my Blog" },
  { href: "https://drive.google.com/file/d/1jgPN23awD3nzUJb4is5Vax7QNEgRHzlu/view?usp=sharing", label: "Download Resume", target: "_blank" }, // Add your resume to the public folder
  { href: "mailto:satyasouravssp0@example.com", label: "Email Me" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-border overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand & Tagline - Takes up 4 columns on desktop */}
          <div className="col-span-1 md:col-span-4 lg:col-span-5 text-center md:text-left">
            <a href="#" className="inline-block text-2xl font-bold tracking-tight mb-4">
              SSP<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Building scalable cloud infrastructure and robust backend systems. Always exploring the intersection of DevOps, cloud architecture, and data.
            </p>
            {/* Social Links moved under the brand description */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 text-center md:text-left">
            <h3 className="text-foreground font-semibold mb-6 uppercase tracking-wider text-sm">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit mx-auto md:mx-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources & Contact Navigation */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 text-center md:text-left">
            <h3 className="text-foreground font-semibold mb-6 uppercase tracking-wider text-sm">
              Connect & Resources
            </h3>
            <nav className="flex flex-col space-y-4">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target || "_self"}
                  rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit mx-auto md:mx-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Satya Sourav Patel. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <div className="p-2 rounded-full glass group-hover:bg-primary/10 transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};