module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      // # CLOUDINARY
      // provider: 'cloudinary',
      // providerOptions: {
      //   cloud_name: env('CLOUDINARY_NAME'),
      //   api_key: env('CLOUDINARY_KEY'),
      //   api_secret: env('CLOUDINARY_SECRET'),
      // },
      // actionOptions: {
      //   upload: {},
      //   delete: {},
      // },
      // # LOCAL
      provider: "local",
      sizeLimit: 100000,
      providerOptions: {
        localServer: {
          maxAge: 86400000, // 86.400.000 ms = 24h. Serve static assets with an efficient cache policy. Koa, Browser cache max-age in milliseconds. defaults to 0
        },
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
});
