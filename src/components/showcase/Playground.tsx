"use client";

import { useEffect, useId, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { Check, QrCode } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/cn";
import type { ProductKey } from "@/lib/productCapsules";
import { OleNotification, OleRewardCard } from "@/components/mock/OleMocks";
import {
  PanelDashboard,
  PanelQrCard,
} from "@/components/mock/PanelMocks";
import { NamazToday } from "@/components/mock/NamazMocks";

type Copy = Dictionary["home"]["playground"];
type Mock = Dictionary["mock"];

const TABS: { key: ProductKey; name: string; dot: string }[] = [
  { key: "ole", name: BRAND.products.ole, dot: "bg-brand" },
  { key: "panel", name: BRAND.products.olePanel, dot: "bg-ole-navy" },
  { key: "namaz", name: BRAND.products.namaz, dot: "bg-namaz" },
];

const QR_SECONDS = 120;
const fmt = (s: number) =>
  `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

/**
 * Try-it area: one tab per product, a few steps on the left and a live,
 * coded mock-up on the right that reacts to the buttons. Nothing is sent
 * anywhere; state lives in this component only.
 */
export function Playground({ copy, mock }: { copy: Copy; mock: Mock }) {
  const id = useId();
  const [tab, setTab] = useState<ProductKey>("ole");
  const [status, setStatus] = useState("");

  // Ole: tokens collected towards a five-token reward.
  const [tokens, setTokens] = useState(2);
  // Ole Panel: the generated QR (seed + seconds left) and campaign status.
  const [qr, setQr] = useState<{ seed: number; left: number } | null>(null);
  const [live, setLive] = useState(false);
  // Namaz Motivasyonu: today's five prayers.
  const [done, setDone] = useState([true, true, false, false, false]);

  const qrSeed = qr?.seed;
  useEffect(() => {
    if (qrSeed === undefined) return;
    const t = window.setInterval(() => {
      setQr((q) => (q && q.left > 1 ? { ...q, left: q.left - 1 } : null));
    }, 1000);
    return () => window.clearInterval(t);
  }, [qrSeed]);

  function select(next: ProductKey) {
    setTab(next);
    setStatus("");
  }

  function onTabKey(e: KeyboardEvent, index: number) {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = TABS[(index + delta + TABS.length) % TABS.length].key;
    select(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  }

  const current = copy[tab];

  return (
    <div className="overflow-hidden rounded-panel border border-border bg-white shadow-md">
      <div
        role="tablist"
        aria-label={copy.tablist}
        className="flex flex-wrap gap-2 border-b border-border p-3 sm:p-4"
      >
        {TABS.map((t, i) => (
          <button
            key={t.key}
            id={`${id}-tab-${t.key}`}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            aria-controls={`${id}-panel`}
            tabIndex={tab === t.key ? 0 : -1}
            onClick={() => select(t.key)}
            onKeyDown={(e) => onTabKey(e, i)}
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors",
              tab === t.key
                ? "border-fg bg-fg text-white"
                : "border-border-strong bg-white text-fg hover:border-fg-faint",
            )}
          >
            <span aria-hidden="true" className={cn("size-2 rounded-full", t.dot)} />
            {t.name}
          </button>
        ))}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${tab}`}
        className="grid lg:grid-cols-[1fr_1.25fr]"
      >
        <div className="flex flex-col p-6 sm:p-10">
          <h3 className="text-title">{current.title}</h3>
          <ol className="mt-6 grid gap-3">
            {current.steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-fg-muted">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface text-xs font-semibold text-fg tabular-nums">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            {tab === "ole" ? (
              tokens < 5 ? (
                <ActionButton
                  onClick={() => {
                    const n = tokens + 1;
                    setTokens(n);
                    setStatus(copy.ole.scanned.replace("{n}", String(n)));
                  }}
                >
                  <QrCode className="size-4" aria-hidden="true" />
                  {copy.ole.scan}
                </ActionButton>
              ) : (
                <ActionButton
                  onClick={() => {
                    setTokens(0);
                    setStatus(copy.ole.redeemed);
                  }}
                >
                  <Check className="size-4" aria-hidden="true" />
                  {copy.ole.redeem}
                </ActionButton>
              )
            ) : null}

            {tab === "panel" ? (
              <>
                <ActionButton
                  onClick={() => {
                    setQr({ seed: Math.floor(Math.random() * 1e6), left: QR_SECONDS });
                    setStatus(copy.panel.generated);
                  }}
                >
                  <QrCode className="size-4" aria-hidden="true" />
                  {copy.panel.generate}
                </ActionButton>
                <ActionButton
                  variant="secondary"
                  pressed={live}
                  onClick={() => {
                    setLive(!live);
                    setStatus(live ? copy.panel.unpublished : copy.panel.published);
                  }}
                >
                  {live ? copy.panel.unpublish : copy.panel.publish}
                </ActionButton>
              </>
            ) : null}

            {tab === "namaz" ? (
              <p className="text-sm text-fg-soft">{copy.namaz.hint}</p>
            ) : null}
          </div>

          <p role="status" className="mt-4 min-h-6 text-sm font-medium text-fg">
            {status}
          </p>
          <p className="mt-auto pt-8 text-xs text-fg-faint">{copy.note}</p>
        </div>

        <div className="relative grid min-h-[30rem] place-items-center overflow-hidden bg-surface p-6 sm:p-10">
          {tab === "ole" ? (
            <div className="grid w-full max-w-[20rem] gap-4">
              <OleRewardCard copy={mock.ole} filled={tokens} />
              <OleNotification copy={mock.ole} className="justify-self-end" />
            </div>
          ) : null}
          {tab === "panel" ? (
            <div className="grid w-full place-items-center gap-4 xl:grid-cols-[1fr_auto]">
              <PanelDashboard copy={mock.panel} campaignLive={live} className="hidden w-full xl:block" />
              <PanelQrCard
                copy={mock.panel}
                showQr={qr !== null}
                timeLeft={qr ? fmt(qr.left) : undefined}
                seed={qr?.seed}
              />
            </div>
          ) : null}
          {tab === "namaz" ? (
            <NamazToday
              copy={mock.namaz}
              done={done}
              onToggle={(i) => {
                const next = done.map((v, j) => (j === i ? !v : v));
                setDone(next);
                setStatus(
                  copy.namaz.progress.replace(
                    "{n}",
                    String(next.filter(Boolean).length),
                  ),
                );
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  variant = "primary",
  pressed,
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  pressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={pressed}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-[0.975rem] font-semibold transition-[transform,background-color,border-color] duration-150 active:scale-[0.97]",
        variant === "primary"
          ? "border-transparent bg-brand text-ole-navy hover:bg-[#e85600]"
          : "border-border-strong bg-white text-fg hover:border-fg-faint",
      )}
    >
      {children}
    </button>
  );
}
