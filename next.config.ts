import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false
  }
};

export default nextConfig;
