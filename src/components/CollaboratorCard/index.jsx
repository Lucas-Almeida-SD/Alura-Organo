import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import { collaboratorPropTypes } from '../../utils/propTypes';
import cardRemove from '../../assets/imagens/remove.png';

function CollaboratorCard({ collaborator, color, setTeams }) {
  const {
    name, role, image, team, id,
  } = collaborator;

  const handleClickRemoveCollaborator = () => {
    setTeams((previousValue) => {
      const currentTeam = previousValue[team];

      return {
        ...previousValue,
        [team]: {
          ...currentTeam,
          collaborators: currentTeam.collaborators.filter(
            (currentCollaborator) => currentCollaborator.id !== id,
          ),
        },
      };
    });
  };

  return (
    <div className="collaborator-card">
      <header className={`collaborator-header ${collaborator.team}`} style={{ backgroundColor: color }}>
        <div className="image-container">
          <img src={image} alt={`Colaborador(a) ${name}`} />
        </div>
      </header>
      <div className="collaborator-info">
        <h4 className="collaborator-name text">{name}</h4>
        <p className="collaborator-role text">{role}</p>
      </div>
      <button
        className="card-remove-btn"
        type="button"
        aria-label="Remove the card"
        onClick={handleClickRemoveCollaborator}
      >
        <img src={cardRemove} alt="Button to remove the card" />
      </button>
    </div>
  );
}

export default CollaboratorCard;

CollaboratorCard.propTypes = {
  collaborator: PropTypes.shape(collaboratorPropTypes).isRequired,
  color: PropTypes.string.isRequired,
  setTeams: PropTypes.func.isRequired,
};
