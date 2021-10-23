"use strict";
const Boom = require("boom");

function isPersonalDataComplete(user, newData) {
  const dataFieldsToValidate = [
    "username",
    "email",
    "password",
    "firstname",
    "surename",
    "date_of_birth",
  ];
  for (const dataFieldToValidate of dataFieldsToValidate) {
    if (!user[dataFieldToValidate] && !newData[dataFieldToValidate]) {
      return false;
    }
  }
  return true;
}

async function updateUser(id, data) {
  const entity = await strapi
    .query("user", "users-permissions")
    .update(id, data);
  return entity;
}

module.exports = {
  async update(user, data) {
    data["complete"] = isPersonalDataComplete(user, data);
    // console.log(data);
    if (data["complete"]) {
      return await updateUser({ id: user.id }, data);
    }
    throw Boom.notAcceptable("must fill all datafields", data);
  },
};
