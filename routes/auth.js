const express = require("express");
const { validateUser } = require("../middlewares");
const { authSchemas } = require("../shemas");
const ctrl = require("../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validateUser(authSchemas.registerSchema),
  ctrl.register
);

module.exports = router;
