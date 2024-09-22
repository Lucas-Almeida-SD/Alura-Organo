import React from 'react';
import PropTypes from 'prop-types';

import InputText from '../InputText';
import Select from '../Select';
import Button from '../Button';

import './style.scss';

function Form({
  teams, setTeams, collaborator, setCollaborator,
}) {
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setCollaborator({ ...collaborator, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      [Object.keys(teams)[0]]: { name: teamName },
      [collaborator.team]: team,
    } = teams;

    setTeams({
      ...teams,
      [collaborator.team]: { ...team, collaborators: [...team.collaborators, collaborator] },
    });

    setCollaborator({
      name: '',
      role: '',
      image: '',
      team: teamName,
    });
  };

  return (
    <section className="colaborator-section">
      <form className="colaborator-form" onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <div className="form-input-container">
          <InputText
            id="form-name"
            label="Nome"
            placeholder="Digite seu nome"
            name="name"
            value={collaborator.name}
            handleChange={handleChange}
          />
          <InputText
            id="form-role"
            label="Cargo"
            placeholder="Digite seu cargo"
            name="role"
            value={collaborator.role}
            handleChange={handleChange}
          />
          <InputText
            id="form-image"
            label="Imagem"
            placeholder="Informe o endereço da imagem"
            name="image"
            value={collaborator.image}
            handleChange={handleChange}
          />
          <Select
            teams={teams}
            label="Time"
            id="form-team"
            name="team"
            value={collaborator.team}
            handleChange={handleChange}
          />
          <Button isSubmit label="Criar card" />
        </div>
      </form>
    </section>
  );
}

export default Form;
