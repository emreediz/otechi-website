import type { CSSProperties } from "react";
import Image from "next/image";
import {
  Bell,
  Check,
  Image as ImageIcon,
  Lock,
  Mail,
  Mic,
  PenLine,
  Pin,
  RefreshCw,
  ScanFace,
  Tablet,
  Smartphone,
} from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { cn } from "@/lib/cn";

type IzCopy = Dictionary["mock"]["iz"];

/*
 * İz — coded app mock-ups (illustrative UI, sample content). Colours come
 * from the İz app's own palette: lavender accent, paper/cream surfaces,
 * ink text and the five mood colours.
 */
export const IZ = {
  accent: "#5b43d6",
  lavender: "#7662c7",
  soft: "#ece9fc",
  paper: "#faf8f7",
  cream: "#f7f3ec",
  ink: "#111116",
  ink2: "#45454f",
  ink3: "#636370",
  line: "#e1e1e7",
} as const;

/** Mood colours and the text colour on each (from the app's theme). */
const MOODS: { bg: string; fg: string }[] = [
  { bg: "#7662c7", fg: "#ffffff" },
  { bg: "#fd5e00", fg: "#111116" },
  { bg: "#ffc545", fg: "#111116" },
  { bg: "#5170ff", fg: "#111116" },
  { bg: "#a51313", fg: "#ffffff" },
];

const at = (i: number) => ({ "--i": i }) as CSSProperties;

/** Paper card shell: cream sheet, binding dots along the top. */
function Paper({
  className,
  children,
  holes = true,
}: {
  className?: string;
  children: React.ReactNode;
  holes?: boolean;
}) {
  return (
    <div
      data-surface="light"
      className={cn(
        "relative w-full max-w-[20rem] overflow-hidden rounded-[1.375rem] text-left shadow-lg ring-1 ring-black/5",
        className,
      )}
      style={{ background: IZ.paper, color: IZ.ink }}
    >
      <div className="h-3" style={{ background: IZ.lavender }} />
      {holes ? (
        <div className="flex justify-between px-4 pt-2">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className="size-1.5 rounded-full bg-[#a6a6a6]" />
          ))}
        </div>
      ) : null}
      {children}
    </div>
  );
}

/** The İz app icon (real asset). */
export function IzLogo({
  className,
  small = false,
}: {
  className?: string;
  small?: boolean;
}) {
  return (
    <Image
      src={small ? IMG.iz.logoSmall : IMG.iz.logo}
      alt=""
      width={small ? 96 : IMG.iz.logoW}
      height={small ? 96 : IMG.iz.logoH}
      sizes={small ? "48px" : "(min-width: 768px) 30vw, 60vw"}
      className={cn("drop-shadow-[0_18px_40px_rgb(20_12_60/0.45)]", className)}
    />
  );
}

