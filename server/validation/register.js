const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateRegisterInput = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.occupation = !isEmpty(data.occupation) ? data.occupation : '';

  if (!Validator.isLength(data.username, { min: 2, max: 16 })) {
    errors.name = 'username must be between 2 and 16 characters';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.name = 'First Name field is required';
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.name = 'Last Name field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 3, max: 30 })) {
    errors.password = 'Password must be at least 3 characters';
  }
  if (Validator.isEmpty(data.occupation)) {
    errors.occupation = 'Occupation field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
