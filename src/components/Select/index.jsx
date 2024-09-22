import React from 'react';
import PropTypes from 'prop-types';

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
  teams: PropTypes.shape({
    programacao: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
      })).isRequired,
    }),
    frontEnd: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
      })).isRequired,
    }),
    dataScience: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
      })).isRequired,
    }),
    devops: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
      })).isRequired,
    }),
    uxAndDesign: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
      })).isRequired,
    }),
    mobile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
      })).isRequired,
    }),
    innovationAndManagement: PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
      })).isRequired,
    }),
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
