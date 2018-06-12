import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextAreaFieldGroup = ({ placeholder, name, value, onChange, error, info }) => (
  <div className="form-group">
    <textarea
      className={classnames('form-control form-control-lg', {
        'is-invalid': error,
      })}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
    {info && <small className="form-text text-muted">{info}</small>}
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

TextAreaFieldGroup.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
};

TextAreaFieldGroup.defaultProps = {
  placeholder: '',
  error: '',
  info: '',
};

export default TextAreaFieldGroup;
