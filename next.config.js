/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  distDir: "admin.iaajofficial.com",
  output: "export",
};

module.exports = nextConfig;
