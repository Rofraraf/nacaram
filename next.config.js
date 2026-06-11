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
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
