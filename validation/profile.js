const Validator = require('validator');

const isEmpty = require('./is-empty');

const validateProfileInput = data => {
  const errors = {};

  const mainFields = ['handle', 'status', 'skills'];
  const siteUrls = ['website', 'twitter', 'facebook', 'linkedin', 'youtube', 'instagram'];

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
  }

  mainFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';
    if (Validator.isEmpty(data[field])) {
      // const label = field === 'handle' ? 'Profile hanlde' : field[0].toUpperCase() + field.slice(1);
      // errors[field] = `${label} field is required`;
      errors[field] = 'This field is required';
    }
  });

  siteUrls.forEach(url => {
    if (!isEmpty(data[url]) && !Validator.isURL(data[url])) {
      errors[url] = 'Not a valid URL';
    }
  });

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateProfileInput;
