"use strict";
const Boom = require("boom");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async insertCronUser(surveyTemplateId, cronUserId) {
    const surveyTemplateEntity = await strapi.services[
      "survey-template"
    ].findOne({
      id: surveyTemplateId,
    });

    const userEntity = await strapi.plugins[
      "users-permissions"
    ].services.user.fetch({ id: cronUserId });

    if (!surveyTemplateEntity || !userEntity) {
      throw Boom.notFound(
        "can't find survey-template or user",
        surveyTemplateId,
        cronUserId
      );
    }

    const updatedValues = {};

    updatedValues.cronTargets = surveyTemplateEntity.cronTargets;

    // TODO normális ellenőrzés, hogy benne van-e
    if (updatedValues.cronTargets.includes(userEntity)) {
      throw Boom.forbidden("already having cron user");
    }

    updatedValues.cronTargets.push(userEntity);

    // const updatedUserEntity = await strapi.services.articles.update(
    //   { id: userId },
    //   updatedValues
    // );

    const entity = await strapi.services["survey-template"].update(
      { id: surveyTemplateId },
      updatedValues
    );
    return entity;
  },

  async removeCronUser(surveyTemplateId, cronUserId) {
    const surveyTemplateEntity = await strapi.services[
      "survey-template"
    ].findOne({
      id: surveyTemplateId,
    });

    const userEntity = await strapi.plugins[
      "users-permissions"
    ].services.user.fetch({ id: cronUserId });

    if (!surveyTemplateEntity || !userEntity) {
      throw Boom.notFound(
        "can't find survey-template or user",
        surveyTemplateId,
        cronUserId
      );
    }

    const updatedCronTargets = surveyTemplateEntity.cronTargets.filter(
      (cronTarget) => cronTarget.id !== Number(cronUserId)
    );
    const entity = await strapi.services["survey-template"].update(
      { id: surveyTemplateId },
      { cronTargets: updatedCronTargets }
    );
    return entity;
  },
};
