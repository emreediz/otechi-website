import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — deploys to Cloudflare Pages with no server runtime.
  output: "export",
  // The static export has no Image Optimization server.
  images: { unoptimized: true },
  // Keep URLs clean: /tr, /tr/urunler, ...
  trailingSlash: false,
};

export default nextConfig;
