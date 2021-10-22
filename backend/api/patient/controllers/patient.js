"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async fillPersonalData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
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
    return ctx.throw(400, "unimplemented operation");
  },

  async updatePersonalData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
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
      return null;
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

    return ctx.throw(400, "unimplemented operation");
  },

  async fillSurvey(ctx) {
    const { id, surveyId } = ctx.params;
    const patientId = ctx.state.user?.id;
  },

  async getTreatmentPlans(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
    }
    return ctx.throw(400, "unimplemented operation");
  },

  async getTreatmentPlan(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
    }
    return ctx.throw(400, "unimplemented operation");
  },
};
