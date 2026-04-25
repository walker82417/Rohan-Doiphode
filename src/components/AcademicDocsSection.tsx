import { useState, useEffect, FormEvent } from "react";
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
  {
    src: doc1,
    title: "HSC Certificate",
    board: "Maharashtra State Board, Pune Division",
    grade: "68.33%",
    date: "2022",
  },
  {
    src: doc2,
    title: "SSC Certificate",
    board: "Maharashtra State Board, Pune Division",
    grade: "79.60%",
    date: "2020",
  },
  {
    src: doc3,
    title: "Engineering — First Year",
    board: "KIT's College of Engineering, Kolhapur",
    grade: "CGPA: 6.9",
    date: "2022–23",
  },
  {
    src: doc4,
    title: "Engineering — Third Year",
    board: "KIT's College of Engineering, Kolhapur",
    grade: "CGPA: 7.5",
    date: "2024–25",
  },
  {
    src: doc5,
    title: "Engineering — Second Year",
    board: "KIT's College of Engineering, Kolhapur",
    grade: "CGPA: 7.82",
    date: "2023–24",
  },
];

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 5 * 60_000;
const STORAGE_KEY = "academic-docs-lockout";

type LockoutState = { attempts: number; lockedUntil: number };

function readLockout(): LockoutState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { attempts: 0, lockedUntil: 0 };
    return JSON.parse(raw);
  } catch {
    return { attempts: 0, lockedUntil: 0 };
  }
}

function writeLockout(state: LockoutState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export default function AcademicDocsSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(0);
  const [now, setNow] = useState(() => Date.now());

  // Hydrate lockout state from localStorage on mount
  useEffect(() => {
    const s = readLockout();
    setAttempts(s.attempts);
    setLockedUntil(s.lockedUntil);
  }, []);

  // Tick every second while locked so the countdown updates
  const isLocked = lockedUntil > now;
  useEffect(() => {
    if (!isLocked) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [isLocked]);

  const secondsLeft = Math.max(0, Math.ceil((lockedUntil - now) / 1000));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isLocked) return;
    setLoading(true);
    setError("");
    try {
      const hash = await sha256(password);
      if (hash === PASSWORD_HASH) {
        setUnlocked(true);
        setAttempts(0);
        setLockedUntil(0);
        writeLockout({ attempts: 0, lockedUntil: 0 });
      } else {
        const newAttempts = attempts + 1;
        if (newAttempts >= MAX_ATTEMPTS) {
          const until = Date.now() + LOCKOUT_MS;
          setAttempts(newAttempts);
          setLockedUntil(until);
          setNow(Date.now());
          writeLockout({ attempts: newAttempts, lockedUntil: until });
          setError(`Too many failed attempts. Locked for ${LOCKOUT_MS / 60_000} minutes.`);
        } else {
          setAttempts(newAttempts);
          writeLockout({ attempts: newAttempts, lockedUntil: 0 });
          setError(
            `Incorrect password. ${MAX_ATTEMPTS - newAttempts} attempt${
              MAX_ATTEMPTS - newAttempts === 1 ? "" : "s"
            } remaining.`,
          );
        }
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  // Auto-reset attempts once the lockout window expires
  useEffect(() => {
    if (lockedUntil && !isLocked) {
      setAttempts(0);
      setLockedUntil(0);
      writeLockout({ attempts: 0, lockedUntil: 0 });
      setError("");
    }
  }, [isLocked, lockedUntil]);

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
                placeholder={isLocked ? "Locked" : "Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                disabled={isLocked}
                className="bg-background/50"
                aria-label="Access password"
              />
              {isLocked ? (
                <p className="text-sm text-destructive text-center">
                  Too many failed attempts. Try again in{" "}
                  {Math.floor(secondsLeft / 60)}:
                  {String(secondsLeft % 60).padStart(2, "0")}.
                </p>
              ) : (
                error && <p className="text-sm text-destructive">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={loading || !password || isLocked}
              >
                {isLocked
                  ? `Locked (${Math.floor(secondsLeft / 60)}:${String(
                      secondsLeft % 60,
                    ).padStart(2, "0")})`
                  : loading
                  ? "Verifying..."
                  : "Unlock Documents"}
              </Button>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] text-left flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={doc.src}
                    alt={doc.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 border-t border-border/50 space-y-1.5">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-1">
                    {doc.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>{doc.page}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="text-primary/90">{doc.grade}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{doc.date}</span>
                  </div>
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
