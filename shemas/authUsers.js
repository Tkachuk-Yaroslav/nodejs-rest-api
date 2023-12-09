const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().required(),

  password: Joi.string().required(),

  subscription: Joi.string(),

  //   token: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),

  password: Joi.string().required(),

  subscription: Joi.string(),

  //   token: Joi.string(),
});

const authSchemas = { registerSchema, loginSchema };

module.exports = authSchemas;

// {
//     password: {
//       type: String,
//       required: [true, "Set password for user"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//     },
//     subscription: {
//       type: String,
//       enum: ["starter", "pro", "business"],
//       default: "starter",
//     },
//     token: String,
//   },
//   { versionKey: false, timestamps: true }
// );
