import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Product teaser for the homepage and the products index.
 * The media area shows the product's own logo/key art (not a screenshot);
 * screenshots are reserved for the product detail pages.
 * Sets `data-theme` so Ole shows orange and Namaz shows green.
 */
export function ProductCard({
  theme,
  name,
  tagline,
  points,
  href,
  ctaLabel,
  logoSrc,
  logoAlt,
  logoW,
  logoH,
  mediaVariant,
  className,
}: {
  theme: "ole" | "namaz";
  name: string;
  tagline: string;
  points?: string[];
  href: string;
  ctaLabel: string;
  logoSrc: string;
  logoAlt: string;
  logoW: number;
  logoH: number;
  /** "contain-dark" = logo centered on a dark tile; "cover" = art fills. */
  mediaVariant: "contain-dark" | "cover";
  className?: string;
}) {
  return (
    <article
      data-theme={theme}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.22)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center overflow-hidden",
          mediaVariant === "contain-dark"
            ? theme === "ole"
              ? "bg-[#0b1220] p-10"
              : "bg-[#06251c] p-10"
            : "bg-bg-subtle",
        )}
      >
        {mediaVariant === "cover" ? (
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            sizes="(min-width: 768px) 30rem, 92vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={logoW}
            height={logoH}
            className="h-auto max-h-full w-auto max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-bold text-fg">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{tagline}</p>

        {points && points.length > 0 ? (
          <ul className="mt-4 flex flex-col gap-1.5">
            {points.map((p) => (
              <li key={p} className="text-sm text-fg-muted">
                — {p}
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-accent group-hover:gap-2.5"
        >
          {ctaLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
