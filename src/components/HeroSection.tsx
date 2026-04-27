import { useEffect, useState } from "react";
import { Mail, MapPin, ChevronDown, Youtube, Linkedin, Github, Instagram, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const ROLES = [
  "Electrical Engineer",
  "IoT & AI Enthusiast",
  "YouTuber",
  "Maker & Builder",
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Typewriter effect for the role line
  useEffect(() => {
    const current = ROLES[roleIdx];
    const atFull = typed === current;
    const atEmpty = typed === "";
    let delay = deleting ? 40 : 80;
    if (atFull && !deleting) delay = 1400;
    if (atEmpty && deleting) delay = 250;

    const t = setTimeout(() => {
      if (!deleting && atFull) setDeleting(true);
      else if (deleting && atEmpty) {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      } else {
        setTyped(
          deleting
            ? current.slice(0, typed.length - 1)
            : current.slice(0, typed.length + 1),
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-dot">
      {/* Animated background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft moving gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30 animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(var(--primary) / 0.15), transparent 30%, hsl(var(--accent) / 0.15), transparent 70%, hsl(var(--primary) / 0.15))",
          }}
        />

        {/* Scanning horizontal beam */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-y" />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-primary/60 animate-float-particle"
            style={{
              left: `${(i * 83) % 100}%`,
              top: `${(i * 47) % 100}%`,
              animationDelay: `${(i % 6) * 0.6}s`,
              animationDuration: `${6 + (i % 5)}s`,
              opacity: 0.4 + ((i % 4) * 0.15),
            }}
          />
        ))}

        {/* Bottom fade for smooth transition into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container relative z-10 text-center">
        {/* Avatar with rotating ring */}
        <div
          className={`transition-all duration-700 ease-smooth ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-md animate-spin-slow" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-glow opacity-40 blur-md" />
            <img
              src={profilePhoto}
              alt="Rohan Doiphode"
              width={160}
              height={160}
              className="relative w-full h-full rounded-full object-cover border-2 border-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
            />
          </div>
        </div>

        {/* Greeting chip */}
        <div
          className={`transition-all duration-700 delay-100 ease-smooth ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-primary font-mono text-xs tracking-widest uppercase">
              Hello, I'm
            </span>
          </div>
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-700 delay-200 ease-smooth ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="gradient-text text-glow">Rohan</span>{" "}
            <span className="text-foreground">Doiphode</span>
          </h1>
        </div>

        {/* Animated role typewriter */}
        <div
          className={`transition-all duration-700 delay-300 ease-smooth ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 font-mono min-h-[1.75rem]">
            <span className="text-primary">&gt;</span>{" "}
            <span className="text-foreground/90">{typed}</span>
            <span className="inline-block w-[2px] h-[1em] align-[-2px] bg-primary ml-0.5 animate-blink" />
          </p>
        </div>

        {/* Location & email */}
        <div
          className={`transition-all duration-700 delay-500 ease-smooth ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" /> Kolhapur, India
            </span>
            <a
              href="https://mail.google.com/mail/?view=cm&to=rohandoiphode1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" /> rohandoiphode1@gmail.com
            </a>
          </div>

          {/* Social chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {[
              { href: "https://www.youtube.com/@walkersmusicworld", icon: Youtube, label: "43K Subscribers", hover: "hover:text-red-400 hover:border-red-400/30" },
              { href: "https://www.linkedin.com/in/rohandoiphode/", icon: Linkedin, label: "LinkedIn", hover: "hover:text-blue-400 hover:border-blue-400/30" },
              { href: "https://github.com/walker82417/", icon: Github, label: "GitHub", hover: "hover:text-foreground hover:border-foreground/30" },
              { href: "https://www.instagram.com/its_rohan_82417/", icon: Instagram, label: "Instagram", hover: "hover:text-pink-400 hover:border-pink-400/30" },
            ].map(({ href, icon: Icon, label, hover }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${600 + i * 80}ms` }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground transition-all duration-300 hover-scale ${hover} animate-fade-in`}
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 transition-all duration-700 delay-700 ease-smooth ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 text-center"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary"
        aria-label="Scroll to About"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
