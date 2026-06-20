/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  transpilePackages: ['next-sanity'],
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ]
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig