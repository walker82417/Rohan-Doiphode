import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Zap, Youtube, Briefcase } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

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
            {[
              { icon: GraduationCap, title: "Education", desc: "B.E. Electrical Engineering | CGPA: 7.5/10", sub: "KIT's College of Engineering, 2022 to 2026" },
              { icon: Briefcase, title: "Internship", desc: "Quality Engineer | 4 Months", sub: "ILJIN Electronics Pvt Ltd, India" },
              { icon: Zap, title: "Focus Areas", desc: "Power Systems • IoT • AI • Automation", sub: "Bridging traditional & modern engineering" },
              { icon: Youtube, title: "Content Creator", desc: "Walkers Music World | 43K+ Subscribers", sub: "Alan Walker fan page | Actively updated" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5 hover:box-glow transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
