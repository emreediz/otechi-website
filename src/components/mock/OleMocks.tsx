import type { CSSProperties } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { cn } from "@/lib/cn";

type OleCopy = Dictionary["mock"]["ole"];

/** Sample business shown in the Ole mock-ups (Ole's own demo café). */
export const DEMO_BUSINESS = "Ole Coffee";

/** The business's round mark: an orange ring, like Ole Coffee's logo. */
function BusinessMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-brand",
        className,
      )}
    >
      <span className="size-[45%] rounded-full border-[0.3rem] border-white" />
    </span>
  );
}

/**
 * Ole customer app — loyalty card: tokens collected towards a reward.
 * `filled` is 0..5; the newest token pops in when it changes.
 */
export function OleRewardCard({
  copy,
  filled = 3,
  className,
}: {
  copy: OleCopy;
  filled?: number;
  className?: string;
}) {
  const goal = 5;
  const left = goal - filled;
  return (
    <div
      className={cn(
        "w-full max-w-[19rem] rounded-[1.375rem] bg-white p-5 shadow-lg ring-1 ring-fg/5",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <BusinessMark className="size-11" />
        <div className="min-w-0">
          <p className="truncate font-semibold">{DEMO_BUSINESS}</p>
          <p className="truncate text-xs text-fg-soft">{copy.category}</p>
        </div>
        <Heart
          className="ml-auto size-5 shrink-0 text-[#e5484d]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-5 rounded-2xl bg-surface p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-xs text-fg-soft">{copy.rewardLabel}</p>
          <p className="text-sm font-semibold tabular-nums">
            {filled}
            <span className="text-fg-faint">/{goal}</span>
          </p>
        </div>
        <p className="mt-0.5 font-semibold">{copy.reward}</p>
        <ul className="mt-3 flex gap-2" aria-hidden="true">
          {Array.from({ length: goal }, (_, i) => (
            <li key={i} className="size-9">
              {i < filled ? (
                <Image
                  key={`t${i}`}
                  src={IMG.ole.token}
                  alt=""
                  width={96}
                  height={96}
                  className="mock-pop size-9"
                  style={{ "--i": i } as CSSProperties}
                />
              ) : (
                <span className="block size-9 rounded-full border-2 border-dashed border-border-strong" />
              )}
            </li>
          ))}
        </ul>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
          <div
            className="mock-grow h-full origin-left rounded-full bg-brand transition-transform duration-700 ease-out-expo"
            style={{ transform: `scaleX(${filled / goal})` }}
          />
        </div>
        <p
          className={cn(
            "mt-2 text-xs",
            left === 0 ? "font-semibold text-[#12a150]" : "text-fg-soft",
          )}
        >
          {left === 0
            ? copy.rewardReady
            : copy.tokensLeft.replace("{n}", String(left))}
        </p>
      </div>
    </div>
  );
}

/** Ole push notification ("We miss you!"), iOS-style banner. */
export function OleNotification({
  copy,
  className,
}: {
  copy: OleCopy;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-[20rem] gap-3 rounded-[1.25rem] bg-white/90 p-3.5 shadow-lg ring-1 ring-fg/5 backdrop-blur",
        className,
      )}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ole-navy">
        <Image src={IMG.ole.token} alt="" width={96} height={96} className="size-6" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2 text-xs">
          <span className="truncate font-semibold">{DEMO_BUSINESS}</span>
          <span className="shrink-0 text-fg-faint">{copy.now}</span>
        </div>
        <p className="mt-0.5 text-sm font-semibold">{copy.notifTitle}</p>
        <p className="text-xs leading-relaxed text-fg-soft">{copy.notifBody}</p>
      </div>
    </div>
  );
}
