import React from 'react';
import PropTypes from 'prop-types';
import hexRgb from 'hex-rgb';

import CollaboratorCard from '../CollaboratorCard';
import { teamPropTypes } from '../../utils/propTypes';

import './style.scss';

function Team({ team, setTeams }) {
  const {
    name, label, color, collaborators,
  } = team;

  if (collaborators.length < 1) {
    return null;
  }

  const handleColorChange = ({ target }) => {
    setTeams((previousValue) => ({ ...previousValue, [name]: { ...team, color: target.value } }));
  };

  const colorConvert = (opacity) => {
    const { red, green, blue } = hexRgb(color);
    return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
  };

  return (
    <section
      className={`team-section ${name}`}
      style={{ backgroundColor: colorConvert(0.15) }}
    >
      <div className="team-color-input-container">
        <input
          type="color"
          className="team-color-input"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <h3 className={`team-name subtitle ${name}`} style={{ borderColor: color }}>{label}</h3>
      <div className="collaborators-container">
        {collaborators.map((collaborator) => (
          <CollaboratorCard
            key={collaborator.name}
            collaborator={collaborator}
            color={color}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;

Team.propTypes = {
  team: PropTypes.shape(teamPropTypes).isRequired,
  setTeams: PropTypes.func.isRequired,
};
