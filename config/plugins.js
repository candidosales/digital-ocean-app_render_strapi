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
      providerOptions: {
        sizeLimit: 100000,
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
