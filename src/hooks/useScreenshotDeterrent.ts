import { useEffect } from "react";

/**
 * Site-wide screenshot / copy deterrents.
 * Note: cannot truly block OS-level screenshots; these only inconvenience casual users.
 */
export function useScreenshotDeterrent() {
  useEffect(() => {
    const prevUserSelect = document.body.style.userSelect;
    const prevWebkitUserSelect = (document.body.style as any).webkitUserSelect;
    document.body.style.userSelect = "none";
    (document.body.style as any).webkitUserSelect = "none";

    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-screenshot-deterrent", "true");
    styleEl.textContent = `
      img, video, canvas, svg { -webkit-user-drag: none; user-drag: none; -webkit-touch-callout: none; }
      input, textarea, [contenteditable="true"] { user-select: text !important; -webkit-user-select: text !important; }
      body.app-blurred > *:not(.blur-overlay) { filter: blur(24px) !important; transition: filter 200ms ease; pointer-events: none !important; }
      .blur-overlay {
        position: fixed; inset: 0; z-index: 2147483647;
        display: flex; align-items: center; justify-content: center;
        background: rgba(15, 23, 42, 0.85); color: #fff;
        font-family: Inter, system-ui, sans-serif; font-size: 1.1rem; text-align: center; padding: 2rem;
        backdrop-filter: blur(8px);
      }
    `;
    document.head.appendChild(styleEl);

    const overlay = document.createElement("div");
    overlay.className = "blur-overlay";
    overlay.style.display = "none";
    overlay.innerHTML = `<div>Content hidden while this window is not focused.<br/><span style="opacity:.7;font-size:.9rem">Return to the tab to continue.</span></div>`;

    const showBlur = () => {
      document.body.classList.add("app-blurred");
      overlay.style.display = "flex";
    };
    const hideBlur = () => {
      document.body.classList.remove("app-blurred");
      overlay.style.display = "none";
    };

    // Append overlay after a tick so it lives outside blurred children
    document.body.appendChild(overlay);

    const onContext = (e: MouseEvent) => e.preventDefault();
    const onDragStart = (e: DragEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "IMG" || t.tagName === "VIDEO" || t.tagName === "CANVAS")) {
        e.preventDefault();
      }
    };
    const onCopy = (e: ClipboardEvent) => {
      const t = e.target as HTMLElement;
      const tag = t?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (t as any)?.isContentEditable) return;
      e.preventDefault();
    };

    const clearClipboard = () => {
      try {
        if (navigator.clipboard && (navigator.clipboard as any).writeText) {
          navigator.clipboard.writeText("").catch(() => {});
        }
      } catch {}
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const k = key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;

      // PrintScreen
      if (key === "PrintScreen") {
        clearClipboard();
        showBlur();
        window.setTimeout(hideBlur, 1200);
        e.preventDefault();
        return;
      }
      // F12
      if (key === "F12") { e.preventDefault(); return; }
      // Ctrl+S, Ctrl+P, Ctrl+U
      if (ctrl && !e.shiftKey && (k === "s" || k === "p" || k === "u")) {
        e.preventDefault(); return;
      }
      // Ctrl+Shift+S / I / J / C
      if (ctrl && e.shiftKey && (k === "s" || k === "i" || k === "j" || k === "c")) {
        e.preventDefault(); return;
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") clearClipboard();
    };

    const onBlur = () => showBlur();
    const onFocus = () => hideBlur();
    const onVisibility = () => {
      if (document.hidden) showBlur();
      else hideBlur();
    };

    document.addEventListener("contextmenu", onContext);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("copy", onCopy);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisibility);
      document.body.style.userSelect = prevUserSelect;
      (document.body.style as any).webkitUserSelect = prevWebkitUserSelect;
      styleEl.remove();
      overlay.remove();
      document.body.classList.remove("app-blurred");
    };
  }, []);
}
