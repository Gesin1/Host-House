/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "tznsabzbxzpyjrwvkwjy.supabase.co",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/w320/**",
      },
    ],
  },
};

export default nextConfig;
