'use strict';

const Boom = require("boom");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async getPatientData(patientId) {
        let patient = strapi.plugins["users-permissions"].services.user.fetch({id: patientId}, ["statistics"]);
        return patient?.statistics;
    }
};
