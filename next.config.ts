import type { NextConfig } from "next";

// GitHub Pages project sites are served from /<repository-name>, while local
// development is served from the domain root. Prefixing assets keeps the
// exported site rooted at `out/` while deployed files resolve under /Portfolio.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
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
