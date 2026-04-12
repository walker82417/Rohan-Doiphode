import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Youtube, Users, TrendingUp, PlayCircle } from "lucide-react";

const milestones = [
  { year: "2021", subs: "1K", label: "Channel Started" },
  { year: "2022", subs: "5K", label: "Growing Community" },
  { year: "2023", subs: "15K", label: "Gaining Momentum" },
  { year: "2024", subs: "30K", label: "Major Growth" },
  { year: "2025", subs: "43K+", label: "And Counting!" },
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

        <div className="grid md:grid-cols-5 gap-6 mb-10">
          {/* Channel Card */}
          <div className={`md:col-span-2 glass rounded-xl p-8 flex flex-col items-center text-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-4">
              <PlayCircle className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">Walkers Music World</h3>
            <p className="text-sm text-muted-foreground mb-4">Alan Walker Fan Page</p>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-2xl font-bold gradient-text">43K+</span>
              <span className="text-sm text-muted-foreground">Subscribers</span>
            </div>
            <a
              href="https://www.youtube.com/@walkersmusicworld"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-foreground font-semibold rounded-lg hover:bg-red-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              <Youtube className="w-5 h-5" /> Visit Channel
            </a>
          </div>

          {/* Subscriber Growth Timeline */}
          <div className={`md:col-span-3 glass rounded-xl p-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Subscriber Growth</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 to-accent/50" />

              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className={`flex items-center gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                    style={{ transitionDelay: `${500 + i * 120}ms` }}
                  >
                    <div className="relative z-10 w-9 h-9 rounded-full bg-muted border-2 border-primary/40 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-mono text-primary font-bold">{m.year}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between glass rounded-lg px-4 py-3 hover:box-glow transition-all duration-300">
                      <span className="text-sm text-muted-foreground">{m.label}</span>
                      <span className="text-sm font-bold text-primary font-mono">{m.subs}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
