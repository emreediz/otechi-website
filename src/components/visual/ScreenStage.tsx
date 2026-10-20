import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * A product image on a tinted stage. `phone`: a framed phone screen rising
 * from the bottom edge; `card`: a cropped UI card shown whole; `browser`: a
 * full dashboard screenshot in a minimal window frame. Carries `clip-reveal`,
 * so inside a `<Reveal variant="trigger">` it opens upward on scroll.
 */
export function ScreenStage({
  kind,
  src,
  alt,
  w,
  h,
  sizes = "(min-width: 1024px) 34rem, 92vw",
  className,
}: {
  kind: "phone" | "card" | "browser";
  src: string;
  alt: string;
  w: number;
  h: number;
  sizes?: string;
  className?: string;
}) {
  const stage = cn(
    "clip-reveal relative flex justify-center overflow-hidden rounded-3xl bg-bg-subtle",
    className,
  );

  if (kind === "browser") {
    return (
      <div className={cn(stage, "p-4 sm:p-8")}>
        <div className="w-full overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
          <div
            aria-hidden="true"
            className="flex gap-1.5 border-b border-black/5 px-4 py-3"
          >
            <span className="size-2.5 rounded-full bg-black/10" />
            <span className="size-2.5 rounded-full bg-black/10" />
            <span className="size-2.5 rounded-full bg-black/10" />
          </div>
          <Image
            src={src}
            alt={alt}
            width={w}
            height={h}
            sizes={sizes}
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  }

  if (kind === "phone") {
    return (
      <div className={cn(stage, "aspect-[4/5] items-start px-[22%] pt-[9%]")}>
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          sizes="(min-width: 1024px) 18rem, 56vw"
          className="h-auto w-full rounded-[1.6rem] border-[5px] border-black/80 shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div className={cn(stage, "aspect-[4/5] items-center p-[9%]")}>
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        className="h-auto max-h-full w-full rounded-2xl object-contain shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
