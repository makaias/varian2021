"use strict";

const Boom = require("boom");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getPatientData(ctx) {
    let statistic = await strapi.services.statistics.findOne({
      user: ctx.params.patientId,
    });
    return statistic;
  },
};
