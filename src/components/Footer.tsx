export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          Designed & Built by <span className="text-primary font-mono">Rohan Doiphode</span>
        </p>
        <p className="text-xs text-muted-foreground/50 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
