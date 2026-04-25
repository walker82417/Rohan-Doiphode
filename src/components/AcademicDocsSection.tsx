import { useState, FormEvent } from "react";
import { Lock, GraduationCap, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import doc1 from "@/assets/IMG-20260105-WA0021(1).jpg";
import doc2 from "@/assets/IMG-20260105-WA0023(1).jpg";
import doc3 from "@/assets/IMG-20260105-WA0046.jpg";
import doc4 from "@/assets/IMG-20260105-WA0048.jpg";
import doc5 from "@/assets/IMG-20260105-WA0050.jpg";

// SHA-256 hash of the access password. The plain password is NOT stored
// anywhere in the source — only this hash is shipped to the browser.
const PASSWORD_HASH =
  "861b41246ff331942acac27d3ec8d63c589b879208e3a18c916ec9583a246fd6";

const documents = [
  { src: doc1, title: "Academic Document 1" },
  { src: doc2, title: "Academic Document 2" },
  { src: doc3, title: "Academic Document 3" },
  { src: doc4, title: "Academic Document 4" },
  { src: doc5, title: "Academic Document 5" },
];

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function AcademicDocsSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const hash = await sha256(password);
      if (hash === PASSWORD_HASH) {
        setUnlocked(true);
      } else {
        setError("Incorrect password. Access denied.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + documents.length) % documents.length);
  };
  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % documents.length);
  };

  return (
    <section id="academic-docs" className="py-24 relative">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Private Section</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="text-primary text-glow">Documents</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Protected access to academic certificates and credentials.
          </p>
        </div>

        {!unlocked ? (
          <div className="max-w-md mx-auto glass rounded-2xl p-8 border border-primary/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Lock className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Enter Password</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              This section is password protected.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="bg-background/50"
                aria-label="Access password"
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading || !password}>
                {loading ? "Verifying..." : "Unlock Documents"}
              </Button>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={doc.src}
                    alt={doc.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-sm font-medium text-foreground">{doc.title}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setActiveIndex(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-card/80 hover:bg-card border border-border"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              className="absolute left-4 md:left-8 p-3 rounded-full bg-card/80 hover:bg-card border border-border"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <img
              src={documents[activeIndex].src}
              alt={documents[activeIndex].title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute right-4 md:right-8 p-3 rounded-full bg-card/80 hover:bg-card border border-border"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
