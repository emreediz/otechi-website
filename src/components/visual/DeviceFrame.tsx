import Image from "next/image";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";

/**
 * Phone mockup. Pass `src` for a real (already header-cropped) screenshot,
 * or leave it out to render a designed placeholder.
 */
export function DeviceFrame({
  src,
  alt,
  placeholderLabel,
  placeholderHint,
  caption,
  priority = false,
  sizes = "(min-width: 1024px) 22rem, 60vw",
  className,
}: {
  src?: string;
  alt: string;
  placeholderLabel?: string;
  placeholderHint?: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <div className="relative w-full rounded-[2rem] border border-fg/10 bg-fg/[0.03] p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-fg/15" />
        <div className="relative aspect-[9/17] overflow-hidden rounded-[1.5rem] bg-bg">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover object-top"
            />
          ) : (
            <ImagePlaceholder
              kind="phone"
              label={placeholderLabel ?? alt}
              hint={placeholderHint}
              className="h-full rounded-[1.5rem] border-0"
            />
          )}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs text-fg-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
