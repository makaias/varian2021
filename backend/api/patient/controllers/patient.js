"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const Boom = require("boom");

module.exports = {
  /**
   *{
     "username": "...",
     "email": "...",
     "password": "...",
     "firstname": "...",
     "surename": "...",
     "date_of_birth": "...",
   }
   *
   *
   * @returns
   */
  async fillPersonalData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }

    return await strapi.services.patient.update(
      ctx.state.user,
      ctx.request.body
    );
  },

  async updatePersonalData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }

    return await strapi.services.patient.update(
      ctx.state.user,
      ctx.request.body
    );
  },

  async getSurveys(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }

    const { id } = ctx.params;
    const patientId = ctx.state.user?.id;

    const entity = await strapi.services.survey.find({
      id,
      user_to_complete: patientId,
    });
    return sanitizeEntity(entity, { model: strapi.models.survey });
  },

  async getSurvey(ctx) {
    const { id, surveyId } = ctx.params;
    const patientId = ctx.state.user?.id;

    const entity = await strapi.services.survey.find({
      id,
      user_to_complete: patientId,
      surveyIds,
    });
    return sanitizeEntity(entity, { model: strapi.models.survey });
  },

  async fillSurvey(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }
    const { id, surveyId } = ctx.params;
    const patientId = ctx.state.user?.id;
  },

  async getTreatmentPlans(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }
    return ctx.throw(400, "unimplemented operation");
  },

  async getTreatmentPlan(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }
    return ctx.throw(400, "unimplemented operation");
  },
};
