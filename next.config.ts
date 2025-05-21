import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/minecraft/map',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://minecraft.tanmai.org;"
          }
        ]
      }
    ]
  },
  devIndicators: false
};


export default nextConfig;
