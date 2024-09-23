import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team';
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
  showForm: PropTypes.arrayOf(PropTypes.string).isRequired,
  setShowForm: PropTypes.func.isRequired,
};