/** A note: title, text, to-do blocks, tag and a reminder. */
export function IzNote({
  copy,
  done = [true, false, false],
  className,
}: {
  copy: IzCopy;
  done?: boolean[];
  className?: string;
}) {
  return (
    <Paper className={className}>
      <div className="p-5 pt-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold tracking-[-0.01em]">
            {copy.noteTitle}
          </p>
          <span
            className="inline-flex items-center gap-1 text-[0.6875rem] font-medium"
            style={{ color: IZ.accent }}
          >
            <Pin className="size-3.5" aria-hidden="true" />
            {copy.pinned}
          </span>
        </div>
        <p className="mt-1.5 text-sm" style={{ color: IZ.ink2 }}>
          {copy.noteText}
        </p>
        <ul className="mt-3 grid gap-2">
          {copy.todos.map((todo, i) => (
            <li
              key={todo}
              className="mock-pop flex items-center gap-2.5 text-sm"
              style={at(i)}
            >
              <span
                className="grid size-[1.125rem] shrink-0 place-items-center rounded-[0.375rem] border-[1.5px]"
                style={{
                  borderColor: IZ.accent,
                  background: done[i] ? IZ.accent : "transparent",
                }}
              >
                {done[i] ? (
                  <Check className="size-3 text-white" strokeWidth={3} />
                ) : null}
              </span>
              <span
                className={done[i] ? "line-through" : undefined}
                style={{ color: done[i] ? IZ.ink3 : IZ.ink }}
              >
                {todo}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t pt-3 text-[0.6875rem] font-medium" style={{ borderColor: IZ.line }}>
          <span
            className="rounded-full px-2.5 py-1"
            style={{ background: IZ.soft, color: IZ.accent }}
          >
            {copy.tag}
          </span>
          <span className="inline-flex items-center gap-1" style={{ color: IZ.ink2 }}>
            <Bell className="size-3.5" aria-hidden="true" />
            {copy.reminder}
          </span>
        </div>
      </div>
    </Paper>
  );
}

/** A journal page: the day, the prompt, a few lines and the mood. */
export function IzJournal({
  copy,
  mood = 0,
  className,
}: {
  copy: IzCopy;
  mood?: number;
  className?: string;
}) {
  return (
    <Paper className={className}>
      <div className="p-5 pt-3">
        <div className="flex items-baseline gap-2">
          <span
            className="text-4xl font-light tabular-nums tracking-[-0.04em]"
            style={{ color: IZ.accent }}
          >
            {copy.dayNumber}
          </span>
          <span className="text-sm font-medium" style={{ color: IZ.ink2 }}>
            {copy.dayName}
          </span>
        </div>
        <p className="mt-2 text-sm italic" style={{ color: IZ.ink3 }}>
          {copy.prompt}
        </p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed">
          {copy.journalText}
        </p>
        <p className="mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]" style={{ color: IZ.ink3 }}>
          {copy.moodLabel}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {copy.moods.map((m, i) => (
            <span
              key={m}
              className="mock-pop rounded-full px-2.5 py-1 text-[0.6875rem] font-medium"
              style={{
                ...at(i),
                background: i === mood ? MOODS[i].bg : "transparent",
                color: i === mood ? MOODS[i].fg : IZ.ink2,
                boxShadow: i === mood ? undefined : `inset 0 0 0 1px ${IZ.line}`,
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </Paper>
  );
}

/** Writing streak chip. */
export function IzStreak({ copy, className }: { copy: IzCopy; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 backdrop-blur",
        className,
      )}
    >
      <PenLine className="size-4 text-[#c4b8ff]" aria-hidden="true" />
      {copy.streak.replace("{n}", copy.streakCount)}
    </p>
  );
}

const WAVE = [0.3, 0.55, 0.8, 0.45, 0.95, 0.6, 0.35, 0.7, 1, 0.5, 0.75, 0.4, 0.65, 0.9, 0.45, 0.3, 0.6, 0.85, 0.5, 0.35];

/** A voice note with its transcript. */
export function IzVoice({ copy, className }: { copy: IzCopy; className?: string }) {
  return (
    <Paper className={className} holes={false}>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span
            className="grid size-10 shrink-0 place-items-center rounded-full text-white"
            style={{ background: IZ.accent }}
          >
            <Mic className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold">{copy.voiceTitle}</span>
            <span className="block text-xs tabular-nums" style={{ color: IZ.ink3 }}>
              {copy.voiceDuration}
            </span>
          </span>
        </div>
        <div className="mt-4 flex h-10 items-center gap-[3px]">
          {WAVE.map((v, i) => (
            <span
              key={i}
              className="mock-bar flex-1 rounded-full"
              style={{
                ...at(i),
                height: `${v * 100}%`,
                background: i < 9 ? IZ.accent : "#c9c2ef",
              }}
            />
          ))}
        </div>
        <div className="mt-4 rounded-xl p-3" style={{ background: IZ.soft }}>
          <p className="text-[0.6875rem] font-semibold" style={{ color: IZ.accent }}>
            {copy.transcriptLabel}
          </p>
          <p className="mt-1 text-sm leading-snug">{copy.transcript}</p>
        </div>
        <p className="mt-3 inline-flex items-center gap-1.5 text-[0.6875rem] font-medium" style={{ color: IZ.ink2 }}>
          <Lock className="size-3.5" aria-hidden="true" />
          {copy.onDevice}
        </p>
      </div>
    </Paper>
  );
}

/** A journal photo with a caption (drawn: a soft dusk scene, not a photo). */
export function IzPhoto({ copy, className }: { copy: IzCopy; className?: string }) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-[15rem] rounded-[1.125rem] bg-white p-2.5 pb-3 shadow-xl ring-1 ring-black/5",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[0.75rem] bg-[linear-gradient(to_bottom,#7662c7_0%,#c9a3d9_45%,#ffc545_70%,#5170ff_71%,#2a2160_100%)]">
        <span className="absolute left-1/2 top-[52%] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fd5e00]" />
        <ImageIcon className="absolute right-2 top-2 size-4 text-white/80" aria-hidden="true" />
      </div>
      <p className="mt-2 px-1 text-xs" style={{ color: IZ.ink2 }}>
        {copy.photoCaption}
      </p>
    </div>
  );
}

/** A small drawing tile (a few strokes, like Apple Pencil ink). */
export function IzDrawing({ copy, className }: { copy: IzCopy; className?: string }) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-[11rem] rounded-[1.125rem] p-3 shadow-xl ring-1 ring-black/5",
        className,
      )}
      style={{ background: IZ.paper, color: IZ.ink }}
    >
      <svg viewBox="0 0 100 70" className="w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 56 C 22 30, 34 30, 44 46 S 66 64, 92 22" stroke={IZ.accent} strokeWidth="3" className="art-draw" pathLength={100} strokeDasharray="100" />
        <circle cx="74" cy="18" r="9" stroke="#fd5e00" strokeWidth="2.5" />
        <path d="M14 22 l8 -6 l8 6" stroke="#5170ff" strokeWidth="2.5" />
      </svg>
      <p className="mt-1 inline-flex items-center gap-1.5 text-[0.6875rem] font-medium" style={{ color: IZ.ink2 }}>
        <PenLine className="size-3.5" aria-hidden="true" />
        {copy.drawing}
      </p>
    </div>
  );
}

