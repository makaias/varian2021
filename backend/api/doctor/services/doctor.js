"use strict";
const Boom = require("boom");
const { update } = require("../../patient/services/patient");

module.exports = {
  async sendSurvey(surveyTemplateId, userId) {
    return strapi.services.survey.create({
      complete: false,
      survey_template: surveyTemplateId,
      user_to_complete: userId,
    });
  },

  //body based on patient.create
  async createUser(body, doctor) {
    // NOTE ezeket az adatokat később állítani

    const defaultStatiszticData = {
      Badges: [],
      LifeStatisfaction: [],
      EatingBehavior: [],
      Sleeping: [],
      PhysicalActivity: [],
      Improvement: 0,
    };

    const defaultData = {
      userType: "PATIENT",
      provider: "local",
      confirmed: true,
      blocked: false,
      role: 1,
    };

    const patient = await strapi.plugins["users-permissions"].services.user.add(
      {
        ...body,
        ...defaultData,
        doctor,
      }
    );

    const user = patient.id;
    await strapi.services.statistics.create({ ...defaultStatiszticData, user });
    return patient;
  },

  async createTreatmentPlan({ body }) {
    return await strapi.services["treatment-plan"].create(body);
  },

  async createDocument({ body }) {
    return await strapi.services.document.create(body);
  },

  async createSurveyTemplate(body) {
    const surveyTemplateId = await strapi.services["survey-template"].create(
      body
    );
    return surveyTemplateId;
  },

  async getPatients(doctorId) {
    const patients = await strapi.plugins[
      "users-permissions"
    ].services.user.fetchAll({ doctor: doctorId });
    return patients;
  },

  async getUsersOfArticle({ articleId }) {
    const patientsWithArticles = await strapi.plugins[
      "users-permissions"
    ].services.user.fetchAll({ articles_null: false });

    const patientsWithGivenArticle = [];
    for (const patientWithArticle of patientsWithArticles) {
      const articlesOfPatient = patientWithArticle.articles;
      for (const article of articlesOfPatient) {
        if (article.id === Number(articleId)) {
          patientsWithGivenArticle.push(patientWithArticle);
        }
      }
    }
    return patientsWithGivenArticle;
  },

  async createAssignment({ articleId, userId }) {
    const articleEntity = await strapi.services.articles.findOne({
      id: articleId,
    });

    const userEntity = await strapi.plugins[
      "users-permissions"
    ].services.user.fetch({ id: userId });

    if (!articleEntity || !userEntity) {
      throw Boom.notFound(
        "can't find article or user for advising",
        articleId,
        userId
      );
    }

    const updatedValues = {};

    updatedValues.articles = userEntity.articles;

    // TODO normális ellenőrzés, hogy benne van-e
    if (updatedValues.articles.includes(articleEntity)) {
      throw Boom.forbidden("already assigned article to user");
    }

    updatedValues.articles.push(articleEntity);

    // const updatedUserEntity = await strapi.services.articles.update(
    //   { id: userId },
    //   updatedValues
    // );

    const entity = await strapi
      .query("user", "users-permissions")
      .update({ id: userId }, updatedValues);
    return entity;
  },

  async deleteAssignment({ articleId, userId }) {
    const userEntity = await strapi.plugins[
      "users-permissions"
    ].services.user.fetch({ id: userId });
    const articlesOfUser = userEntity.articles;
    const updatedArticles = articlesOfUser.filter(
      (article) => article.id !== Number(articleId)
    );
    const entity = await strapi
      .query("user", "users-permissions")
      .update({ id: userId }, { articles: updatedArticles });
    return entity;
  },
  async getSchedule(doctorId) {
    const patients = await strapi.plugins[
      "users-permissions"
    ].services.user.fetchAll({ doctor: doctorId }, [
      "treatment_plans",
      "treatment_plans.clinicVisits",
    ]);
    return patients;
  },
};
