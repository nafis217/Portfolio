import type { NextConfig } from "next";

// GitHub Pages project sites are served from /<repository-name>, while local
// development is served from the domain root. Keeping this conditional means
// local URLs stay clean and the deployed static export resolves every public
// image and Next asset under /Portfolio.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
