"use strict";

const Boom = require("boom");
const { getArticles } = require("../../patient/controllers/patient");

module.exports = {
  /**
   *  example treatment plan in body:
   *  {
   *   "username": "",
   *   "password": "",
   *   "email": ""
   *  }
   */

  async sendSurvey(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    const { surveyTemplateId } = ctx.params;
    const { userId } = ctx.request.body;

    if (!userId || !surveyTemplateId) {
      throw Boom.badRequest("user and template is necessary");
    }

    return strapi.services.doctor.sendSurvey(surveyTemplateId, userId);
  },

  async createUser(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    return await strapi.services.doctor.createUser(
      ctx.request.body,
      ctx.state.user?.id
    );
  },

  /**
   * example treatment plan in body:
   *
   *     {
   *          "patientName": "name",
   *          "phone": "phone",
   *          "patientDOB": "asdf",
   *          "email": "email",
   *          "primaryCareProvider": "provider",
   *          "surgeon": "surgeon",
   *          "radiantOncologist": "name",
   *          "medicalOncologist": "name",
   *          "otherProviders" [
   *                  "provider", "provider2"
   *              ],
   *          "cancerType": "type",
   *          "diagnosysDate": date,
   *          "stage": "stage",
   *          "surgery": true/false,
   *          "surgeryDate": date/null" (ha null nem kell),
   *          "surgicalProcedure": "...",
   *          "radiation": true/false,
   *          "bodyAreaTreated": "area",
   *          "endYear": 2021,
   *          "systemicTherapy": true/false,
   *          "agentsUsed": [
   *                  "agent1", "agent2"
   *              ],
   *          "sympthomsSideEffects": true/false,
   *          "symptomsSideEffectsDescription": "...",
   *          "needOngoingTreatment": true/false,
   *          "additionalTreatment": [
   *                  "treatment1", "treatment2"
   *              ],
   *          "clinicVisits": [
   *                  {
   *                      "provider": "...",
   *                      "when": date
   *                  },
   *                  {
   *                      "provider": "...",
   *                      "when": date
   *                  }
   *              ],
   *          "survillenceTests": [
   *                  {
   *                      "provider": "...",
   *                      "howOften": "2 times a week"
   *                      "test": "..."
   *                  },
   *                  {
   *                      "provider": "...",
   *                      "howOften": "once a month"
   *                      "test": "..."
   *                  }
   *              ],
   *          "otherComments": "...",
   *          "preparedBy": "name",
   *          "deliveredOn": date
   *      }
   *
   */
  async createTreatmentPlan(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    return await strapi.services.doctor.createTreatmentPlan({
      body: { ...ctx.request.body, doctor: ctx.state.user.id },
    });
  },

  /**
   * Example json for document:
   * {
   *      "patient": 1
   *      "content": "..."
   * }
   */
  async createDocument(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    const body = ctx.request.body;
    return await strapi.services.doctor.createDocument({
      body: body,
    });
  },

  /**
   * Example json for survey template:
   * {
   *      "name": "name"
   *      "elements": [
   *          {
   *              "type": "exampletype",
   *              ...
   *          }
   *      ]
   * }
   */
  async createSurveyTemplate(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    const doctorId = ctx.state.user?.id;
    const body = ctx.request.body;
    const entity = await strapi.services.doctor.createSurveyTemplate({
      ...body,
      owner: doctorId,
    });
    return entity;
  },

  async GetSurveyTemplates(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    const doctorId = ctx.state.user?.id;
    return await strapi.services["survey-template"].find({ owner: doctorId });
  },

  async patients(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    return await strapi.services.doctor.getPatients(ctx.state.user.id);
  },

  async getUsersOfArticle(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    const articleId = ctx.params.articleId;
    const users = await strapi.services.doctor.getUsersOfArticle({
      articleId: articleId,
    });
    return users;
  },

  async assignArticleToUser(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    const { articleId, userId } = ctx.params;
    const entity = await strapi.services.doctor.createAssignment({
      articleId: articleId,
      userId: userId,
    });
    return entity;
  },

  async UnAssignArticleToUser(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    const { articleId, userId } = ctx.params;
    const entity = await strapi.services.doctor.deleteAssignment({
      articleId: articleId,
      userId: userId,
    });
    return entity;
  },
  async getArticles(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    return await strapi.services.articles.find();
  },

  async schedule(ctx) {
    if (ctx.state.user?.userType !== "DOCTOR") {
      throw Boom.forbidden("not doctor");
    }
    return await strapi.services.doctor.getSchedule(ctx.state.user.id);
  },
};
