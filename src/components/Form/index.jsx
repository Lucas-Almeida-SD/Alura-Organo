import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { collaboratorPropTypes, teamsPropTypes } from '../../utils/propTypes';

import './style.scss';
import CreateCollaboratorForm from '../CreateCollaboratorForm';
import CreateTeamForm from '../CreateTeamForm';
import Button from '../Button';

function Form({
  teams, setTeams, collaborator, setCollaborator, showForm,
}) {
  const COLLABORATOR_FORM = 'COLLABORATOR_FORM';
  const TEAM_FORM = 'TEAM_FORM';
  const SELECTED = 'selected';

  const [formSelected, setFormSelected] = useState(COLLABORATOR_FORM);

  const handleClickSelectCreateForm = (value) => {
    setFormSelected(value);
  };

  return (
    <section className={`create-form-section ${showForm[0]}`}>
      <div className="form-create-select-container">
        <Button
          label="Novo coloborador"
          className={formSelected === COLLABORATOR_FORM ? SELECTED : ''}
          handleClick={() => handleClickSelectCreateForm(COLLABORATOR_FORM)}
        />
        <Button
          label="Novo time"
          className={formSelected === TEAM_FORM ? SELECTED : ''}
          handleClick={() => handleClickSelectCreateForm(TEAM_FORM)}
        />
      </div>
      {
        formSelected === COLLABORATOR_FORM ? (
          <CreateCollaboratorForm
            collaborator={collaborator}
            setCollaborator={setCollaborator}
            setTeams={setTeams}
            teams={teams}
          />
        ) : (
          <CreateTeamForm
            setTeams={setTeams}
          />
        )
      }
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
