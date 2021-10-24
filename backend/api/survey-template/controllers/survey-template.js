"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async insertCronUser(ctx) {
    const surveyTemplateId = ctx.params.id;
    const cronUserId = ctx.request.body.userId;

    const entity = await strapi.services["survey-template"].insertCronUser(
      surveyTemplateId,
      cronUserId
    );
    return entity;
  },
  async removeCronUser(ctx) {
    const surveyTemplateId = ctx.params.id;
    const cronUserId = ctx.request.body.userId;

    const entity = await strapi.services["survey-template"].removeCronUser(
      surveyTemplateId,
      cronUserId
    );
    return entity;
  },
  async getCronTargets(ctx) {
    const surveyTemplateId = ctx.params.id;

    const entity = await strapi.services["survey-template"].findOne({
      id: surveyTemplateId,
    });
    return entity.cronTargets;
  },
};
