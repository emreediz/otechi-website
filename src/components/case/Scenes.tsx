import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { BadgeCheck, Flame } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { cn } from "@/lib/cn";
import {
  OleCampaignCard,
  OleNotification,
  OleRewardCard,
} from "@/components/mock/OleMocks";
import {
  PanelBranches,
  PanelCampaignsCard,
  PanelQrCard,
  PanelReportCard,
  PanelVerifyCard,
  QrPattern,
} from "@/components/mock/PanelMocks";
import {
  MEMBERS,
  NamazRing,
  NamazToday,
  NamazWeek,
  TODAY,
  weekFull,
} from "@/components/mock/NamazMocks";
import {
  IzDevices,
  IzJournal,
  IzNote,
  IzStreak,
  IzVoice,
} from "@/components/mock/IzMocks";

type Mock = Dictionary["mock"];

/*
 * Scenes for the "How it works" stage (StepStory). Each is a small
 * composition of the coded mock-ups; `.scene-in` parts rise in and the
 * mock-ups' own `.mock-pop` / `.mock-bar` parts replay whenever the scene
 * becomes active (globals.css, `.story-scene[data-active]`).
 */

const at = (i: number) => ({ "--i": i }) as CSSProperties;

function In({
  i = 0,
  className,
  children,
}: {
  i?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("scene-in", className)} style={at(i)}>
      {children}
    </div>
  );
}

