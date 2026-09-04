import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

// Single type family for the whole site.
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/otechi-mark.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={poppins.variable} suppressHydrationWarning>
      <body className="min-h-dvh">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
