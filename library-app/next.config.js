/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");
const isProduction = process.env.NODE_ENV === "production";

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        disable: !isProduction,
      },
    },
  ],
  {
    reactStrictMode: false,
  },
]);
