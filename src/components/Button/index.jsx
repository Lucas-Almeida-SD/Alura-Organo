import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Button({ isSubmit, label }) {
  return (
    <button className="button-form" type={isSubmit ? 'submit' : 'button'}>{label}</button>
  );
}

export default Button;

Button.propTypes = {
  isSubmit: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
