import type { NextConfig } from "next";

const strapiBaseUrl = process.env.STRAPI_BASE_URL ?? "";
let strapiHostname = "";
let strapiHostWithPort = "";
let strapiProtocol: "http" | "https" = "https";
let strapiPort = "";
let strapiMediaHostname = "";
type RemotePattern = NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
>[number];

try {
  if (strapiBaseUrl) {
    const parsed = new URL(strapiBaseUrl);
    strapiHostname = parsed.hostname;
    strapiHostWithPort = parsed.host;
    strapiProtocol = parsed.protocol === "http:" ? "http" : "https";
    strapiPort = parsed.port;
    if (
      strapiHostname.endsWith(".strapiapp.com") &&
      !strapiHostname.includes(".media.")
    ) {
      const subdomain = strapiHostname.replace(".strapiapp.com", "");
      strapiMediaHostname = `${subdomain}.media.strapiapp.com`;
    }
  }
} catch {
  // Ignore invalid STRAPI_BASE_URL; fall back to localhost-only config.
}

const strapiImagePatterns: RemotePattern[] = [];
if (strapiHostname) {
  strapiImagePatterns.push({
    protocol: strapiProtocol,
    hostname: strapiHostname,
    ...(strapiPort ? { port: strapiPort } : {}),
    pathname: "/**",
  });
}
if (strapiMediaHostname) {
  strapiImagePatterns.push({
    protocol: "https",
    hostname: strapiMediaHostname,
    pathname: "/**",
  });
}

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
      ...strapiImagePatterns,
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
      allowedOrigins: [
        "localhost:1337",
        "127.0.0.1:1337",
        ...(strapiHostWithPort ? [strapiHostWithPort] : []),
      ],
    },
  },
};

export default nextConfig;
