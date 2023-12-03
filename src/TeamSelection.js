// TeamSelection.js
import React from 'react';

function TeamSelection({ users, selectedUsers, onTeamCreate }) {
  return (
    <div className="team-selection">
      <h2>Team Selection</h2>
      <div className="selected-users">
        <h3>Selected Users</h3>
        {selectedUsers.length > 0 ? (
          <ul>
            {selectedUsers.map(userId => (
              <li key={userId}>{users.find(user => user._id === userId).first_name}</li>
            ))}
          </ul>
        ) : (
          <p>No users selected</p>
        )}
      </div>
      <button onClick={onTeamCreate}>Create Team</button>
    </div>
  );
}

export default TeamSelection;
