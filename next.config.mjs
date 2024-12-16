/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/14.24.1/img/champion/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
// 도메인 설정 오류
