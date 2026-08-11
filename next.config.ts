import type { NextConfig } from "next";

// GitHub Pages project sites are served from /<repository-name>/
// Local development is served from the domain root.
// basePath is needed so next/image and all routes include /Portfolio prefix.
// assetPrefix is needed so _next/static assets load from the right path.
// env.NEXT_PUBLIC_BASE_PATH is used by assetPath() in data/portfolio.ts for static images.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
