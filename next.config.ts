import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Old section URLs, kept working after the rename.
  async redirects() {
    return [
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/resume", destination: "/experience", permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
