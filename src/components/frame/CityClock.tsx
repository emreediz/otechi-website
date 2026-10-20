"use client";

import { useEffect, useState } from "react";

/**
 * "İzmir 21:40" — local time at the studio. Rendered after mount only, so
 * the static HTML never carries a stale time.
 */
export function CityClock({
  city,
  locale,
  className,
}: {
  city: string;
  locale: string;
  className?: string;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Istanbul",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = window.setInterval(tick, 15_000);
    return () => window.clearInterval(t);
  }, [locale]);

  return (
    <span className={className}>
      {city}
      {time ? <span className="ml-1.5 tabular-nums">{time}</span> : null}
    </span>
  );
}
