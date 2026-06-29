import { useEffect, useState } from "react";

// Global real-time view counter via free CounterAPI (no auth, no DB setup).
// Each page load increments the global counter once per session.
const NAMESPACE = "rohan-doiphode-portfolio";
const KEY = "site-views";
const SESSION_FLAG = "rd-view-counted";
const LOCAL_FALLBACK = "rd-view-cache";

export function useVisitorCount() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;

    const cached = Number(localStorage.getItem(LOCAL_FALLBACK) || 0);
    if (cached) setCount(cached);

    const alreadyCounted = sessionStorage.getItem(SESSION_FLAG) === "1";
    const endpoint = alreadyCounted
      ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`
      : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up/`;

    fetch(endpoint)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const value = Number(data?.count ?? 0);
        if (value > 0) {
          setCount(value);
          localStorage.setItem(LOCAL_FALLBACK, String(value));
          if (!alreadyCounted) sessionStorage.setItem(SESSION_FLAG, "1");
        }
      })
      .catch(() => {
        // keep cached fallback
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}