/** Home-screen and Lock Screen widgets. */
export function IzWidgets({ copy, className }: { copy: IzCopy; className?: string }) {
  const tile =
    "flex aspect-square flex-col justify-between rounded-[1.375rem] p-3.5 text-left shadow-lg";
  return (
    <div className={cn("grid w-[19rem] grid-cols-2 gap-3", className)}>
      <div data-surface="light" className={tile} style={{ background: IZ.paper, color: IZ.ink }}>
        <p className="text-[0.6875rem] font-semibold" style={{ color: IZ.accent }}>
          {copy.widgetToday}
        </p>
        <div>
          <p className="text-3xl font-light tabular-nums leading-none tracking-[-0.04em]">
            {copy.dayNumber}
          </p>
          <p className="mt-1 line-clamp-2 text-[0.6875rem] leading-snug" style={{ color: IZ.ink2 }}>
            {copy.prompt}
          </p>
        </div>
      </div>
      <div className={tile} style={{ background: IZ.accent }}>
        <Mic className="size-6 text-white" aria-hidden="true" />
        <p className="text-sm font-semibold text-white">{copy.voiceTitle}</p>
      </div>
      <div
        data-surface="light"
        className="col-span-2 rounded-[1.375rem] p-3.5 text-left shadow-lg"
        style={{ background: IZ.paper, color: IZ.ink }}
      >
        <p className="text-[0.6875rem] font-semibold" style={{ color: IZ.accent }}>
          {copy.widgetNotes}
        </p>
        <p className="mt-1.5 truncate text-sm font-semibold">{copy.noteTitle}</p>
        <p className="truncate text-xs" style={{ color: IZ.ink2 }}>
          {copy.noteText}
        </p>
      </div>
      {/* Lock Screen (rectangular) */}
      <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 text-white ring-1 ring-white/20 backdrop-blur">
        <Bell className="size-5 shrink-0" aria-hidden="true" />
        <span className="min-w-0">
          <span className="block text-[0.6875rem] text-white/70">{copy.widgetReminder}</span>
          <span className="block truncate text-sm font-semibold">
            {copy.todos[1]} · {copy.reminder}
          </span>
        </span>
      </div>
    </div>
  );
}

/** App lock (Face ID). */
export function IzLock({ copy, className }: { copy: IzCopy; className?: string }) {
  return (
    <div
      className={cn(
        "grid w-[15rem] justify-items-center rounded-[1.75rem] bg-[#15131e]/90 px-6 py-8 text-center text-white ring-1 ring-white/15 shadow-2xl",
        className,
      )}
    >
      <IzLogo small className="size-14" />
      <p className="mt-4 font-semibold">{copy.lockTitle}</p>
      <span className="mt-5 grid size-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
        <ScanFace className="size-8 text-[#c4b8ff]" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <p className="mt-3 text-xs text-white/70">{copy.lockBody}</p>
    </div>
  );
}

