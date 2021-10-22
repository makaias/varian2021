'use strict';

module.exports = {
    async getMe(user) {
        if (user){
            return user.id;
        }
        return null;
    },

    //body based on patient.create
    async createUser(body) {
        let patientId = await strapi.services.patient.create(body);
        return patientId;
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
        let surveyTemplateId = await strapi.services["survey-template"].create(body);
        return surveyTemplateId;
    },

    async patients(id) {
        let patientIds = await strapi.services.patient.findByDoctor(user.id);
        return patientIds;
    }
};
