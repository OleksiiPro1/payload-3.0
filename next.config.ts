import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 1. УБРАЛИ eslint и typescript отсюда, так как новая версия их тут не любит
  
  // 2. Оставляем редиректы для чистого URL
  async redirects() {
    return [
      {
        source: '/de',
        destination: '/',
        permanent: true,
      },
      {
        source: '/de/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },

  // 3. Оставляем настройки webpack для Payload
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })