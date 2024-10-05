import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function InputColor({
  label, id, name, value, handleChange,
}) {
  return (
    <div className="input-color-container">
      <label htmlFor={id} className="text">{`${label}`}</label>
      <div className="input-color-content">
        <input
          id={id}
          type="color"
          name={name}
          className="input-color"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default InputColor;

InputColor.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
