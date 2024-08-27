import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function InputText({ label, placeholder, id }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{`${label}`}</label>
      <input id={id} type="text" placeholder={placeholder} />
    </div>
  );
}

export default InputText;

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
