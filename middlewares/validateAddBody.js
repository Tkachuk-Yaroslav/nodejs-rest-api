const { HttpError } = require("../helpers");

const validateAddBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    // if (error) {
    //   next(HttpError(400, error.message));
    // }

    if (error) {
      const errorMessage = `missing required ${error.details[0].context.key} ${
        error.details[1]?.context?.key ?? ""
      } ${error.details[2]?.context?.key ?? ""} field`;

      next(HttpError(400, errorMessage));
    }
    next();
  };
  return func;
};

module.exports = validateAddBody;
