import React, { useState, useEffect } from 'react';

function Form(props) {
  const {
    memberToEdit,
    memberToEdit: { name, email, role },
    editMember,
    update,
  } = props;
  const [member, setMember] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    setMember({ name: name || '', email: email || '', role: role || '' });
  }, [memberToEdit]);

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    !memberToEdit
      ? props.addMemberToTeam(member)
      : editMember(memberToEdit, member);
    setMember({ name: '', email: '', role: '' });
    update('Add member to team');
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={member.name}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={member.email}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type='text'
            name='role'
            value={member.role}
            onChange={e => handleChange(e)}
          />
        </div>
        <button type='submit'>Add Member</button>
      </form>
    </div>
  );
}

export default Form;
