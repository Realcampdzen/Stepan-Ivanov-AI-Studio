/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Static export for GitHub Pages
  output: 'export',
  // Base path and asset prefix for repository subpath
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  // Safer routing on static hosts
  trailingSlash: true,
}

export default nextConfig
