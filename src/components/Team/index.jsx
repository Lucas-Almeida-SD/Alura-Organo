import React from 'react';
import PropTypes from 'prop-types';

import CollaboratorCard from '../CollaboratorCard';
import { teamPropTypes } from '../../utils/propTypes';
import './style.scss';

function Team({ team }) {
  const { name, label, collaborators } = team;

  if (collaborators.length < 1) {
    return null;
  }

  return (
    <section className={`team-section ${name}`}>
      <h3 className={`team-name subtitle ${name}`}>{label}</h3>
      <div className="collaborators-container">
        {collaborators.map((collaborator) => (
          <CollaboratorCard key={collaborator.name} collaborator={collaborator} />
        ))}
      </div>
    </section>
  );
}

export default Team;

Team.propTypes = {
  team: PropTypes.shape(teamPropTypes).isRequired,
};
