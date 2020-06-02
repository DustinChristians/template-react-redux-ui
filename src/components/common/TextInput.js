import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  defaultValue,
  apiErrors,
  validationErrors,
  reference,
  children,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value || undefined}
            defaultValue={defaultValue || undefined}
            onChange={onChange}
            ref={reference}
          />
        </div>
        {children}
      </div>
      <div className="invalid-feedback">
        {apiErrors && <span className="invalid-feedback">{apiErrors}</span>}
        {validationErrors[name] && validationErrors[name].type === 'required' && (
          <span className="invalid-feedback">This field is required</span>
        )}
      </div>
    </>
  );
};

TextInput.defaultProps = {
  onChange: null,
  label: '',
  placeholder: '',
  value: '',
  defaultValue: '',
  apiErrors: '',
  validationErrors: null,
  reference: null,
  children: null,
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  apiErrors: PropTypes.string,
  validationErrors: PropTypes.shape({}),
  reference: PropTypes.func,
  children: PropTypes.node,
};

export default TextInput;
