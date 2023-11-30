const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateAddBody, validateUpdateBody } = require("../../middlewares");
const { addSchema } = require("../../shemas");

const router = express.Router();

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

router.post("/", validateAddBody(addSchema), ctrl.addContact);

// router.delete("/:contactId", ctrl.deleteById);

// router.put("/:contactId", validateUpdateBody(addSchema), ctrl.updateById);

module.exports = router;
