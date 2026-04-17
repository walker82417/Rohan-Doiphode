import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send, ShieldCheck, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [verifyState, setVerifyState] = useState<"idle" | "verifying" | "done">("idle");
  const [countdown, setCountdown] = useState(0);

  const startVerification = useCallback(() => {
    if (verifyState !== "idle") return;
    const seconds = Math.floor(Math.random() * 8) + 3; // 3-10s
    setCountdown(seconds);
    setVerifyState("verifying");

    let remaining = seconds;
    const interval = setInterval(() => {
      remaining -= 1;
      setCountdown(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        setVerifyState("done");
      }
    }, 1000);
  }, [verifyState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(formState.message);
    window.open(`https://mail.google.com/mail/?view=cm&to=rohandoiphode1@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-muted-foreground mb-6 text-sm lg:text-base">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something innovative. and I'm currently open to work. If you're hiring or have a role that matches my profile, please reach out via the form below or email me directly. Let's talk!
            </p>
            <div className="space-y-3">
              <a href="https://mail.google.com/mail/?view=cm&to=rohandoiphode1@gmail.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                rohandoiphode1@gmail.com
              </a>

              {/* Phone with timed verification */}
              <div>
                {verifyState === "idle" && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Phone className="w-4 h-4" />
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer select-none group" onClick={startVerification}>
                      <div className="w-5 h-5 rounded border-2 border-muted-foreground/40 group-hover:border-primary flex items-center justify-center transition-colors" />
                      <span className="text-muted-foreground text-sm">Verify you're human to see number</span>
                    </label>
                  </div>
                )}
                {verifyState === "verifying" && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center">
                        <Loader2 className="w-3 h-3 animate-spin text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">Verifying... {countdown}s</span>
                    </div>
                  </div>
                )}
                {verifyState === "done" && (
                  <a href="tel:+919370686485"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group animate-fade-in">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="flex items-center gap-1.5">
                      +91-9370686485
                      <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                    </span>
                  </a>
                )}
              </div>

              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                Kolhapur, India
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}
            className={`space-y-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <input
              type="text" placeholder="Your Name" required
              value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <input
              type="email" placeholder="Your Email" required
              value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <textarea
              placeholder="Your Message" rows={3} required
              value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
            />
            <button type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
