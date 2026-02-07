import type { NextConfig } from "next";

const strapiHost = process.env.STRAPI_BASE_URL
  ? new URL(process.env.STRAPI_BASE_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
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
      // ✅ PRODUCTION STRAPI (FROM ENV)
      ...(strapiHost
        ? [
            {
              protocol: "https",
              hostname: strapiHost,
              port: "", // Explicitly set port to empty string for production
              pathname: "/uploads/**",
            } as const,
          ]
        : []),
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:1337", "127.0.0.1:1337"],
    },
  },
};

export default nextConfig;
