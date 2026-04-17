import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Youtube, Users, Eye, Upload, Play } from "lucide-react";
import ytLogo from "@/assets/yt-channel-logo.jpg";

const stats = [
  { icon: Users, value: "43.5K", label: "Subscribers", color: "text-red-400" },
  { icon: Eye, value: "15M+", label: "Total Views", color: "text-blue-400" },
  { icon: Upload, value: "1K+", label: "Uploads", color: "text-green-400" },
  { icon: Play, value: "Daily", label: "Updates", color: "text-yellow-400" },
];

export default function YouTubeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="youtube" className="py-24 relative">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            YouTube <span className="gradient-text">Channel</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className={`glass rounded-xl p-6 md:p-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Channel Header */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
            <div className="relative w-20 h-20 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 animate-pulse-glow opacity-40 blur-md" />
              <img
                src={ytLogo}
                alt="Walkers Music World"
                className="relative w-full h-full rounded-full object-cover border-2 border-red-500/30"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground">Walkers Music World</h3>
              <p className="text-sm text-muted-foreground">Alan Walker Fan Page</p>
              <p className="text-xs text-muted-foreground/70 mt-1 max-w-md">
                Curating Alan Walker content since 2020. Actively updated with latest releases, Community Tribute , edits, and community content.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`glass rounded-lg p-4 text-center transition-all duration-500 hover:scale-[1.03] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-2`} />
                <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">{s.value}</p>
                <p className="text-[11px] text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass rounded-lg p-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              A community of Walkers from around the globe, blending{" "}
              <span className="text-primary font-semibold">engineering creativity</span> with{" "}
              <span className="text-red-400 font-semibold">music passion</span>
            </p>
            <a
              href="https://www.youtube.com/@walkersmusicworld"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-foreground font-semibold rounded-lg hover:bg-red-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] shrink-0 text-sm"
            >
              <Youtube className="w-4 h-4" /> Visit Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
