/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  env: {
    backendUrl: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
    // set imageUrl if IMAGE_DOMAIN is set in env vars to override default
    imageUrl: `https://${process.env.NEXT_IMAGE_DOMAIN}`,
  },
}

module.exports = nextConfig;