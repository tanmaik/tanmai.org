/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://github.com/tanmaik",
      },
      {
        source: "/friday",
        destination: "https://friday-beta.vercel.app",
      },
    ];
  },
};

export default nextConfig;
