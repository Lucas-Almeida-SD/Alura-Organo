import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function InputText({
  label, placeholder, id, name, value, handleChange, isRequired,
}) {
  return (
    <div className="input-text-container">
      <label htmlFor={id} className="text">{`${label}`}</label>
      <input
        id={id}
        type="text"
        name={name}
        className="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
}

export default InputText;

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
};
