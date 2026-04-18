import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Zap, Youtube, Briefcase, ChevronDown, MapPin, ExternalLink, School, BookOpen } from "lucide-react";

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
    website?: string;
    email?: string;
  };
}

const cards: DetailCard[] = [
  {
    icon: GraduationCap,
    title: "B.E. Electrical Engineering",
    desc: "CGPA: 7.5/10 | 2022 to 2026 (Final Year)",
    sub: "KIT's College of Engineering (Autonomous), Kolhapur",
    expandable: true,
    details: {
      institution: "KIT's College of Engineering (Autonomous), Kolhapur",
      city: "Kolhapur, Maharashtra, India",
      mapUrl: "https://maps.google.com/?q=KIT's+College+of+Engineering+Kolhapur",
      website: "https://www.kitcoek.in",
      email: "info@kitcoek.in",
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
    icon: BookOpen,
    title: "HSC (12th Standard)",
    desc: "68.33% | Completed in 2022",
    sub: "Vivek Vardhini Vidyalaya & Jr. College, Pandharpur",
    expandable: true,
    details: {
      institution: "Vivek Vardhini Vidyalaya & Jr. College, Pandharpur",
      city: "Pandharpur, Solapur, Maharashtra, India",
      mapUrl: "https://maps.google.com/?q=Vivek+Vardhini+Vidyalaya+Pandharpur+Solapur",
      extras: [
        "Examination: HSC (12th Standard)",
        "Percentage: 68.33%",
        "Year of Completion: 2022",
        "Board: Maharashtra State Board of Secondary & Higher Secondary Education, Pune Division",
      ],
    },
  },
  {
    icon: School,
    title: "SSC (10th Standard)",
    desc: "79.8% | Completed in 2020",
    sub: "Vivek Vardhini Vidyalaya, Pandharpur",
    expandable: true,
    details: {
      institution: "Vivek Vardhini Vidyalaya, Pandharpur",
      city: "Pandharpur, Solapur, Maharashtra, India",
      mapUrl: "https://maps.google.com/?q=Vivek+Vardhini+Vidyalaya+Pandharpur+Solapur",
      extras: [
        "Examination: SSC (10th Standard)",
        "Percentage: 79.8%",
        "Year of Completion: 2020",
        "Board: Maharashtra State Board of Secondary & Higher Secondary Education, Pune Division",
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
    desc: "Walkers Music World | 43.5K+ Subscribers",
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
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
              with <span className="text-foreground font-medium">43.5K+ subscribers</span> and growing! I actively create and curate content, bringing the same passion for creativity to music as I do to engineering.
            </p>
          </div>

          <div className={`space-y-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {cards.map((item, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden hover:box-glow transition-all duration-300 group">
                <div
                  className={`flex items-start gap-4 p-4 ${item.expandable ? "cursor-pointer" : ""}`}
                  onClick={() => item.expandable && setExpanded(expanded === i ? null : i)}
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-0.5 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{item.sub}</p>
                  </div>
                  {item.expandable && (
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 mt-1 shrink-0 ${expanded === i ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {item.expandable && item.details && expanded === i && (
                  <div className="px-4 pb-4 border-t border-border/30 pt-3 animate-fade-up">
                    <div className="space-y-1.5 mb-3">
                      {item.details.extras.map((extra, j) => (
                        <p key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5 text-xs">&#9656;</span> {extra}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={item.details.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {item.details.city}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {item.details.website && (
                        <a
                          href={item.details.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs hover:bg-accent/20 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Website
                        </a>
                      )}
                      {item.details.email && (
                        <a
                          href={`mailto:${item.details.email}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs hover:bg-accent/20 transition-colors"
                        >
                          {item.details.email}
                        </a>
                      )}
                    </div>
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
