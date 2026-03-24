// src/sections/Blogs.jsx
import { ArrowUpRight, Newspaper, Clock } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"; // Adjust path if needed

// Replace these with your actual Substack article details
const blogPosts = [
  {
    title: "Understanding REST API Authentication.",
    excerpt: "When working with REST APIs, security is absolute. It directly impacts security, scalability, cloud architecture and infra costs. It is a design decision and not just a choice.",
    date: "Feb 17, 2026",
    readTime: "4 min read",
    link: "https://satyasouravpatel.substack.com/p/understanding-rest-api-authentication",
  },
  {
    title: "Why I Switched from REST to GraphQL",
    excerpt: "Exploring the performance benefits and developer experience improvements of adopting GraphQL for your APIs.",
    date: " 2025",
    readTime: "8 min read",
    link: "https://yourname.substack.com/p/rest-vs-graphql",
  },
  {
    title: "Mastering Terraform State Management",
    excerpt: "Best practices for keeping your infrastructure as code secure, organized, and collaborative.",
    date: "2025",
    readTime: "6 min read",
    link: "https://yourname.substack.com/p/terraform-state",
  },
];

export const Blogs = () => {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Writing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in text-secondary-foreground">
            Latest from my
            <span className="font-serif italic font-normal text-white"> Substack.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in">
            Thoughts, tutorials, and deep dives into software engineering and cloud architecture.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl p-6 flex flex-col h-full animate-fade-in hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Icon & Meta */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Newspaper className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary mt-auto">
                  Read Article
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://satyasouravpatel.substack.com" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              Subscribe on Substack
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};