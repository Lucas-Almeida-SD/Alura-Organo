import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function InputText({
  label, placeholder, id, name, value, handleChange,
}) {
  return (
    <div className="input-text-container">
      <label htmlFor={id}>{`${label}`}</label>
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
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
};
