module.exports = {
  reactStrictMode: true,
  env: {
    logo: "https://dewey.tailorbrands.com/production/brand_version_mockup_image/983/5813196983_2e2e9d6d-c16d-432f-b8e3-3c94fd3c6316.png?cb=1628693635",
  },
  async rewrites() {
    return [
      {
        source: "/sign-in",
        destination: "/auth/Login",
      },
    ];
  },
};
