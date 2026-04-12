import { useEffect, useState } from "react";
import { Mail, MapPin, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center circuit-dot overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 text-center">
        <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">Rohan</span>{" "}
            <span className="text-foreground">Doiphode</span>
          </h1>
        </div>

        <div className={`transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2 font-mono">
            Electrical Engineer • IoT & AI Enthusiast
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> Kolhapur, India</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-primary" /> rohandoiphode1@gmail.com</span>
          </div>
        </div>

        <div className={`flex justify-center gap-4 transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
