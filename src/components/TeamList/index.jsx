import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team';

function TeamList({ teams }) {
  const teamValueList = Object.values(teams);

  return (
    <section className="team-list-section">
      <h2>Minha Organização</h2>
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
};
