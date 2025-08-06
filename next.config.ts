import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fast Refresh 활성화 (기본값이지만 명시적으로 설정)
  fastRefresh: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
