const Joi = require("joi");
const subscriptionList = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  email: Joi.string().required(),

  password: Joi.string().min(6).required(),

  subscription: Joi.string().valid(...subscriptionList),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),

  password: Joi.string().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

const authSchemas = { registerSchema, loginSchema, emailSchema };

module.exports = authSchemas;
