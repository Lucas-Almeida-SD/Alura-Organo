import React from 'react';
import InputText from '../InputText';

import './style.scss';

function Form() {
  return (
    <section className="colaborator-section">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <div className="form-input-container">
          <InputText id="name" label="Nome" placeholder="Digite seu nome" />
          <InputText id="cargo" label="Cargo" placeholder="Digite seu cargo" />
          <InputText id="imagem" label="Imagem" placeholder="Informe o endereço da imagem" />
        </div>
      </form>
    </section>
  );
}

export default Form;
