import React, { useState } from 'react';
import Form from './components/Form';
import Members from './components/Members';

import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(false);
  const [formDescription, setFormDescription] = useState('Add member to team:');

  const addMemberToTeam = member => {
    setTeamMembers([...teamMembers, member]);
  };

  const editMember = (member, editedMember) => {
    const updatedTeamMembers = teamMembers.map(obj => {
      return JSON.stringify(obj) === JSON.stringify(member)
        ? editedMember
        : obj;
    });
    setTeamMembers(updatedTeamMembers);
    setMemberToEdit(false);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>Team Builder</h1>
        <h2>Form Description</h2>
        <Form
          addMemberToTeam={addMemberToTeam}
          memberToEdit={memberToEdit}
          editMember={editMember}
          update={setFormDescription}
        />
        <Members teamMembers={teamMembers} />
      </div>
    </div>
  );
}

export default App;
