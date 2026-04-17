import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Battery, Mountain, Fish, Bot, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Wireless EV Charging System",
    desc: "Designed a wireless power transfer system for electric vehicles, enabling convenient and efficient charging without physical connectors.",
    icon: Zap,
    tags: ["Power Electronics", "EV", "Wireless"],
  },
  {
    title: "Superconducting Magnetic Energy Storage",
    desc: "Developed a SMES system for efficient energy storage using superconducting coils, improving grid stability and power quality.",
    icon: Battery,
    tags: ["Energy Storage", "Power Systems", "SMES"],
  },
  {
    title: "Landslide Detection & Early Warning",
    desc: "IoT-based monitoring system with sensors and real-time alerts to detect and warn about potential landslide hazards.",
    icon: Mountain,
    tags: ["IoT", "Sensors", "Safety"],
  },
  {
    title: "AI-Driven Aquaculture Monitoring",
    desc: "IoT and AI-powered system for real-time monitoring and management of aquaculture farms, optimizing fish health and productivity.",
    icon: Fish,
    tags: ["IoT", "AI", "Aquaculture"],
  },
  {
    title: "AI Chatbot for Industrial Machines",
    desc: "Real-time monitoring and predictive support chatbot for industrial machines using AI-driven analytics. Currently in development.",
    icon: Bot,
    tags: ["AI", "Industry 4.0", "Chatbot"],
    ongoing: true,
  },
  {
    title: "PLC Based Automatic Car Washing System",
    desc: "Automated car washing system using PLC programming for sequential control of washing stages. 2nd Runner-Up in Project Based Learning 2025-26.",
    icon: Zap,
    tags: ["PLC", "Automation", "Industry"],
  },
  {
    title: "Transformer Safety Device",
    desc: "Designed a protective device for transformers that detects overload conditions and prevents equipment damage.",
    icon: ShieldCheck,
    tags: ["Protection", "Transformers", "Safety"],
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass rounded-xl p-6 group hover:box-glow transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6" />
                </div>
                {p.ongoing && (
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 animate-pulse-glow">
                    Ongoing
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
