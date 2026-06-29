import { useEffect, useState } from "react";

// Privacy-friendly global view counter.
// - No cookies, no IP logging, no fingerprinting.
// - Uses the free CounterAPI service which only stores an anonymous integer.
// - Polls every 10s so the number updates in near real-time as others visit.
const NAMESPACE = "rohan-doiphode-portfolio";
const KEY = "site-views";
const SESSION_FLAG = "rd-view-counted";
const LOCAL_FALLBACK = "rd-view-cache";
const POLL_MS = 10_000;

async function fetchCount(increment: boolean): Promise<number | null> {
  const url = increment
    ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up/`
    : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    const value = Number(data?.count);
    return Number.isFinite(value) && value > 0 ? value : null;
  } catch {
    return null;
  }
}

export function useVisitorCount() {
  const [count, setCount] = useState<number>(() => {
    const cached = Number(localStorage.getItem(LOCAL_FALLBACK) || 0);
    return Number.isFinite(cached) ? cached : 0;
  });

  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;

    const apply = (value: number) => {
      if (cancelled) return;
      setCount(value);
      localStorage.setItem(LOCAL_FALLBACK, String(value));
    };

    const init = async () => {
      const alreadyCounted = sessionStorage.getItem(SESSION_FLAG) === "1";
      const value = await fetchCount(!alreadyCounted);
      if (value !== null) {
        apply(value);
        if (!alreadyCounted) sessionStorage.setItem(SESSION_FLAG, "1");
      }
    };

    const poll = async () => {
      const value = await fetchCount(false);
      if (value !== null) apply(value);
    };

    init();
    timer = window.setInterval(poll, POLL_MS);

    return () => {
      cancelled = true;
      if (timer) window.clearInterval(timer);
    };
  }, []);

  return count;
}
