import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/portfol_bagz",
  assetPrefix: "/portfol_bagz/",
};

export default nextConfig;
