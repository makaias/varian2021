"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getMe(ctx) {
    return await strapi.services.document.find({
      patient: ctx.state.user?.id,
    });
  },
};
