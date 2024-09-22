import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function CollaboratorCard({ collaborator }) {
  const { name, role, image } = collaborator;

  return (
    <div className="collaborator-card">
      <header className={`collaborator-header ${collaborator.team}`}>
        <div className="image-container">
          <img src={image} alt={`Colaborador(a) ${name}`} />
        </div>
      </header>
      <div className="collaborator-info">
        <h4 className="collaborator-name">{name}</h4>
        <p className="collaborator-role">{role}</p>
      </div>
    </div>
  );
}

export default CollaboratorCard;

CollaboratorCard.propTypes = {
  collaborator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
};
