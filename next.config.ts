import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //การแสดงรูปภาพ ต้องกำหนดค่าใน next.config.ts
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'fastly.picsum.photos',
        pathname:'/**'
      }
    ]
}
};

export default nextConfig;
