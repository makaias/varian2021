"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const { Boom } = require("boom");

module.exports = {
  async fillPersonalData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }
    const { id } = ctx.params;

    let entity;
    if (ctx.is("multipart")) {
      const { data } = parseMultipartData(ctx);
      entity = await strapi.services.patient.update({ id }, data);
    } else {
      entity = await strapi.services.patient.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.patient });
  },

  async updatePersonalData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      throw Boom.forbidden("not patient");
    }

    let entity;
    if (data) {
      const { data } = parseMultipartData(ctx);
      entity = await strapi.services.patient.update(data);
    } else {
      entity = await strapi.services.patient.update(ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.patient });
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
