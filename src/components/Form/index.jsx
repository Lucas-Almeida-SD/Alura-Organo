import React from 'react';
import PropTypes from 'prop-types';

import { collaboratorPropTypes, teamsPropTypes } from '../../utils/propTypes';

import './style.scss';
import CreateCollaboratorForm from '../CreateCollaboratorForm';
import CreateTeamForm from '../CreateTeamForm';

function Form({
  teams, setTeams, collaborator, setCollaborator, showForm,
}) {
  return (
    <section className={`create-form-section ${showForm[0]}`}>
      <CreateCollaboratorForm
        collaborator={collaborator}
        setCollaborator={setCollaborator}
        setTeams={setTeams}
        teams={teams}
      />
      <CreateTeamForm
        setTeams={setTeams}
      />
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
