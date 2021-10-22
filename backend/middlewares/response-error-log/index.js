module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          console.log("Response error generated:", error.stack);
          throw error;
        }
      });
    },
  };
};
