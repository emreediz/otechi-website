import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — deploys to Cloudflare Pages with no server runtime.
  output: "export",
  // The static export has no Image Optimization server.
  images: { unoptimized: true },
  // Keep URLs clean: /tr, /tr/urunler, ...
  trailingSlash: false,
  // Development only: lets phones on the local network open
  // `next dev -H 0.0.0.0` (http://192.168.x.x:PORT) with live reload.
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
