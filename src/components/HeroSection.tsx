import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating accent shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-cyan/10 blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-in-up">
          UX Designer · Product Thinker · Creative Problem Solver
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <span className="text-foreground">Jane</span>
          <br />
          <span className="text-gradient">Doe</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Crafting intuitive digital experiences that bridge user needs and business goals — one pixel at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground text-base px-8 glow-primary">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted text-base px-8">
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
