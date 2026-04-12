import { useEffect, useState } from "react";
import { Mail, MapPin, ChevronDown, Youtube, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center circuit-dot overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 text-center">
        <div className={`transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-glow opacity-50 blur-md" />
            <img src={profilePhoto} alt="Rohan Doiphode" width={160} height={160}
              className="relative w-full h-full rounded-full object-cover border-2 border-primary/30" />
          </div>
        </div>

        <div className={`transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Hello, I'm</p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">Rohan</span>{" "}
            <span className="text-foreground">Doiphode</span>
          </h1>
        </div>

        <div className={`transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2 font-mono">
            Electrical Engineer | IoT & AI Enthusiast | YouTuber
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4 flex-wrap">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> Kolhapur, India</span>
            <a href="mailto:rohandoiphode1@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" /> rohandoiphode1@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <a href="https://www.youtube.com/@walkersmusicworld" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-red-400 hover:border-red-400/30 transition-all duration-200">
              <Youtube className="w-4 h-4" /> 43K Subscribers
            </a>
            <a href="https://www.linkedin.com/in/rohandoiphode/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-blue-400 hover:border-blue-400/30 transition-all duration-200">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/walker82417/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200">
              <Github className="w-4 h-4" /> GitHub
            </a>
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
