import { Terminal, Activity, Cloud, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    title: "Infrastructure as Code",
    description:
      "Transforming complex environments into version-controlled, repeatable, and secure code.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native",
    description:
      "Leveraging Kubernetes and containerization to build modern, portable, and efficient enterprise systems.",
  },
  {
    icon: ShieldCheck,
    title: "Resilience & Scale",
    description: "Designing fault-tolerant, highly available cloud platforms built to handle massive growth.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Architecting the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one pipeline at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a dedicated Cloud & DevOps Engineer focused on building robust, scalable infrastructure that powers modern applications. My journey began with a deep curiosity for how systems operate under the hood, and it has evolved into specialized expertise in cloud-native ecosystems and automation.
              </p>
              <p>
                I specialize in Kubernetes, Docker, Terraform, and AWS, engineering everything from seamless CI/CD workflows to highly available enterprise architectures. My approach combines operational excellence with a developer-centric mindset, ensuring platforms are not just reliable, but a seamless experience for engineering teams to build upon.
              </p>
              <p>
                When I'm not optimizing deployments or writing Infrastructure as Code, you'll find me exploring emerging cloud technologies, building personal sandbox environments, or sharing my learnings with the tech community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to transform complex operations into seamless automation — building secure, high-performance environments that businesses trust and engineering teams love to use."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
