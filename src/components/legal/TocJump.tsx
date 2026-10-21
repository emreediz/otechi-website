"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Phones: a floating "Contents" button on long documents, shown once the
 * table of contents (`#${targetId}`) has scrolled away above, and hidden
 * again while the footer (with its own "Back to top") is on screen. It
 * jumps back to the contents and opens the collapsed list. Not part of the
 * document text.
 */
export function TocJump({ targetId, label }: { targetId: string; label: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const footer = document.querySelector(".site-footer");
    let raf = 0;
    const update = () => {
      raf = 0;
      const above = target.getBoundingClientRect().bottom < 0;
      const footerIn =
        !!footer && footer.getBoundingClientRect().top < window.innerHeight;
      setShow(above && !footerIn);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  return (
    <a
      href={`#${targetId}`}
      onClick={() => {
        document
          .getElementById(targetId)
          ?.querySelector("details")
          ?.setAttribute("open", "");
      }}
      tabIndex={show ? undefined : -1}
      aria-hidden={show ? undefined : true}
      className={cn(
        "pill fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 h-11 px-5 shadow-lg transition-[opacity,translate] duration-300 ease-out-expo lg:hidden print:hidden",
        show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}
