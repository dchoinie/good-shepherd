import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ytimg.com"],
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENT_DELIVERY_API_KEY: process.env.CONTENT_DELIVERY_API_KEY,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
