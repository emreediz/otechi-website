import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

// Focus ring comes from the global :focus-visible rule (globals.css).
const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-semibold tracking-[-0.005em] " +
  "transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-out-expo active:scale-[0.97] " +
  "disabled:pointer-events-none disabled:opacity-45";

const sizes: Record<Size, string> = {
  sm: "h-11 px-4 text-[0.9rem]",
  md: "h-12 px-[1.375rem] text-[0.975rem]",
  lg: "h-14 px-7 text-[1.0625rem]",
};

const variants: Record<Variant, string> = {
  // Theme accent (orange · navy · green) with the matching text colour.
  primary:
    "bg-accent text-accent-fg shadow-[0_8px_22px_-6px_color-mix(in_oklab,var(--accent)_55%,transparent),inset_0_1px_0_rgb(255_255_255/0.25)] hover:-translate-y-px hover:bg-accent-hover",
  secondary:
    "border-border-strong bg-white text-fg shadow-xs hover:-translate-y-px hover:border-fg-faint",
  dark: "bg-ole-navy text-white shadow-[0_6px_16px_-6px_rgb(0_13_38/0.5)] hover:-translate-y-px hover:bg-[#0b1a3a]",
  ghost: "font-medium text-fg hover:bg-surface",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  /** Screen-reader suffix for external links, e.g. "(opens in a new tab)". */
  newTabLabel?: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-pressed"?: boolean;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
        >
          {children}
          {props.newTabLabel ? (
            <span className="sr-only"> {props.newTabLabel}</span>
          ) : null}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-pressed={props["aria-pressed"]}
      className={classes}
    >
      {children}
    </button>
  );
}
