'use strict';

module.exports = {
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
    }

};
