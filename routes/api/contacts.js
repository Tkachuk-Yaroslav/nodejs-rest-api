const express = require("express");
const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

// router.post("/", async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const result = await contacts.addContact(req.body);

//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/", ctrl.addContact);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", ctrl.updateById);

module.exports = router;
