module.exports = {
  settings: {
    "serve-ui": {
      enabled: true,
      proxy: 3000,
    },
    "response-error-log": {
      enabled: true,
    },
  },

  load: {
    before: ["boom", "response-error-log"],
    after: ["router", "serve-ui"],
  },
};
