"use client";

import { useEffect } from "react";

/**
 * Powers the FAQ accordion blocks (elements with [data-faq], containing a
 * <button>, a [data-panel], and a [data-icon]) on any page, using the same
 * plain-DOM toggle behaviour as the original static site. Uses event
 * delegation so it works across client-side navigations without needing to
 * re-run on every page.
 */
export default function FaqEnhancer() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const item = target.closest("[data-faq]");
      if (!item) return;
      const btn = item.querySelector("button");
      if (!btn || !btn.contains(target)) return;

      const panel = item.querySelector("[data-panel]");
      const icon = item.querySelector("[data-icon]");
      if (!panel) return;

      const wasOpen = !panel.classList.contains("hidden");
      panel.classList.toggle("hidden");
      if (icon) icon.textContent = wasOpen ? "+" : "–";
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
