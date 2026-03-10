/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
     
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