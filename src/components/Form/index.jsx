import React, { useState } from 'react';
import InputText from '../InputText';
import Select from '../Select';
import Button from '../Button';

import './style.scss';

function Form() {
  const teamList = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const [collaborator, setCollaborator] = useState({
    name: '',
    role: '',
    image: '',
    team: teamList[0],
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setCollaborator({ ...collaborator, [name]: value });
  };

  return (
    <section className="colaborator-section">
      <form className="colaborator-form">
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
            dataList={teamList}
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
