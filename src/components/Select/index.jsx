import React from 'react';
import PropTypes from 'prop-types';

import { teamsPropTypes } from '../../utils/propTypes';

import './style.scss';

function Select({
  teams, id, label, name, handleChange, value,
}) {
  return (
    <div className="select-container">
      <label htmlFor={id} className="text">{label}</label>
      <select className="text" name={name} id={id} value={value} onChange={handleChange}>
        {Object.keys(teams).map((teamKey) => (
          <option
            key={teamKey}
            value={teams[`${teamKey}`].name}
          >
            {teams[`${teamKey}`].label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

Select.propTypes = {
  teams: PropTypes.shape(teamsPropTypes).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
