import type { NextConfig } from "next";

const complianceDestination = "/solutions/compliance-management-software/";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/skefto-product",
        destination: complianceDestination,
        permanent: true,
      },
      {
        source: "/skefto-product/",
        destination: complianceDestination,
        permanent: true,
      },
      {
        source: "/use-cases",
        destination: complianceDestination,
        permanent: true,
      },
      {
        source: "/use-cases/",
        destination: complianceDestination,
        permanent: true,
      },
      {
        source: "/use-cases/:path*",
        destination: complianceDestination,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
