import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

// Focus ring comes from the global :focus-visible rule (globals.css).
const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium " +
  "transition-[background-color,color,opacity,transform] duration-200 active:scale-[0.97] " +
  "disabled:pointer-events-none disabled:opacity-45";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
  // Inverted pill: white on dark, black on light.
  primary: "bg-fg text-bg hover:opacity-85",
  // Translucent pill, like the bar's "Menu".
  secondary: "bg-pill text-fg backdrop-blur hover:bg-pill-hover",
  // Otechi orange with black text (AA).
  accent: "bg-brand text-black hover:bg-[#ff7424]",
  dark: "bg-ole-navy text-white hover:bg-[#0b1a3a]",
  ghost: "text-fg hover:bg-pill",
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
