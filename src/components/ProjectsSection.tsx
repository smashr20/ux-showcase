import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinFlow Dashboard",
    client: "Client Alpha",
    description: "Redesigned a complex financial analytics dashboard, improving task completion rate by 40% through intuitive information architecture and streamlined workflows.",
    role: "Lead UX Designer",
    deliverables: ["User Research", "Wireframes", "UI Design", "Prototyping"],
    color: "primary" as const,
    glowClass: "glow-primary",
  },
  {
    title: "ShopEase Mobile App",
    client: "Client Beta",
    description: "Designed a mobile-first e-commerce experience from scratch, focusing on seamless checkout flows and personalized product discovery.",
    role: "UX/UI Designer",
    deliverables: ["Competitive Analysis", "User Flows", "Visual Design", "Usability Testing"],
    color: "secondary" as const,
    glowClass: "glow-coral",
  },
  {
    title: "HealthHub Platform",
    client: "Client Gamma",
    description: "Created an accessible health management platform, prioritizing clarity and trust for users managing sensitive medical data.",
    role: "Product Designer",
    deliverables: ["Design System", "Accessibility Audit", "Hi-Fi Mockups", "Developer Handoff"],
    color: "accent" as const,
    glowClass: "glow-cyan",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Featured Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className={`group bg-gradient-card border-border hover:border-${project.color}/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-[0_0_40px_hsl(var(--primary)/0.12),0_0_80px_hsl(var(--primary)/0.06)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.2),0_0_100px_hsl(var(--primary)/0.1)]`}
            >
              {/* Thumbnail placeholder */}
              <div className={`h-48 bg-muted/30 flex items-center justify-center relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/20 to-transparent shadow-[inset_0_0_60px_hsl(var(--primary)/0.15)]`} />
                <span className="font-display text-6xl font-bold text-muted-foreground/20 select-none">
                  0{i + 1}
                </span>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{project.client}</p>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Role: <span className="text-foreground">{project.role}</span></p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables.map((d) => (
                    <Badge key={d} variant="outline" className="text-[10px] border-border text-muted-foreground px-2 py-0.5">
                      {d}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
