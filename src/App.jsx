import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import './App.scss';
import Banner from './components/Banner';
import Form from './components/Form';
import TeamList from './components/TeamList';

import utils from './utils/utils';
import Footer from './components/Footer';

function App() {
  const [teams, setTeams] = useState({
    programacao: {
      name: 'programacao', label: 'Programação', color: '#57C278', collaborators: utils.teamsDataList.programacao,
    },
    frontEnd: {
      name: 'frontEnd', label: 'Front-End', color: '#82CFFA', collaborators: utils.teamsDataList.frontEnd,
    },
    dataScience: {
      name: 'dataScience', label: 'Data Science', color: '#A6D157', collaborators: utils.teamsDataList.dataScience,
    },
    devops: {
      name: 'devops', label: 'Devops', color: '#E06B69', collaborators: utils.teamsDataList.devops,
    },
    uxAndDesign: {
      name: 'uxAndDesign', label: 'UX e Design', color: '#DB6EBF', collaborators: utils.teamsDataList.uxAndDesign,
    },
    mobile: {
      name: 'mobile', label: 'Mobile', color: '#FFBA05', collaborators: utils.teamsDataList.mobile,
    },
    innovationAndManagement: {
      name: 'innovationAndManagement', label: 'Inovação e Gestão', color: '#FF8A29', collaborators: utils.teamsDataList.innovationAndManagement,
    },
  });

  const [collaborator, setCollaborator] = useState({
    name: '',
    role: '',
    image: '',
    team: teams[`${Object.keys(teams)[0]}`].name,
    id: crypto.randomUUID(),
  });

  const [showForm, setShowForm] = useState(['display', 'hide']);

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams}
        setTeams={setTeams}
        collaborator={collaborator}
        setCollaborator={setCollaborator}
        showForm={showForm}
      />
      <TeamList teams={teams} setTeams={setTeams} showForm={showForm} setShowForm={setShowForm} />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
