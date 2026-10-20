import type { CSSProperties } from "react";
import {
  Calendar,
  Check,
  CloudSun,
  Flame,
  Moon,
  Sun,
  Sunrise,
  Sunset,
} from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { cn } from "@/lib/cn";

type NamazCopy = Dictionary["mock"]["namaz"];

const PRAYER_ICONS = [Sunrise, Sun, CloudSun, Sunset, Moon];
const GREEN = "#006b4d";

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
          %{pct}
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

/** Sample week: which of the five prayers were logged each day. */
const WEEK = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 0, 0],
];

/** Namaz Motivasyonu — weekly statistics: log rate and a 7 × 5 dot grid. */
export function NamazWeek({
  copy,
  className,
}: {
  copy: NamazCopy;
  className?: string;
}) {
  const logged = WEEK.flat().filter(Boolean).length;
  const pct = Math.round((logged / 35) * 100);
  const fullDays = WEEK.filter((d) => d.every(Boolean)).length;
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[20rem] rounded-[1.375rem] bg-white p-4 text-left shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <div className="grid grid-cols-3 rounded-full bg-[#eef3f1] p-1 text-center text-xs font-semibold">
        {copy.periods.map((p, i) => (
          <span
            key={p}
            className={cn(
              "rounded-full py-1.5",
              i === 0 ? "text-white" : "text-fg-soft",
            )}
            style={i === 0 ? { background: GREEN } : undefined}
          >
            {p}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold">{copy.weekTitle}</p>
      <p className="text-3xl font-semibold tabular-nums" style={{ color: GREEN }}>
        %{pct}
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
        <Flame className="size-4" style={{ color: GREEN }} aria-hidden="true" />
        <span className="font-semibold tabular-nums">{fullDays}</span>
        <span className="text-fg-soft">{copy.streak}</span>
      </div>
    </div>
  );
}

const MEMBERS = [
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
              %{m.done * 20}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
