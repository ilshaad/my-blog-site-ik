/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//   },
//   reactStrictMode: true,
//   async rewrites() {
//     return {
//       afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
//     };
//   },
// });

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return {
//       afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
//     };
//   },
// };

// module.exports = nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
});

// module.exports = withPWA({
//   // next.js config
// });
