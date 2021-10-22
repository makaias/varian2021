'use strict';

module.exports = {
    async findByDoctor(doctorId) {
        let doctor = await strapi.services.user.findOne({id:doctorId}, ["patients"]);
        return doctor?.patients?.map(p => p.id);
    }
};
