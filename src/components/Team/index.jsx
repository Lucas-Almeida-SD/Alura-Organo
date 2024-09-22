import React from 'react';
import PropTypes from 'prop-types';

import CollaboratorCard from '../CollaboratorCard';
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
  team: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    collaborators: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
