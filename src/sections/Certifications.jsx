import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2025",
    link: "https://www.credly.com/badges/51b604b9-ea0b-431c-8084-6a7908c0ad3b/public_url",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "December 2022",
    link: "https://www.credly.com/badges/d71df47f-0b48-408f-8a5f-8fff0285df11/public_url",
  },
  {
    title: "Docker and Kubernetes: The Complete Guide",
    issuer: "Udemy",
    date: "February 2024",
    link: "https://www.udemy.com/certificate/UC-47b2e670-a5c2-4001-bcec-fa6b106e2154/",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Bg glows - positioned differently for variety */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Continuous Learning
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certifications &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Achievements.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Official credentials validating my expertise in cloud architecture, DevOps practices, and machine learning.
          </p>
        </div>

        {/* Certifications List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in hover:border-primary/40 transition-all duration-300 hover:translate-x-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Left Side: Icon & Info */}
              <div className="flex items-start md:items-center gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-full bg-surface border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Award className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {cert.issuer}
                    </span>
                    <span className="hidden md:inline text-border">•</span>
                    <span className="flex items-center gap-1.5 md:hidden">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Date & Link Action */}
              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0 pl-16 md:pl-0">
                <span className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </span>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group/btn"
                  aria-label={`View ${cert.title} credential`}
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};