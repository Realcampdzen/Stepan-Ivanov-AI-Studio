/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/Stepan-Ivanov-AI-Studio' : ''

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
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
