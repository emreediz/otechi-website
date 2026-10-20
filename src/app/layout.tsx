import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

// Single type family for the whole site.
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  // 300 for large figures and prices; 800 was never used.
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Otechi",
    template: "%s",
  },
  description:
    "Otechi is a technology studio building digital products and software solutions for businesses, startups and individuals.",
  // Favicon: served via the src/app/icon.svg file convention (Otechi mark) —
  // Next.js generates the <link rel="icon"> automatically, no manual entry needed.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={poppins.variable}
      // Smooth anchor scrolling is on (globals.css); this tells Next.js to
      // jump instantly to the top on route changes instead.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-dvh">
        <script
          dangerouslySetInnerHTML={{
            // Before first paint: enable JS-gated motion and set the
            // document language on /en/* (the static HTML says "tr").
            __html:
              "var d=document.documentElement;d.classList.add('js');if(/^\\/en(\\/|$)/.test(location.pathname))d.lang='en'",
          }}
        />
        {children}
      </body>
    </html>
  );
}
