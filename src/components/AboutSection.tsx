import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Zap, Youtube, Briefcase, ChevronDown, MapPin, ExternalLink } from "lucide-react";

interface DetailCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  sub: string;
  expandable?: boolean;
  details?: {
    institution: string;
    city: string;
    mapUrl: string;
    extras: string[];
  };
}

const cards: DetailCard[] = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "B.E. Electrical Engineering | CGPA: 7.5/10",
    sub: "KIT's College of Engineering, 2022 to 2026",
    expandable: true,
    details: {
      institution: "KIT's College of Engineering (Autonomous), Kolhapur",
      city: "Kolhapur, Maharashtra, India",
      mapUrl: "https://maps.google.com/?q=KIT's+College+of+Engineering+Kolhapur",
      extras: [
        "Degree: Bachelor of Engineering (B.E.)",
        "Branch: Electrical Engineering",
        "Duration: 2022 to 2026 (Final Year)",
        "CGPA: 7.5 / 10",
        "University: Shivaji University, Kolhapur",
      ],
    },
  },
  {
    icon: Briefcase,
    title: "Internship",
    desc: "Quality Engineer | 4 Months",
    sub: "ILJIN Electronics Pvt Ltd, India",
    expandable: true,
    details: {
      institution: "ILJIN Electronics Pvt Ltd",
      city: "Bhima Koregaon, Pune, Maharashtra, India",
      mapUrl: "https://maps.google.com/?q=Bhima+Koregaon+Pune+Maharashtra",
      extras: [
        "Role: Quality Engineer (Intern)",
        "Duration: 4 Months",
        "Focus: Quality assurance and process optimization",
        "Industry: Electronics Manufacturing",
      ],
    },
  },
  {
    icon: Zap,
    title: "Focus Areas",
    desc: "Power Systems, IoT, AI, Automation",
    sub: "Bridging traditional and modern engineering",
  },
  {
    icon: Youtube,
    title: "Content Creator",
    desc: "Walkers Music World | 43K+ Subscribers",
    sub: "Alan Walker fan page | Actively updated",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 relative">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-base block mb-2">01.</span>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Final Year <span className="text-foreground font-medium">Electrical Engineering</span> student at KIT's College of Engineering, Kolhapur, with a passion for blending traditional power systems with cutting-edge IoT and AI technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My goal is to drive <span className="text-primary">sustainable energy solutions</span> and operational excellence through innovative engineering. From wireless EV charging to AI-driven industrial monitoring, I love tackling complex problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also run an <span className="text-accent">Alan Walker fan page on YouTube</span> called{" "}
              <a href="https://www.youtube.com/@walkersmusicworld" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Walkers Music World
              </a>{" "}
              with <span className="text-foreground font-medium">43K+ subscribers</span> and growing! I actively create and curate content, bringing the same passion for creativity to music as I do to engineering.
            </p>
          </div>

          <div className={`space-y-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {cards.map((item, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden hover:box-glow transition-all duration-300 group">
                <div
                  className={`flex items-start gap-4 p-5 ${item.expandable ? "cursor-pointer" : ""}`}
                  onClick={() => item.expandable && setExpanded(expanded === i ? null : i)}
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>
                  </div>
                  {item.expandable && (
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 mt-1 ${expanded === i ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {item.expandable && item.details && expanded === i && (
                  <div className="px-5 pb-5 border-t border-border/30 pt-4 animate-fade-up">
                    <div className="space-y-2 mb-4">
                      {item.details.extras.map((extra, j) => (
                        <p key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">&#9656;</span> {extra}
                        </p>
                      ))}
                    </div>
                    <a
                      href={item.details.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      {item.details.city}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
