import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output :'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;