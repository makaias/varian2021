'use strict';

module.exports = {
    async getMe(ctx) {
        return await strapi.services.doctor.getMe(ctx.state.user);
    },

    async createUser(ctx) {
        if (ctx.state.user?.userType !== "DOCTOR") {
            return null;
        }
        return await strapi.services.doctor.createUser(ctx.request.body);
    },

    /**
     * example treatment plan in body:
     * {
     *     "treatmentPlan": [
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
     *      ]
     * }
     */
    async createTreatmentPlan(ctx) {
        if (ctx.state.user?.userType !== "DOCTOR") {
            return null;
        }
        return await strapi.services.doctor.createTreatmentPlan(ctx.request.body);
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
            return null;
        }
        return await strapi.services.doctor.createDocument(ctx.request.body);
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
            return null;
        }
        return await strapi.services.doctor.createSurveyTemplate(ctx.request.body);
    },

    async patients(ctx) {
        if (ctx.state.user?.userType !== "DOCTOR") {
            return null;
        }
        return await strapi.services.doctor.patients(ctx.state.user.id);
    }
}
