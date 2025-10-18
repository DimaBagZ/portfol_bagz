import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/portfol_bagz" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfol_bagz/" : "",
};

export default nextConfig;
