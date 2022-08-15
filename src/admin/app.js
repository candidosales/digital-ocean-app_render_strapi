export default {
  config: {
    locales: ["en", "pt-BR"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Your Project",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
