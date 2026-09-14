import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
