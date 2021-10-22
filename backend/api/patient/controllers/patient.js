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

  // TODO test
  async getSurveys(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }
    const patientId = ctx.state.user?.id;

    const entity = await strapi.services.survey.find({
      user_to_complete: patientId,
    });
    return entity;
  },

  // TODO test
  async getSurvey(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }
    const { surveyId } = ctx.params;
    const patientId = ctx.state.user?.id;

    return await strapi.services.survey.find({
      user_to_complete: patientId,
      id: surveyId,
    });
  },

  // TODO specify survey
  async fillSurvey(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }
    const { surveyId } = ctx.params;
    const patientId = ctx.state.user?.id;
    const surveyResult = ctx.request.body;

    const entity = await strapi.services.survey.update({
      patientId: patientId,
      surveyId: surveyId,
      surveyResult: surveyResult,
    });
    return entity;
  },

  async getTreatmentPlans(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }

    const patientName = ctx.state.user?.username;

    const entity = await strapi.services["treatment-plan"].find({
      patientName: patientName,
    });
    return entity;
  },

  async getTreatmentPlan(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }

    const patientName = ctx.state.user?.username;
    const { treatmentId } = ctx.params;

    const entity = await strapi.services["treatment-plan"].find({
      patientName: patientName,
      id: treatmentId,
    });
    return entity;
  },
};
