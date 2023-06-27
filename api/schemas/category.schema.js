const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);

const createProductSchema = Joi.object({
  name: name.required(),
});

const updateProductSchema = Joi.object({
  name: name,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
