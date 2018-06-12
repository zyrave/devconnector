const Validator = require('validator');

const isEmpty = require('./is-empty');

const validateRegisterInput = data => {
  const errors = {};

  const fields = ['name', 'email', 'password', 'password2'];

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.handle = 'Name must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Inconsistent password';
  }

  fields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';
    if (Validator.isEmpty(data[field])) {
      // const label = field[0].toUpperCase() + field.slice(1);
      // errors[field] = `${label} field is required`;
      errors[field] = 'This field is required';
    }
  });

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
