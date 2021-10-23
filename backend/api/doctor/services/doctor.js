"use strict";

module.exports = {
  //body based on patient.create
  async createUser(body, doctor) {
    // NOTE ezeket az adatokat később állítani
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
    return patient;
  },

  async createTreatmentPlan(body) {
    let planId = await strapi.services["treatment-plan"].create(body);
    return planId;
  },

  async createDocument(body) {
    let documentId = await strapi.services.document.create(body);
    return documentId;
  },

  async createSurveyTemplate(body) {
    let surveyTemplateId = await strapi.services["survey-template"].create(
      body
    );
    return surveyTemplateId;
  },

  async getPatients(doctorId) {
    let patients = strapi.query('user', 'users-permissions').find({ doctor: doctorId });
    return patients;
  },
};
