import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Digital & Automation",
    skills: ["Industrial IoT (IIoT)", "PLC Programming", "SCADA Basics", "AI Predictive Maintenance", "MATLAB/Simulink"],
    color: "cyan",
  },
  {
    title: "Core Engineering",
    skills: ["Power Systems Analysis", "Switchgear & Protection", "Renewable Energy", "Reactive Power Mgmt", "Circuit Design", "T&D"],
    color: "emerald",
  },
  {
    title: "Tools & Safety",
    skills: ["HIRA", "MS Office", "AutoCAD", "VS Code", "GitHub"],
    color: "amber",
  },
  {
    title: "Soft Skills",
    skills: ["Problem-solving", "Agility & Adaptability", "Cross-Functional Collaboration"],
    color: "rose",
  },
];

const colorMap: Record<string, { heading: string; tag: string }> = {
  cyan: {
    heading: "text-primary",
    tag: "border-primary/25 text-primary bg-primary/5 hover:bg-primary/15",
  },
  emerald: {
    heading: "text-emerald-400",
    tag: "border-emerald-400/25 text-emerald-400 bg-emerald-400/5 hover:bg-emerald-400/15",
  },
  amber: {
    heading: "text-amber-400",
    tag: "border-amber-400/25 text-amber-400 bg-amber-400/5 hover:bg-amber-400/15",
  },
  rose: {
    heading: "text-rose-400",
    tag: "border-rose-400/25 text-rose-400 bg-rose-400/5 hover:bg-rose-400/15",
  },
};

const languages = ["English", "Hindi", "Marathi"];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative circuit-dot">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-base block mb-2">02.</span>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => {
            const colors = colorMap[cat.color];
            return (
              <div
                key={cat.title}
                className={`glass rounded-xl p-6 hover:box-glow transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <h3 className={`font-semibold font-mono text-sm mb-4 ${colors.heading}`}>
                  {`// ${cat.title}`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 hover:scale-105 ${colors.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-6 glass rounded-xl p-6 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-semibold font-mono text-sm text-primary mb-4">{"// Languages"}</h3>
          <div className="flex gap-4">
            {languages.map((lang) => (
              <span key={lang} className="px-4 py-2 rounded-lg border border-border bg-secondary/50 text-sm text-foreground">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
