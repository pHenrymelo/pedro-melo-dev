"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = sectionIds.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
