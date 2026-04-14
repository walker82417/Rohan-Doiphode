import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const sections = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", id: "gallery" },
  { label: "YouTube", id: "youtube" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 120;
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollPos) {
          current = s.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="container flex items-center justify-between">
        {/* Profile photo appears on scroll, otherwise show Home text */}
        <button onClick={scrollToTop} className="flex items-center gap-2 group">
          <div className={`transition-all duration-500 ease-in-out overflow-hidden rounded-full border-2 border-primary/30 group-hover:border-primary/60 ${scrolled ? "w-9 h-9 opacity-100" : "w-0 h-0 opacity-0"}`}>
            <img src={profilePhoto} alt="Rohan" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className={`text-xl font-bold text-primary text-glow transition-all duration-300 ${scrolled ? "text-base" : ""}`}>
            {scrolled ? "" : "Home"}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-sm transition-all duration-300 relative pb-0.5 ${
                activeSection === s.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {s.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary rounded transition-all duration-300 ${
                  activeSection === s.id ? "w-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-up">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}
              className={`block py-2 transition-colors ${activeSection === s.id ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}>
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
