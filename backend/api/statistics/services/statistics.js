"use strict";
const Boom = require("boom");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const existingTargets = [
  "socialInteraction",
  "sleeping",
  "lifeStatisfaction",
  "eatingBehavior",
  "physicalActivity",
];
const targetCodes = ["SOCIAL", "SLEEPING", "LIFE", "EATING", "PHYSICAL"];

const targetCodeMap = {
  SOCIAL: "socialInteraction",
  SLEEPING: "sleeping",
  LIFE: "lifeStatisfaction",
  EATING: "eatingBehavior",
  PHYSICAL: "physicalActivity",
};

function getLast(array, inverseIndex) {
  const realIndex = array.length - inverseIndex - 1;
  if (realIndex < 0) {
    return null;
  }
  return array[realIndex];
}

function calculateDifference(array) {
  const currentValue = getLast(array, 0);
  const previousValue = getLast(array, 1);
  if (currentValue?.value == null || previousValue?.value == null) {
    return null;
  }
  return currentValue.value - previousValue.value;
}

module.exports = {
  async addStatistic({ userId, statistic }) {
    let entity = await strapi.services.statistics.findOne({ user: userId });

    if (!entity) {
      throw Boom.notFound("can't find statistic for user ", userId);
    }

    const updatedValues = {};

    for (const key in statistic) {
      if (Object.hasOwnProperty.call(statistic, key)) {
        const element = statistic[key];

        if (!targetCodeMap[key]) {
          throw Boom.notAcceptable("statistic type doesn't exist: " + key, key);
        }

        const keyInStatistics = targetCodeMap[key];
        updatedValues[keyInStatistics] = [
          ...(entity[keyInStatistics] || []),
          { value: element },
        ];
      }
    }

    const diff = existingTargets
      .map((key) => calculateDifference(entity[key]))
      .filter((a) => a !== null)
      .reduce((prev, next) => next + prev, 0);
    updatedValues.improvement = diff;
    const updatedStatisticEntity = await strapi.services.statistics.update(
      { id: entity.id },
      updatedValues
    );

    return updatedStatisticEntity;
  },
};
