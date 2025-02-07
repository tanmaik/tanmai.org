import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      } as const,
      {
        protocol: 'http',
        hostname: '**',
      } as const,
    ],
  },
  devIndicators: {
    appIsrStatus: false
  }
}

export default withMDX(nextConfig)
