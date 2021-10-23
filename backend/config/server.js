module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c2f12b0e8215124a28a2048ea6d602b5"),
    },
  },
  cron: { enable: true },
});
