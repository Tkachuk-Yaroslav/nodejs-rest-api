const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");
const { addSchema } = require("../shemas");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;

  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  // const { error } = addSchema.validate(req.body, {
  //   abortEarly: false,
  // });

  //   if (error) {
  //   const errorMessage = `missing required ${error.details[0].context.key} ${
  //     error.details[1]?.context?.key ?? ""
  //   } ${error.details[2]?.context?.key ?? ""}field`;
  //   throw HttpError(400, errorMessage);
  //   }

  const result = await contacts.addContact(req.body);

  res.status(201).json(result);
};

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "contact deleted" });
};

const updateById = async (req, res, next) => {
  const { contactId } = req.params;

  //   const { error } = addSchema.validate(req.body);

  //   if (error) {
  //     throw HttpError(400, "missing fields");
  //   }

  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
