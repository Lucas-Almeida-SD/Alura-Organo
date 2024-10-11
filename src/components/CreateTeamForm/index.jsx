import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import InputText from '../InputText';
import InputColor from '../InputColor';
import Button from '../Button';

function CreateTeamForm({ setTeams }) {
  const [newTeam, setNewTeam] = useState({
    teamName: '',
    teamColor: '#6278f7',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setNewTeam((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { teamName, teamColor } = newTeam;
    const formatTeamName = teamName.split(' ').join('');

    setTeams((previousValue) => ({
      ...previousValue,
      [formatTeamName]: {
        name: formatTeamName, label: teamName, color: teamColor, collaborators: [],
      },
    }));

    setNewTeam({ teamName: '', teamColor: '#6278f7' });

    toast.success('Time cadastrado com sucesso!');
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h2 className="title">Preencha o dados para criar um novo time.</h2>
      <div className="form-input-container">
        <InputText
          id="form-new-team"
          label="Nome"
          name="teamName"
          placeholder="Novo time"
          value={newTeam.teamName}
          handleChange={handleChange}
          isRequired
        />

        <InputColor
          id="team-color-form-input"
          name="teamColor"
          value={newTeam.teamColor}
          label="Cor do time:"
          handleChange={handleChange}
        />

        <Button label="Cria time" isSubmit />
      </div>
    </form>
  );
}

export default CreateTeamForm;

CreateTeamForm.propTypes = {
  setTeams: PropTypes.func.isRequired,
};
