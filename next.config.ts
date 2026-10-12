import type { NextConfig } from "next";
const config: NextConfig = {
  async redirects() {
    // Add 301s here, e.g. { source: "/old-page", destination: "/services", permanent: true }
    return [];
  },
};
export default config;
