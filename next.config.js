/** @type {import('next').NextConfig} */
const path = require('path'); // Agrega esta línea para importar 'path'

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "rickandmortyapi.com" }],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
  ],
};

module.exports = nextConfig;
