/** @type {import('next').NextConfig} */

const { version } = require("./package.json");

const nextConfig = {
  images: {
    domains: ["cdn-studio.boncafe.co.il"],
  },
  reactStrictMode: false,
  publicRuntimeConfig: {
    version,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
