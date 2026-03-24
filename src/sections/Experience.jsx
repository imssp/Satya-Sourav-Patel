const experiences = [
  {
    period: "January 2024 — Present",
    role: "Independent DevOps Engineer",
    company: "Self Directed Projects & Consulting",
    description:
      "Developed cloud-native expertise through independent projects by architecting a GitOps workflow with GitHub Actions and Argo CD, designing a separate, secure Kubernetes environment utilizing Trivy and RBAC for cluster hardening, and building a dedicated observability lab featuring an Istio service mesh, Prometheus, and Grafana for canary releases.",
    technologies: ["Kubernetes", "Terraform", "GitHub Actions", "ArgoCD", "Istio", "Service Mesh", "Role-Based Access Control (RBAC)", "Network Policies", "Docker", "Trivy", "Python (Programming Language)"],
    current: true,
  },
  {
    period: "May 2022 — December 2023",
    role: "DevOps Engineer",
    company: "Tata Consultancy Services | Project: BANCS (Clients: Aditya Birla, ICICI Health Insurance, Future Generali)",
    description:
      "Deployed 6 multi-tenant Amazon EKS clusters using Terraform and Helm to increase release efficiency by 35%, accelerated go-live times from 3 days to 1 day via automated GitLab CI/CD pipelines for ephemeral testing environments, and significantly reduced incident MTTR by implementing full-stack observability with CloudWatch, Prometheus, and Grafana dashboards as code.",
    technologies: ["Amazon Web Services (AWS)", "AWS Lambda", "Docker", "Gitlab", "Infrastructure as code (IaC)", "Java", "Terraform", "Ansible", "Kubernetes", "Promethues", "Grafana", "Amazon CloudWatch", "Helm Charts", "Amazon EKS", "Amazon EC2", "AWS Auto Scaling", "Boto3", "Python (Programming Language)", "AWS ECR", "Amazon VPC", "AWS Identity and Access Management (AWS IAM)"],
    current: false,
  },
  {
    period: "June 2021 — May 2022",
    role: "Junior DevOps Engineer",
    company: "Tata Consultancy Services | Project: Openreach Portal (Client: British Telecom)",
    description:
      "Provisioned a zero-downtime, high-traffic telecom infrastructure for 12 microservices (handling 5,000+ RPS) using Terraform and Auto Scaling Groups, reduced deployment errors by 25% via Ansible and Bash automation, and partnered with a 6-person team to orchestrate 17+ Jenkins CI/CD pipelines deploying Docker containers via Amazon ECR.",
    technologies: ["Amazon Web Services (AWS)", "Docker", "Java", "Terraform", "Ansible", "Amazon EC2", "Amazon VPC", "Python (Programming Language)", "Sonarqube", "AWS Identity and Access Management (AWS IAM)", "YAML", "AWS ECR"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my journey, from foundational automation to engineering resilient, high-traffic cloud-native platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
