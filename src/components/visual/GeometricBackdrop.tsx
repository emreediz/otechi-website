import { cn } from "@/lib/cn";

/**
 * Decorative black-and-white geometric layer echoing the Otechi mark
 * (circle + wedge). Purely presentational: aria-hidden, no pointer events,
 * clipped by an `overflow-hidden` ancestor so it never causes scroll.
 */
export function GeometricBackdrop({
  variant = "otechi",
  className,
}: {
  variant?: "otechi" | "ole" | "namaz";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {variant === "namaz" ? (
        <div className="anim-drift absolute -right-24 -top-24 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,107,77,0.14),transparent_70%)]" />
      ) : (
        <svg
          className="anim-drift absolute -right-24 -top-32 h-[42rem] w-[42rem] text-fg"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeWidth="1.5"
          />
          <circle
            cx="200"
            cy="200"
            r="110"
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeWidth="1.5"
          />
          <circle
            cx="200"
            cy="200"
            r="70"
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeWidth="1.5"
          />
          <path
            d="M200 50 A150 150 0 0 1 350 200 L200 200 Z"
            fill="var(--accent)"
            fillOpacity="0.08"
          />
        </svg>
      )}

      {variant !== "namaz" && (
        <svg
          className="absolute -bottom-40 -left-40 h-[34rem] w-[34rem] text-fg"
          viewBox="0 0 400 400"
          fill="none"
        >
          <g stroke="currentColor" strokeOpacity="0.05" strokeWidth="1">
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
            ))}
          </g>
        </svg>
      )}
    </div>
  );
}
