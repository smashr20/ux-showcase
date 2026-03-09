import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import maayariThumb from "@/assets/maayari-thumb.jpg";
import melodicmindThumb from "@/assets/melodicmind-thumb.png";

const projects = [
  {
    title: "The Melodic Mind Studio",
    client: "The Melodic Mind",
    link: "https://www.themelodicmind.com/studio",
    thumbnail: melodicmindThumb,
    description: "Crafted a vibrant, animated UX design for an artist-based platform where followers can download and learn songs and tabs — delivering an energetic, immersive experience that keeps musicians engaged.",
    role: "UX/UI Designer",
    deliverables: ["User Research", "Visual Design", "Animation", "Prototyping"],
    color: "primary" as const,
    glowClass: "glow-primary",
  },
  {
    title: "Maayari",
    client: "Maayari",
    link: "https://maayari.com",
    thumbnail: maayariThumb,
    description: "Designed a clean, professional, and minimal website focused on clarity and elegance — ensuring the brand's message comes through without distraction.",
    role: "UX/UI Designer",
    deliverables: ["Wireframes", "UI Design", "Responsive Design", "Developer Handoff"],
    color: "secondary" as const,
    glowClass: "glow-coral",
  },
  {
    title: "Paul Davids Guitar",
    client: "Paul Davids",
    link: "https://pauldavidsguitar.com",
    thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
    description: "Created an intuitive, easy-to-navigate e-commerce website for a personalised guitar brand — making product discovery and purchasing effortless for customers.",
    role: "UX/UI Designer",
    deliverables: ["Information Architecture", "UI Design", "Usability Testing", "E-commerce UX"],
    color: "accent" as const,
    glowClass: "glow-cyan",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-0 pb-24 md:pt-0 md:pb-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Featured Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
            <Card
              className={`group bg-gradient-card border-border hover:border-${project.color}/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-none hover:shadow-[0_0_50px_hsl(var(--primary)/0.2),0_0_100px_hsl(var(--primary)/0.1)] cursor-pointer`}
            >
              {/* Thumbnail placeholder */}
              <div className={`h-48 bg-muted/30 flex items-center justify-center relative overflow-hidden`}>
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/20 to-transparent shadow-[inset_0_0_60px_hsl(var(--primary)/0.15)]`} />
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
