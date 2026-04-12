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
            <span className="text-primary font-mono text-base block mb-2">04.</span>
            YouTube <span className="gradient-text">Channel</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className={`glass rounded-xl p-8 md:p-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Channel Logo & Info */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative w-28 h-28 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 animate-pulse-glow opacity-40 blur-md" />
                <img
                  src={ytLogo}
                  alt="Walkers Music World"
                  className="relative w-full h-full rounded-full object-cover border-2 border-red-500/30"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Walkers Music World</h3>
              <p className="text-sm text-muted-foreground mb-1">Alan Walker Fan Page</p>
              <p className="text-xs text-muted-foreground/70 mb-5">Curating Alan Walker content since day one. Actively updated with latest releases, edits, and community content.</p>

              <a
                href="https://www.youtube.com/@walkersmusicworld"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-red-600 text-foreground font-semibold rounded-lg hover:bg-red-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              >
                <Youtube className="w-5 h-5" /> Visit Channel
              </a>
            </div>

            {/* Stats Grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`glass rounded-xl p-5 text-center transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <s.icon className={`w-6 h-6 ${s.color} mx-auto mb-2`} />
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="glass rounded-lg p-4 mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  A community of Walkers from around the globe, blending{" "}
                  <span className="text-primary font-semibold">engineering creativity</span> with{" "}
                  <span className="text-red-400 font-semibold">music passion</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
