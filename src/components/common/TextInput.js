import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, onChange, placeholder, value, error, children }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
      {children}
    </div>
  );
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  error: '',
  children: null,
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};

export default TextInput;
