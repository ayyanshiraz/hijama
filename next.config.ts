/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      // Old redirects
      {
        source: '/blog/benefits-of-blood-cupping',
        destination: '/services/wet-cupping', // Updated directly to wet-cupping
        permanent: true,
      },
      {
        source: '/blog/the-sunnah-of-hijama',
        destination: '/blog/hijama-sunnah-benefits-wellness-path',
        permanent: true,
      },
      // New redirects
      {
        source: '/services/dry-and-massage-cupping',
        destination: '/services/dry-cupping',
        permanent: true,
      },
      {
        source: '/blog/services/hijama-for-baldness',
        destination: '/services/hijama-for-baldness',
        permanent: true,
      },
      {
        source: '/services/blood-cupping',
        destination: '/services/wet-cupping',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;