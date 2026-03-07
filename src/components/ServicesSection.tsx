import { Palette, Search, Layout, Layers, PenTool, Boxes } from "lucide-react";

const services = [
  { icon: Palette, title: "UI Design", description: "Pixel-perfect interfaces that look stunning and feel natural across every device." },
  { icon: Search, title: "UX Research", description: "Data-driven insights through user interviews, surveys, and usability testing." },
  { icon: Layout, title: "Wireframing", description: "Low-fidelity blueprints that map out user journeys and information architecture." },
  { icon: PenTool, title: "Prototyping", description: "Interactive prototypes in Figma and Principle to validate ideas before development." },
  { icon: Boxes, title: "Design Systems", description: "Scalable component libraries and style guides for consistent brand experiences." },
  { icon: Layers, title: "Developer Handoff", description: "Clean specs and assets in Zeplin to ensure seamless design-to-code transitions." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">What I Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            My <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
