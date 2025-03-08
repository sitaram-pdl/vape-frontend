/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'www.sourcenepal.com',
      'dev-timesheet.s3.ap-southeast-2.amazonaws.com',
    ],
  },
};

export default nextConfig;
