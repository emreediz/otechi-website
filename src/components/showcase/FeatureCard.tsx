import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Bento card: a short title and line of text, then a tinted stage holding a
 * coded mock-up (or product image).
 */
export function FeatureCard({
  title,
  body,
  children,
  large = false,
  className,
}: {
  title: string;
  body: string;
  children: ReactNode;
  /** Larger title for the wide cards. */
  large?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("card stagger-item flex flex-col", className)}>
      <h3 className={cn("text-balance", large ? "text-title-l" : "text-title")}>
        {title}
      </h3>
      <p className="mt-2.5 max-w-[40ch] text-fg-soft">{body}</p>
      <div className="mt-8 flex min-h-[16rem] flex-1 items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(80%_70%_at_50%_100%,var(--accent-soft),var(--surface))] p-4 sm:p-8 [&>*]:min-w-0">
        {children}
      </div>
    </article>
  );
}
