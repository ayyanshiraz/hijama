/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this images block:
  images: {
    unoptimized: true,
  },
  // output: 'export', // You likely already have this line if you got the error
  // ... any other configurations you might have
};

module.exports = nextConfig;