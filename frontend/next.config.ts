import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '8000',
//         pathname: '/**',
        
//       },
//       // {
//       //   protocol: 'https',
//       //   hostname: 'api.yourdomain.com',
//       //   pathname: '/**',
//       // },
//     ],
    
//   },

  
// };

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
