import React from 'react';
import Member from './Member';

function Members(props) {
  const { teamMembers } = props;

  return (
    <div>
      {teamMembers.map(member => (
        <Member member={member} />
      ))}
    </div>
  );
}

export default Members;
