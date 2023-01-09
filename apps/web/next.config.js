module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui", "@quizbond/lib"],
  }
  ,
  images: {
    domains: ["cloudinary.com/", "res.cloudinary.com"],
  },
};
