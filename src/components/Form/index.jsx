import React from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { collaboratorPropTypes, teamsPropTypes } from '../../utils/propTypes';
import InputText from '../InputText';
import Select from '../Select';
import Button from '../Button';

import './style.scss';

function Form({
  teams, setTeams, collaborator, setCollaborator, showForm,
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
      id: crypto.randomUUID(),
    });

    toast.success('Colaborador cadastrado com sucesso!');
  };

  return (
    <section className={`colaborator-section ${showForm[0]}`}>
      <form className="colaborator-form" onSubmit={handleSubmit}>
        <h2 className="title">Preencha os dados para criar o card do colaborador.</h2>
        <div className="form-input-container">
          <InputText
            id="form-name"
            label="Nome"
            placeholder="Digite seu nome"
            name="name"
            value={collaborator.name}
            handleChange={handleChange}
            isRequired
          />
          <InputText
            id="form-role"
            label="Cargo"
            placeholder="Digite seu cargo"
            name="role"
            value={collaborator.role}
            handleChange={handleChange}
            isRequired
          />
          <InputText
            id="form-image"
            label="Imagem"
            placeholder="Informe o endereço da imagem"
            name="image"
            value={collaborator.image}
            handleChange={handleChange}
            isRequired
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

Form.propTypes = {
  teams: PropTypes.shape(teamsPropTypes).isRequired,
  setTeams: PropTypes.func.isRequired,
  collaborator: PropTypes.shape(collaboratorPropTypes).isRequired,
  setCollaborator: PropTypes.func.isRequired,
  showForm: PropTypes.arrayOf(PropTypes.string).isRequired,
};
