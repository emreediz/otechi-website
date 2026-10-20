import { ViewTransition } from "react";
import type { ReactNode } from "react";

/**
 * Wraps a page's content so route changes crossfade with a small rise
 * (`.page-exit` / `.page-enter` in globals.css). Must sit inside the page,
 * not a layout — layouts persist, so enter/exit would never fire there.
 *
 * Browsers without the View Transitions API, first loads and reduced motion
 * get an instant swap. Switching language (the [lang] layout remounts) and
 * moving between the [lang] pages and /urunler/* documents also swap
 * instantly, because the wrapper is then inside newly inserted layout DOM.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {/* One host element, so the page snapshots as a single layer. */}
      <div>{children}</div>
    </ViewTransition>
  );
}
