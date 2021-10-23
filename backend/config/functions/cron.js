"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  "0 0 0 * * 1": async () => {
    let i = 0;
    let surveyTemplate = await strapi.services["survey-template"].findOne({
      _start: i++,
    });
    while (surveyTemplate) {
      let chronTargets = surveyTemplate.chronTargets;
      for (const target of chronTargets) {
        const user = target.value;
        const data = {
          survey_template: surveyTemplate,
          user_to_complete: user,
          complete: false,
        };
        let survey = await strapi.services.survey.create(data);
      }
    }
  },

  "0 0 0 * * *": async () => {
    let i = 0;
    let statistic = await strapi.services.statistics.findOne({ _start: i++ });
    while (statistic) {
      statistic.daysGone = statistic.daysGone + 1;
      if (
        !statistic.daysGone >= 0 &&
        statistic.badges.map((i) => i.value).contains("STARTED")
      ) {
        statistic.badge = [...statistic.badge, { type: "STARTED" }];
      }
      if (
        !statistic.daysGone >= 30 &&
        statistic.badges.map((i) => i.value).contains("ONE_MONTH")
      ) {
        statistic.badge = [...statistic.badge, { type: "ONE_MONTH" }];
      }
      if (
        !statistic.daysGone >= 60 &&
        statistic.badges.map((i) => i.value).contains("TWO_MONTH")
      ) {
        statistic.badge = [...statistic.badge, { type: "TWO_MONTH" }];
      }
      if (
        !statistic.daysGone >= 90 &&
        statistic.badges.map((i) => i.value).contains("THREE_MONTH")
      ) {
        statistic.badge = [...statistic.badge, { type: "THREE_MONTH" }];
      }
      if (
        !statistic.daysGone >= 120 &&
        statistic.badges.map((i) => i.value).contains("FINISHED")
      ) {
        statistic.badge = [...statistic.badge, { type: "FINISHED" }];
      }
      await strapi.services.statistics.update({ id: statistic.id }, statistics);
      statistic = await strapi.services.statistics.findOne({ _start: i++ });
    }
  },
};
