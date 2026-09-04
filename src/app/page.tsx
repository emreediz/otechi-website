import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import { RootRedirect } from "./root-redirect";

const target = `/${defaultLocale}`;

export const metadata: Metadata = {
  title: "Otechi",
  robots: { index: false, follow: false },
};

/**
 * The site is served under /tr and /en. "/" is a static redirect page:
 *  - <meta http-equiv="refresh"> works with `output: export` and without JS
 *  - Cloudflare Pages also gets a 302 from public/_redirects
 *  - RootRedirect adds an instant client-side hop
 */
export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <RootRedirect target={target} />
      <p style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
        <a href={target}>Otechi</a>
      </p>
    </>
  );
}
