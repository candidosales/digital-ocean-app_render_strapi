# Digital Ocean App / Render - Strapi

This example deploys self-hosted version of [Strapi](https://strapi.io/). Internally it uses a PostgreSQL database to store the data.

## ✨ Features

- [Strapi](https://strapi.io/)
- [Postgres](https://www.postgresql.org/)
- Upload images - Locally.
  - I don't recommend locally. The reason: https://docs.digitalocean.com/products/app-platform/how-to/store-data/#local-filesystem-ephemeral-files-only
  - I recommend using other providers: https://docs.strapi.io/developer-docs/latest/plugins/upload.html

## 💁‍♀️ How to use

### Digital Ocean

[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/candidosales/digital-ocean-app_render_strapi/tree/main)

- Click the Digital Ocean button 👆
- Add the environment variables

### Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/candidosales/digital-ocean-app_render_strapi)

- Click the Deploy to Render button 👆

## 📝 Notes

- After your app is deployed, visit the `/admin` endpoint to create your admin user.
- **Digital Ocean App's filesystem** is [ephemeral](https://docs.digitalocean.com/products/app-platform/how-to/store-data/#local-filesystem-ephemeral-files-only) which is why any changes to the filesystem are not persisted between deploys. This is why, this example uses Cloudinary for storage.
  - You have just to set up the Cloudinary credentials in [config/plugins.js](./config/plugins.js) and remove the `provider` local in the same file.

## Environment Variables

## Run locally

### Customization

- Create `.env` file on the root folder to add the environment variables:
  - `APP_KEYS`;
  - `API_TOKEN_SALT`;
  - `ADMIN_JWT_SECRET`;
  - `JWT_SECRET`;
  - Tip: https://randomkeygen.com/

## Admin customization

- Create the `src/admin/app.js` to customize the Admin panel;
  - For each change do you have to run `yarn build`;
  - More info [here](https://docs.strapi.io/developer-docs/latest/development/admin-customization.html);

## Plugins installed

- Local File upload: `@strapi/provider-upload-local`;
- Cloudinary upload: `@strapi/provider-upload-cloudinary`;
- Documentation: `@strapi/plugin-documentation`;
- Flatten API response removing `attributes` and `data`: https://market.strapi.io/plugins/strapi-plugin-transformer;
