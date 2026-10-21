import type { CSSProperties } from "react";
import {
  Calendar,
  CalendarCheck,
  Check,
  ChevronRight,
  CloudSun,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  Trash2,
} from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { cn } from "@/lib/cn";

type NamazCopy = Dictionary["mock"]["namaz"];

const PRAYER_ICONS = [Sunrise, Sun, CloudSun, Sunset, Moon];
const GREEN = "#006b4d";

/** "%60" in Turkish, "60%" in English. */
const pctText = (copy: NamazCopy, n: number) =>
  copy.percent.replace("{n}", String(n));

/** Week / Month / Year switch at the top of the statistics cards. */
function PeriodTabs({ copy, active }: { copy: NamazCopy; active: number }) {
  return (
    <div className="grid grid-cols-3 rounded-full bg-[#eef3f1] p-1 text-center text-xs font-semibold">
      {copy.periods.map((p, i) => (
        <span
          key={p}
          className={cn(
            "rounded-full py-1.5",
            i === active ? "text-white" : "text-fg-soft",
          )}
          style={i === active ? { background: GREEN } : undefined}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

/**
 * Namaz Motivasyonu — "Today" card: progress and the five prayers with a
 * "Prayed" button each. Pass `onToggle` to make the rows interactive.
 */
export function NamazToday({
  copy,
  done,
  onToggle,
  className,
}: {
  copy: NamazCopy;
  done: boolean[];
  onToggle?: (index: number) => void;
  className?: string;
}) {
  const count = done.filter(Boolean).length;
  const pct = Math.round((count / 5) * 100);
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[20rem] rounded-[1.375rem] bg-[#f3f7f5] p-3 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <div className="rounded-2xl bg-white p-4">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <Calendar className="size-4" style={{ color: GREEN }} aria-hidden="true" />
          {copy.today}
        </p>
        <p
          className="mt-1 text-3xl font-semibold tabular-nums"
          style={{ color: GREEN }}
        >
          {pctText(copy, pct)}
        </p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e3ece8]">
          <div
            className="h-full origin-left rounded-full transition-transform duration-700 ease-out-expo"
            style={{ transform: `scaleX(${count / 5})`, background: GREEN }}
          />
        </div>
        <p className="mt-2 text-[0.6875rem] text-fg-soft">
          {copy.done.replace("{n}", String(count))}
        </p>
      </div>

      <ul className="mt-2 grid gap-1.5">
        {copy.prayers.map((name, i) => {
          const Icon = PRAYER_ICONS[i];
          const on = done[i];
          const button = (
            <span
              className={cn(
                "inline-flex h-8 min-w-[4.75rem] items-center justify-center gap-1 rounded-full border px-3 text-xs font-semibold transition-colors duration-300",
                on
                  ? "border-transparent text-white"
                  : "border-border-strong bg-white text-fg",
              )}
              style={on ? { background: GREEN } : undefined}
            >
              {on ? <Check className="size-3.5" aria-hidden="true" /> : null}
              {copy.mark}
            </span>
          );
          return (
            <li
              key={name}
              className="flex items-center gap-3 rounded-xl bg-white px-3 py-2"
            >
              <Icon className="size-4 shrink-0 text-fg-soft" aria-hidden="true" />
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block text-[0.8125rem] font-semibold">{name}</span>
                <span className="block text-[0.6875rem] text-fg-soft tabular-nums">
                  {copy.times[i]}
                </span>
              </span>
              {onToggle ? (
                <button
                  type="button"
                  aria-pressed={on}
                  aria-label={`${name} — ${copy.mark}`}
                  onClick={() => onToggle(i)}
                  className="rounded-full"
                >
                  {button}
                </button>
              ) : (
                button
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Sample week, shared by every Namaz mock-up so the numbers agree: Monday
 * to Friday complete, Saturday is today (3 of 5, as on the "Today" card),
 * Sunday is still ahead.
 */
const WEEK = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
/** Index of "today" in the sample week. */
export const TODAY = 5;
/** Days of the sample week with all five prayers logged. */
export const weekFull = WEEK.map((d) => d.every(Boolean));

/** The sample week's log rate (0..100). */
export const weekRate = () =>
  Math.round((WEEK.flat().filter(Boolean).length / 35) * 100);

/** Namaz Motivasyonu — weekly statistics: log rate and a 7 × 5 dot grid. */
export function NamazWeek({
  copy,
  className,
}: {
  copy: NamazCopy;
  className?: string;
}) {
  const pct = weekRate();
  const fullDays = weekFull.filter(Boolean).length;
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[20rem] rounded-[1.375rem] bg-white p-4 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <PeriodTabs copy={copy} active={0} />
      <p className="mt-4 text-sm font-semibold">{copy.weekTitle}</p>
      <p className="text-3xl font-semibold tabular-nums" style={{ color: GREEN }}>
        {pctText(copy, pct)}
      </p>
      <div className="mt-3 grid grid-cols-7 gap-1.5" aria-hidden="true">
        {WEEK.map((day, d) => (
          <div key={d} className="grid gap-1.5">
            {day.map((v, p) => (
              <span
                key={p}
                className="mock-pop mx-auto size-3.5 rounded-full"
                style={
                  {
                    background: v ? GREEN : "#e3ece8",
                    "--i": d,
                  } as CSSProperties
                }
              />
            ))}
            <span className="text-center text-[0.625rem] text-fg-faint">
              {copy.days[d]}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#f3f7f5] px-3 py-2 text-xs">
        <CalendarCheck className="size-4" style={{ color: GREEN }} aria-hidden="true" />
        <span className="font-semibold tabular-nums">{fullDays}</span>
        <span className="text-fg-soft">{copy.fullDays}</span>
      </div>
    </div>
  );
}

export const MEMBERS = [
  { initials: "AY", name: "Ahmet", done: 4 },
  { initials: "ZK", name: "Zeynep", done: 5 },
  { initials: "YD", name: "Yusuf", done: 2 },
];

/** Namaz Motivasyonu — group ("room"): invite code and members' progress. */
export function NamazGroup({
  copy,
  className,
}: {
  copy: NamazCopy;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[20rem] rounded-[1.375rem] bg-[#f3f7f5] p-3 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <div className="px-1 pt-1">
        <p className="text-lg font-semibold" style={{ color: GREEN }}>
          {copy.groupName}
        </p>
        <p className="text-[0.6875rem] text-fg-soft">{copy.groupMeta}</p>
      </div>
      <div className="mt-3 rounded-2xl bg-white p-3">
        <p className="text-[0.6875rem] font-semibold" style={{ color: GREEN }}>
          {copy.invite}
        </p>
        <div className="mt-2 flex gap-1.5" aria-hidden="true">
          {"K7M2QA".split("").map((ch, i) => (
            <span
              key={i}
              className="grid h-8 flex-1 place-items-center rounded-lg bg-[#eef3f1] text-sm font-semibold"
            >
              {ch}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-2 grid gap-1.5">
        {MEMBERS.map((m) => (
          <li
            key={m.initials}
            className="flex items-center gap-3 rounded-xl bg-white px-3 py-2"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#eef3f1] text-[0.6875rem] font-semibold">
              {m.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[0.8125rem] font-semibold">{m.name}</span>
              <span className="mt-1 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className="size-1.5 rounded-full"
                    style={{ background: i < m.done ? GREEN : "#dbe5e1" }}
                  />
                ))}
              </span>
            </span>
            <span
              className="text-sm font-semibold tabular-nums"
              style={{ color: GREEN }}
            >
              {pctText(copy, m.done * 20)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Sample month: prayers logged per day (0..5), from the 1st. */
const MONTH = [
  5, 4, 5, 5, 3, 5, 4, 5, 5, 5, 2, 4, 5, 5, 4, 3, 5, 5, 5, 4, 5, 4, 5, 5, 3, 5,
  5, 4, 5, 5,
];

/** Namaz Motivasyonu — monthly statistics: log rate and a day heat map. */
export function NamazMonth({
  copy,
  className,
}: {
  copy: NamazCopy;
  className?: string;
}) {
  const pct = Math.round(
    (MONTH.reduce((a, b) => a + b, 0) / (MONTH.length * 5)) * 100,
  );
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[20rem] rounded-[1.375rem] bg-white p-4 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <PeriodTabs copy={copy} active={1} />
      <p className="mt-4 text-sm font-semibold">{copy.monthTitle}</p>
      <p className="text-3xl font-semibold tabular-nums" style={{ color: GREEN }}>
        {pctText(copy, pct)}
      </p>
      <div className="mt-3 grid grid-cols-7 gap-1.5" aria-hidden="true">
        {copy.days.map((d, i) => (
          <span key={i} className="text-center text-[0.625rem] text-fg-faint">
            {d}
          </span>
        ))}
        {MONTH.map((v, i) => (
          <span
            key={i}
            className="mock-pop aspect-square rounded-md"
            style={
              {
                // Shade by colour, not opacity (reduced motion forces
                // .mock-pop to opacity 1).
                background: v
                  ? `color-mix(in srgb, ${GREEN} ${25 + v * 15}%, #e3ece8)`
                  : "#e3ece8",
                "--i": Math.floor(i / 7),
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}

/** Sample year: monthly log rate (0..1). */
const YEAR = [0.62, 0.58, 0.71, 0.66, 0.74, 0.69, 0.77, 0.72, 0.8, 0.84, 0.0, 0.0];

/** Namaz Motivasyonu — yearly statistics: log rate and monthly bars. */
export function NamazYear({
  copy,
  className,
}: {
  copy: NamazCopy;
  className?: string;
}) {
  const months = YEAR.filter(Boolean);
  const pct = Math.round(
    (months.reduce((a, b) => a + b, 0) / months.length) * 100,
  );
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[20rem] rounded-[1.375rem] bg-white p-4 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <PeriodTabs copy={copy} active={2} />
      <p className="mt-4 text-sm font-semibold">{copy.yearTitle}</p>
      <p className="text-3xl font-semibold tabular-nums" style={{ color: GREEN }}>
        {pctText(copy, pct)}
      </p>
      <div className="mt-3 flex h-28 items-end gap-1" aria-hidden="true">
        {YEAR.map((v, i) => (
          <span key={i} className="flex h-full flex-1 flex-col justify-end gap-1">
            <span
              className="mock-bar block origin-bottom rounded-t-[0.3rem]"
              style={
                {
                  height: v ? `${v * 100}%` : "0.25rem",
                  background: v
                    ? `color-mix(in srgb, ${GREEN} ${Math.round(45 + v * 55)}%, #e3ece8)`
                    : "#e3ece8",
                  "--i": i,
                } as CSSProperties
              }
            />
            <span className="text-center text-[0.625rem] text-fg-faint">
              {copy.months[i]}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Namaz Motivasyonu — the five prayers along the day's arc, the first
 * three marked as prayed; the count in the middle.
 */
export function NamazFive({
  copy,
  doneCount = 3,
  className,
}: {
  copy: NamazCopy;
  doneCount?: number;
  className?: string;
}) {
  // Points on an arc (viewBox 200 x 124, centre 100,100, r 80), from
  // 162° (morning, left) to 18° (night, right).
  const angles = [162, 126, 90, 54, 18];
  const arc = "M23.92 75.28 A80 80 0 0 1 176.08 75.28";
  return (
    <div
      className={cn("relative aspect-[200/124] w-full max-w-[24rem]", className)}
    >
      <svg
        viewBox="0 0 200 124"
        aria-hidden="true"
        className="absolute inset-0 size-full overflow-visible"
      >
        <path
          d={arc}
          fill="none"
          stroke="rgb(255 255 255 / 0.18)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <path
          d={arc}
          fill="none"
          stroke="#8fe3c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="100"
          className="mock-draw"
          style={{ strokeDashoffset: 100 - (doneCount - 1) * 25 }}
        />
      </svg>
      {copy.prayers.map((name, i) => {
        const a = (angles[i] * Math.PI) / 180;
        const x = ((100 + 80 * Math.cos(a)) / 200) * 100;
        const y = ((100 - 80 * Math.sin(a)) / 124) * 100;
        const Icon = PRAYER_ICONS[i];
        const on = i < doneCount;
        return (
          <span
            key={name}
            className="absolute flex -translate-x-1/2 -translate-y-[1.125rem] flex-col items-center text-center"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className={cn(
                "mock-pop grid size-9 place-items-center rounded-full",
                on
                  ? "bg-[#8fe3c4] text-[#03301f] shadow-[0_0_18px_#2bc78f]"
                  : "border border-white/30 bg-[#06281e] text-white/70",
              )}
              style={{ "--i": i } as CSSProperties}
            >
              {on ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <Icon className="size-4" aria-hidden="true" />
              )}
            </span>
            <span className="mt-1.5 text-xs font-medium leading-tight">{name}</span>
            <span className="text-[0.6875rem] tabular-nums text-white/60">
              {copy.times[i]}
            </span>
          </span>
        );
      })}
      <p className="absolute inset-x-0 bottom-0 text-center leading-none">
        <span className="block text-6xl font-light tracking-[-0.05em]">5</span>
        <span className="mt-1 block text-xs text-white/60">{copy.prayersLabel}</span>
      </p>
    </div>
  );
}

/**
 * Namaz Motivasyonu — settings with the "Delete account" sheet open (the
 * account and its data can be deleted from inside the app).
 */
export function NamazDelete({
  copy,
  className,
}: {
  copy: NamazCopy;
  className?: string;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "relative w-full max-w-[20rem] overflow-hidden rounded-[1.375rem] bg-[#f3f7f5] p-3 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <p className="px-1 pt-1 text-lg font-semibold" style={{ color: GREEN }}>
        {copy.settingsTitle}
      </p>
      <ul className="mt-3 grid gap-1.5 text-[0.8125rem]">
        {copy.settings.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5"
          >
            <span className="flex-1 font-semibold">{row.label}</span>
            <span className="text-fg-soft">{row.value}</span>
            <ChevronRight className="size-3.5 text-fg-faint" aria-hidden="true" />
          </li>
        ))}
        <li className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 font-semibold text-[#d93636]">
          <Trash2 className="size-4" aria-hidden="true" />
          {copy.deleteTitle}
        </li>
      </ul>
      {/* The confirmation sheet, risen over the dimmed settings. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#0b0b0b]/30" />
      <div className="mock-rise relative -mx-1 -mb-1 -mt-6 rounded-[1.125rem] bg-white p-4 text-center shadow-2xl">
        <span className="mx-auto grid size-10 place-items-center rounded-full bg-[#fdecec] text-[#d93636]">
          <Trash2 className="size-5" aria-hidden="true" />
        </span>
        <p className="mt-2 font-semibold">{copy.deleteTitle}</p>
        <p className="mt-1 text-xs leading-relaxed text-fg-soft">{copy.deleteBody}</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
          <span className="rounded-full border border-border-strong py-2">
            {copy.cancel}
          </span>
          <span className="rounded-full bg-[#d93636] py-2 text-white">
            {copy.deleteTitle}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Namaz Motivasyonu — a progress ring with the rate in the middle. */
export function NamazRing({
  copy,
  value,
  label,
  className,
}: {
  copy: NamazCopy;
  /** 0..100 */
  value: number;
  /** Small line under the rate, e.g. "Today". */
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative grid size-28 place-items-center rounded-full bg-[#06281e]/85 text-white shadow-2xl ring-1 ring-white/15 backdrop-blur",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 size-full -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgb(255 255 255 / 0.12)"
          strokeWidth="7"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#8fe3c4"
          strokeWidth="7"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="100"
          className="mock-draw"
          style={{ strokeDashoffset: 100 - value }}
        />
      </svg>
      <span className="grid justify-items-center leading-none">
        <span className="text-2xl font-semibold tabular-nums">
          {pctText(copy, value)}
        </span>
        {label ? (
          <span className="mt-1 text-[0.6875rem] text-white/70">{label}</span>
        ) : null}
      </span>
    </div>
  );
}
