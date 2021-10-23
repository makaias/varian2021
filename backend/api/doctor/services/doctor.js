"use strict";

module.exports = {
  //body based on patient.create
  async createUser(body, doctor) {
    // NOTE ezeket az adatokat később állítani

    const statistic = await strapi.services.statistics.create();
    const defaultData = {
      userType: "PATIENT",
      provider: "local",
      confirmed: true,
      blocked: false,
      role: 1,
      statistic,
    };

    const patient = await strapi.plugins["users-permissions"].services.user.add(
      {
        ...body,
        ...defaultData,
        doctor,
      }
    );
    return patient;
  },

  async createTreatmentPlan({ body }) {
    return await strapi.services["treatment-plan"].create(body);
  },

  async createDocument({ body }) {
    return await strapi.services.document.create(body);
  },

  async createSurveyTemplate({ body }) {
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
};