/** The customer's reward code, as shown at the till (Ole and Ole Panel). */
function RewardCode({ copy }: { copy: Mock["ole"] }) {
  return (
    <div
      data-surface="light"
      className="w-full rounded-[1.375rem] bg-white p-6 text-center text-[#0b0b0b] shadow-2xl"
    >
      <p className="text-xs text-[#6b7385]">{copy.codeLabel}</p>
      <p className="mt-1 font-semibold">{copy.reward}</p>
      <div className="mt-5 flex justify-center gap-1.5">
        {"482917".split("").map((d, i) => (
          <span
            key={i}
            className="mock-pop grid h-12 w-10 place-items-center rounded-xl bg-[#fff1e8] text-xl font-semibold tabular-nums text-[#c24a00]"
            style={at(i)}
          >
            {d}
          </span>
        ))}
      </div>
      <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[#6b7385]">
        <BadgeCheck className="size-4 text-[#12a150]" />
        {copy.codeHint}
      </p>
    </div>
  );
}

/** Small glass label under an object in a scene ("QR", "NFC"). */
function SceneChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-white ring-1 ring-white/20 backdrop-blur">
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------- Ole */

export function oleScenes(mock: Mock): ReactNode[] {
  const o = mock.ole;
  return [
    // 1. Scan: the QR code or the Ole NFC stand (pinging); a token flies
    //    from the code into the "+1 token" bubble.
    <div
      key="scan"
      className="relative pt-16 [--fly-x:-6rem] [--fly-y:7.5rem] sm:[--fly-x:-11rem] sm:[--fly-y:10rem]"
    >
      <div className="flex items-end gap-6 sm:gap-10">
        <In i={0} className="grid justify-items-center gap-4">
          <div className="rounded-3xl bg-white p-4 shadow-2xl sm:p-5">
            <QrPattern className="size-28 sm:size-40" seed={11} />
          </div>
          <SceneChip>QR</SceneChip>
        </In>
        <In i={1} className="relative grid justify-items-center gap-4">
          <span className="nfc-ping absolute left-1/2 top-[8%] size-24 -translate-x-1/2 rounded-full border-2 border-white/70" />
          <span
            className="nfc-ping absolute left-1/2 top-[8%] size-24 -translate-x-1/2 rounded-full border border-white/50"
            style={{ animationDelay: "1.8s" }}
          />
          <Image
            src={IMG.ole.nfc}
            alt=""
            width={IMG.ole.nfcW}
            height={IMG.ole.nfcH}
            sizes="8rem"
            className="h-48 w-auto -rotate-6 drop-shadow-[0_24px_30px_rgb(0_0_0/0.55)] sm:h-64"
          />
          <SceneChip>NFC</SceneChip>
        </In>
      </div>
      <span className="scene-pop absolute right-0 top-0">
        <span className="bubble-bump flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#c24a00] shadow-lg">
          <Image src={IMG.ole.token} alt="" width={96} height={96} className="size-5" />
          {o.earned}
        </span>
      </span>
      <Image
        src={IMG.ole.token}
        alt=""
        width={96}
        height={96}
        className="token-fly absolute right-[5rem] top-0 size-9"
      />
    </div>,

    // 2. Collect: the loyalty card fills, one token to the reward.
    <In key="collect" i={0} className="w-[20rem]">
      <OleRewardCard copy={o} filled={4} />
    </In>,

    // 3. Redeem: the reward code to show at the till.
    <In key="redeem" i={0} className="w-[20rem]">
      <RewardCode copy={o} />
    </In>,

    // 4. Come back: the reminder, with the offer that brings you back.
    <div key="back" className="grid w-[min(22rem,calc(100vw-4rem))] gap-4">
      <In i={0}>
        <OleNotification copy={o} />
      </In>
      <In i={1} className="pl-6">
        <OleCampaignCard copy={o} campaign={o.otherCampaigns[1]} />
      </In>
    </div>,
  ];
}

/* ---------------------------------------------------------- Ole Panel */

export function panelScenes(mock: Mock): ReactNode[] {
  const p = mock.panel;
  return [
    <In key="qr" i={0}>
      <PanelQrCard copy={p} seed={23} />
    </In>,
    // 2. Verify: the customer's code at the till, checked in the panel.
    <div key="verify" className="grid w-[20rem]">
      <In i={0} className="w-[17rem] -rotate-3">
        <RewardCode copy={mock.ole} />
      </In>
      <In i={1} className="relative -mt-14 ml-auto w-[18rem] rotate-1">
        <PanelVerifyCard copy={p} />
      </In>
    </div>,
    <In key="publish" i={0} className="w-[21rem]">
      <PanelCampaignsCard copy={p} />
    </In>,
    <div key="follow" className="grid w-[21rem] gap-4">
      <In i={0}>
        <PanelReportCard copy={p} />
      </In>
      <In i={1} className="pl-8">
        <PanelBranches copy={p} />
      </In>
    </div>,
  ];
}

/* ------------------------------------------------- Namaz Motivasyonu */

export function namazScenes(mock: Mock): ReactNode[] {
  const n = mock.namaz;
  return [
    <In key="mark" i={0}>
      <NamazToday copy={n} done={[true, true, true, false, false]} />
    </In>,
    // 2. See: today's progress fills the ring; the week in statistics.
    <div key="see" className="relative pr-4 pt-24">
      <In i={0}>
        <NamazWeek copy={n} />
      </In>
      <In i={1} className="absolute right-0 top-0">
        <NamazRing copy={n} value={60} label={n.today} />
      </In>
    </div>,
    // 3. Keep going: the streak.
    <In
      key="streak"
      i={0}
      className="grid w-[19rem] justify-items-center rounded-[1.375rem] border border-white/15 bg-white/[0.07] px-8 py-10 text-center text-white backdrop-blur-md"
    >
      <Flame className="size-12 text-[#8fe3c4] drop-shadow-[0_0_16px_#2bc78f]" />
      <p className="mt-3 text-7xl font-light tabular-nums tracking-[-0.04em]">
        {n.streakCount}
      </p>
      <p className="mt-2 text-sm text-white/75">{n.streak}</p>
      <div className="mt-6 flex gap-2">
        {n.days.map((d, i) => (
          <span key={i} className="flex flex-col items-center gap-1.5">
            <span
              className={cn(
                "mock-pop size-5 rounded-full",
                weekFull[i]
                  ? "bg-[#8fe3c4] shadow-[0_0_10px_#2bc78f]"
                  : i === TODAY
                    ? "border-2 border-[#8fe3c4]"
                    : "border border-white/30",
              )}
              style={at(i)}
            />
            <span className="text-[0.625rem] text-white/60">{d}</span>
          </span>
        ))}
      </div>
    </In>,
    // 4. Together: the group's invite code, friends joining.
    <div key="group" className="grid w-[20rem] gap-3">
      <In i={0}>
        <div
          data-surface="light"
          className="rounded-[1.375rem] bg-[#f3f7f5] p-4 text-left shadow-lg"
        >
          <p className="text-lg font-semibold text-[#006b4d]">{n.groupName}</p>
          <p className="mt-2 text-[0.6875rem] font-semibold text-[#006b4d]">
            {n.invite}
          </p>
          <div className="mt-2 flex gap-1.5">
            {"K7M2QA".split("").map((ch, i) => (
              <span
                key={i}
                className="mock-pop grid h-12 flex-1 place-items-center rounded-xl bg-white text-xl font-semibold"
                style={at(i)}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </In>
      {MEMBERS.map((m, i) => (
        <In
          key={m.initials}
          i={i + 1}
          className={cn(
            "flex items-center gap-3 rounded-full bg-white/10 py-2 pl-2 pr-4 text-sm text-white ring-1 ring-white/15 backdrop-blur",
            i % 2 ? "ml-10" : "mr-10",
          )}
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#8fe3c4] text-[0.6875rem] font-semibold text-[#03301f]">
            {m.initials}
          </span>
          {n.joined.replace("{name}", m.name)}
        </In>
      ))}
    </div>,
  ];
}

/* ----------------------------------------------------------------- İz */

export function izScenes(mock: Mock): ReactNode[] {
  const z = mock.iz;
  return [
    // 1. Take notes: blocks, to-dos, a tag and a reminder.
    <In key="note" i={0} className="w-[20rem]">
      <IzNote copy={z} done={[true, true, false]} />
    </In>,
    // 2. Journal: today's page, the mood, the writing streak.
    <div key="journal" className="grid w-[20rem] justify-items-center gap-4">
      <In i={0} className="w-full">
        <IzJournal copy={z} mood={0} />
      </In>
      <In i={1}>
        <IzStreak copy={z} />
      </In>
    </div>,
    // 3. Voice: a recording and its transcript.
    <In key="voice" i={0} className="w-[20rem]">
      <IzVoice copy={z} />
    </In>,
    // 4. Anywhere: iPhone and iPad in sync.
    <In key="devices" i={0} className="pb-8">
      <IzDevices copy={z} />
    </In>,
  ];
}
