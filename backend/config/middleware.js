module.exports = {
  settings: {
    "serve-ui": {
      enabled: true,
      proxy: 3000,
    },
  },

  load: {
    after: ["router", "serve-ui"],
  },
};
