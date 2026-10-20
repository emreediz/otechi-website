"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

const KEY = "otechi-mode";

// The mode lives on <html data-mode>; watch it so every toggle (header and
// menu) stays in sync.
function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-mode"],
  });
  return () => mo.disconnect();
}
const isLight = () => document.documentElement.dataset.mode === "light";

/**
 * Light/dark switch. Dark is the default; the choice is kept in
 * localStorage and applied before first paint by the root layout script.
 */
export function ModeToggle({
  label,
  className,
}: {
  /** Accessible name, e.g. "Light theme" (the button is a toggle). */
  label: string;
  className?: string;
}) {
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  function toggle() {
    const root = document.documentElement;
    if (light) delete root.dataset.mode;
    else root.dataset.mode = "light";
    try {
      if (light) localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, "light");
    } catch {
      // Storage can be unavailable (private mode); the switch still works.
    }
  }

  return (
    <button
      type="button"
      aria-pressed={light}
      aria-label={label}
      onClick={toggle}
      className={cn("icon-pill", className)}
    >
      {light ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
