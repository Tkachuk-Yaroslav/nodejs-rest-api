const validateAddBody = require("./validateAddBody");
const validateUpdateBody = require("./validateUpdateBody");
const isValidId = require("./isValidId");
const validateUpdateFavorite = require("./validateUpdateFavorite");
const validateUser = require("./validateUser");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validateAddBody,
  validateUpdateBody,
  isValidId,
  validateUpdateFavorite,
  validateUser,
  authenticate,
  upload,
};