/** Sign-in: Apple, email, password reset. */
export function IzSignIn({ copy, className }: { copy: IzCopy; className?: string }) {
  return (
    <div
      data-surface="light"
      className={cn(
        "w-full max-w-[19rem] rounded-[1.75rem] p-6 text-center shadow-xl ring-1 ring-black/5",
        className,
      )}
      style={{ background: IZ.paper, color: IZ.ink }}
    >
      <IzLogo small className="mx-auto size-14 drop-shadow-md" />
      <p className="mt-4 text-lg font-semibold tracking-[-0.01em]">{copy.welcome}</p>
      <div className="mt-5 grid gap-2 text-sm font-semibold">
        <span className="flex h-11 items-center justify-center gap-2 rounded-full bg-black text-white">
          <svg viewBox="0 0 17 20" className="h-4 w-auto fill-current" aria-hidden="true">
            <path d="M14.2 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.3-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4 1-1.4 1.4-2.7 1.4-2.8 0 0-2.6-1-2.6-4.2zM11.7 3c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z" />
          </svg>
          {copy.apple}
        </span>
        <span
          className="flex h-11 items-center justify-center gap-2 rounded-full"
          style={{ background: IZ.soft, color: IZ.accent }}
        >
          <Mail className="size-4" aria-hidden="true" />
          {copy.email}
        </span>
      </div>
      <p className="mt-4 text-xs font-medium underline underline-offset-2" style={{ color: IZ.ink2 }}>
        {copy.forgot}
      </p>
    </div>
  );
}

/** iPhone and iPad, side by side, synced. */
export function IzDevices({ copy, className }: { copy: IzCopy; className?: string }) {
  return (
    <div className={cn("relative w-[22rem] max-w-full", className)}>
      {/* iPad */}
      <div className="relative ml-auto w-[88%] rounded-[1.25rem] bg-[#15131e] p-2 shadow-2xl ring-1 ring-white/10">
        <div
          data-surface="light"
          className="grid aspect-[4/3] grid-cols-[30%_1fr] overflow-hidden rounded-[0.875rem]"
          style={{ background: IZ.paper, color: IZ.ink }}
        >
          <div className="grid content-start gap-1.5 border-r p-2.5" style={{ borderColor: IZ.line, background: IZ.cream }}>
            {[copy.widgetNotes, copy.moodLabel, copy.voiceTitle].map((l, i) => (
              <span
                key={l}
                className="truncate rounded-md px-1.5 py-1 text-[0.5625rem] font-medium"
                style={i === 0 ? { background: IZ.soft, color: IZ.accent } : { color: IZ.ink2 }}
              >
                {l}
              </span>
            ))}
          </div>
          <div className="p-3">
            <p className="text-xs font-semibold">{copy.noteTitle}</p>
            <p className="mt-1 text-[0.625rem]" style={{ color: IZ.ink2 }}>
              {copy.noteText}
            </p>
            {copy.todos.map((t, i) => (
              <p key={t} className="mt-1 flex items-center gap-1.5 text-[0.625rem]">
                <span
                  className="size-2 rounded-[0.15rem] border"
                  style={{ borderColor: IZ.accent, background: i === 0 ? IZ.accent : undefined }}
                />
                {t}
              </p>
            ))}
          </div>
        </div>
        <span className="absolute -top-6 right-2 inline-flex items-center gap-1 text-[0.6875rem] text-white/70">
          <Tablet className="size-3.5" aria-hidden="true" />
          {copy.devices[1]}
        </span>
      </div>
      {/* iPhone */}
      <div className="absolute -bottom-6 left-0 w-[30%] rounded-[1.1rem] bg-[#15131e] p-1.5 shadow-2xl ring-1 ring-white/10">
        <div
          data-surface="light"
          className="aspect-[9/19] overflow-hidden rounded-[0.8rem] p-2"
          style={{ background: IZ.paper, color: IZ.ink }}
        >
          <div className="-mx-2 -mt-2 mb-2 h-2" style={{ background: IZ.lavender }} />
          <p className="text-[0.5625rem] font-semibold">{copy.noteTitle}</p>
          {copy.todos.map((t, i) => (
            <p key={t} className="mt-1 truncate text-[0.5rem]" style={{ color: i === 0 ? IZ.ink3 : IZ.ink }}>
              {t}
            </p>
          ))}
        </div>
        <span className="absolute -bottom-6 left-1 inline-flex items-center gap-1 text-[0.6875rem] text-white/70">
          <Smartphone className="size-3.5" aria-hidden="true" />
          {copy.devices[0]}
        </span>
      </div>
      <span className="absolute left-[24%] top-[18%] inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.6875rem] font-semibold shadow-lg" style={{ color: IZ.accent }}>
        <RefreshCw className="size-3.5" aria-hidden="true" />
        {copy.synced}
      </span>
    </div>
  );
}
