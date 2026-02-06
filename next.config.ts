import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow localhost images during development (resolves private IP issue)
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      // Add your production Strapi domain here when deploying
      // {
      //   protocol: "https",
      //   hostname: "your-strapi-domain.com",
      //   pathname: "/uploads/**",
      // },
    ],
  },
  // Allow fetching images from localhost during development
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:1337", "127.0.0.1:1337"],
    },
  },
};

export default nextConfig;
