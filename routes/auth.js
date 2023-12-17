const express = require("express");
const { validateUser, authenticate, upload } = require("../middlewares");
const { authSchemas } = require("../shemas");
const ctrl = require("../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validateUser(authSchemas.registerSchema),
  ctrl.register
);

router.post("/login", validateUser(authSchemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
