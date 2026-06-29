import { useEffect, useState } from "react";

const STORAGE_KEY = "rohan-portfolio-total-views";

export function useVisitorCount() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const current = stored ? parseInt(stored, 10) : 0;
      const next = Number.isNaN(current) ? 1 : current + 1;
      localStorage.setItem(STORAGE_KEY, String(next));
      setCount(next);
    } catch {
      // localStorage unavailable (private mode / restricted) — fallback to 0
      setCount(0);
    }
  }, []);

  return count;
}
