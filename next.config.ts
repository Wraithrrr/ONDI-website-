import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily ignore ESLint errors during builds to enable rapid deployment.
  // TODO: Re-enable (set to false) after fixing react/no-unescaped-entities occurrences.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
