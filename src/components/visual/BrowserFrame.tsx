import Image from "next/image";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";

/**
 * Web dashboard / browser window mockup for the Ole management panel.
 * `src` optional — falls back to a designed placeholder.
 */
export function BrowserFrame({
  src,
  alt,
  placeholderLabel,
  placeholderHint,
  caption,
  sizes = "(min-width: 1024px) 40rem, 92vw",
  className,
}: {
  src?: string;
  alt: string;
  placeholderLabel?: string;
  placeholderHint?: string;
  caption?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-2xl border border-fg/10 bg-bg shadow-[0_24px_70px_-24px_rgba(0,0,0,0.28)]">
        <div className="flex items-center gap-2 border-b border-border bg-fg/[0.03] px-4 py-3">
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="ml-3 h-5 flex-1 max-w-xs rounded-md bg-fg/[0.06]" />
        </div>
        <div className="relative aspect-[16/9] bg-bg">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-top"
            />
          ) : (
            <ImagePlaceholder
              kind="panel"
              label={placeholderLabel ?? alt}
              hint={placeholderHint}
              className="h-full rounded-none border-0"
            />
          )}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-fg-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
