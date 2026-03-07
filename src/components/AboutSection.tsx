import { Badge } from "@/components/ui/badge";

const tools = [
  "Figma", "Zeplin", "Adobe XD", "Sketch", "InVision",
  "Miro", "Principle", "Photoshop", "Illustrator", "Framer",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Happy Clients" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Bio */}
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Designing with
              <br />
              <span className="text-gradient">purpose & passion</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a UX designer who thrives at the intersection of creativity and strategy.
              With over 5 years of experience, I've partnered with startups and enterprises
              to create user-centered digital products that delight and perform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My process blends research, empathy, and bold visual thinking to solve real problems.
              Whether it's a complex SaaS dashboard or a consumer mobile app, I bring clarity to chaos.
            </p>
          </div>

          {/* Right — Stats + Tools */}
          <div className="space-y-10">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gradient-card rounded-xl p-6 border border-border text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Tools & Software</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="border-border text-foreground bg-muted/50 px-3 py-1.5 text-sm hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
