import React, { useState } from 'react';

import './App.scss';
import Banner from './components/Banner';
import Form from './components/Form';
import TeamList from './components/TeamList';

function App() {
  const [teams, setTeams] = useState({
    programacao: { name: 'programacao', label: 'Programação', collaborators: [] },
    frontEnd: { name: 'frontEnd', label: 'Front-End', collaborators: [] },
    dataScience: { name: 'dataScience', label: 'Data Science', collaborators: [] },
    devops: { name: 'devops', label: 'Devops', collaborators: [] },
    uxAndDesign: { name: 'uxAndDesign', label: 'UX e Design', collaborators: [] },
    mobile: { name: 'mobile', label: 'Mobile', collaborators: [] },
    innovationAndManagement: { name: 'innovationAndManagement', label: 'Inovação e Gestão', collaborators: [] },
  });

  const [collaborator, setCollaborator] = useState({
    name: '',
    role: '',
    image: '',
    team: teams[`${Object.keys(teams)[0]}`].name,
  });

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams}
        setTeams={setTeams}
        collaborator={collaborator}
        setCollaborator={setCollaborator}
      />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
