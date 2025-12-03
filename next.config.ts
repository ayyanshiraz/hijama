/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  
  async redirects() {
    return [
      {
        source: '/blog/benefits-of-blood-cupping',
        destination: '/services/blood-cupping',
        permanent: true,
      },
      {
        source: '/blog/the-sunnah-of-hijama',
        destination: '/blog/hijama-sunnah-benefits-wellness-path',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;