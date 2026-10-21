import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import {
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  LayoutDashboard,
  Megaphone,
  QrCode,
  Store,
} from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { cn } from "@/lib/cn";

type PanelCopy = Dictionary["mock"]["panel"];

const NAV_ICONS = [LayoutDashboard, QrCode, Megaphone, Bell, Store, BarChart3];
/** Sample weekly token activity (0..1 of the chart height). */
const BARS = [0.42, 0.55, 0.48, 0.7, 0.62, 0.9, 0.78];

export function StatusChip({ live, copy }: { live: boolean; copy: PanelCopy }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold",
        live ? "bg-[#e8f7ee] text-[#0d7a3d]" : "bg-surface-2 text-fg-soft",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          live ? "bg-[#12a150]" : "bg-fg-faint",
        )}
      />
      {live ? copy.live : copy.draft}
    </span>
  );
}

/**
 * Ole Panel — dashboard in a browser frame: sidebar, KPI tiles, a weekly
 * bar chart (bars grow in on reveal) and the campaign list.
 * `campaignLive` overrides the status of the last campaign.
 */
export function PanelDashboard({
  copy,
  campaignLive = false,
  className,
}: {
  copy: PanelCopy;
  campaignLive?: boolean;
  className?: string;
}) {
  const statuses = [true, true, campaignLive];
  return (
    <div
      data-surface="light"
      className={cn(
        "overflow-hidden rounded-[1.375rem] bg-white text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      {/* Browser bar */}
      <div className="flex h-10 items-center gap-3 border-b border-border bg-surface/70 px-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto rounded-md bg-white px-3 py-0.5 text-[0.6875rem] text-fg-soft ring-1 ring-border">
          panel.oletr.com
        </span>
      </div>

      <div className="grid sm:grid-cols-[11rem_1fr]">
        <aside className="hidden border-r border-border bg-surface/50 p-3 sm:block">
          <Image
            src={IMG.ole.logo}
            alt=""
            width={IMG.ole.logoW}
            height={IMG.ole.logoH}
            className="mb-4 ml-2 mt-1 h-5 w-auto"
          />
          <ul className="grid gap-0.5 text-xs">
            {copy.nav.map((label, i) => {
              const Icon = NAV_ICONS[i];
              return (
                <li
                  key={label}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2.5 py-2",
                    i === 0 ? "bg-ole-navy text-white" : "text-fg-muted",
                  )}
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  {label}
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="min-w-0 p-4 sm:p-5">
          <ul className="grid grid-cols-3 gap-2 sm:gap-3">
            {copy.kpis.map((k) => (
              <li
                key={k.label}
                className="rounded-xl border border-border p-2.5 sm:p-3"
              >
                <p className="text-[0.625rem] leading-tight text-fg-soft sm:text-[0.6875rem]">
                  {k.label}
                </p>
                <p className="mt-1 text-lg font-semibold tabular-nums sm:text-xl">
                  {k.value}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-3 grid gap-3 sm:mt-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="rounded-xl border border-border p-3">
              <p className="text-xs font-semibold">{copy.chartTitle}</p>
              <div
                className="mt-3 flex h-24 items-end gap-1.5"
                aria-hidden="true"
              >
                {BARS.map((v, i) => (
                  <span
                    key={i}
                    className={cn(
                      "mock-bar flex-1 origin-bottom rounded-t-md",
                      i === 5 ? "bg-brand" : "bg-ole-navy/15",
                    )}
                    style={{ height: `${v * 100}%`, "--i": i } as CSSProperties}
                  />
                ))}
              </div>
              <div className="mt-1.5 flex gap-1.5 text-center text-[0.5625rem] text-fg-faint">
                {copy.days.map((d) => (
                  <span key={d} className="flex-1">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border p-3">
              <p className="text-xs font-semibold">{copy.campaignsTitle}</p>
              <ul className="mt-2 divide-y divide-border">
                {copy.campaigns.map((c, i) => (
                  <li
                    key={c}
                    className="flex items-center justify-between gap-2 py-2 text-[0.6875rem]"
                  >
                    <span className="min-w-0 truncate text-fg-muted">{c}</span>
                    <StatusChip live={statuses[i]} copy={copy} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Decorative QR-like pattern (finder squares + pseudo-random modules). It is
 * not a valid code — it only illustrates the generated QR.
 */
export function QrPattern({
  seed = 7,
  className,
}: {
  seed?: number;
  className?: string;
}) {
  const n = 21;
  const cells: [number, number][] = [];
  let x = seed;
  const finder = (r: number, c: number) =>
    (r < 8 && c < 8) || (r < 8 && c > n - 9) || (r > n - 9 && c < 8);
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      x = (x * 1103515245 + 12345) & 0x7fffffff;
      if (!finder(r, c) && x % 100 < 47) cells.push([r, c]);
    }
  }
  const eye = (r: number, c: number) => (
    <g key={`${r}-${c}`}>
      <rect x={c + 0.5} y={r + 0.5} width={6} height={6} rx={1.4} fill="none" stroke="currentColor" strokeWidth={1} />
      <rect x={c + 2} y={r + 2} width={3} height={3} rx={0.7} fill="currentColor" />
    </g>
  );
  return (
    <svg
      viewBox={`0 0 ${n} ${n}`}
      aria-hidden="true"
      className={cn("text-ole-navy", className)}
      shapeRendering="crispEdges"
    >
      {cells.map(([r, c]) => (
        <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="currentColor" />
      ))}
      {eye(0, 0)}
      {eye(0, n - 7)}
      {eye(n - 7, 0)}
    </svg>
  );
}

/** Ole Panel — "Generate a QR code" form card with the resulting code. */
export function PanelQrCard({
  copy,
  showQr = true,
  timeLeft = "1:44",
  seed,
  action,
  className,
}: {
  copy: PanelCopy;
  showQr?: boolean;
  timeLeft?: string;
  seed?: number;
  /** Optional live button (used by the playground). */
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[21rem] rounded-[1.375rem] bg-white p-5 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <p className="text-sm font-semibold">{copy.qrTitle}</p>
      <div className="mt-4 grid gap-3 text-xs">
        <div>
          <p className="mb-1 text-fg-soft">{copy.branch}</p>
          <div className="flex h-9 items-center justify-between rounded-lg border border-border px-3">
            {copy.branchValue}
            <ChevronDown className="size-3.5 text-fg-faint" aria-hidden="true" />
          </div>
        </div>
        <div>
          <p className="mb-1 text-fg-soft">{copy.tokens}</p>
          <div className="flex h-9 items-center justify-between rounded-lg border border-border px-3 tabular-nums">
            <span>1</span>
            <span className="text-fg-faint">×</span>
          </div>
        </div>
        {action ?? (
          <span className="flex h-9 items-center justify-center rounded-full bg-brand font-semibold text-ole-navy">
            {copy.generate}
          </span>
        )}
      </div>
      <div
        className={cn(
          "mt-4 flex items-center gap-4 rounded-xl bg-surface p-3 transition-opacity duration-500",
          showQr ? "opacity-100" : "opacity-40",
        )}
      >
        {showQr ? (
          <QrPattern seed={seed} className="size-20 shrink-0 rounded bg-white p-1.5" />
        ) : (
          <span className="grid size-20 shrink-0 place-items-center rounded border-2 border-dashed border-border-strong bg-white">
            <QrCode className="size-7 text-fg-faint" aria-hidden="true" />
          </span>
        )}
        <div className="text-xs">
          <p className="text-fg-soft">{copy.validFor}</p>
          <p className="mt-0.5 text-xl font-semibold tabular-nums">
            {showQr ? timeLeft : "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Ole Panel — six-digit reward code check, already verified. */
export function PanelVerifyCard({
  copy,
  className,
}: {
  copy: PanelCopy;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[19rem] rounded-[1.375rem] bg-white p-5 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <p className="text-sm font-semibold">{copy.verifyTitle}</p>
      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {"482917".split("").map((d, i) => (
          <span
            key={i}
            className="mock-pop grid h-10 flex-1 place-items-center rounded-lg border border-border-strong text-base font-semibold tabular-nums"
            style={{ "--i": i } as CSSProperties}
          >
            {d}
          </span>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 rounded-xl bg-[#e8f7ee] px-3 py-2.5 text-xs font-semibold text-[#0d7a3d]">
        <Check className="size-4" aria-hidden="true" />
        {copy.verified}
      </p>
    </div>
  );
}

/** Ole Panel — notifications: the automatic reminder switched on. */
export function PanelNotifyCard({
  copy,
  className,
}: {
  copy: PanelCopy;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[19rem] rounded-[1.375rem] bg-white p-5 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <p className="flex items-center gap-2 text-sm font-semibold">
        <Bell className="size-4 text-brand" aria-hidden="true" />
        {copy.autoTitle}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-surface p-3">
        <p className="text-xs leading-snug text-fg-muted">{copy.autoRule}</p>
        <span
          aria-hidden="true"
          className="relative h-6 w-10 shrink-0 rounded-full bg-[#12a150]"
        >
          <span className="absolute right-0.5 top-0.5 size-5 rounded-full bg-white shadow-sm" />
        </span>
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#0d7a3d]">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-[#12a150]" />
        {copy.on}
      </p>
    </div>
  );
}

/** Ole Panel — branch switcher (multi-branch accounts). */
export function PanelBranches({
  copy,
  className,
}: {
  copy: PanelCopy;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[19rem] rounded-[1.375rem] bg-white p-4 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <p className="px-1 text-xs text-fg-soft">{copy.allBranches}</p>
      <ul className="mt-2 grid gap-1.5 text-xs">
        {copy.branches.map((b, i) => (
          <li
            key={b}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2.5",
              i === 0 ? "bg-ole-navy text-white" : "bg-surface text-fg-muted",
            )}
          >
            <Store className="size-3.5" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Sample tokens given this week per branch (same order as the names). */
const BRANCH_TOKENS = [412, 286, 174];

/** Ole Panel — branches compared: tokens given this week, as bars. */
export function PanelBranchCompare({
  copy,
  className,
}: {
  copy: PanelCopy;
  className?: string;
}) {
  const max = Math.max(...BRANCH_TOKENS);
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[22rem] rounded-[1.375rem] bg-white p-5 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold">{copy.branchTitle}</p>
        <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-[0.6875rem] text-fg-soft">
          {copy.thisWeek}
        </span>
      </div>
      <ul className="mt-4 grid gap-3.5">
        {copy.branches.map((b, i) => (
          <li key={b} className="text-xs">
            <div className="flex items-center gap-2">
              <Store className="size-3.5 text-fg-soft" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate text-fg-muted">{b}</span>
              <span className="font-semibold tabular-nums">{BRANCH_TOKENS[i]}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-2">
              <div
                className={cn(
                  "mock-grow h-full origin-left rounded-full transition-transform duration-1000 ease-out-expo",
                  i === 0 ? "bg-brand" : "bg-ole-navy/70",
                )}
                style={{
                  transform: `scaleX(${BRANCH_TOKENS[i] / max})`,
                  transitionDelay: `${0.2 + i * 0.12}s`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Ole Panel — compact weekly token chart (reports). */
export function PanelReportCard({
  copy,
  className,
}: {
  copy: PanelCopy;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[19rem] rounded-[1.375rem] bg-white p-4 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <p className="text-xs font-semibold">{copy.chartTitle}</p>
      <div className="mt-3 flex h-20 items-end gap-1.5" aria-hidden="true">
        {BARS.map((v, i) => (
          <span
            key={i}
            className={cn(
              "mock-bar flex-1 origin-bottom rounded-t-md",
              i === 5 ? "bg-brand" : "bg-ole-navy/15",
            )}
            style={{ height: `${v * 100}%`, "--i": i } as CSSProperties}
          />
        ))}
      </div>
      <div className="mt-1.5 flex gap-1.5 text-center text-[0.5625rem] text-fg-faint">
        {copy.days.map((d) => (
          <span key={d} className="flex-1">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Ole Panel — the campaign list with live/draft status. */
export function PanelCampaignsCard({
  copy,
  className,
}: {
  copy: PanelCopy;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[20rem] rounded-[1.375rem] bg-white p-4 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <p className="flex items-center gap-2 px-1 text-xs font-semibold">
        <Megaphone className="size-3.5 text-brand" aria-hidden="true" />
        {copy.campaignsTitle}
      </p>
      <ul className="mt-2 grid gap-1.5">
        {copy.campaigns.map((c, i) => (
          <li
            key={c}
            className="flex items-center justify-between gap-2 rounded-lg bg-surface px-3 py-2.5 text-xs"
          >
            <span className="min-w-0 truncate text-fg-muted">{c}</span>
            <StatusChip live={i < 2} copy={copy} />
          </li>
        ))}
      </ul>
    </div>
  );
}
