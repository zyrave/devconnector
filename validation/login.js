const Validator = require('validator');

const isEmpty = require('./is-empty');

const validateLoginInput = data => {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (Validator.isEmpty(data.email)) {
    // errors.email = 'Email field is required';
    errors.email = 'This field is required';
  }

  if (Validator.isEmpty(data.password)) {
    // errors.password = 'Password field is required';
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateLoginInput;
