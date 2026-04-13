import { Youtube, Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
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
    </footer>
  );
}
