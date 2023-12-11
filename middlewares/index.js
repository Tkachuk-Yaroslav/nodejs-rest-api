const validateAddBody = require("./validateAddBody");
const validateUpdateBody = require("./validateUpdateBody");
const isValidId = require("./isValidId");
const validateUpdateFavorite = require("./validateUpdateFavorite");
const validateUser = require("./validateUser");
const authenticate = require("./authenticate");

module.exports = {
  validateAddBody,
  validateUpdateBody,
  isValidId,
  validateUpdateFavorite,
  validateUser,
  authenticate,
};
