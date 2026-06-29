import { Youtube, Linkedin, Mail, Github, Instagram, Eye } from "lucide-react";
import { useVisitorCount } from "@/hooks/useVisitorCount";

export default function Footer() {
  const viewCount = useVisitorCount();

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <a href="https://www.youtube.com/@walkersmusicworld" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-red-400 hover:bg-muted/50 transition-all">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/rohandoiphode/" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-blue-400 hover:bg-muted/50 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/walker82417/" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/its_rohan_82417/" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-pink-400 hover:bg-muted/50 transition-all">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=rohandoiphode1@gmail.com" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Designed & Built by <span className="text-primary font-mono">Rohan Doiphode</span>
        </p>
        <p className="text-xs text-muted-foreground/50 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>

      {/* Privacy-friendly live view counter — fixed in bottom-left */}
      <div
        className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-muted-foreground/70 font-mono"
        aria-label="Total website views"
        title="No cookies, no IP tracking — just a global page-view counter"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        <Eye className="w-3 h-3" aria-hidden="true" />
        <span className="tabular-nums">
          {viewCount > 0 ? viewCount.toLocaleString() : "—"}
        </span>
        <span>views</span>
      </div>
    </footer>
  );
}
