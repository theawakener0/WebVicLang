import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable Turbopack due to crashes on Windows */
  experimental: {
    turbo: undefined,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
