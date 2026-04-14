import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(formState.message);
    window.open(`https://mail.google.com/mail/?view=cm&to=rohandoiphode1@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-base block mb-2">06.</span>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something innovative. and I’m currently open to work. If you’re hiring or have a role that matches my profile, please reach out via the form below or email me directly. Let’s talk!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "rohandoiphode1@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=rohandoiphode1@gmail.com", external: true },
                { icon: Phone, label: "+91-9370686485", href: "tel:+919370686485" },
                { icon: MapPin, label: "Kolhapur, India", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={(item as any).external ? "_blank" : undefined} rel={(item as any).external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <input
              type="text" placeholder="Your Name" required
              value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <input
              type="email" placeholder="Your Email" required
              value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <textarea
              placeholder="Your Message" rows={4} required
              value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
            />
            <button type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
