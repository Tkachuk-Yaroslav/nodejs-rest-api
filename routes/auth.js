const express = require("express");
const { validateUser, authenticate } = require("../middlewares");
const { authSchemas } = require("../shemas");
const ctrl = require("../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validateUser(authSchemas.registerSchema),
  ctrl.register
);

router.post("/login", validateUser(authSchemas.loginSchema), ctrl.login);

router.post("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
