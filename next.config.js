const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
