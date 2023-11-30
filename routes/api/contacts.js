const express = require("express");
const ctrl = require("../../controllers/contacts");
const {
  validateAddBody,
  validateUpdateBody,
  isValidId,
  validateUpdateFavorite,
} = require("../../middlewares");
const { schemas } = require("../../shemas");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateAddBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateUpdateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateUpdateFavorite(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
