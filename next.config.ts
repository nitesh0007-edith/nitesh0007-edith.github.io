import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (user root site, no basePath needed)
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
