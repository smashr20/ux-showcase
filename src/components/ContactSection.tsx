import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              I'm always excited to collaborate on meaningful projects. Whether you have a role in mind,
              a product idea, or just want to chat about design — don't hesitate to reach out.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:jane.doe@email.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">jane.doe@email.com</p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors">
                  <Phone className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (234) 567-890</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/janedoe</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Dribbble</p>
                  <p className="font-medium">dribbble.com/janedoe</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <Textarea
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-primary text-base">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
