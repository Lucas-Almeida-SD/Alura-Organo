import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team';
import { teamsPropTypes } from '../../utils/propTypes';
import addBtn from '../../assets/imagens/add.png';

import './style.scss';

function TeamList({ teams, showForm, setShowForm }) {
  const teamValueList = Object.values(teams);

  const handleClick = () => {
    const reversed = [...showForm].reverse();
    setShowForm(reversed);
  };

  return (
    <section className="team-list-section">
      <div className="title-container">
        <h2 className="title">Minha Organização</h2>
        <button
          className="add-colaborator-btn"
          type="button"
          aria-label="add collaborator"
          onClick={handleClick}
        >
          <img src={addBtn} alt="Botão para adicionar colaborador" />
        </button>
      </div>
      {teamValueList.map((teamValues) => <Team key={teamValues.name} team={teamValues} />)}
    </section>
  );
}

export default TeamList;

TeamList.propTypes = {
  teams: PropTypes.shape(teamsPropTypes).isRequired,
  showForm: PropTypes.arrayOf(PropTypes.string).isRequired,
  setShowForm: PropTypes.func.isRequired,
};
