"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const {
  userTypes,
} = require("../../../extensions/users-permissions/models/User.settings.json");

module.exports = {
  /**
   * @param {*} ctx.id
   * @param {*} ctx.data
   * @returns
   */
  async fillPersonalData(ctx) {
    const { id } = ctx.params;
    const userType = ctx.state.userType;
    const isPatient = userType === userTypes.PATIENT;

    if (!isPatient) {
      throw new Error("request not sent by patient");
    }

    let entity;
    if (ctx.is("multipart")) {
      const { data } = parseMultipartData(ctx);
      entity = await strapi.services.patient.update({ id }, data);
    } else {
      entity = await strapi.services.patient.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.patient });
  },
  /**
   *
   * @param {*} ctx
   * @returns
   */
  async updatePersonalData(ctx) {
    const userType = ctx.state.userType;
    const isPatient = userType === userTypes.PATIENT;

    if (!isPatient) {
      throw new Error("request not sent by patient");
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
    const userType = ctx.state.userType;
    const isPatient = userType === userTypes.PATIENT;

    if (!isPatient) {
      throw new Error("request not sent by patient");
    }

    const { id } = ctx.params;
    const patientId = ctx.state.user?.id;

    const entity = await strapi.services.survey.find({
      id,
      user_to_complete: patientId,
    });
    return sanitizeEntity(entity, { model: strapi.models.survey });
  },
  /**
   *
   * @param {*} ctx.id
   * @param {*} ctx.state.user.id
   * @param {*} ctx.surveyId
   * @returns
   */
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
    const { id, surveyId } = ctx.params;
    const patientId = ctx.state.user?.id;
  },
  // getTreatmentPlan(ctx) {},
  // getTreatmentPlans(ctx) {},
  async findOne(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
    }
    return ctx.throw(400, "unimplemented operation");
  },

  async fillData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
    }
    return ctx.throw(400, "unimplemented operation");
  },

  async updateData(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
    }
    return ctx.throw(400, "unimplemented operation");
  },

  async getSurveys(ctx) {
    if (ctx.state.user?.userType !== "PATIENT") {
      return null;
    }
    return ctx.throw(400, "unimplemented operation");
  },

  async getSurvey(ctx) {
    return ctx.throw(400, "unimplemented operation");
  },

  async fillSurvey(ctx) {
    return ctx.throw(400, "unimplemented operation");
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
