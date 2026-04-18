import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { Youtube, Users, Eye, Upload, Play } from "lucide-react";
import ytLogo from "@/assets/yt-channel-logo.jpg";

type Stat = {
  icon: typeof Users;
  end: number;
  decimals?: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
  isText?: string;
};

const stats: Stat[] = [
  { icon: Users, end: 43.5, decimals: 1, suffix: "K", label: "Subscribers", color: "text-red-400" },
  { icon: Eye, end: 15, suffix: "M+", label: "Total Views", color: "text-blue-400" },
  { icon: Upload, end: 1, suffix: "K+", label: "Uploads", color: "text-green-400" },
  { icon: Play, end: 0, suffix: "", label: "Updates", color: "text-yellow-400", isText: "Daily" },
];

function AnimatedStat({ stat, isVisible, delay }: { stat: Stat; isVisible: boolean; delay: number }) {
  const value = useCountUp({
    end: stat.end,
    duration: 1800,
    decimals: stat.decimals ?? 0,
    enabled: isVisible && !stat.isText,
  });

  const display = stat.isText
    ? stat.isText
    : `${stat.prefix ?? ""}${stat.decimals ? value.toFixed(stat.decimals) : Math.round(value)}${stat.suffix}`;

  return (
    <div
      className={`glass rounded-lg p-4 text-center transition-all duration-500 hover:scale-[1.03] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
      <p className="text-xl md:text-2xl font-bold text-foreground leading-tight tabular-nums">{display}</p>
      <p className="text-[11px] text-muted-foreground mt-1">{stat.label}</p>
    </div>
  );
}

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
              <AnimatedStat key={s.label} stat={s} isVisible={isVisible} delay={400 + i * 100} />
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
