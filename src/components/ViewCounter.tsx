import { Eye } from "lucide-react";
import { useVisitorCount } from "@/hooks/useVisitorCount";

export default function ViewCounter() {
  const count = useVisitorCount();

  return (
    <div
      className="fixed bottom-3 left-3 z-50 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur-md shadow-sm"
      aria-label="Total website views"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      <Eye className="w-3 h-3" aria-hidden="true" />
      <span className="font-mono tabular-nums">
        {count > 0 ? count.toLocaleString() : "—"}
      </span>
    </div>
  );
}
