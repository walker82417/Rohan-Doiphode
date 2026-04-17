import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Trophy } from "lucide-react";

const achievements = [
  { title: "1st Prize, Project Based Learning", date: "April 2025", icon: Trophy, highlight: true },
  { title: "1st Runner-Up, Project Based Learning", date: "November 2024", icon: Trophy, highlight: false },
  { title: "2nd Runner-Up, Project Based Learning (2025-26)", date: "PLC Based Automatic Car Washing System", icon: Trophy, highlight: false },
  { title: "Recent Advances in Transmission Insulators", date: "NPTEL Certificate, Feb 2025", icon: Award, highlight: false },
  { title: "Power System Reliability & Performance Analysis", date: "Nov 2023", icon: Award, highlight: false },
  { title: "Introduction to AI Tool", date: "Be10x Certificate", icon: Award, highlight: false },
];

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-16 lg:py-20 circuit-dot">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className="space-y-4 max-w-3xl">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className={`glass rounded-xl p-4 sm:p-5 flex items-start sm:items-center gap-3 sm:gap-4 group hover:box-glow transition-all duration-500 ${
                a.highlight ? "border-primary/30" : ""
              } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className={`p-2.5 rounded-lg transition-colors ${
                a.highlight ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground group-hover:text-primary"
              }`}>
                <a.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold ${a.highlight ? "text-primary" : "text-foreground"}`}>{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.date}</p>
              </div>
              {a.highlight && (
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                  Top
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
