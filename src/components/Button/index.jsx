import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Button({
  isSubmit = false, label, handleClick = false, className = '',
}) {
  return (
    <button
      className={`button-form text${className ? ` ${className}` : ''}`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick || (() => {})}
    >
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  isSubmit: PropTypes.bool,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};
