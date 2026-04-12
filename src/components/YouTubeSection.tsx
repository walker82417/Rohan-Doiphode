import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Youtube, Users, Eye, Music, Heart } from "lucide-react";
import ytLogo from "@/assets/yt-channel-logo.jpg";

const highlights = [
  { icon: Users, value: "43K+", label: "Subscribers" },
  { icon: Eye, value: "5M+", label: "Total Views" },
  { icon: Music, value: "200+", label: "Videos" },
  { icon: Heart, value: "Active", label: "Community" },
];

const funFacts = [
  "Curating Alan Walker content since day one",
  "Community of Walkers from around the globe",
  "Lively updated with latest releases and edits",
  "Blending engineering creativity with music passion",
];

export default function YouTubeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="youtube" className="py-24 relative">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-base block mb-2">04.</span>
            YouTube <span className="gradient-text">Channel</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Channel Card */}
          <div className={`glass rounded-xl p-8 flex flex-col items-center text-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative w-24 h-24 mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 animate-pulse-glow opacity-40 blur-md" />
              <img
                src={ytLogo}
                alt="Walkers Music World"
                className="relative w-full h-full rounded-full object-cover border-2 border-red-500/30"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">Walkers Music World</h3>
            <p className="text-sm text-muted-foreground mb-6">Alan Walker Fan Page</p>

            <div className="grid grid-cols-2 gap-4 w-full mb-6">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`glass rounded-lg p-3 text-center transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <h.icon className="w-4 h-4 text-red-400 mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">{h.value}</p>
                  <p className="text-xs text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.youtube.com/@walkersmusicworld"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-red-600 text-foreground font-semibold rounded-lg hover:bg-red-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              <Youtube className="w-5 h-5" /> Visit Channel
            </a>
          </div>

          {/* What Makes It Special */}
          <div className={`glass rounded-xl p-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="font-semibold text-foreground text-lg mb-6">What Makes It Special</h3>

            <div className="space-y-4 mb-8">
              {funFacts.map((fact, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10 transition-all duration-500 hover:bg-red-500/10 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                  style={{ transitionDelay: `${500 + i * 120}ms` }}
                >
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-lg p-5 text-center">
              <p className="text-sm text-muted-foreground mb-2">Built with the same passion I bring to</p>
              <p className="text-primary font-semibold">Engineering + Creativity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
