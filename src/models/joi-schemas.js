import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required().example("Anders").regex(/^[A-Z][a-z]{2,}$/),
  lastName: Joi.string().required().example("Ingelsten").regex(/^[A-Z][a-z]{2,}$/),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net","ie"] } } ),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const JobSpec = {

  lat: Joi.string().required().regex(/^(-?[1-8]?\d(?:\.\d{1,8})?|90(?:\.0{1,8})?)$/),
  long: Joi.string().required().regex(/^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,8})?|180(?:\.0{1,8})?)$/),
  description: Joi.string().required()
};
//https://stackoverflow.com/questions/19715303/regex-that-accepts-only-numbers-0-9-and-no-characters
//https://stackoverflow.com/questions/3518504/regular-expression-for-matching-latitude-longitude-coordinates

export const WhereaboutSpec = {
  title: Joi.string().required(),
  category: Joi.string().required(),
};
