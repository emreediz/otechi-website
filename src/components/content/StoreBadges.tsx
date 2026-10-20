import { cn } from "@/lib/cn";

export type Store = "appStore" | "googlePlay";

export type StoreBadgeItem = {
  store: Store;
  href: string;
  /** Visible two-line text, e.g. ["App Store’dan", "İndir"]. */
  lines: [string, string];
  /** Full accessible name, e.g. "Ole’yi App Store’dan indir". */
  label: string;
};

function StoreIcon({ store, className }: { store: Store; className?: string }) {
  if (store === "appStore") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49z"
      />
      <path
        fill="#34A853"
        d="M345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32z"
      />
      <path
        fill="#EA4335"
        d="M84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95z"
      />
      <path
        fill="#FBBC04"
        d="m449.38 231-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"
      />
    </svg>
  );
}

/**
 * Dark App Store / Google Play badges (open in a new tab). `size="sm"` is
 * the compact footer variant.
 */
export function StoreBadges({
  items,
  newTabLabel,
  size = "lg",
  className,
}: {
  items: StoreBadgeItem[];
  newTabLabel?: string;
  size?: "sm" | "lg";
  className?: string;
}) {
  const lg = size === "lg";
  return (
    <ul className={cn("flex flex-wrap gap-3", lg && "gap-4", className)}>
      {items.map((item) => (
        <li key={item.store}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center border border-white/10 bg-ole-navy text-white shadow-[0_0_0_1px_#000d26,0_6px_16px_-10px_rgb(0_13_38/0.45)] transition-[transform,box-shadow,border-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand/75 hover:shadow-[0_0_0_1px_rgb(253_94_0/0.75),0_10px_22px_-12px_rgb(0_13_38/0.5)]",
              lg
                ? "h-[3.875rem] w-[12.5rem] gap-3 rounded-[17px] px-5"
                : "h-11 gap-2 rounded-xl px-3",
            )}
          >
            <StoreIcon
              store={item.store}
              className={cn("shrink-0", lg ? "size-7" : "size-[1.125rem]")}
            />
            <span aria-hidden="true" className="grid text-left leading-[1.15]">
              <span
                className={cn(
                  "whitespace-nowrap text-white/80",
                  lg ? "text-xs" : "text-[0.625rem]",
                )}
              >
                {item.lines[0]}
              </span>
              <span
                className={cn(
                  "font-semibold tracking-[-0.01em]",
                  lg ? "text-xl" : "text-[0.8125rem]",
                )}
              >
                {item.lines[1]}
              </span>
            </span>
            <span className="sr-only">
              {item.label}
              {newTabLabel ? ` ${newTabLabel}` : ""}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
