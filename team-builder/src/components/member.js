import React from 'react';

function Member(props) {
  const {
    member: { name, email, role },
    
  } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <button>Edit Member</button>
    </div>
  );
}

export default Member;
