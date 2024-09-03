import React from 'react';
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

  return (
    <section className="colaborator-section">
      <form className="colaborator-form">
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <div className="form-input-container">
          <InputText id="name" label="Nome" placeholder="Digite seu nome" />
          <InputText id="cargo" label="Cargo" placeholder="Digite seu cargo" />
          <InputText id="imagem" label="Imagem" placeholder="Informe o endereço da imagem" />
          <Select dataList={teamList} label="Time" id="team" />
          <Button isSubmit label="Criar card" />
        </div>
      </form>
    </section>
  );
}

export default Form;
