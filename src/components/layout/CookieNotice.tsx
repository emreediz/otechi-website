"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { Button } from "@/components/ui/Button";

/**
 * First-visit cookie notice: informational only (the site sets no cookies;
 * analytics is cookieless Cloudflare Web Analytics), so there is nothing to
 * accept or reject — just a link to the Cookie Policy and "Got it".
 *
 * Dismissal is remembered in localStorage under KEY. That entry is listed in
 * the Cookie Policy (src/content/legal/otechi/cookies.ts) — keep them in sync.
 * Non-modal: a small card in the bottom corner that never blocks the page.
 */
const KEY = "otechi-cookie-notice";
const EVENT = "otechi-cookie-notice";

// Fallback when storage is unavailable (private mode): hide for this page view.
let dismissedInMemory = false;

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function isDismissed() {
  if (dismissedInMemory) return true;
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

function dismiss() {
  dismissedInMemory = true;
  try {
    localStorage.setItem(KEY, "1");
  } catch {
    // Storage unavailable; the in-memory flag still hides the notice.
  }
  window.dispatchEvent(new Event(EVENT));
}

export function CookieNotice({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  // Server render / static HTML: treat as dismissed, so the notice never
  // flashes for returning visitors; the client then shows it if needed.
  const dismissed = useSyncExternalStore(subscribe, isDismissed, () => true);
  const pathname = usePathname();
  const policyPath = localizedPath("cookies", locale);
  const t = dict.cookieNotice;

  // Not on the policy page itself (the reader is already there). Tolerate
  // ".html" / trailing-slash variants of the static export's URLs.
  const current = pathname.replace(/(\.html|\/)$/, "");
  if (dismissed || current === policyPath) return null;

  return (
    <section
      aria-label={t.label}
      className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 rounded-2xl border border-fg/15 bg-surface p-5 text-fg shadow-2xl cookie-notice sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-sm print:hidden"
    >
      <p className="flex gap-3 text-sm leading-relaxed text-fg-muted">
        <Cookie className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
        <span>{t.text}</span>
      </p>
      <div className="mt-4 flex items-center justify-between gap-4 pl-7">
        <Link
          href={policyPath}
          className="inline-flex min-h-11 items-center text-sm font-medium text-fg"
        >
          <span className="link-underline">{t.policy}</span>
        </Link>
        <Button size="sm" variant="primary" onClick={dismiss}>
          {t.dismiss}
        </Button>
      </div>
    </section>
  );
}
