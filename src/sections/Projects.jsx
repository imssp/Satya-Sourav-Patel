"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "End-to-End DevOps CI/CD Platform",
    description:
      "Provisioned AWS infrastructure and Kubernetes clusters using Terraform to establish a cloud-native pipeline. Automated Docker builds with GitHub Actions and implemented GitOps deployments using Argo CD.",
    image: "/projects/project1.png",
    tags: ["GitHub Actions", "Terraform", "Kubernetes", "ArgoCD", "Docker"],
    link: "https://github.com/imssp/devops-project-mydemo",
    github: "https://github.com/imssp/devops-project-mydemo",
  },
  {
    title: "MLOps Pipeline (Diabetes Prediction)",
    description:
      "Built a real-time diabetes prediction machine learning pipeline using Python and FastAPI. Containerized the API with Docker and deployed it on Kubernetes to enable scalable inference.",
    image: "/projects/project2.png",
    tags: ["Docker", "Kubernetes", "FastAPI", "Python"],
    link: "https://github.com/imssp/first-mlops-project",
    github: "https://github.com/imssp/first-mlops-project",
  },
  {
    title: "AWS Cost Optimization Automation",
    description:
      "Engineered a serverless Python and Boto3 tool on AWS Lambda to detect and delete unused EBS snapshots. Reduced continuous cloud storage costs by scheduling automated cleanups via CloudWatch Events.",
    image: "/projects/project3.png",
    tags: ["Boto3", "AWS Lambda", "EBS", "CloudWatch", "Python"],
    link: "https://github.com/imssp/aws-ebs-snapshot-cleanup",
    github: "https://github.com/imssp/aws-ebs-snapshot-cleanup",
  },
];

const ProjectCard = ({ project, idx }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col h-full"
      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mt-1 shrink-0" />
        </div>

        {/* Expandable Description Section */}
        <div className="flex flex-col items-start flex-grow">
          <p
            className={`text-muted-foreground text-sm transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {project.description}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-xs font-semibold mt-2 hover:underline focus:outline-none transition-colors"
          >
            {isExpanded ? "See less" : "See more..."}
          </button>
        </div>

        {/* Tags - mt-auto pushes this to the very bottom, keeping heights even */}
        <div className="flex flex-wrap gap-2 pt-4 mt-auto">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid - Removed items-start so rows stretch equally */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <a href="https://github.com/imssp/" target="_blank" rel="noopener noreferrer"> 
                <AnimatedBorderButton>
                  View All Projects
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </AnimatedBorderButton>
            </a>
        </div>
      </div>
    </section>
  );
};