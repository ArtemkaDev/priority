/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {  
  nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: `/`,
    basePath: ``,
    eslint: {
      ignoreDuringBuilds: true,
    },
  }
}


export default nextConfig
