/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/countries',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
