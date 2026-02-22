/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // 添加你的 Supabase 存储域名，如：
      // 'mplaxgjfnrhoozjghcjf.supabase.co',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // 移除 "Powered by Vercel" 标识
  poweredByHeader: false,
  
  // 添加安全头信息
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // 重定向规则
  async redirects() {
    return [
      {
        source: '/tools',
        destination: '/products',
        permanent: true,
      },
    ];
  },

  // 缓存和重写规则
  async rewrites() {
    return [
      // 如果需要，可以在这里添加重写规则
    ];
  },

  // 设置环境变量（也可以在 .env.local 中设置）
  env: {
    // 公共环境变量示例
    NEXT_PUBLIC_WEBSITE_URL: 'https://skynexdigital.com',
  },
  
  // 优化设置
  compiler: {
    // 移除 React 属性
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 实验性功能
  experimental: {
    // 根据需要启用实验功能
  },
};

module.exports = nextConfig;