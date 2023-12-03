// TeamDetails.js
import React from 'react';

function TeamDetails({ teamData }) {
  return (
    <div className="team-details">
      <h2>Team Details</h2>
      {teamData.length > 0 ? (
        <ul>
          {teamData.map(user => (
            <li key={user._id}>{`${user.first_name} ${user.last_name}`}</li>
          ))}
        </ul>
      ) : (
        <p>No team created yet</p>
      )}
    </div>
  );
}

export default TeamDetails;
