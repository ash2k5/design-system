/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The styleguide imports the built library from ../dist (outside this app dir).
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
