import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // В режиме разработки не используем basePath
  ...(process.env.NODE_ENV === "production" && {
    basePath: "/portfol_bagz",
    assetPrefix: "/portfol_bagz/",
  }),
};

export default nextConfig;
