const { createSecureHeaders } = require("next-secure-headers");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  async headers() {
    return [
      { source: "/(.*)", headers: createSecureHeaders() },
      {
        source: "/api/:path*",
        headers: createSecureHeaders().concat([
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "*",
          },
        ])
      }
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: "src/statics/templates",
              to: "./templates",
            },
          ],
        })
      );
    }

    return config;
  },
};
